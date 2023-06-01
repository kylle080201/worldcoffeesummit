import Stripe from "stripe";
import { buffer } from "micro";
import { NextResponse } from "next/server";
import { headers } from "next/headers";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

export async function POST(request: any, response: Response) {
  let event;

  try {
    const headersList = headers();
    const signature = headersList.get("stripe-signature")!;
    const rawBody = await buffer(request);
    event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
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
