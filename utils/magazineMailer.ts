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
  const mobileNumber = reqData.mobileNumber;
  const email = reqData.email;

  try {
    const isEmailSent = await transporter.sendMail({
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
          <div>Mobile Number: ${mobileNumber}</div>
          <div>Email: ${email}</div>
      </div>
      `
    });
    return isEmailSent;
  } catch (error: any) {
    console.log(error);
  }
}