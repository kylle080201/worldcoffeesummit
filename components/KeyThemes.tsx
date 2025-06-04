"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import KeyThemesCountDown from './KeyThemesCountDown';
import WhoYoullMeet from './WhoYoullMeet';

const keyThemes = [
  {
    title: "Geopolitical Disruption & Trade Tariffs",
    description: "How global instability, trade wars, and shifting alliances are reshaping coffee and cocoa markets, and what resilience looks like in an uncertain world."
  },
  {
    title: "Regulatory Compliance as Strategy: EUDR, CSRD & CS3D",
    description: "Beyond box-ticking—how forward-looking companies are turning regulatory compliance into drivers of innovation, brand trust, and long-term competitiveness."
  },
  {
    title: "Earth First: Biodiversity, Soil Health & Climate resilience",
    description: "Using precision diagnostics and data to enhance soil health, crop and farm management to increase agricultural productivity at scale. "
  },
  {
    title: "Cracking Scope 3: From Chaos to Clarity ",
    description: "Unpacking value chain emissions, building internal capability, and aligning with climate targets across sourcing and procurement."
  },
  {
    title: "Coffee & Cocoa Climate Convergence",
    description: "Bridging strategies across both crops to reduce emissions, improve yields, and align with global climate goals through shared innovation."
  },
  {
    title: "Digitalising Supply Chains: The role of Automation & AI",
    description: "Leveraging emerging tech—from digital twins to remote sensing—to build smarter, faster, and more transparent supply chains"
  },
  {
    title: "Scaling Regenerative Agriculture",
    description: "Making regen real: deploying MRV tools and incentive models to scale up biodiversity-positive, water-smart, farmer-led practices."
  },
  {
    title: "Decoding Nature: Investing in Nature-Based Solutions (NBS) ",
    description: "Mobilising capital and technology to regenerate ecosystems and unlock value through nature-based solutions."
  },
  {
    title: "Voluntary Carbon Markets & Standards",
    description: "Ensuring credibility and transparency in carbon offset markets through robust certification, traceability, and standardization frameworks."
  },
  {
    title: "Geospatial Intelligence & Remote Monitoring",
    description: "Harnessing Earth observation tools to drive real-time compliance, traceability, and carbon tracking."
  },
  {
    title: "Precision Agriculture: Data-Driven Farming for Impact",
    description: "Leveraging the power of real-time data, sensors, and smart analytics to optimize input use, enhance yields, and promote climate-smart farming practices."
  },
  {
    title: "Mainstreaming Regenerative Finance",
    description: "Bridging climate ambition with financial returns—how investors are reshaping portfolios to prioritise nature, resilience, and long-term value creation."
  },
]

function KeyThemes() {
  const themesColumn1 = keyThemes.slice(0, 6);
  const themesColumn2 = keyThemes.slice(6);
  const router = useRouter()
  return (
    <div className='w-full px-0 md:px-8 py-12'>
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
                <li key={theme.title} className="text-xl">
                  <strong>{theme.title}</strong>
                  <br/>
                  <div>
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
                <li key={theme.title} className="text-xl">
                  <strong>{theme.title}</strong> 
                  <br/>
                  <div>
                    {theme.description}
                  </div>
                </li>
              ))}
            </ul>
          </div>
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