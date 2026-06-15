"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import wcaWhiteLogo from '../images/WCA-White.png'

const whyThisSummitCards = [
  {
    titleLines: ['BEYOND COFFEE'],
    description:
      'Looking beyond commodities to the wider systems shaping coffee and cocoa — from climate and trade to capital, regulation and supply chain resilience.',
  },
  {
    titleLines: ['BEYOND SCENARIOS'],
    description:
      'Focused on what is being deployed, financed and scaled across the value chain.',
  },
  {
    titleLines: ['BEYOND FAMILIAR CIRCLES'],
    description:
      'Bringing together leaders and decision-makers from across the value chain — from origin to boardroom — to accelerate action where it matters most.',
  },
]

const whyItMattersCards = [
  {
    titleLines: ['SUPPLY IS', 'UNDER PRESSURE'],
    description:
      'Climate volatility, declining productivity and market disruption are reshaping future supply.',
  },
  {
    titleLines: ['COMPLIANCE IS NOW', 'A COMPETITIVE ADVANTAGE'],
    description:
      'EUDR, Scope 3 and traceability requirements are increasingly shaping sourcing, investment and trade decisions across global supply chains.',
  },
  {
    titleLines: ['RESILIENCE IS', 'BECOMING A BUSINESS PRIORITY'],
    description:
      'New investments, innovation and strategic partnerships are creating new pathways to strengthen resilience and secure long-term growth.',
  },
]

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

    <p className="mt-3 text-xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold max-w-5xl drop-shadow-xl text-[#FFBF00]">
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



                <div className="absolute bottom-48 left-1/2 z-10 -translate-x-1/2 sm:bottom-20 sm:left-auto sm:right-1 sm:translate-x-0 md:right-0 lg:bottom-20 lg:right-2 xl:right-4">
                    <Link
                        href="https://worldcoffeealliance.com/"
                        target="_blank"
                        className="flex items-start justify-center gap-0 sm:justify-start"
                    >
                        <span className="pt-5 text-xs font-semibold uppercase leading-tight tracking-wide text-white whitespace-nowrap sm:pt-3 sm:text-[0.6rem] md:pt-3.5 lg:pt-6 lg:text-sm">
                            Powered by
                        </span>
                        <Image
                            src={wcaWhiteLogo}
                            alt="World Coffee Alliance"
                            className="-ml-7 h-24 w-auto sm:-ml-5 sm:h-14 md:-ml-6 md:h-16 lg:-ml-10 lg:h-28"
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

            <section className="w-full bg-white px-6 pb-10 pt-6 sm:px-8 sm:pb-14 sm:pt-8 md:px-12">
                <div className="mx-auto max-w-7xl">
                    <p className="text-center text-2xl font-bold tracking-tight text-yellow-900 sm:text-4xl">
                        2026 SUMMIT OVERVIEW
                    </p>
                    <h2 className="mt-2 text-center text-2xl font-bold text-gray-900 sm:mt-3 sm:text-3xl">
                        The Industry at a Turning Point
                    </h2>

                    <div className="mt-6 flex flex-col gap-5 sm:gap-6">
                        <p className="text-xl leading-normal text-gray-900 sm:text-2xl">
                            Coffee and cocoa are being reshaped by climate risk, regulation, investment priorities and shifting supply chain dynamics.
                        </p>
                        <p className="text-xl leading-normal text-gray-900 sm:text-2xl">
                            Bringing together leaders from across the value chain — from producers and origin representatives to traders, brands, investors, policymakers and technology providers — the 4th World Coffee Innovation Summit (WCIS26) explores the partnerships, investments and practical action needed to build more resilient coffee and cocoa supply chains.
                        </p>
                        <p className="text-xl leading-normal text-gray-900 sm:text-2xl">
                            Under the theme{' '}
                            <span className="text-lime-700">
                                Moving the Needle: Securing Scalable Coffee &amp; Cocoa Resilience
                            </span>
                            , the Summit is designed to move beyond discussion and focus on what is being implemented, financed and scaled across the sector.
                        </p>
                    </div>
                </div>
            </section>

            <section className="w-full bg-gray-100 px-6 pb-10 pt-6 sm:px-8 sm:pb-14 sm:pt-8 md:px-12">
                <div className="mx-auto max-w-7xl">
                    <p className="text-center text-2xl font-bold tracking-tight text-lime-700 sm:text-4xl">
                        WHY THIS SUMMIT
                    </p>

                    <h2 className="mt-2 text-center text-2xl font-bold text-gray-900 sm:mt-3 sm:text-3xl">
                        Why WCIS?
                    </h2>

                    <p className="mt-2 text-center text-xl text-gray-900 sm:mt-3 sm:text-2xl">
                        Where strategy, implementation and collaboration come together.
                    </p>

                    <div className="mt-8 grid grid-cols-1 items-start divide-y divide-gray-200 md:mt-10 md:grid-cols-3 md:divide-x md:divide-y-0">
                        {whyThisSummitCards.map((card) => (
                            <article
                                key={card.titleLines.join(' ')}
                                className="flex flex-col items-center px-4 py-6 text-center sm:px-6 md:px-8"
                            >
                                <h3 className="text-xl font-bold leading-tight text-gray-900 sm:text-2xl">
                                    {card.titleLines.map((line, index) => (
                                        <React.Fragment key={line}>
                                            {index > 0 && <br />}
                                            {line}
                                        </React.Fragment>
                                    ))}
                                </h3>
                                <p className="mt-2 max-w-sm text-base leading-snug text-gray-900 sm:text-lg">
                                    {card.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="w-full bg-white px-6 pb-10 pt-6 sm:px-8 sm:pb-14 sm:pt-8 md:px-12">
                <div className="mx-auto max-w-7xl">
                    <p className="text-center text-2xl font-bold tracking-tight text-lime-700 sm:text-4xl">
                        WHY THIS MATTERS NOW
                    </p>

                    <h2 className="mt-2 text-center text-2xl font-bold text-gray-900 sm:mt-3 sm:text-3xl">
                        The Moment to Act is Now
                    </h2>

                    <div className="mt-8 grid grid-cols-1 items-start divide-y divide-gray-200 md:mt-10 md:grid-cols-3 md:divide-x md:divide-y-0">
                        {whyItMattersCards.map((card) => (
                            <article
                                key={card.titleLines.join(' ')}
                                className="flex flex-col items-center px-4 py-6 text-center sm:px-6 md:px-8"
                            >
                                <h3 className="text-xl font-bold leading-tight text-gray-900 sm:text-2xl">
                                    {card.titleLines.map((line, index) => (
                                        <React.Fragment key={line}>
                                            {index > 0 && <br />}
                                            {line}
                                        </React.Fragment>
                                    ))}
                                </h3>
                                <p className="mt-2 max-w-sm text-base leading-snug text-gray-900 sm:text-lg">
                                    {card.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
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