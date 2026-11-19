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
    const isSentToWca = await transporter.sendMail({
      from: `World Coffee Innovation Summit Team <${user}>`,
      to: "events@worldcoffeealliance.com",
      // to: "kv.madrigal08@gmail.com",
      subject: "WCIS27 London: Register Interest",
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

    const isSentToREgistrant = await transporter.sendMail({
      from: `World Coffee Innovation Summit Team <${user}>`,
      to: businessEmail,
      subject: "World Coffee Innovation Summit London 2026: Thank you for registering your interest!",
      html: `
      <div>Hello ${firstName},</div>
      <br/>
      <div>Thank you for registering your interest in the upcoming World Coffee Innovation Summit London.</div>
      <br/>
      <div>We’ll keep you informed.</div>
      <br/>
      <div>In the meantime, follow us on <a href="https://www.linkedin.com/company/worldcoffeealliance/" target="_blank">LinkedIn</a> for updates.</div>
      <br/>
      <div>If you have any questions, please feel free to contact us at <a href="mailto:events@worldcoffeealliance.com">events@worldcoffeealliance.com</a></div>
      <br/>
      <div>Best regards,</div>
      <div>World Coffee Innovation Summit Team</div>
      `
    });
    return {isSentToWca, isSentToREgistrant};
  } catch (error: any) {
    console.log(error);
  }
}