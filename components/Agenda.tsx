import React from 'react'

function Agenda() {
    return (
        <div id="agenda" className='w-full'>
            <div className='py-20 max-w-5xl mx-auto'>
                <h2 className="text-4xl font-bold text-center tracking-tight">AGENDA</h2>
                {/* agenda 1 */}

                <h2 className="mt-8 text-2xl font-bold text-center tracking-tight">DAY ONE- Wednesday 16th OCTOBER 2024</h2>

                <div className='mt-8'>
                    <div className='w-full grid grid-cols-10 gap-x-4 h-max '>
                        <div className='w-full text-white font-medium col-span-2 justify-center bg-gray-600 mx-auto flex items-center px-6'>
                            8:00 - 9:00
                        </div>
                        <div className='w-full text-white font-medium col-span-8 bg-gray-600 mx-auto flex items-center px-6 py-2'>
                            MORNING COFFEE & REGISTRATION
                        </div>
                    </div>
                </div>

                <div className='mt-8'>
                    <div className='w-full grid grid-cols-10 gap-x-4 h-max '>
                        <div className='w-full text-white font-medium col-span-2 justify-center bg-lime-700 mx-auto flex items-center px-6'>
                            9:00
                        </div>
                        <div className='w-full text-white font-medium col-span-8 bg-lime-700 mx-auto flex items-center px-6 py-2'>
                            A SUMMIT INSPIRATIONAL VIDEO MESSAGE
                        </div>
                    </div>
                </div>

                <div className='mt-8'>
                    <div className='w-full grid grid-cols-10 gap-x-4 h-max '>
                        <div className='w-full text-white font-medium col-span-2 justify-center bg-lime-700 mx-auto flex items-center px-6'>
                            9:10
                        </div>
                        <div className='w-full text-white font-medium col-span-8 bg-lime-700 mx-auto flex items-center px-6 py-2'>
                            SHORT INTRO BY SUMMIT CHAIR
                        </div>
                    </div>
                    <div className='mt-4 px-2 max-w-5xl'>
                        <h3 className=''><span className='font-bold'>Joy MacKnight</span>, <span className='italic'>Journalist, Former Editor</span>, <span className='font-bold'>Financial Times (FT) - The Banker</span></h3>
                    </div>
                </div>

                <div className='mt-8'>
                    <div className='w-full grid grid-cols-10 gap-x-4 h-max '>
                        <div className='w-full text-white font-medium col-span-2 justify-center bg-lime-700 mx-auto flex items-center px-6'>
                            9:15
                        </div>
                        <div className='w-full text-white font-medium col-span-8 bg-lime-700 mx-auto flex items-center px-6 py-2'>
                            INSPIRATIONAL KEYNOTE
                        </div>
                    </div>
                    <div className='mt-4 px-2 max-w-5xl'>
                        <h3 className=''><span className='font-bold'>Jennifer Jordan-Saifi</span>, <span className='italic'>CEO,</span> <span className='font-bold'>Sustainable Markets Initiative (SMI)</span></h3>
                    </div>
                </div>

                <div className='mt-8'>
                    <div className='w-full grid grid-cols-10 gap-x-4 h-max '>
                        <div className='w-full text-white font-medium col-span-2 justify-center bg-lime-700 mx-auto flex items-center px-6'>
                            9:25
                        </div>
                        <div className='w-full text-white font-medium col-span-8 bg-lime-700 mx-auto flex items-center px-6 py-2'>
                            OPENING ADDRESS
                        </div>
                    </div>
                    <div className='mt-4 px-2 max-w-5xl'>
                        <h3 className=''><span className='font-bold'>Dr. Alvaro Lario</span>, <span className='italic'>President,</span> <span className='font-bold'>, International Fund of Agricultural Development (IFAD)</span></h3>
                    </div>
                </div>

                <div className='mt-8'>
                    <div className='w-full grid grid-cols-10 gap-x-4 h-max '>
                        <div className='w-full text-white font-medium col-span-2 justify-center bg-lime-700 mx-auto flex items-center px-6'>
                            9:35
                        </div>
                        <div className='w-full text-white font-medium col-span-8 bg-lime-700 mx-auto flex items-center px-6 py-2'>
                            FIRESIDE
                        </div>
                    </div>
                    <div className='mt-2'>
                        <h3>Chair:</h3>
                        <h3 className=''><span className='font-bold'>Joy Macknight,</span> <span className=' italic'>Journalist, Former Editor</span>, <span className='font-bold'>Financial Times - The Banker</span></h3>
                    </div>
                    <div className='mt-2'>
                        <h3>Speaker:</h3>
                        <h3 className=''><span className='font-bold'>The Rt. Hon John Gummer, Lord Deben,</span> <span className=' italic'>Former Chairman</span>, <span className='font-bold'>UK Climate Change Committee (The CCC)</span></h3>
                    </div>
                </div>

                <div className='mt-8'>
                    <div className='w-full grid grid-cols-10 gap-x-4 h-max '>
                        <div className='w-full text-white font-medium col-span-2 justify-center bg-lime-700 mx-auto flex items-center px-6'>
                            9:50
                        </div>
                        <div className='w-full text-white font-medium col-span-8 bg-lime-700 mx-auto flex items-center px-6 py-2'>
                            GLOBAL BENCHMARK KEYNOTE
                        </div>
                    </div>
                    <div className='mt-4 px-2 max-w-3xl'>
                        <h3 className=''><span className='font-bold'>Clive de Ruig</span>, <span className='italic'>President,</span> <span className='font-bold'>ICE Benchmark Administration (IBA)</span></h3>
                    </div>
                </div>

                {/* agenda 2 */}
                <div className='mt-8'>
                    <div className='w-full grid grid-cols-10 gap-x-4 h-max '>
                        <div className='w-full text-white font-medium col-span-2 justify-center bg-lime-700 mx-auto flex items-center px-6'>
                            10:00 
                        </div>
                        <div className='w-full text-white font-medium col-span-8 bg-lime-700 mx-auto flex items-center px-6 py-2'>
                            EUDR COUNTDOWN: REGULATORY COMPLIANCE FOR A SUSTAINABLE AND GREEN ECONOMY
                        </div>
                    </div>
                    <div className='mt-4 px-2 max-w-3xl'>
                        <ul className="list-disc pl-6">
                            <li>How does the EUDR legislation impact reduction of EU’s contribution to greenhouse gases (GHG) emissions and promote deforestation free-supply chain?</li>
                            <li>How does the penalty provisions on the legislation affected preparation for by the big operators and what does compliance look like after deadline 30 December 2024?</li>
                            <li>What are some of the logistical challenges taking shape in terms of putting together the data required for compliance and what are best practice solutions available for the Operators?</li>
                            <li>What are some of the “unintended consequences” or structural risks that have so far hindered or changed the current landscape in investment opportunities toward a greener and more sustainable global trade?</li>
                            <li>What are the solutions that are available in the market and how do they address the need for accurate data and how do they simplify compliance?</li>
                            <li>Now that the EU just published a 12-month phased-in period – from 30 December 2024 to 30 December 2025, what are some of the ramifications and financial implications of this delay and what happens now? What is the future of green deal?</li>
                        </ul>
                        <div className='mt-2'>
                            <h3>Chair:</h3>
                            <h3 className=''><span className='font-bold'>William Kennedy,</span> <span className=' italic'>Senior Executive Editor, Energy and Commodities</span>, <span className='font-bold'>Bloomberg</span></h3>
                        </div>
                        <ul className='mt-2 list-disc'>
                            <h3>Speakers:</h3>
                            <div className='pl-6'>
                                <li className=''><span className='font-bold'>Laurent Sagarra,</span> <span className=' italic'>Vice President Sustainability</span>, <span className='font-bold'>JDE Peet&apos;s</span></li>
                                <li className=''><span className='font-bold'>Mr Claude BIZIMANA,</span> <span className=' italic'>Chief Executive Officer</span>, <span className='font-bold'>National Agricultural Export Development Board (NAEB), Rwanda</span></li>
                                <li className=''><span className='font-bold'>Patrick Lanz,</span> <span className=' italic'>EUDR Product Director</span>, <span className='font-bold'>osapiens</span></li>
                            </div>
                        </ul>
                    </div>
                </div>

                <div className='mt-8'>
                    <div className='w-full grid grid-cols-10 gap-x-4 h-max '>
                        <div className='w-full text-white font-medium col-span-2 justify-center bg-gray-600 mx-auto flex items-center px-6'>
                            11:00
                        </div>
                        <div className='w-full text-white font-medium col-span-8 bg-gray-600 mx-auto flex items-center px-6 py-2'>
                            NETWORKING COFFEE BREAK
                        </div>
                    </div>
                </div>

                <div className='mt-8'>
                    <div className='w-full grid grid-cols-10 gap-x-4 h-max '>
                        <div className='w-full text-white font-medium col-span-2 justify-center bg-lime-700 mx-auto flex items-center px-6'>
                            11:30
                        </div>
                        <div className='w-full text-white font-medium col-span-8 bg-lime-700 mx-auto flex items-center px-6 py-2'>
                            GOVERNMENT KEYNOTE
                        </div>
                    </div>
                    <div className='mt-4 px-2 max-w-3xl'>
                        <h3 className=''><span className='font-bold'>H.E. Johnston Busingye</span>, <span className='font-bold'>High Commissioner for the Republic of Rwanda to the United Kingdom</span></h3>
                    </div>
                </div>

                {/* agenda 3 */}
                <div className='mt-8'>
                    <div className='w-full grid grid-cols-10 gap-x-4 h-max'>
                        <div className='w-full text-white font-medium col-span-2 justify-center bg-lime-700 mx-auto flex items-center px-6'>
                            11:40
                        </div>
                        <div className='w-full text-white font-medium col-span-8 bg-lime-700 mx-auto flex items-center px-6 py-2'>
                            SOLUTION PROVIDER PRESENTATION
                        </div>
                    </div>
                    <div className='mt-4 px-2 max-w-3xl'>
                        <h3 className=''><span className='font-bold'>Manfred Borer</span>, <span className=' italic'>Co-Founder & Chief Executive officer</span>, <span className='font-bold'>Koltiva</span></h3>
                    </div>
                </div>

                {/* agenda 4 */}
                <div className='mt-8'>
                    <div className='w-full grid grid-cols-10 gap-x-4 h-max '>
                        <div className='w-full text-white font-medium col-span-2 justify-center bg-lime-700 mx-auto flex items-center px-6'>
                            11:50
                        </div>
                        <div className='w-full text-white font-medium col-span-8 bg-lime-700 mx-auto flex items-center px-6 py-2'>
                            BUILDING TRUST ACROSS THE CROP TO CUP SUPPLY CHAIN
                        </div>
                    </div>
                    <div className='mt-4 px-2 max-w-3xl'>
                        <ul className='mt-2 list-disc'>
                            <div className='pl-6'>
                                <li>What do we mean by sustainability in the coffee sector – is this primarily a environmental issue or a social one? Are they equally as important?</li>
                                <li>What are the biggest priority issues for building a sustainable coffee supply chain?</li>
                                <li>What are the main environmental risk areas within the coffee supply chain – and how are these being addressed? What are trickiest challenges?</li>
                                <li>Can producing coffee sustainably also produce social benefits?</li>
                                <li>How can coffee producers and suppliers best communicate with consumers about sustainability issues? What are the risks of getting it wrong?</li>
                            </div>
                        </ul>
                        <div className='mt-2'>
                            <h3>Chair:</h3>
                            <h3 className=''><span className='font-bold'>Marie Kemplay</span>, <span className=' italic'>Deputy Editor</span>, <span className='font-bold'>Financial Times Sustainable Views</span></h3>
                        </div>
                        <ul className='mt-2 list-disc'>
                            <h3>Speakers:</h3>
                            <div className='pl-6'>
                                <li className=''><span className='font-bold'>Tim Scharrer</span>, <span className=' italic'>COO and Regional Director Europe and North America</span>, <span className='font-bold'>Volcafe</span></li>
                                <li className=''><span className='font-bold'>T.J. Ryan</span>, <span className=' italic'>Chief of Party of Philippine Coffee Advancement and Farm Enterprise Project</span>, <span className='font-bold'>ACDI/VOCA</span></li>
                                <li className=''><span className='font-bold'>Chloé Rotureau</span>, <span className=' italic'>Partner & Ethics & Sustainability Specialist- Raw Material Sourcing</span>, <span className='font-bold'>John Lewis Partnership (John Lewis and Waitrose)</span></li>
                                <li className=''><span className='font-bold'>Ed Mitchard</span>, <span className=' italic'>Chief Scientist & Co-Founder</span>, <span className='font-bold'>Space Intelligence</span></li>
                            </div>
                        </ul>
                    </div>
                </div>

                <div className='mt-8'>
                    <div className='w-full grid grid-cols-10 gap-x-4 h-max '>
                        <div className='w-full text-white font-medium col-span-2 justify-center bg-gray-600 mx-auto flex items-center px-6'>
                            12:30
                        </div>
                        <div className='w-full text-white font-medium col-span-8 bg-gray-600 mx-auto flex items-center px-6 py-2'>
                            NETWORKING LUNCH
                        </div>
                    </div>
                </div>

                {/* agenda 5 */}
                <div className='mt-8'>
                    <div className='w-full grid grid-cols-10 gap-x-4 h-max '>
                        <div className='w-full text-white font-medium col-span-2 justify-center bg-lime-700 mx-auto flex items-center px-6'>
                            13:30
                        </div>
                        <div className='w-full text-white font-medium col-span-8 bg-lime-700 mx-auto flex items-center px-6 py-2'>
                            NAVIGATING SCOPE 3 AND CLIMATE CHANGE DISCLOSURE & REPORTING (CSRD & CS3D)
                        </div>
                    </div>
                    <div className='mt-4 px-2 max-w-3xl'>
                        <ul className='mt-2 list-disc'>
                            <div className='pl-6'>
                                <li>With climate change increasingly affecting the coffee industry and agriculture more broadly, what do you believe are the key elements that businesses should focus on when disclosing environmental and social risks under the CSRD? What do you believe are the biggest challenges companies face in implementing?</li>
                                <li>With the technology landscape rapidly transforming, what are the developments you are excited about? How can remote sensing technologies and digital platforms enhance the accuracy and transparency of scope 3 reporting?</li>
                                <li>How do you think the Corporate Sustainability Reporting Directive (CSRD) and Corporate Sustainability Due Diligence Directive (CS3D) will drive meaningful change in corporate climate action strategies? What do we need to ensure to fully recognise this?</li>
                                <li>What is the importance of data ownership, its social impact, risk sharing on the farmers and the need to distribute the value much fairly in the coffee industry?</li>
                            </div>
                        </ul>
                        <div className='mt-2'>
                            <h3>Chair:</h3>
                            <h3 className=''><span className='font-bold'>Claire Elsdon</span>, <span className=' italic'>Global Director, Capital Markets</span>, <span className='font-bold'>CDP</span></h3>
                        </div>
                        <ul className='mt-2 list-disc'>
                            <h3>Speakers:</h3>
                            <div className='pl-6'>
                                <li className=''><span className='font-bold'>Sophie Aujean</span>, <span className=' italic'>Director Global Advocacy</span>, <span className='font-bold'>Fairtrade International</span></li>
                                <li className=''><span className='font-bold'>Peter Nestor</span>, <span className=' italic'>Global Head of Human Rights</span>, <span className='font-bold'>Novartis</span></li>
                                <li className=''><span className='font-bold'>Juliette Caulkins</span>, <span className=' italic'>Executive Director</span>, <span className='font-bold'>B Lab Europe</span></li>
                                <li className=''><span className='font-bold'>Randy Jagt</span>, <span className=' italic'>Future of Food Global Lead & Strategy Partner</span>, <span className='font-bold'>Deloitte</span></li>
                            </div>
                        </ul>
                    </div>
                </div>

                {/* agenda 7 */}
                <div className='mt-8'>
                    <div className='w-full grid grid-cols-10 gap-x-4 h-max '>
                        <div className='w-full text-white font-medium col-span-2 justify-center bg-lime-700 mx-auto flex items-center px-6'>
                            14:20
                        </div>
                        <div className='w-full text-white font-medium col-span-8 bg-lime-700 mx-auto flex items-center px-6 py-2'>
                            ACCELERATING REGENERATIVE AGRICULTURE PRACTICES FOR SUSTAINABLE OUTCOMES
                        </div>
                    </div>
                    <div className='mt-4 px-2 max-w-3xl'>
                        <ul className='mt-2 list-disc'>
                            <div className='pl-6'>
                                <li>How do you define Regenerative Agriculture in the general sense and in the context of coffee production?</li>
                                <li>What are some of the economic and financial barriers preventing farmers from rapidly scaling regenerative agriculture practices, and how can industry stakeholders, policymakers, and organizations effectively support farmers in overcoming these challenges?</li>
                                <li>Improving soil health is key part of regenerative agriculture. How does innovation and data-driven agriculture drive climate change adaptation and supporting sustainable food systems?</li>
                                <li>How are retailers and food companies integrating natural capital considerations into their operations and supply chain strategies to enhance sustainability and resilience across soil, water, biodiversity and climate?</li>
                                <li>What collaborations are we seeing between farmers and suppliers to promote and facilitate the transition towards sustainable, regenerative and nature-positive practices? How can these initiatives be effectively implemented to strengthen resilience across supply chains?</li>
                                <li>Large landowners and institutional investors play a crucial role in catalysing the transition to sustainable agriculture. What strategies are institutional investors employing to demonstrate the value of regenerative agriculture to landowners and how are they supporting this transition.</li>
                            </div>
                        </ul>
                        <div className='mt-2'>
                            <h3>Chair:</h3>
                            <h3 className=''><span className='font-bold'>Tripurari Prasad</span>, <span className='italic'>Investment Manager</span>, <span className='font-bold'>Climate Asset Management</span></h3>
                        </div>
                        <div className='mt-2'>
                            <h3>Speakers:</h3>
                        </div>
                        <ul className='mt-2 list-disc'>
                            <div className='pl-6'>
                                <li className=''>
                                    <span className='font-bold'>Ritesh Sharan</span>,
                                    <span className='italic'> Director, Global Farmers Support Centers & Hacienda Alsacia</span>,
                                    <span className='font-bold'> Starbucks</span>
                                </li>
                                <li className=''>
                                    <span className='font-bold'>Jonathan Sullivan</span>,
                                    <span className='italic'> Vice President Commercial & Sustainability</span>,
                                    <span className='font-bold'> Agmatix</span>
                                </li>
                                <li className=''>
                                    <span className='font-bold'>Franco Costantini</span>,
                                    <span className='italic'> CEO</span>,
                                    <span className='font-bold'> Regenagri</span>
                                </li>
                                <li className=''>
                                    <span className='font-bold'>Dominic Robinson</span>,
                                    <span className='italic'> CEO</span>,
                                    <span className='font-bold'> Soil Association Certification</span>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>

                <div className='mt-8'>
                    <div className='w-full grid grid-cols-10 gap-x-4 h-max '>
                        <div className='w-full text-white font-medium col-span-2 justify-center bg-gray-600 mx-auto flex items-center px-6'>
                            15:10
                        </div>
                        <div className='w-full text-white font-medium col-span-8 bg-gray-600 mx-auto flex items-center px-6 py-2'>
                            NETWORKING COFFEE BREAK
                        </div>
                    </div>
                </div>

                {/* agenda 8 */}
                <div className='mt-8'>
                    <div className='w-full grid grid-cols-10 gap-x-4 h-max'>
                        <div className='w-full text-white font-medium col-span-2 justify-center bg-lime-700 mx-auto flex items-center px-6'>
                            15:40
                        </div>
                        <div className='w-full text-white font-medium col-span-8 bg-lime-700 mx-auto flex items-center px-6 py-2'>
                            INNOVATING FOR BIODIVERSITY AND SUSTAINABLE ECONOMY
                        </div>
                    </div>
                    <div className='mt-4 px-2 max-w-3xl'>
                        <ul className='mt-2 list-disc'>
                            <div className='pl-6'>
                                <li>What are the most promising and impact-outcomes innovation and data-driven technologies where potential investors can investigate towards early engagement and commercialization?</li>
                                <li>What are the some of the best practices that have been proven effective in other supply chains and what are the mechanisms for successful technology transfer evolving?</li>
                                <li>Why is the role of trade finance critical in funding this ESG transition?</li>
                                <li>How can a resilient supply chain support biodiversity initiative including nature capital in the agroforestry landscape help boost coffee bean production?</li>
                                <li>What does the sustainability future look like from where you are coming from?</li>
                            </div>
                        </ul>
                        <div className='mt-2'>
                            <h3>Chair:</h3>
                            <h3 className=''><span className='font-bold'>Surath Sengupta</span>, <span className='italic'>Managing Director, Head of Trade and Working Capital Innovation & Transformation</span>, <span className='font-bold'>Lloyds Banking Group</span></h3>
                        </div>
                        <div className='mt-2'>
                            <h3>Speakers:</h3>
                        </div>
                        <ul className='mt-2 list-disc'>
                            <div className='pl-6'>
                                <li className=''>
                                    <span className='font-bold'>Dr. Parmesh Shah</span>,
                                    <span className='italic'> Global Lead, Data-Driven, Digital Agriculture and Innovations</span>,
                                    <span className='font-bold'> The World Bank</span>
                                </li>
                                <li className=''>
                                    <span className='font-bold'>Piet Van Asten</span>,
                                    <span className='italic'> Head of Sustainable Production Systems</span>,
                                    <span className='font-bold'> Olam Food Ingredients (ofi)</span>
                                </li>
                                <li className=''>
                                    <span className='font-bold'>Sean Edwards</span>,
                                    <span className='italic'> Chairman</span>,
                                    <span className='font-bold'> International Trade Forfaiting Association (ITFA)</span>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>

                <div className='mt-8'>
                    <div className='w-full grid grid-cols-10 gap-x-4 h-max '>
                        <div className='w-full text-white font-medium col-span-2 justify-center bg-lime-700 mx-auto flex items-center px-6'>
                            16:30
                        </div>
                        <div className='w-full text-white font-medium col-span-8 bg-lime-700 mx-auto flex items-center px-6 py-2'>
                            FARMERS PANEL
                        </div>
                    </div>
                    <div className='mt-2'>
                        <h3>Chair:</h3>
                        <h3 className=''><span className='font-bold'>Shooka Bidarian</span>, <span className='italic'>Freelance Climate Journalist</span></h3>
                    </div>
                    <ul className='mt-2 list-disc'>
                        <h3>Speakers:</h3>
                        <div className='pl-6'>
                            <li className=''>
                                <span className='font-bold'>Newerly Gutierrez Falla</span>,
                                <span className='italic'> Colombian Farmer</span>
                            </li>
                            <li className=''>
                                <span className='font-bold'>Andrew Gatera</span>,
                                <span className='italic'> Rwandan Farmer</span>
                            </li>
                        </div>
                    </ul>
                </div>

                <div className='mt-8'>
                    <div className='w-full grid grid-cols-10 gap-x-4 h-max '>
                        <div className='w-full text-white font-medium col-span-2 justify-center bg-gray-600 mx-auto flex items-center px-6'>
                            17:00
                        </div>
                        <div className='w-full text-white font-medium col-span-8 bg-gray-600 mx-auto flex items-center px-6 py-2'>
                            END OF DAY 1 SUMMIT
                        </div>
                    </div>
                </div>

                <div className='mt-8'>
                    <div className='w-full grid grid-cols-10 gap-x-4 h-max '>
                        <div className='w-full text-white font-medium col-span-2 justify-center bg-gray-600 mx-auto flex items-center px-6'>
                            18:30 - 20:30
                        </div>
                        <div className='w-full text-white font-medium col-span-8 bg-gray-600 mx-auto flex items-center px-6 py-2'>
                            “NETWORKING SOIREE” AT THE UK HOUSE OF LORDS
                        </div>
                    </div>
                </div>

                <h2 className="mt-8 text-2xl font-bold text-center tracking-tight">DAY TWO– Thursday 17th OCTOBER 2024</h2>

                <div className='mt-8'>
                    <div className='w-full grid grid-cols-10 gap-x-4 h-max '>
                        <div className='w-full text-white font-medium col-span-2 justify-center bg-gray-600 mx-auto flex items-center px-6'>
                            8:00 - 9:00
                        </div>
                        <div className='w-full text-white font-medium col-span-8 bg-gray-600 mx-auto flex items-center px-6 py-2'>
                            MORNING COFFEE & REGISTRATION
                        </div>
                    </div>
                </div>

                <div className='mt-8'>
                    <div className='w-full grid grid-cols-10 gap-x-4 h-max '>
                        <div className='w-full text-white font-medium col-span-2 justify-center bg-lime-700 mx-auto flex items-center px-6'>
                            9:00
                        </div>
                        <div className='w-full text-white font-medium col-span-8 bg-lime-700 mx-auto flex items-center px-6 py-2'>
                            SHORT INTRO BY SUMMIT CHAIR
                        </div>
                    </div>
                    <div className='mt-4 px-2 max-w-3xl'>
                        <h3 className=''><span className='font-bold'>Sean Edwardsa</span>, <span className='italic'>Chairman,</span> <span className='font-bold'>INTERNATIONAL TRADE AND FORFAITING ASSOCIATION (ITFA)</span></h3>
                    </div>
                </div>

                <div className='mt-8'>
                    <div className='w-full grid grid-cols-10 gap-x-4 h-max '>
                        <div className='w-full text-white font-medium col-span-2 justify-center bg-lime-700 mx-auto flex items-center px-6'>
                            9:05
                        </div>
                        <div className='w-full text-white font-medium col-span-8 bg-lime-700 mx-auto flex items-center px-6 py-2'>
                            OPENING INSTITUTIONAL KEYNOTE
                        </div>
                    </div>
                    <div className='mt-4 px-2 max-w-3xl'>
                        <h3 className=''><span className='font-bold'>Dr. Ngozi Okonjo-Iweala</span>, <span className='italic'>Director-General,</span> <span className='font-bold'>World Trade Organization (WTO)</span></h3>
                    </div>
                </div>

                {/* agenda 9 */}
                <div className='mt-8'>
                    <div className='w-full grid grid-cols-10 gap-x-4 h-max '>
                        <div className='w-full text-white font-medium col-span-2 justify-center bg-lime-700 mx-auto flex items-center px-6'>
                            9:15
                        </div>
                        <div className='w-full text-white font-medium col-span-8 bg-lime-700 mx-auto flex items-center px-6 py-2'>
                            GOVERNMENT KEYNOTE
                        </div>
                    </div>
                    <div className='mt-4 px-2 max-w-3xl'>
                        <h3 className=''><span className='font-bold'>Antti Rautavaara</span>, <span className='italic'>Special Envoy for Water</span>, <span className='font-bold'>Ministry for Foreign Affairs of Finland</span ></h3>
                    </div>
                </div>

                <div className='mt-8'>
                    <div className='w-full grid grid-cols-10 gap-x-4 h-max'>
                        <div className='w-full text-white font-medium col-span-2 justify-center bg-lime-700 mx-auto flex items-center px-6'>
                            9:25
                        </div>
                        <div className='w-full text-white font-medium col-span-8 bg-lime-700 mx-auto flex items-center px-6 py-2'>
                            GLOBAL LEADERS FORUM: CRAFTING THE FUTURE OF SUSTAINABLE GLOBAL COLLABORATION (TBC)
                        </div>
                    </div>
                    <div className='mt-4 px-2 max-w-3xl'>
                        <ul className='mt-2 list-disc'>
                            <div className='pl-6'>
                                <li>An organisation is only as good as the leader that shapes their future through richness of ideas, novelty of approaches and cross-sharing of perspectives, to what extent does government or business translates these ideas into impactful actions to benefit the organisation they serve?</li>
                                <li>How do you as a leader, harness the power of technology and innovation to bring positive change and curate global impact?</li>
                                <li>What is the most strategic and toughest management role that you have played that required resilience and a sense of purpose?</li>
                                <li>How do we orchestrate the global leaders to share the biggest responsibility to commit themselves to achieve Net Zero and SDGs?</li>
                            </div>
                        </ul>
                        <div className='mt-2'>
                            <h3>Chair:</h3>
                            <h3 className=''><span className='font-bold'>Joy Macknight</span>, <span className='italic'>Journalist, Former Editor</span>, <span className='font-bold'>Financial Times - The Banker</span></h3>
                        </div>
                        <ul className='mt-2 list-disc'>
                            <h3>Speakers:</h3>
                            <div className='pl-6'>
                                <li className=''>
                                    <span className='font-bold'>Sarah Nelen</span>,
                                    <span className='italic'> Acting Director Green Diplomacy and Multilateralism(ENV. F), Directorate-General for Environment</span>,
                                    <span className='font-bold'> European Commission</span>
                                </li>
                                <li className=''>
                                    <span className='font-bold'>Sarah Nelen</span>,
                                    <span className='italic'> Acting Director Green Diplomacy and Multilateralism (ENV. F), Directorate-General for Environment</span>,
                                    <span className='font-bold'> European Commission</span>
                                </li>
                                <li className=''>
                                    <span className='font-bold'>Dr Jennifer “Vern” Long</span>,
                                    <span className='italic'> CEO</span>,
                                    <span className='font-bold'> World Coffee Research (WCR)</span>
                                </li>
                                <li className=''>
                                    <span className='font-bold'>H.E. Johnston Busingye</span>,
                                    <span className='italic'> High Commissioner</span>,
                                    <span className='font-bold'> The Republic of Rwanda to the United Kingdom</span>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>

                <div className='mt-8'>
                    <div className='w-full grid grid-cols-10 gap-x-4 h-max'>
                        <div className='w-full text-white font-medium col-span-2 justify-center bg-lime-700 mx-auto flex items-center px-6'>
                            10:05
                        </div>
                        <div className='w-full text-white font-medium col-span-8 bg-lime-700 mx-auto flex items-center px-6 py-2'>
                            COFFEE SCIENCE KEYNOTE
                        </div>
                    </div>
                    <div className='mt-4 px-2 max-w-3xl'>
                        <h3 className=''><span className='font-bold'>Jennifer “Vern” Long</span>, <span className='italic'>CEO</span>, <span className='font-bold'>World Coffee Research (WCR)</span ></h3>
                    </div>
                </div>

                <div className='mt-8'>
                    <div className='w-full grid grid-cols-10 gap-x-4 h-max'>
                        <div className='w-full text-white font-medium col-span-2 justify-center bg-gray-600 mx-auto flex items-center px-6'>
                            10:15
                        </div>
                        <div className='w-full text-white font-medium col-span-8 bg-gray-600 mx-auto flex items-center px-6 py-2'>
                            AGRI-DATA SOLUTION PRESENTATION
                        </div>
                    </div>
                    <div className='mt-4 px-2 max-w-3xl'>
                        <h3 className=''><span className='font-bold'>Jonathan Sullivan</span>, <span className='italic'>Vice President Commercial & Sustainability</span>, <span className='font-bold'>Agmatix</span ></h3>
                    </div>
                </div>

                <div className='mt-8'>
                    <div className='w-full grid grid-cols-10 gap-x-4 h-max'>
                        <div className='w-full text-white font-medium col-span-2 justify-center bg-lime-700 mx-auto flex items-center px-6'>
                            10:25
                        </div>
                        <div className='w-full text-white font-medium col-span-8 bg-lime-700 mx-auto flex items-center px-6 py-2'>
                            LEVERAGING SCALABLE TECHNOLOGY TO DELIVER TRACEABILITY
                        </div>
                    </div>
                    <div className='mt-4 px-2 max-w-3xl'>
                        <ul className='mt-2 list-disc'>
                            <div className='pl-6'>
                                <li>What are some major breakthroughs in traceability space to foster ethical sourcing in coffee? </li>
                                <li>What are the key and major challenges in the coffee supply chain including land use that exacerbate supply shortages and how is climate change reshaping coffee production?</li>
                                <li>How can “shared value” serve as the foundation for the relationships between global brands and their suppliers and what are the potential consequences of non-commitment to transparency?</li>
                                <li>How does traceability benefit the consumers?</li>
                            </div>
                        </ul>
                        <div className='mt-2'>
                            <h3>Chair:</h3>
                            <h3 className=''><span className='font-bold'>Grainne Lynch</span>, <span className='italic'>Business Transformation Lead</span>, <span className='font-bold'>IBM Consulting</span></h3>
                        </div>
                        <ul className='mt-2 list-disc'>
                            <h3>Speakers:</h3>
                            <div className='pl-6'>
                                <li className=''>
                                    <span className='font-bold'>Pablo von Waldenfels</span>,
                                    <span className='italic'> Director Corporate Responsibility</span>,
                                    <span className='font-bold'> Tchibo GmbH</span>
                                </li>
                                <li className=''>
                                    <span className='font-bold'>Rick van der Kamp</span>,
                                    <span className='italic'> Global Lead for Markets, Value Chains and Rural Finance</span>,
                                    <span className='font-bold'> International Fund for Agriculture Development (IFAD)</span>
                                </li>
                                <li className=''>
                                    <span className='font-bold'>Paul Rooke</span>,
                                    <span className='italic'> Executive Director</span>,
                                    <span className='font-bold'> British Coffee Association (BCA)</span>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>

                <div className='mt-8'>
                    <div className='w-full grid grid-cols-10 gap-x-4 h-max'>
                        <div className='w-full text-white font-medium col-span-2 justify-center bg-gray-600 mx-auto flex items-center px-6'>
                            11:05
                        </div>
                        <div className='w-full text-white font-medium col-span-8 bg-gray-600 mx-auto flex items-center px-6 py-2'>
                            NETWORKING COFFEE BREAK - CUPPING SESSION ST JAMES’S HALL
                        </div>
                    </div>
                </div>

                <div className='mt-8'>
                    <div className='w-full grid grid-cols-10 gap-x-4 h-max'>
                        <div className='w-full text-white font-medium col-span-2 justify-center bg-lime-700 mx-auto flex items-center px-6'>
                            11:35
                        </div>
                        <div className='w-full text-white font-medium col-span-8 bg-lime-700 mx-auto flex items-center px-6 py-2'>
                            GEO-SPATIAL INNOVATION KEYNOTE
                        </div>
                    </div>
                    <div className='mt-4 px-2 max-w-3xl'>
                        <h3 className=''>
                            <span className='font-bold'>Graham Turnock</span>,
                            <span className='italic'> Special Adviser</span>,
                            <span className='font-bold'> European Space Agency (ESA)</span>
                        </h3>
                    </div>
                </div>

                <div className='mt-8'>
                    <div className='w-full grid grid-cols-10 gap-x-4 h-max'>
                        <div className='w-full text-white font-medium col-span-2 justify-center bg-lime-700 mx-auto flex items-center px-6'>
                            11:45
                        </div>
                        <div className='w-full text-white font-medium col-span-8 bg-lime-700 mx-auto flex items-center px-6 py-2'>
                            INNOVATIVE SOLUTION PRESENTATION
                        </div>
                    </div>
                    <div className='mt-4 px-2 max-w-3xl'>
                        <h3 className=''>
                            <span className='font-bold'>Patrik Lanz</span>,
                            <span className='italic'> EUDR Product Director</span>,
                            <span className='font-bold'> osapiens</span>
                        </h3>
                    </div>
                </div>

                <div className='mt-8'>
                    <div className='w-full grid grid-cols-10 gap-x-4 h-max'>
                        <div className='w-full text-white font-medium col-span-2 justify-center bg-lime-700 mx-auto flex items-center px-6'>
                            11:55
                        </div>
                        <div className='w-full text-white font-medium col-span-8 bg-lime-700 mx-auto flex items-center px-6 py-2'>
                            FUNDING SCALABLE INNOVATIONS FOR NET POSITIVE SOCIAL IMPACT
                        </div>
                    </div>
                    <div className='mt-4 px-2 max-w-3xl'>
                        <ul className='mt-2 list-disc'>
                            <div className='pl-6'>
                                <li>What is the role or impact and green finance in removing barriers that exclude people, especially smallholder farmers, as they take a grip of high cost of living and production cost?</li>
                                <li>What is the role of data in a Fintech ecosystem to improve risk management and long-term financial performance?</li>
                                <li>How can “Blended Finance” able to crowd-in both private and public financing to create the right balance of risk allocation?</li>
                                <li>How can impact funding address the estimated $350 billion annual requirement to enhance food system sustainability? Where does the current trajectory stand in meeting this goal?</li>
                                <li>What innovative investment instruments and advisory services are banks, family offices, insurance companies, foundations, and asset managers developing to enhance access to pioneering companies and projects within the food and Agri-tech sectors?</li>
                                <li>With the rise of greenwashing and impact in the industry, how are investors addressing the lack of benchmarking and standards in deploying capital and measuring its impact?</li>
                            </div>
                        </ul>
                        <div className='mt-2'>
                            <h3>Chair:</h3>
                            <h3 className=''><span className='font-bold'>Barney Reynolds</span>, <span className='italic'>Partner</span>, <span className='font-bold'>A&O Shearman</span></h3>
                        </div>
                        <ul className='mt-2 list-disc'>
                            <h3>Speakers:</h3>
                            <div className='pl-6'>
                                <li className=''><span className='font-bold'>Ashley Olson Onyango</span>, <span className='italic'>Head of Financial Inclusion & AgriTech</span>, <span className='font-bold'>GSMA</span></li>
                                <li className=''><span className='font-bold'>Jari Partanen</span>, <span className='italic'>Former Board Director</span>, <span className='font-bold'>EBRD</span></li>
                                <li className=''><span className='font-bold'>Richard Jones</span>, <span className='italic'>INED and Chair of Risk</span>, <span className='font-bold'>FCMB Bank</span></li>
                                <li className=''><span className='font-bold'>Juan Cabrera</span>, <span className='italic'>Senator UK</span>, <span className='font-bold'>WBAF</span></li>
                            </div>
                        </ul>
                    </div>
                </div>

                <div className='mt-8'>
                    <div className='w-full grid grid-cols-10 gap-x-4 h-max'>
                        <div className='w-full text-white font-medium col-span-2 justify-center bg-gray-600 mx-auto flex items-center px-6'>
                            12:35
                        </div>
                        <div className='w-full text-white font-medium col-span-8 bg-gray-600 mx-auto flex items-center px-6 py-2'>
                            NETWORKING LUNCH
                        </div>
                    </div>
                </div>

                <div className='mt-8'>
                    <div className='w-full grid grid-cols-10 gap-x-4 h-max'>
                        <div className='w-full text-white font-medium col-span-2 justify-center bg-lime-700 mx-auto flex items-center px-6'>
                            13:35
                        </div>
                        <div className='w-full text-white font-medium col-span-8 bg-lime-700 mx-auto flex items-center px-6 py-2'>
                            GLOBAL ADVOCACY KEYNOTE
                        </div>
                    </div>
                    <div className='mt-4 px-2 max-w-3xl'>
                        <h3 className=''><span className='font-bold'>Sylvia Megret</span>, <span className='italic'>President and Chief Executive Officer</span>, <span className='font-bold'>ACDI/VOCA</span></h3>
                    </div>
                </div>

                {/* agenda 14 */}
                <div className='mt-8'>
                    <div className='w-full grid grid-cols-10 gap-x-4 h-max'>
                        <div className='w-full text-white font-medium col-span-2 justify-center bg-lime-700 mx-auto flex items-center px-6'>
                            13:45
                        </div>
                        <div className='w-full text-white font-medium col-span-8 bg-lime-700 mx-auto flex items-center px-6 py-2'>
                            INNOVATIONS DRIVING CLIMATE ACTION & CARBON MARKETS STANDARDS 
                        </div>
                    </div>
                    <div className='mt-4 px-2 max-w-3xl'>
                        <ul className='mt-2 list-disc'>
                            <div className='pl-6'>
                                <li>What is the most impactful policy-based innovations currently driving the decarbonisation of commercial agriculture, particularly in commodity chains like coffee, and how can these be scaled in other sectors or regions?</li>
                                <li>How can businesses effectively incorporate below value-chain mitigation (BVCM) strategies into their decarbonisation efforts while maintaining environmental integrity and addressing potential challenges with social equity?</li>
                                <li>What are the key financial instruments in carbon finance that can be leveraged to support decarbonisation in the agricultural sector, and how can these ensure both financial viability and long-term sustainability of carbon markets?</li>
                                <li>In the context of the coffee sector, what mechanisms or safeguards are needed to integrate carbon markets into corporate net-zero pathways while ensuring transparency, accountability, and alignment with global decarbonisation goals?</li>
                            </div>
                        </ul>
                        <div className='mt-2'>
                            <h3>Chair:</h3>
                            <h3 className=''><span className='font-bold'>James Chamberlayne</span>, <span className='italic'>Director, Sustainable Finance Program</span>, <span className='font-bold'>CDP</span></h3>
                        </div>
                        <ul className='mt-2 list-disc'>
                            <h3>Speakers:</h3>
                            <div className='pl-6'>
                                <li className=''>
                                    <span className='font-bold'>Owen Hewlett</span>,
                                    <span className='italic'> Chief Technical Officer</span>,
                                    <span className='font-bold'> Gold Standard; Technical Council Member</span>,
                                    <span className='font-bold'> SBTi</span>
                                </li>
                                <li className=''>
                                    <span className='font-bold'>Evan Paul</span>,
                                    <span className='italic'> Senior Director, Innovation for Nature</span>,
                                    <span className='font-bold'> Salesforce</span>
                                </li>
                                <li className=''>
                                    <span className='font-bold'>Josep Garí</span>,
                                    <span className='italic'> Head of Climate, Forests & Land</span>,
                                    <span className='font-bold'> United Nations / UNDP</span>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>

                <div className='mt-8'>
                    <div className='w-full grid grid-cols-10 gap-x-4 h-max'>
                        <div className='w-full text-white font-medium col-span-2 justify-center bg-gray-600 mx-auto flex items-center px-6'>
                            14:25
                        </div>
                        <div className='w-full text-white font-medium col-span-8 bg-gray-600 mx-auto flex items-center px-6 py-2'>
                            NETWORKING COFFEE BREAK
                        </div>
                    </div>
                </div>

                <div className='mt-8'>
                    <div className='w-full grid grid-cols-10 gap-x-4 h-max'>
                        <div className='w-full text-white font-medium col-span-2 justify-center bg-lime-700 mx-auto flex items-center px-6'>
                            14:55
                        </div>
                        <div className='w-full text-white font-medium col-span-8 bg-lime-700 mx-auto flex items-center px-6 py-2'>
                            CROSS-INDUSTRY KEYNOTE
                        </div>
                    </div>
                    <div className='mt-4 px-2 max-w-3xl'>
                        <h3 className=''><span className='font-bold'>Chris Southworth</span>, <span className='italic'>Secretary General</span>, <span className='font-bold'>ICC United Kingdom</span></h3>
                    </div>
                </div>


                {/* agenda 16 */}
                <div className='mt-8'>
                    <div className='w-full grid grid-cols-10 gap-x-4 h-max'>
                        <div className='w-full text-white font-medium col-span-2 justify-center bg-lime-700 mx-auto flex items-center px-6'>
                            15:05
                        </div>
                        <div className='w-full text-white font-medium col-span-8 bg-lime-700 mx-auto flex items-center px-6 py-2'>
                            TRANSFORMING GLOBAL TRADE TO DELIVER SUSTAINABILITY
                        </div>
                    </div>
                    <div className='mt-4 px-2 max-w-3xl'>
                        <ul className='mt-2 list-disc'>
                            <div className='pl-6'>
                                <li>What is the current state of the sectors you represent and what are some of the challenges in the overall global trade digitalisation?</li>
                                <li>What are some solutions or innovations in digitalisation being implemented to address these challenges to reduce GHG emissions and how do they relate to the overall Net Zero target?</li>
                                <li>How do you see the role of international trade rules including at the WTO in making global trade paperless, climate-neutral and sustainable?</li>
                                <li>What are some of the best practices you can share that the coffee industry can learn?</li>
                                <li>How can banks and finance institutions facilitate implementing this systemic change in global trade to deliver sustainability?</li>
                                <li>What is the future of global trade? Is global trade ready for digital standardisation and disruptive innovation?</li>
                            </div>
                        </ul>
                        <div className='mt-2'>
                            <h3>Chair:</h3>
                            <h3 className=''><span className='font-bold'>Dr. Helge Elisabeth Zeitler</span>, <span className='italic'>Director for UN, EU</span>, <span className='font-bold'>German Federal Ministry for Economic Cooperation and Development (BMZ)</span></h3>
                        </div>
                        <div className='mt-2'>
                            <h3>Speakers:</h3>
                        </div>
                        <ul className='mt-2 list-disc'>
                            <div className='pl-6'>
                                <li className=''><span className='font-bold'>Karla Canavan</span>, <span className='italic'>Vice President, Commodity Trade and Finance, Markets</span>, <span className='font-bold'>WWF</span></li>
                                <li className=''><span className='font-bold'>H. E. Alex Assanvo</span>, <span className='italic'>Executive Secretary</span>, <span className='font-bold'>Cȏte d’Ivoire Ghana Cocoa Initiative (CIGCI)</span></li>
                                <li className=''><span className='font-bold'>N L N Swaroop</span>, <span className='italic'>Global Product Head – Sustainability, Innovation, FIs, Asset distribution & Capital Management, Global Trade Solutions</span>, <span className='font-bold'>HSBC</span></li>
                                <li className=''><span className='font-bold'>Thomas Bagge</span>, <span className='italic'>Chief Executive Officer</span>, <span className='font-bold'>Digital Container Shipping Association (DCSA)</span></li>
                            </div>
                        </ul>
                    </div>
                </div>

                <div className='mt-8'>
                    <div className='w-full grid grid-cols-10 gap-x-4 h-max '>
                        <div className='w-full text-white font-medium col-span-2 justify-center bg-gray-600 mx-auto flex items-center px-6'>
                            15:55 
                        </div>
                        <div className='w-full text-white font-medium col-span-8 bg-gray-600 mx-auto flex items-center px-6 py-2'>
                            CLOSING KEYNOTE
                        </div>
                    </div>
                    <div className='mt-4 px-2 max-w-5xl'>
                        <h3 className=''><span className='font-bold'>Dr. Qu Dongyu</span>, <span className='italic'>Director-General</span>, <span className='font-bold'>Food and Agriculture Organization of the United Nations (FAO)</span></h3>
                    </div>
                </div>

                <div className='mt-8'>
                    <div className='w-full grid grid-cols-10 gap-x-4 h-max '>
                        <div className='w-full text-white font-medium col-span-2 justify-center bg-gray-600 mx-auto flex items-center px-6'>
                            16:00
                        </div>
                        <div className='w-full text-white font-medium col-span-8 bg-gray-600 mx-auto flex items-center px-6 py-2'>
                            END OF SUMMIT
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Agenda