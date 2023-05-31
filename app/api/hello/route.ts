import { NextResponse } from "next/server";

export async function POST(req, res) {
  const data = await req.json();
  return NextResponse.json(JSON.stringify(data.line_items));
}

// export async function POST(req: any, res: any) {
//   const email = req.email;
//   const lastName = req.lastName;
//   const firstName = req.firstName;
//   const companyName = req.companyName;
//   const subject = req.subject;
//   const message = req.message;
//   const data = await req.json();
//   return NextResponse.json(data);
// }
