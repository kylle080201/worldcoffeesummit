import { NextRequest, NextResponse } from "next/server";
import Tickets from "../../../models/tickets";
import { useSearchParams } from 'next/navigation';
import mongoose from "mongoose";

export async function POST(request: NextRequest, response: NextResponse) {
  const req = await request.json();
  const id = req.id
  
  try {
    const res = await Tickets.find({});
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
