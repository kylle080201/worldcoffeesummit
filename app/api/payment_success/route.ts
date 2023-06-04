import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
  const req1 = await request.json();
  console.log(req1);
  const req2 = await request.json();
  console.log(req2);
  response = req2 + req1;
  return response.json();
}
