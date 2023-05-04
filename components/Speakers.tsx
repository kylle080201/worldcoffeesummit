import Image from 'next/image'
import React from 'react'

const speakers = [
    {
        name: 'Dr. Dongyu Qu',
        role: 'Directoral General',
        company: 'Food and Agriculture Organization (FAO)',
        imageUrl:
            'https://worldcoffeealliance.com/wp-content/uploads/2023/05/DR-DONGYU-QU.jpg',
    },
    {
        name: 'Dr. Leonard Mizzi',
        role: 'Head of Unity, INTPA',
        company: 'European Commission (EU)',
        imageUrl:
            'https://worldcoffeealliance.com/wp-content/uploads/2023/05/DR-LEONARD-MIZZI.jpg',
    },
    {
        name: 'Vanusia Nogueria',
        role: 'Executive Director',
        company: 'International Coffee Organization(ICO)',
        imageUrl:
            'https://worldcoffeealliance.com/wp-content/uploads/2022/07/VANUSIA-NOGUEIRA_ICO-Square-scaled.jpg',
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
        name: 'Emily Cromwell',
        role: 'Climate Change and Sustainability Lead Consumer Industry',
        company: 'Deloitte',
        imageUrl:
            '',
    },
    {
        name: 'Chris Brett',
        role: 'Lead Agri-business Specialist',
        company: 'World Bank',
        imageUrl:
            'https://worldcoffeealliance.com/wp-content/uploads/2021/02/Christopher-Brett_square-scaled.jpg',
    },
]

const ambassadors = [
    {
        name: 'Rt Hon Andrew Mitchell',
        role: 'UK Minister of State',
        company: 'Development and Africa',
        imageUrl:
            '',
    },
    {
        name: 'H. E. Teferi Melesse Desta',
        role: 'Ethiopian Ambassador to the United Kingdom',
        company: '',
        imageUrl:
            'https://worldcoffeealliance.com/wp-content/uploads/2023/05/TEFERI-MELESSE-DESTA.jpg',
    },
    {
        name: 'H.E Markus Leitner',
        role: 'The Swiss Ambassador to the United Kingdom',
        company: '',
        imageUrl:
            '',
    },
    {
        name: 'H.E. Vikram Doraiswami',
        role: 'High Commissioner for India in the United Kingdom',
        company: '',
        imageUrl:
            '',
    },
]

export default function Speakers() {
    return (

        <div className="py-16 bg-gray-100" id='speakers'>
            <div className="px-6 mx-auto my-16 sm:px-12">
                <div className="max-w-2xl mx-auto sm:text-center">
                    <p className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Meet our Speakers and Ambassadors</p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
                        best results for our clients.
                    </p>
                </div>
                <div className="max-w-2xl mx-auto mt-12 sm:text-center">
                    <p className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Speakers</p>
                </div>
                <ul
                    role="list"
                    className="grid grid-cols-1 mx-auto mt-20 gap-x-6 gap-y-20 sm:grid-cols-3 lg:gap-x-8"
                >
                    {speakers.map((speaker) => (
                        <li key={speaker.name} className="flex flex-col gap-6 xl:flex-row">
                            <div>
                                <Image className="flex-none w-40 rounded-full " src={speaker.imageUrl} alt={speaker.name} width={160} height={160} />
                            </div>

                            <div className="flex items-center">
                                <div>
                                    <p className="text-3xl font-semibold leading-8 tracking-tight text-gray-900">{speaker.name}</p>
                                    <p className="text-xl leading-7 text-gray-700">{speaker.role}</p>
                                    <p className="text-xl leading-7 text-gray-900">{speaker.company}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="max-w-2xl mx-auto mt-32 sm:text-center">
                    <p className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Ambassadors</p>
                </div>
                <ul
                    role="list"
                    className="grid grid-cols-1 mx-auto mt-20 gap-x-6 gap-y-20 sm:grid-cols-3 lg:gap-x-8"
                >
                    {ambassadors.map((ambassador) => (
                        <li key={ambassador.name} className="flex flex-col gap-6 xl:flex-row">
                            <div>
                                <Image className="flex-none w-40 rounded-full " src={ambassador.imageUrl} alt={ambassador.name} width={160} height={160} />
                            </div>

                            <div className="flex items-center">
                                <div>
                                    <p className="text-3xl font-semibold leading-8 tracking-tight text-gray-900">{ambassador.name}</p>
                                    <p className="text-xl leading-7 text-gray-700">{ambassador.role}</p>
                                    <p className="text-xl leading-7 text-gray-900">{ambassador.company}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

