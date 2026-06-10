"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import KeyThemes from './KeyThemes'
import Speakers2026 from './Speakers2026'
import { HomeSection } from './HomeSection'
import wcaWhiteLogo from '../images/WCA-White.png'

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

                {/* Main Container */}
<div className="w-full relative flex flex-col items-center text-center text-white mt-32 md:mt-2 xl:-mt-8 py-8 pb-80 md:pb-20">
    {/* Event Title */}
    <h1 className="text-[3rem] md:text-[4rem] xl:text-[6rem] font-bold tracking-tight drop-shadow-xl">
        MOVING THE NEEDLE
    </h1>

    <p className="mt-2 text-[3rem] sm:text-3xl md:text-6xl font-bold max-w-7xl drop-shadow-xl">
       Securing Scalable Coffee & Cocoa Resilience
    </p>

    <p className="mt-3 text-xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold max-w-5xl drop-shadow-xl">
      Where Climate, Capital and Supply Chains Converge
    </p>

    {/* Date, venue, and CTA buttons */}
    <div className="flex flex-col items-center gap-0 mt-[4rem] md:mt-[5rem] xl:mt-[10rem]">
        <div className="p-2 rounded-md w-fit text-xl md:text-2xl xl:text-4xl font-bold tracking-wide">
           21-22 October 2026 <span className="block sm:inline">| QEII Centre & House of Lords, London | #WCIS26</span>
        </div>
        <div className="flex flex-col gap-3 mt-4 sm:flex-row">
            <Link
                href="/register"
                className="rounded-xl bg-lime-700 px-8 py-4 text-2xl md:text-3xl font-bold text-[#FFBF00] transition duration-300 hover:bg-lime-800 hover:text-[#FFD54F]"
            >
                REGISTER NOW
            </Link>
            <Link
                href="/interest"
                className="rounded-xl bg-lime-700 px-8 py-4 text-2xl md:text-3xl font-bold text-[#FFBF00] transition duration-300 hover:bg-lime-800 hover:text-[#FFD54F]"
            >
                SPONSOR OR EXHIBIT
            </Link>
        </div>
    </div>
</div>



                <div className="absolute bottom-20 right-4 z-10 sm:bottom-20 sm:right-4">
                    <Link
                        href="https://worldcoffeealliance.com/"
                        target="_blank"
                        className="flex items-start gap-0"
                    >
                        <span className="pt-4 text-[0.65rem] font-semibold uppercase leading-tight tracking-wide text-white sm:pt-5 sm:text-xs md:pt-6 md:text-sm whitespace-nowrap">
                            Powered by
                        </span>
                        <Image
                            src={wcaWhiteLogo}
                            alt="World Coffee Alliance"
                            className="-ml-8 h-20 w-auto sm:-ml-9 sm:h-24 md:-ml-10 md:h-28"
                        />
                    </Link>
                </div>

                {/* Footer Links */}
                <div
                    className="absolute bottom-0 mt-10 flex w-full flex-col items-center justify-center gap-4 p-4 px-2 text-xl font-bold text-white md:flex-row md:gap-0 md:text-2xl"
                    style={{ backgroundColor: 'rgb(38 72 51)' }}
                >
                    {[
                        '200+ Attendees',
                        '25+ Countries',
                        '60+ Speakers',
                        '75%+ C-Suite, VP or Director Level',
                    ].map((stat, index) => (
                        <React.Fragment key={stat}>
                            {index > 0 && (
                                <div
                                    aria-hidden="true"
                                    className="hidden h-8 w-px bg-gray-400/60 md:block"
                                />
                            )}
                            <p className="px-0 text-center md:px-10">{stat}</p>
                        </React.Fragment>
                    ))}
                </div>

            </div>

            {/* 2025 SUMMIT OVERVIEW */}
            <HomeSection className="md:px-0 px-12 py-8 sm:py-12">
                <div className='justify-center mx-auto max-w-7xl'>
                    <p className="text-2xl font-bold tracking-tight text-center sm:text-4xl text-yellow-900">
                        2026 SUMMIT OVERVIEW
                    </p>

                    <div className='flex flex-col gap-4 max-w-full m-auto mt-8'>
                        <div className="text-2xl leading-8 text-gray-900 w-full text-justify">
                            The global coffee and cocoa industry is at a turning point.
                        </div>

                        <div className="text-2xl leading-8 text-gray-900 w-full text-justify">
                            Climate pressure, regulatory change, and supply volatility are reshaping how supply
                            chains operate&mdash;and how businesses compete. At the same time, sustainability is
                            moving from ambition to execution, with real capital, clear accountability, and
                            measurable outcomes on the line.
                        </div>

                        <div className="text-2xl leading-8 text-gray-900 w-full text-justify font-semibold">
                            The question is: how do we deliver change&mdash;at scale?
                        </div>

                        <div className="text-2xl leading-8 text-gray-900 w-full text-justify">
                            The 4<sup>th</sup> World Coffee Innovation Summit 2026 brings together the leaders driving
                            that change&mdash;global brands, traders, corporates, policymakers, producers,
                            innovators, investors, and sustainability organisations&mdash;creating a unique platform
                            for partnership, investment, and delivery across the entire value chain.
                        </div>

                        <div className="text-2xl leading-8 text-gray-900 w-full text-justify">
                            Under the theme <strong>Moving the Needle: Securing Scalable Coffee & Cocoa Resilience,</strong> the summit
                            is <strong>built for execution, not just discussion</strong>&mdash;turning strategy into action by connecting
                            capital, technology, and partnerships to deliver measurable impact across global
                            coffee and cocoa supply chains.
                        </div>

                        <div className="text-2xl leading-8 text-gray-900 w-full text-justify">
                            Join us in London for two days focused on implementation, high-value connections,
                            and real-world solutions shaping the future of coffee and cocoa.
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

                    </div>
                </div>
            </HomeSection>
                <HomeSection className="pb-12 sm:pb-16">
                <Speakers2026 />
                <div className="-mt-12 w-full flex justify-center">
                  <Link
                    href="/speakers#speakers-2025"
                    className="rounded-lg bg-lime-700 px-6 py-3 text-lg font-bold text-white transition-colors duration-300 hover:bg-lime-800"
                  >
                    2025 SPEAKERS
                  </Link>
                </div>
                </HomeSection>
                <HomeSection>
                <KeyThemes />
                </HomeSection>
                {/* <Advisoryboard /> */}
                {/* <Speakertest/> */}

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