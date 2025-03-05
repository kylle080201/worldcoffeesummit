"use client"
import Link from 'next/link'
import React from 'react'
import CountDown from './CountDown'
import { AddToCalendarButton } from 'add-to-calendar-button-react';
import { useRouter } from 'next/navigation';


export default function Overview() {
    const router = useRouter()
    return (
        <>
            <div id="overview" className="bg-[url('https://worldcoffeealliance.com/wp-content/uploads/2025/03/WCIS-2025-POSTER.png')] pt-2 sm:py-24 pb-6 sm:pb-12 bg-cover bg-center lg:bg-right-bottom mlg:flex-col px-12">
                <div className='flex flex-col lg:flex-row-reverse justify-between'>
                    <div className='flex flex-col items-center lg:items-end lg:justify-between w-full'>
                        <Link href={'https://www.worldcoffeealliance.com'} target='_blank' className='px-4 lg:-mt-16'>
                            <img className='w-[15rem]' src='https://worldcoffeealliance.com/wp-content/uploads/2021/08/WCA_new_logo.png'></img>
                        </Link>
                    </div>
                    <div className='flex flex-col items-center lg:items-end lg:justify-between'>
                        <Link href='/'>
                            <img
                                className="flex-shrink-0 hidden w-[17rem] h-auto lg:w-[44rem] md:flex"
                                src="https://worldcoffeealliance.com/wp-content/uploads/2024/04/world-coffee-innovation-summit-high-resolution-logo-transparent-1.png"
                                alt="WCS Logo"
                            />
                        </Link>
                    </div>
                </div>
                <div className='relative flex flex-col gap-4 lg:flex-row w-3/4 mx-auto items-end'>
                    <div className='content-center -ml-[15rem] self-center pb-16 text-center mt-[44rem] lg:ml-0'>
                        <button onClick={() => router.push("/interest")} className="bg-yellow-400 w-[19rem] text-black font-bold py-4 px-6 text-2xl shadow-md">
                            REGISTER INTEREST
                        </button>
                    </div>

                    {/* Main Section */}
                    <div className="content-center self-center text-center bg-orange-200/70 p-6 mt-[24rem]">
                        <div className='w-full lg:px-16 justify-items-stretch'>
                            <div className='py-6 my-auto'>
                                <p className="text-2xl font-bold tracking-tight text-white md:text-[6rem]">
                                    SAVE THE DATE
                                </p>
                            </div>
                        </div>

                        <div className='flex flex-col justify-center pt-6'>
                            <p className="px-4 py-8 font-bold tracking-tight text-white text-2xl mx-auto h-max bg-lime-700 w-fit sm:text-[4rem]">
                                22-23 October 2025 | London
                            </p>
                            <div className='flex flex-col items-center max-w-5xl mx-auto mt-2 sm:flex-row sm:gap-x-2 gap-y-2'>
                                <div>
                                    <img className='w-[24rem]' src='https://worldcoffeealliance.com/wp-content/uploads/2023/06/QEII-CENTRE.png' />
                                </div>
                                <div>
                                    <img className='w-[14rem]' src='https://worldcoffeealliance.com/wp-content/uploads/2024/05/House_of_Lords_logo_2020.svg.png' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='flex flex-col md:flex-row gap-4 w-full md:justify-between justify-center mt-12'>
                    <div className='text-sm lg:text-2xl font-bold text-white'>
                        WWW.WORLDCOFFEEINNOVATIONSUMMIT.COM
                    </div>
                    <div className='text-sm lg:text-2xl font-bold text-white'>
                        #WCIS24
                    </div>
                </div>
            </div>

            <div className='w-full md:px-0 px-12'>
                <div className='justify-center mx-auto max-w-7xl'>
                    <p className="mt-12 text-2xl font-bold tracking-tight text-center sm:text-4xl text-yellow-900">2024 SUMMIT HIGHLIGHTS</p>
                    <div className='flex flex-col max-w-full m-auto md:py-8'>
                        <div className="text-2xl leading-8 text-gray-900 w-full text-justify">
                            As the leading solution-driven summit that connects <strong>COFFEE</strong>, <strong>CLIMATE CHANGE</strong> and <strong>FINANCE</strong> through <strong>INNOVATION</strong>, the World Coffee Innovation Summit is a must-attend for those who invested in advancing nature-positive, resilient agriculture and food systems for a net positive future in coffee sector. Join global coffee, climate and finance leaders and agri-food innovators in London for two days of in-depth discussions and cross-sector networking.
                        </div>
                    </div>
                </div>
            </div>

            <div className='items-center pb-12 sm:pb-20 mx-auto my-auto w-full flex flex-col max-w-7xl'>
                <video
                    loop
                    controls
                    className="w-full"
                    poster='https://worldcoffeealliance.com/wp-content/uploads/2024/10/Thumbnail.png'
                    disablePictureInPicture
                    controlsList="nodownload noremoteplayback"
                    onContextMenu={(e) => e.preventDefault()}
                >
                    <source
                        src="https://worldcoffeealliance.com/wp-content/uploads/2024/10/World-Coffee-Innovation-Summit-London-16-17th-October-2024-Highlights-1-1.mp4"
                        type="video/mp4"
                    />
                </video>
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