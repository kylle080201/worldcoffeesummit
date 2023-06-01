import Stripe from "stripe";
import { buffer } from "micro";
import { NextRequest, NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

export async function POST(request: NextRequest, response: Response) {
  let event;

  try {
    const signature = request.headers.get("stripe-signature");
    const body = await buffer(request);
    event = stripe.webhooks.constructEvent(
      body,
      signature!,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    console.log("✅ Success:", event.id);

    if (event.type === "checkout.session.completed") {
      console.log("💰 Payment Received!");
      return NextResponse.json({ message: "Success" + event.id });
    }
  } catch (error: any) {
    console.log(`❌ Error message: ${error.message}`);
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 400,
      }
    );
  }
}
