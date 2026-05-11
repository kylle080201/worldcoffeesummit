import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import Tickets from "../../../models/tickets";
import connectMongo from "../../../utils/mongodb";
import { encryptData } from "../../../utils/encryptor";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20" as any,
});

const NETWORKING_SOIREE_LINE_ITEM = {
  // price: "price_1TU6d9KMWpUKzQVzbvEL5xFJ", // production
  price: "price_1TUHu5KMWpUKzQVzaZLAIhUe", // testing
  quantity: 1,
  tax_rates: [
    // "txr_1NBBYeKMWpUKzQVzkTT4Wib4", // production
    "txr_1NCgheKMWpUKzQVzZ761hX9q", // testing
  ],
};

const resolveRequestOrigin = (request: NextRequest): string => {
  const forwardedProto = request.headers.get("x-forwarded-proto");
  const forwardedHost = request.headers.get("x-forwarded-host");
  const host = forwardedHost ?? request.headers.get("host");
  if (host) {
    const proto =
      forwardedProto ?? (host.startsWith("localhost") ? "http" : "https");
    return `${proto}://${host}`.replace(/\/$/, "");
  }
  try {
    return new URL(request.url).origin;
  } catch {
    return "https://www.worldcoffeeinnovationsummit.com";
  }
};

const isValidObjectIdString = (value: string) => /^[a-f0-9]{24}$/i.test(value);

export async function GET(request: NextRequest) {
  const origin = resolveRequestOrigin(request);
  const ticketId = request.nextUrl.searchParams.get("ticket");
  const emailParam = request.nextUrl.searchParams.get("email");

  console.log("[networking-soiree-checkout] hit", { ticketId, emailParam, origin });

  if (!ticketId && !emailParam) {
    console.log("[networking-soiree-checkout] missing identifier, redirecting to /register");
    return NextResponse.redirect(`${origin}/register`);
  }

  try {
    await connectMongo();

    let ticket = null as any;
    if (ticketId && isValidObjectIdString(ticketId)) {
      ticket = await Tickets.findOne({
        _id: ticketId,
        deletedAt: { $exists: false },
      });
    }
    if (!ticket && emailParam) {
      ticket = await Tickets.findOne({
        email: emailParam,
        deletedAt: { $exists: false },
      })
        .sort({ createdAt: -1 })
        .exec();
    }

    if (!ticket || !ticket.email) {
      console.log("[networking-soiree-checkout] ticket not found", { ticketId, emailParam });
      return NextResponse.redirect(`${origin}/register`);
    }

    if (ticket.hasNetworkingSoiree) {
      console.log("[networking-soiree-checkout] ticket already has networking soiree", {
        ticketId: ticket._id?.toString?.(),
      });
      return NextResponse.redirect(`${origin}/`);
    }

    const formData = {
      firstName: ticket.firstName ?? "",
      lastName: ticket.lastName ?? "",
      companyName: ticket.companyName ?? "",
      jobTitle: ticket.jobTitle ?? "",
      country: ticket.country ?? "",
      mobileNumber: ticket.mobileNumber ?? "",
      email: ticket.email,
      confirmEmail: ticket.email,
    };

    const lineItems = [NETWORKING_SOIREE_LINE_ITEM];
    const encryptedFormData = encryptData(JSON.stringify(formData)) ?? "";
    const encodedLineItems = encodeURIComponent(JSON.stringify(lineItems));
    const encodedBuyerData = encodeURIComponent(encryptedFormData);

    const session = await stripe.checkout.sessions.create({
      custom_text: {
        submit: {
          message:
            "GLOBAL STRATAGEM GROUP LTD is the operator of World Coffee Alliance (WCA) and the organiser of World Coffee Innovation Summit London",
        },
      },
      allow_promotion_codes: true,
      currency: "GBP",
      customer_email: ticket.email,
      mode: "payment",
      payment_method_types: ["card"],
      line_items: lineItems,
      success_url: `${origin}/register/success?session_id={CHECKOUT_SESSION_ID}&line_items=${encodedLineItems}&buyer_data=${encodedBuyerData}&registration_flow=networking_addon`,
      cancel_url: `${origin}/register`,
      metadata: {
        cc_email: "events@worldcoffeealliance.com",
      },
    });

    if (!session?.url) {
      console.log("[networking-soiree-checkout] stripe session has no url", { sessionId: session?.id });
      return NextResponse.redirect(`${origin}/register`);
    }

    console.log("[networking-soiree-checkout] redirecting to stripe", {
      sessionId: session.id,
      ticketId: ticket._id?.toString?.(),
    });
    return NextResponse.redirect(session.url, { status: 303 });
  } catch (error: any) {
    console.log("[networking-soiree-checkout] error", error?.message ?? error);
    return NextResponse.redirect(`${origin}/register`);
  }
}
