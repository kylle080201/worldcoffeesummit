import Stripe from "stripe";
import { buffer } from "micro";
import { NextResponse } from "next/server";
import { headers } from "next/headers";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

export default async function POST(request: Request, response: Response) {
  let event;
  try {
    const headersList = headers();
    const signature = headersList.get("stripe-signature");

    event = stripe.webhooks.constructEvent(
      request,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );

    console.log("✅ Success:", event.id);

    if (event.type === "checkout.session.completed") {
      console.log("💰 Payment Received!");
    }
  } catch (error) {
    console.log(`❌ Error message: ${error.message}`);
    NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 400,
      }
    );
  }
}
