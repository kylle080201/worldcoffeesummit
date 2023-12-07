"use client"
import Link from 'next/link'
import React from 'react'
import CountDown from './CountDown'
import { AddToCalendarButton } from 'add-to-calendar-button-react';
import AgendaHighlights from './AgendaHighlights';
import Image from 'next/image';

export default function Overview() {
    return (
        <>
            <div id="overview" className="flex flex-col bg-[url('https://worldcoffeealliance.com/wp-content/uploads/2023/12/Original-cover-photo-2-scaled.jpg')] pt-2 sm:py-4 pb-6 sm:pb-12 bg-cover bg-center mlg:flex-col">
                <div className='flex justify-end'>
                    <Link href={'https://www.worldcoffeealliance.com'} target='_blank' className='px-4'>
                        <img className='w-[12rem]' src='https://worldcoffeealliance.com/wp-content/uploads/2021/08/WCA_new_logo.png'></img>
                    </Link>
                </div>
                <div className='flex flex-col lg:flex-row'>
                    <div className="content-center self-center text-center lg:pr-24 w-4/6">
                        <div className='w-full px-4 lg:px-16 justify-items-stretch'>
                            <div className='py-6 my-auto'>
                                <p style={{ textShadow: "2px 6px 4px #6b7280", fontFamily: 'Arial' }} className="text-2xl font-bold tracking-tight text-white md:text-6xl">World Coffee Summit &</p>
                                <p style={{ textShadow: "2px 6px 4px #6b7280", fontFamily: 'Arial' }} className="text-2xl font-bold tracking-tight text-white md:text-6xl">Exhibition London <span className='text-red-600'>2024</span></p>
                            </div>
                        </div>

                        <p style={{ fontFamily: 'Arial' }} className="text-lg font-semibold tracking-tight text-gray-900 md:text-4xl ">Leveraging Scalable Technology</p>
                        <p style={{ fontFamily: 'Arial' }} className="text-lg font-semibold tracking-tight text-gray-900 md:text-4xl">Towards A Net Positive Economy</p>
                        <div className='flex flex-col items-center justify-center max-w-5xl mx-auto mt-6 sm:flex-row sm:gap-x-2 gap-y-2'>
                            <div>
                                <img className='w-[17rem]' src='https://worldcoffeealliance.com/wp-content/uploads/2023/06/QEII-CENTRE.png' />
                            </div>
                            <p className="px-4 py-1 font-bold tracking-tight text-white text-md mx-aut h-max bg-lime-700 w-fit sm:text-3xl">16-17 October 2024</p>
                        </div>
                        <CountDown />
                        <div className='flex justify-center max-w-5xl mx-auto mt-12 md:mt-0'>
                            <AddToCalendarButton
                                name="World Coffee Summit London & World Coffee Exhibition 2024"
                                options={['Apple', 'Google', 'iCal', 'Outlook.com', 'Microsoft 365', 'Microsoft Teams', 'Yahoo']}
                                location="Queen Elizabeth II Centre, London, England"
                                startDate="2024-10-16"
                                endDate="2024-10-16"
                                startTime="09:00"
                                endTime="17:30"
                                trigger="click"
                                description='A face-to-face Coffee Summit Exhibition on September 13, 2023'
                                timeZone="Europe/Belfast"
                            ></AddToCalendarButton>
                        </div>
                    </div>
                    <div className='content-center self-center text-center lg:-ml-24 md:py-0 w-2/6'>
                        <div className='flex flex-col lg:mt-72 items-start'>
                            <div className='mx-auto lg:mx-0'>
                                <Link rel='noreferer' className='flex-shrink-0 flex text-center sm:px-4 py-2 mx-auto font-bold tracking-tight text-gray-900 bg-yellow-500 hover:underline h-max text-2xl lg:text-5xl' href="/interest">
                                    REGISTER <br/> INTEREST
                                </Link>
                            </div>
                        </div>
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