import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

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

  async function insertToDb(paymentIntentId: any, checkoutSessionId: any) {
    await fetch("/api/payment-success", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        paymentIntentId,
        checkoutSessionId,
      }),
    })
      .then((response) => response.json())
      .then(async (data) => {
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  try {
    event = stripe.webhooks.constructEvent(body, header, secret);
    if (event.type === "checkout.session.completed") {
      const paymentIntentId = await req.data.object.payment_intent;
      const checkoutSessionId = await req.data.object.id;

      const data = await insertToDb(paymentIntentId, checkoutSessionId);

      return NextResponse.json(
        {
          data,
        },
        {
          status: 200,
        }
      );
    }
  } catch (error: any) {
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
