import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
import connectMongo from "../../../utils/mongodb";
import Tickets from "../../../models/tickets";
import Unpaid from "../../../models/unpaid";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20" as any,
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

      // Best-effort cleanup of the matching unpaid record. The user has now
      // paid, so they should no longer be tracked as unpaid.
      try {
        if (checkoutSessionId) {
          await Unpaid.deleteOne({ checkoutSessionId });
        }
      } catch (cleanupError: any) {
        const message =
          cleanupError instanceof Error
            ? cleanupError.message
            : String(cleanupError);
        console.log(`Unpaid cleanup (webhook) failed: ${message}`);
      }

      if(paymentIntentId) {
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
      } else {
        const newTicket = new Tickets({ checkoutSessionId });
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
