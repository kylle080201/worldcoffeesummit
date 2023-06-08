import React from 'react'
import parse from 'html-react-parser';

export default function PrivacyPolicy() {
    const amendments = [
        {
            key: 1,
            text: "We may update this policy from time to time by publishing a new version on our website."
        },
        {
            key: 2,
            text: "You should check this page occasionally to ensure you are happy with any changes to this policy."
        },
    ]

    const retainingAndDeletingPersonalData = [
        {
            key: 1,
            text: "Our data retention policies and procedure are designed to help ensure that we comply with our legal obligations in relation to the retention and deletion of personal data."
        },
        {
            key: 2,
            text: "We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. To determine the appropriate retention period for personal data, we consider the amount, nature, and sensitivity of the personal data, the potential risk of harm from unauthorised use or disclosure of your personal data, the purposes for which we process your personal data and whether we can achieve those purposes through other means, and the applicable legal requirements."
        },
        {
            key: 3,
            text: "Notwithstanding the other provisions mentioned in item 2 above, we may retain your personal data where such retention is necessary for compliance with a legal obligation to which we are subject, or in order to protect your vital interests or the vital interests of another natural person."
        },
    ]

    const providingYourPersonalDataToOthers = [
        {
            key: 1,
            text: "We may disclose your personal data to our insurers and/or professional advisers insofar as reasonably necessary for the purposes of obtaining or maintaining insurance coverage, managing risks, obtaining professional advice, or the establishment, exercise or defence of legal claims, whether in court proceedings or in an administrative or out-of-court procedure."
        },
        {
            key: 2,
            text: "We may disclose personal data to our suppliers or subcontractors insofar as reasonably necessary for the performance of a contract between you and us and/or taking steps, at your request, to enter into such a contract."
        },
        {
            key: 3,
            text: "Financial transactions relating to our products and services may be handled by our payment services providers. Details of our payment service providers are available on our website. We will share transaction data with our payment services providers only to the extent necessary for the purposes of processing your payments, refunding such payments and dealing with complaints and queries relating to such payments and refunds. You can find information about the payment services providers' privacy policies and practices on their websites."
        },
        {
            key: 4,
            text: "We may disclose your enquiry data to one or more selected third party suppliers of goods and services identified for the purpose of enabling them to contact you so that they can offer, market and sell to you relevant goods and/or service. We will not disclose your enquiry data without informing you in advance. Each such third party will act as a data controller in relation to the enquiry data that we supply to it."
        },
        {
            key: 5,
            text: "In addition to the specific disclosures of personal data set out in this Section 4, we may disclose your personal data where such disclosure is necessary for compliance with a legal obligation to which we are subject, or in order to protect your vital interests or the vital interests of another natural person. We may also disclose your personal data where such disclosure is necessary for the establishment, exercise or defence of legal claims, whether in court proceedings or in an administrative or out-of-court procedure."
        },
    ]

    const yourRights = [
        {
            key: 1,
            text: "In this Section, we have summarised the rights that you have under data protection law. Some of the rights are complex, and not all of the details have been included in our summaries. Accordingly, you should read the relevant laws and guidance from the regulatory authorities for a full explanation of these rights."
        },
        {
            key: 2,
            text: "Your principal rights under data protection law are:",
            list: [
                {
                    key: "a",
                    text: "the right to access;"
                },
                {
                    key: "b",
                    text: "the right to rectification;"
                },
                {
                    key: "c",
                    text: "the right to erasure;"
                },
                {
                    key: "d",
                    text: "the right to restrict processing;"
                },
                {
                    key: "e",
                    text: "the right to object to processing;"
                },
                {
                    key: "f",
                    text: "the right to data portability;"
                },
                {
                    key: "g",
                    text: "he right to complain to a supervisory authority; and"
                },
                {
                    key: "h",
                    text: "the right to withdraw consent."
                },
            ]
        },
        {
            key: 3,
            text: "You have the right to confirmation as to whether or not we process your personal data and, where we do, access to the personal data, together with certain additional information. That additional information includes details of the purposes of the processing, the categories of personal data concerned and the recipients of the personal data. Providing the rights and freedoms of others are not affected, we will supply to you a copy of your personal data. The first copy will be provided free of charge, but additional copies may be subject to a reasonable fee."
        },
        {
            key: 4,
            text: "You have the right to have any inaccurate personal data about you rectified and, taking into account the purposes of the processing, to have any incomplete personal data about you completed."
        },
        {
            key: 5,
            text: "In some circumstances you have the right to the erasure of your personal data without undue delay. Those circumstances include: the personal data are no longer necessary in relation to the purposes for which they were collected or otherwise processed; you withdraw consent to consent-based processing; you object to the processing under certain rules of applicable data protection law; the processing is for direct marketing purposes; and the personal data have been unlawfully processed. However, there are exclusions of the right to erasure. The general exclusions include where processing is necessary: for exercising the right of freedom of expression and information; for compliance with a legal obligation; or for the establishment, exercise or defence of legal claims."
        },
        {
            key: 6,
            text: "In some circumstances you have the right to restrict the processing of your personal data. Those circumstances are: you contest the accuracy of the personal data; processing is unlawful but you oppose erasure; we no longer need the personal data for the purposes of our processing, but you require personal data for the establishment, exercise or defence of legal claims; and you have objected to processing, pending the verification of that objection. Where processing has been restricted on this basis, we may continue to store your personal data. However, we will only otherwise process it: with your consent; for the establishment, exercise or defence of legal claims; for the protection of the rights of another natural or legal person; or for reasons of important public interest."
        },
        {
            key: 7,
            text: "You have the right to object to our processing of your personal data on grounds relating to your particular situation, but only to the extent that the legal basis for the processing is that the processing is necessary for: the performance of a task carried out in the public interest or in the exercise of any official authority vested in us; or the purposes of the legitimate interests pursued by us or by a third party. If you make such an objection, we will cease to process the personal information unless we can demonstrate compelling legitimate grounds for the processing which override your interests, rights and freedoms, or the processing is for the establishment, exercise or defence of legal claims."
        },
        {
            key: 8,
            text: "You have the right to object to our processing of your personal data for direct marketing purposes (including profiling for direct marketing purposes). If you make such an objection, we will cease to process your personal data for this purpose."
        },
        {
            key: 9,
            text: "You have the right to object to our processing of your personal data for scientific or historical research purposes or statistical purposes on grounds relating to your particular situation, unless the processing is necessary for the performance of a task carried out for reasons of public interest."
        },
        {
            key: 10,
            text: "To the extent that the legal basis for our processing of your personal data is:",
            list: [
                {
                    key: "a",
                    text: "consent; or"
                },
                {
                    key: "b",
                    text: "that the processing is necessary for the performance of a contract to which you are party or in order to take steps at your request prior to entering into a contract, and such processing is carried out by automated means, you have the right to receive your personal data from us in a structured, commonly used and machine- readable format.However, this right does not apply where it would adversely affect the rights and freedoms of others."
                },
            ]
        },
        {
            key: 11,
            text: "If you consider that our processing of your personal information infringes data protection laws, you have a legal right to lodge a complaint with a supervisory authority responsible for data protection. You may do so in the EU member state of your habitual residence, your place of work or the place of the alleged infringement."
        },
        {
            key: 12,
            text: "To the extent that the legal basis for our processing of your personal information is consent, you have the right to withdraw that consent at any time. Withdrawal will not affect the lawfulness of processing before the withdrawal."
        },
        {
            key: 13,
            text: "You may exercise any of your rights in relation to your personal data by written notice to us, in addition to the other methods specified in previous section."
        },

    ]

    const aboutCookies = [
        {
            key: 1,
            text: "A cookie is a file containing an identifier (a string of letters and numbers) that is sent by a web server to a web browser and is stored by the browser. The identifier is then sent back to the server each time the browser requests a page from the server."
        },
        {
            key: 2,
            text: 'Cookies may be either "persistent" cookies or "session" cookies: a persistent cookie will be stored by a web browser and will remain valid until its set expiry date, unless deleted by the user before the expiry date; a session cookie, on the other hand, will expire at the end of the user session, when the web browser is closed.'
        },
        {
            key: 3,
            text: "Cookies do not typically contain any information that personally identifies a user, but personal information that we store about you may be linked to the information stored in and obtained from cookies."
        },
    ]

    const cookiesThatWeUse = [
        {
            key: "a",
            text: "authentication – to identify you when you visit our website and as you navigate our website;"
        },
        {
            key: "b",
            text: 'status – to help us to determine if you are logged into our website;'
        },
        {
            key: "c",
            text: "personalisation – to store information about your preferences and to personalise the website for you;"
        },
        {
            key: "d",
            text: "security – as an element of the security measures used to protect user accounts, including preventing fraudulent use of login credentials, and to protect our website and services generally;"
        },
        {
            key: "e",
            text: "advertising – to help us to display advertisements that will be relevant to you;"
        },
        {
            key: "f",
            text: "analysis – to help us to analyse the use and performance of our website and services; and"
        },
        {
            key: "g",
            text: "cookie consent – to store your preferences in relation to the use of cookies more generally."
        },
    ]

    const ourDetails = [
        {
            key: 1,
            text: "Our full name is Global Stratagem Group Ltd 2 Martin House,179-181 North End Road, London W14 9NL"
        },
        {
            key: 2,
            text: 'We are registered in England and Wales under registration number 13145030 and our registered office is at 2 Martin House,179-181 North End Road, London W14 9NL'
        },
        {
            key: 3,
            text: "You can contact us:",
            list: [
                {
                    key: "a",
                    text: "by post, to the postal address given above;"
                },
                {
                    key: "b",
                    text: 'using our website contact form;'
                },
                {
                    key: "c",
                    text: "by telephone, on the contact number published on our website from time to time; or"
                },
                {
                    key: "d",
                    text: "by email, using the email address published on our website from time to time."
                },
            ]
        },
    ]

    return (
        <>
            <div className='w-full max-w-5xl px-12 py-20 text-gray-900 sm:py-20'>
                <div className="mx-auto text-left ">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">PRIVACY POLICY</h1>
                    <p className="mt-12 tracking-tight text-gray-700 text-md sm:text-lg">We have always complied with both the spirit and the letter of data protection laws and will continue to do so. In order to comply with new rules (GDPR), we have updated our privacy policy.</p>
                    <p className="mt-6 tracking-tight text-gray-700 text-md sm:text-lg">The policy sets out prescribed information such as what data we are holding, what we are doing with that data (how we are “processing” that data), why we are processing your data, and you rights under the new law.</p>
                    <p className="mt-6 tracking-tight text-gray-700 text-md sm:text-lg">If you are wondering how we obtained your data, it is likely that we have it as you have dealt with us in the past or the data is publicly-available on business sites such as LinkedIn, or you may have handed us your business card or given us your information in some other way.</p>
                    <p className="mt-6 tracking-tight text-gray-700 text-md sm:text-lg">In order to process data, we need to identify a “lawful basis”. The lawful basis will typically be  your consent, our legitimate interests, to perform a contract with you, or when we are legally obliged to do so.</p>
                    <p className="mt-6 tracking-tight text-gray-700 text-md sm:text-lg">You can opt-out of receiving communications from us at any time and this will be made clear in any email from us.  </p>

                </div>

                <div className="mx-auto text-left ">
                    <p className="mt-12 font-bold tracking-tight text-gray-700 text-md sm:text-lg">Processing of data</p>

                    <p className="mt-6 tracking-tight text-gray-700 text-md sm:text-lg">1. We may process data about your use of our website, products and services (&ldquo;<span className='font-bold text-gray-900'>usage data</span>&ldquo;). The usage data may include your IP address, geographical location, browser type and version, operating system, referral source, length of visit, page views and website navigation paths, as well as information about the timing, frequency and pattern of your service use. The source of the usage data is our website or email analytics system. This usage data may be processed for the purposes of analysing the use of the website and services. The legal basis for this processing is consent OR our legitimate interests, namely monitoring and improving our website, products and services.</p>

                    <p className="mt-6 tracking-tight text-gray-700 text-md sm:text-lg">2. We may process your account data (&ldquo;<span className='font-bold text-gray-900'>account data</span>&ldquo;). The account data may include your name and email address. The source of the account data is you or your employer. The account data may be processed for the purposes of operating our website, providing our services, ensuring the security of our website and services, maintaining back-ups of our databases and communicating with you. The legal basis for this processing is consent OR our legitimate interests, namely the proper administration of our website and business OR the performance of a contract between you and us and/or taking steps, at your request, to enter into such a contract.</p>

                    <p className="mt-6 tracking-tight text-gray-700 text-md sm:text-lg">3. We may process information that you post for publication on our website or through our services (&ldquo;<span className='font-bold text-gray-900'>publication data</span>&ldquo;). The publication data may be processed for the purposes of enabling such publication and administering our website and services. The legal basis for this processing is consent OR our legitimate interests, namely the proper administration of our website and business OR the performance of a contract between you and us and/or taking steps, at your request, to enter into such a contract.</p>

                    <p className="mt-6 tracking-tight text-gray-700 text-md sm:text-lg">4. We may process information contained in any enquiry you submit to us regarding goods and/or services (&ldquo;<span className='font-bold text-gray-900'>enquiry data</span>&ldquo;). The enquiry data may be processed for the purposes of offering, marketing and selling relevant goods and/or services to you. The legal basis for this processing is consent OR our legitimate interests, namely the proper administration of our website and business.</p>

                    <p className="mt-6 tracking-tight text-gray-700 text-md sm:text-lg">5. We may process information relating to our customer relationships, including customer contact information (&ldquo;<span className='font-bold text-gray-900'>customer relationship data</span>&ldquo;). The customer relationship data may include your name, your employer, your job title or role, your contact details, and information contained in communications between us and you or your employer. The source of the customer relationship data is you or your employer. The customer relationship data may be processed for the purposes of managing our relationships with customers, communicating with customers, keeping records of those communications and promoting our products and services to customers. The legal basis for this processing is consent OR our legitimate interests, namely the proper management of our customer relationships.</p>

                    <p className="mt-6 tracking-tight text-gray-700 text-md sm:text-lg">6. We may process information relating to transactions, including purchases of products and services, that you enter into with us and/or through our website (&ldquo;<span className='font-bold text-gray-900'>transaction data</span>&ldquo;). The transaction data may include your contact details, your card details and the transaction details. The transaction data may be processed for the purpose of supplying the purchased goods and services and keeping proper records of those transactions. The legal basis for this processing is the performance of a contract between you and us and/or taking steps, at your request, to enter into such a contract and our legitimate interests, namely the proper administration of our website and business.</p>

                    <p className="mt-6 tracking-tight text-gray-700 text-md sm:text-lg">7. We may process information that you provide to us for the purpose of subscribing to our email notifications and/or newsletters (&ldquo;<span className='font-bold text-gray-900'>notification data</span>&ldquo;). The notification data may be processed for the purposes of sending you the relevant notifications and/or newsletters. The legal basis for this processing is consent OR the performance of a contract between you and us and/or taking steps, at your request, to enter into such a contract.</p>

                    <p className="mt-6 tracking-tight text-gray-700 text-md sm:text-lg">8. We may process information contained in or relating to any communication that you send to us (&ldquo;<span className='font-bold text-gray-900'>correspondence  data</span>&ldquo;). The correspondence data may include the communication content and metadata associated with the communication. The correspondence data may be processed for the purposes of communicating with you and record-keeping. The legal basis for this processing is our legitimate interests, namely the proper administration of our website and business and communications with users.</p>

                    <p className="mt-6 tracking-tight text-gray-700 text-md sm:text-lg">9. We may process other contact data. This data may include your name, job title and email address. The source of this data is third parties, including analytics providers or search information providers, or the public domain including publicly available business websites. This data may be processed to make you aware of our products and services. The legal basis for this processing is consent OR our legitimate interests, namely the proper administration of our business.</p>

                    <p className="mt-6 tracking-tight text-gray-700 text-md sm:text-lg">10. We may process any of your personal data identified in this policy where necessary for the establishment, exercise or defence of legal claims, whether in court proceedings or in an administrative or out-of-court procedure. The legal basis for this processing is our legitimate interests, namely the protection and assertion of our legal rights, your legal rights and the legal rights of others.</p>

                    <p className="mt-6 tracking-tight text-gray-700 text-md sm:text-lg">11. We may process any of your personal data identified in this policy where necessary for the purposes of obtaining or maintaining insurance coverage, managing risks, or obtaining professional advice. The legal basis for this processing is our legitimate interests, namely the proper protection of our business against risks.</p>

                    <p className="mt-6 tracking-tight text-gray-700 text-md sm:text-lg">12. In addition to the specific purposes for which we may process your personal data set out in this Section 3, we may also process any of your personal data where such processing is necessary for compliance with a legal obligation to which we are subject, or in order to protect your vital interests or the vital interests of another natural person.</p>

                    <p className="mt-6 tracking-tight text-gray-700 text-md sm:text-lg">13. Please do not supply any other person&apos;s personal data to us, unless we prompt you to do so.</p>

                </div>

                <div className="mx-auto text-left ">
                    <p className="mt-12 font-bold tracking-tight text-gray-700 text-md sm:text-lg">Providing your personal data to others</p>

                    {providingYourPersonalDataToOthers.map((item) => (
                        <>
                            <p key={item.key} className="mt-6 tracking-tight text-gray-700 text-md sm:text-lg">{item.key}. {item.text}</p>
                        </>
                    ))}
                </div>

                <div className="mx-auto text-left ">
                    <p className="mt-12 font-bold tracking-tight text-gray-700 text-md sm:text-lg">Retaining and deleting personal data</p>

                    {retainingAndDeletingPersonalData.map((item) => (
                        <>
                            <p key={item.key} className="mt-6 tracking-tight text-gray-700 text-md sm:text-lg">{item.key}. {item.text}</p>
                        </>
                    ))}
                </div>

                <div className="mx-auto text-left ">
                    <p className="mt-12 font-bold tracking-tight text-gray-700 text-md sm:text-lg">Amendments</p>

                    {amendments.map((item) => (
                        <>
                            <p key={item.key} className="mt-6 tracking-tight text-gray-700 text-md sm:text-lg">{item.key}. {item.text}</p>
                        </>
                    ))}
                </div>

                <div className="mx-auto text-left ">
                    <p className="mt-12 font-bold tracking-tight text-gray-700 text-md sm:text-lg">Your rights</p>
                    {
                        yourRights.map((item) => (
                            <>
                                <p key={item.key} className="mt-6 tracking-tight text-gray-700 text-md sm:text-lg">{item.key}. {item.text}</p>
                                {item.list ?
                                    item.list.map((list) => (
                                        <div key={list.key}>
                                            <p className="mt-6 tracking-tight text-gray-700 text-md sm:text-lg">({list.key}) {list.text}</p>
                                        </div>
                                    ))
                                    : null}
                            </>
                        ))
                    }
                </div>

                <div className="mx-auto text-left ">
                    <p className="mt-12 font-bold tracking-tight text-gray-700 text-md sm:text-lg">About cookies</p>

                    {aboutCookies.map((item) => (
                        <>
                            <p key={item.key} className="mt-6 tracking-tight text-gray-700 text-md sm:text-lg">{item.key}. {item.text}</p>
                        </>
                    ))}
                </div>

                <div className="mx-auto text-left ">
                    <p className="mt-12 font-bold tracking-tight text-gray-700 text-md sm:text-lg">About cookies</p>

                    {cookiesThatWeUse.map((item) => (
                        <>
                            <p key={item.key} className="mt-6 tracking-tight text-gray-700 text-md sm:text-lg">{item.key}. {item.text}</p>
                        </>
                    ))}
                </div>

                <div className="mx-auto text-left ">
                    <p className="mt-12 font-bold tracking-tight text-gray-700 text-md sm:text-lg">Cookies used by our service providers</p>

                    <p className="mt-6 tracking-tight text-gray-700 text-md sm:text-lg">1. Our service providers use cookies and those cookies may be stored on your computer when you visit our website.</p>

                    <p className="mt-6 tracking-tight text-gray-700 text-md sm:text-lg">2. We may use Google Analytics to analyse the use of our website, products or services. Google Analytics gathers information about website use by means of cookies. The information gathered relating to our website is used to create reports about the use of our website. Google&apos;s privacy policy is available at: <a href='https://www.google.com/policies/privacy/' target={'_blank'} className='text-gray-900 underline'>https://www.google.com/policies/privacy/</a>.</p>
                </div>

                <div className="mx-auto text-left ">
                    <p className="mt-12 font-bold tracking-tight text-gray-700 text-md sm:text-lg">Our details</p>
                    {
                        ourDetails.map((item) => (
                            <>
                                <p key={item.key} className="mt-6 tracking-tight text-gray-700 text-md sm:text-lg">{item.key}. {item.text}</p>
                                {item.list ?
                                    item.list.map((list) => (
                                        <div key={list.key}>
                                            <p className="mt-6 tracking-tight text-gray-700 text-md sm:text-lg">({list.key}) {list.text}</p>
                                        </div>
                                    ))
                                    : null}
                            </>
                        ))
                    }
                </div>

                <div className="mx-auto text-left ">
                    <p className="mt-12 font-bold tracking-tight text-gray-700 text-md sm:text-lg">Contact by email</p>
                    <p className="mt-6 tracking-tight text-gray-700 text-md sm:text-lg">info@worldcofeealliance.com</p>
                </div>
            </div>
        </>
    )
}