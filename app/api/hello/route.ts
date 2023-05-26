import { NextResponse } from "next/server";

export async function GET() {
  const hello = "hello";
  console.log({ hello });
}

export async function POST(req: any) {
  const email = req.email;
  const lastName = req.lastName;
  const firstName = req.firstName;
  const companyName = req.companyName;
  const subject = req.subject;
  const message = req.message;
  console.log(companyName);
}
