"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import KeyThemesCountDown from './KeyThemesCountDown';
import WhoYoullMeet from './WhoYoullMeet';

const keyThemes = [
  {
    title: "Geopolitical Disruption & Tariffs",
    description: "Understanding how geopolitical volatility reshapes global coffee and cocoa markets and exploring innovative ways to build resilience."
  },
  {
    title: "EUDR Countdown: Compliance & Opportunity",
    description: "Navigating the EU Deforestation Regulation delay—balancing compliance readiness with supply chain transformation."
  },
  {
    title: "EU Omnibus Update (CSRD & CS3D)",
    description: "Adapting to new ESG reporting frameworks with simplified datapoints and expanded materiality guidance."
  },
  {
    title: "Commodity Price Volatility",
    description: "Unpacking market dynamics behind coffee and cocoa price swings, and the role of futures trading in amplifying risk."
  },
  {
    title: "Coffee & Cocoa Climate Convergence",
    description: "Creating shared climate-smart strategies for coffee and cocoa to reduce emissions and boost productivity."
  },
  {
    title: "Supply Chain Automation & AI",
    description: "Leveraging emerging tech—from digital twins to remote sensing—to build smarter, faster, and more transparent supply chains."
  },
  {
    title: "Scaling Regenerative Agriculture",
    description: "Deploying MRV systems to scale up water-efficient, biodiversity-positive, regenerative farming models."
  },
  {
    title: "Decoding Nature: Investing in NBS",
    description: "Mobilizing capital and technology to regenerate ecosystems and unlock value through nature-based solutions."
  },
  {
    title: "Voluntary Carbon Standards",
    description: "Ensuring transparency and integrity in carbon offset markets through certification and standardization."
  },
  {
    title: "Applied Agronomy: Improving Soil Health",
    description: "Using precision diagnostics and data to enhance soil health, crop and farm management to increase agricultural productivity at scale."
  },
  {
    title: "Geospatial & Remote Monitoring",
    description: "Harnessing Earth observation tools to drive real-time compliance, traceability, and carbon tracking."
  },
  {
    title: "Insurance Innovation for Climate Risk",
    description: "Exploring how AI and parametric insurance can protect smallholders and mitigate climate-driven financial risks."
  },
  {
    title: "Digital Trade Infrastructure & Finance",
    description: "Building a paperless, interoperable system that enhances global trade and finance ecosystem for transparency and sustainability."
  },
  {
    title: "Precision Agriculture: Data-Driven Farming for Impact",
    description: "Harnessing the power of real-time data, sensors, and smart analytics to optimize input use, enhance yields, and promote climate-smart coffee and cocoa farming practices."
  }
]

function KeyThemes() {
  const themesColumn1 = keyThemes.slice(0, 7);
  const themesColumn2 = keyThemes.slice(7);
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