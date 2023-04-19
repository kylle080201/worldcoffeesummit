/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'

export default function Partnership() {
    return (
        <>
            <div className="flex items-center justify-center flex-row bg-[url('https://worldcoffeealliance.com/wp-content/uploads/2023/01/PARTNERSHIP-2.jpg')] mlg:flex-col bg-cover  h-96 w-full ">
                <div>
                    <h1 className='font-bold text-white shadow-md text-8xl'>PARTNER WITH US</h1>
                </div>
            </div>
            <div className="py-32 lg:px-80 bg-lime-700">
                <div>
                    <h3 className='text-5xl font-semibold text-white'>OUR PARTNERSHIP AND MARKETING OPPORTUNITIES ARE DESIGNED TO MAXIMIZE YOUR BRAND&apos;S PRESENCE AT WCA WORLD COFFEE SUMMIT LONDON 2023.</h3>
                </div>
                <div className='flex items-center justify-center mt-12'>
                    <h5 className='text-3xl font-thin text-white'>Interested in partnering with us? Let us know!</h5>
                </div>
                <div className='flex justify-center mt-16' >
                    <a target={'_blank'} rel="noopener noreferrer" href='/contact'>
                        <button
                            type="button"
                            className="px-24 py-6 mx-auto text-base font-semibold text-gray-900 bg-white border border-transparent rounded-full shadow-sm hover:bg-yellow-900 hover:text-white focus:outline-none "
                        >
                            <span className='text-xl'>Contact us</span>
                        </button>
                    </a>
                </div>
            </div>
        </>
    )
}