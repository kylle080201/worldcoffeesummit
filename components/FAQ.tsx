"use client"
import { Disclosure } from '@headlessui/react'
import { CheckCircleIcon, MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons'

function FAQ() {
    const objectives = [
        {
            id: 1,
            description: "Promote honest and open discussion among key stakeholder groups around how big companies work around integration and compliance on the recent legislation and how they build and contribute to sustainability programs."
        },
        {
            id: 2,
            description: "Explore challenges and opportunities provided by Regenerative Agriculture best practices, and leadership in forestry and Biodiversity landscapes toward practical implementation of Net Zero targets."
        },
        {
            id: 3,
            description: "Showcase the latest technology solutions and identify effective integration and utilisation of toolkits and support infrastructure and leveraged them against funding sourcing to navigate the latest EU directive."
        },
        {
            id: 4,
            description: "Equip companies to understand how coffee supply chain works and how to drive resilience in farmers within the framework of more efficient and transparent business model, with a view of doing business."
        },
        {
            id: 5,
            description: "Promote cross-sector collaboration between first mile and last mile coffee stakeholders to showcase innovation in pursuit of effective strategies in formulating a scalable and sustainable agricultural supply chains."
        },
    ]

    const whoAttends = [
        {
            id: 1,
            description: "The summit itself will attract delegates representing NGOs, Academia, Corporates, Green Coffee producers and suppliers, big brands, Roasters, traders, investors, financial institutions, diplomats, government officials and ambassadors, government bodies and other relevant organisations."
        },
        {
            id: 2,
            description: "Attendees will represent a broad range of the key stakeholders in the global coffee value chain, involved in purchasing, sourcing, and importing and Supply chain Managers responsible for exporting green coffee beans, and sustainability directors, implementing innovation and regenerative and sustainable practices across coffee supply chains."
        },
        {
            id: 3,
            description: "This will also include Agri-banks and commodity exchanges, ESG and Impact investors, VCs and other relevant financial institutions."
        },
        {
            id: 4,
            description: "Delegates range from C-suite and other senior management up to director level, primarily from coffee supply chain, procurement, legal and corporate affairs and corporate communications."
        },
        {
            id: 5,
            description: "This is a global event. Delegates would come from primarily from the UK and Europe but also Coffee producers and farmers from the coffee belt from Latin America, Asia and Africa."
        },
    ]

    const sponsorships = [
        {
            id: 1,
            description: "At World Coffee Summit, we are always looking for new organisations who are able to support the work that we do, and promote continuing dialogue among stakeholders and cross-industry solution providers."
        },
        {
            id: 2,
            description: "World Coffee Alliance (WCA) events, online or in-person, offers a brilliant opportunity for sponsors to showcase their work and value offerings in front of industry and cross-sector decision makers and leaders, and be able to engage and network with focused, senior key decision makers and start building trust and business relationships."
        },
        {
            id: 3,
            description: "For information on how to get involved and support World Coffee Summit, please contact Mavis Qu at mavis@worldcoffeealliance.com"
        },
    ]
    return (
        <div className="pt-12 pb-20 my-auto bg-gray-100 sm:pt-20 sm:pb-28" id="faq">
            <div className="mx-auto lg:px-8">
                <div className="px-20 mx-auto divide-y sm:px-60 divide-gray-900/10">
                    <h2 className="text-3xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
                    <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                        <Disclosure as="div" className="pt-6">
                            {({ open }) => (
                                <>
                                    <dt>
                                        <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-900">
                                            <span className="text-lg font-semibold leading-7">WHO IS WORLD COFFEE ALLIANCE (WCA)?</span>
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
                                        <p className="text-lg leading-7 text-gray-600"><span className='font-bold text-yellow-900'>World Coffee Alliance (WCA)</span> is a leading network alliance of coffee professionals, market research consultants and stakeholders across the global coffee value chain. We assist global SMEs and work very closely with coffee cooperatives, governments, investors, technology companies, and industry stakeholders. We offer secure access to all business intelligence, market research, global information, data, and trends in the coffee sector.</p>
                                        <p className="mt-4 text-lg leading-7 text-gray-600">Please find more information here <Link href={'www.worldcoffeealliance.com'} target={'_blank'}></Link>www.worldcoffeealliance.com</p>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>

                        <Disclosure as="div" className="pt-6">
                            {({ open }) => (
                                <>
                                    <dt>
                                        <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-900">
                                            <span className="text-lg font-semibold leading-7">WHAT IS THIS EVENT ALL ABOUT?</span>
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
                                        <p className="text-lg leading-7 text-gray-600"><span className='font-bold text-yellow-900'>World Coffee Alliance (WCA)</span> is a leading network alliance of coffee professionals, market research consultants and stakeholders across the global coffee value chain. We assist global SMEs and work very closely with coffee cooperatives, governments, investors, technology companies, and industry stakeholders. We offer secure access to all business intelligence, market research, global information, data, and trends in the coffee sector.</p>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>

                        <Disclosure as="div" className="pt-6">
                            {({ open }) => (
                                <>
                                    <dt>
                                        <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-900">
                                            <span className="text-lg font-semibold leading-7">WHY IS THIS SUMMIT IMPORTANT? </span>
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
                                        <p className="text-lg leading-7 text-gray-600">The European Union Parliament just recently approved the Corporate Sustainability Due Diligence Directive (CSDDD) which will require EU companies and those operating in the EU to implement more stringent due diligence. CSDDD is part of a string of recent EU legislation aimed at supply chains applying further due diligence, such as the deforestation regulation, conflict mineral regulation and the draft regulation prohibiting products made with forced labour.</p>

                                        <p className="mt-4 text-lg leading-7 text-gray-600">This event will look into its implications and social impact to the global coffee community, how to navigate its complexities and find some practicable solutions in its implementation.</p>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>

                        <Disclosure as="div" className="pt-6">
                            {({ open }) => (
                                <>
                                    <dt>
                                        <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-900">
                                            <span className="text-lg font-semibold leading-7">WHY IS THIS SUMMIT IMPORTANT? </span>
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
                                        <p className="text-lg leading-7 text-gray-600">The <span className='font-bold'>WORLD COFFEE SUMMIT</span> will take place at St.James’s Hall, and focuses on “Delivering Collaborative Change: Impact of Innovation and Regenerative Solutions”.</p>
                                        <p className="mt-4 text-lg leading-7 text-gray-600">The <span className='font-bold'>WORLD COFFEE EXHIBITION</span> will take place at Westminster Hall and focuses on “Coffee Beyond Sustainability”.</p>
                                        <p className="mt-4 text-lg leading-7 text-gray-600">These two adjunct and connected events will run in parallel on 13 September 2023 at QE II Centre, London.</p>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>

                        <Disclosure as="div" className="pt-6">
                            {({ open }) => (
                                <>
                                    <dt>
                                        <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-900">
                                            <span className="text-lg font-semibold leading-7">WHAT DO YOU EXPECT FROM THIS SUMMIT AS AN ATTENDEE?</span>
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
                                        <p className="text-lg leading-7 text-gray-600"><span className='font-bold'>OPEN Forum</span>: If you are in a quandary or just looking for guidance and exploring sustainability landscapes, this event enables stakeholders as well as those outside the coffee industry to learn how it works and can provide insight to find solutions, digital or otherwise. This would be an opportunity to exchange views, generate leads and network with industry leaders and decision makers to discover how to tackle and fund those initiatives, establish more sourcing pathways and build partnership towards deeper relationship and more.</p>
                                        <p className="mt-4 text-lg leading-7 text-gray-600"><span className='font-bold'>Cross-segment learning</span> Cross-segment learning from the experiences of global leaders from big traders and big brands including NGOs across coffee value chain, and cross-industry experts, about how to improve current supply chain blockages and logistical challenges and transforming them from insights into reality. </p>
                                        <p className="mt-4 text-lg leading-7 text-gray-600"><span className='font-bold'>EU Executive representation</span> on the motivation and policy direction, regulatory drivers, business impacts, and the roles that corporate management plays in their relationship with coffee producers and farmers in providing a more transparent supply chain.</p>
                                        <p className="mt-4 text-lg leading-7 text-gray-600"><span className='font-bold'>Government Engagement</span> with Ambassadors and Ministers representing various coffee origin countries and importing countries. This event will provide opportunity for coffee stakeholders to discuss regional regulatory compliance that affect them directly and impact on their businesses.</p>
                                        <p className="mt-4 text-lg leading-7 text-gray-600"><span className='font-bold'>Conversation on HOW</span> business, solution providers and investors should engage policy makers and government in driving positive sustainable change achieving SDGs and more practicable and meaningful implementation of government Net-Zero action plans and initiatives.</p>
                                        <p className="mt-4 text-lg leading-7 text-gray-600"><span className='font-bold'>Networking in person</span> with like-minded executives and global leaders, all focused on practical outcomes.</p>
                                        <p className="mt-4 text-lg leading-7 text-gray-600"><span className='font-bold'>Building Collaborative action plans and partnerships</span> with large businesses and big global brands, key suppliers and traders, technology and solutions providers, investors, governments, donor agencies, and NGOs.</p>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>

                        <Disclosure as="div" className="pt-6">
                            {({ open }) => (
                                <>
                                    <dt>
                                        <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-900">
                                            <span className="text-lg font-semibold leading-7">WHAT ARE THE OBJECTIVES OF THIS SUMMIT?</span>
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
                                        <ul className="list-disc">
                                            {objectives.map((objective) => (
                                                <li key={objective.id} className="mt-4 text-lg leading-7 text-gray-600">{objective.description}</li>
                                            ))}
                                        </ul>

                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>

                        <Disclosure as="div" className="pt-6">
                            {({ open }) => (
                                <>
                                    <dt>
                                        <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-900">
                                            <span className="text-lg font-semibold leading-7">WHAT DO YOU EXPECT FROM THIS SUMMIT AS AN ATTENDEE?</span>
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
                                        <p className="text-lg leading-7 text-gray-600"><span className='font-bold'>Focused and highly-researched agenda designed for actionable insights and practical implementation</span> – the content of the agenda and event structure reflects current concerns of stakeholders on the cost and unintended consequences, providing actionable plans on how to navigate the latest EU due diligence Directive.</p>
                                        <p className="text-lg leading-7 text-gray-600"><span className='font-bold'>Thought Leadership and providing genuine discussion</span> – the speakers’ line-up which reflects the different sector they represent have been designed to build a more inclusive and in-depth discussion and healthy exchange. The agenda and timings have been built to provide meaningful engagement beyond corporate mantras and hollow sustainability initiatives. High level Speakers have been selected to reflect their vast experience and expertise and we expect interactive participation of the targeted attendees on a Q& A format towards a more active participation.</p>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>

                        <Disclosure as="div" className="pt-6">
                            {({ open }) => (
                                <>
                                    <dt>
                                        <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-900">
                                            <span className="text-lg font-semibold leading-7">WHO ATTENDS?</span>
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
                                        {whoAttends.map((item) => (
                                            <p key={item.id} className="text-lg leading-7 text-gray-600">{item.description}</p>
                                        ))}
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>

                        <Disclosure as="div" className="pt-6">
                            {({ open }) => (
                                <>
                                    <dt>
                                        <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-900">
                                            <span className="text-lg font-semibold leading-7">ARE SPONSORSHIP, PARTNERSHIP OR EXHIBITING OPPORTUNITIES AVAILABLE?</span>
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
                                        <p className="text-lg leading-7 text-gray-600">At World Coffee Summit, we are always looking for new organisations who are able to support the work that we do, and promote continuing dialogue among stakeholders and cross-industry solution providers.</p>
                                        <p className="mt-4 text-lg leading-7 text-gray-600">World Coffee Alliance (WCA) events, online or in-person, offers a brilliant opportunity for sponsors to showcase their work and value offerings in front of industry and cross-sector decision makers and leaders, and be able to engage and network with focused, senior key decision makers and start building trust and business relationships.</p>
                                        <p className="mt-4 text-lg leading-7 text-gray-600">For information on how to get involved and support World Coffee Summit, please contact Mavis Qu at <Link href={"mailto:mavis@worldcoffeealliance.com"} target="_blank" className="text-yellow-900 underline hover:underline-offset-4"> mavis@worldcoffeealliance.com</Link></p>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>

                        <Disclosure as="div" className="pt-6">
                            {({ open }) => (
                                <>
                                    <dt>
                                        <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-900">
                                            <span className="text-lg font-semibold leading-7">HOW CAN I GET UPDATES ON THIS EVENT?</span>
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
                                        <p className="text-lg leading-7 text-gray-600">If you haven&apos;t yet registered and wish to receive any updates on the conference such as new agenda items or confirmed speakers, please email Mavis at <Link href={"mailto:mavis@worldcoffeealliance.com"} target="_blank" className="text-yellow-900 underline hover:underline-offset-4"> mavis@worldcoffeealliance.com</Link></p>
                                        <p className="mt-4 text-lg leading-7 text-gray-600">If you want to keep update on the development of this event, follow us on our social media</p>
                                        <div className='flex mt-4 gap-x-2'>
                                            <SocialIcon url="https://www.linkedin.com/company/worldcoffeealliance/" style={{ height: 40, width: 40 }} target='_blank' />
                                            <SocialIcon url="https://twitter.com/WCoffeeAlliance" style={{ height: 40, width: 40 }} target='_blank' />
                                            <SocialIcon url="https://www.youtube.com/channel/UCbUTtqgxTtQj9nkKTAf_AQg" style={{ height: 40, width: 40 }} target='_blank' />
                                        </div>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>

                        <Disclosure as="div" className="pt-6">
                            {({ open }) => (
                                <>
                                    <dt>
                                        <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-900">
                                            <span className="text-lg font-semibold leading-7">DO I NEED A VISA TO ATTEND THIS EVENT IF I COME FROM OUTSIDE OF THE UK?</span>
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
                                        <p className="text-lg leading-7 text-gray-600">Please check the <Link href='https://www.gov.uk/browse/visas-immigration' target='_blank' className='text-yellow-900 underline hover:underline-offset-4'>United Kingdom Visa Portal website</Link> for visa-related information in the United Kingdom.</p>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </dl>
                </div>
            </div>
        </div >
    )
}

export default FAQ;