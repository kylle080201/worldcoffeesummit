import Link from "next/link"

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
        question: "WHO ARE CONFIRMED SPEAKERS FOR THE CONFERENCE TO DATE?",
        answer:
            "",
        speakers: [
            {
                key: 1,
                info: "Dr Leonard Mizzi, Head of Unity, INTPA, European Commission (EU)",
            },
            {
                key: 2,
                info: "Vanusia Nogueria, Executive Director, International Coffee Organization(ICO)",
            },
            {
                key: 3,
                info: "Paul Rooke, Executive Director, British Coffee Association (BCA)",
            },
            {
                key: 4,
                info: "Melissa Duncan, Executive Director, Fairtrade International",
            },
            {
                key: 5,
                info: "William Kennedy, Senior Executive Editor, Bloomberg (Moderator Panel 2)",
            },
            {
                key: 6,
                info: "H. E. Teferi Melesse Desta, Ethiopian Ambassador to the United Kingdom",
            },
            {
                key: 7,
                info: "H.E Markus Leitner, The Swiss Ambassador to the United Kingdom",
            },
            {
                key: 8,
                info: "H.E. Vikram Doraiswami, High Commissioner for India in the United Kingdom",
            },
            {
                key: 9,
                info: "Dr Dongyu Qu, Director-General of the Food and Agriculture Organization of the United Nations (FAO).",
            },
        ]
    },
    {
        id: 6,
        question: "WHAT IS THE HIGHLIGHT OF THIS EVENT?",
        answer:
            "We will have Keynotes from various UK Government Ministers and 4 ambassadors, from Ethiopia, India, Switzerland and El Salvador, promoting their country not only as a coffee origin but also as a Tourism and Investment destination. The highlight of this event is the Government and Minister Roundtable to be moderated by the BBC HardTalk presenter Stephen Sackur’s, where he will facilitate an on-stage conversation with the four ambassadors, focusing on how governments can help shape regulations to help smallholder farmers thrive and earn prosperous income and what can they do to adopt smart climate best practices to promote regeneration and ESG compliance. We expect this Roundtable to generate a lot of media attention",
    },
]

const whyAttend = [
    {
        key: 1,
        paragraph: "1.	Listen and get involved on latest trends and government programs about shaping policies on regulations, including EU due diligence legislations, and living income."
    },
    {
        key: 2,
        paragraph: "2.	Meet and network with key Government Ministers, Ambassadors, NGOs, Global Coffee leaders, Thought Leaders, Big coffee brands and superstores, and Global ESG investors community to discuss about the future of collaboration on how to finance Regenerative Agriculture through ESG investment platforms."
    },
    {
        key: 3,
        paragraph: "3.	Engage with key decision makers, with budget and power to spend to discuss collaborative partnership on Regenerative Agriculture and ESG and impact funding solutions."
    },
    {
        key: 4,
        paragraph: "4.	Meet Coffee Exhibitors from various coffee origin and green coffee producers, organic farmers, roasters, and buyers and join cupping sessions to be facilitated by an independent coffee lab. "
    },
]


export default function FAQ() {
    return (
        <div className="bg-lime-700" id="faq">
            <div className="px-6 py-8 mx-auto sm:py-12 lg:px-24">
                <h2 className="text-6xl font-bold leading-10 tracking-tight text-white">Frequently asked questions</h2>
                <div className="w-full mt-10 bg-white rounded-lg sm:p-6">
                    <dt className="text-2xl font-semibold leading-7 text-gray-900">WHAT IS THIS EVENT ALL ABOUT?</dt>
                    <dd className="mt-2 text-xl leading-7 text-gray-900">
                        <span className="font-bold">Regenerative agriculture</span> is a conservation and rehabilitation approach to food and farming systems. It focuses on topsoil regeneration, increasing biodiversity, improving the water cycle, enhancing ecosystem services, supporting bio sequestration, increasing resilience to climate change, and strengthening the health and vitality of farm soil. <span className="font-bold">ESG</span> or <span className="font-bold">Environmental, Social and Governance</span> is a framework companies use to evaluate their sustainability which looks at the conservation of the natural world, soil health, water conservation or other social factors that examine how a company treats people both inside and outside the company and governance factors consider how a company is run.
                    </dd>
                    <dd className="mt-2 text-xl leading-7 text-gray-900">
                        This event will deep dive into the relationship between adoption of Regenerative Agriculture, its benefits and challenges, and ramifications against the backdrop of climate change and how it is going to be governed and financed, both in the short and the long-term. Transforming from conventional agriculture to regenerative will require some incentives, government grants and private funding to be operational.
                    </dd>
                </div>
                <div className="mt-10">
                    <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8 sm:space-y-0 lg:grid-cols-2 lg:gap-x-8">
                        {faqs.map((faq) => (
                            <div key={faq.id} className="bg-white rounded-lg sm:p-6">
                                <dt className="text-2xl font-semibold leading-7 text-gray-900">{faq.question}</dt>
                                <dd className="mt-2 text-lg leading-7 text-gray-700">{faq.answer}</dd>
                                {
                                    faq.speakers ?
                                        faq.speakers.map((speaker) => (
                                            <div key={speaker.key}>
                                                <dd className="mt-2 text-lg leading-7 text-gray-700">{speaker.info}</dd>
                                            </div>
                                        ))
                                        : null
                                }
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="w-full mt-10 bg-white rounded-lg sm:p-6">
                    <dt className="text-2xl font-semibold leading-7 text-gray-900">WHY ATTEND?</dt>
                    {
                        whyAttend.map((item) => (
                            <div key={item.key}>
                                <dd className="mt-4 text-lg leading-7 text-gray-700">{item.paragraph}</dd>
                            </div>
                        ))
                    }
                </div>
                <div className="w-full mt-10 rounded-lg sm:p-6">
                    <dt className="text-4xl font-semibold leading-7 text-white">HOW CAN I REGISTER?</dt>
                    <div >
                        <dd className="mt-4 text-2xl leading-7 text-white">
                            For delegate and Sponsorship inquiries, please send interest to <Link href={"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=mavis@worldcoffeealliance.com&su=Delegate%20and%20Sponsorship%20inquiry"} target="_blank" className="underline hover:underline-offset-4"> mavis@worldcoffeealliance.com</Link>
                        </dd>
                    </div>
                </div>
            </div>
        </div>
    )
}
