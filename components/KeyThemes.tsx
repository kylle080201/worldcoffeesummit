"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import KeyThemesCountDown from './KeyThemesCountDown';
import WhoYoullMeet from './WhoYoullMeet';

const keyThemes = [
  {
    title: "Geopolitical Disruption & Trade Realignment",
    subheading:"Redesigning Resilience in a Fragmented World",
    description: "Explore how escalating geopolitical tensions, trade barriers, and shifting alliances are redrawing the coffee and cocoa landscape, and how value chain actors can reimagine resilience, diversify risk, and strengthen regional collaboration in a multipolar world."
  },
  {
    title: "Compliance as Competitive Strategy",
    subheading:"EUDR, CSRD & CS3D as Catalysts for Innovation and Brand Trust",
    description: "Compliance is no longer a cost, it’s a catalyst. Learn how leading companies are transforming regulatory obligations into innovation pipelines, supply chain transparency, and deeper consumer trust."
  },
  {
    title: "Earth First: Regenerating Soil, Climate & Biodiversity",
    subheading:"Data-Driven Stewardship for Long-Term Prosperity",
    description: "Position nature at the centre of performance. Discover how cutting-edge diagnostics, farm-level intelligence, and biodiversity data are being harnessed to restore ecosystems and enhance productivity at scale."
  },
  {
    title: "Cracking Scope 3: Turning Complexity into Leadership",
    subheading:"Decoding Emissions Across Value Chains for Real Impact",
    description: "From ambition to action—unpack the tools, partnerships, and strategies needed to understand, reduce, and monetise Scope 3 emissions across procurement, logistics, and sourcing."
  },
  {
    title: "Coffee & Cocoa Climate Convergence",
    subheading:"Aligning Two Sectors Around a Shared Climate Agenda",
    description: "With parallel climate risks and overlapping supply chains, coffee and cocoa offer a unique opportunity for joint solutions. Discover how integrated strategies can accelerate climate adaptation, innovation, and policy influence."
  },
  {
    title: "Digitalizing Supply Chains: AI, Automation & Traceability",
    subheading:"Tech-Driven Accountability from Farm to Shelf",
    description: "Explore how digital infrastructure—from AI to digital twins—is transforming procurement, supplier engagement, and consumer transparency while improving speed, precision, and integrity in global sourcing."
  },
  {
    title: "Scaling Regenerative Agriculture Across Origins",
    subheading:"From Pilot to Practice: Making Regeneration Investible",
    description: "Understand how MRV systems, farmer incentives, and ecosystem service payments are turning regenerative agriculture into a scalable, measurable, and bankable reality."
  },
  {
    title: "Decoding Nature: Investing in Nature-Based Solutions (NBS)",
    subheading:"Regenerating Ecosystems While Creating Economic Value",
    description: "From watershed restoration to forest conservation, discover how NBS is becoming the next frontier in sustainability investment—mobilising capital to regenerate nature and deliver measurable returns."
  },
  {
    title: "Voluntary Carbon Markets & The Future of Offsets",
    subheading:"Ensuring Integrity, Traceability, and Real Climate Value",
    description: "Delve into the evolving world of voluntary carbon markets—how new standards, technologies, and buyer expectations are reshaping credibility and investment potential."
  },
  {
    title: "Geospatial Intelligence & Remote Monitoring",
    subheading:"Real-Time Visibility for Compliance, Carbon, and Impact",
    description: "See how satellites, drones, and machine learning are providing powerful, real-time insights into land use, carbon emissions, and regulatory compliance—enabling faster action and lower risk."
  },
  {
    title: "Precision Agriculture: The Next Green Revolution",
    subheading:"Smart Farming for Climate, Yield & Profitability",
    description: "Unlock the power of precision. From IoT sensors to AI-driven crop models, explore how data-rich farming systems are improving productivity, reducing waste, and aligning with climate goals."
  },
  {
    title: "Mainstreaming Regenerative Finance",
    subheading:"Shaping Portfolios for Resilience, Nature, and Shared Value",
    description: "Follow the capital as climate finance shifts from risk avoidance to regeneration. Learn how investors, insurers, and brands are redefining ROI by investing in nature-positive, long-term impact strategies."
  },
]

function KeyThemes() {
  const themesColumn1 = keyThemes.slice(0, 6);
  const themesColumn2 = keyThemes.slice(6);
  const router = useRouter()
  return (
    <div className='my-12 w-full px-0 md:px-8 py-12' style={{ backgroundColor: '#F3F4F6' }}>
      <div className='mx-auto sm:max-w-7xl'>
        {/* <div className='flex flex-col items-center md:mt-0'>
          <span className='text-red-500 text-4xl font-bold'>EUDR COUNTDOWN</span>
          <span className='text-red-500 text-4xl font-bold'>30 DECEMBER 2024</span>
          <KeyThemesCountDown />
        </div> */}
        <div className='flex w-full justify-center'>
          <h2 className="text-4xl font-bold tracking-tight">KEY THEMES</h2>
        </div>
        <div className='mt-12 flex gap-4 md:gap-8 md:flex-row flex-col md:px-0 px-12'>
          {/* Column 1 */}
          <div className="md:w-1/2 w-full">
            <ul className="list-disc flex flex-col gap-4 ml-6">
              {themesColumn1.map(theme => (
                <li key={theme.title} className="text-[1.375rem]">
                  <strong>{theme.title}</strong>
                  <br/>
                  <div className="text-xl"><strong>{theme.subheading}</strong></div>
                  <div className="text-lg" >
                    {theme.description}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Column 2 */}
          <div className="md:w-1/2 w-full">
            <ul className="list-disc flex flex-col gap-4 ml-6">
              {themesColumn2.map(theme => (
                <li key={theme.title} className="text-[1.375rem]">
                  <strong>{theme.title}</strong> 
                  <br/>
                  <div className="text-xl">
                    <strong>{theme.subheading}</strong></div>
                  <div className="text-lg" >
                    {theme.description}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-8 w-full flex justify-center pt-8">
  <div  className="font-bold text-white text-3xl bg-lime-700 px-6 py-3 rounded-lg hover:bg-lime-800 cursor-pointer transition duration-300"
    onClick={() => window.location.href = "/agenda"} // or your desired action
  >
    FULL AGENDA
  </div>
</div>
      {/* <div className='mt-8 w-full flex'>
        <button
          type="button"
          className="mx-auto inline-flex justify-center max-w-5xl px-6 py-4 text-2xl font-semibold text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700"
          onClick={() => router.push("/agenda")}
        >
          See Full Agenda
        </button>
      </div> */}
    </div>
  );
}

export default KeyThemes