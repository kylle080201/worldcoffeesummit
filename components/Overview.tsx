"use client"
import Link from 'next/link'
import React from 'react'
import CountDown from './CountDown'
import { AddToCalendarButton } from 'add-to-calendar-button-react';
import AgendaHighlights from './AgendaHighlights';

export default function Overview() {
    return (
        <>
            <div id="overview" className="flex flex-col bg-[url('https://worldcoffeealliance.com/wp-content/uploads/2023/06/OVERVIEW-HERO-BG-scaled.jpg')] pt-2 sm:py-4 pb-6 sm:pb-12 bg-cover bg-center mlg:flex-col">
                <div className="content-center self-center w-full text-center sm:py-20 py-12">
                    <div className='grid w-full grid-cols-1 px-16 lg:grid-cols-7 justify-items-stretch'>
                        <div className='py-6 my-auto lg:col-span-6 lg:ml-52'>
                            <p className="text-4xl font-bold tracking-tight text-lime-700 sm:text-6xl">World Coffee Summit London</p>
                            <p className="mt-4 text-4xl tracking-tight text-yellow-900 sm:text-6xl">& World Coffee Exhibition</p>
                        </div>
                        <Link href={'https://www.worldcoffeealliance.com'} target='_blank' className='flex-shrink-0 my-auto h-max justify-self-center lg:justify-self-end'>
                            <img className='w-[12rem]' src='https://worldcoffeealliance.com/wp-content/uploads/2021/08/WCA_new_logo.png'></img>
                        </Link>
                    </div>

                    <p className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Delivering Collaborative Change: Impact</p>
                    <p className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl">of Innovation and Regenerative Solutions</p>
                    <div className='flex flex-col items-center justify-center max-w-5xl mx-auto mt-6 sm:flex-row sm:gap-x-2 gap-y-2'>
                        <div>
                            <img className='w-[17rem]' src='https://worldcoffeealliance.com/wp-content/uploads/2023/06/QEII-CENTRE.png' />
                        </div>
                        <p className="px-6 py-2 font-bold tracking-tight text-white text-md mx-aut h-max bg-lime-700 w-fit sm:text-lg">13 September 2023 </p>
                    </div>
                </div>
            </div>
            <div className='justify-center py-12 mx-auto bg-white max-w-7xl sm:py-20' >
                <p className="mt-6 text-2xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl">OVERVIEW</p>
                <div className='flex flex-col'>
                    <div className='px-12'>
                        <p className="mt-4 text-xl leading-8 text-gray-900 sm:mt-8">
                            With the looming implementation of the EUDR and CSDDD, the global coffee industry is faced with regulatory compliance that will have a dramatic impact on businesses. Against the backdrop of rising costs, climate change and sustainability issues, this business event will tackle and flesh out how to navigate its complexities and find collaborative and regenerative solutions for the future of coffee and other related commodities.
                        </p>
                        <p className="mt-4 text-xl leading-8 text-gray-900 sm:mt-8">
                            This must-attend business event will deep dive into the role of sustainable supply chain and innovation to secure transparency and traceability from farm to cup. Transforming from conventional agriculture to regenerative will require some collaboration, a global climate roadmap, incentives, government grants and private funding to be climate positive, scalable, and operational. Our panels and global high-level speakers will explore the adoption of Regenerative Agriculture best practices within the carbon credits framework and how ESG and Impact Investing will finance this transition.
                        </p>
                    </div>
                    <div className='items-center px-24 my-auto'>
                        <video
                            autoPlay
                            loop
                            controls
                            className="w-full mt-12"
                        >
                            <source
                                src="https://worldcoffeealliance.com/wp-content/uploads/2023/11/y2mate.com-World-Coffee-Summit-Exhibition-London-2023-Highlights_1080p.mp4"
                                type="video/mp4"
                            />
                        </video>
                    </div>
                </div>
            </div>
            <AgendaHighlights />
        </>
    )
}