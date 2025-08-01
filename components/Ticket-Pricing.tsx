"use client"
import React from 'react'

import Link from 'next/link'
import RegisterCountDown from './RegisterCountDown'

// ORIGINAL
export const summit = [
    {
        title: "Academics",
        // old_price: 1095,
        item_price: 299,
        description: "Eligible only for professors and full- time Masters, PhDs and post-graduates(including students)",
        limited: "(Limited Availability)",
        // earlyBird: "Save £300 book before 01 August 2025",
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
        old_price: 1095,
        item_price: 895,
        description: "Eligible for non-profits and NGOs, farmer-cooperatives, Policy Makers & Government Bodies",
        earlyBird: "Save £200 book before 30 August 2025",
        line_items: [
            {
                price: 'price_1Rr80rKMWpUKzQVz5TLvKOvJ',
                quantity: 1,
                tax_rates: ['txr_1NBBYeKMWpUKzQVzkTT4Wib4'],
            }
        ]
    },
    {
        title: "Corporates",
        old_price: 1495,
        item_price: 1095,
        description: "Eligible for multinational/ conglomerate companies, F&B & Agri-Commodity Brands, retailers, traders",
        earlyBird: "Save £400 book before 30 August 2025",
        line_items: [
            {
                price: 'price_1Rr81dKMWpUKzQVzBqtbsbxH',
                quantity: 1,
                tax_rates: ['txr_1NBBYeKMWpUKzQVzkTT4Wib4'],
            }
        ]
    },
    {
        title: "Start Ups",
        old_price: 1295,
        item_price: 995,
        description: "Eligible only for early-stage innovators, Independent Consultants/ Service Providers",
         limited: "(Limited Availability)",
        earlyBird: "Save £300 book before 30 August 2025",

        line_items: [
            {
                price: 'price_1Rb9T2KMWpUKzQVzaQhry4yi',
                quantity: 1,
                tax_rates: ['txr_1NBBYeKMWpUKzQVzkTT4Wib4'],
            }
        ]
    },
    {
        title: "Service Providers",
        old_price: 1995,
        item_price: 1695,
        description: "Eligible for for-profit consultancies, mature start-ups, technology and service providers, including Private Equity Firms and Asset Managers/Brokers, Angel and Venture Capital Investors/ Banks/ Financial Institutions",
        earlyBird: "Save £300 book before 30 August 2025",
        line_items: [
            { 
                price: 'price_1Rr82DKMWpUKzQVz3mGm7mS2',
                quantity: 1,
                tax_rates: ['txr_1NBBYeKMWpUKzQVzkTT4Wib4'],
            }
        ]
    },
]

// PROD TESTING PRICES
// export const summit = [
//     {
//         title: "Academics",
//         old_price: 1095,
//         item_price: 299,
//         description: "Eligible only for professors and full- time Masters, PhDs and post-graduates(including students)",
//         earlyBird: "Book before 8th October 2024 to Save £200.00",
//         line_items: [
//             {
//                 price: 'price_1RLRZdKMWpUKzQVzxEOPwVBA',
//                 quantity: 1,
//                 tax_rates: ['txr_1NBBYeKMWpUKzQVzkTT4Wib4'],

//             }
//         ]
//     },
//     {
//         title: "NGOs, Co-operatives, Policy Makers",
//         old_price: 1795,
//         item_price: 599,
//         description: "Eligible for non-profits and NGOs, farmer-cooperatives, Policy Makers & Government Bodies",
//         earlyBird: "Book before 8th October 2024 to Save £300.00",
//         line_items: [
//             {
//                 price: 'price_1RLn53KMWpUKzQVzP93RGG0I',
//                 quantity: 1,
//                 tax_rates: ['txr_1NBBYeKMWpUKzQVzkTT4Wib4'],
//             }
//         ]
//     },
//     {
//         title: "Corporates",
//         old_price: 1995,
//         item_price: 899,
//         description: "Eligible for multinational/ conglomerate companies, F&B & Agri-Commodity Brands, retailers, traders ",
//         earlyBird: "Book before 8th October 2024 to Save £300.00",
//         line_items: [
//             {
//                 price: 'price_1RLn7BKMWpUKzQVzItm3kmzE',
//                 quantity: 1,
//                 tax_rates: ['txr_1NBBYeKMWpUKzQVzkTT4Wib4'],
//             }
//         ]
//     },
//     {
//         title: "Start Ups",
//         old_price: 1295,
//         item_price: 699,
//         description: "Eligible only for early-stage innovators, Independent Consultants/ Service Providers",
//         earlyBird: "Book before 8th October 2024 to Save £300.00",
//         line_items: [
//             {
//                 price: 'price_1RLn8FKMWpUKzQVz5TAnpeGo',
//                 quantity: 1,
//                 tax_rates: ['txr_1NBBYeKMWpUKzQVzkTT4Wib4'],
//             }
//         ]
//     },
//     {
//         title: "Service Providers",
//         old_price: 1295,
//         item_price: 1099,
//         description: "Eligible for for-profit consultancies, mature start-ups, technology and service providers, including Private Equity Firms and Asset Managers/Brokers, Angel and Venture Capital Investors/ Banks/ Financial Institutions",
//         earlyBird: "Book before 8th October 2024 to Save £300.00",
//         line_items: [
//             {
//                 price: 'price_1RLn8fKMWpUKzQVzG5ZhHwZM',
//                 quantity: 1,
//                 tax_rates: ['txr_1NBBYeKMWpUKzQVzkTT4Wib4'],
//             }
//         ]
//     },
// ]

