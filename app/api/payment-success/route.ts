import { waitUntil } from "@vercel/functions";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import Tickets from "../../../models/tickets";
import Unpaid from "../../../models/unpaid";
import connectMongo from "../../../utils/mongodb";
import { mailer } from "../../../utils/nodemailer";
import {
  getTicketNameForPriceId,
  isExhibitionPriceId,
  isNetworkingSoireePriceId,
} from "../../../utils/stripePrices";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20" as any,
});

/** Confirmation PATCH can send email + QR; allow headroom on Vercel. */
export const maxDuration = 60;

async function sendConfirmationEmailAndMarkSent(
  ticketId: unknown,
  mailerPayload: Record<string, unknown>
) {
  try {
    const mailerRes = await mailer(mailerPayload);
    await connectMongo();
    const accepted = mailerRes?.accepted?.length ?? 0;
    await Tickets.findByIdAndUpdate(ticketId, {
      $set: { isEmailAccepted: accepted > 0 },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`Confirmation email failed: ${message}`);
    try {
      await connectMongo();
      await Tickets.findByIdAndUpdate(ticketId, {
        $set: { isEmailAccepted: false },
      });
    } catch {
      // ignore secondary failure
    }
  }
}

export async function POST(request: NextRequest, res: NextResponse) {
  const req = await request.json();
  const checkoutSessionId = req.checkoutSessionId;
  try {
    await connectMongo();
    const res = await Tickets.findOne({
      checkoutSessionId,
      deletedAt: { $exists: false },
    });
    return NextResponse.json(
      {
        res,
      },
      {
        status: 200,
      }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error?.message || "Unable to load payment success details",
      },
      {
        status: 400,
      }
    );
  }
}

const resolveRequestOrigin = (request: NextRequest): string => {
  const explicitOrigin = request.headers.get("origin");
  if (explicitOrigin) return explicitOrigin.replace(/\/$/, "");

  const forwardedProto = request.headers.get("x-forwarded-proto");
  const forwardedHost = request.headers.get("x-forwarded-host");
  const host = forwardedHost ?? request.headers.get("host");
  if (host) {
    const proto = forwardedProto ?? (host.startsWith("localhost") ? "http" : "https");
    return `${proto}://${host}`.replace(/\/$/, "");
  }

  try {
    return new URL(request.url).origin;
  } catch {
    return "https://www.worldcoffeeinnovationsummit.com";
  }
};

