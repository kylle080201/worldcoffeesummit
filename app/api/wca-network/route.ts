import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import connectMongo from "../../../utils/mongodb";
import WcaNetwork from "../../../models/wcaNetwork";

const user = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
  host: "mail.four.mnnet.co.uk",
  port: 587,
  secure: false,
  auth: {
    user,
    pass,
  },
});

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { firstName, lastName, email, company, areasOfInterest } = data ?? {};

    if (!firstName || !lastName || !email || !company) {
      return NextResponse.json(
        { error: { message: "Missing required fields." } },
        { status: 400 }
      );
    }

    await connectMongo();
    await WcaNetwork.create({
      firstName,
      lastName,
      email,
      company,
      areasOfInterest: Array.isArray(areasOfInterest) ? areasOfInterest : [],
    });

    await transporter.sendMail({
      from: `World Coffee Innovation Summit Team <${user}>`,
      to: "info@worldcoffeealliance.com",
      subject: "WCA Network Subscriber",
      html: `
        <div>${firstName} ${lastName} has just joined WCA Network</div>
        <br/>
        <div>Here are the Information:</div>
        <div><strong>First Name:</strong> ${firstName}</div>
        <div><strong>Last Name:</strong> ${lastName}</div>
        <div><strong>Company Name:</strong> ${company}</div>
        <div><strong>Work Email:</strong> ${email}</div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Unable to submit subscription.";

    return NextResponse.json({ error: { message } }, { status: 500 });
  }
}