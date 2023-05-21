import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function Agenda() {
    const agendas = [
        {
            title: "Navigating complexities of Regulatory Compliance",
            description: "Our panel of experts and global speakers will examine and assess the impact of Regenerative Agricultural practices in promoting carbon capture and sequestration. Discussions will also pivot around financial opportunities that Regenerative Agriculture and of ESG compliant strategies to ensure a supply chain transformation that is scalable and more resilient."
        },
        {
            title: "Continuing engagement with Governments",
            description: "How to ensure that engagement from companies and governments on enforcing forest governance on forest-coffee frontier, and that an industry-wide commitment to zero-deforestation is upheld."
        },
        {
            title: "Responsible sourcing and fair coffee price",
            description: "How coffee brands and traders across the globe are likely to feel pressure from customers, the media and their respective regulators and governments to take responsibility for their actions as a business. But what are the cost implications?"
        },
        {
            title: "Nature-led Solutions to mitigate climate change",
            description: "Deep diving into insights and best practices beyond compliance that can enhance biodiversity and improve soil health to drive sustainable coffee farming."
        },
        {
            title: "The Future of Collaboration",
            description: "The role of coffee industry leaders in driving sustainable agriculture by supporting “living income principle”, incentivizing women and the young generation of farmers and ensuring that regeneration is at the heart of a future sustainability strategy."
        },
    ]
    return (
        <div id="agenda" className="bg-lime-700">
            <div className="px-6 py-8 mx-auto sm:py-12 lg:px-32">
                <h2 className="text-4xl font-bold tracking-tight text-white">AGENDA HIGHLIGHTS</h2>
                <div className="w-full rounded-lg">
                    <dd className="mt-2 text-xl leading-7 text-white">
                        <span >This one-day high-level business conference will bring together Governments, FAO,EU,ICO,BCA, NGOs like Rainforest Alliance and Fairtrade International, Financial Institutions like IADB, IFAD,WB to identify the main areas of collaboration, exploring innovative and regenerative solutions to face the challenges of regulatory compliance and climate change. </span>
                    </dd>
                </div>
                <div className="mt-16 px-44">
                    <dl className="flex flex-col gap-y-8">
                        {agendas.map((agenda) => (
                            <div key={agenda.title} className="p-4 text-center bg-white rounded-lg sm:p-6">
                                <dt className="text-2xl font-semibold leading-7 text-gray-900">{agenda.title}</dt>
                                <dd className="mt-2 text-lg leading-7 text-gray-700">{agenda.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}