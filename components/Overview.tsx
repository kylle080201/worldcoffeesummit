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

                    <div className="flex flex-col sm:flex-row gap-4 mt-[4rem] md:mt-[5rem] xl:mt-[25rem]">
                        <Link href="/interest">
                            <button className="bg-[#FFC000] text-yellow-900 hover:underline hover:drop-shadow-xl font-bold text-lg md:text-xl xl:text-5xl py-1 md:py-2 xl:py-3 px-6 rounded-md">
                                SAVE THE DATE & REGISTER YOUR INTEREST
                            </button>
                        </Link>
                    </div>

                    {/* Event Logos - Smaller Size */}
                    <div className="mt-6 flex flex-col sm:flex-row items-center bg-[#e1be77ae] p-2 md:p-4w xl:p-6 rounded-md shadow-md gap-4">
                        <div className="p-2 bg-lime-700 rounded-md w-fit text-md md:text-xl xl:text-3xl font-bold tracking-wide">
                            23-24 October 2025 <span className="block sm:inline">| London</span>
                        </div>
                        <img className="w-[12rem] md:w-[16rem] xl:w-[20rem]" src="https://worldcoffeealliance.com/wp-content/uploads/2023/06/QEII-CENTRE.png" alt="QEII Centre" />
                        <img className="w-[8rem] md:w-[10rem] xl:w-[12rem]" src="https://worldcoffeealliance.com/wp-content/uploads/2024/05/House_of_Lords_logo_2020.svg.png" alt="House of Lords" />
                    </div>

                    {/* Footer Links */}
                    <div className="mt-10 flex flex-col md:flex-row justify-between w-full text-xs md:text-2xl font-bold text-white px-6">
                        <p>WWW.WORLDCOFFEEINNOVATIONSUMMIT.COM</p>
                        <p>#WCIS25</p>
                    </div>
                </div>
            </div>
        </>
    )
}