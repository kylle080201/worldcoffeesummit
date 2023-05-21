import React from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'

export default function TicketPricing() {
    const delegates = [
        {
            title: "NGO/Cooperatives, Coffee Associations, Academic Pass",
            price: 954,
        },
        {
            title: "Standard Corporate Pass - Corporate Representatives",
            price: 1350,
        },
        {
            title: "Consultants, Start-ups, Service Providers",
            price: 1750,
        },
    ]

    const visitors = [
        {
            title: "Coffee Roasters, Traders and Coffee Buyers only",
            price: 250,
        },
    ]

    return (
        <div className="z-40 py-24 bg-white sm:py-32">
            <div className="px-6 mx-auto max-w-7xl lg:px-8">
                <div className="max-w-2xl mx-auto sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">As delegate to the Summit</h2>
                </div>
                {delegates.map((delegate) => (
                    <div key={delegate.title} className="max-w-2xl mx-auto mt-8 rounded-3xl ring-1 ring-lime-700 sm:mt-12 lg:mx-0 lg:flex lg:max-w-none">
                        <div className="p-8 sm:p-10 lg:flex-auto">
                            <h3 className="text-2xl font-bold tracking-tight text-yellow-900 md:text-4xl">{delegate.title}</h3>
                        </div>
                        <div className="p-2 -mt-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 ">
                            <div className="h-full py-5 text-center bg-gray-100 rounded-2xl ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-8">
                                <div className="max-w-xs px-8 mx-auto">
                                    <p className="font-semibold text-gray-600 text-md">20% VAT Included</p>
                                    <p className="flex items-baseline justify-center mt-6 gap-x-2">
                                        <span className="text-4xl font-bold tracking-tight text-yellow-900">£{delegate.price}</span>
                                        <span className="font-semibold leading-6 tracking-wide text-gray-600 text-md">GBP</span>
                                    </p>
                                    <a
                                        href="#"
                                        className="block w-full px-3 py-2 mt-10 text-lg font-semibold text-center text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Register
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="px-6 mx-auto mt-20 max-w-7xl lg:px-8">
                <div className="max-w-2xl mx-auto sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">As Visitor to the Exhibition</h2>
                </div>
                {visitors.map((visitor) => (
                    <div key={visitor.title} className="max-w-2xl mx-auto mt-8 rounded-3xl ring-1 ring-lime-700 sm:mt-12 lg:mx-0 lg:flex lg:max-w-none">
                        <div className="p-8 sm:p-10 lg:flex-auto">
                            <h3 className="text-2xl font-bold tracking-tight text-yellow-900 md:text-4xl">{visitor.title}</h3>
                        </div>
                        <div className="p-2 -mt-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 ">
                            <div className="h-full py-5 text-center bg-gray-100 rounded-2xl ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-8">
                                <div className="max-w-xs px-8 mx-auto">
                                    <p className="font-semibold text-gray-600 text-md">VAT Included</p>
                                    <p className="flex items-baseline justify-center mt-6 gap-x-2">
                                        <span className="text-4xl font-bold tracking-tight text-yellow-900">£{visitor.price}</span>
                                        <span className="font-semibold leading-6 tracking-wide text-gray-600 text-md">GBP</span>
                                    </p>
                                    <a
                                        href="#"
                                        className="block w-full px-3 py-2 mt-10 text-lg font-semibold text-center text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Register
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}