import React from 'react'
import CountDown from './CountDown'

export default function Overview() {
    return (
        <>
            <div id="overview" className="flex flex-col bg-[url('https://worldcoffeealliance.com/wp-content/uploads/2023/06/OVERVIEW-HERO-BG-1-scaled.jpg')] py-36 sm:py-60 bg-cover mlg:flex-col">
                <div className="self-center w-full text-center sm:max-w-7xl ">
                    <p className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">World Coffee Summit London</p>
                    <p className="mt-6 text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Delivering collaborative change: </p>
                    <p className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Impact of regenerative solutions </p>
                    <div className='flex flex-col items-center justify-center max-w-5xl mx-auto mt-6 sm:flex-row sm:gap-x-2 gap-y-2'>
                        <div>
                            <img className='w-[20rem]' src='https://worldcoffeealliance.com/wp-content/uploads/2023/06/QE2-LOGO.png' />
                        </div>
                        <p className="px-6 py-2 text-lg font-bold tracking-tight text-white mx-aut h-max bg-lime-700 w-fit sm:text-2xl">13 September 2023 </p>
                    </div>

                    <div className='flex flex-row justify-center max-w-5xl mx-auto'>
                        <CountDown />
                        <div className="flex flex-row items-center justify-center pt-6 ml-4 text-center sm:-mr-56">
                            <p className="px-6 py-2 mx-auto text-lg font-bold tracking-tight text-gray-900 bg-yellow-500 h-max sm:text-2xl">Register Now </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='justify-center px-12 py-40 bg-white mlg:flex-row mmd:flex-col msm:flex-col sm:px-20' >
                <p className="mt-6 text-2xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl">OVERVIEW</p>
                <p className="mt-4 text-xl leading-8 text-gray-900 sm:mt-8">
                    With the looming implementation of the EU due diligence legislation, the global coffee industry is faced with regulatory compliance that will have dramatic impact on businesses. Against the backdrop of rising cost, climate change and sustainability issues, this business event will tackle and flesh out how to navigate its complexities and find collaborative and regenerative solutions for the future of coffee.
                </p>
                <p className="mt-4 text-xl leading-8 text-gray-900 sm:mt-8">
                    This event will deep dive into the relationship between adoption of Regenerative Agriculture and ESG Investing, its benefits and challenges, including its strategies and funding infrastructure. Transforming from conventional agriculture to regenerative will require some collaboration, incentives, government grants and private funding to be climate positive, scalable, and operational.
                </p>
            </div>
        </>
    )
}