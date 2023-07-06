import Link from 'next/link'
import React from 'react'

function WhyAttend() {
    const WhyAttend = [
        {
            id: 1,
            title: "ONE DAY",
            description: "Focused and condensed event to provide value and efficiency."
        },
        {
            id: 2,
            title: "RELEVANT AGENDA",
            description: "Debate and discuss sustainability and finance issues that matter and learn how to implement policies through Keynotes and panel discussions."
        },
        {
            id: 3,
            title: "EXPERT SPEAKERS",
            description: "Gain valuable insights from global leaders, governments and leading EU policy and funding practitioners in the fields of sustainability and regulations."
        },
        {
            id: 4,
            title: "NETWORK",
            description: "Connect and get engage with your cross-sector peers to explore sustainability beyond compliance and future of collaboration and broaden your contact list."
        }
    ]
    return (
        <div id="why-attend" className="flex flex-col bg-[url('https://worldcoffeealliance.com/wp-content/uploads/2023/07/shutterstock_536617741-scaled.jpg')] bg-center bg-cover">
            <div className='w-full py-40 bg-gray-50/70'>
                <div className='mx-auto text-center max-w-7xl'>
                    <h1 className='text-2xl font-bold lg:text-4xl'>
                        WHY ATTEND?
                    </h1>
                    <div className='grid grid-cols-1 mx-auto mt-20 max-w-7xl gap-x-6 gap-y-20 lg:grid-cols-4 lg:gap-x-8'>
                        {WhyAttend.map((item) => (
                            <div key={item.id} className='flex-col text-lg lg:text-2xl'>
                                <div className='font-bold'>
                                    {item.title}
                                </div>
                                <div className='mx-8 mt-8 lg:mx-0'>
                                    {item.description}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center mt-20 text-center">
                    <div>
                        <Link target={'_blank'} rel='noreferer' className='flex-shrink-0 px-6 py-2 mx-auto text-lg font-bold tracking-tight text-gray-900 bg-yellow-500 hover:underline h-max sm:text-2xl' href="/register">Register Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyAttend