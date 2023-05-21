import { NextResponse } from "next/server";

export async function GET() {
  const hello = "hello";
  console.log({ hello });
}

export async function POST(req: any) {
  console.log({ req });
}
