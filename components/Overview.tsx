"use client"
import Link from 'next/link'
import React from 'react'

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
                        <img src="https://worldcoffeealliance.com/wp-content/uploads/2021/08/WCA_new_logo.png" alt="Icon" className="w-32 h-32 sm:w-44 sm:h-44" />
                    </Link>
                </div>

                {/* Main Container */}
                <div className="relative flex flex-col items-center text-center text-white mt-32 md:mt-12 xl:mt-0">
                    {/* Event Title */}
                    <h1 className="text-[3rem] md:text-[4rem] xl:text-[6rem] font-bold tracking-tight drop-shadow-xl">
                        THE BIGGER PICTURE
                    </h1>
                    <p className="mt-2 text-lg sm:text-2xl md:text-4xl font-bold max-w-3xl drop-shadow-xl">
                        CRAFTING A RESILIENT ECO-SYSTEM FOR SHARED PROSPERITY
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-[8rem] md:mt-[8rem] xl:mt-[20rem]">
                        <Link href="/interest">
                            <button className="text-white hover:underline hover:drop-shadow-xl font-bold text-xl md:text-3xl xl:text-6xl py-3 px-6 rounded-md">
                                SAVE THE DATE & REGISTER YOUR INTEREST
                            </button>
                        </Link>
                    </div>

                    {/* Event Logos - Smaller Size */}
                    <div className="mt-6 flex flex-col sm:flex-row items-center bg-yellow-200/40 p-4 sm:p-6 rounded-md shadow-md gap-4">
                        <div className="p-2 bg-lime-700 rounded-md w-fit text-lg md:text-2xl xl:text-3xl font-bold tracking-wide">
                            22-23 October 2025 <span className="block sm:inline">| London</span>
                        </div>
                        <img className="w-[14rem] md:w-[18rem] xl:w-[20rem]" src="https://worldcoffeealliance.com/wp-content/uploads/2023/06/QEII-CENTRE.png" alt="QEII Centre" />
                        <img className="w-[8rem] md:w-[10rem] xl:w-[12rem]" src="https://worldcoffeealliance.com/wp-content/uploads/2024/05/House_of_Lords_logo_2020.svg.png" alt="House of Lords" />
                    </div>

                    {/* Footer Links */}
                    <div className="mt-10 flex flex-col md:flex-row justify-between w-full text-md md:text-2xl font-bold text-white px-6">
                        <p>WWW.WORLDCOFFEEINNOVATIONSUMMIT.COM</p>
                        <p>#WCIS24</p>
                    </div>
                </div>
            </div>
        </>
    )
}