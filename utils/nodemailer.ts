import nodemailer from "nodemailer";
import path from "path";

const user = process.env.EMAIL;
const confirmationBannerPath = path.join(
    process.cwd(),
    "images",
    "Banner for Confirmation Email.jpg"
);
const confirmationBannerCid = "confirmation-email-banner";
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
    const ticketName = reqData.ticketName;
    const email = reqData.email;
    const firstName =
        reqData.firstName.charAt(0).toUpperCase() + reqData.firstName.slice(1);
    const lastName =
        reqData.lastName.charAt(0).toUpperCase() + reqData.lastName.slice(1);
    const id = reqData._id;
    const jobTitle = reqData.jobTitle;
    const companyName = reqData.companyName;
    const hasNetworkingSoiree = reqData.hasNetworkingSoiree === true;
    const isNetworkingSoireeOnly = reqData.isNetworkingSoireeOnly === true;
    try {
        const isEmailSent = await transporter.sendMail({
            from: `World Coffee Innovation Summit Team <${user}>`,
            to: email,
            cc: "info@worldcoffeealliance.com",
            subject: "Registration Confirmed: World Coffee Innovation Summit London 2026",
            ...generateEmailContent({
                lastName,
                firstName,
                ticketName,
                id,
                email,
                jobTitle,
                companyName,
                hasNetworkingSoiree,
                isNetworkingSoireeOnly,
            }),
            attachments: [
                {
                    filename: "confirmation-banner.jpg",
                    path: confirmationBannerPath,
                    cid: confirmationBannerCid,
                },
                {
                    filename: "qr-code-downloadable.jpg", // Replace with your image file name
                    path: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://www.worldcoffeeinnovationsummit.com/pdf/${id}`, // Replace with the actual path of your image file
                    contentDisposition: "attachment", // Makes the attachment downloadable
                },
            ],
        });
        return isEmailSent;
    } catch (error: any) {
        console.log(error);
    }
};

