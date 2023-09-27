import nodemailer from "nodemailer";

const user = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  host: "mail.four.mnnet.co.uk",
  port: 587,
  secure: false,
  auth: {
    user,
    pass,
  },
});

export const mailer = async (data: any) => {
  const reqData = await data;
  const firstName =
    reqData.firstName.charAt(0).toUpperCase() + reqData.firstName.slice(1);
  const lastName =
    reqData.lastName.charAt(0).toUpperCase() + reqData.lastName.slice(1);
  const jobTitle = reqData.jobTitle;
  const companyName = reqData.companyName;
  const countryCode = reqData.countryCode;
  const mobileNumber = reqData.mobileNumber;
  const email = reqData.email;

  try {
    const isNotificationEmailSent = await transporter.sendMail({
      from: `World Coffee Summit Team <${user}>`,
      to: "info@worldcoffeealliance.com",
      subject: "World Coffee Magazine 2023 Download",
      html: `
      <div>Hi Mavis,</div>
      <div>${firstName} ${lastName} has just downloaded the World Coffee Magazine 2023.</div>
      <br/>
      <div>Here are the Information: </div>
      <div>
          <div>First Name: ${firstName}</div>
          <div>Last Name: ${lastName}</div>
          <div>Job Title: ${jobTitle}</div>
          <div>Company Name: ${companyName}</div>
          <div>Mobile Number: ${countryCode} ${mobileNumber}</div>
          <div>Email: ${email}</div>
      </div>
      `
    });

    const isConfirmationEmailSent = await transporter.sendMail({
      from: `World Coffee Summit Team <${user}>`,
      to: `${email}`,
      subject: "World Coffee Magazine 2023 Download",
      html: `
      <h1 style="font-weight: bold;">Hi ${firstName},</h1>
      <br/>
      <div>Thank you for your interest in the World Coffee Magazine 2023.</div>
      <br/>
      <div>We are currently assessing the information you have submitted, and we will send you a digital copy of the World Coffee Magazine 2023 upon approval.</div>
      <br/>
      <div>Meanwhile, please follow us on <a style="text-decoration: underline;" target="_blank" href="https://www.linkedin.com/company/worldcoffeealliance/">LinkedIn</a> and <a style="text-decoration: underline;" target="_blank" href="https://twitter.com/WCoffeeAlliance">X (Twitter)</a> , and stay tuned with the updates.</div>
      <br/>
      <div>Best regards,</div>
      <div>World Coffee Summit Team</div>
      `
    });
    return {isNotificationEmailSent, isConfirmationEmailSent};
  } catch (error: any) {
    console.log(error);
  }
}