import { LinkIcon, ChatBubbleLeftRightIcon, UserGroupIcon, EyeDropperIcon, PresentationChartLineIcon, CheckBadgeIcon, CheckCircleIcon, ClockIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import React from 'react'
import Exhibitors from './Exhibitors'

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
                <div id="overview" className="flex flex-col bg-opacity-10 bg-[url('https://worldcoffeealliance.com/wp-content/uploads/2023/06/EXHIBITION-BG-scaled.jpg')] py-20 bg-cover bg-center mlg:flex-col">
                    <div className="self-center px-12 text-center sm:px-20">
                        <div>
                            <p className="text-4xl font-bold tracking-tight text-white sm:text-6xl">World Coffee Exhibition London 2023</p>
                            <p className="text-lg font-bold tracking-tight text-white sm:text-2xl">13th September 2023</p>
                            <p className="text-lg font-bold tracking-tight text-white sm:text-2xl">Queen Elizabeth ll Centre, Westminster Hall</p>
                            <p className="my-12 text-2xl font-bold tracking-tight text-orange-400 sm:my-24 sm:text-4xl">EXHIBIT WITH PURPOSE</p>
                            <p className="mx-auto text-xl leading-8 text-justify text-white max-w-7xl">
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

                <div className='justify-center py-6 bg-white mlg:flex-row mmd:flex-col msm:flex-col sm:px-20 pb-20' >
                    <div className="w-full px-12 mx-auto sm:max-w-5xl">
                        <dd className="mt-2 text-xl leading-7 text-gray-900">
                            <span>World Coffee Exhibition will be held at the Westminster Hall, adjacent to the conference, where around 15 Exhibitors from coffee origin countries will showcase their coffee and distribute coffee samples. There will also be two cupping sessions organised by an independent coffee lab and 2 panel discussions on the recent SCA cupping protocol and EU due diligence legislation. This is not a big trade show but a bespoke event where green coffee buyers, roasters and traders meet coffee farmers and producers (pre-qualified) to do business and celebrate coffee.</span>
                        </dd>
                    </div>
                    <Exhibitors />
                    <div className="w-full px-12 mx-auto sm:max-w-5xl">
                        <p className="mt-12 text-lg leading-7 text-gray-600">For exhibition queries please email <Link href={"mailto:info@worldcoffeealliance.com"} target="_blank" className="text-yellow-900 underline hover:underline-offset-4"> mavis@worldcoffeealliance.com</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}
