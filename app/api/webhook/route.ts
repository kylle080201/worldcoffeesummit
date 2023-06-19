import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
import connectMongo from "../../../utils/mongodb";
import Tickets from "../../../models/tickets";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

const secret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: NextRequest, response: NextResponse) {
  let event: Stripe.Event;
  const req = await request.json();
  const body = await request.text();
  const signature = request.headers.get("stripe-signature") as string;
  const paymentIntentId = await req.data.object.payment_intent;
  const checkoutSessionId = await req.data.object.id;

  try {
    event = stripe.webhooks.constructEvent(body, signature, secret);
    if (event.type === "checkout.session.completed") {
      await connectMongo();

      const newTicket = new Tickets({ paymentIntentId, checkoutSessionId });
      const ticket = await newTicket.save();

      return NextResponse.json(
        {
          ticket,
          signature,
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
        signature,
        paymentIntentId,
        checkoutSessionId,
      },
      {
        status: 400,
      }
    );
  }
}