const generateEmailContent = ({
    lastName,
    firstName,
    ticketName,
    id,
    email,
    jobTitle,
    companyName,
    hasNetworkingSoiree,
    isNetworkingSoireeOnly,
}: any) => {
    const networkingSoireeLink =
        "https://www.worldcoffeeinnovationsummit.com/register/form?line_items=%5B%7B%22price%22%3A%22price_1TUHu5KMWpUKzQVzaZLAIhUe%22%2C%22quantity%22%3A1%2C%22tax_rates%22%3A%5B%22txr_1NCgheKMWpUKzQVzZ761hX9q%22%5D%7D%5D";
    const summitRegistrationLink = "https://www.worldcoffeeinnovationsummit.com/register";


    const html = `<!DOCTYPE html>
    <html>

    <head>
        <title></title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <style type="text/css">
            body,
            table,
            td,
            a {
                -webkit-text-size-adjust: 100%;
                -ms-text-size-adjust: 100%;
            }

            table {
                border-collapse: collapse !important;
            }

            body {
                height: 100% !important;
                margin: 0 !important;
                padding: 0 !important;
                width: 100% !important;
            }

            @media screen and (max-width: 525px) {
                .wrapper {
                    width: 100% !important;
                    max-width: 100% !important;
                }

                .responsive-table {
                    width: 100% !important;
                }

                .padding {
                    padding: 10px 5% 15px 5% !important;
                }

                .section-padding {
                    padding: 0 15px 50px 15px !important;
                }
            }

            .form-container {
                margin-bottom: 24px;
                padding: 20px;
                border: 1px dashed #ccc;
            }

            .form-heading {
                color: #2a2a2a;
                font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
                font-weight: 400;
                text-align: left;
                line-height: 20px;
                font-size: 18px;
                margin: 0 0 8px;
                padding: 0;
            }

            .form-answer {
                color: #2a2a2a;
                font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
                font-weight: 300;
                text-align: left;
                line-height: 20px;
                font-size: 16px;
                margin: 0 0 24px;
                padding: 0;
            }

            div[style*="margin: 16px 0;"] {
                margin: 0 !important;
            }

            .header-image {
                width: 100%;
                max-width: 100%;
                margin: 0 0 20px 0;
            }

            .header-image img {
                width: 100% !important;
                max-width: 100%;
                height: auto !important;
                display: block;
            }

            .qr-code {
                display: flex;
                flex-direction: row;
                gap: 20px;
            }

            .qr-code .qr-info {
                display: grid;
                grid-column: 1;
                margin-left: 0.5rem;
            }
        </style>
    </head>

    <body style="margin: 0 !important; padding: 0 !important; background: #fff">
        <div style="
            display: none;
            font-size: 1px;
            color: #fefefe;
            line-height: 1px;
            max-height: 0px;
            max-width: 0px;
            opacity: 0;
            overflow: hidden;
        "></div>
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
                <td bgcolor="#ffffff" align="center" style="padding: 10px 15px 30px 15px" class="section-padding">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px"
                        class="responsive-table">
                        <tr>
                            <td>
                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td>
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                <tr>
                                                    <td style="
                                padding: 0 0 0 0;
                                font-size: 16px;
                                line-height: 25px;
                                color: #232323;
                                " class="padding message-content">
                                                        <div class="header-image">
                                                            <img
                                                                width="600"
                                                                alt="World Coffee Innovation Summit London"
                                                                src="cid:${confirmationBannerCid}"
                                                                style="display:block;width:100%;max-width:600px;height:auto;border:0;outline:none;"
                                                            />
                                                        </div>
                                                        <div class="form-container">
                                                            <p>Dear ${firstName},</p>
                                                            ${isNetworkingSoireeOnly
            ? `<p>Thank you for registering for the Networking Soirée at the UK House of Lords.</p>`
            : `<p>Thank you for registering as a delegate to the World Coffee Innovation Summit London 2026.</p>`}
                                                            ${hasNetworkingSoiree && !isNetworkingSoireeOnly
            ? `<p>You&apos;re also confirmed for the Networking Soirée at the UK House of Lords.</p>`
            : ""}
                                                            <p>We look forward to welcoming you to London on 21-22 October 2026.</p>
                                                            ${isNetworkingSoireeOnly
            ? `
                                                            <p><b>Please note</b></p>
                                                            <p>The Networking Soirée is exclusively for registered summit delegates.</p>
                                                            <p>If you haven&apos;t yet registered for the <b>World Coffee Innovation Summit London 2026</b>, you can do so below.</p>
                                                            <p>
                                                                <a target="_blank"
                                                                    href="${summitRegistrationLink}"
                                                                    style="display:inline-block;background:#5f8f25;color:#ffffff;text-decoration:none;font-weight:700;padding:10px 18px;border-radius:6px;">
                                                                    Register Now
                                                                </a>
                                                            </p>
                                                            `
            : ""}
                                                            ${!hasNetworkingSoiree
            ? `
                                                            <p><b>Join the Networking Soirée at the UK House of Lords</b><br>
                                                            A two-hour, invite-only reception with senior stakeholders</p>
                                                            <p><i>Limited capacity</i></p>
                                                            <p>
                                                                <a target="_blank"
                                                                    href="${networkingSoireeLink}"
                                                                    style="display:inline-block;background:#5f8f25;color:#ffffff;text-decoration:none;font-weight:700;padding:10px 18px;border-radius:6px;">
                                                                    Add Networking Soirée
                                                                </a>
                                                            </p>
                                                            `
            : ""}
                                                            <p><b>Your attendee badge details</b></p>
                                                            <div class="qr-code">
                                                                <div>
                                                                <img alt="QR Code" src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.worldcoffeeinnovationsummit.com/pdf/${id}" />
                                                                </div>
                                                                <div class="qr-info">
                                                                    <div>${firstName} ${lastName}</div>
                                                                    <div>${jobTitle}</div>
                                                                    <div>${companyName}</div>
                                                                    ${isNetworkingSoireeOnly ? "" : `<div>${email}</div>`}
                                                                    ${isNetworkingSoireeOnly ? "" : `<div>${ticketName}</div>`}
                                                                </div>
                                                            </div>
                                                            <p><b>Event Details</b></p>
                                                            <p><b>Date</b><br>21-22 October 2026</p>
                                                            <p><b>Venue</b></p>
                                                            <p><b>Summit</b><br>QEII Centre, Broad Sanctuary, London SW1P 3EE</p>
                                                            ${hasNetworkingSoiree
            ? `<p><b>Networking Soirée</b><br>UK House of Lords, Houses of Parliament, Parliament Sq, London SW1A 0PW</p>`
            : ""}
                                                            <p>For the latest information on the summit, please visit
                                                            <a target='_blank'
                                                                    href='https://www.worldcoffeeinnovationsummit.com/'>www.worldcoffeeinnovationsummit.com</a></p>
                                                            <p>Follow us on
                                                            <a target='_blank'
                                                                    href='https://www.linkedin.com/company/worldcoffeealliance/'>LinkedIn</a>
                                                                and X <a target='_blank'
                                                                    href='https://twitter.com/WCoffeeAlliance'>@WCoffeeAlliance</a>
                                                            </p>
                                                            <p>If you have any questions, please contact us at:
                                                                <a href="mailto:events@worldcoffeealliance.com"> events@worldcoffeealliance.com</a>
                                                            </p>
                                                            <p>We look forward to seeing you in London.</p>
                                                            <p>Kind regards,<br><br>
                                                                <b>The Team @ World Coffee Innovation Summit</b>
                                                            </p>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>

    </html>`

    return {
        html,
    };
};
