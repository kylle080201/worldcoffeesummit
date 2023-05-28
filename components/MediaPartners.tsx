import Image from 'next/image'
import React from 'react'

const MediaPartners = () => {
    return (
        <>
            <div className="flex flex-col py-16 bg-gray-100 bg-cover mlg:flex-col lg:px-72 md:px-0">
                <h2 className="mb-6 font-bold text-center text-gray-900 sm:text-2xl lg:text-5xl">
                    OUR <span className='text-lime-700'>MEDIA</span> PARTNERS
                </h2>
                <div className="w-5/6 py-4 mx-auto">
                    <div className="h-full p-8 bg-local bg-white bg-opacity-75 bg-cover border-none rounded-lg shadow-md mmd:text-center">
                        <div className='mx-auto my-6 w-72 justify-self-center'>
                            <Image src='https://worldcoffeealliance.com/wp-content/uploads/2021/02/PDG-Wide-400-Blue.png' alt=''></Image>
                        </div>
                        <h4 className="text-center text-gray-900 sm:text-sm lg:text-xl">
                            &ldquo;<span className='font-bold'>Perfect Daily Grind</span> is the world&apos;s leading voice for coffee. The publication is a must-read resource for anyone with an interest in the broader
                            coffee sector, publishing content on everything from brewing and roasting to production and coffee trade. It provides real-life editorial
                            content driven by insight from those who have direct experience at every stage of the supply chain.&rdquo;

                        </h4>
                    </div>
                </div>
                <div className="w-5/6 py-4 mx-auto">
                    <div className="h-full p-8 bg-local bg-white bg-opacity-75 bg-cover border-none rounded-lg shadow-md mmd:text-center">
                        <div className='mx-auto my-6 w-60 justify-self-center'>
                            <Image src='https://worldcoffeealliance.com/wp-content/uploads/2021/02/ROAST-LOGO-MEDIA-PARTNER.jpg' alt=''></Image>
                        </div>
                        <h4 className="text-center text-gray-900 sm:text-sm lg:text-xl">
                            &ldquo;<span className='font-bold'>Roast</span> is a bi-monthly technical trade magazine dedicated to the success and growth of the specialty coffee industry.
                            Roast addresses the art, science and business of coffee by covering the issues most important to the industry, with
                            high-quality editorial focused on the technical aspects of coffee.&rdquo;
                        </h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MediaPartners