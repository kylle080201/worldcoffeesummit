"use client"
import React from 'react'

import Link from 'next/link'

function TicketPricing() {

    const summit = [
        {
            title: "NGO/Academic Pass",
            old_price: 699,
            item_price: 499,
            early_bird: 'Early bird until 15 July 2023. YOU SAVE £200',
            description: "Eligible for representatives of non-profit NGOs, cooperatives, regulators, governments, public sector, and academia.",
            line_items: [
                {
                    price: 'price_1NKjM2KMWpUKzQVzb9sMCivH',
                    quantity: 1,
                    tax_rates: ['txr_1NBBYeKMWpUKzQVzkTT4Wib4'],
                }
            ]
        },
        {
            title: "Standard Corporate Pass",
            old_price: 1275,
            item_price: 975,
            early_bird: 'Early bird until 15 July 2023. YOU SAVE £300',
            description: "Eligible for corporate representatives.",
            line_items: [
                {
                    price: 'price_1NKJxHKMWpUKzQVzMY0ToUIs',
                    quantity: 1,
                    tax_rates: ['txr_1NBBYeKMWpUKzQVzkTT4Wib4'],
                }
            ]
        },
        {
            title: "Service Provider Pass",
            old_price: 1550,
            item_price: 1150,
            description: "Required for for-profit consultancies, start-ups, technology and service providers.",
            early_bird: 'Early bird until 15 July 2023. YOU SAVE £400',
            line_items: [
                {
                    price: 'price_1NKJxCKMWpUKzQVzKKXQgTyo',
                    quantity: 1,
                    tax_rates: ['txr_1NBBYeKMWpUKzQVzkTT4Wib4'],
                }
            ]
        },
    ]
    const exhibition = [
        {
            title: "Standard Visitor Pass",
            old_price: 149,
            item_price: 129,
            description: "Eligible for coffee roasters, green coffee buyers and coffee traders (Imp& Exp)",
            early_bird: 'Early bird until 15 July 2023. YOU SAVE £20',
            line_items: [
                {
                    price: 'price_1NJtGKKMWpUKzQVzGyIldRNk',
                    quantity: 1,
                    tax_rates: ['txr_1NCgheKMWpUKzQVzZ761hX9q'],
                }
            ]
        },
    ]

    return (
        <div className="z-40 py-12 bg-white sm:py-20">
            <div className="max-w-5xl mx-auto sm:text-center">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Unsure what pass you fall Under?</h2>
                <h3 className="text-lg tracking-tight text-red-700 sm:text-2xl">Contact us at <a className='underline' href='mailto:info@worldcoffeealliance.com'>info@worldcoffeealliance.com</a> and we&apos;ll help you pick the correct registration pass.</h3>
                <h3 className="text-lg tracking-tight text-red-700 sm:text-2xl"><span className='font-bold'>PLEASE NOTE</span>: Discounts cannot be combined with Early Bird Pricing or any other discount or offer.</h3>
            </div>

            <div id="summit" className="flow-root px-6 mx-auto mt-12 rounded-md max-w-7xl">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr className='bg-gray-100'>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 w-1/4 text-left sm:text-2xl text-lg font-semibold text-gray-900 sm:pl-3">
                                        Delegate to Summit
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
                                        <td className="flex-wrap px-3 py-4 text-gray-900 text-md">{delegate.description}<br /><span className='font-medium text-red-700'>{delegate.early_bird}</span></td>
                                        <td className="px-3 py-4 text-gray-900 text-md"><span className='text-red-700 line-through '>£{delegate.old_price}.00</span> <br /> <span className='font-bold '>£{delegate.item_price}.00</span></td>
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
                                        <td className="flex-wrap px-3 py-4 text-gray-900 text-md">{visitor.description}<br /><span className='font-medium text-red-700'>{visitor.early_bird}</span></td>
                                        <td className="px-3 py-4 text-gray-900 text-md"><span className='text-red-700 line-through '>£{visitor.old_price}.00</span> <br /> <span className='font-bold '>£{visitor.item_price}.00</span></td>
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