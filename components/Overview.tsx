import React from 'react'
import CountDown from './CountDown'

export default function Overview() {
    return (
        <>
            <div id="overview" className="flex flex-col bg-[url('https://worldcoffeealliance.com/wp-content/uploads/2023/06/COVER-PAGE-WORLD-COFFEE-SUMMIT-LONDON13-SEPTEMBER-2023-CROPPED-e1686060527623.jpg')] py-32 sm:py-52 bg-cover mlg:flex-col">
                <div className="self-center w-full px-12 text-center sm:px-20">
                    <div>
                        <p className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">World Coffee Summit London</p>
                        <p className="mt-6 text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Delivering collaborative change: </p>
                        <p className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Impact of regenerative solutions </p>
                        <p className="px-6 py-4 mx-auto mt-6 text-2xl font-bold tracking-tight text-gray-900 bg-yellow-500 w-max sm:text-4xl">QE II Centre 13 September 2023 </p>
                        <CountDown />
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