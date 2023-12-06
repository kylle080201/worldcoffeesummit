import { NextRequest, NextResponse } from "next/server";
import connectMongo from "../../../utils/mongodb";
import Registrants from "../../../models/registrants";
import { registrantMailer } from "../../../utils/registrantMailer";

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const req = await request.json();
    await connectMongo();

    const newRegistrant = new Registrants(req.data);
    const registrants = await newRegistrant.save();

    if(registrants) {
      await registrantMailer(registrants)
    }

    return NextResponse.json(
      {
        registrants,
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
          message: `API: ${errorMessage}`,
        },
      },
      { status: 400 }
    );
  }
}
