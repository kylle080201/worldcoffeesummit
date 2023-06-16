import { LinkIcon, ChatBubbleLeftRightIcon, UserGroupIcon, EyeDropperIcon, PresentationChartLineIcon, CheckBadgeIcon, CheckCircleIcon, ClockIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import React from 'react'

export default function Exhibition() {
    const benefits = [
        {
            id: 1,
            description: "Connect and network with over 100 pre-qualified coffee buyers from UK and Europe with budget and power to spend",
            icon: LinkIcon,
        },
        {
            id: 2,
            description: "The limited amount of Exhibitors provides your company with more exposure and intimate engagement with these decision-makers",
            icon: ChatBubbleLeftRightIcon,
        },
        {
            id: 3,
            description: "This Exhibition is not open to the public but will be attended by coffee buyers and roasters from the UK and Europe",
            icon: UserGroupIcon,
        },
        {
            id: 4,
            description: "Two cupping sessions by an independent Coffee Lab who will cup all exhibitors on site",
            icon: EyeDropperIcon,
        },
        {
            id: 5,
            description: "2 panel discussions on latest developments on SCA cupping protocols and EU due diligence",
            icon: PresentationChartLineIcon,
        },
    ]
    const services = [
        {
            id: 1,
            description: "Additional outlets, lighting fixtures or special connections",
        },
        {
            id: 2,
            description: "Additional furniture",
        },
        {
            id: 3,
            description: "Description and logo of your company in the program and on the web page",
        }
    ]
    const program = [
        {
            id: 1,
            description: "EXHIBITORS SETUP",
            time: "6:00 - 9:30"
        },
        {
            id: 2,
            description: "EXHIBITORS SETUP",
            time: "10:00 - 11:00"
        },
        {
            id: 3,
            description: "PANEL ONE",
            time: "11:00 - 12:00"
        },
        {
            id: 4,
            description: "BREAK",
            time: "12:00 - 01:00"
        },
        {
            id: 5,
            description: "PANEL TWO",
            time: "01:00 - 02:00"
        },
        {
            id: 6,
            description: "CUPPING SESSION 2",
            time: "02:00 - 03:00"
        },
        {
            id: 7,
            description: "AWARDING CEREMONY",
            time: "03:00 - 04:00"
        },
    ]
    return (
        <>
            <div id="exhibition">
                <div id="overview" className="flex flex-col bg-[url('https://worldcoffeealliance.com/wp-content/uploads/2023/05/OVERVIEW-HERO-SECTION-BG.jpg')] py-20 bg-cover mlg:flex-col">
                    <div className="self-center px-12 text-center sm:px-20">
                        <div>
                            <p className="text-4xl font-bold tracking-tight text-white sm:text-6xl">World Coffee Exhibition London 2023</p>
                            <p className="mt-6 text-lg font-bold tracking-tight text-white sm:text-2xl">SUSTAINABILITY BEYOND COMPLIANCE</p>
                            <p className="text-lg font-bold tracking-tight text-white sm:text-2xl">13th September 2023</p>
                            <p className="text-lg font-bold tracking-tight text-white sm:text-2xl">Queen Elizabeth ll Centre, Westminster Hall</p>
                            <p className="mx-auto mt-16 text-xl leading-8 text-justify text-white max-w-7xl sm:mt-52">

                                Welcome to the world of rustic flavours and sensient aroma of coffee origin. From the historic forests of the
                                Ethiopian plateaus to the Central Highlands of Vietnam, each participant, showcasing and sharing
                                their sumptuous profile of luxurious taste and of out of this world experience The overpowering
                                notes of nuts, caramel with honey like sweetness of these coffee origins will bring one’s senses
                                to a standstill in an ecstatic fit, one feels as if there is no tomorrow In this <span className='font-semibold '>World Coffee
                                    Exhibition London 2023</span>, once you joined the crowd of nosy cuppers and curious score crunching
                                roasters, your life would never be the same again

                                Welcome to the world of rustic flavors and sensient aroma of coffee
                                origin. From the historic forests of the Ethiopian plateau to the
                                far-flung South American mountains and African horn, witness each
                                participant, showcasing and sharing their sumptuous profile of
                                luxurious taste and of out of this world experience. The overpowering
                                notes of nuts, caramel with honey-like sweetness of coffee with mild
                                body and acidity will bring one’s senses to a standstill – in an
                                ecstatic fit, one feels as if there is no tomorrow. In this <span className='font-bold '>
                                    World Coffee Exhibition</span>, once you joined the crowd of nosy cuppers and
                                curious score crunching roasters, your life would never be the same
                                again.
                            </p>
                            <p className="mt-4 text-lg font-bold tracking-tight text-white sm:text-2xl">Join us celebrate coffee.</p>
                        </div>
                    </div>
                </div>

                <div className='justify-center px-12 py-6 mx-auto bg-white mlg:flex-row mmd:flex-col msm:flex-col sm:px-20 sm:max-w-5xl' >

                    <div className="w-full rounded-lg">
                        <dd className="mt-2 text-xl leading-7 text-gray-900">
                            <span>World Coffee Exhibition will be held at the Westminster Hall, adjacent to the conference, where around 15 Exhibitors from coffee origin countries will showcase their coffee and distribute coffee samples. There will also be two cupping sessions organised by an independent coffee lab and 2 panel discussions on the recent SCA cupping protocol and EU due diligence legislations. This is not a big trade show but a bespoke event where green coffee buyers, roasters and traders meet coffee farmers and producers (pre-qualified) to do business and celebrate coffee.</span>
                        </dd>
                    </div>

                </div>

                <div className='justify-center px-12 py-20 mx-auto bg-white mlg:flex-row mmd:flex-col msm:flex-col sm:px-20 sm:max-w-5xl' >
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900">Exhibitors</h2>
                    <div className="w-full rounded-lg">
                        <dd className="mt-2 text-xl leading-7 text-gray-900">
                            <span>Become an exhibitor at World Coffee Exhibition and display your company’s message in front of Green coffee buyers and roasters with key decision makers in the coffee industry.</span>
                        </dd>
                    </div>
                    <div className='mt-12'>
                        <div>
                            <p className="text-lg font-bold tracking-tight text-gray-900 sm:text-2xl">BENEFITS: Why exhibit at World Coffee Summit London?</p>
                            <ul role="list" className="mt-12">
                                {benefits.map((event, eventIdx) => (
                                    <li key={event.id}>
                                        <div className="relative pb-8">
                                            {eventIdx !== benefits.length - 1 ? (
                                                <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                                            ) : null}
                                            <div className="relative flex space-x-3">
                                                <div>
                                                    <span
                                                        className='flex items-center justify-center w-8 h-8 bg-yellow-900 rounded-full ring-8 ring-white'
                                                    >
                                                        <event.icon className="w-5 h-5 text-white" aria-hidden="true" />
                                                    </span>
                                                </div>
                                                <div className="flex justify-between flex-1 min-w-0 pl-2 space-x-4 sm:pl-4">
                                                    <div className='flex flex-col'>
                                                        <p className="text-gray-900 text-md sm:text-lg">
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
                    <div>
                        <p className="text-lg leading-7 text-gray-600">For exhibition queries please email <Link href={"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=mavis@worldcoffeealliance.com&su=Exhibition%20query"} target="_blank" className="text-yellow-900 underline hover:underline-offset-4"> mavis@worldcoffeealliance.com</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}
