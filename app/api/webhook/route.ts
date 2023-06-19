import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
import connectMongo from "../../../utils/mongodb";
import Tickets from "../../../models/tickets";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

const secret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    let event: Stripe.Event;
    const signature = request.headers.get("stripe-signature")!;
    const payload = await request.text();

    event = stripe.webhooks.constructEvent(payload, signature, secret);
    interface EventDataObject {
      payment_intent: string;
      id: string;
    }
    // Access the required data from the event object
    const eventData = event.data.object as EventDataObject;
    const paymentIntentId = eventData.payment_intent;
    const checkoutSessionId = eventData.id;

    if (event.type === "checkout.session.completed") {
      // Handle the checkout session completed event
      await connectMongo();

      const newTicket = new Tickets({ paymentIntentId, checkoutSessionId });
      const ticket = await newTicket.save();

      return NextResponse.json(
        {
          ticket,
          signature,
        },
        {
          status: 200,
        }
      );
    }
  } catch (error: any) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    // On error, log and return the error message.
    if (!(error instanceof Error)) console.log(error);
    console.log(`❌ Error message: ${errorMessage}`);

    return NextResponse.json(
      {
        error: {
          message: `Webhook Error: ${errorMessage}`,
        },
      },
      { status: 400 }
    );
  }
}
