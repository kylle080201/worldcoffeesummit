import { NextRequest, NextResponse } from "next/server";
import Tickets from "../../../models/tickets";
import Stripe from "stripe";
import { encryptData } from "../../../utils/encryptor";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20" as any,
});

export async function POST(request: NextRequest, response: NextResponse) {
  const req = await request.json();
  const line_items = JSON.stringify(req.line_items);
  const formData = JSON.stringify(req.formData);
  const origin = req.origin;
  const encryptedFormData = encryptData(formData);
  try {
    const session = await stripe.checkout.sessions.create({
      custom_text: {
        submit: {
          message:
            "GLOBAL STRATAGEM GROUP LTD (VAT NO: GB 440 5676 94) is the operator of World Coffee Alliance (WCA) and the organiser of World Coffee Innovation Summit London",
        },
      },
      allow_promotion_codes: true,
      currency: "GBP",
      customer_email: req.formData.email,
      mode: "payment",
      payment_method_types: ["card"],
      line_items: JSON.parse(line_items),
      success_url: `${origin}/register/success?session_id={CHECKOUT_SESSION_ID}&line_items=${line_items}&buyer_data=${encryptedFormData}`,
      cancel_url: `${origin}/register`,
      metadata: {
        cc_email: 'events@worldcoffeealliance.com',
      },
    });
    const retrievedSession = await stripe.checkout.sessions.retrieve(
      session?.id
    );
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