function TicketPricing() {

    return (
        <div className="z-40 py-12 bg-white sm:py-20">
            <div id="summit" className="flow-root px-6 mx-auto mt-12 rounded-md max-w-7xl">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">

                    <div className='flex w-full gap-4'>
                        <div className='flex flex-col text-black font-bold w-1/2 items-center'>
                            <h1 className='mx-auto text-3xl xl:text-5xl text-lime-700'>GRAB YOUR TICKETS</h1>
                            <h1 className='mx-auto text-3xl xl:text-5xl'>TO WCIS25</h1>
                            {/* <h1 className='mx-auto text-red-500 xl:text-2xl text-lg'>(LIMITED AVAILABILITY)</h1> */}
                        </div>
                        <div className='flex flex-col gap-2 w-1/2'>
                            <div className='p-2 bg-red-500 text-white w-max text-2xl xl:text-4xl font-bold px-24 justify-center items-center text-center rounded-xl whitespace-normal line-clamp-2'>
                                TICKET PRICES INCREASE <br />
                                AFTER 29 AUGUST 2025
                            </div>
                            <RegisterCountDown />
                        </div>
                    </div>
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 ">
                        <table className="min-w-full divide-y divide-gray-300 mt-12">
                            <tbody className="bg-white">
                                {summit.map((delegate) => (
                                    <tr key={delegate.title} className="odd:bg-gray-100 h-full">
                                        <td className="flex-wrap px-3 py-4 font-semibold text-gray-900 text-lg whitespace-nowrap">{delegate.title} <div className='text-red-700 font-bold'>{delegate.limited ?? delegate.limited}</div></td>
                                        <td className="flex-wrap px-3 py-4 text-gray-900 text-lg">
                                            {delegate.description}
                                            <div className='text-red-700 font-bold'>
                                                {delegate.earlyBird ?? delegate.earlyBird}
                                            </div>
                                        </td>
                                        <td className="flex-wrap px-3 py-4 text-gray-900 font-bold">
                                            <div className='h-full text-lg w-full'>
                                                <div className='text-red-700 line-through'>
                                                    {delegate.old_price ? `£${delegate.old_price}.00` : undefined}
                                                </div>
                                                <div>
                                                    £{delegate.item_price}.00
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
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="container mb-12 mx-auto px-8 flex justify-between">

            <div className="w-full md:w-1/2 lg:w-full  mt-12 sm:text-start">
                <h3 className="tracking-tight text-red-700 sm:text-lg"><span className='font-bold'>IMPORTANT NOTICE:</span></h3>
                <h3 className="tracking-tight  sm:text-lg">Please select the correct pass type. Registrations in <br/>the wrong category may be cancelled and refunded.</h3><br/>
                <h3 className="tracking-tight  sm:text-lg">For any issues, email us at <Link href={"mailto:info@worldcoffeealliance.com"} target="_blank" className="text-blue-600 underline hover:underline-offset-4"> info@worldcoffeealliance.com</Link></h3>
            </div>
             <div className="w-full md:w-1/2 lg:w-full  mt-12 sm:text-start">
                <h3 className="tracking-tight text-red-700 sm:text-lg"><span className='font-bold'>GROUP DISCOUNTS AVAILABLE!</span></h3>
                <h3 className="tracking-tight sm:text-lg"><span className='font-bold'>Book a Team of 3+ </span> — Save an Additional 10% Off</h3>
                <h3 className="tracking-tight  sm:text-lg"><span className='font-bold'>Book a Team of 5+ </span> — Save an Additional 15% Off</h3>

                <h3 className="tracking-tight  sm:text-lg">If you would like to register a team of 3 or more, please email  <Link href={"mailto:info@worldcoffeealliance.com"} target="_blank" className=" text-blue-600 underline hover:underline-offset-4"> info@worldcoffeealliance.com</Link> for your discount coupon code before registering.</h3>
            </div> 
           </div>

        </div>
    )
}

export default TicketPricing;