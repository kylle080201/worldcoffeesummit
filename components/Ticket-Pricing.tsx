"use client"
import React from 'react'

import Link from 'next/link'
import BackButton from './BackButton';

function TicketPricing() {

    const summit = [
        {
            title: "NGO/Academic Pass",
            item_price: 799,
            description: "Eligible for representatives of NGOs, cooperatives, coffee associations,  regulators, governments, public sector, and academia.",
            line_items: [
                {
                    price: 'price_1NJHE6KMWpUKzQVzCuDgzvYo',
                    quantity: 1,
                    tax_rates: ['txr_1NCgheKMWpUKzQVzZ761hX9q'],
                }
            ]
        },
        {
            title: "Standard Corporate Pass",
            description: "Eligible for corporate representatives.",
            item_price: 1249,
            line_items: [
                {
                    price: 'price_1NJHFNKMWpUKzQVzaqQZ4lLL',
                    quantity: 1,
                    tax_rates: ['txr_1NCgheKMWpUKzQVzZ761hX9q'],
                }
            ]
        },
        {
            title: "Service Provider Pass",
            description: "Required for for-profit consultancies, start-ups, technology and service providers.",
            item_price: 1499,
            line_items: [
                {
                    price: 'price_1NJHGiKMWpUKzQVzMf7Jo8V3',
                    quantity: 1,
                    tax_rates: ['txr_1NCgheKMWpUKzQVzZ761hX9q'],
                }
            ]
        },
    ]
    const exhibition = [
        {
            title: "Standard Visitor Pass",
            description: "Eligible for coffee roasters, green coffee buyers and coffee traders (Imp& Exp)",
            item_price: 149,
            line_items: [
                {
                    price: 'price_1NJHHMKMWpUKzQVzKrcFYdIk',
                    quantity: 1,
                    tax_rates: ['txr_1NCgheKMWpUKzQVzZ761hX9q'],
                }
            ]
        },
    ]

    return (
        <div className="z-40 py-24 bg-white sm:py-32">
            <div className="max-w-5xl mx-auto sm:text-center">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Unsure what pass you fall Under?</h2>
                <h3 className="text-lg tracking-tight text-red-700 sm:text-2xl">Contact us at <a className='underline' href='mailto:info@worldcoffeealliance.com'>info@worldcoffeealliance.com</a> and we&apos;ll help you pick the correct registration pass.</h3>
            </div>

            <div id="summit" className="flow-root px-6 mx-auto mt-12 rounded-md max-w-7xl">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr className='bg-gray-100'>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 w-1/4 text-left sm:text-2xl text-lg font-semibold text-gray-900 sm:pl-3">
                                        Delegate to the summit
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 w-2/4 text-left text-lg font-semibold text-gray-900">

                                    </th>
                                    <th scope="col" className="py-3.5 pl-4 w-1/12 pr-3 text-left sm:text-2xl text-lg font-semibold text-gray-900 sm:pl-3">
                                        Price
                                    </th>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left sm:text-2xl text-lg font-semibold text-gray-900 sm:pl-3">

                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {summit.map((delegate) => (
                                    <tr key={delegate.title} className="even:bg-gray-100">
                                        <td className="flex-wrap px-3 py-4 font-semibold text-gray-900 text-md">{delegate.title}</td>
                                        <td className="flex-wrap px-3 py-4 text-gray-900 text-md">{delegate.description}</td>
                                        <td className="px-3 py-4 text-gray-900 text-md">£{delegate.item_price}.00</td>
                                        <td className="px-3 py-4">
                                            <div className='my-auto justify-self-center mx:auto'>
                                                <Link
                                                    href={{
                                                        pathname: '/register/form',
                                                        query: {
                                                            line_items: JSON.stringify(delegate.line_items)
                                                        }
                                                    }}
                                                    type="button"
                                                    className="block w-full px-3 py-2 text-sm font-semibold text-center text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                >
                                                    Register
                                                </Link>

                                            </div>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div id="exhibition" className="flow-root px-6 mx-auto mt-20 rounded-md max-w-7xl">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr className='bg-gray-100'>
                                    <th scope="col" className="py-3.5 w-1/4 pl-4 pr-3 text-left sm:text-2xl text-lg font-semibold text-gray-900 sm:pl-3">
                                        Visitor to Exhibition
                                    </th>
                                    <th scope="col" className="px-3 w-2/4 py-3.5 text-left text-lg font-semibold text-gray-900">

                                    </th>
                                    <th scope="col" className="py-3.5 pl-4 w-1/12 pr-3 text-left sm:text-2xl text-lg font-semibold text-gray-900 sm:pl-3">
                                        Price
                                    </th>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left sm:text-2xl text-lg font-semibold text-gray-900 sm:pl-3">

                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {exhibition.map((visitor) => (
                                    <tr key={visitor.title} className="even:bg-gray-100">
                                        <td className="flex-wrap px-3 py-4 font-semibold text-gray-900 text-md">{visitor.title}</td>
                                        <td className="flex-wrap px-3 py-4 text-gray-900 text-md">{visitor.description}</td>
                                        <td className="px-3 py-4 text-gray-900 text-md">£{visitor.item_price}.00</td>
                                        <td className="px-3 py-4">
                                            <div className='my-auto justify-self-center mx:auto'>
                                                <Link
                                                    href={{
                                                        pathname: '/register/form',
                                                        query: {
                                                            line_items: JSON.stringify(visitor.line_items)
                                                        }
                                                    }}
                                                    type="button"
                                                    className="block w-full px-3 py-2 text-sm font-semibold text-center text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                >
                                                    Register
                                                </Link>

                                            </div>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="max-w-5xl mx-auto mt-12 sm:text-center">
                <h3 className="text-sm tracking-tight text-red-700 sm:text-md">Notice: GSG Ltd reserves the right to exclude and refund registration that does not belong to the correct category pass</h3>
            </div>
        </div>
    )
}

export default TicketPricing;