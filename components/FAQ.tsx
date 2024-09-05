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
            description: "Explore challenges and opportunities provided by Regenerative Agriculture, Nature Capital and Nature-Based Solutions best practices, and leadership in forestry and Biodiversity landscapes toward practical implementation of Net Zero targets."
        },
        {
            id: 3,
            description: "Showcase the latest innovation and technology solutions and identify effective integration and utilisation of toolkits and support infrastructure and leveraged them against funding sourcing to navigate the latest EU directives."
        },
        {
            id: 4,
            description: "Equip companies to understand how coffee supply chain works and how to drive resilience in farmers and increase their yields through innovation within the framework of more efficient and transparent business model, with a view of doing business."
        },
        {
            id: 5,
            description: "Promote cross-sector collaboration between first mile and last mile coffee stakeholders and innovators to showcase innovation in pursuit of effective strategies in formulating a scalable and sustainable agricultural supply chains."
        },
    ]

    const whoAttends = [
        {
            id: 1,
            description: "The Summit itself will attract delegates representing Big global brands, Coffee traders, Farmer Cooperatives, NGOs, Corporates, Green Coffee producers and suppliers, Roasters, traders, investors, financial institutions, diplomats, government officials and ambassadors, government bodies and other relevant organisations."
        },
        {
            id: 2,
            description: "Attendees will represent a broad range of the key stakeholders in the global coffee value chain, involved in purchasing, sourcing, and importing and Supply chain Managers responsible for exporting green coffee beans, and sustainability directors, implementing innovation and regenerative and sustainable practices across coffee supply chains."
        },
        {
            id: 3,
            description: "This will also include Agri-banks and commodity exchanges, ESG and Impact investors, VCs Nature Capital and Wealth Funds and other relevant financial institutions."
        },
        {
            id: 4,
            description: "Delegates range from C-suite and other senior management up to director level, primarily from coffee supply chain, procurement, legal and corporate affairs and corporate communications."
        },
        {
            id: 5,
            description: "This is a global event. Delegates would come from primarily from the UK and Europe but also Coffee producers and farmers from the coffee belt from USA, Latin America, Asia and Africa."
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
        <div className="pt-12 pb-20 my-auto sm:pt-20 sm:pb-28" id="faq">
            <div className="mx-auto lg:px-8">
                <div className='px-20 mx-auto sm:px-60'>
                    <h2 className="text-3xl  font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
                </div>
                
                <div className="px-20 mx-auto divide-y sm:px-60">
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
                                        <p className="text-lg leading-7 text-gray-600"><span className='font-bold text-yellow-900'>World Coffee Alliance (WCA)</span> is the leading network alliance of coffee professionals, market research consultants, cooperatives, traders, global brands and global coffee stakeholders across the global coffee value chain. WCA offers secure access to all business intelligence, market research, global information, data, and trends in the coffee sector and related industries.
                                        <br/>
                                        <br/>
                                        WCA assists global SMEs and work very closely with governments, coffee cooperatives, innovators, investors, technology companies, and cross-industry stakeholders to find solutions to the challenges of the coffee industry worldwide. 
                                        <br/>
                                        <br/>
                                        WCA is the owner and organiser of the <span className='font-bold text-yellow-900'>World Coffee Innovation Summit London-</span> the leading solution-driven Summit that convenes high-level Thought leaders, cross-industry experts and innovators that connects <span className='font-bold'>Coffee</span>, <span className='font-bold'>Climate Change</span>, and <span className='font-bold '>Finance</span> through scalable <span className='font-bold '>Innovation</span>.</p>
                                        <p className="mt-4 text-lg leading-7 text-gray-600">Please find more information here <Link href={'https://www.worldcoffeealliance.com'} className='text-yellow-900 underline hover:underline-offset-4' target={'_blank'}>www.worldcoffeealliance.com</Link></p>
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
                                        <p className="text-lg leading-7 text-gray-600">This two-day must attend event will focus on the importance of Redefining Shared Value – a concept enunciated by Prof Michael E. Porter and Mark R. Kramer of the Harvard Business School – where companies can drive innovation and societal progress at the same time. 
                                        <br/>
                                        <br/>
                                        This Summit will deep dive into business impact of the latest EUDR as it approaches its final quarter before compliance which starts on December 31, 2024, the relationship between adoption sustainability reporting (CSRD + CS3D) and its practical implications on agricultural production and corporate compliance, latest innovation in coffee science and crop protection, Regenerative Agriculture within the Sustainable Finance, Nature Capital and Carbon Credits framework and the Digitalisation of Global Trade. These discussions will pivot around mitigating climate change risks, biodiversity loss and financial inclusion and how it is going to be governed and financed during transition. Transforming from conventional agriculture to regenerative will require some innovative technologies and scalable solutions, collaboration, incentives, government grants and private and public funding to be climate positive, scalable, and operational.
                                        </p>
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
                                        <p className="text-lg leading-7 text-gray-600">The European Union Parliament approved the EUDR (deforestation) last year that requires Operators to submit verified due diligence statements on 30 December 2024 or face 4% of their annual turnover and confiscation in some cases as penalties. Moreover, Just recently approved the Corporate Sustainability Reporting Directive (CSRD)and Corporate Sustainability Due Diligence Directive (CSDDD) which will require EU companies and those operating in the EU to implement more stringent due diligence and reporting of human rights violations , child labour, which are all part of a string of recent EU Green Deal aimed at supply chains applying further due diligence, such as the deforestation regulation, conflict mineral regulation and the draft regulation prohibiting products made with forced labour.
                                        <br/><br/>
                                        This event will investigate its implications and social impact to the global coffee community, how it is relevant to the coffee industry and how to navigate its complexities and find some practicable solutions in its implementation.
                                        </p>
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
                                        <p className="text-lg leading-7 text-gray-600"><span className='font-bold'>OPEN Forum</span>:If you are in a quandary or just looking for guidance and exploring sustainability and regulatory landscapes, this event enables stakeholders as well as those outside the coffee industry to learn how it works and can provide insight to find solutions, innovations, digital or otherwise. This would be an opportunity to exchange views, generate leads and network with industry leaders and decision makers to discover how to tackle and fund those initiatives, establish more sourcing pathways and build cross-industry partnership towards deeper relationship and more practical collaborations.</p>

                                        <p className="mt-4 text-lg leading-7 text-gray-600"><span className='font-bold'>Cross-segment learning</span> Cross-segment learning from the experiences of global leaders from big traders and big global brands including Starbucks Starbucks, JDE Peet’s, Volcafe, Tchibo and ofi and other stakeholders across coffee value chain, and cross-industry experts, about how to improve current supply chain blockages and logistical challenges and transforming them from insights into reality.</p>

                                        <p className="mt-4 text-lg leading-7 text-gray-600"><span className='font-bold'>EU Executive representation</span> on the motivation and policy direction, regulatory drivers, business impacts, and the roles that corporate management plays in their relationship with coffee producers and farmers in providing a more transparent supply chain.</p>
                                        
                                        <p className="mt-4 text-lg leading-7 text-gray-600"><span className='font-bold'>Government Engagement</span> with Governments Ministers and ambassadors representing various coffee origin countries and importing countries. This event will provide opportunity for coffee stakeholders to discuss regional regulatory compliance that affect them directly and impact on their businesses.</p>

                                        <p className="mt-4 text-lg leading-7 text-gray-600"><span className='font-bold'>Conversation on HOW</span> business, solution providers and investors should engage policy makers and government in driving positive sustainable change achieving SDGs and more practicable and meaningful implementation of government Net-Zero action plans and initiatives.</p>

                                        <p className="mt-4 text-lg leading-7 text-gray-600"><span className='font-bold'>Networking in person</span> with like-minded executives and global leaders, all focused on practical outcomes and joining our Networking Soiree at the UK House of Lords to increase your contact and engagements.</p>

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
                                            <span className="text-lg font-semibold leading-7">WHAT MAKES THIS EVENT DIFFERENT?</span>
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
                                        <p className="text-lg leading-7 text-gray-600"><span className='font-bold'>Focused and highly-researched agenda designed for actionable insights and practical implementation</span> – the content of the agenda and event structure reflects current concerns of stakeholders on the cost and unintended consequences, providing actionable plans on how to navigate the latest EU due diligence Directives.</p>

                                        <p className="mt-4 text-lg leading-7 text-gray-600"><span className='font-bold'>Thought Leadership and providing genuine discussion</span> – the speakers’ line-up which reflects the different sector they represent have been designed to build cross-industry alignment and a more inclusive and in-depth discussion and healthy exchange of ideas and best practices. The agenda and timings have been built to provide meaningful engagement beyond corporate mantras and hollow sustainability initiatives. High level Speakers have been selected to reflect their vast experience and expertise and we expect interactive participation of the targeted attendees towards a more active engagement and participation.</p>
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
                                            <p key={item.id} className="mt-4 text-lg leading-7 text-gray-600">{item.description}</p>
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
                                        <p className="text-lg leading-7 text-gray-600">At World Coffee Innovation Summit, we are always looking for new organisations who are able to support the work that we do and promote continuing dialogue among stakeholders and cross-industry solution providers.</p>
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
                                            <span className="text-lg font-semibold leading-7">WHAT IS INCLUDED IN THE REGISTRATION FEE?</span>
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
                                        <p className="text-lg leading-7 text-gray-600">Your Delegate pass includes admission to the summit on both of the days including food and beverages throughout the duration of the summit (coffee breaks and lunch). </p>

                                        <p className="mt-4 text-lg leading-7 text-gray-600">However, you need to purchase the Networking Soirée Pass separately, if you would like to participate in the Networking Soirée in the early evening on 16th October 2024 at the House of Lords (limited tickets only).</p>
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
                                            <SocialIcon url="https://www.x.com/WCoffeeAlliance" style={{ height: 40, width: 40 }} target='_blank' />
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
                                        <p className="mt-4 text-lg leading-7 text-gray-600">If you need any invitation letter for visa application, please contact Mavis at <Link href={'mailto:mavis@worldcoffeealliance.com'} target='_blank' className='text-yellow-900 underline hover:underline-offset-4'>mavis@worldcoffeealliance.com</Link></p>
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