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
  let ticketName 

  // ORIGINAL PRICES
  switch (line_items[0].price) {
    case "price_1RJ3cYKMWpUKzQVzk2sR6LGo":
      ticketName = "Academics"
      break;

    case "price_1SHoZnKMWpUKzQVzPtUcB2Ey":
      ticketName = "NGOs, Co-operatives, Policy Makers"
      break;

    case "price_1SHoadKMWpUKzQVzCk3pc4oP":
      ticketName = "Corporates"
      break;

    case "price_1Rb9T2KMWpUKzQVzaQhry4yi":
      ticketName = "Start Ups"
      break;

    case "price_1SHogiKMWpUKzQVzWQNaw3lL":
      ticketName = "Service Providers"
      break;
  }

  // PROD TESTING PRICES
  // switch (line_items[0].price) {
  //     case "price_1RLRZdKMWpUKzQVzxEOPwVBA":
  //       ticketName = "Academics"
  //       break;
  
  //     case "price_1RLn53KMWpUKzQVzP93RGG0I":
  //       ticketName = "NGOs, Co-operatives, Policy Makers"
  //       break;
  
  //     case "price_1RLn7BKMWpUKzQVzItm3kmzE":
  //       ticketName = "Corporates"
  //       break;
  
  //     case "price_1RLn8FKMWpUKzQVz5TAnpeGo":
  //       ticketName = "Start Ups"
  //       break;
  
  //     case "price_1RLn8fKMWpUKzQVzG5ZhHwZM":
  //       ticketName = "Service Providers"
  //       break;
  //   }

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
          ticketName,
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
