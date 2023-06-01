import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

export async function POST(request, response) {
  const req = await request.json();
  const line_items = [req.line_items];
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items,
      success_url: `http://localhost:3000/register/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: "http://localhost:3000/register",
    });
    response = await stripe.checkout.sessions.retrieve(session?.id);
    return NextResponse.json({ response });
  } catch (error) {
    console.log(error);
  }
}
