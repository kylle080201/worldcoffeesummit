import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

export async function POST(request: NextRequest, response: NextResponse) {
  let event: Stripe.Event;
  const signature = request.headers.get("stripe-signature");
  const body = Buffer.from(request.toString(), "utf-8");

  const header = stripe.webhooks.generateTestHeaderString({
    payload: body.toString(),
    secret: process.env.STRIPE_WEBHOOK_SECRET!,
  });

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature!,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
    console.log("✅ Success:", event.id);
    if (event.type === "checkout.session.completed") {
      console.log("💰 Payment Received!");
      return NextResponse.json({
        body,
        header,
        webhookSecret: process.env.STRIPE_WEBHOOK_SECRET!,
      });
    }
  } catch (error: any) {
    console.log(`❌ Error message: ${error.message}`);
    return NextResponse.json(
      {
        message: error.message,
        body,
        header,
        signature,
        webhookSecret: process.env.STRIPE_WEBHOOK_SECRET!,
      },
      {
        status: 400,
      }
    );
  }
}
