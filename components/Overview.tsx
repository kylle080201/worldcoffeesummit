"use client"
import Link from 'next/link'
import React from 'react'

export default function Overview() {
    return (
        <>
            <div
                id="overview"
                className="relative bg-[url('https://worldcoffeealliance.com/wp-content/uploads/2025/03/WCIS-2025-ORIGINAL-POSTER.png')] bg-cover bg-center pt-2 sm:py-24 pb-6 sm:pb-12 px-6 md:px-12 before:absolute before:inset-0 before:bg-black before:opacity-50 before:z-0"
            >
                {/* Main Container */}
                <div className="relative flex flex-col items-center text-center text-white mt-48">
                    
                    {/* Event Title */}
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight drop-shadow-lg">
                        THE BIGGER PICTURE
                    </h1>
                    <p className="mt-2 text-lg sm:text-xl md:text-2xl font-semibold max-w-3xl">
                        Crafting a Resilient Eco-System for Shared Prosperity
                    </p>

                    {/* Save The Date */}
                    <div className="mt-8">
                        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold">
                            SAVE THE DATE
                        </h2>
                    </div>

                    {/* Event Date & Location */}
                    <div className="mt-4 p-4 bg-lime-700 rounded-md w-fit text-xl sm:text-2xl md:text-3xl font-bold tracking-wide">
                        22-23 October 2025 <span className="block sm:inline">| London</span>
                    </div>

                    {/* Event Logos - Smaller Size */}
                    <div className="mt-6 flex flex-col sm:flex-row items-center bg-white p-4 sm:p-6 rounded-md shadow-md gap-4">
                        <img className="w-[16rem] sm:w-[18rem]" src="https://worldcoffeealliance.com/wp-content/uploads/2023/06/QEII-CENTRE.png" alt="QEII Centre" />
                        <img className="w-[8rem] sm:w-[10rem]" src="https://worldcoffeealliance.com/wp-content/uploads/2024/05/House_of_Lords_logo_2020.svg.png" alt="House of Lords" />
                    </div>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <Link href="/interest">
                            <button className="bg-lime-700 hover:bg-lime-800 text-white font-bold text-xl sm:text-2xl md:text-3xl py-3 px-6 rounded-md">
                                REGISTER YOUR INTEREST
                            </button>
                        </Link>
                    </div>

                    {/* Footer Links */}
                    <div className="mt-10 flex flex-col md:flex-row justify-between w-full text-sm md:text-lg font-bold text-white px-6">
                        <p>WWW.WORLDCOFFEEINNOVATIONSUMMIT.COM</p>
                        <p>#WCIS24</p>
                    </div>
                </div>
            </div>
        </>
    )
}
