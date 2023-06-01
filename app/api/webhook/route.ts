import Stripe from "stripe";
import { buffer } from "micro";
import { NextRequest, NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

export async function POST(request: NextRequest, response: NextResponse) {
  let event: Stripe.Event;
  const webhookSecret: string = process.env.STRIPE_WEBHOOK_SECRET!;
  const signature = request.headers.get("stripe-signature");
  const body = await request.json();
  try {
    event = stripe.webhooks.constructEvent(body, signature!, webhookSecret);

    console.log("✅ Success:", event.id);

    if (event.type === "checkout.session.completed") {
      console.log("💰 Payment Received!");
      return NextResponse.json({ body, signature, webhookSecret });
    }
  } catch (error: any) {
    console.log(`❌ Error message: ${error.message}`);
    return NextResponse.json(
      { message: error.message, body, signature, webhookSecret },
      {
        status: 400,
      }
    );
  }
}
