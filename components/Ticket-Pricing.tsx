"use client"
import React from 'react'

import Link from 'next/link'

function TicketPricing() {

    const summit = [
        {
            title: "NGO/Academic Pass",
            old_price: 1195,
            item_price: 795,
            description: "Eligible for representatives from non-profit NGOs, farmers cooperatives, regulators, governments, public sector, and academia.",
            earlyBird: "Book before Monday 8th July 2024 to Save £400.00",
            line_items: [
                {
                    price: 'price_1PGwuzKMWpUKzQVziwJkTR7F',
                    quantity: 1,
                    tax_rates: ['txr_1NBBYeKMWpUKzQVzkTT4Wib4'],
                }
            ]
        },
        {
            title: "Standard Corporate Pass",
            old_price: 1795,
            item_price: 1295,
            description: "Eligible for corporate representatives.",
            earlyBird: "Book before Monday 8th July 2024 to Save £500.00",
            line_items: [
                {
                    price: 'price_1PGwvYKMWpUKzQVzl8ZKucou',
                    quantity: 1,
                    tax_rates: ['txr_1NBBYeKMWpUKzQVzkTT4Wib4'],
                }
            ]
        },
        {
            title: "Service Provider Pass",
            old_price: 2095,
            item_price: 1495,
            description: "Required for for-profit consultancies, start-ups, technology and service providers.",
            earlyBird: "Book before Monday 8th July 2024 to Save £600.00",
            line_items: [
                {
                    price: 'price_1PGwvyKMWpUKzQVzW6v1DAa1',
                    quantity: 1,
                    tax_rates: ['txr_1NBBYeKMWpUKzQVzkTT4Wib4'],
                }
            ]
        },
        
    ]
    const networkingSoiree = {
        title: "Networking Soirée Pass",
        old_price: 225,
        item_price: 185,
        description: "At House of Lords 16th October 2024 Early Evening Wines and Hors d'oeuvres",
        earlyBird: "Exclusive for Summit Attendees! Limited tickets only! First come, first serve!",
        line_items: [
            {
                price: 'price_1PIiS4KMWpUKzQVz4RptL8TA',
                quantity: 1,
                tax_rates: ['txr_1NBBYeKMWpUKzQVzkTT4Wib4'],
            }
        ]
    }

    return (
        <div className="z-40 py-12 bg-white sm:py-20">
            <div id="summit" className="flow-root px-6 mx-auto mt-12 rounded-md max-w-7xl">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="max-w-5xl mx-auto sm:text-center">
                            <h3 className="text-4xl tracking-tight text-red-700 sm:text-md font-bold">Super Early Bird Offer ends on 7th July 2024</h3>
                        </div>
                        <table className="min-w-full divide-y divide-gray-300 mt-12">
                            <tbody className="bg-white">
                                {summit.map((delegate) => (
                                    <tr key={delegate.title} className="odd:bg-gray-100">
                                        <td className="flex-wrap px-3 py-4 font-semibold text-gray-900 text-lg whitespace-nowrap">{delegate.title}</td>
                                        <td className="flex-wrap px-3 py-4 text-gray-900 text-lg">
                                            {delegate.description}
                                            <br />
                                            <h3 className="text-sm tracking-tight text-red-700 sm:text-lg font-bold">{delegate.earlyBird}</h3>
                                        </td>
                                        <td className="px-3 py-4 text-gray-900 font-bold text-lg">
                                            {delegate.old_price && <span className='text-red-700 line-through mr-2'>£{delegate.old_price}.00</span>}
                                            £{delegate.item_price}.00
                                        </td>
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
                                <tr className="odd:bg-gray-100">
                                        <td className="flex-wrap px-3 py-4 font-semibold text-gray-900 text-lg whitespace-nowrap">{networkingSoiree.title}</td>
                                        <td className="flex-wrap px-3 py-4 text-gray-900 text-lg">
                                            At House of Lords 16th October 2024 Early Evening
                                            <br />
                                            Wines and Hors d&apos;oeuvres
                                            <br />
                                            <h3 className="text-sm tracking-tight text-red-700 sm:text-lg font-bold">Exclusive for Summit Attendees!<br />Limited tickets only! First come, first serve!<br />Book before Monday 8th July 2024 to Save £40.00</h3>
                                        </td>
                                        <td className="px-3 py-4 text-gray-900 font-bold text-lg">
                                            {networkingSoiree.old_price && <span className='text-red-700 line-through mr-2'>£{networkingSoiree.old_price}.00</span>}
                                            £{networkingSoiree.item_price}.00
                                        </td>
                                        <td className="px-3 py-4">
                                            <div className='my-auto justify-self-center mx:auto'>
                                                <Link
                                                    href={{
                                                        pathname: '/register/form',
                                                        query: {
                                                            line_items: JSON.stringify(networkingSoiree.line_items)
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
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            {/* <div id="exhibition" className="flow-root px-6 mx-auto mt-20 rounded-md max-w-7xl">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <tbody className="bg-white">
                                {exhibition.map((visitor) => (
                                    <tr key={visitor.title} className="even:bg-gray-100">
                                        <td className="flex-wrap px-3 py-4 font-semibold text-gray-900 text-md">{visitor.title}</td>
                                        <td className="flex-wrap px-3 py-4 text-gray-900 text-md">{visitor.description}<br /></td>
                                        <td className="px-3 py-4 text-gray-900 font-bold text-md">£{visitor.old_price}.00</td>
                                        
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
            </div> */}
            <div className="max-w-5xl mx-auto mt-12 sm:text-center">
                <h3 className="tracking-tight text-red-700 sm:text-lg"><span className='font-bold'>NOTICE</span>: Please make sure you choose the correct pass per specification. We reserve the right to exclude and refund registration that does not belong to the correct category pass</h3>
                <h3 className="tracking-tight text-red-700 sm:text-lg">If you have problems registering, please email us at <Link href={"mailto:mavis@worldcoffeealliance.com"} target="_blank" className="underline hover:underline-offset-4"> mavis@worldcoffeealliance.com</Link></h3>
            </div>
        </div>
    )
}

export default TicketPricing;