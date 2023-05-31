import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

export async function POST(req, res) {
  const data = await req.json();

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price: "price_1NCfrUKMWpUKzQVzcTWlkQsK",
          quantity: 1,
        },
      ],
      success_url: `http://localhost:3000/register/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: "http://localhost:3000/register",
      automatic_tax: {
        enabled: true,
      },
      custom_fields: [
        {
          key: "company",
          label: {
            type: "custom",
            custom: "Company",
          },
          type: "text",
        },
        {
          key: "jobTitle",
          label: {
            type: "custom",
            custom: "Job Title",
          },
          type: "text",
        },
      ],
    });

    return NextResponse.json({ session });
  } catch (error) {}
}
