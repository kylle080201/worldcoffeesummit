"use client"
import { Disclosure } from '@headlessui/react'
import { CheckCircleIcon, MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const faqs = [
    {
        id: 1,
        question: "WHEN IS THE EVENT TAKING PLACE?",
        answer:
            "The World Coffee Summit London with the co-located World Coffee Exhibition London is on 13 September 2023.",
    },
    {
        id: 2,
        question: "WHERE IS THE VENUE FOR THIS IN-PERSON EVENT?",
        answer:
            "The World Coffee Summit London will be held at the Cinema of the Courthouse Hotel Soho and the co-located event World Coffee Exhibition London will be held at the rooftop (6th floor overlooking London) of the same hotel, which can accommodate around 80 people standing, and 60 people sitting.",
    },
    {
        id: 3,
        question: "WHO WILL ATTEND THIS EVENT?",
        answer:
            "Attendees include Government Ministers and Ambassadors, Executive Directors and global CEOs of Global Institutions like the EU,ICO, FAO, BCA, NGOs like Fairtrade, Rainforest Alliance, Coffee cooperatives, BSCA, FNC, CCA, Roasters and Coffee buyers, global brands, ESG investors, Chief Investment Officers, Asset managers, CEO’s of Capital Ventures, Fintech Founders, and solution providers in a boutique, private, and by-invitation only, pre-qualified CxOs delegates to network and discuss about Collaborative Change in Coffee, Regenerative Solutions to fight Climate Change and Sustainable Investing and Green Finance and other Ambassadors and Dignitaries from other Coffee Origin countries and Investor countries like UAE and Saudi Arabia. The Media including Bloomberg and Reuters will be there as well.",
    },
    {
        id: 4,
        question: "WILL THERE ALSO BE A COFFEE EXHIBITION TO MEET COFFEE PRODUCERS AND BUYERS?",
        answer:
            "As part of WCA’s campaign to highlight and promote some of the leading coffee countries origin, we are inviting Coffee producers and exporters as Exhibitors from Indonesia, Ethiopia, India, and China, to showcase their coffee and distribute coffee samples.  We will have two cupping sessions, one in the morning and another in the afternoon, conducted by an independent coffee lab to provide cupping score results. This will help around 80 green coffee buyers and roasters from the UK and European green coffee buyers, traders, and guests to decide if they want to do business with the 12 Exhibitors.",
    },
    {
        id: 5,
        question: "WHAT IS THE HIGHLIGHT OF THIS EVENT?",
        answer:
            "We will have Keynotes from various UK Government Ministers and 4 ambassadors, from Ethiopia, India, Switzerland and El Salvador, promoting their country not only as a coffee origin but also as a Tourism and Investment destination. The highlight of this event is the Government and Minister Roundtable to be moderated by the BBC HardTalk presenter Stephen Sackur’s, where he will facilitate an on-stage conversation with the four ambassadors, focusing on how governments can help shape regulations to help smallholder farmers thrive and earn prosperous income and what can they do to adopt smart climate best practices to promote regeneration and ESG compliance. We expect this Roundtable to generate a lot of media attention",
    },
    {
        id: 6,
        question: "WHY ATTEND?",
        answer:
            "This event is a close door event and not open to the public which means that the networking will be intense, and engagement will be personal.",
        list: [
            {
                key: 1,
                description: "Listen and get involved on latest trends and government programs about shaping policies on regulations, including EU due diligence legislations, and living income"
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
        <div className="bg-gray-100" id="faq">
            <div className="py-12 mx-autosm:py-32 lg:px-8 lg:py-20">
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
                                            <span className="text-xl font-semibold leading-7">HOW CAN I REGISTER?</span>
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
                                        <p className="text-lg leading-7 text-gray-600">For delegate and Sponsorship inquiries, click <Link target="_blank" href="/register" className='text-yellow-900 underline hover:underline-offset-4'>here</Link> or send interest to <Link href={"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=mavis@worldcoffeealliance.com&su=Delegate%20and%20Sponsorship%20inquiry"} target="_blank" className="text-yellow-900 underline hover:underline-offset-4"> mavis@worldcoffeealliance.com</Link></p>
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