import { NextRequest, NextResponse } from "next/server";
import Tickets from "../../../models/tickets";
import { useSearchParams } from 'next/navigation';
import connectMongo from "../../../utils/mongodb";

export async function POST(request: NextRequest, response: NextResponse) {
  const req = await request.json();
  const id = req.id
  
  try {
    await connectMongo();
    const res = await Tickets.findById({
      _id: id,
      deletedAt: { $exists: false },
    });
    if(!res) {
      return NextResponse.json({
        message: 'No registrant found'
      })
    } else {
      return NextResponse.json(
        {
          res,
        },
        {
          status: 200,
        }
      );
    }
  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
    });
  } 
}
