import { CalendarDaysIcon, ChatBubbleOvalLeftEllipsisIcon, ChatBubbleLeftRightIcon, LinkIcon, UserIcon, UsersIcon, BanknotesIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

function WhyAttend() {
    const WhyAttend = [
        {
            id: 1,
            title: "INSPIRING HIGH-LEVEL SPEAKERS",
            description: "Gain valuable insights from global industry leaders, top Thought leaders, governments and leading EU policy and funding practitioners who are shaping the future of coffee and related commodities.",
            icon: UserIcon
        },
        {
            id: 2,
            title: "UNIQUE APPROACH",
            description: "Connect Coffee, Innovation and Climate Finance towards sustainability beyond compliance.",
            icon: LinkIcon
        },
        {
            id: 3,
            title: "INSIGHTFUL AGENDA",
            description: "Debate and discuss the latest EUDR, exploring opportunities in Carbon Credits, ESG/ Impact Investing and Innovation.",
            icon: ChatBubbleLeftRightIcon
        },
        {
            id: 4,
            title: "NETWORK OPPORTUNITIES",
            description: "Connect and get engaged with your cross-sector peers to share best practices and explore future of collaboration and broaden your contact list.",
            icon: UsersIcon
        },
        {
            id: 4,
            title: "EXHIBITION WITH PURPOSE",
            description: "Real buyers meeting real coffee farmers and cooperatives from countries of origin doing real business and sharing their stories.",
            icon: BanknotesIcon
        }
    ]
    function classNames(...classes: any[]) {
        return classes.filter(Boolean).join(' ')
    }
    return (
        <div id="why-attend" className="flex flex-col bg-[url('https://worldcoffeealliance.com/wp-content/uploads/2023/07/shutterstock_536617741-scaled.jpg')] bg-center bg-cover">
            <div className='w-full pt-40 bg-gray-50/70'>
                <div className='px-24 mx-auto text-center'>
                    <h1 className='text-2xl font-bold lg:text-4xl'>
                        WHAT CAN YOU EXPECT?
                    </h1>
                    <div className='grid grid-cols-1 mx-auto mt-20 gap-x-6 gap-y-20 lg:grid-cols-5 lg:gap-x-8'>
                        {WhyAttend.map((item) => (
                            <div key={item.id} className='flex-col text-lg lg:text-2xl'>
                                <div className='justify-center'>
                                    <span
                                        className={classNames(
                                            item.icon,
                                        )}
                                    >
                                        <item.icon className="w-24 mx-auto" aria-hidden="true" />
                                    </span>
                                </div>
                                <div className='mt-8 font-bold'>
                                    {item.title}
                                </div>
                                <div className='mx-8 mt-8 lg:mx-0'>
                                    {item.description}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center mt-4 text-center gap-x-4">
                    <div>
                        <Link target={'_blank'} rel='noreferer' className='flex-shrink-0 px-6 py-2 mx-auto text-lg font-bold tracking-tight text-gray-900 bg-yellow-500 hover:underline h-max sm:text-2xl' href="/register">Register Now
                        </Link>
                    </div>
                    <div className='text-lg font-bold underline sm:text-2xl'>
                        <Link target={'_blank'} rel='noreferer' href="/">WWW.WORLDCOFFEESUMMIT.NET
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyAttend