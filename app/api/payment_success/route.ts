import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
  const req1 = await request.json();
  return NextResponse.json(req1);
}
