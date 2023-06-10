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

  try {
    event = stripe.webhooks.constructEvent(body, header, secret);
    if (event.type === "checkout.session.completed") {
      const paymentIntentId = await req.data.object.payment_intent;
      const checkoutSessionId = await req.data.object.id;

      try {
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
          .catch((error) => {
            return NextResponse.json(
              {
                message: error.message,
              },
              {
                status: 402,
              }
            );
          });
      } catch (error: any) {
        return NextResponse.json(
          {
            message: error.message,
          },
          {
            status: 402,
          }
        );
      }
      return NextResponse.json(
        {
          paymentIntentId,
          checkoutSessionId,
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
