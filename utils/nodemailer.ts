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
    const isNetworkingAddonConfirmation = reqData.isNetworkingAddonConfirmation === true;
    const origin =
        typeof reqData.origin === "string" && reqData.origin.trim()
            ? reqData.origin.replace(/\/$/, "")
            : "https://www.worldcoffeeinnovationsummit.com";
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
                isNetworkingAddonConfirmation,
                origin,
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

const networkingBadgeDisplayName = (ticketName: string, isNetworkingAddonConfirmation: boolean) => {
    if (!isNetworkingAddonConfirmation) return ticketName;
    const stripped = String(ticketName).replace(/\s*\(Add-on\)\s*$/i, "").trim();
    return stripped || "Networking Soirée";
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
    isNetworkingAddonConfirmation,
    origin,
}: any) => {
    const badgeTicketName = networkingBadgeDisplayName(ticketName, isNetworkingAddonConfirmation === true);
    const baseUrl = (typeof origin === "string" && origin.trim()
        ? origin
        : "https://www.worldcoffeeinnovationsummit.com").replace(/\/$/, "");
    const networkingSoireeLink = `${baseUrl}/api/networking-soiree-checkout?ticket=${encodeURIComponent(
        String(id)
    )}&email=${encodeURIComponent(String(email))}`;
    const summitRegistrationLink = `${baseUrl}/register`;


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
                            <td width="100%" style="width:100%;">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100%;">
                                    <tr>
                                        <td width="100%" style="width:100%;">
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100%;">
                                                <tr>
                                                    <td width="100%" style="
                                padding: 0 0 0 0;
                                font-size: 16px;
                                line-height: 25px;
                                color: #232323;
                                width: 100%;
                                " class="padding message-content">
                                                        <!-- Banner: full-width tds + center + fixed 600 table (Outlook / Apple Mail / Gmail) -->
                                                        <center style="width:100%;text-align:center;">
                                                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;">
                                                            <tr>
                                                                <td align="center" width="100%" style="padding:0 0 24px 0;text-align:center;">
                                                                    <!--[if mso]>
                                                                    <table role="presentation" align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;border-collapse:collapse;"><tr><td align="center" style="padding:0;">
                                                                    <![endif]-->
                                                                    <table role="presentation" align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:100%;max-width:600px;border-collapse:collapse;margin:0 auto;">
                                                                        <tr>
                                                                            <td align="center" width="600" style="padding:0;text-align:center;">
                                                                                <img
                                                                                    width="600"
                                                                                    alt="World Coffee Innovation Summit London"
                                                                                    src="cid:${confirmationBannerCid}"
                                                                                    border="0"
                                                                                    style="display:inline-block;width:100%;max-width:600px;height:auto;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;margin:0;padding:0;vertical-align:bottom;"
                                                                                />
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                    <!--[if mso]>
                                                                    </td></tr></table>
                                                                    <![endif]-->
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        </center>
                                                        <div class="form-container">
                                                            <p>Dear ${firstName},</p>
                                                            ${isNetworkingSoireeOnly
            ? `<p>Thank you for registering for the Networking Soirée at the UK House of Lords.</p>`
            : `<p>Thank you for registering for the 4th World Coffee Innovation Summit London 2026.</p>`}
                                                            ${hasNetworkingSoiree && !isNetworkingSoireeOnly
            ? `<p>You&apos;re also confirmed for the Networking Soirée at the UK House of Lords.</p>`
            : ""}
                                                            <p>We look forward to welcoming you to London on 21-22 October 2026.</p>
                                                            ${isNetworkingSoireeOnly && !isNetworkingAddonConfirmation
            ? `
                                                            <p><b>Please note</b></p>
                                                            <p>The Networking Soirée pass is available to attendees with confirmed summit access.</p>
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
                                                            A two-hour, invite-only reception with global leaders and senior stakeholders</p>
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
                                                                    <div>${email}</div>
                                                                    <div>${badgeTicketName}</div>
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
