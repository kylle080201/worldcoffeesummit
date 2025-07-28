import { Transition, Dialog } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import Image from 'next/image'

interface T_Speaker {
  name: string;
  role?: string;
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
      name: 'H.E. Sheikh Mohammed Belal',
      role: 'Managing Director',
      company: 'Common Fund for Commodities (CFC)',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2025/06/H.E.-Sheikh-Mohammed-Belal-square.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2025/06/cfc_new_logo_v5_large.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: ``
    },
    {
      name: 'Wagner Albuquerque de Almeida',
      role: 'Global Director- Manufacturing, Agribusiness and Forestry',
      company: 'International Finance Corporation (IFC)',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2025/06/Wagner-Albuquerque-de-Almeida-1.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2025/06/IFC-Logo.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: ``
    },
    {
      name: 'The Rt. Hon John Gummer, Lord Deben',
      role: 'Former Chairman',
      company: 'UK Climate Change Committee (The CCC)',
      company2: "House of Lords",
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2025/06/Lord-Deben-Photo-2019-adj-003-scaled-copy.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/05/House_of_Lords_logo_2020.svg.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: `
      The Rt. Hon John Gummer, Lord Deben, is the founder and Chairman of Sancroft International, a consultancy that advises both businesses and investors on all areas of Sustainability and ESG. Between 2012 and 2023 he was Chairman of the UK’s Independent Climate Change Committee. Lord Deben was also the UK’s longest serving Secretary of State for the Environment (1993-97) having previously been Minister of Agriculture, Fisheries, and Food. His sixteen years of top-level ministerial experience also include Minister for London, Employment Minister, and Paymaster General in HM Treasury. Lord Deben is currently Chairman of Valpak Ltd and of PIMFA, the trade body representing financial advisers and wealth managers. Throughout his political, business, and personal life Lord Deben has consistently championed an accord between sustainability and business sense.
      `
    },
    {
      name: 'Jean Van Wetter',
      role: 'CEO',
      company: 'Enabel',
      imageUrl: 'https://softtechs360.com/coffee/wp-content/uploads/2025/07/Jean-Van-Wetter-1.jpg',
      companyIcon: "https://softtechs360.com/coffee/wp-content/uploads/2025/07/enabel-logo-color.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: `      `
    },

    {
      name: 'Harper McConnell',
      role: 'Global Vice President Sustainability',
      company: 'Mars',
      imageUrl: 'https://softtechs360.com/coffee/wp-content/uploads/2025/07/Harper-McConnell.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2025/06/Mars-Logo.png",
      iconWidth: 80,
      iconHeight: 80,
      bio: ` `
    },

    {
      name: 'Ruchira Joshi',
      role: 'Director, Global Coffee & Cocoa Sustainability',
      company: 'Starbucks',
      imageUrl: 'https://softtechs360.com/coffee/wp-content/uploads/2025/07/Ruchira-Joshi-1.jpeg',
      companyIcon: "https://softtechs360.com/coffee/wp-content/uploads/2025/07/Starbucks.png",
      iconWidth: 80,
      iconHeight: 80,
      bio: ` `
    },
    {
      name: 'Stefan Dierks',
      role:"Director Sustainability Strategy",
      company: 'Melitta Group',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2025/06/Stefan-Dierks.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2025/06/UG-Melitta_logo_mit_space_cmyk-e1749857040905.jpg",
      iconWidth: 100,
      iconHeight: 100,
      bio: ``
    },
    {
      name: 'Mario Abreu',
      role: 'Group Vice President Sustainability',
      company: 'Ferrero',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2025/06/Mario-Abreu.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2025/06/Ferrero-logo.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: ` `
    },
    {
      name: 'Raphaelle Peinado',
      role: 'Sustainability Director',
      company: 'Volcafe',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2025/06/Raphaelle-Peinado-2.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2025/06/Volcafe.png",
      iconWidth: 120,
      iconHeight: 120,
      bio: ` `
    },

    {
      name: 'Nicolas Mounard',
      role: 'Vice President ESG, Sustainability & Traceability',
      company: 'Barry Callebaut',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2025/06/Nicolas-Mounard.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2025/06/header-logo-bc.png",
      iconWidth: 120,
      iconHeight: 120,
      bio: ` `
    },
      {
      name: 'Thomas Delbar',
      role: 'Director of Sustainability – Coffee & Ingredients',
      company: 'Touton group',
      imageUrl: 'https://softtechs360.com/coffee/wp-content/uploads/2025/07/Thomas-Delbar.jpg',
      companyIcon: "https://softtechs360.com/coffee/wp-content/uploads/2025/07/Touton-logo-transparent-background.png",
      iconWidth: 120,
      iconHeight: 120,
      bio: ` `
    },

          {
      name: 'Piet van Asten',
      role: 'Head of Sustainable Production Systems',
      company: 'Olam Food Ingredients (ofi)',
      imageUrl: 'https://softtechs360.com/coffee/wp-content/uploads/2025/07/image-21.jpg',
      companyIcon: "https://softtechs360.com/coffee/wp-content/uploads/2025/07/image-22.png",
      iconWidth: 120,
      iconHeight: 120,
      bio: ` `
    },

    {
      name: 'Rachel Vujovic',
      role: 'Director - International Sustainability',
      company: 'ALDI SOUTH Group',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2025/06/Rachel-Vujovic-suqare.jpg',
      companyIcon: "https://softtechs360.com/coffee/wp-content/uploads/2025/07/ALDI-SUD.png",
      iconWidth: 60,
      iconHeight: 60,
      bio:''
    },

    {
      name: 'Cleiton Vargas',
      role: 'SVP Innovation Americas',
      company: 'Yara International',
      imageUrl: 'https://softtechs360.com/coffee/wp-content/uploads/2025/07/Cleiton-Vargas.jpg',
      companyIcon: "https://softtechs360.com/coffee/wp-content/uploads/2025/07/Knowledge_grows_for_A4.png",
      iconWidth: 120,
      iconHeight: 120,
      bio: ``
    },

    {
      name: 'Dr. Flávia De Souza Mendes',
      role: 'Senior Program Manager of Forest and Land Use',
      company: 'Planet',
      imageUrl: 'https://softtechs360.com/coffee/wp-content/uploads/2025/07/Dr.-Flavia-de-Souza-Mendes.jpeg',
      companyIcon: "https://softtechs360.com/coffee/wp-content/uploads/2025/07/512px-Planet_Labs_logo.svg.png",
      iconWidth: 120,
      iconHeight: 120,
      bio: ``
    },

    {
      name: 'Toby Behrmann',
      role: 'Head of London Market & Public Private Partnerships',
      company: 'AXA Climate',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2025/06/Toby-Behrmann.webp',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2025/06/AXA_Climate_Blue_Horizontal_RVB.png",
      iconWidth: 120,
      iconHeight: 120,
      bio: ``
    },

        {
      name: 'Carolina Castañeda',
      role: 'Director – Europe',
      company: 'National Federation of Coffee Growers of Colombia (FNC)',
      imageUrl: 'https://softtechs360.com/coffee/wp-content/uploads/2025/07/Carolina-Castaneda.jpeg',
      companyIcon: "https://softtechs360.com/coffee/wp-content/uploads/2025/07/Logos-FNC_Cereza.png",
      iconWidth: 120,
      iconHeight: 120,
      bio: ``
    },

    {
      name: 'Paul Stewart',
      role: 'Global Coffee Director',
      company: 'TechnoServe',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2025/06/Paul-Stewart-headshot-1.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2025/06/ENG_TNSLogoCMYK_Horz_TaglineTM_Color.png",
      iconWidth: 80,
      iconHeight: 80,
      bio: ` `
    },
    {
      name: 'Ashwini Sebastian',
      role: 'Senior Economist',
      company: 'The World Bank ',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2025/06/Ashwini-Sebastian.webp',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2025/06/The-World-Bank.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: ` `
    },

    {
      name: 'Nick Appleyard',
      role: 'Head of Applications and Solutions',
      company: 'European Space Agency (ESA)',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2025/06/Nick-Appleyard.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2025/06/ESA_logo_2020_Deep-e1749855679567.png",
      iconWidth: 80,
      iconHeight: 80,
      bio: ` `
    },

    {
      name: 'Frank de Morsier',
      role: 'Co-Founder and COO',
      company: 'Picterra',
      imageUrl: 'https://softtechs360.com/coffee/wp-content/uploads/2025/07/Frank-de-Morsier.png',
      companyIcon: "https://softtechs360.com/coffee/wp-content/uploads/2025/07/Picterra.png",
      iconWidth: 80,
      iconHeight: 80,
      bio: ` `
    },


    {
      name: 'Felipe Carazo',
      role: 'Head of Sustainable Commodities,Tropical Forest Alliance',
      company: 'World Economic Forum',
      imageUrl: 'https://softtechs360.com/coffee/wp-content/uploads/2025/07/Felipe-Carazo.jpeg',
      companyIcon: "https://softtechs360.com/coffee/wp-content/uploads/2025/07/World-Economic-Forum.png",
      iconWidth: 120,
      iconHeight: 120,
      bio: ``
    },
        {
      name: 'Owen Hewlett',
      role: 'Chief Technical Officer',
      company: 'Gold Standard',
      role2: 'Technical Council Member',
      company2: 'SBTi',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2025/06/Owen.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/08/GS_Logo_Secondary.png",
      iconWidth: 120,
      iconHeight: 120,
      bio: ` `
    },
 
    {
      name: 'Claude Bizimana',
      role: 'Chief Executive Officer (CEO)',
      company: 'National Agricultural Export Development Board (NAEB), Rwanda',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2025/06/Claude-Bizimana.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/08/NAEB-logo.jpg",
      iconWidth: 120,
      iconHeight: 120,
      bio: ``
    },
        {
      name: 'Rick van der Kamp',
      role: 'Global Lead for Markets, Value Chains and Rural Finance',
      company: 'International Fund for Agriculture Development (IFAD)',
      imageUrl: 'https://softtechs360.com/coffee/wp-content/uploads/2025/07/Rick-van-der-Kamp.jpg',
      companyIcon: "https://softtechs360.com/coffee/wp-content/uploads/2025/07/E_g_web.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: `   `
    },

    {
      name: 'Anup Jagwani',
      role: 'Global Sr. Sector Manager – Agribusiness and Forestry',
      company: 'International Finance Corporation (IFC)',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2025/06/Anup-Jagwani-1.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2025/06/IFC-Logo.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: `   `
    },
    {
      name: 'Roel Messie',
      role: 'Chief Executive Officer',
      company: 'IDH Investment Management',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2025/06/Roel-Messie-1.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2025/06/IDH-logo-kleur_RGB-e1749856681561.jpg",
      iconWidth: 240,
      iconHeight: 100,
      bio: ` `
    },
    {
      name: 'Patrick Gibson',
      role: 'EO Senior Climate Lead',
      company: 'UK Space Agency',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2025/06/Patrick-Gibson.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2025/06/full_transparent.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: ` `
    },

    {
      name: 'James Chamberlayne',
      role: 'Director, Sustainable Finance Program',
      company: 'CDP',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2025/06/James-Chamberlayne.jpg',
      companyIcon: "https://softtechs360.com/coffee/wp-content/uploads/2025/07/cdp.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: `  `
    },
    {
      name: 'Andrea Olivar',
      role: 'Strategy & Quality Director-Latin America',
      company: 'Solidaridad Network',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2025/06/Andrea-Olivar-1.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2025/06/Solidaridad.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: `
      `
    },
    {
      name: 'Taco Bosman',
      role: 'Partner',
      company: 'EY',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2025/06/Taco-Bosman.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2025/06/ernst-young-logo-0-min.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: `  `
    },

  ];

  const [selectedSpeaker, setSelectedSpeaker] = useState<T_Speaker | null>(null);

  return (
    
    <>

      <div className="px-12 py-20 sm:px-20" id="speakers">
        <div className="mx-auto sm:content-center">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">2025 SPEAKERS</p>
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
                      <div className="absolute w-24 h-24 right-4 top-4/4 transform -translate-y-1/2 bg-white p-2 rounded-md shadow-md">
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
                      <p className="leading-7 text-white text-sm">{speaker.role2}</p>
                      {speaker.company2 && <p className="font-semibold leading-7 text-white text-md">{speaker.company2}</p>}
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
                        <Image src={selectedSpeaker.companyIcon} alt={`${selectedSpeaker.company} logo`} width={140} height={140} />
                      </div>
                    </div>
                    <div className="flex mx-auto text-center">
                      <div>
                        <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-lg">{selectedSpeaker.name}</p>
                        <p className="leading-7 text-gray-700 text-md">{selectedSpeaker.role}</p>
                        <p className="font-semibold leading-7 text-gray-900 text-2xl">{selectedSpeaker.company}</p>
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
