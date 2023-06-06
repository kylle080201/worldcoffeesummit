"use client"
import { Disclosure } from '@headlessui/react'
import { CheckCircleIcon, MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const faqs = [
    {
        id: 1,
        question: "WHAT IS THIS EVENT ALL ABOUT?",
        answer:
            "This event will deep dive into impact of the latest EU Due diligence, the relationship between adoption of Regenerative Agriculture against the backdrop of climate change and how it is going to be governed and financed by ESG Investments. Transforming from conventional agriculture to regenerative will require some collaboration, incentives, government grants and private and public funding to be climate positive, scalable, and operational.",
    },
    {
        id: 2,
        question: "WHEN IS THE EVENT TAKING PLACE?",
        answer:
            "The World Coffee Summit London with the co-located World Coffee Exhibition London is on Wednesday 13 September 2023.",
    },
    {
        id: 3,
        question: "WHERE IS THE VENUE FOR THIS IN-PERSON EVENT?",
        answer:
            "The World Coffee Summit London will be held at St. James’s Hall of Queen Elizabeth ll Centre, and the co-located World Coffee Exhibition will be held at the Westminster Hall at the Queen Elizabeth ll Centre.",
    },
    {
        id: 4,
        question: "WHO WILL ATTEND THIS EVENT?",
        answer:
            "Attendees include:",
        items: [
            {
                key: 1,
                description: "Government Ministers and Ambassadors, Trade and Economic attaches of Coffee origin countries including Ethiopia, Brazil, Vietnam, India, China, Philippines, El Salvador and importing countries including UK, Japan, Italy and Germany"
            },
            {
                key: 2,
                description: "Global institutions including the European Commission (EU), International Coffee organization (ICO), Food and Agriculture Organization(FAO)"
            },
            {
                key: 3,
                description: "Country Coffee organizations like the British Coffee Association (BCA)."
            },
            {
                key: 4,
                description: "NGOs including Fairtrade International (FI) and Rainforest Alliance (RA)"
            },
            {
                key: 5,
                description: "Big global coffee brands"
            },
            {
                key: 6,
                description: "UK and European Coffee Roasters, Traders and Coffee buyers"
            },
            {
                key: 7,
                description: "ESG investors, Chief Investment Officers, Asset managers, CEO’s of Banks and Capital Ventures, Fintech Founders, and solution providers"
            },
            {
                key: 8,
                description: "The Media including BBC, Bloomberg, and Reuters"
            },
        ]
    },
    {
        id: 5,
        question: "WILL THERE ALSO BE A COFFEE EXHIBITION TO MEET COFFEE PRODUCERS AND BUYERS?",
        answer:
            "As part of WCA’s campaign to highlight and promote some of the leading coffee countries origin, we are inviting Coffee producers and exporters from countries of coffee origin as, to showcase their coffee and distribute coffee samples.  We will have two cupping sessions conducted by an Independent Coffee Lab to provide cupping score results and 2 panels discussing latest trends in SCA cupping protocols. This will help around 100 green coffee buyers and roasters delegates from the UK and European green coffee buyers, traders, and guests to decide if they want to do business with the 12  country of origin Exhibitors.",
    },
    {
        id: 6,
        question: "WHAT IS THE HIGHLIGHT OF THIS EVENT?",
        answer:
            "",
        paragraphs: [
            {
                key: 1,
                paragraph: "We will have Keynotes from various UK Government Ministers and various ambassadors, from Ethiopia, India, Japan, Vietnam, Switzerland, Philippines and El Salvador, promoting their country not only as a coffee origin but also as a Tourism and Investment destination"
            },
            {
                key: 2,
                paragraph: "The highlight of this event is the Government and Minister Roundtable to be moderated by the BBC HardTalk presenter Stephen Sackur, where he will facilitate an on-stage conversation, focusing on how governments can help shape regulations against the backdrop of climate change and lack of funding for mitigation. He will also delve into what can they do to adopt smart climate best practices to promote regeneration and ESG compliance. We expect this Roundtable to generate a lot of media attention"
            },
        ]
    },
    {
        id: 7,
        question: "WHY ATTEND?",
        answer:
            "This event is a close door event and not open to the public which means that the networking will be intense, and engagement will be personal.",
        list: [
            {
                key: 1,
                description: "Listen and get involved on latest trends and government programs about shaping policies on regulations, funding circles and initiatives including EU due diligence legislations, and living income"
            },
            {
                key: 2,
                description: "Meet and network with key Government Ministers, Ambassadors, NGOs, Global Coffee leaders, Thought Leaders, Big coffee brands and superstores, and Global ESG investors community to discuss about the future of collaboration on how to finance Regenerative Agriculture through ESG investment platforms"
            },
            {
                key: 3,
                description: "Engage with key decision makers, with budget and power to spend to discuss collaborative partnership on Regenerative Agriculture and ESG and impact funding solutions"
            },
            {
                key: 4,
                description: "Meet Coffee Exhibitors from various coffee origin and green coffee producers, organic farmers, roasters, and buyers and join cupping sessions to be facilitated by an independent coffee lab"
            },
        ]
    },
]

function FAQ() {
    return (
        <div className="pt-12 pb-20 my-auto bg-gray-100 sm:pt-20 sm:pb-28" id="faq">
            <div className="mx-auto lg:px-8">
                <div className="px-20 mx-auto divide-y sm:px-60 divide-gray-900/10">
                    <h2 className="text-3xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
                    <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                        {faqs.map((faq) => (
                            <Disclosure as="div" key={faq.question} className="pt-6">
                                {({ open }) => (
                                    <>
                                        <dt>
                                            <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-900">
                                                <span className="text-lg font-semibold leading-7">{faq.question}</span>
                                                <span className="flex items-center h-6 ml-6">
                                                    {open ? (
                                                        <MinusSmallIcon className="w-6 h-6" aria-hidden="true" />
                                                    ) : (
                                                        <PlusSmallIcon className="w-6 h-6" aria-hidden="true" />
                                                    )}
                                                </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel as="dd" className="pr-12 mt-2">
                                            <p className="text-lg leading-7 text-gray-600">{faq.answer}</p>
                                            <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                                {
                                                    faq.paragraphs ?
                                                        faq.paragraphs.map((item) => (
                                                            <li className="flex text-lg gap-x-3" key={item.key}>
                                                                <span className="text-lg leading-7 text-gray-600">
                                                                    {item.paragraph}.
                                                                </span>
                                                            </li>
                                                        ))
                                                        : null
                                                }
                                                {
                                                    faq.list ?
                                                        faq.list.map((item) => (
                                                            <li className="flex text-lg gap-x-3" key={item.key}>
                                                                <span className="text-lg leading-7 text-gray-600">
                                                                    {item.key}. {item.description}.
                                                                </span>
                                                            </li>
                                                        ))
                                                        : null
                                                }
                                                {
                                                    faq.items ?
                                                        faq.items.map((item) => (
                                                            <li className="flex text-lg gap-x-3" key={item.key}>
                                                                <span className="text-lg leading-7 text-gray-600">
                                                                    • {item.description}.
                                                                </span>
                                                            </li>
                                                        ))
                                                        : null
                                                }
                                            </ul>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                        <Disclosure as="div" className="pt-6">
                            {({ open }) => (
                                <>
                                    <dt>
                                        <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-900">
                                            <span className="text-lg font-semibold leading-7">HOW CAN I REGISTER?</span>
                                            <span className="flex items-center ml-6 h-7">
                                                {open ? (
                                                    <MinusSmallIcon className="w-6 h-6" aria-hidden="true" />
                                                ) : (
                                                    <PlusSmallIcon className="w-6 h-6" aria-hidden="true" />
                                                )}
                                            </span>
                                        </Disclosure.Button>
                                    </dt>
                                    <Disclosure.Panel as="dd" className="pr-12 mt-2">
                                        <p className="text-lg leading-7 text-gray-600">For delegate and Sponsorship enquiries, click <Link target="_blank" href="/register" className='text-yellow-900 underline hover:underline-offset-4'>here</Link> or send interest to <Link href={"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=mavis@worldcoffeealliance.com&su=Delegate%20and%20Sponsorship%20inquiry"} target="_blank" className="text-yellow-900 underline hover:underline-offset-4"> mavis@worldcoffeealliance.com</Link></p>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default FAQ;