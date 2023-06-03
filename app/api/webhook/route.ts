import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
import { buffer } from "micro";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

export async function POST(request: NextRequest, response: NextResponse) {
  let event: Stripe.Event;
  const req = await request.json();
  const signature = request.headers.get("stripe-signature")!;
  const body = Buffer.from(JSON.stringify(req));
  const secret = process.env.STRIPE_WEBHOOK_SECRET!;

  const header = stripe.webhooks.generateTestHeaderString({
    payload: JSON.stringify(req),
    secret,
  });

  try {
    event = stripe.webhooks.constructEvent(body, header, secret);

    console.log("✅ Success:", event.id);
    if (event.type === "checkout.session.completed") {
      console.log("💰 Payment Received!");
      return NextResponse.json({
        body,
        signature,
        secret,
      });
    }
  } catch (error: any) {
    console.log(`❌ Error message: ${error.message}`);
    return NextResponse.json(
      {
        message: error.message,
        body,
        header,
        headers: JSON.stringify(request.headers),
        signature,
        typesignature: typeof signature,
        secret,
      },
      {
        status: 400,
      }
    );
  }
}
