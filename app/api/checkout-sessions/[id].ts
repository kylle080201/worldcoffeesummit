import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

export async function GET(req, res) {
  const id = req?.query.id;
  try {
    if (!id.startsWith("cs_")) {
      throw Error("Incorrect CheckoutSession Id");
    }
    const checkout_session = await stripe.checkout.sessions.retrieve(id);

    return NextResponse.json(checkout_session);
  } catch (error) {
    return NextResponse.json(error.message);
  }
}
