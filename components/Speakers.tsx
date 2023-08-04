"use client"
import Image from 'next/image'
import React, { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link'

const speakers = [
    {
        key: '0',
        name: 'Dr. Qu Dongyu',
        role: 'Director-General',
        company: 'Food and Agriculture Organization of the United Nations (FAO)',
        imageUrl:
            'https://worldcoffeealliance.com/wp-content/uploads/2023/07/DG_banner-Bio.png',
    },
    {
        key: '1',
        name: 'Anthony Hobley',
        role: 'Executive Fellow; Co-Chair, Advisory Board',
        company: 'World Economic Forum; Carbon Tracker Initiative',
        imageUrl:
            'https://worldcoffeealliance.com/wp-content/uploads/2023/06/ANTHONY-HOBLEY-PHOTO.jpg',
    },
    {
        key: '2',
        name: 'Dr. Leonard Mizzi',
        role: 'Head of Unit, INTPA',
        company: 'European Commission (EC)',
        imageUrl:
            'https://worldcoffeealliance.com/wp-content/uploads/2023/05/DR-LEONARD-MIZZI.jpg',
    },
    {
        key: '3',
        name: 'Vanusia Nogueira',
        role: 'Executive Director',
        company: 'International Coffee Organization(ICO)',
        imageUrl:
            'https://worldcoffeealliance.com/wp-content/uploads/2022/07/VANUSIA-NOGUEIRA_ICO-Square-scaled.jpg',
    },
    {
        key: '4',
        name: 'H.E. Teferi Melesse Desta',
        company: 'Ethiopian Ambassador to the United Kingdom',
        imageUrl:
            'https://worldcoffeealliance.com/wp-content/uploads/2023/05/TEFERI-MELESSE-DESTA.jpg',
    },
    {
        key: '5',
        name: 'H.E. Markus Leitner',
        company: 'Ambassador of Switzerland to the United Kingdom',
        imageUrl:
            'https://worldcoffeealliance.com/wp-content/uploads/2023/05/MARKUS-LEITNER.jpg',
    },
    {
        key: '6',
        name: 'H.E. Hajime Hayashi',
        company: 'Ambassador Extraordinary and Plenipotentiary of Japan to the United Kingdom of Great Britain and Northern Ireland',
        imageUrl:
            'https://worldcoffeealliance.com/wp-content/uploads/2023/05/HAYASHU-HAJIME-1.jpg',
    },
    {
        key: '7',
        name: 'H.E. Mrs. Carmen María Gallardo',
        company: 'Ambassador from the Republic of El Salvador to the United Kingdom',
        imageUrl:
            'https://worldcoffeealliance.com/wp-content/uploads/2023/06/Carmen-Maria-Gallardo.jpg',
    },
    {
        key: '8',
        name: 'H.E. Mr Manoah Esipisu',
        company: "High Commissioner of the Republic of Kenya to the United Kingdom",
        imageUrl:
            'https://worldcoffeealliance.com/wp-content/uploads/2023/06/HE-Mr-Manoah-Esipisu.webp',
    },
    {
        key: '9',
        name: ' H.E. Guisell Morales-Echaverry',
        company: "Ambassador of the Republic of Nicaragua to the United Kingdom",
        imageUrl:
            'https://worldcoffeealliance.com/wp-content/uploads/2023/07/H.E.-Guisell-Morales-Echaverry-portrait.png',
    },
    {
        key: '10',
        name: 'Paul Rooke',
        role: 'Executive Director',
        company: 'British Coffee Association (BCA)',
        imageUrl:
            'https://worldcoffeealliance.com/wp-content/uploads/2023/05/PAUL-ROOKE.jpg',
    },
    {
        key: '11',
        name: 'Melissa Duncan',
        role: 'Executive Director',
        company: 'Fairtrade International',
        imageUrl:
            'https://worldcoffeealliance.com/wp-content/uploads/2023/02/preferred-Melissa-Duncan.jpg',
    },
    {
        key: '12',
        name: 'William Kennedy',
        role: 'Senior Executive Editor',
        company: 'Bloomberg',
        imageUrl:
            'https://worldcoffeealliance.com/wp-content/uploads/2023/05/WILLIAM-KENNEDY.jpg',
    },
    {
        key: '13',
        name: 'Nigel Hunt',
        role: 'Global Soft Commodities Correspondent',
        company: 'Reuters',
        imageUrl:
            'https://worldcoffeealliance.com/wp-content/uploads/2023/06/NIGEL-HUNT-THOMSON-REUTERS.jpg',
    },
    {
        key: '14',
        name: 'Anna R Rios',
        role: 'Climate Change Senior Specialist',
        company: 'Inter-American Development Bank (IADB)',
        imageUrl:
            'https://worldcoffeealliance.com/wp-content/uploads/2023/05/ANNA-R-RIOS.jpg',
    },
    {
        key: '15',
        name: 'Katherine Stodulka',
        role: 'Partner, Director, Blended Finance',
        company: 'Systemiq',
        imageUrl:
            'https://worldcoffeealliance.com/wp-content/uploads/2023/05/KATHERINE-SODULKA.png',
    },
    {
        key: '16',
        name: 'Gert van der Bijl',
        role: 'Senior EU Policy Advisor',
        company: 'Solidaridad',
        imageUrl:
            'https://worldcoffeealliance.com/wp-content/uploads/2023/07/Gert-van-der-Bijl-portrait-scaled.jpg',
    },
    {
        key: '17',
        name: 'Dr. Martina Bozzola',
        role: 'Senior Advisor Sustainability and Livelihood',
        company: 'International Trade Centre (UN/WTO)',
        imageUrl:
            'https://worldcoffeealliance.com/wp-content/uploads/2023/07/Bozzola.Martina-scaled.jpg',
    },
    {
        key: '18',
        name: 'Dr. Alvaro Lario',
        role: 'President',
        company: 'International Fund of Agricultural Development (IFAD) ',
        imageUrl:
            'https://worldcoffeealliance.com/wp-content/uploads/2023/07/mut5673199979946008165-1.jpg',
    },
    {
        key: '19',
        name: 'Professor Mark Maslin',
        role: 'Earth System Science',
        company: 'University College London (UCL), Natural History Museum of Denmark',
        imageUrl:
            'https://worldcoffeealliance.com/wp-content/uploads/2023/07/Mark-Maslin2.jpg',
    },
    {
        key: '20',
        name: 'Cedric Lombard',
        role: 'Founder and Co-CEO',
        company: 'Impact Finance',
        imageUrl:
            'https://worldcoffeealliance.com/wp-content/uploads/2023/07/CLO2.png',
    },
    {
        key: '21',
        name: 'Juan Cabrera',
        role: 'Vice Chair; Vice President for the UK',
        company: 'IoD Natural Resources Group; Government Blockchain Association (GBA)',
        imageUrl:
            'https://worldcoffeealliance.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-03-at-10.14.08.jpeg',
    },
    {
        key: '22',
        name: 'Jo Paisley',
        role: 'President',
        company: 'GARP Risk Institute (GRI)',
        imageUrl:
            'https://worldcoffeealliance.com/wp-content/uploads/2023/08/Jo_Paisley_GARP.jpg',
    },
]

export default function Speakers() {
    const [openSpeaker0, setOpenSpeaker0] = useState(false)
    const [openSpeaker1, setOpenSpeaker1] = useState(false)
    const [openSpeaker2, setOpenSpeaker2] = useState(false)
    const [openSpeaker3, setOpenSpeaker3] = useState(false)
    const [openSpeaker4, setOpenSpeaker4] = useState(false)
    const [openSpeaker5, setOpenSpeaker5] = useState(false)
    const [openSpeaker6, setOpenSpeaker6] = useState(false)
    const [openSpeaker7, setOpenSpeaker7] = useState(false)
    const [openSpeaker8, setOpenSpeaker8] = useState(false)
    const [openSpeaker9, setOpenSpeaker9] = useState(false)
    const [openSpeaker10, setOpenSpeaker10] = useState(false)
    const [openSpeaker11, setOpenSpeaker11] = useState(false)
    const [openSpeaker12, setOpenSpeaker12] = useState(false)
    const [openSpeaker13, setOpenSpeaker13] = useState(false)
    const [openSpeaker14, setOpenSpeaker14] = useState(false)
    const [openSpeaker15, setOpenSpeaker15] = useState(false)
    const [openSpeaker16, setOpenSpeaker16] = useState(false)
    const [openSpeaker17, setOpenSpeaker17] = useState(false)
    const [openSpeaker18, setOpenSpeaker18] = useState(false)
    const [openSpeaker19, setOpenSpeaker19] = useState(false)
    const [openSpeaker20, setOpenSpeaker20] = useState(false)
    const [openSpeaker21, setOpenSpeaker21] = useState(false)
    const [openSpeaker22, setOpenSpeaker22] = useState(false)
    return (
        <>
            <div className="px-12 py-20 bg-gray-100 sm:px-20" id='speakers'>
                <div className="mx-auto sm:content-center">
                    <div className="max-w-2xl mx-auto text-center">
                        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">SPEAKERS</p>
                    </div>
                    <ul
                        role="list"
                        className="grid grid-cols-1 mx-auto mt-20 max-w-7xl gap-x-6 gap-y-20 md:grid-cols-4 lg:gap-x-8"
                    >
                        {/* speaker 0 */}
                        <li>
                            <a onClick={() => { setOpenSpeaker0(!openSpeaker0) }} className="flex flex-col gap-6 hover:cursor-pointer">
                                <div className='flex-shrink-0 mx-auto'>
                                    <Image className="rounded-md w-[30rem] " src={speakers[0].imageUrl} alt={speakers[0].name} width={160} height={160} />
                                </div>
                                <div className="flex mx-auto text-center">
                                    <div>
                                        <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speakers[0].name}</p>
                                        <p className="leading-7 text-gray-700 text-md">{speakers[0].role}</p>
                                        <p className="font-semibold leading-7 text-gray-900 text-md">{speakers[0].company}</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        {/* speaker 1 */}
                        <li>
                            <a onClick={() => { setOpenSpeaker1(!openSpeaker1) }} className="flex flex-col gap-6 hover:cursor-pointer">
                                <div className='flex-shrink-0 mx-auto'>
                                    <Image className="rounded-md w-[30rem] " src={speakers[1].imageUrl} alt={speakers[1].name} width={160} height={160} />
                                </div>
                                <div className="flex mx-auto text-center">
                                    <div>
                                        <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speakers[1].name}</p>
                                        <p className="leading-7 text-gray-700 text-md">{speakers[1].role}</p>
                                        <p className="font-semibold leading-7 text-gray-900 text-md">{speakers[1].company}</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        {/* speaker 18 */}
                        <li>
                            <a onClick={() => { setOpenSpeaker18(!openSpeaker18) }} className="flex flex-col gap-6 hover:cursor-pointer">
                                <div className='flex-shrink-0 mx-auto'>
                                    <Image className="rounded-md w-[30rem] " src={speakers[18].imageUrl} alt={speakers[18].name} width={160} height={160} />
                                </div>
                                <div className="flex mx-auto text-center">
                                    <div>
                                        <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speakers[18].name}</p>
                                        <p className="leading-7 text-gray-700 text-md">{speakers[18].role}</p>
                                        <p className="font-semibold leading-7 text-gray-900 text-md">{speakers[18].company}</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        {/* speaker 2 */}
                        <li>
                            <a onClick={() => { setOpenSpeaker2(!openSpeaker2) }} className="flex flex-col gap-6 hover:cursor-pointer">
                                <div className='flex-shrink-0 mx-auto'>
                                    <Image className="rounded-md w-[30rem] " src={speakers[2].imageUrl} alt={speakers[2].name} width={160} height={160} />
                                </div>
                                <div className="flex mx-auto text-center">
                                    <div>
                                        <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speakers[2].name}</p>
                                        <p className="leading-7 text-gray-700 text-md">{speakers[2].role}</p>
                                        <p className="font-semibold leading-7 text-gray-900 text-md">{speakers[2].company}</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        {/* speaker 3 */}
                        <li>
                            <a onClick={() => { setOpenSpeaker3(!openSpeaker3) }} className="flex flex-col gap-6 hover:cursor-pointer">
                                <div className='flex-shrink-0 mx-auto'>
                                    <Image className="rounded-md w-[30rem] " src={speakers[3].imageUrl} alt={speakers[3].name} width={160} height={160} />
                                </div>
                                <div className="flex mx-auto text-center">
                                    <div>
                                        <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speakers[3].name}</p>
                                        <p className="leading-7 text-gray-700 text-md">{speakers[3].role}</p>
                                        <p className="font-semibold leading-7 text-gray-900 text-md">{speakers[3].company}</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        {/* speaker 19 */}
                        <li>
                            <a onClick={() => { setOpenSpeaker19(!openSpeaker19) }} className="flex flex-col gap-6 hover:cursor-pointer">
                                <div className='flex-shrink-0 mx-auto'>
                                    <Image className="rounded-md w-[30rem] " src={speakers[19].imageUrl} alt={speakers[19].name} width={160} height={160} />
                                </div>
                                <div className="flex mx-auto text-center">
                                    <div>
                                        <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speakers[19].name}</p>
                                        <p className="leading-7 text-gray-700 text-md">{speakers[19].role}</p>
                                        <p className="font-semibold leading-7 text-gray-900 text-md">{speakers[19].company}</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        {/* speaker 4 */}
                        <li>
                            <a onClick={() => { setOpenSpeaker4(!openSpeaker4) }} className="flex flex-col gap-6 hover:cursor-pointer">
                                <div className='flex-shrink-0 mx-auto'>
                                    <Image className="rounded-md w-[30rem] " src={speakers[4].imageUrl} alt={speakers[4].name} width={160} height={160} />
                                </div>
                                <div className="flex mx-auto text-center">
                                    <div>
                                        <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speakers[4].name}</p>
                                        <p className="leading-7 text-gray-700 text-md">{speakers[4].role}</p>
                                        <p className="font-semibold leading-7 text-gray-900 text-md">{speakers[4].company}</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        {/* speaker 5 */}
                        <li>
                            <a onClick={() => { setOpenSpeaker5(!openSpeaker5) }} className="flex flex-col gap-6 hover:cursor-pointer">
                                <div className='flex-shrink-0 mx-auto'>
                                    <Image className="rounded-md w-[30rem] " src={speakers[5].imageUrl} alt={speakers[5].name} width={160} height={160} />
                                </div>
                                <div className="flex mx-auto text-center">
                                    <div>
                                        <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speakers[5].name}</p>
                                        <p className="leading-7 text-gray-700 text-md">{speakers[5].role}</p>
                                        <p className="font-semibold leading-7 text-gray-900 text-md">{speakers[5].company}</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        {/* speaker 6 */}
                        <li>
                            <a onClick={() => { setOpenSpeaker6(!openSpeaker6) }} className="flex flex-col gap-6 hover:cursor-pointer">
                                <div className='flex-shrink-0 mx-auto'>
                                    <Image className="rounded-md w-[30rem] " src={speakers[6].imageUrl} alt={speakers[6].name} width={160} height={160} />
                                </div>
                                <div className="flex mx-auto text-center">
                                    <div>
                                        <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speakers[6].name}</p>
                                        <p className="leading-7 text-gray-700 text-md">{speakers[6].role}</p>
                                        <p className="font-semibold leading-7 text-gray-900 text-md">{speakers[6].company}</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        {/* speaker 7 */}
                        <li>
                            <a onClick={() => { setOpenSpeaker7(!openSpeaker7) }} className="flex flex-col gap-6 hover:cursor-pointer">
                                <div className='flex-shrink-0 mx-auto'>
                                    <Image className="rounded-md w-[30rem] " src={speakers[7].imageUrl} alt={speakers[7].name} width={160} height={160} />
                                </div>
                                <div className="flex mx-auto text-center">
                                    <div>
                                        <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speakers[7].name}</p>
                                        <p className="leading-7 text-gray-700 text-md">{speakers[7].role}</p>
                                        <p className="font-semibold leading-7 text-gray-900 text-md">{speakers[7].company}</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        {/* speaker 8 */}
                        <li>
                            <a onClick={() => { setOpenSpeaker8(!openSpeaker8) }} className="flex flex-col gap-6 hover:cursor-pointer">
                                <div className='flex-shrink-0 mx-auto'>
                                    <Image className="rounded-md w-[30rem] " src={speakers[8].imageUrl} alt={speakers[8].name} width={160} height={160} />
                                </div>
                                <div className="flex mx-auto text-center">
                                    <div>
                                        <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speakers[8].name}</p>
                                        <p className="leading-7 text-gray-700 text-md">{speakers[8].role}</p>
                                        <p className="font-semibold leading-7 text-gray-900 text-md">{speakers[8].company}</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        {/* speaker 9 */}
                        <li>
                            <a onClick={() => { setOpenSpeaker9(!openSpeaker9) }} className="flex flex-col gap-6 hover:cursor-pointer">
                                <div className='flex-shrink-0 mx-auto'>
                                    <Image className="rounded-md w-[30rem] " src={speakers[9].imageUrl} alt={speakers[9].name} width={160} height={160} />
                                </div>
                                <div className="flex mx-auto text-center">
                                    <div>
                                        <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speakers[9].name}</p>
                                        <p className="leading-7 text-gray-700 text-md">{speakers[9].role}</p>
                                        <p className="font-semibold leading-7 text-gray-900 text-md">{speakers[9].company}</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        {/* speaker 10 */}
                        <li>
                            <a onClick={() => { setOpenSpeaker10(!openSpeaker10) }} className="flex flex-col gap-6 hover:cursor-pointer">
                                <div className='flex-shrink-0 mx-auto'>
                                    <Image className="rounded-md w-[30rem] " src={speakers[10].imageUrl} alt={speakers[10].name} width={160} height={160} />
                                </div>
                                <div className="flex mx-auto text-center">
                                    <div>
                                        <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speakers[10].name}</p>
                                        <p className="leading-7 text-gray-700 text-md">{speakers[10].role}</p>
                                        <p className="font-semibold leading-7 text-gray-900 text-md">{speakers[10].company}</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        {/* speaker 11 */}
                        <li>
                            <a onClick={() => { setOpenSpeaker11(!openSpeaker11) }} className="flex flex-col gap-6 hover:cursor-pointer">
                                <div className='flex-shrink-0 mx-auto'>
                                    <Image className="rounded-md w-[30rem] " src={speakers[11].imageUrl} alt={speakers[11].name} width={160} height={160} />
                                </div>
                                <div className="flex mx-auto text-center">
                                    <div>
                                        <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speakers[11].name}</p>
                                        <p className="leading-7 text-gray-700 text-md">{speakers[11].role}</p>
                                        <p className="font-semibold leading-7 text-gray-900 text-md">{speakers[11].company}</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        {/* speaker 12 */}
                        <li>
                            <a onClick={() => { setOpenSpeaker12(!openSpeaker12) }} className="flex flex-col gap-6 hover:cursor-pointer">
                                <div className='flex-shrink-0 mx-auto'>
                                    <Image className="rounded-md w-[30rem] " src={speakers[12].imageUrl} alt={speakers[12].name} width={160} height={160} />
                                </div>
                                <div className="flex mx-auto text-center">
                                    <div>
                                        <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speakers[12].name}</p>
                                        <p className="leading-7 text-gray-700 text-md">{speakers[12].role}</p>
                                        <p className="font-semibold leading-7 text-gray-900 text-md">{speakers[12].company}</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        {/* speaker 13 */}
                        <li>
                            <a onClick={() => { setOpenSpeaker13(!openSpeaker13) }} className="flex flex-col gap-6 hover:cursor-pointer">
                                <div className='flex-shrink-0 mx-auto'>
                                    <Image className="rounded-md w-[30rem] " src={speakers[13].imageUrl} alt={speakers[13].name} width={160} height={160} />
                                </div>
                                <div className="flex mx-auto text-center">
                                    <div>
                                        <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speakers[13].name}</p>
                                        <p className="leading-7 text-gray-700 text-md">{speakers[13].role}</p>
                                        <p className="font-semibold leading-7 text-gray-900 text-md">{speakers[13].company}</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        {/* speaker 14 */}
                        <li>
                            <a onClick={() => { setOpenSpeaker14(!openSpeaker14) }} className="flex flex-col gap-6 hover:cursor-pointer">
                                <div className='flex-shrink-0 mx-auto'>
                                    <Image className="rounded-md w-[30rem] " src={speakers[14].imageUrl} alt={speakers[14].name} width={160} height={160} />
                                </div>
                                <div className="flex mx-auto text-center">
                                    <div>
                                        <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speakers[14].name}</p>
                                        <p className="leading-7 text-gray-700 text-md">{speakers[14].role}</p>
                                        <p className="font-semibold leading-7 text-gray-900 text-md">{speakers[14].company}</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        {/* speaker 15 */}
                        <li>
                            <a onClick={() => { setOpenSpeaker15(!openSpeaker15) }} className="flex flex-col gap-6 hover:cursor-pointer">
                                <div className='flex-shrink-0 mx-auto'>
                                    <Image className="rounded-md w-[30rem] " src={speakers[15].imageUrl} alt={speakers[15].name} width={160} height={160} />
                                </div>
                                <div className="flex mx-auto text-center">
                                    <div>
                                        <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speakers[15].name}</p>
                                        <p className="leading-7 text-gray-700 text-md">{speakers[15].role}</p>
                                        <p className="font-semibold leading-7 text-gray-900 text-md">{speakers[15].company}</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        {/* speaker 16 */}
                        <li>
                            <a onClick={() => { setOpenSpeaker16(!openSpeaker16) }} className="flex flex-col gap-6 hover:cursor-pointer">
                                <div className='flex-shrink-0 mx-auto'>
                                    <Image className="rounded-md w-[30rem] " src={speakers[16].imageUrl} alt={speakers[16].name} width={160} height={160} />
                                </div>
                                <div className="flex mx-auto text-center">
                                    <div>
                                        <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speakers[16].name}</p>
                                        <p className="leading-7 text-gray-700 text-md">{speakers[16].role}</p>
                                        <p className="font-semibold leading-7 text-gray-900 text-md">{speakers[16].company}</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        {/* speaker 17 */}
                        <li>
                            <a onClick={() => { setOpenSpeaker17(!openSpeaker17) }} className="flex flex-col gap-6 hover:cursor-pointer">
                                <div className='flex-shrink-0 mx-auto'>
                                    <Image className="rounded-md w-[30rem] " src={speakers[17].imageUrl} alt={speakers[17].name} width={160} height={160} />
                                </div>
                                <div className="flex mx-auto text-center">
                                    <div>
                                        <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speakers[17].name}</p>
                                        <p className="leading-7 text-gray-700 text-md">{speakers[17].role}</p>
                                        <p className="font-semibold leading-7 text-gray-900 text-md">{speakers[17].company}</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        {/* speaker 20 */}
                        <li>
                            <a onClick={() => { setOpenSpeaker20(!openSpeaker20) }} className="flex flex-col gap-6 hover:cursor-pointer">
                                <div className='flex-shrink-0 mx-auto'>
                                    <Image className="rounded-md w-[30rem] " src={speakers[20].imageUrl} alt={speakers[20].name} width={160} height={160} />
                                </div>
                                <div className="flex mx-auto text-center">
                                    <div>
                                        <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speakers[20].name}</p>
                                        <p className="leading-7 text-gray-700 text-md">{speakers[20].role}</p>
                                        <p className="font-semibold leading-7 text-gray-900 text-md">{speakers[20].company}</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        {/* speaker 21 */}
                        <li>
                            <a onClick={() => { setOpenSpeaker21(!openSpeaker21) }} className="flex flex-col gap-6 hover:cursor-pointer">
                                <div className='flex-shrink-0 mx-auto'>
                                    <Image className="rounded-md w-[30rem] " src={speakers[21].imageUrl} alt={speakers[21].name} width={160} height={160} />
                                </div>
                                <div className="flex mx-auto text-center">
                                    <div>
                                        <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speakers[21].name}</p>
                                        <p className="leading-7 text-gray-700 text-md">{speakers[21].role}</p>
                                        <p className="font-semibold leading-7 text-gray-900 text-md">{speakers[21].company}</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        {/* speaker 22 */}
                        <li>
                            <a onClick={() => { setOpenSpeaker22(!openSpeaker22) }} className="flex flex-col gap-6 hover:cursor-pointer">
                                <div className='flex-shrink-0 mx-auto'>
                                    <Image className="rounded-md w-[30rem] " src={speakers[22].imageUrl} alt={speakers[22].name} width={160} height={160} />
                                </div>
                                <div className="flex mx-auto text-center">
                                    <div>
                                        <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speakers[22].name}</p>
                                        <p className="leading-7 text-gray-700 text-md">{speakers[22].role}</p>
                                        <p className="font-semibold leading-7 text-gray-900 text-md">{speakers[22].company}</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* speaker 0 */}
            <Transition.Root show={openSpeaker0} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpenSpeaker0}>
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
                                            <Image className="rounded-md w-[20rem] " src={speakers[0].imageUrl} alt={speakers[0].name} width={160} height={160} />
                                        </div>
                                        <div className="flex mx-auto text-center">
                                            <div>
                                                <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speakers[0].name}</p>
                                                <p className="leading-7 text-gray-700 text-md">{speakers[0].role}</p>
                                                <p className="font-semibold leading-7 text-gray-900 text-md">{speakers[0].company}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="overflow-auto text-sm sm:text-md sm:mt-5 max-h-60">
                                        <p className="mt-2 text-gray-600">
                                            Qu Dongyu, who took office on 1 August 2019 as Director-General of the Food and Agriculture Organization of the United Nations, has spent his life working on how to make sure the world is fed.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            Born in 1963 to a rice-growing family in China’s Hunan Province, Qu studied horticultural science at Hunan Agricultural University and then plant breeding and genetics at the Chinese Academy of Agricultural Sciences. He later added environmental science to his knowledge portfolio while earning a PhD at Wageningen University, in the Netherlands.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            He then progressed through a range of national and international activities, engaged simultaneously in science and management, all during a time when China’s reform and opening-up process led the country to dramatically reduce poverty and hunger in a country with 20 percent of the global population, 9 percent of the world’s cultivated land, and where over 90 percent of the rural population is engaged in small holder farm operations working less than 3 hectares.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            His vision is founded on the belief that freedom from hunger is a basic human right, and that in the 21st century we have the capability to eradicate chronic food insecurity. While challenges loom, Qu’s cardinal principle is that “problems can also be the source of progress”.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            Before coming to FAO, Qu served as China’s Vice Minister of Agriculture and Rural Affairs, where one of his achievements was to promote inclusive and innovative development and make sure information and communication technologies (ICT) were available in rural areas so that more than 400 million farmers could use their smartphones as a new farming tool.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            That vision has been consistent across a professional career that includes periods in central and local government, in and leading research institutes, and as a human resources leader at the China Three Gorges Project Development Corporation, a $40 billion investment project.

                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            Among his national initiatives has been to improve reporting of wholesale prices for agricultural products in China and foster the establishment of more than 100 specialty production areas geared to making local comparative advantages work to the benefit of local farmers. As Vice Governor of Ningxia Hui Autonomous Region, one of China’s landlocked and poorest areas, Qu formulated action plans aimed at poverty reduction, disaster reduction and prevention, women empowerment, agritourism and mutual learning platforms designed to boost trust between ethnic groups.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            Qu says he represents the combination of an “Asian soul” and a “global mind”. Recognized for scientific innovation as a young scholar, Qu has for 30 years been involved in international exchanges and orchestrated major events including the World Potato Congress, the International Rice Congress and the International Conference on Plant Protection, and participated in multilateral initiatives such as the World Trade Organization and the G20 as well as numerous bilateral initiatives involving Asia, Africa and Latin America. He has also directly helped design flagship South-South Cooperation projects with FAO and the World Bank.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            His motto is “Simple life, but not simple work”.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            He is married, and has one daughter.
                                        </p>
                                    </div>
                                    <div className="mt-5 sm:mt-6">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center max-w-5xl px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700"
                                            onClick={() => setOpenSpeaker0(!openSpeaker0)}
                                        >
                                            Back
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </ Transition.Root >
            {/* speaker 1 */}
            <Transition.Root show={openSpeaker1} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpenSpeaker1}>
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
                                            <Image className="rounded-md w-[20rem] " src={speakers[1].imageUrl} alt={speakers[1].name} width={160} height={160} />
                                        </div>
                                        <div className="flex mx-auto text-center">
                                            <div>
                                                <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speakers[1].name}</p>
                                                <p className="leading-7 text-gray-700 text-md">{speakers[1].role}</p>
                                                <p className="font-semibold leading-7 text-gray-900 text-md">{speakers[1].company}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="overflow-auto text-sm sm:text-md sm:mt-5 max-h-60">
                                        <p className="mt-2 text-gray-600">
                                            Anthony is Executive Fellow, Strategic Engagement, Center for Nature and Climate, World Economic Forum and Senior Advisor to the CEO & Chair, Advisory Board, Mission Possible Partnership. Anthony was Chief Executive Officer of the Carbon Tracker Initiative from February 2014 to March 2019, and now is co-chair of the Advisory Board. Previously he was a partner and Global Head of the Sustainability & Climate Finance Practice at global law firm Norton Rose Fulbright. Formerly he was General Counsel to the Climate Change Capital Carbon Fund and Director of Legal Policy for Climate Change Capital which he joined in September 2005.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            Anthony specialised in climate change and clean energy law as well as UK, EU and international environmental law. He has played a key role in helping to design the UKs pilot emissions trading scheme and in developing key aspects of the EU ETS. He advised a wide range of banks, trading companies, project development companies, corporates and public sector entities who were active participants in carbon markets. Anthony was seconded to Norton Rose Fulbright’s Sydney office between 2010 and 2012 where he was heavily involved in the development of the emerging carbon and clean energy markets in Australia and Asia. He was a key figure behind the creation of the business advocacy group Businesses for a Clean Economy, a coalition of business arguing for a price on carbon. Anthony was behind the creation of the business group Climate Markets & Investment Association. He sat on the board of the Verified Carbon Standards Association (now Vera) between 2007 and 2015. He currently sits on the Advisory Board to the Climate Bonds Initiative and the Global Footprint Network. Anthony holds a First-Class Honours Degree in Chemistry & Physics and an LLM in Environmental Law. He qualified as a solicitor of England and Wales in 1994. He writes and speaks widely on climate risk and the financial sector.
                                        </p>
                                    </div>
                                    <div className="mt-5 sm:mt-6">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center max-w-5xl px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700"
                                            onClick={() => setOpenSpeaker1(!openSpeaker1)}
                                        >
                                            Back
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </ Transition.Root >
            {/* speaker 2 */}
            <Transition.Root show={openSpeaker2} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpenSpeaker1}>
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
                                            <Image className="rounded-md w-[20rem] " src={speakers[2].imageUrl} alt={speakers[2].name} width={160} height={160} />
                                        </div>
                                        <div className="flex mx-auto text-center">
                                            <div>
                                                <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speakers[2].name}</p>
                                                <p className="leading-7 text-gray-700 text-md">{speakers[2].role}</p>
                                                <p className="font-semibold leading-7 text-gray-900 text-md">{speakers[2].company}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="overflow-auto text-sm sm:text-md sm:mt-5 max-h-60">
                                        <p className="mt-2 text-gray-600">
                                            Dr. Leonard Mizzi is Head of Unit at the European Commission, Directorate-General (DG) for International Partnerships - Sustainable Agri-Food systems and Fisheries, since 1st of January 2017. Prior to this post he was Head of Unit for 10 years in DG Agriculture and Rural Development, first in charge of agri trade and development issues (2007-2014) and from 2015-2016 leading the inter institutional unit hence relations with the European Parliament, Council and consultative bodies and well as steering the Civil Dialogue Groups.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            He is a graduate in Public Administration from the University of Malta (BA Hons First Class); and has degrees from CIHEAM-Montpellier (Master of Science) and a Ph.D in Agricultural economics from the University of Reading (UK). He has been an author of a number of articles and publications on agri food issues and nutrition in the Mediterranean region.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            Dr. Mizzi has a broad working experience in the Maltese public administration and the Maltese private sector. He first worked in the Economic Planning Division of the Office of the Prime Minister (Malta) and from 1996-2006 was the first Director of the Malta Business Bureau in Brussels- the office of the Malta Chamber of Commerce and Enterprise and the Malta Hotels and Restaurants Association.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            He was also visiting lecturer at the Boston University (Brussels campus), Open University and Malta University. He often lectures at the College of Europe in Bruges.
                                            His areas of specialisation are global food security governance, agriculture and food and nutrition security, the Mediterranean and Sub Saharan Africa.
                                        </p>
                                    </div>
                                    <div className="mt-5 sm:mt-6">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center max-w-5xl px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700"
                                            onClick={() => setOpenSpeaker2(!openSpeaker2)}
                                        >
                                            Back
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </ Transition.Root >
            {/* speaker 3 */}
            <Transition.Root show={openSpeaker3} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpenSpeaker1}>
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
                                            <Image className="rounded-md w-[20rem] " src={speakers[3].imageUrl} alt={speakers[3].name} width={160} height={160} />
                                        </div>
                                        <div className="flex mx-auto text-center">
                                            <div>
                                                <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speakers[3].name}</p>
                                                <p className="leading-7 text-gray-700 text-md">{speakers[3].role}</p>
                                                <p className="font-semibold leading-7 text-gray-900 text-md">{speakers[3].company}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="overflow-auto text-sm sm:text-md sm:mt-5 max-h-60">
                                        <p className="mt-2 text-gray-600">
                                            Vanúsia Nogueira comes from a family of coffee producers, and started her career at PwC Consulting, where she was a partner and worked for 15 years. She started working directly with coffee in 2002, always focusing on niche markets. She served as executive director at BSCA from 2007 through April 2022 and took over as Executive Director at the International Coffee Organization in May 2022. Vanúsia holds a PhD in Administration/Marketing from Rosario National University in Argentina, a BS in Systems Engineering and Administration from Pontifical Catholic University of Rio de Janeiro (PUC-RJ) and MBAs and post-MBA focusing on Management, Marketing and Advanced Project Management from Fundação Getúlio Vargas in Rio de Janeiro.
                                        </p>
                                    </div>
                                    <div className="mt-5 sm:mt-6">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center max-w-5xl px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700"
                                            onClick={() => setOpenSpeaker3(!openSpeaker3)}
                                        >
                                            Back
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </ Transition.Root >
            {/* speaker 4 */}
            <Transition.Root show={openSpeaker4} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpenSpeaker1}>
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
                                            <Image className="rounded-md w-[20rem] " src={speakers[4].imageUrl} alt={speakers[4].name} width={160} height={160} />
                                        </div>
                                        <div className="flex mx-auto text-center">
                                            <div>
                                                <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speakers[4].name}</p>
                                                <p className="leading-7 text-gray-700 text-md">{speakers[4].role}</p>
                                                <p className="font-semibold leading-7 text-gray-900 text-md">{speakers[4].company}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="overflow-auto text-sm sm:text-md sm:mt-5 max-h-60">
                                        <p className="mt-2 text-gray-600">
                                            He joined the Ethiopian Ministry of Foreign Affairs in 1993 and as a career diplomat,
                                            has served at diplomatic missions to the People’s Republic of China in Guangzhou
                                            (Consul General 2018 – 2020); in Brussels, Belgium (Minister Counsellor 2010 –
                                            2014); Harare, Zimbabwe (Chargé d’Affaires 1999 – 2000); in Geneva at the United
                                            Nations as Chargé d’Affaires in 1998 and Consul General between 1994 and 2001.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            In between, he was assigned to various posts within the Ministry of Foreign Affairs,
                                            including as Director General, Public Diplomacy and Communications (2016 – 2017);
                                            Minister’s Chief Advisor on Capacity Building (2014 – 2016); Acting Director General,
                                            Public Diplomacy and Communications (2008 – 2010); Director-General, Ethiopian
                                            Expatriate Affairs (2001 – 2008) and Counsellor, Press, Information and
                                            Documentation Directorate General (1993 – 1994).
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            Teferi Melesse Desta holds an MA in Literature (1994) and a Bachelor of Arts in
                                            Ethiopian Languages and Literature (1986), both from the University of Addis Ababa,
                                            Ethiopia.
                                        </p>
                                    </div>
                                    <div className="mt-5 sm:mt-6">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center max-w-5xl px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700"
                                            onClick={() => setOpenSpeaker4(!openSpeaker4)}
                                        >
                                            Back
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </ Transition.Root >
            {/* speaker 5 */}
            <Transition.Root show={openSpeaker5} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpenSpeaker1}>
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
                                            <Image className="rounded-md w-[20rem] " src={speakers[5].imageUrl} alt={speakers[5].name} width={160} height={160} />
                                        </div>
                                        <div className="flex mx-auto text-center">
                                            <div>
                                                <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speakers[5].name}</p>
                                                <p className="leading-7 text-gray-700 text-md">{speakers[5].role}</p>
                                                <p className="font-semibold leading-7 text-gray-900 text-md">{speakers[5].company}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="overflow-auto text-sm sm:text-md sm:mt-5 max-h-60">
                                        <p className="mt-2 text-gray-600">
                                            Markus Leitner was born in 1966 in Zurich and is a citizen of the City of Zurich. He
                                            completed his studies with a degree in Economics at the Zurich University of Applied
                                            Science and the University of Fribourg. After various positions in the private sector,
                                            he joined the Federal Department of Foreign Affairs in 1996 and undertook his
                                            diplomatic training in Berne (1996/97) and Madrid (1997/98). On his return to Berne,
                                            he dealt with Swiss financial center issues (e.g. banking secrecy, politically exposed
                                            persons, blood diamonds) in the Economics and Finance Division.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            From 2002 to 2006 Mr Leitner was responsible for economic and scientific affairs at
                                            the Embassy of Switzerland in Pretoria. From 2006 to 2008, he was posted in
                                            Santiago de Chile as Deputy Head of Mission. From 2009 to 2010, Mr Leitner
                                            headed the Peace Policy Section in Berne and was appointed Deputy Head of the
                                            Human Security Division at the beginning of 2011 until mid-2013. In June 2013, Mr
                                            Leitner became the Ambassador of Switzerland in Egypt. He was subsequently
                                            appointed Ambassador of Switzerland to the Islamic Republic of Iran and assumed
                                            the position in August 2017. Since August 2021, Markus Leitner serves as the Swiss
                                            Ambassador to the United Kingdom.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            Markus Leitner is married and has two children.
                                        </p>
                                    </div>
                                    <div className="mt-5 sm:mt-6">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center max-w-5xl px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700"
                                            onClick={() => setOpenSpeaker5(!openSpeaker5)}
                                        >
                                            Back
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </ Transition.Root >
            {/* speaker 6 */}
            <Transition.Root show={openSpeaker6} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpenSpeaker1}>
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
                                            <Image className="rounded-md w-[20rem] " src={speakers[6].imageUrl} alt={speakers[6].name} width={160} height={160} />
                                        </div>
                                        <div className="flex mx-auto text-center">
                                            <div>
                                                <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speakers[6].name}</p>
                                                <p className="leading-7 text-gray-700 text-md">{speakers[6].role}</p>
                                                <p className="font-semibold leading-7 text-gray-900 text-md">{speakers[6].company}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="overflow-auto text-sm sm:text-md sm:mt-5 max-h-60">
                                        <p className="mt-2 text-gray-600">
                                            Ambassador HAYASHI Hajime was assigned as Ambassador Extraordinary
                                            and Plenipotentiary of Japan to the United Kingdom of Great Britain and
                                            Norther Ireland in December 2020.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            Before coming to the UK, Ambassador HAYASHI served as Assistant Chief
                                            Cabinet Secretary and Deputy Secretary-General of the National Security
                                            Secretariat in the Cabinet Secretariat of Japan. There he was engaged in
                                            navigating Japan’s external and security policies between October 2019
                                            and December 2020.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            His academic achievements include the award of an LLB degree by the
                                            Faculty of Law, University of Tokyo and his service as a lecturer on Japan’s
                                            foreign policy at Chuo University in Tokyo. He has also been a fellow at
                                            the Weatherhead Center for International Affairs of Harvard University,
                                            USA.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            Ambassador HAYASHI is a classical music enthusiast. He also likes to visit
                                            galleries and museums to indulge his appreciation of fine arts and crafts.
                                            Having taken up his appointment in the United Kingdom, he now lives in
                                            London with his wife, Haruko.
                                        </p>
                                    </div>
                                    <div className="mt-5 sm:mt-6">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center max-w-5xl px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700"
                                            onClick={() => setOpenSpeaker6(!openSpeaker6)}
                                        >
                                            Back
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </ Transition.Root >
            {/* speaker 7 */}
            <Transition.Root show={openSpeaker7} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpenSpeaker1}>
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
                                            <Image className="rounded-md w-[20rem] " src={speakers[7].imageUrl} alt={speakers[7].name} width={160} height={160} />
                                        </div>
                                        <div className="flex mx-auto text-center">
                                            <div>
                                                <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speakers[7].name}</p>
                                                <p className="leading-7 text-gray-700 text-md">{speakers[7].role}</p>
                                                <p className="font-semibold leading-7 text-gray-900 text-md">{speakers[7].company}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="overflow-auto text-sm sm:text-md sm:mt-5 max-h-60">
                                        <p className="mt-2 text-gray-600">
                                            Carmen María Gallardo Hernández assumed her role as Ambassador of El Salvador to the United Kingdom of Great Britain Northern Ireland and Permanent Representative of El Salvador to the International Coffee Organization in May 2023. She was the Ambassador of El Salvador to the Kingdom of The Netherlands and Permanent Representative to the International Organizations in The Hague from 2020-2023. Previously, she served twice as Ambassador to France from 2016-2020 and 1992-1994, and as Ambassador to Austria and Permanent Representative to the International Organizations in Vienna from 2012-2016.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            During her career, Ambassador Gallardo Hernández has served as Non-resident Ambassador to Portugal, Monaco, Algiers, Croatia, Slovakia, Hungary, Bulgaria and Romania. She has been Dame of Grace of the Sovereign Order of Malta since 1998. Gallardo Hernández holds a Translation Undergraduate as well as a Conference Interpreter Master’s Degree, with a Major in International Organizations from the University of Geneva. Ambassador Gallardo Hernández is married and has children.
                                        </p>
                                    </div>
                                    <div className="mt-5 sm:mt-6">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center max-w-5xl px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700"
                                            onClick={() => setOpenSpeaker7(!openSpeaker7)}
                                        >
                                            Back
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </ Transition.Root >
            {/* speaker 8 */}
            <Transition.Root show={openSpeaker8} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpenSpeaker1}>
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
                                            <Image className="rounded-md w-[20rem] " src={speakers[8].imageUrl} alt={speakers[8].name} width={160} height={160} />
                                        </div>
                                        <div className="flex mx-auto text-center">
                                            <div>
                                                <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speakers[8].name}</p>
                                                <p className="leading-7 text-gray-700 text-md">{speakers[8].role}</p>
                                                <p className="font-semibold leading-7 text-gray-900 text-md">{speakers[8].company}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="overflow-auto text-sm sm:text-md sm:mt-5 max-h-60">
                                        <p className="mt-2 text-gray-600">
                                            Amb. Manoah Esipisu EBS is the High Commissioner Extraordinary and Plenipotentiary of the Republic of Kenya to the United Kingdom of Great Britain and Northern Ireland and Permanent Representative to the International Maritime Organization.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            He is also Kenya&apos;s chief diplomat to the Commonwealth intergovernmental family of the Commonwealth Secretariat, Commonwealth Foundation and the Commonwealth of Learning.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            As Kenya&apos;s top diplomat in the UK, he leads a team dedicated to strengthening bilateral relations around the key pillars of security and defence; mutual prosperity encompassing trade, investment, climate change;  Sustainable Development; People-to-people relations covering tourism, health and social care, education and Diaspora Affairs.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            Amb. Esipisu has overseen a significant upturn of Kenya’s fortunates to become the go-to country in sub-Saharan Africa and a significant player in UK-based  intergovernmental communities.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            Prior to his current role Amb. Esipisu served as Head of Communications and Spokesperson to the President, leading a team of nearly 100 professionals responsible for Presidency and government communications.

                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            Amb. Esipisu, one of Kenya’s best known media public figures, has had a long and distinguished career first as a journalist, journalism trainer and mentor, before growing into an astute Communications and Public Affairs personality and diplomat as an internationalpublic servant. He also served as special Assistant to the President of the African Development Bank.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            Amb. Esipisu started his public life with the Standard Group, where he worked before joining the global news and information group Reuters, covering the African continent and working in bureaus in Kenya, Zambia, Zimbabwe and South Africa interacting with African financial and political figures.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            As a Commonwealth Deputy Spokesperson he worked directly with Presidents or Prime Ministers, to successfully deliver the Commonwealth Heads of Government Meetings in Uganda, Trinidad and Tobago, and Australia; and with former leaders on Commonwealth Observer Groups at a numbers of general elections.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            Throughout his career, Mr. Esipisu has been a formidable mentor of journalists and public servants on the African continent and beyond, and is credited with the training of some of Kenya&apos;s best known business journalists.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            Having travelled to more than 80 countries in his various roles, Mr. Esipisu is an acquaintance of many African and global leaders, and has leveraged this to lift the image of Kenya and its leadership throughout the continent and the world.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            Amb. Esipisu is a frequent speaker on global issues and the author of “Eyes of Democracy: the media in elections”, which chronicles the experiences of journalists and observers in covering elections.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            In 2022, Kenyan President HE Dr William Ruto CGH bestowed on Amb Esipisu the civilian honour of Elder of the Order of the Burning Spear EBS for his distinguished services to Public Affairs and Diplomacy.
                                        </p>
                                    </div>
                                    <div className="mt-5 sm:mt-6">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center max-w-5xl px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700"
                                            onClick={() => setOpenSpeaker8(!openSpeaker8)}
                                        >
                                            Back
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </ Transition.Root >
            {/* speaker 9 */}
            <Transition.Root show={openSpeaker9} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpenSpeaker1}>
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
                                            <Image className="rounded-md w-[20rem] " src={speakers[9].imageUrl} alt={speakers[9].name} width={160} height={160} />
                                        </div>
                                        <div className="flex mx-auto text-center">
                                            <div>
                                                <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speakers[9].name}</p>
                                                <p className="leading-7 text-gray-700 text-md">{speakers[9].role}</p>
                                                <p className="font-semibold leading-7 text-gray-900 text-md">{speakers[9].company}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="overflow-auto text-sm sm:text-md sm:mt-5 max-h-60">
                                        <p className="mt-2 text-gray-600">
                                            H.E. Guisell Morales-Echaverry is the Ambassador Extraordinary and Plenipotentiary of Nicaragua to United Kingdom of Great Britain and Norther Ireland since January 2015. She is also appointed Concurrent Ambassador to Ireland (since September 2016) and Iceland (since November 2018). She is the Permanent Representative of Nicaragua to International Maritime Organization and Representative of Nicaragua to the International Cocoa Organization, the International Sugar Organization and the International Coffee Organisation. In 2012, she was appointed by the Nicaraguan Ministry of Foreign Affairs to serve as Chargée d’Affaires at the Embassy of Nicaragua to United Kingdom. H.E. Guisell Morales-Echaverry was also appointed by the Nicaraguan Supreme Court of Justice as Arbitrator Judge for Conflict Resolution Directorate (DIRAC). From 2006 to 2009, she had been Country Director for Cid Gallup Latin American – International Social Research and Survey Firm. She had been Funder and Senior Partner at “Nicaragua Leagal Office” From 1995 to 2001, and Senior Partner at “Vivas Lugo and Associates from 2001 to 2006. From 1979 to 1994, she worked at the Nicaraguan Ministry of Interior as Chief of Staff, Member of the Minister Special Auxiliary Staff, Advisor to General Secretary and Legal Advisor. H. E. Morales-Echaverry graduated from the Universidad Centro Americana with a Master’s in International Relations in 1994 and she holds a Law degree from the Universidad Nacional Autónoma de Nicaragua. She was authorized by the Nicaraguan Supreme Court of Justice to exert as Lawyer and Notary, in 1990.
                                        </p>
                                    </div>
                                    <div className="mt-5 sm:mt-6">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center max-w-5xl px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700"
                                            onClick={() => setOpenSpeaker9(!openSpeaker9)}
                                        >
                                            Back
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </ Transition.Root >
            {/* speaker 10 */}
            <Transition.Root show={openSpeaker10} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpenSpeaker1}>
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
                                            <Image className="rounded-md w-[20rem] " src={speakers[10].imageUrl} alt={speakers[10].name} width={160} height={160} />
                                        </div>
                                        <div className="flex mx-auto text-center">
                                            <div>
                                                <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speakers[10].name}</p>
                                                <p className="leading-7 text-gray-700 text-md">{speakers[10].role}</p>
                                                <p className="font-semibold leading-7 text-gray-900 text-md">{speakers[10].company}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="overflow-auto text-sm sm:text-md sm:mt-5 max-h-60">
                                        <p className="mt-2 text-gray-600">
                                            Paul Rooke is Executive Director of the British Coffee Association, responsible for managing and leading the Association, developing key relationships and representing the Association on policy, media and technical issues.  An agricultural graduate, he has over 25 year’s experience in trade associations covering policy, technical and contractual issues. From 2013-2019 has was the President of CELCAA, the European Liaison Committee for the Agricultural and Agri-food Trade, He is a former Chairman of DG Agri’s Civil Dialogue Group for International Aspects of Agriculture of the EU’s High Level Forum for a Better Functioning Supply Chain and DG Trade’s Expert Group on EU Trade Agreements.
                                        </p>
                                    </div>
                                    <div className="mt-5 sm:mt-6">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center max-w-5xl px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700"
                                            onClick={() => setOpenSpeaker10(!openSpeaker10)}
                                        >
                                            Back
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </ Transition.Root >
            {/* speaker 11 */}
            <Transition.Root show={openSpeaker11} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpenSpeaker1}>
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
                                            <Image className="rounded-md w-[20rem] " src={speakers[11].imageUrl} alt={speakers[11].name} width={160} height={160} />
                                        </div>
                                        <div className="flex mx-auto text-center">
                                            <div>
                                                <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speakers[11].name}</p>
                                                <p className="leading-7 text-gray-700 text-md">{speakers[11].role}</p>
                                                <p className="font-semibold leading-7 text-gray-900 text-md">{speakers[11].company}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="overflow-auto text-sm sm:text-md sm:mt-5 max-h-60">
                                        <p className="mt-2 text-gray-600">
                                            Melissa Duncan boasts an extensive leadership career in the global ethical trade movement.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            She has served on the Fairtrade International Board since 2015 and was elected as Treasurer in 2017 and Vice Chair in 2020. Ms. Duncan was appointed Executive Director of Fairtrade International in 2021.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            Prior to joining Fairtrade International, Ms. Duncan also worked for a leading Fair Trade organization and development charity in the United Kingdom and served as a Trustee and Vice Chair of the UK-based Fairtrade Foundation. Most recently, she was appointed to the Board of Shared Interest, an impact investment non-profit with a global focus on empowering workers through fair trade initiatives.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            In addition to her leadership work in the ethical trade movement, Ms. Duncan has also built a 20-year career in marketing and communications, spanning both corporate and charity sectors, including WHSmith plc, where she was Head of Communications, and professional experiences in East Asia.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            Ms. Duncan holds an MBA from Cranfield University. She is a United States citizen and a resident of the United Kingdom.
                                        </p>
                                    </div>
                                    <div className="mt-5 sm:mt-6">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center max-w-5xl px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700"
                                            onClick={() => setOpenSpeaker11(!openSpeaker11)}
                                        >
                                            Back
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </ Transition.Root >
            {/* speaker 12 */}
            <Transition.Root show={openSpeaker12} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpenSpeaker1}>
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
                                            <Image className="rounded-md w-[20rem] " src={speakers[12].imageUrl} alt={speakers[12].name} width={160} height={160} />
                                        </div>
                                        <div className="flex mx-auto text-center">
                                            <div>
                                                <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speakers[12].name}</p>
                                                <p className="leading-7 text-gray-700 text-md">{speakers[12].role}</p>
                                                <p className="font-semibold leading-7 text-gray-900 text-md">{speakers[12].company}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="overflow-auto text-sm sm:text-md sm:mt-5 max-h-60">
                                        <p className="mt-2 text-gray-600">
                                            William Kennedy is versatile financial journalist and newsroom manager with 20 years experience of reporting, writing and editing. He oversees Bloomberg&apos;s global coverage of energy and commodities.
                                        </p>

                                    </div>
                                    <div className="mt-5 sm:mt-6">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center max-w-5xl px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700"
                                            onClick={() => setOpenSpeaker12(!openSpeaker12)}
                                        >
                                            Back
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </ Transition.Root >
            {/* speaker 13 */}
            <Transition.Root show={openSpeaker13} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpenSpeaker1}>
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
                                            <Image className="rounded-md w-[20rem] " src={speakers[13].imageUrl} alt={speakers[13].name} width={160} height={160} />
                                        </div>
                                        <div className="flex mx-auto text-center">
                                            <div>
                                                <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speakers[13].name}</p>
                                                <p className="leading-7 text-gray-700 text-md">{speakers[13].role}</p>
                                                <p className="font-semibold leading-7 text-gray-900 text-md">{speakers[13].company}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="overflow-auto text-sm sm:text-md sm:mt-5 max-h-60">
                                        <p className="mt-2 text-gray-600">
                                            Nigel Hunt is Global Soft Commodities Correspondent at Thomson Reuters. He has spent more than 35 years covering commodity and energy markets in London, Chicago and Los Angeles.  Interests include the impact of climate change on agriculture, new farming technologies and food security.
                                        </p>
                                    </div>
                                    <div className="mt-5 sm:mt-6">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center max-w-5xl px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700"
                                            onClick={() => setOpenSpeaker13(!openSpeaker13)}
                                        >
                                            Back
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </ Transition.Root >
            {/* speaker 14 */}
            <Transition.Root show={openSpeaker14} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpenSpeaker1}>
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
                                            <Image className="rounded-md w-[20rem] " src={speakers[14].imageUrl} alt={speakers[14].name} width={160} height={160} />
                                        </div>
                                        <div className="flex mx-auto text-center">
                                            <div>
                                                <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speakers[14].name}</p>
                                                <p className="leading-7 text-gray-700 text-md">{speakers[14].role}</p>
                                                <p className="font-semibold leading-7 text-gray-900 text-md">{speakers[14].company}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="overflow-auto text-sm sm:text-md sm:mt-5 max-h-60">
                                        <p className="mt-2 text-gray-600">
                                            Ana R. Rios is a Natural Resources and Climate Change Senior Specialist at the Inter-American Development Bank. Ana has over ten years of extensive experience on advisory, analytical, and operational business engagement with governments, institutions, and donors. She has expertise in leading the design and implementation of agricultural, natural resources and sustainable development projects with climate change considerations. Ana has also a solid publication record, her recent work focuses on analyzing the impacts of climate change and COVID-19 on the coffee sector in the Central American Northern Triangle. Moreover, she is a co-author of the book &ldquo;The Climate and Development Challenge for Latin America and the Caribbean: Options for climate-resilient, low-carbon development&ldquo; and has published several peer reviewed publications.  She has been interviewed by CNN, New York Times, and Radio France Internationale, amongst others. Ana obtained a B.S. in agricultural economics and horticulture from Zamorano (2000), and then received a M.S (2003) and Ph.D. (2008) in agricultural economics from Purdue University where she also did postdoctoral research.
                                        </p>
                                    </div>
                                    <div className="mt-5 sm:mt-6">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center max-w-5xl px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700"
                                            onClick={() => setOpenSpeaker14(!openSpeaker14)}
                                        >
                                            Back
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </ Transition.Root >
            {/* speaker 15 */}
            <Transition.Root show={openSpeaker15} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpenSpeaker1}>
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
                                            <Image className="rounded-md w-[20rem] " src={speakers[15].imageUrl} alt={speakers[15].name} width={160} height={160} />
                                        </div>
                                        <div className="flex mx-auto text-center">
                                            <div>
                                                <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speakers[15].name}</p>
                                                <p className="leading-7 text-gray-700 text-md">{speakers[15].role}</p>
                                                <p className="font-semibold leading-7 text-gray-900 text-md">{speakers[15].company}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="overflow-auto text-sm sm:text-md sm:mt-5 max-h-60">
                                        <p className="mt-2 text-gray-600">
                                            Katherine is a Partner at Systemiq – a system-change advisory and investment firm which houses the Blended Finance Taskforce. Katherine leads the Sustainable Finance platform and is head of the London office.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            Katherine leads Systemiq’s work on financing country transitions and has been part of the design and launch of numerous catalytic investment vehicles and platforms for climate – including the SDG Namibia One Fund for green hydrogen; the Global Fund for Coral Reefs – the world’s first largescale adaptation fund; the private equity ReOcean Fund, Indonesia’s $3bn sustainable infrastructure platform and the $8bn Just Energy Transition Partnership for South Africa.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            Katherine helped design the Actis Transition Tool and the Practitioner’s Guide to Transition Finance in Africa. She is the lead author of reports including Making Climate Capital Work and Better Finance, Better World.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            As Chair of the Blended Finance Taskforce, Katherine leads a global coalition which works to mobilise capital for the transition to a net zero, nature-positive and more inclusive economy by building capacity in emerging markets to develop investable projects, design and scale catalytic financial instruments, structure blended finance solutions and advocate for a more efficient and equitable deployment of climate finance.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            Katherine is on the Expert Advisory Group for the Coalition of Finance Ministers for Climate Action and is a Steering Committee Member for the G7’s Impact Taskforce.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            Katherine is on the Advisory Board of the “Responsible Consumer Fund” and is a Fellow to Studio 8 FOLD which specialises in sustainable architecture and design.  Katherine started her career as a solicitor in Australia and the UK specialising in M&A and project finance for energy and major infrastructure.  She graduated with First Class Honours.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            Katherine was awarded Environmental Finance’s “Net Zero Champion of the Year” in 2022 and throughout her career has been committed to “getting the young women who write the speaking points onto the panel”.
                                        </p>
                                    </div>
                                    <div className="mt-5 sm:mt-6">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center max-w-5xl px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700"
                                            onClick={() => setOpenSpeaker15(!openSpeaker15)}
                                        >
                                            Back
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </ Transition.Root >
            {/* speaker 16 */}
            <Transition.Root show={openSpeaker16} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpenSpeaker1}>
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
                                            <Image className="rounded-md w-[20rem] " src={speakers[16].imageUrl} alt={speakers[16].name} width={160} height={160} />
                                        </div>
                                        <div className="flex mx-auto text-center">
                                            <div>
                                                <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speakers[16].name}</p>
                                                <p className="leading-7 text-gray-700 text-md">{speakers[16].role}</p>
                                                <p className="font-semibold leading-7 text-gray-900 text-md">{speakers[16].company}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="overflow-auto text-sm sm:text-md sm:mt-5 max-h-60">
                                        <p className="mt-2 text-gray-600">
                                            Gert van der Bijl graduated as an agricultural development economist. In 2009 he joined Solidaridad, an international development network organization working with more than 1000 staff in 40 countries, promoting sustainability in supply chains. He first coordinated the global Solidaridad work in the Soybean supply chain and later did the same for the Livestock & Leather. Since 2021, he has been responsible for Solidaridad&apos;s European advocacy, focusing presently on promoting a smallholder inclusive Deforestation legislation.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            Before joining Solidaridad, Gert worked 20 years in the Dutch agricultural sector including 7 years at the Dutch Ministry of Agriculture.
                                        </p>
                                    </div>
                                    <div className="mt-5 sm:mt-6">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center max-w-5xl px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700"
                                            onClick={() => setOpenSpeaker16(!openSpeaker16)}
                                        >
                                            Back
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </ Transition.Root >
            {/* speaker 17 */}
            <Transition.Root show={openSpeaker17} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpenSpeaker1}>
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
                                            <Image className="rounded-md w-[20rem] " src={speakers[17].imageUrl} alt={speakers[17].name} width={160} height={160} />
                                        </div>
                                        <div className="flex mx-auto text-center">
                                            <div>
                                                <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speakers[17].name}</p>
                                                <p className="leading-7 text-gray-700 text-md">{speakers[17].role}</p>
                                                <p className="font-semibold leading-7 text-gray-900 text-md">{speakers[17].company}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="overflow-auto text-sm sm:text-md sm:mt-5 max-h-60">
                                        <p className="mt-2 text-gray-600">
                                            Dr. Martina Bozzola is Senior Advisor in Sustainability and Livelihood within the Alliances for Action Team at the International Trade Centre, a joint agency of the United Nations and the WTO. She coordinates the pilots on accompanying measures to the EU corporate sustainability due diligence directive (CS3D). Martina is also Senior Lecturer in Economics of Agriculture, Food and Health at Queen’s University Belfast. Previously, Martina worked as Research Associate at ETH Zurich, as Max-Weber-Fellow at the European University Institute in Florence, and obtained her Ph.D. in International Economics from the Graduate Institute in Geneva. Her areas of expertise are sustainability in agri-food value chains, climate change economics, and international trade and development.Martina is one of the lead authors of the <Link target={'_blank'} href={'https://intracen.org/resources/publications/the-coffee-guide-fourth-edition'}>4th Edition of the Coffee Guide</Link>. She advised and wrote on sustainable agriculture aspects.
                                        </p>
                                    </div>
                                    <div className="mt-5 sm:mt-6">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center max-w-5xl px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700"
                                            onClick={() => setOpenSpeaker17(!openSpeaker17)}
                                        >
                                            Back
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </ Transition.Root >
            {/* speaker 18 */}
            <Transition.Root show={openSpeaker18} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpenSpeaker1}>
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
                                            <Image className="rounded-md w-[20rem] " src={speakers[18].imageUrl} alt={speakers[18].name} width={160} height={160} />
                                        </div>
                                        <div className="flex mx-auto text-center">
                                            <div>
                                                <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speakers[18].name}</p>
                                                <p className="leading-7 text-gray-700 text-md">{speakers[18].role}</p>
                                                <p className="font-semibold leading-7 text-gray-900 text-md">{speakers[18].company}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="overflow-auto text-sm sm:text-md sm:mt-5 max-h-60">
                                        <p className="mt-2 text-gray-600">
                                            Alvaro Lario is President of the International Fund of Agricultural Development
                                            (IFAD). A seasoned international development finance leader, he has more than
                                            20 years of experience across academia, private sector asset management, World
                                            Bank Group and the United Nations, including as Associate Vice-President of
                                            Financial Operations at IFAD.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            Under his stewardship, IFAD became the first United Nations Fund to enter the
                                            capital markets and obtain a credit rating, enabling the IFAD to expand resource
                                            mobilization efforts to the private sector.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            Before joining the Fund in early 2018, he was the Treasury Capital Markets Lead
                                            and Principal Portfolio Officer at the International Finance Corporation, part of
                                            the World Bank Group, where he focused on local capital markets development
                                            and emerging markets investments.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            President Lario received a PhD in Financial Economics from the Complutense
                                            University of Madrid after completing a Master of Research in Economics at the
                                            London Business School and a Master of Finance from Princeton University.
                                        </p>
                                    </div>
                                    <div className="mt-5 sm:mt-6">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center max-w-5xl px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700"
                                            onClick={() => setOpenSpeaker18(!openSpeaker18)}
                                        >
                                            Back
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </ Transition.Root >
            {/* speaker 19 */}
            <Transition.Root show={openSpeaker19} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpenSpeaker1}>
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
                                            <Image className="rounded-md w-[20rem] " src={speakers[19].imageUrl} alt={speakers[19].name} width={160} height={160} />
                                        </div>
                                        <div className="flex mx-auto text-center">
                                            <div>
                                                <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speakers[19].name}</p>
                                                <p className="leading-7 text-gray-700 text-md">{speakers[19].role}</p>
                                                <p className="font-semibold leading-7 text-gray-900 text-md">{speakers[19].company}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="overflow-auto text-sm sm:text-md sm:mt-5 max-h-60">
                                        <p className="mt-2 text-gray-600">
                                            Mark Maslin FRGS, FRSA is a Professor of Earth System Science at UCL and the Natural History Museum of Denmark. He is also Strategy Advisor to Lansons, Net Zero Now, Sheep Inc and CSR Board member of Sopra Steria.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            Mark is a leading scientist with particular interest in understanding climate change and sustainability.  He has published over 190 papers in journals such as Science, Nature, and The Lancet. He has received research, consultancy and training funding worth over £75m from government, charities, NGOs and the private sector.  He was recently named the <span className='underline'>Number 1 Global Sustainability thought leader and influencer of 2023</span>.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            Mark has written 10 books and over 60 popular articles and regularly appears on radio and television, including BBC One David Attenborough’s ‘Climate Change: the facts’. His books include ‘Climate Change: A Very Short Introduction’ (2021), ‘The Cradle of Humanity’ (2019), ‘The Human Planet’ with Simon Lewis (2018/2022) and his latest book is ‘How to save our planet: the facts’ (2021).
                                        </p>
                                    </div>
                                    <div className="mt-5 sm:mt-6">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center max-w-5xl px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700"
                                            onClick={() => setOpenSpeaker19(!openSpeaker19)}
                                        >
                                            Back
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </ Transition.Root >
            {/* speaker 20 */}
            <Transition.Root show={openSpeaker20} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpenSpeaker1}>
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
                                            <Image className="rounded-md w-[20rem] " src={speakers[20].imageUrl} alt={speakers[20].name} width={160} height={160} />
                                        </div>
                                        <div className="flex mx-auto text-center">
                                            <div>
                                                <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speakers[20].name}</p>
                                                <p className="leading-7 text-gray-700 text-md">{speakers[20].role}</p>
                                                <p className="font-semibold leading-7 text-gray-900 text-md">{speakers[20].company}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="overflow-auto text-sm sm:text-md sm:mt-5 max-h-60">
                                        <p className="mt-2 text-gray-600">
                                            • Founder and Co-CEO at Impact Finance since 2010 (Asset Manager specialized in impact investing in Regenerative Businesses in Latin America)
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            • Founder and Chief Investment Officer at Symbiotics between 2005 and 2010 (Broker and Asset Manager specialized in investing in microfinance)
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            • Founder and Vice Chairman at Sustainable Finance Geneva between 2008 and 2012 (Association of professionals in Geneva interested and investing in sustainable finance and impact investing)
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            • Founder and Chief Investment Officer at BlueOrchard between 2001 and 2004 (Asset Manager specialized in investing in microfinance and sold to Schroders in 2019)
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            • Consultant at United Nation Conference on Trade and Development, the Virtual Market for Microfinance 1999 to 2000
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            • Master in International Relations at the Graduate Institute of International and Development Studies
                                        </p>
                                    </div>
                                    <div className="mt-5 sm:mt-6">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center max-w-5xl px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700"
                                            onClick={() => setOpenSpeaker20(!openSpeaker20)}
                                        >
                                            Back
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </ Transition.Root >
            {/* speaker 21 */}
            <Transition.Root show={openSpeaker21} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpenSpeaker1}>
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
                                            <Image className="rounded-md w-[20rem] " src={speakers[21].imageUrl} alt={speakers[21].name} width={160} height={160} />
                                        </div>
                                        <div className="flex mx-auto text-center">
                                            <div>
                                                <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speakers[21].name}</p>
                                                <p className="leading-7 text-gray-700 text-md">{speakers[21].role}</p>
                                                <p className="font-semibold leading-7 text-gray-900 text-md">{speakers[21].company}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="overflow-auto text-sm sm:text-md sm:mt-5 max-h-60">
                                        <p className="mt-2 text-gray-600">
                                            Juan is a highly esteemed professional with over 35 years of expertise in the global trading and consulting sector, specialising in providing bespoke consultancy and trade services to an extensive clientele that includes global organisations, top-tier corporations, governments, family offices, and world leaders. Juan&apos;s reputation is firmly rooted in his expansive global network.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            Juan is currently the Vice Chair of IoD Natural Resources Gourp. He is also the vice president of Government Blockchain Association (GBA) UK and a GBA Global certified blockchain advisor. As the Co-Founder (Since 1998) of the Euroyen Group (In 2018, evolved into a Decentralised Autonomous Organisation (DAO) with global digital jurisdiction), Juan has successfully diversified his offerings, from precious metals to advanced tech-based sectors. This move, combined with his background in the oil industry and international trade, has allowed Juan to penetrate multiple industries and provide comprehensive services.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            Juan stands out for his professional integrity and confidentiality, understanding the importance of protecting sensitive information. His reliability and trustworthiness are cornerstones of his professional persona, facilitating strong and enduring relationships with clients and partners.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            In his personal time, Juan pursues diverse interests including advanced (PADI) scuba diving, hunting, fishing, surfing, sailing, karate, and is currently learning Aikido.
                                        </p>
                                    </div>
                                    <div className="mt-5 sm:mt-6">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center max-w-5xl px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700"
                                            onClick={() => setOpenSpeaker21(!openSpeaker21)}
                                        >
                                            Back
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </ Transition.Root >
            {/* speaker 22 */}
            <Transition.Root show={openSpeaker22} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpenSpeaker1}>
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
                                            <Image className="rounded-md w-[20rem] " src={speakers[22].imageUrl} alt={speakers[22].name} width={160} height={160} />
                                        </div>
                                        <div className="flex mx-auto text-center">
                                            <div>
                                                <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speakers[22].name}</p>
                                                <p className="leading-7 text-gray-700 text-md">{speakers[22].role}</p>
                                                <p className="font-semibold leading-7 text-gray-900 text-md">{speakers[22].company}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="overflow-auto text-sm sm:text-md sm:mt-5 max-h-60">
                                        <p className="mt-2 text-gray-600">
                                            Jo Paisley has worked on a variety of risk areas at GRI, including stress testing, operational resilience, model risk management, and climate risk. Jo’s career began at the Bank of England where she worked in various economist roles, ran the Statistics Division, and spent the last part of her career in supervision. Her last role was as a Director of the Supervisory Risk Specialist Division within the Prudential Regulation Authority. This area provided deep technical risk expertise to front line supervisors across all risk disciplines, covering banking and insurance. She was also heavily involved in the design and execution of the U.K.’s first concurrent stress test in 2014.
                                        </p>
                                        <p className="mt-2 text-gray-600">
                                            Jo left the Bank in 2015 and joined HSBC as their Global Head of Stress Testing, where she was responsible for ensuring that they met all their regulatory stress testing requirements around the world. She has also worked as an independent stress testing consultant, advising firms on how to get the most value out of stress testing. Jo studied Philosophy, Politics, and Economics at Magdalen College, Oxford, before completing her MPhil in Economics at Nuffield College, Oxford.
                                        </p>
                                    </div>
                                    <div className="mt-5 sm:mt-6">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center max-w-5xl px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700"
                                            onClick={() => setOpenSpeaker22(!openSpeaker22)}
                                        >
                                            Back
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </ Transition.Root >
            
        </>

    )
}

