import { NextRequest, NextResponse } from "next/server";
import connectMongo from "../../../utils/mongodb";
import Tickets from "../../../models/tickets";

export async function POST(request: NextRequest, response: NextResponse) {
  const req = await request.json();
  const paymentIntentId = req.paymentIntentId;
  const checkoutSessionId = req.checkoutSessionId;
  try {
    await connectMongo();

    const newTicket = new Tickets({ paymentIntentId, checkoutSessionId });
    const ticket = await newTicket.save();

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
    response = ticket;
    return NextResponse.json({ response });
  } catch (error: any) {
    return NextResponse.json(error.message);
  }
}
