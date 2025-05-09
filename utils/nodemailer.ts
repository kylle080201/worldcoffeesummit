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
    const ticketName = reqData.ticketName;
    const email = reqData.email;
    const firstName =
        reqData.firstName.charAt(0).toUpperCase() + reqData.firstName.slice(1);
    const lastName =
        reqData.lastName.charAt(0).toUpperCase() + reqData.lastName.slice(1);
    const id = reqData._id;
    const jobTitle = reqData.jobTitle;
    const companyName = reqData.companyName;
    try {
        const isEmailSent = await transporter.sendMail({
            from: `World Coffee Innovation Summit Team <${user}>`,
            to: email,
            cc: "info@worldcoffeealliance.com",
            subject: "Thank you for registering for World Coffee Innovation Summit London 23-24 October 2025",
            ...generateEmailContent({
                lastName,
                firstName,
                ticketName,
                id,
                email,
                jobTitle,
                companyName,
            }),
            attachments: [
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
}: any) => {


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
                width: 20%;
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
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px"
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
                                                            <img width="500"
                                                                src="https://worldcoffeealliance.com/wp-content/uploads/2025/04/Confirmation-Email-Banner-scaled.jpg" />
                                                        </div>
                                                        <div class="form-container">
                                                            <p> Hi ${firstName},</p>
                                                            <p>Thank you for registering as a delegate to the World Coffee Innovation Summit London 2025.</p>
                                                            <p>We look forward to welcoming you in London on 23-24th October 2025.</p>
                                                            <p>To collect your badge, please show and scan the QR code below or attached.</p>
                                                            <div class="qr-code">
                                                                <div>
                                                                <img alt="QR Code" src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.worldcoffeeinnovationsummit.com/pdf/${id}" />
                                                                </div>
                                                                <div class="qr-info">
                                                                    <div>${firstName} ${lastName}</div>
                                                                    <div>${jobTitle}</div>
                                                                    <div>${companyName}</div>
                                                                    <div>${email}</div>
                                                                    <div>${ticketName}</div>
                                                                </div>
                                                            </div>
                                                            <p>
                                                                <b>What you need to know:</b>
                                                            </p>
                                                            <p><b>When?</b><br>23-24th October 2025</p>
                                                            <p><b>Where?</b><br> 4th Floor at QEII Centre, Broad Sanctuary, London SW1P 3EE 
                                                            <p>For the most up to date information about World Coffee Innovation Summit London 2025, why not follow us on
                                                            <a target='_blank'
                                                                    href='https://www.linkedin.com/company/worldcoffeealliance/'>LinkedIn</a>
                                                                and <a target='_blank'
                                                                    href='https://twitter.com/WCoffeeAlliance'>X/Twitter</a>
                                                                to see daily developments, event highlights and industry news.</p>
                                                            <p>Why not have your colleagues and industry peers join you by
                                                                <a target='_blank'
                                                                    href='http://www.worldcoffeesummit.net/'>sharing this
                                                                    link?</a></p>
                                                            <p>If you have any other queries, please don’t hesitate to get in touch by emailing <a href="mailto:events@worldcoffeealliance.com">events@worldcoffeealliance.com</a>
                                                            </p>
                                                            <p>See you soon!<br>
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
