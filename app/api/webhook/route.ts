import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
import { buffer } from "micro";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

export async function POST(request: NextRequest, response: NextResponse) {
  let event: Stripe.Event;
  const signature = request.headers.get("stripe-signature");

  // const rawBody = await buffer(await request.json(), { encoding: "utf-8" });
  // const body = rawBody.toString();

  await fetch("/api/webhook", {
    method: "GET",
  })
    .then((response) => response.json())
    .then(async (data) => {
      try {
        event = stripe.webhooks.constructEvent(
          data,
          signature!,
          process.env.STRIPE_WEBHOOK_SECRET!
        );
        console.log("✅ Success:", event.id);
        if (event.type === "checkout.session.completed") {
          console.log("💰 Payment Received!");
          return NextResponse.json({
            data,
            signature,
            webhookSecret: process.env.STRIPE_WEBHOOK_SECRET!,
          });
        }
      } catch (error: any) {
        console.log(`❌ Error message: ${error.message}`);
        return NextResponse.json(
          {
            message: error.message,
            data,
            signature,
            webhookSecret: process.env.STRIPE_WEBHOOK_SECRET!,
          },
          {
            status: 400,
          }
        );
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
