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
  const country = reqData.country;
  const countryCode = reqData.countryCode;
  const mobileNumber = reqData.mobileNumber;
  const email = reqData.email;

  try {
    const isNotificationEmailSent = await transporter.sendMail({
      from: `World Coffee Innovation Summit Team <${user}>`,
      to: "info@worldcoffeealliance.com",
      subject: "World Coffee Magazine 2024 Issue 2 Download",
      html: `
      <div>Hi Mavis,</div>
      <div>${firstName} ${lastName} has just submitted the request to download the World Coffee Magazine 2024 Issue 2.</div>
      <br/>
      <div>Here are the Information: </div>
      <div>
          <div>First Name: ${firstName}</div>
          <div>Last Name: ${lastName}</div>
          <div>Job Title: ${jobTitle}</div>
          <div>Company Name: ${companyName}</div>
          <div>Country: ${country}</div>
          <div>Mobile Number: ${countryCode} ${mobileNumber}</div>
          <div>Email: ${email}</div>
      </div>
      `
    });

    const isConfirmationEmailSent = await transporter.sendMail({
      from: `World Coffee Innovation Summit Team <${user}>`,
      to: `${email}`,
      subject: "World Coffee Magazine 2024 Issue 2 Download",
      html: `
      <h1 style="font-weight: bold;">Hi ${firstName},</h1>
      <br/>
      <div>Thank you for your interest in the World Coffee Magazine 2024 Issue 2.</div>
      <br/>
      <div>If you are unable to download the magazine online, please contact us at<a href={"mailto:info@worldcoffeealliance.com"} target="_blank"> info@worldcoffeealliance.com</a></div>
      <br/>
      <div>Meanwhile, please follow us on <a style="text-decoration: underline;" target="_blank" href="https://www.linkedin.com/company/worldcoffeealliance/">LinkedIn</a> and <a style="text-decoration: underline;" target="_blank" href="https://twitter.com/WCoffeeAlliance">X (Twitter)</a> , and stay tuned with the updates.</div>
      <br/>
      <div>Best regards,</div>
      <div>World Coffee Innovation Summit Team</div>
      `
    });
    return {isNotificationEmailSent, isConfirmationEmailSent};
  } catch (error: any) {
    console.log(error);
  }
}