import { Transition, Dialog } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import Image from 'next/image'

interface T_Speaker {
  name: string;
  role: string;
  company: string;
  iconWidth: number;
  iconHeight: number;
  imageUrl: string;
  companyIcon: string;
  bio: string;
}

function Speakers2024() {
  const speakers = [
    {
      name: 'Dr. Florika Fink-Hooijer',
      role: 'Director-General, Environment Department',
      company: 'European Commission',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/05/FLORIKA-SQUARE-scaled.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2020/12/LOGO-CE_Vertical_EN_quadri_HR.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: `
        Dr. Florika Fink-Hooijer is the Director-General of the Environment 
        Department of the European Commission. 
        Having occupied various senior management positions in the European 
        Commission, Florika is recognized for her strong management and 
        leadership skills and her in-depth experience in EU policy making & 
        shaping. 
        A lawyer by training, Florika brings a proven record of accomplishment 
        in foreign external and security policy as well as in humanitarian aid and 
        disaster risk reduction. She has extensive experience in leading complex 
        inter-institutional and intergovernmental negotiations.
        In her current role, she is responsible for implementing the European 
        Green Deal objectives in particular the areas of Circular Economy, 
        Biodiversity and Zero Pollution
      `
    },
    {
      name: 'The Rt. Hon John Gummer, Lord Deben',
      role: 'Former Chairman',
      company: 'UK Climate Change Committee (The CCC)',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2023/08/Lord-Deben-Photo-2019-adj-003-scaled-1.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/05/House_of_Lords_logo_2020.svg.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: `
      The Rt. Hon John Gummer, Lord Deben, is the founder and Chairman of Sancroft International, a consultancy that advises both businesses and investors on all areas of Sustainability and ESG. Between 2012 and 2023 he was Chairman of the UK’s Independent Climate Change Committee. Lord Deben was also the UK’s longest serving Secretary of State for the Environment (1993-97) having previously been Minister of Agriculture, Fisheries, and Food. His sixteen years of top-level ministerial experience also include Minister for London, Employment Minister, and Paymaster General in HM Treasury. Lord Deben is currently Chairman of Valpak Ltd and of PIMFA, the trade body representing financial advisers and wealth managers. Throughout his political, business, and personal life Lord Deben has consistently championed an accord between sustainability and business sense.
      `
    },
    {
      name: 'Sylvia J. Megret',
      role: 'President and Chief Executive Officer',
      company: 'ACDI/VOCA',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/05/SYLVIA-SQUARE.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/05/ACDIVOCA-logo-gray-tag.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: `
      Sylvia J. Megret serves as president and CEO of ACDI/VOCA. As a global development executive with 30 years of experience, she promotes the organization’s mission and lives its values in support of inclusive, sustainable development worldwide. Sylvia joined ACDI/VOCA in December 2016, first serving as chief operating officer (COO) and later as president and COO from February 2021 to April of 2022. She also served as interim CEO from December 2017 to June 2018.
      Sylvia has proven expertise convening diverse teams that bridge functions, cultures, and international borders. She is also skilled at identifying and institutionalizing effective teams and systems for maximum efficiency and success.
      Sylvia is currently board chair of the Fundación ACDI/VOCA Latin America (FAVLA). She also serves as a board member of the Society of International Development’s U.S. Chapter (SID-US) and as the 2022 SID-US conference chair. Sylvia led ACDI/VOCA’s role as a founding member of the Coalition for Racial and Ethnic Equity in International Development (CREED) and is also a founding member of Chief (Washington).
      She holds a master’s degree in international development from American University and a bachelor’s degree in political science and French from the University of Michigan. She is fluent in English and French, and her work has taken her from Africa to Asia, Latin America, and the Caribbean.      
      `
    },
    {
      name: 'Jennifer “Vern” Long',
      role: 'Chief Executive Officer',
      company: 'World Coffee Research',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/05/JENNIFER-SQUARE-scaled.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/05/WCR-primary-logo-all-black.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: `
        Vern Long is the Chief Executive Officer of World Coffee Research (WCR). WCR unites the 
        global coffee industry to drive science-based agricultural solutions to urgently secure a 
        diverse and sustainable supply of quality coffee today and for generations to come. In close 
        collaboration with the WCR Board and member companies, Dr. Long and the WCR executive 
        leadership team are harnessing the collective power of the coffee industry to deepen public 
        and private investment and engagement in coffee R&D in response to the significant 
        innovation gap in coffee agriculture. A plant breeder by training, Long has over 25 years of 
        experience in global collaborative crop improvement and seed systems initiatives aligning 
        public sector and industry goals. She is deeply motivated by the transformative power of 
        agricultural R&D to achieve the coffee industry’s sustainability priorities. A dual citizen of 
        Canada and the U.S., she holds a Ph.D. in plant breeding from Cornell University.
      `
    },
    {
      name: 'Andrea Geremicca',
      role: 'Director General',
      company: 'European Institute of Innovation for Sustainability (EIIS)',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/05/ANDREA-SQUARE.jpeg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/05/Logo-EIIS_Colour.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: `
      Andrea Geremicca is the Director General of the European Institute of Innovation for Sustainability (EIIS). 
      He is an adjunct professor at LUISS and LUMSA, where he teaches Innovation for Sustainability, and a faculty member at Singularity University, where he specializes in innovation for sustainability and foresight. Andrea attended the Harvard Business School Exc in Boston, focusing on driving innovation in large organizations. He contributes to the Harvard Business Review, writing about future scenarios and emerging macro trends. He has delivered two TEDx Talks, in 2018 and 2021. In 2018, Andrea had the honor of lecturing at Harvard Kennedy School and Sciences Po in Paris. Additionally, he authored two books in 2022 and 2023, which have become essential texts in the business faculties of two universities.      
      `
    },
    {
      name: 'Sophie Aujean',
      role: 'Director Global Advocacy',
      company: 'Fairtrade International',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/05/SOPHIE-SQUARE.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2020/08/FBM_INT_VERT_RGB_POS.png",
      iconWidth: 50,
      iconHeight: 50,
      bio: `
      Sophie is an advocacy expert, with more than 15 years of experience in human rights and sustainable development. She joined Fairtrade International as Director of Global Advocacy in October 2022. Previously, she was working as EU Representative for WaterAid, on access to water, sanitation and hygiene in developing countries, with a focus on global health and climate adaptation. She also worked for ILGA-Europe, advocating on the human rights of LGBTI people, and beforehand, within the European Commission and the European Parliament. She has volunteered for 13 years for Amnesty International on the human rights situation in Tunisia, Syria and Lebanon. She holds a master’s degree in human rights law.
      `
    },
    {
      name: 'Tim Scharrer',
      role: 'COO and Regional Director Europe and North America',
      company: 'Volcafe',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/05/TIM-SQUARE.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/05/logo@2x-1.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: `
      Appointed Chief Operating Officer and member of the Senior Leadership Team of Volcafe in 2023, Tim assumes global oversight of Volcafe’s Sustainability and Supply Chain functions. In his capacity as Regional Director Europe and North America, Tim leads our destination businesses in those regions. 
      Tim brings over 30 years of experience in green coffee trading and operations management, from both coffee merchants and the roasting industry. Tim started his career with an apprenticeship as a wholesale and international trade specialist.
      
      He went on to work in various coffee producing countries, including eight years at Volcafe in Colombia (Carcafe), and in the coffee trade in a variety of roles and markets. Prior to re-joining Volcafe, Tim was the Managing Director of SCTC (Starbucks Coffee Trading Company), where he worked for over 15 years. 
      `
    },
    {
      name: 'Pablo von Waldenfels',
      role: 'Director Corporate Responsibility',
      company: 'Tchibo GmbH',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/05/PABLO-SQUARE-scaled.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/05/Tchibo_Logo-hor_Gold-dark_sRGB-scaled.jpg",
      iconWidth: 100,
      iconHeight: 100,
      bio: `
        In November 2022, Pablo von Waldenfels took on his new role as Director Corporate Responsibility at 
        Tchibo GmbH – alongside with Johanna von Stechow in a job-sharing concept.
        After completing his Master's degree at Leuphana University Lüneburg (Economics and Social 
        Sciences), Pablo von Waldenfels started his career at PricewaterhouseCoopers International (PwC) in
        the end of 2008. Already then, his consulting work focused on the topic of sustainability 
        management. From October 2013 to July 2015, Pablo von Waldenfels worked as a freelance 
        consultant for the Ministry of the Environment on behalf of GIZ / CIM in Uruguay. This was followed 
        by a further five and a half years at PwC as Sustainability Manager & Sustainable Finance Specialist.
        In April 2021, Pablo von Waldenfels started as Head of Sustainable Coffee at Tchibo GmbH. In this 
        position, he has since been responsible for the transformation towards sustainable and future-proof 
        coffee supply chains. Together with his team as well as business partners, coffee farmers and other 
        stakeholders along the value chain, he designs and manages in-country sustainability programs. 
        These serve as pilots and implementing grounds for the development of better farm incomes, supply 
        chains that do not respect human rights violations and to strengthen environmentally friendly coffee 
        cultivation. In addition to this role, he took over the management of the entire CR department
        together with Johanna von Stechow at the end of 2022.
        Additionally, Pablo von Waldenfels is Vice Chair of the Board of World Coffee Research (WCR) and a 
        member of the Steering Committee of the International Coffee Partners (ICP) and the initiative for
        coffee&climate (c&c).
        In his private life, the father of two daughters enjoys sports – including the participation in triathlon 
        competitions
      `
    },
    {
      name: 'Paul Rooke',
      role: 'Executive Director',
      company: 'British Coffee Association (BCA)',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/05/PAUL-SQUARE.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2023/06/BCA_PrimaryLogo_Large-scaled.jpg",
      iconWidth: 100,
      iconHeight: 100,
      bio: `
      Paul Rooke is Executive Director of the British Coffee Association, responsible for managing and leading the Association, developing key relationships and representing the Association on policy, media and technical issues.  An agricultural graduate, he has over 25 year’s experience in trade associations covering policy, technical and contractual issues. From 2013-2019 has was the President of CELCAA, the European Liaison Committee for the Agricultural and Agri-food Trade, He is a former Chairman of DG Agri’s Civil Dialogue Group for International Aspects of Agriculture of the EU’s High Level Forum for a Better Functioning Supply Chain and DG Trade’s Expert Group on EU Trade Agreements.
      `
    },
    {
      name: 'Ashley Olson Onyango',
      role: 'Head of Financial Inclusion & AgriTech',
      company: 'GSMA (Mobile for Development)',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/05/ASHLEY-SQUARE-scaled.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/05/image0011.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: `
      Ashley joined the GSMA in 2021 as the Head of Financial Inclusion and AgriTech.  Prior to joining GSMA, Ashley had been living and working in East Africa, championing financial inclusion and the development of agrifood systems across sub-Saharan Africa for over 11 years.  During this time, Ashley designed and managed funds, investing in agribusinesses and fintechs across the continent, with Root Capital and Africa Enterprise Challenge Fund (AECF), to catalyze innovation and growth for wide impact.  Ashley has played key roles in driving and supporting gender lens investing in her work.  She also worked with Mastercard Foundation and Financial Sector Deepening Africa (FSDA), managing large multi-million-dollar programmes, partnering and working with a wide array of implementing partners and key stakeholders in the industry.
 	
      Ashley holds a BSc in Management and Finance from the University of Minnesota – Twin Cities (United States) and an MBA from IESE Business School (Spain).

      `
    },
    {
      name: 'T.J. Ryan',
      role: 'Chief of Party of Philippine Coffee Advancement and Farm Enterprise Project',
      company: 'ACDI/VOCA',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/05/TJ-SQUARE.png',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/05/ACDIVOCA-logo-gray-tag.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: `
      T.J. Ryan is the chief of party of the Philippine Coffee Advancement and Farm Enterprise Project, funded by the United States Department of Agriculture. He has over 30 years of experience in international development, including project and program management with a focus on agriculture and agribusiness development. T.J. served as a Peace Corps volunteer in Benin and has lived in West, Southern, and East Africa and Ecuador. Since joining ACDI/VOCA in 2002, T.J. has focused on developing cocoa and coffee sector programs around the world, providing technical oversight, and managing partnerships throughout these value chains. He holds an MBA in international business from Johns Hopkins University and is fluent in English, French, and Spanish, with a working knowledge of Portuguese. 
      `
    },
  ];

  const [selectedSpeaker, setSelectedSpeaker] = useState<T_Speaker | null>(null);

  return (
    <>
      <div className="px-12 py-20 sm:px-20" id="speakers">
    <div className="mx-auto sm:content-center">
        <div className="max-w-2xl mx-auto text-center">
            <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">2024 SPEAKERS</p>
        </div>
        <ul
            role="list"
            className="grid grid-cols-1 mx-auto mt-20 max-w-7xl gap-x-6 gap-y-20 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-8"
        >
            {speakers.map((speaker) => (
                <li
                    onClick={() => setSelectedSpeaker(speaker)}
                    key={speaker.name}
                    className="relative border rounded-md bg-lime-700 shadow-md hover:shadow-lg"
                >
                    <a className="flex flex-col gap-2 hover:cursor-pointer">
                        <div className="relative">
                            <Image
                                className="w-full rounded-t-md"
                                src={speaker.imageUrl}
                                alt={speaker.name}
                                width={160}
                                height={160}
                            />
                            <div className="absolute w-20 h-20 right-4 top-4/4 transform -translate-y-1/2 bg-white p-2 rounded-md shadow-md">
                                <div className='flex items-center h-full'>
                                  <Image
                                    src={speaker.companyIcon}
                                    alt={`${speaker.company} logo`}
                                    width={speaker.iconWidth}
                                    height={speaker.iconHeight}
                                    className="my-auto mx-auto"
                                  />
                                </div>
                                
                            </div>
                        </div>
                        <div className="flex text-left p-4">
                            <div className="mt-6">
                                <p className="text-lg font-semibold leading-8 tracking-tight text-white md:text-2xl">
                                    {speaker.name}
                                </p>
                                <p className="leading-7 text-white text-sm">{speaker.role}</p>
                                <p className="font-semibold leading-7 text-white text-md">{speaker.company}</p>
                            </div>
                        </div>
                    </a>
                </li>
            ))}
        </ul>
    </div>
</div>

      {selectedSpeaker && (
        <Transition.Root show={Boolean(selectedSpeaker)} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={() => setSelectedSpeaker(null)}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-50" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative px-4 pt-5 pb-4 text-left transition-all transform bg-white rounded-lg shadow-xl h-max sm:my-8 sm:w-full sm:max-w-4xl sm:p-6">
                    <div className='flex flex-col h-max'>
                      <div className='flex-shrink-0 mx-auto'>
                        <Image className="rounded-md w-[20rem]" src={selectedSpeaker.imageUrl} alt={selectedSpeaker.name} width={160} height={160} />
                      </div>
                      <div className='flex justify-center p-2'>
                        <div className='bg-white p-2 rounded-md'>
                          <Image src={selectedSpeaker.companyIcon} alt={`${selectedSpeaker.company} logo`} width={100} height={100} />
                        </div>
                      </div>
                      <div className="flex mx-auto text-center">
                        <div>
                          <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{selectedSpeaker.name}</p>
                          <p className="leading-7 text-gray-700 text-md">{selectedSpeaker.role}</p>
                          <p className="font-semibold leading-7 text-gray-900 text-md">{selectedSpeaker.company}</p>
                        </div>
                      </div>
                    </div>
                    <div className="overflow-auto text-sm sm:text-md sm:mt-5 max-h-60">
                      <p className="mt-2 text-gray-600">
                        {selectedSpeaker.bio}
                      </p>
                    </div>
                    <div className="mt-5 sm:mt-6">
                      <button
                        type="button"
                        className="inline-flex justify-center max-w-5xl px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700"
                        onClick={() => setSelectedSpeaker(null)}
                      >
                        Back
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      )}
    </>
  );
}

export default Speakers2024;
