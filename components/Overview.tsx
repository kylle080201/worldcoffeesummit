"use client"
import Link from 'next/link'
import React from 'react'
import KeyThemes from './KeyThemes'

export default function Overview() {
    return (
        <>
            {/* V1 */}
            <div
                id="overview"
                className="relative bg-[url('https://worldcoffeealliance.com/wp-content/uploads/2025/03/Original-Picture-v1.jpg')] bg-cover bg-center pt-2 sm:py-24 pb-6 sm:pb-12 px-6 md:px-12 before:absolute before:inset-0 before:bg-black before:opacity-30 before:z-0"
                style={{ aspectRatio: '16/9' }} // Force 16:9 aspect ratio
            >
                {/* Icon in the top right corner */}
                <div className="absolute top-6 right-6 z-10">
                    <Link href={"https://worldcoffeealliance.com/"} target='_blank'>
                        <img src="https://worldcoffeealliance.com/wp-content/uploads/2021/08/WCA_new_logo.png" alt="Icon" className="w-24 h-24 md:w-32 md:h-32 xl:w-44 xl:h-44" />
                    </Link>
                </div>

                {/* Main Container */}
                <div className="relative flex flex-col items-center text-center text-white mt-32 md:mt-2 xl:-mt-8">
                    {/* Event Title */}
                    <h1 className="text-[3rem] md:text-[4rem] xl:text-[6rem] font-bold tracking-tight drop-shadow-xl">
                        THE BIGGER PICTURE
                    </h1>
                    <p className="mt-2 text-lg sm:text-2xl md:text-4xl font-bold max-w-3xl drop-shadow-xl">
                        CRAFTING AN ECOSYSTEM BUSINESS MODEL FOR SHARED PROSPERITY
                    </p>
                    
                    {/* Event Logos - Smaller Size */}
                    <div className="flex flex-col sm:flex-row items-center bg-[#e1be77ae] p-2 md:p-4w xl:p-6 rounded-md shadow-md gap-4 mt-[4rem] md:mt-[5rem] xl:mt-[25rem]">
                        <div className="p-2 bg-lime-700 rounded-md w-fit text-md md:text-xl xl:text-3xl font-bold tracking-wide">
                            23-24 October 2025 <span className="block sm:inline">| London</span>
                        </div>
                        <img className="w-[12rem] md:w-[16rem] xl:w-[20rem]" src="https://worldcoffeealliance.com/wp-content/uploads/2023/06/QEII-CENTRE.png" alt="QEII Centre" />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                        <Link href="/register">
                            <button className="bg-[#FFC000] text-white hover:underline hover:drop-shadow-xl font-bold text-lg md:text-xl xl:text-5xl py-1 md:py-2 xl:py-3 px-6 rounded-md">
                                REGISTER NOW
                            </button>
                        </Link>
                        <Link href="/interest">
                            <button className="bg-lime-700 text-white hover:underline hover:drop-shadow-xl font-bold text-lg md:text-xl xl:text-5xl py-1 md:py-2 xl:py-3 px-6 rounded-md">
                                SPONSOR/EXHIBIT
                            </button>
                        </Link>
                    </div>

                    {/* Footer Links */}
                    <div className="mt-10 flex flex-col md:flex-row justify-end w-full text-xs md:text-2xl font-bold text-white px-6">
                        {/* <p>WWW.WORLDCOFFEEINNOVATIONSUMMIT.COM</p> */}
                        <p>#WCIS25</p>
                    </div>
                </div>
            </div>

            {/* 2025 SUMMIT OVERVIEW */}
            <div className='w-full md:px-0 px-12 py-8 sm:py-12 bg-gray-100'>
                <div className='justify-center mx-auto max-w-7xl'>
                    <p className="text-2xl font-bold tracking-tight text-center sm:text-4xl text-yellow-900">
                        2025 SUMMIT OVERVIEW
                    </p>

                    <div className='flex flex-col gap-8 max-w-full m-auto mt-8'>
                        <div className="text-2xl leading-8 text-gray-900 w-full text-justify">
                            In a time of unprecedented disruption and transformation, the World Coffee Innovation Summit 2025 in London convenes global visionary leaders, global brands and corporates, innovators, producers, policymakers, and investors to reimagine the future of coffee through shared prosperity, resilience, and systemic collaboration.
                        </div>

                        <div className="text-2xl leading-8 text-gray-900 w-full text-justify">
                            Under the theme <strong>&ldquo;THE BIGGER PICTURE: CRAFTING AN ECOSYSTEM BUSINESS MODEL FOR SHARED PROSPERITY&ldquo;</strong>, the summit challenges the coffee &amp; cocoa industries to move beyond fragmented initiatives and transactional relations to embrace a holistic, collaborative ecosystem business model—one that prioritizes long-term value creation for all stakeholders, from farmers to consumers.
                        </div>

                        <div className="text-2xl leading-8 text-gray-900 w-full text-justify">
                            This two-day, high-level, closed-door gathering will focus on:
                        </div>

                        <ul className="list-disc flex flex-col ml-12">
                            <li className="text-2xl leading-8 text-gray-900 w-full text-justify">
                                Unlocking inclusive growth across the entire coffee value chain.
                            </li>
                            <li className="text-2xl leading-8 text-gray-900 w-full text-justify">
                                Embedding innovation, equity and sustainability into business models.
                            </li>
                            <li className="text-2xl leading-8 text-gray-900 w-full text-justify">
                                Aligning climate action, farmer income improvement and ethical sourcing with market opportunities.
                            </li>
                            <li className="text-2xl leading-8 text-gray-900 w-full text-justify">
                                Co-creating bold, scalable solutions across industries based on trust.
                            </li>
                        </ul>

                        <div className="text-2xl leading-8 text-gray-900 w-full text-justify">
                            Join us in London to shift from transactional thinking to ecosystem leadership and shape the future of coffee together.
                        </div>
                    </div>
                </div>
            </div>


            <KeyThemes />

            {/* 2024 SUMMIT HIGHLIGHT */}
            <div className='w-full md:px-0 px-12 py-8 sm:py-12 bg-gray-100'>
                <div className='w-full md:px-0 px-12'>
                    <div className='justify-center mx-auto max-w-7xl'>
                        <p className="text-2xl font-bold tracking-tight text-center sm:text-4xl text-yellow-900 md:pb-8">2024 SUMMIT HIGHLIGHTS</p>
                        {/* <div className='flex flex-col max-w-full m-auto md:py-8'>
                            <div className="text-2xl leading-8 text-gray-900 w-full text-justify">
                                As the leading solution-driven summit that connects <strong>COFFEE</strong>, <strong>CLIMATE CHANGE</strong> and <strong>FINANCE</strong> through <strong>INNOVATION</strong>, the World Coffee Innovation Summit is a must-attend for those who invested in advancing nature-positive, resilient agriculture and food systems for a net positive future in coffee sector. Join global coffee, climate and finance leaders and agri-food innovators in London for two days of in-depth discussions and cross-sector networking.
                            </div>
                        </div> */}
                    </div>
                </div>

                <div className='items-center mx-auto my-auto w-full flex flex-col max-w-7xl'>
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
            </div>
        </>
    )
}