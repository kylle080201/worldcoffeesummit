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

export const registrantMailer = async (data: any) => {
  const reqData = await data;
  const firstName =
    reqData.firstName.charAt(0).toUpperCase() + reqData.firstName.slice(1);
  const lastName =
    reqData.lastName.charAt(0).toUpperCase() + reqData.lastName.slice(1);
  const jobTitle = reqData.jobTitle;
  const companyName = reqData.companyName;
  const sector = reqData.sector;
  const otherSector = reqData.otherSector;
  const businessEmail = reqData.businessEmail;
  const interestedIn = reqData.interestedIn;
  const countryCode = reqData.countryCode;
  const phoneNumber = reqData.phoneNumber;

  try {
    const isNotificationEmailSent = await transporter.sendMail({
      from: `World Coffee Summit Team <${user}>`,
      to: "info@worldcoffeealliance.com",
      // to: "kv.madrigal08@gmail.com",
      subject: "World Coffee Summit & Exhibition London 2024 Register Interest",
      html: `
      <div>Hi Mavis,</div>
      <div>${firstName} ${lastName} has just registered their interest.</div>
      <br/>
      <div>Here are the Information: </div>
      <div>
          <div>First Name: ${firstName}</div>
          <div>Last Name: ${lastName}</div>
          <div>Job Title: ${jobTitle}</div>
          <div>Company Name: ${companyName}</div>
          <div>Sector: ${sector !== 'Other' ? sector : otherSector}</div>
          <div>Business Email: ${businessEmail}</div>
          <div>Phone Number: ${countryCode} ${phoneNumber}</div>
          <div>Interested in: ${interestedIn}</div>
      </div>
      `
    });
    return isNotificationEmailSent;
  } catch (error: any) {
    console.log(error);
  }
}