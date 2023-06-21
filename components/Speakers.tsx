import Image from 'next/image'
import React from 'react'

const firstRow = [
    {
        name: 'Dr. Dongyu Qu',
        role: 'Directoral-General',
        company: 'Food and Agriculture Organization (FAO)',
        imageUrl:
            'https://worldcoffeealliance.com/wp-content/uploads/2023/05/DR-DONGYU-QU.jpg',
    },
    {
        name: 'Anthony Hobley',
        role: 'Executive Fellow; Co-Chair, Advisory Board',
        company: 'World Economic Forum; Carbon Tracker Initiative',
        imageUrl:
            'https://worldcoffeealliance.com/wp-content/uploads/2023/06/ANTHONY-HOBLEY-PHOTO.jpg',
    },
    {
        name: 'Dr. Leonard Mizzi',
        role: 'Head of Unit, INTPA',
        company: 'European Commission (EU)',
        imageUrl:
            'https://worldcoffeealliance.com/wp-content/uploads/2023/05/DR-LEONARD-MIZZI.jpg',
    },
    {
        name: 'Vanusia Nogueira',
        role: 'Executive Director',
        company: 'International Coffee Organization(ICO)',
        imageUrl:
            'https://worldcoffeealliance.com/wp-content/uploads/2022/07/VANUSIA-NOGUEIRA_ICO-Square-scaled.jpg',
    },

    {
        name: 'H.E. Teferi Melesse Desta',
        company: 'Ethiopian Ambassador to the United Kingdom',
        imageUrl:
            'https://worldcoffeealliance.com/wp-content/uploads/2023/05/TEFERI-MELESSE-DESTA.jpg',
    },
    {
        name: 'H.E. Markus Leitner',
        company: 'Ambassador of Switzerland to the United Kingdom',
        imageUrl:
            'https://worldcoffeealliance.com/wp-content/uploads/2023/05/MARKUS-LEITNER.jpg',
    },
    {
        name: 'H.E. Hajime Hayashi',
        company: 'Ambassador Extraordinary and Plenipotentiary of Japan to the United Kingdom of Great Britain and Northern Ireland',
        imageUrl:
            'https://worldcoffeealliance.com/wp-content/uploads/2023/05/HAYASHU-HAJIME-1.jpg',
    },
    {
        name: 'H.E. Mrs. Carmen María Gallardo',
        company: 'Ambassador from the Republic of El Salvador to the United Kingdom',
        imageUrl:
            'https://worldcoffeealliance.com/wp-content/uploads/2023/06/Carmen-Maria-Gallardo.jpg',
    },
    {
        name: 'H.E. Teodoro L. Locsin, Jr.',
        company: "Philippines' ambassador to the United Kingdom",
        imageUrl:
            'https://worldcoffeealliance.com/wp-content/uploads/2023/06/H.E.-Ambassador-Teodoro-L-Locsin-Jr-square.jpg',
    },
    {
        name: 'H.E. Mr Manoah Esipisu',
        company: "High Commissioner of the Republic of Kenya to the United Kingdom",
        imageUrl:
            'https://worldcoffeealliance.com/wp-content/uploads/2023/06/HE-Mr-Manoah-Esipisu.webp',
    },
    {
        name: 'Paul Rooke',
        role: 'Executive Director',
        company: 'British Coffee Association (BCA)',
        imageUrl:
            'https://worldcoffeealliance.com/wp-content/uploads/2023/05/PAUL-ROOKE.jpg',
    },
    {
        name: 'Melissa Duncan',
        role: 'Executive Director',
        company: 'Fairtrade International',
        imageUrl:
            'https://worldcoffeealliance.com/wp-content/uploads/2023/02/preferred-Melissa-Duncan.jpg',
    },
    {
        name: 'William Kennedy',
        role: 'Senior Executive Editor',
        company: 'Bloomberg',
        imageUrl:
            'https://worldcoffeealliance.com/wp-content/uploads/2023/05/WILLIAM-KENNEDY.jpg',
    },
    {
        name: 'Nigel Hunt',
        role: 'Senior Correspondent',
        company: 'Reuters',
        imageUrl:
            'https://worldcoffeealliance.com/wp-content/uploads/2023/06/NIGEL-HUNT-THOMSON-REUTERS.jpg',
    },
    {
        name: 'Anna R Rios',
        role: 'Climate Change Senior Specialist',
        company: 'Inter-American Development Bank (IADB)',
        imageUrl:
            'https://worldcoffeealliance.com/wp-content/uploads/2023/05/ANNA-R-RIOS.jpg',
    },
    {
        name: 'Katherine Stodulka',
        role: 'Partner, Director, Blended Finance',
        company: 'Systemiq',
        imageUrl:
            'https://worldcoffeealliance.com/wp-content/uploads/2023/05/KATHERINE-SODULKA.png',
    },
]

export default function Speakers() {
    return (

        <div className="px-12 py-20 bg-gray-100 sm:px-20" id='speakers'>
            <div className="mx-auto sm:content-center">
                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">SPEAKERS</p>
                </div>
                <ul
                    role="list"
                    className="grid grid-cols-1 mx-auto mt-20 max-w-7xl gap-x-6 gap-y-20 md:grid-cols-4 lg:gap-x-8"
                >
                    {firstRow.map((speaker) => (
                        <li key={speaker.name} className="flex flex-col gap-6">
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
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

