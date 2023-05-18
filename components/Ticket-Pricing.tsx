import React from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'

export default function TicketPricing() {
    const tickets = [
        {
            title: "Consultants, Start-ups, Service Providers",
            price: 1750,
        },
        {
            title: "Standard Corporate Pass - Corporate Representatives",
            price: 1350,
        },
        {
            title: "NGO/Cooperatives, Coffee Associations, Academic Pass",
            price: 954,
        },
    ]

    return (
        <div className="z-40 py-24 bg-white sm:py-32">
            <div className="px-6 mx-auto max-w-7xl lg:px-8">
                <div className="max-w-2xl mx-auto sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Delegate Registration</h2>
                </div>
                {tickets.map((ticket) => (
                    <div key={ticket.title} className="max-w-2xl mx-auto mt-16 rounded-3xl ring-1 ring-lime-700 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                        <div className="p-8 sm:p-10 lg:flex-auto">
                            <h3 className="text-4xl font-bold tracking-tight text-yellow-900">{ticket.title}</h3>
                            <div className="flex items-center mt-10 gap-x-4">
                                <h4 className="flex-none font-semibold leading-6 text-lime-700 text-md">What’s included</h4>
                                <div className="flex-auto h-px bg-gray-200" />
                            </div>
                        </div>
                        <div className="p-2 -mt-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 ">
                            <div className="h-full py-10 text-center bg-gray-100 rounded-2xl ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                                <div className="max-w-xs px-8 mx-auto">
                                    <p className="text-lg font-semibold text-gray-600">VAT Included</p>
                                    <p className="flex items-baseline justify-center mt-6 gap-x-2">
                                        <span className="text-6xl font-bold tracking-tight text-yellow-900">£{ticket.price}</span>
                                        <span className="font-semibold leading-6 tracking-wide text-gray-600 text-md">GBP</span>
                                    </p>
                                    <a
                                        href="#"
                                        className="block w-full px-3 py-2 mt-10 text-lg font-semibold text-center text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Avail ticket
                                    </a>
                                    <p className="mt-6 text-sm leading-5 text-gray-600">
                                        Invoices and receipts available for easy company reimbursement
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}