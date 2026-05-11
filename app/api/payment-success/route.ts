import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import Tickets from "../../../models/tickets";
import connectMongo from "../../../utils/mongodb";
import { mailer } from "../../../utils/nodemailer";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20" as any,
});

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
    (item: { price?: string }) => item?.price === "price_1TUHu5KMWpUKzQVzaZLAIhUe"
  );
  const isNetworkingSoireeOnly =
    hasNetworkingSoiree &&
    parsedLineItems.length === 1 &&
    selectedLineItem?.price === "price_1TUHu5KMWpUKzQVzaZLAIhUe";
  const isNetworkingAddonConfirmation =
    registrationFlow === "networking_addon" &&
    isNetworkingSoireeOnly &&
    hasNetworkingSoiree;

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
  let ticketName = "Summit Delegate"

  // ORIGINAL PRICES (commented out for test deployment)
  // switch (line_items[0].price) {
  //   case "price_1RJ3cYKMWpUKzQVzk2sR6LGo":
  //     ticketName = "Academics"
  //     break;
  //
  //   case "price_1TU6ZNKMWpUKzQVzFeZzO8Zd":
  //     ticketName = "NGO / Government / Academic"
  //     break;
  //
  //   case "price_1Rr81dKMWpUKzQVzBqtbsbxH":
  //     ticketName = "Corporates"
  //     break;
  //
  //   case "price_1Rb9T2KMWpUKzQVzaQhry4yi":
  //     ticketName = "Start Ups"
  //     break;
  //
  //   case "price_1RVYT2KMWpUKzQVzleFRk7vr":
  //     ticketName = "Service Providers"
  //     break;
  //
  //   case "price_1TU6d9KMWpUKzQVzbvEL5xFJ":
  //     ticketName = "Networking Soirée"
  //     break;
  // }

  // TESTING PRICES
  switch (selectedLineItem.price) {
    case "price_1TUHqbKMWpUKzQVzAYk5Ctmo":
      ticketName = "NGO / Government / Academic"
      break;

    case "price_1TUHsIKMWpUKzQVzGM1Fgqg5":
      ticketName = "Corporates"
      break;

    case "price_1TUHspKMWpUKzQVzeiuq5ATZ":
      ticketName = "Start Ups"
      break;

    case "price_1TUHtiKMWpUKzQVzQK1vBQ1O":
      ticketName = "Service Providers"
      break;

    case "price_1TUHu5KMWpUKzQVzaZLAIhUe":
      ticketName = "Networking Soirée"
      break;
  }

  try {
    await connectMongo();
    let ticket = await Tickets.findOne({
      checkoutSessionId,
      deletedAt: { $exists: false },
    });

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

    if (forceResend || !res.isEmailAccepted || res.isEmailAccepted === false) {
      const mailerPayload = {
        ...(typeof res.toObject === "function" ? res.toObject() : res),
        hasNetworkingSoiree,
        isNetworkingSoireeOnly,
        isNetworkingAddonConfirmation,
        origin: requestOrigin,
      };
      const mailerRes = await mailer(mailerPayload);
        if (mailerRes?.accepted?.length ?? 0 > 0) {
          await Tickets.findByIdAndUpdate(res._id, {
            $set: {
              isEmailAccepted: true,
            },
          });
        } else {
          await Tickets.findByIdAndUpdate(res._id, {
            $set: {
              isEmailAccepted: false,
            },
          });
        }
    }

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
        error: error?.message || "Unable to process payment success request",
      },
      {
        status: 400,
      }
    );
  }
}
