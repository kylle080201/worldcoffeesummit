import { NextRequest, NextResponse } from "next/server";
import connectMongo from "../../../utils/mongodb";
import Tickets from "../../../models/tickets";

export async function POST(request: NextRequest, response: NextResponse) {
  const req = await request.json();
  const paymentIntentId = req.paymentIntentId;
  const checkoutSessionId = req.checkoutSessionId;
  try {
    console.log("Connecting to MONGODB");
    await connectMongo();
    console.log("Conntected");

    console.log("Creating document");
    const ticket = await Tickets.create({
      paymentIntentId,
      checkoutSessionId,
    });
    console.log("Document created");
    // if (ticket) {
    //   try {
    //     await fetch("/api/checkout-sessions", {
    //       method: "PATCH",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(ticket),
    //     })
    //       .then((response) => response.json())
    //       .catch((error) => {
    //         return NextResponse.json(
    //           {
    //             message: error.message,
    //           },
    //           {
    //             status: 402,
    //           }
    //         );
    //       });
    //   } catch (error) {}
    // }
    return NextResponse.json({ ticket });
  } catch (error: any) {
    return NextResponse.json(error.message);
  }
}
