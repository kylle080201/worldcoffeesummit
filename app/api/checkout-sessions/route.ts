import { NextRequest, NextResponse } from "next/server";
import Tickets from "../../../models/tickets";
import Unpaid from "../../../models/unpaid";
import Stripe from "stripe";
import { encryptData } from "../../../utils/encryptor";
import connectMongo from "../../../utils/mongodb";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20" as any,
});

export async function POST(request: NextRequest, response: NextResponse) {
  const req = await request.json();
  const line_items = JSON.stringify(req.line_items);
  const formData = JSON.stringify(req.formData);
  const origin = req.origin;
  const encryptedFormData = encryptData(formData) ?? "";
  const encodedLineItems = encodeURIComponent(line_items);
  const encodedBuyerData = encodeURIComponent(encryptedFormData);
  const registrationFlow =
    typeof req.registration_flow === "string" ? req.registration_flow : "";
  const registrationFlowQuery =
    registrationFlow === "networking_addon"
      ? "&registration_flow=networking_addon"
      : "";
  try {
    const session = await stripe.checkout.sessions.create({
      custom_text: {
        submit: {
          message:
            "GLOBAL STRATAGEM GROUP LTD is the operator of World Coffee Alliance (WCA) and the organiser of World Coffee Innovation Summit London",
        },
      },
      allow_promotion_codes: true,
      currency: "GBP",
      customer_email: req.formData.email,
      mode: "payment",
      payment_method_types: ["card"],
      line_items: JSON.parse(line_items),
      success_url: `${origin}/register/success?session_id={CHECKOUT_SESSION_ID}&line_items=${encodedLineItems}&buyer_data=${encodedBuyerData}${registrationFlowQuery}`,
      cancel_url: `${origin}/register`,
      metadata: {
        cc_email: 'events@worldcoffeealliance.com',
      },
    });
    const retrievedSession = await stripe.checkout.sessions.retrieve(
      session?.id
    );

    // Track the registration as "unpaid" until the Stripe webhook confirms
    // payment. Failures here must never block the user from reaching Stripe.
    try {
      const rawEmail =
        typeof req?.formData?.email === "string" ? req.formData.email : "";
      const email = rawEmail.trim().toLowerCase();
      if (email && session?.id) {
        await connectMongo();
        await Unpaid.findOneAndUpdate(
          { email },
          {
            $set: {
              email,
              firstName: req?.formData?.firstName,
              lastName: req?.formData?.lastName,
              companyName: req?.formData?.companyName,
              jobTitle: req?.formData?.jobTitle,
              countryCode: req?.formData?.countryCode,
              mobileNumber: req?.formData?.mobileNumber,
              country: req?.formData?.country,
              line_items: req?.line_items,
              checkoutSessionId: session.id,
              updatedAt: new Date(),
            },
            $setOnInsert: { createdAt: new Date() },
          },
          { upsert: true, new: true, setDefaultsOnInsert: true }
        );
      }
    } catch (unpaidError: any) {
      const message =
        unpaidError instanceof Error ? unpaidError.message : String(unpaidError);
      console.log(`Unpaid upsert (checkout-sessions) failed: ${message}`);
    }

    return NextResponse.json({
      response: { retrievedSession, origin },
    });
  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
    });
  }
}

export async function PATCH(request: NextRequest, response: Response) {
  const req = await request.json();
  const paymentIntentId = req.paymentIntentId;
  const checkoutSessionId = req.checkoutSessionId;

  try {
    const getExistingTickets = await Tickets.find({
      $and: [{ paymentIntentId }, { checkoutSessionId }],
      deletedAt: { $exists: false },
    });
  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
    });
  }
}
