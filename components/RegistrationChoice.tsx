import Link from 'next/link'
import React from 'react'

export default function RegistrationChoice() {
    return (
        <>
            <div className='flex-shrink-0 px-12 py-20 sm:px-20'>
                <div className="mx-auto max-w-7xl">
                    <p className="font-medium tracking-tight text-gray-900 text-md sm:text-xl">Click the event you want to attend to</p>
                </div>
                <div className='flex flex-col mx-auto mt-6 gap-y-4 sm:gap-x-6 sm:flex-row max-w-7xl'>
                    <div className='items-center w-full'>
                        <Link href="/register/tickets" className="h-full  flex rounded-md shadow-md hover:shadow-2xl flex-col  bg-[url('https://worldcoffeealliance.com/wp-content/uploads/2023/06/WC-SUMMIT.jpg')] py-20 bg-cover mlg:flex-col">
                            <div className="self-center px-12 text-center sm:px-20">
                                <div>
                                    <p className="py-6 text-2xl font-bold tracking-tight text-white sm:py-12 sm:text-4xl ">World Coffee Summit London</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='items-center w-full'>
                        <Link href="/register/tickets/#exhibition" className="h-full flex rounded-md shadow-md hover:shadow-2xl hover:cursor-pointer flex-col bg-[url('https://worldcoffeealliance.com/wp-content/uploads/2023/06/WC-EXHIBIT.jpg')] py-20 bg-cover mlg:flex-col">
                            <div className="self-center px-12 text-center sm:px-20">
                                <div>
                                    <p className="py-6 text-2xl font-bold tracking-tight text-white sm:py-12 sm:text-4xl">World Coffee Exhibition London</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}