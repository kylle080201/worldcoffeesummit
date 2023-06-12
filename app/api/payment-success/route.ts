import { NextRequest, NextResponse } from "next/server";
import Tickets from "../../../models/tickets";
import connectMongo from "../../../utils/mongodb";

export async function POST(request: NextRequest, res: NextResponse) {
  const req = await request.json();
  const checkoutSessionId = req.checkoutSessionId;
  try {
    await connectMongo();
    const data = await Tickets.findOne({
      checkoutSessionId,
      deletedAt: { $exists: false },
    });
    const id = data._id;
    return NextResponse.json(
      {
        id,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error,
      },
      {
        status: 400,
      }
    );
  }
}

export async function PATCH(request: NextRequest, res: NextResponse) {
  const req = await request.json();
  const checkoutSessionId = req.checkoutSessionId;
  const formData = req.decryptedFormData;
  try {
    await connectMongo();
    const getTickets = await Tickets.find({
      checkoutSessionId,
      deletedAt: { $exists: false },
    });
    if (getTickets.length === 1) {
      const res = await Tickets.findByIdAndUpdate(
        getTickets[0]._id,
        {
          $set: formData,
        },
        { new: true }
      );
      // if (res) {
      //   let nodemailer = require("nodemailer");
      //   const transporter = nodemailer.createTransport({
      //     service: "gmail",
      //     auth: {
      //       user,
      //       password
      //     }
      //   });
      // }
      return NextResponse.json(
        {
          res,
        },
        {
          status: 200,
        }
      );
    } else {
      return NextResponse.json(
        {
          error: "Duplicate Session Id",
        },
        {
          status: 400,
        }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        error,
      },
      {
        status: 400,
      }
    );
  }
}
