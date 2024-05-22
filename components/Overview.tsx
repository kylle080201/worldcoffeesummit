"use client"
import Link from 'next/link'
import React from 'react'
import CountDown from './CountDown'
import { AddToCalendarButton } from 'add-to-calendar-button-react';


export default function Overview() {
    return (
        <>
            <div id="overview" className="bg-[url('https://worldcoffeealliance.com/wp-content/uploads/2024/04/WCIS_Poster-full-cropped-resized-width-1.jpg')]  pt-2 sm:py-24 pb-6 sm:pb-12 bg-cover bg-center lg:bg-right-bottom mlg:flex-col px-12">
                <div className='flex flex-col lg:flex-row-reverse  lg:-ml-16'>
                    <div className='flex flex-col items-center lg:items-end lg:justify-between w-full lg:w-1/4'>
                        <Link href={'https://www.worldcoffeealliance.com'} target='_blank' className='px-4 lg:-mt-16'>
                            <img className='w-[15rem]' src='https://worldcoffeealliance.com/wp-content/uploads/2021/08/WCA_new_logo.png'></img>
                        </Link>
                    </div>
                    <div className='flex flex-col lg:flex-row w-3/4 mx-auto'>
                        <div className="content-center self-center text-center">
                            <div className='w-full px-4 lg:px-16 justify-items-stretch'>
                                <div className='py-6 my-auto'>
                                    <p className="text-2xl font-bold tracking-tight text-[#674E46] md:text-6xl">REDEFINING SHARED VALUE</p>
                                </div>
                            </div>
                            <p className="text-lg font-semibold tracking-tight text-white md:text-4xl">INNOVATION TOWARDS</p>
                            <p className="text-lg font-semibold tracking-tight text-white md:text-4xl">A NET POSITIVE FUTURE</p>
                            
                            <div className='flex flex-col justify-center mt-6'>
                                <p className="px-4 py-1 font-bold tracking-tight text-white text-md mx-auto h-max bg-lime-700 w-fit sm:text-3xl">16-17 October 2024</p>
                                <div className='flex flex-col items-center max-w-5xl mx-auto mt-2 sm:flex-row sm:gap-x-2 gap-y-2'>
                                    <div>
                                        <img className='w-[17rem]' src='https://worldcoffeealliance.com/wp-content/uploads/2023/06/QEII-CENTRE.png' />
                                    </div>
                                    <div>
                                        <img className='w-[12rem]' src='https://worldcoffeealliance.com/wp-content/uploads/2024/05/House_of_Lords_logo_2020.svg.png' />
                                    </div>
                                </div>
                            </div>
                            <CountDown />
                            <div  className='flex  justify-center max-w-5xl mx-auto mt-12 md:mt-0'>
                                <AddToCalendarButton
                                    name="World Coffee Summit London & World Coffee Exhibition 2024"
                                    options={['Apple', 'Google', 'iCal', 'Outlook.com', 'Yahoo']}
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
                            <div className='flex flex-col items-center mt-4'>
                                <div className='mx-auto lg:mx-0'>
                                    {/* <Link rel='noreferer' className='flex-shrink-0 flex text-center px-4 py-2 mx-auto font-bold tracking-tight text-[#674E46] bg-yellow-500 h-max text-lg lg:text-2xl' href="/register">
                                        REGISTER NOW
                                    </Link> */}
                                    <div className='flex-shrink-0 flex text-center px-4 py-2 mx-auto font-bold tracking-tight text-[#674E46] bg-yellow-500 h-max text-lg lg:text-2xl'>
                                        SAVE THE DATE
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-4 w-full md:justify-between justify-center mt-12 lg:mt-44'>
                        <div className='text-sm lg:text-2xl font-bold text-[#674E46]'>
                            WWW.WORLDCOFFEEINNOVATIONSUMMIT.COM
                        </div>
                        <div className='text-sm lg:text-2xl font-bold text-[#674E46]'>
                            #WCIS24
                        </div>
                </div>
            </div>

            <div className='w-full md:px-0 px-12'>
                <div className='flex md:flex-row flex-col max-w-7xl m-auto py-12 md:py-20 gap-12'>
                    <div className="text-2xl leading-8 text-gray-900 w-full text-justify md:w-1/2">
                        As the leading summit that connects <strong>COFFEE</strong>, <strong>CLIMATE CHANGE</strong> and <strong>FINANCE</strong> through <strong>INNOVATION</strong>, the World Coffee Innovation Summit is a must-attend for those who invested in advancing nature-positive, resilient agriculture and food systems for a net positive future in coffee sector. Join global coffee, climate and finance leaders and agri-food innovators in London for two days of in-depth discussions and cross-sector networking.
                    </div>
                    <div className='items-center my-auto w-full md:w-1/2'>
                        <video
                            loop
                            controls
                            className="w-full"
                            poster='https://worldcoffeealliance.com/wp-content/uploads/2024/05/Thumbnail.jpg'
                        >
                            <source
                                src="https://worldcoffeealliance.com/wp-content/uploads/2024/05/World-Coffee-Innovation-Summit.mp4"
                                type="video/mp4"
                            />
                        </video>
                    </div>
                </div>
            </div>

            <div className='w-full bg-gray-100'>
                <div className='justify-center py-12 mx-auto max-w-7xl sm:py-20' >
                    <p className="mt-12 text-2xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl">2024 OVERVIEW</p>
                    <div className='flex flex-col'>
                        <div className='px-12'>
                            <p className="mt-4 text-xl leading-8 text-gray-900 sm:mt-8 text-justify">
                                The future of coffee is replete with overwhelming promises, and highly targeted and science-based digital and technology innovation. However, reality does not paint a rosy picture. With the difficult challenges of Climate change, soil and water depletion, lowering supply, decrease in global coffee prices and increasing consumer demand for sustainable coffee, the perpetuation of poverty-stricken smallholder farmers, something has to change.
                            </p>
                            <p className="mt-4 text-xl leading-8 text-gray-900 sm:mt-8 text-justify">
                                <span className='font-bold'>World Coffee Innovation Summit 2024</span> <span className='font-bold italic'>“Redefining Shared Value: Innovation Towards a Net Positive Future”</span> will convene global leaders, stakeholders and innovators to showcase various scalable innovations, their impact on traceability and sustainability, their capabilities to mitigate climate and financial risks, and fostering regenerative solutions. By integrating a shared value approach within the corporate business model, innovative solutions will drive not only business but also environmental and social value for farming communities. This net-positive economic approach helps to create a sustainable future for coffee and contributes to the overall well-being of society.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* <AgendaHighlights /> */}
        </>
    )
}