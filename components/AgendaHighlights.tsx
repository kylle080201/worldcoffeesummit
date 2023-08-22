import { ArrowRightCircleIcon, BanknotesIcon, CursorArrowRippleIcon, GlobeAmericasIcon, PresentationChartBarIcon } from '@heroicons/react/24/solid'

const timeline = [
    {
        id: 1,
        title: "Navigating complexities of Regulatory Compliance in deforestation and Supply chain reporting",
        description: "Our panel of experts and global speakers will examine and assess the impact of the EU due diligence legislation in the light of Climate change. Discussions will also pivot around EUDR(Deforestation), promoting carbon capture and sequestration within the framework of carbon credits infrastructure.There will be discussions around risk mitigation, financial opportunities in ESG and Impact Investing to fund innovative supply chain transformation and solutions that is scalable and more resilient.",
        icon: CursorArrowRippleIcon,
        iconBackground: 'bg-lime-700',
    },
    {
        id: 2,
        title: "Continuing engagement with Governments and the role of Innovation",
        description: "How to ensure that engagement from companies and governments on empowering stakeholders through technology and science-based approach in enforcing forest governance on forest-coffee frontier, and that an industry-wide commitment to zero-deforestation is upheld.",
        icon: ArrowRightCircleIcon,
        iconBackground: 'bg-lime-700',
    },
    {
        id: 3,
        title: "Responsible sourcing and fair coffee price",
        description: "How coffee brands and traders across the globe are likely to feel pressure from customers, the media and their respective regulators and governments to take responsibility for their actions as a business. But what are the cost implications?",
        icon: BanknotesIcon,
        iconBackground: 'bg-lime-700',
    },
    {
        id: 4,
        title: "Nature-led Solutions to mitigate climate change",
        description: "Deep diving into insights and best practices beyond compliance that can enhance biodiversity and improve soil health to drive sustainable coffee farming.",
        icon: GlobeAmericasIcon,
        iconBackground: 'bg-lime-700',
    },
    {
        id: 5,
        title: "The Future of Collaboration",
        description: "The role of coffee industry leaders in driving sustainable agriculture by supporting “living income principle”, incentivizing women and the young generation of farmers and ensuring that regeneration is at the heart of a future sustainability strategy.",
        icon: PresentationChartBarIcon,
        iconBackground: 'bg-lime-700',
    },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function AgendaHighlights() {
    return (
        <div className="flow-root px-12 py-20 sm:px-20 bg-lime-700">
            <div className='mx-auto sm:max-w-5xl'>
                <h2 className="text-4xl font-bold tracking-tight text-white">AGENDA HIGHLIGHTS</h2>
                <div className="w-full rounded-lg">
                    <dd className="mt-2 text-xl leading-7 text-white">
                        <span >This one-day high-level business conference will bring together Governments, Public Institutions, Financial Institutions, Global Investors, Technology Providers, Coffee Farmers, Cooperatives, Roasters and Importers, global brands, NGOs and civil societies to identify the main areas of collaboration, exploring innovative technology and regenerative solutions to face the challenges of regulatory compliance and climate change.</span>
                    </dd>
                </div>
                <ul role="list" className="mt-12">
                    {timeline.map((event, eventIdx) => (
                        <li key={event.id}>
                            <div className="relative pb-8">
                                {eventIdx !== timeline.length - 1 ? (
                                    <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                                ) : null}
                                <div className="relative flex space-x-3">
                                    <div>
                                        <span
                                            className={classNames(
                                                event.iconBackground,
                                                'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                                            )}
                                        >
                                            <event.icon className="w-5 h-5 text-white" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="flex justify-between flex-1 min-w-0 pl-2 space-x-4 sm:pl-4">
                                        <div className='flex flex-col'>
                                            <p className="text-lg font-semibold text-white sm:text-2xl">
                                                {event.title}{' '}
                                            </p>
                                            <p className="mt-2 text-sm text-white sm:text-lg">
                                                {event.description}{' '}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
