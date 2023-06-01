import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

export async function POST(request: { json: () => any }, response: Response) {
  const req = await request.json();
  const line_items = [req.line_items];
  const formData = [req.formData];

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items,
      success_url: `http://localhost:3000/register/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: "http://localhost:3000/register",
    });
    const retrievedSession = await stripe.checkout.sessions.retrieve(
      session?.id
    );
    return NextResponse.json({
      response: { retrievedSession, formData },
    });
  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
    });
  }
}
