"use client"
import React from 'react'

import Link from 'next/link'
import RegisterCountDown from './RegisterCountDown'

function TicketPricing() {

    const summit = [
        {
            title: "Academics",
            old_price: 1095,
            item_price: 299,
            description: "Eligible only for professors and full- time Masters, PhDs and post-graduates(including students)",
            earlyBird: "Book before 8th October 2024 to Save £200.00",
            line_items: [
                {
                    price: 'price_1RJ3cYKMWpUKzQVzk2sR6LGo',
                    quantity: 1,
                    tax_rates: ['txr_1NBBYeKMWpUKzQVzkTT4Wib4'],
                }
            ]
        },
        {
            title: "NGOs, Co-operatives, Policy Makers",
            old_price: 1795,
            item_price: 599,
            description: "Eligible for non-profits and NGOs, farmer-cooperatives, Policy Makers & Government Bodies",
            earlyBird: "Book before 8th October 2024 to Save £300.00",
            line_items: [
                {
                    price: 'price_1RJ3crKMWpUKzQVzn1ia1jtp',
                    quantity: 1,
                    tax_rates: ['txr_1NBBYeKMWpUKzQVzkTT4Wib4'],
                }
            ]
        },
        {
            title: "Corporates",
            old_price: 1995,
            item_price: 899,
            description: "Eligible for multinational/ conglomerate companies, F&B & Agri-Commodity Brands, retailers, traders ",
            earlyBird: "Book before 8th October 2024 to Save £300.00",
            line_items: [
                {
                    price: 'price_1RJ3d6KMWpUKzQVzmvuy3Xfc',
                    quantity: 1,
                    tax_rates: ['txr_1NBBYeKMWpUKzQVzkTT4Wib4'],
                }
            ]
        },
        {
            title: "Start Ups",
            old_price: 1295,
            item_price: 699,
            description: "Eligible only for early-stage innovators, Independent Consultants/ Service Providers",
            earlyBird: "Book before 8th October 2024 to Save £300.00",
            line_items: [
                {
                    price: 'price_1RJ3dMKMWpUKzQVz4b6c2UKj',
                    quantity: 1,
                    tax_rates: ['txr_1NBBYeKMWpUKzQVzkTT4Wib4'],
                }
            ]
        },
        {
            title: "Service Providers",
            old_price: 1295,
            item_price: 1099,
            description: "Eligible for for-profit consultancies, mature start-ups, technology and service providers, including Private Equity Firms and Asset Managers/Brokers, Angel and Venture Capital Investors/ Banks/ Financial Institutions",
            earlyBird: "Book before 8th October 2024 to Save £300.00",
            line_items: [
                {
                    price: 'price_1RJ3e6KMWpUKzQVzMFo1JodF',
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
                price: 'price_1PGx2vKMWpUKzQVz1rtJmCf0',
                quantity: 1,
                tax_rates: ['txr_1NBBYeKMWpUKzQVzkTT4Wib4'],
            }
        ]
    }

    return (
        <div className="z-40 py-12 bg-white sm:py-20">
            <div id="summit" className="flow-root px-6 mx-auto mt-12 rounded-md max-w-7xl">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    
                    <div className='flex px-12 w-full'>
                        <div className='flex flex-col text-black font-bold w-1/2 justify-center items-center'>
                            <h1 className='mx-auto text-2xl xl:text-4xl'>PRE-LAUNCH PRICING</h1>
                            <h1 className='mx-auto text-red-500 xl:text-2xl text-lg'>(LIMITED AVAILABILITY)</h1>
                        </div>
                        <div className='flex flex-col gap-2 w-1/2'>
                            <div className='p-2 bg-red-500 text-white w-max text-2xl xl:text-4xl font-bold px-24 justify-center items-center text-center rounded-xl whitespace-normal line-clamp-2'>
                                TICKET PRICES INCREASE <br/>
                                AFTER 31 MAY 2025
                            </div>
                            <RegisterCountDown />
                        </div>
                    </div>
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 ">
                        <table className="min-w-full divide-y divide-gray-300 mt-12">
                            <tbody className="bg-white">
                                {summit.map((delegate) => (
                                    <tr key={delegate.title} className="odd:bg-gray-100 h-full">
                                        <td className="flex-wrap px-3 py-4 font-semibold text-gray-900 text-lg whitespace-nowrap">{delegate.title}</td>
                                        <td className="flex-wrap px-3 py-4 text-gray-900 text-lg">
                                            {delegate.description}
                                            <br />
                                            {/* <h3 className="text-sm tracking-tight text-red-700 sm:text-lg font-bold">{delegate.earlyBird}</h3> */}
                                        </td>
                                        <td className="flex-wrap px-3 py-4 text-gray-900 font-bold ">
                                            <div className='h-full text-lg w-full'>
                                                {/* <div className='shrink-0'>
                                                    {delegate.old_price && <span className='text-red-700 mr-2 line-through'>£{delegate.old_price}.00</span> }
                                                </div>
                                                <div>
                                                    £{delegate.item_price}.00
                                                </div> */}
                                                <div>
                                                    £{delegate.item_price}.00 + 20% VAT
                                                </div>
                                            </div>
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
                                {/* <tr className="odd:bg-gray-100">
                                    <td className="flex-wrap px-3 py-4 font-semibold text-gray-900 text-lg whitespace-nowrap">Start-up Pass</td>
                                    <td className="flex-wrap px-3 py-4 text-gray-900 text-lg">
                                        Only eligible for early-stage innovators who have not secured their first Series A funding round
                                        <h3 className="text-sm tracking-tight text-red-700 sm:text-lg font-bold">Book before 4th October 2024 to Save £300.00 </h3>
                                        Please contact <Link href={"mailto:mavis@worldcoffeealliance.com"} target="_blank" className="text-yellow-900 underline hover:underline-offset-4">mavis@worldcoffeealliance.com</Link>
                                    </td>
                                    <td className="flex-wrap px-3 py-4 text-gray-900 font-bold ">
                                        <div className='h-full text-lg flex flex-col w-full'>
                                            <div className='flex shrink-0'>
                                                <span className='text-red-700 mr-2 line-through'>£1295.00</span> 
                                            </div>
                                            <div>
                                                £995.00
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-3 py-4">
                                        <div className='my-auto justify-self-center mx:auto'>
                                            <Link 
                                                href={"mailto:mavis@worldcoffeealliance.com"} 
                                                target="_blank" 
                                                className="block w-full px-3 py-2 text-sm font-semibold text-center text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                            > 
                                                Get in touch
                                            </Link>
                                        </div>
                                    </td>
                                </tr> */}
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
                <h3 className="tracking-tight text-red-700 sm:text-lg">If you have problems registering, please email us at <Link href={"mailto:info@worldcoffeealliance.com"} target="_blank" className="underline hover:underline-offset-4"> info@worldcoffeealliance.com</Link></h3>
            </div>
        </div>
    )
}

export default TicketPricing;