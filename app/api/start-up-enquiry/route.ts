import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import connectMongo from "../../../utils/mongodb";
import StartUpEnquiries from "../../../models/startUpEnquiries";

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
      mobile,
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
      !mobile ||
      !companyStage
    ) {
      return NextResponse.json(
        { error: { message: "Missing required fields." } },
        { status: 400 }
      );
    }

    await connectMongo();
    await StartUpEnquiries.create({
      firstName,
      lastName,
      jobTitle,
      companyName,
      companyWebsite,
      country,
      workEmail,
      mobile,
      companyStage,
      briefDescription: briefDescription || "",
    });

    await transporter.sendMail({
      from: `World Coffee Innovation Summit Team <${user}>`,
      to: "info@worldcoffeealliance.com",
      subject: "Start-Up Pass Application-World Coffee Innovation Summit London 2026",
      html: `
        <div>Hi ${firstName},</div>
        <br/>
        <div>${firstName} ${lastName} has just applied for Start-Up pass.</div>
        <br/>
        <div>Here are the Information:</div>
        <div><strong>First Name:</strong> ${firstName}</div>
        <div><strong>Last Name:</strong> ${lastName}</div>
        <div><strong>Job Title:</strong> ${jobTitle}</div>
        <div><strong>Company Name:</strong> ${companyName}</div>
        <div><strong>Company Website:</strong> ${companyWebsite}</div>
        <div><strong>Country:</strong> ${country}</div>
        <div><strong>Work Email:</strong> ${workEmail}</div>
        <div><strong>Mobile:</strong> ${mobile}</div>
        <div><strong>Company Stage:</strong> ${companyStage}</div>
        <div><strong>Brief Description:</strong> ${briefDescription || "N/A"}</div>
      `,
    });

    await transporter.sendMail({
      from: `World Coffee Innovation Summit Team <${user}>`,
      to: workEmail,
      subject: "Start-Up Pass Enquiry Received – World Coffee Innovation Summit London 2026",
      html: `
        <div>Dear ${firstName},</div>
        <br/>
        <div>
          Thank you for your interest in attending the World Coffee Innovation Summit London 2026 under the Start-Up Pass category.
        </div>
        <br/>
        <div>
          We have received your enquiry and our team will review your submission and get back to you shortly.
        </div>
        <br/>
        <div>Kind regards,</div>
        <div><strong>The Team @ World Coffee Innovation Summit</strong></div>
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
