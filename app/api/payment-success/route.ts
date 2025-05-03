import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { isConstructorDeclaration } from "typescript";
import Tickets from "../../../models/tickets";
import connectMongo from "../../../utils/mongodb";
import { mailer } from "../../../utils/nodemailer";

export async function POST(request: NextRequest, res: NextResponse) {
  const req = await request.json();
  const checkoutSessionId = req.checkoutSessionId;
  try {
    await connectMongo();
    const res = await Tickets.findOne({
      checkoutSessionId,
      deletedAt: { $exists: false },
    });
    return NextResponse.json(
      {
        res,
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
  const origin = request.headers.get("origin");
  const req = await request.json();
  const checkoutSessionId = req.checkoutSessionId;
  const formData = req.decryptedFormData;
  const line_items = JSON.parse(req.line_items);
  let ticket 
  switch (line_items[0].price) {
    case "price_1RJ3cYKMWpUKzQVzk2sR6LGo":
      ticket = "Academics"
      break;

    case "price_1RJ3crKMWpUKzQVzn1ia1jtp":
      ticket = "Academics"
      break;

    case "price_1RJ3d6KMWpUKzQVzmvuy3Xfc":
      ticket = "Academics"
      break;

    case "price_1RJ3dMKMWpUKzQVz4b6c2UKj":
      ticket = "Academics"
      break;

    case "price_1RJHMAKMWpUKzQVzmHoSWU6L":
      ticket = "Academics"
      break;
  }

  try {
    await connectMongo();
    const getTickets = await Tickets.find({
      checkoutSessionId,
      deletedAt: { $exists: false },
    });
    if (getTickets.length > 0) {
      const res = await Tickets.findByIdAndUpdate(
        getTickets[0]._id,
        {
          $set: formData,
          ticket,
        },
        { new: true }
      );
      if (!res.isEmailAccepted || res.isEmailAccepted === false) {
        const mailerRes = await mailer(res);
        if (mailerRes?.accepted?.length ?? 0 > 0) {
          await Tickets.findByIdAndUpdate(res._id, {
            $set: {
              isEmailAccepted: true,
            },
          });
        } else {
          await Tickets.findByIdAndUpdate(res._id, {
            $set: {
              isEmailAccepted: false,
            },
          });
        }
      }

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
          error: "Invalid Session ID",
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
