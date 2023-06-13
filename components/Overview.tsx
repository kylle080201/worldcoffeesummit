import Link from 'next/link'
import React from 'react'
import CountDown from './CountDown'

export default function Overview() {
    return (
        <>
            <div id="overview" className="flex flex-col bg-[url('https://worldcoffeealliance.com/wp-content/uploads/2023/06/OVERVIEW-HERO-BG-scaled.jpg')] py-12 sm:py-20 bg-cover bg-center mlg:flex-col">
                <div className="self-center w-full text-center content-center">
                    <div className='flex flex-col md:flex-row content-center w-full max-w-7xl mx-auto px-12'>
                        <div className='my-auto md:ml-32'>
                            <p className="text-4xl font-bold tracking-tight text-lime-700 sm:text-6xl">World Coffee Summit London</p>
                            <p className="text-4xl mt-4 tracking-tight text-yellow-900 sm:text-6xl">& World Coffee Exhibition</p>
                        </div>
                        <div className='h-max my-auto mx-auto flex-shrink-0'>
                            <img className='w-[15rem]' src='https://worldcoffeealliance.com/wp-content/uploads/2021/08/WCA_new_logo.png'></img>
                        </div>
                    </div>

                    <p className="mt-6 text-lg font-semibold tracking-tight text-gray-900 sm:text-2xl">Delivering Collaborative Change: Impact of Regenerative Solutions</p>
                    <div className='flex flex-col items-center justify-center max-w-5xl mx-auto mt-6 sm:flex-row sm:gap-x-2 gap-y-2'>
                        <div>
                            <img className='w-[17rem]' src='https://worldcoffeealliance.com/wp-content/uploads/2023/06/QEII-CENTRE.png' />
                        </div>
                        <p className="px-6 py-2 font-bold tracking-tight text-white text-md mx-aut h-max bg-lime-700 w-fit sm:text-lg">13 September 2023 </p>
                    </div>

                    <div className='flex flex-col justify-center max-w-5xl mx-auto md:flex-row'>
                        <CountDown />
                        <div className="flex flex-row items-center justify-center pt-6 ml-4 text-center md:-mr-52">
                            <div>
                                <Link target={'_blank'} rel='noreferer' className='flex-shrink-0 px-6 py-2 mx-auto text-lg font-bold tracking-tight bg-yellow-500 text-gray-900 hover:underline h-max sm:text-2xl' href="/register">Register Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='justify-center px-12 py-12 bg-white sm:py-20 mlg:flex-row mmd:flex-col msm:flex-col sm:px-20' >
                <p className="mt-6 text-2xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl">OVERVIEW</p>
                <p className="mt-4 text-xl leading-8 text-gray-900 sm:mt-8">
                    With the looming implementation of the EU due diligence legislations, the global coffee industry is faced with regulatory compliance that will have dramatic impact on businesses. Against the backdrop of rising cost, climate change and sustainability issues, this business event will tackle and flesh out how to navigate its complexities and find collaborative and regenerative solutions for the future of coffee.
                </p>
                <p className="mt-4 text-xl leading-8 text-gray-900 sm:mt-8">
                    This event will deep dive into the relationship between adoption of Regenerative Agriculture and ESG Investing, its benefits and challenges, including its strategies and funding infrastructure. Transforming from conventional agriculture to regenerative will require some collaboration, incentives, government grants and private funding to be climate positive, scalable, and operational.
                </p>
            </div>
        </>
    )
}