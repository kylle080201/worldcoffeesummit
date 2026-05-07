import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

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
    const {
      firstName,
      lastName,
      jobTitle,
      companyName,
      companyWebsite,
      country,
      workEmail,
      companyStage,
      briefDescription,
    } = data ?? {};

    if (
      !firstName ||
      !lastName ||
      !jobTitle ||
      !companyName ||
      !companyWebsite ||
      !country ||
      !workEmail ||
      !companyStage
    ) {
      return NextResponse.json(
        { error: { message: "Missing required fields." } },
        { status: 400 }
      );
    }

    await transporter.sendMail({
      from: `World Coffee Innovation Summit Team <${user}>`,
      to: "info@worldcoffeealliance.com",
      subject: "WCIS26 Start-Up pass enquiry",
      html: `
        <div>Hi team,</div>
        <br/>
        <div>A new Start-Up pass enquiry has been submitted.</div>
        <br/>
        <div><strong>First Name:</strong> ${firstName}</div>
        <div><strong>Last Name:</strong> ${lastName}</div>
        <div><strong>Job Title:</strong> ${jobTitle}</div>
        <div><strong>Company Name:</strong> ${companyName}</div>
        <div><strong>Company Website:</strong> ${companyWebsite}</div>
        <div><strong>Country:</strong> ${country}</div>
        <div><strong>Work Email:</strong> ${workEmail}</div>
        <div><strong>Company Stage:</strong> ${companyStage}</div>
        <div><strong>Brief Description:</strong> ${briefDescription || "N/A"}</div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: {
          message: error?.message ?? "Unable to submit enquiry.",
        },
      },
      { status: 500 }
    );
  }
}
