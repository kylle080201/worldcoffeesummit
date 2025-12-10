"use client"
import Link from 'next/link'
import React from 'react'
import KeyThemes from './KeyThemes'
import Speakers2024 from './2024Speakers'
import Speakertest from './2024Speakerstest'
import Advisoryboard from './Advisoryboard'

export default function Overview() {
    return (
        <>

            {/* V1 */}
  <div
  id="overview"
  className="relative pt-2 sm:py-24 pb-6 sm:pb-12  overflow-hidden"
>
  {/* Background Video */}
  <video
    className="absolute inset-0 w-full h-full object-cover z-0"
    src="https://worldcoffeealliance.com/wp-content/uploads/2024/10/World-Coffee-Innovation-Summit-London-16-17th-October-2024-Highlights-1-1.mp4"
    autoPlay
    muted
    loop
    playsInline
  />

  {/* Teal Overlay */}
  <div className="absolute inset-0 bg-teal-700 opacity-50 z-0" />
                {/* Icon in the top right corner */}
                <div className="absolute top-6 right-6 z-10">
                    <Link href={"https://worldcoffeealliance.com/"} target='_blank'>
                        <img src="https://worldcoffeealliance.com/wp-content/uploads/2021/08/WCA_new_logo.png" alt="Icon" className="w-24 h-24 md:w-32 md:h-32 xl:w-44 xl:h-44" />
                    </Link>
                </div>

                {/* Main Container */}
<div className="w-full relative flex flex-col items-center text-center text-white mt-32 md:mt-2 xl:-mt-8 py-8 pb-80 md:pb-20">
    {/* Event Title */}
    <h1 className="text-[3rem] md:text-[4rem] xl:text-[6rem] font-bold tracking-tight drop-shadow-xl">
        MOVING THE NEEDLE
    </h1>

    <p className="mt-2 text-[3rem] sm:text-3xl md:text-6xl font-bold max-w-5xl drop-shadow-xl">
       Creating A Business Case for Coffee & Cocoa Resilience
    </p>

    {/* Container for date and SAVE THE DATES */}
    <div className="flex flex-col items-center gap-4 mt-[4rem] md:mt-[5rem] xl:mt-[10rem]">
                <h1 className="text-yellow-300 text-[3rem] md:text-[4rem] xl:text-[6rem] font-bold tracking-tight drop-shadow-xl">
            SAVE THE DATE
        </h1>
        <div className="p-2 rounded-md w-fit text-xl md:text-2xl xl:text-4xl font-bold tracking-wide">
           21-22 October 2026 <span className="block sm:inline">| QEII Centre & House of Lords, London | #WCIS26</span>
        </div>


    </div>
</div>



                {/* Footer Links */}
                <div className=" absolute bottom-0 w-full mt-10 bg-green-700 flex flex-col md:flex-row justify-center gap-12 items-center p-4 text-xl md:text-2xl font-bold text-white px-2" style={{ backgroundColor: 'rgb(38 72 51)' }}>
                        {/* <p>WWW.WORLDCOFFEEINNOVATIONSUMMIT.COM</p> */}
                        <p>200+ Attendees</p>
                        <p>25+ Countries </p>
                        <p>60+ Speakers </p>
                        <p>75%+ C-Suite, VP or Director Level  </p>
                        {/* <div className="flex items-center"> 
                            <p className="ml-5">75%+ </p>
                        <p>Attendance C-Suite, <br/> VP or Director Level </p>
                        </div> */}
                       
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

                        {/* <div className="text-2xl leading-8 text-gray-900 w-full text-justify">
                            This two-day, high-level, closed-door gathering will focus on:
                        </div> */}

                        {/* <ul className="list-disc flex flex-col ml-12">
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
                        </ul> */}

                        <div className="text-2xl leading-8 text-gray-900 w-full text-justify">
                            Join us in London to shift from transactional thinking to ecosystem leadership and reimagine the future of coffee and cocoa together.
                        </div>
                    </div>
                </div>
            </div>
                              <Advisoryboard />
                <Speakers2024 />
                {/* <Speakertest/> */}

            {/* <KeyThemes /> */}
      <div className="mb-8 w-full flex justify-center pt-8">
  <div  className="font-bold text-white text-3xl bg-lime-700 px-6 py-3 rounded-lg hover:bg-lime-800 cursor-pointer transition duration-300"
    onClick={() => window.location.href = "/agenda"} // or your desired action
  >
    FULL AGENDA
  </div>
</div>


            {/* 2024 SUMMIT HIGHLIGHT */}
            {/* <div className='w-full md:px-0 px-12 py-8 sm:py-12 bg-gray-100'>
                <div className='w-full md:px-0 px-12'>
                    <div className='justify-center mx-auto max-w-7xl'>
                        <p className="text-2xl font-bold tracking-tight text-center sm:text-4xl text-yellow-900 md:pb-8">2024 SUMMIT HIGHLIGHTS</p>
                        {/* <div className='flex flex-col max-w-full m-auto md:py-8'>
                            <div className="text-2xl leading-8 text-gray-900 w-full text-justify">
                                As the leading solution-driven summit that connects <strong>COFFEE</strong>, <strong>CLIMATE CHANGE</strong> and <strong>FINANCE</strong> through <strong>INNOVATION</strong>, the World Coffee Innovation Summit is a must-attend for those who invested in advancing nature-positive, resilient agriculture and food systems for a net positive future in coffee sector. Join global coffee, climate and finance leaders and agri-food innovators in London for two days of in-depth discussions and cross-sector networking.
                            </div>
                        </div> */}
                    {/* </div>
                </div> */}

                {/* <div className='items-center mx-auto my-auto w-full flex flex-col max-w-7xl'>
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
                </div> */}
            {/* </div> */}
        </>
    )
}