export async function PATCH(request: NextRequest, res: NextResponse) {
  const req = await request.json();
  const checkoutSessionId = req.checkoutSessionId;
  const formData = req.decryptedFormData;
  const forceResend = req.forceResend === true;
  const registrationFlow =
    typeof req.registration_flow === "string" ? req.registration_flow : undefined;
  const requestOrigin = resolveRequestOrigin(request);
  const parsedLineItems = Array.isArray(req.line_items)
    ? req.line_items
    : JSON.parse(req.line_items ?? "[]");
  const selectedLineItem = parsedLineItems[0];
  const hasNetworkingSoiree = parsedLineItems.some(
    (item: { price?: string }) => isNetworkingSoireePriceId(item?.price)
  );
  const isNetworkingSoireeOnly =
    hasNetworkingSoiree &&
    parsedLineItems.length === 1 &&
    isNetworkingSoireePriceId(selectedLineItem?.price);
  const isNetworkingAddonConfirmation =
    registrationFlow === "networking_addon" &&
    isNetworkingSoireeOnly &&
    hasNetworkingSoiree;
  const isExhibitionRegistration = parsedLineItems.some(
    (item: { price?: string }) => isExhibitionPriceId(item?.price)
  );

  if (!checkoutSessionId || !selectedLineItem?.price) {
    return NextResponse.json(
      {
        error: "Missing checkout session or line item data",
      },
      {
        status: 400,
      }
    );
  }
  const ticketName = getTicketNameForPriceId(selectedLineItem.price);

  // PROD TESTING PRICES (£5 each — for live testing on production)
  // switch (selectedLineItem.price) {
  //   case "price_1TVyhwKMWpUKzQVzeGCqN8CQ":
  //     ticketName = "NGO / Government / Academic"
  //     break;
  //
  //   case "price_1RJHLYKMWpUKzQVzFS993eOR":
  //     ticketName = "Corporates"
  //     break;
  //
  //   case "price_1RJHKqKMWpUKzQVzqUg2mW67":
  //     ticketName = "Start Ups"
  //     break;
  //
  //   case "price_1RLn8fKMWpUKzQVzG5ZhHwZM":
  //     ticketName = "Service Providers"
  //     break;
  //
  //   case "price_1TVyh9KMWpUKzQVzYXpxkkUr":
  //     ticketName = "Networking Soirée"
  //     break;
  // }

  // TESTING PRICES
  // switch (selectedLineItem.price) {
  //   case "price_1TUHqbKMWpUKzQVzAYk5Ctmo":
  //     ticketName = "NGO / Government / Academic"
  //     break;
  //
  //   case "price_1TUHsIKMWpUKzQVzGM1Fgqg5":
  //     ticketName = "Corporates"
  //     break;
  //
  //   case "price_1TUHspKMWpUKzQVzeiuq5ATZ":
  //     ticketName = "Start Ups"
  //     break;
  //
  //   case "price_1TUHtiKMWpUKzQVzQK1vBQ1O":
  //     ticketName = "Service Providers"
  //     break;
  //
  //   case "price_1TUHu5KMWpUKzQVzaZLAIhUe":
  //     ticketName = "Networking Soirée"
  //     break;
  // }

  try {
    await connectMongo();
    let ticket = await Tickets.findOne({
      checkoutSessionId,
      deletedAt: { $exists: false },
    });

    // Replay / typo on session_id: match paid ticket by delegate email from buyer_data.
    if (!ticket) {
      const delegateEmail =
        typeof formData?.email === "string" ? formData.email.trim() : "";
      if (delegateEmail) {
        const escaped = delegateEmail.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        ticket = await Tickets.findOne({
          email: { $regex: new RegExp(`^${escaped}$`, "i") },
          deletedAt: { $exists: false },
        }).sort({ createdAt: -1 });
      }
    }

    // Fallback when webhook did not create the ticket yet.
    if (!ticket) {
      const checkoutSession = await stripe.checkout.sessions.retrieve(checkoutSessionId);
      ticket = await Tickets.create({
        checkoutSessionId,
        paymentIntentId:
          typeof checkoutSession.payment_intent === "string"
            ? checkoutSession.payment_intent
            : undefined,
      });
    }

    const res = await Tickets.findByIdAndUpdate(
      ticket._id,
      {
        $set: {
          ...formData,
          ticketName,
          hasNetworkingSoiree,
          ...(isExhibitionRegistration ? { event: "Exhibition" } : {}),
        },
      },
      { new: true }
    );

    if (!res) {
      return NextResponse.json(
        {
          error: "Unable to update registration details",
        },
        {
          status: 400,
        }
      );
    }

    // When the user just bought the Networking Soirée as a follow-up add-on,
    // back-fill the original delegate ticket(s) for this email so the database
    // reflects that they now have the soirée. Best-effort, never blocks.
    if (isNetworkingAddonConfirmation) {
      try {
        const delegateEmailRaw =
          (typeof res.email === "string" && res.email) ||
          (typeof formData?.email === "string" && formData.email) ||
          "";
        const delegateEmail = delegateEmailRaw.trim();
        if (delegateEmail) {
          await Tickets.updateMany(
            {
              email: delegateEmail,
              ticketName: { $ne: "Networking Soirée" },
              deletedAt: { $exists: false },
              _id: { $ne: res._id },
            },
            { $set: { hasNetworkingSoiree: true } }
          );
        }
      } catch (linkError: any) {
        const message =
          linkError instanceof Error ? linkError.message : String(linkError);
        console.log(`Networking soirée back-fill failed: ${message}`);
      }
    }

    const shouldSendEmail =
      forceResend || !res.isEmailAccepted || res.isEmailAccepted === false;
    const mailerPayload = shouldSendEmail
      ? {
          ...(typeof res.toObject === "function" ? res.toObject() : res),
          hasNetworkingSoiree,
          isNetworkingSoireeOnly,
          isNetworkingAddonConfirmation,
          origin: requestOrigin,
        }
      : null;

    // Payment succeeded and the registration is finalised — remove any
    // matching unpaid entry for this email. Best-effort, never blocks.
    try {
      const paidEmailRaw =
        (typeof res.email === "string" && res.email) ||
        (typeof formData?.email === "string" && formData.email) ||
        "";
      const paidEmail = paidEmailRaw.trim().toLowerCase();
      if (paidEmail) {
        await Unpaid.deleteOne({ email: paidEmail });
      }
    } catch (cleanupError: any) {
      const message =
        cleanupError instanceof Error
          ? cleanupError.message
          : String(cleanupError);
      console.log(`Unpaid cleanup (payment-success) failed: ${message}`);
    }

    const response = NextResponse.json({ res }, { status: 200 });

    if (mailerPayload) {
      waitUntil(sendConfirmationEmailAndMarkSent(res._id, mailerPayload));
    }

    return response;
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error?.message || "Unable to process payment success request",
      },
      {
        status: 400,
      }
    );
  }
}
