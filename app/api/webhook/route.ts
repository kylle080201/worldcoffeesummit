import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
import connectMongo from "../../../utils/mongodb";
import Tickets from "../../../models/tickets";
import { NextApiRequest } from "next";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

const secret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(request: NextApiRequest, response: NextResponse) {
  let event: Stripe.Event;
  const req = await buffer(request);
  const { data } = request.body;
  const signature = request.headers["stripe-signature"];
  const paymentIntentId = await data.object.payment_intent;
  const checkoutSessionId = await data.object.id;

  if (signature && secret) {
    try {
      event = stripe.webhooks.constructEvent(req, signature, secret);
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
}

const buffer = (req: NextApiRequest) => {
  return new Promise<Buffer>((resolve, reject) => {
    const chunks: Buffer[] = [];

    req.on("data", (chunk: Buffer) => {
      chunks.push(chunk);
    });

    req.on("end", () => {
      resolve(Buffer.concat(chunks));
    });

    req.on("error", reject);
  });
};
