import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
import connectMongo from "../../../utils/mongodb";
import Downloads from "../../../models/downloads";
import { mailer } from "../../../utils/magazineMailer";

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const req = await request.json();
    await connectMongo();

    const newDownload = new Downloads(req.data);
    const downloads = await newDownload.save();

    if(downloads) {
      await mailer(downloads)
    }

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
