"use client"
import Image from 'next/image'
import React, { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link'
import SpeakerBioModal from './SpeakerBioModal'

export type Speaker = {
  name: string,
  role: string,
  company: string,
  imageUrl: string,
  bio: string[]
}

const speakers = [
    {
        name: 'Helge Elisabeth Zeitler',
        role: 'Deputy Head Of Unit DG Environment',
        company: 'European Commission',
        imageUrl:
            'https://worldcoffeealliance.com/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-19-at-22.11.07.jpeg',
        bio: ['A lawyer by training, Helge Zeitler is the Deputy Head of the unit leading, amongst other topics, on the EU Regulation on deforestation-free supply chains in the Directorate General for Environment at the European Commission. She has been in this position since 2021. Prior to her current posting, she served at the EU Delegation to the UN in New York and as Deputy Head and team leader on several topics related to bilateral and multilateral environmental cooperation. She has also worked with the German Foreign Ministry and at the UN.']
    },
    {
      name: 'Fiorella Sanchez',
      role: 'Sustainabilty Manager',
      company: 'KPMG',
      imageUrl:
          'https://worldcoffeealliance.com/wp-content/uploads/2023/11/FiorellaSanchezEDITED.jpg',
      bio: ['Fiorella Sanchez is a passionate biologist, biodiversity specialist & MBA devoted to conserve nature with a business approach. Sustainability more than a competitive advantage, has an enormous transformative potential and I seek to drive changes within the industries for a better future for all.', 'Currently leading the biodiversity efforts at KPMG BE, part of the biodiversity working group at KPMG Europe, Middle East and Africa, and co-leading the KPMG Global EU Deforestation-Free Regulation efforts globally.']
    },
    {
      name: 'Bension Kibicho',
      role: 'Executive Secretary',
      company: 'Kenya Coffee Traders Association (KCTA)',
      imageUrl:
          'https://worldcoffeealliance.com/wp-content/uploads/2023/11/Benson-photo.jpeg',
      bio: ['Benson is a professional in the Kenya coffee sector, having worked as the Executive Secretary for the Kenya Coffee Traders Association. He is passionate about the coffee sector and the role of coffee exporters in leveraging market access, efficiency, and emerging technologies to ensure that Kenya coffee is enjoyed by coffee enthusiasts the world over. ']
    },
    {
      name: 'Carolina Padilla',
      role: 'President',
      company: 'Instituto Salvadoreño del Café (ISC)',
      imageUrl:
          'https://worldcoffeealliance.com/wp-content/uploads/2023/11/CAROLINA-PADILLA-ISC.jpeg',
      bio: ['Carolina Padilla is a lawyer by profession. From 2003 to 2004 she was Coordinator for El Salvador of the "Q" Auction Program, and from 2004 to 2007 she was Coordinator for El Salvador of the Cup of Excellence Program. In 2021 she became Executive Director of the Salvadoran Coffee Council, and in 2023 with the formation of the new Salvadoran Coffee Institute, she is now its President']
    },
    {
      name: 'Dejene Dadi Dika',
      role: 'General Manager',
      company: 'Oromia Coffee Farmers Cooperatives Union',
      imageUrl:
          'https://worldcoffeealliance.com/wp-content/uploads/2023/11/Dejene2.jpeg,',
      bio: ["Mr. Dejene Dadi is the General Manager of Africa's largest Coffee Growers Union. The Oromia Coffee Farmers Cooperators Union. (OCFCU) have 557,186 coffee producer members The Union is the successful history of Ethiopia, exporting traceable, Fairtrade, Organic, and various eight certified coffees around the world. Mr. Dejene has more than 20 years of experience in a variety of roles in government, non-governmental organizations and private businesses. He has demonstrated the ability to build strong teams and work effectively with a variety of departments to implement new tasks and procedures and meet all milestones.", 'He is volunteer for Fairtrade Africa board committee for Audit and Risk management since 2022.']
    },
    {
      name: 'Giacomo Celi',
      role: 'Global Sustainability Director',
      company: 'Mercon Coffee Group',
      imageUrl:
          'https://worldcoffeealliance.com/wp-content/uploads/2021/08/giacomo_square.png',
      bio: ['Giacomo is a tropical agronomist and agro supply chains management expert, with focus on coffee. He studied at the University of Florence, Wageningen University and the University of Oxford. In the past 20 years, he has covered senior roles in procurement, business development and corporate responsibility for global brands such as illycaffé and Caffe Nero Group, for the sugar subsidiary of ABF (Associated British Foods) and since 2018 at Mercon Coffee Group, one of the largest green coffee suppliers globally. Giacomo is primarily interested in the development of sustainable coffee supply chains by designing platforms and market systems that provide added value and contributions from multiple stakeholders, while focusing on the weaker and more exposed actors in the coffee supply chain, farmers and their farms.']
    },
    {
      name: 'Clive de Ruig',
      role: 'President',
      company: 'ICE Benchmark Administration (IBA)',
      imageUrl:
          'https://worldcoffeealliance.com/wp-content/uploads/2023/09/Clive-de-Ruig-Headshot.jpg',
      bio: ['Clive became President of ICE Benchmark Administration (IBA) in 2022. IBA is one of the world’s most experienced administrators of regulated benchmarks, offering robust benchmark and data administration services. Prior to IBA, Clive was Chief Operating Officer of ICE Futures Europe since October 2017. ICE Futures Europe is Europe’s largest and most diversified futures exchange and the home to benchmark contracts in energy, carbon, soft commodities and financial futures. He was previously Head of Cross Business Solutions and joined ICE in 2008 through theCreditex acquisition. From 2009 to 2017 Clive was the Global Head of ICE Link, a middleware technology service focused on enabling customers to achieve operational risk reduction and trade processing efficiencies in their Credit Derivative business. Clive also led the OTC Financial Sales Team from 2011 helping establish and grow ICE’s market leading CDS Clearing business. Prior to joining T-Zero, the precursor to ICE Link in 2005, Clive worked at GFI and Telerate in London and the Continental Grain Company of New York and Egon Oldenforff in Hong Kong.']
    },
    {
      name: 'Thorsten Arndt',
      role: 'Head of Advocacy',
      company: 'ICE Benchmark Administration (IBA)',
      imageUrl:
          'https://worldcoffeealliance.com/wp-content/uploads/2023/11/Thorsten-Arndt-1.jpg',
      bio: ['Thorsten is a passionate communications and advocacy professional with more than 18 years of experience in multistakeholder engagement with international organisations, governments, civil society, business and think tanks. He works as Head of Advocacy for PEFC, the Programme for the Endorsement of Forest Certification. PEFC is the world’s leading forest certification system and forest certification system of choice for smallholder. Thorsten is also an experienced speaker and pro bono leader of Toastmasters International, a not for profit organisation dedicated to public speaking and leadership development.']
    },
    {
      name: 'Dr. Ulrich Heindl',
      role: 'Founder & CEO',
      company: 'GTS Global Traceability',
      imageUrl:
          'https://worldcoffeealliance.com/wp-content/uploads/2023/11/Dr.-Ulrich-Heindl.jpg',
      bio: ['Dr. Ulrich Heindl studied agriculture with a specialisation in nutrition at the technical University of Munich. He obtained his Ph.D. in 1993 from the institute of Nutrition Physiology where he continued for three years as a post-doctoral researcher. Further to this, he ran the applied research department for Hoffmann La Roche.',

      'He joined BASF in 1997 to run their global technical marketing for feed enzymes. He was subsequently appointed as senior regional marketing manager for Asia/Pacific. His final role at BASF was as a senior strategic marketing manager in Germany, developing new strategies for the Fine Chemicals division.', 
      
      'He became Vice President Business Development for TraceTracker in 2006 with a focus on developing and implementing traceability solutions within global food value chains. In 2007 he became COO with responsibility for global sales and solution delivery.',

      'He led numerous traceability implementation programs, including: a major roll-out within the nutrition business of the world’s leading chemicals company; a UN funded project to combat avian influenza; and a solution for one of the largest integrated duck meat producers in Thailand. He has also participated in major EU research projects related to the development of traceability solutions for a number of different industries',

      'In 2010 Dr. Heindl has founded GTS (Global Traceability Solutions) providing comprehensive solutions consisting of professional services, software development and implementation. Dr. Heindl is the acting CEO for GTS. '
      ]
    },
    {
      name: 'Rodney Muriuki',
      role: 'Global Sales Director',
      company: 'Farmforce',
      imageUrl:
          'https://worldcoffeealliance.com/wp-content/uploads/2023/11/Rodney-Muriuki.png',
      bio: ["Rodney is on a mission to sustainably improve agriculture in emerging markets. He has spent the last 12 years across multiple sectors in the agricultural space; farms, food factories, and the UN, in Europe and Africa developing and selling solutions to help minimize food loss and increase commercial value for agribusinesses and multinationals. With his understanding of the farmers' need for access to technology and the need to improve business performance, Rodney now connects companies to Farmforce to ensure the provision of safe, responsibly sourced high-quality ingredients and food products around the world. He also serves as a board member and advisor to a number of agribusinesses."]
    },
    {
      name: 'Marcos Antonio Matos',
      role: 'CEO',
      company: 'Cecafé',
      imageUrl:
          'https://worldcoffeealliance.com/wp-content/uploads/2023/11/Marcos-Matos-1.jpg',
      bio: ['Marcos Matos is Agronomic Engineer and has more than 20 years of experience in agribusiness. Since 2016 he is CEO at Cecafe - The Brazilian Coffee Exports Council. Prior to Cecafé he was Executive-Director at the Brazilian Agribusiness Association (Abag/RP). Also worked in the Project Management Department of Getúlio Vargas Foundation and in the Government Affairs Department at Bayer S.A.']
    },
]

export default function WebinarSpeakers() {
    const [openModal, setOpenModal] = useState(false)
    const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker>();

    return (
        <>
            <div className="px-12 py-20 bg-gray-100 sm:px-20" id='speakers'>
                <div className="mx-auto sm:content-center">
                    <div className="max-w-2xl mx-auto text-center">
                        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">SPEAKERS</p>
                        <p className="text-lg font-bold tracking-tight text-gray-900 sm:text-2xl mt-4">EUDR: PRACTICAL STEPS TOWARD COMPLIANCE</p>
                    </div>
                    <ul
                        role="list"
                        className="grid grid-cols-1 mx-auto mt-20 max-w-7xl gap-x-6 gap-y-20 md:grid-cols-4 lg:gap-x-8"
                    >
                      {speakers.map((speaker, index) => (
                        <>
                          <li key={index}>
                            <a onClick={() => {
                                setSelectedSpeaker(speaker);
                                setOpenModal(true);
                              }} className="flex flex-col gap-6 hover:cursor-pointer">
                                <div className='flex-shrink-0 mx-auto'>
                                    <Image className="rounded-md w-[30rem] " src={speaker.imageUrl} alt={speaker.name} width={160} height={160} />
                                </div>
                                <div className="flex mx-auto text-center">
                                    <div>
                                        <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speaker.name}</p>
                                        <p className="leading-7 text-gray-700 text-md">{speaker.role}</p>
                                        <p className="font-semibold leading-7 text-gray-900 text-md">{speaker.company}</p>
                                    </div>
                                </div>
                            </a>
                          </li>
                        </>
                      ))}
                    </ul>
                </div>
            </div>
            {
              selectedSpeaker ? 
              <SpeakerBioModal openModal={openModal} setOpenModal={setOpenModal} speaker={selectedSpeaker as Speaker} />
              : <></>
            }
        </>
    )
}

