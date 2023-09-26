import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
import connectMongo from "../../../utils/mongodb";
import Downloads from "../../../models/downloads";
import { mailer } from "../../../utils/magazineMailer";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

const secret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const req = await request.json();
    await connectMongo();

    const newDownload = new Downloads(req.data);
    const downloads = await newDownload.save();
    
    mailer(downloads)

    return NextResponse.json(
      {
        downloads,
      },
      {
        status: 200,
      }
    );
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
