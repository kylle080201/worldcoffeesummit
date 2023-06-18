import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
import connectMongo from "../../../utils/mongodb";
import Tickets from "../../../models/tickets";

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
      await connectMongo();
      const paymentIntentId = await req.data.object.payment_intent;
      const checkoutSessionId = await req.data.object.id;

      const newTicket = new Tickets({ paymentIntentId, checkoutSessionId });
      const ticket = await newTicket.save();

      return NextResponse.json(
        {
          ticket,
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
