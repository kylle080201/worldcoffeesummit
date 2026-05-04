"use client"
import React from 'react'

import Link from 'next/link'
import RegisterCountDown from './RegisterCountDown'

const taxRates = ['txr_1NBBYeKMWpUKzQVzkTT4Wib4'] as const

export type SummitLineItem = {
    price: string
    quantity: number
    tax_rates: readonly string[]
}

export type SummitRow = {
    title: string
    description: string
    item_price: number
    old_price?: number
    earlyBird?: string
    limited?: string
    footnote?: string
    cta?: string
    /** If set, CTA opens mailto instead of the registration form */
    enquireHref?: string
    line_items?: SummitLineItem[]
    rowClassName?: string
}

/** Display amounts must match active Stripe prices — update price IDs in Stripe when tariffs change. */
export const summit: SummitRow[] = [
    {
        title: 'NGO / Government / Academic',
        old_price: 1195,
        item_price: 895,
        description:
            'For non-profit organisations, government bodies, policymakers, producer organisations, and full-time academics.',
        earlyBird: 'Save £300 book before 19 Jun 2026',
        line_items: [
            {
                price: 'price_1SHoZnKMWpUKzQVzPtUcB2Ey',
                quantity: 1,
                tax_rates: taxRates,
            },
        ],
    },
    {
        title: 'Corporate',
        old_price: 1495,
        item_price: 1095,
        description:
            'For corporate organisations, including F&B and Agri-commodity brands, retailers, traders, agribusinesses and other related commercial organisations.',
        earlyBird: 'Save £500 book before 19 Jun 2026',
        line_items: [
            {
                price: 'price_1SJvX1KMWpUKzQVz604VjCdu',
                quantity: 1,
                tax_rates: taxRates,
            },
        ],
    },
    {
        title: 'Start-Up',
        item_price: 995,
        description: 'For early-stage innovators, solution providers, and independent consultants.',
        earlyBird: 'Save £500 book before 19 Jun 2026',
        footnote: 'Eligibility criteria apply',
        cta: 'Enquire Now',
        enquireHref:
            'mailto:info@worldcoffeealliance.com?subject=WCIS26%20Start-Up%20pass%20enquiry',
    },
    {
        title: 'Service Provider',
        old_price: 1895,
        item_price: 1495,
        description:
            'For for-profit consultancies, technology and service providers, mature start-ups, financial institutions, and investors.',
        earlyBird: 'Save £500 book before 19 Jun 2026',
        line_items: [
            {
                price: 'price_1SJvXRKMWpUKzQVzO2EzA3eJ',
                quantity: 1,
                tax_rates: taxRates,
            },
        ],
    },
    {
        title: 'Networking Soirée (Add-on)',
        old_price: 185,
        item_price: 155,
        description:
            'A two-hour, invite-only networking reception at the UK House of Lords, bringing together senior stakeholders. Available to registered delegates only. Limited capacity.',
        earlyBird: 'Save £30 book before 19 Jun 2026',
        rowClassName: 'bg-orange-50',
        line_items: [
            {
                price: 'price_1PGx2vKMWpUKzQVz1rtJmCf0',
                quantity: 1,
                tax_rates: taxRates,
            },
        ],
    },
]

const gbp = (n: number) =>
    new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(n)

function TicketPricing() {
    return (
        <div className="z-40 py-12 bg-white sm:py-20">
            <div id="summit" className="flow-root px-6 mx-auto mt-12 rounded-md max-w-7xl">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="flex flex-col w-full gap-6 lg:flex-row lg:gap-4 lg:items-start lg:justify-between">
                        <div className="flex flex-col w-full font-bold lg:w-1/2 text-center items-center justify-center">
                            <h1 className="w-full mt-1 text-3xl text-lime-700 xl:text-5xl">
                                GRAB YOUR TICKET
                            </h1>
                            <h1 className="w-full mt-1 text-3xl text-black xl:text-5xl">
                                TO WCIS26
                            </h1>
                        </div>
                        <div className="flex flex-col items-center gap-3 lg:w-1/2 lg:items-end">
                            <div className="max-w-xl p-3 text-center text-white bg-red-600 rounded-xl sm:p-4 lg:px-6">
                                <p className="text-lg font-bold leading-snug sm:text-2xl sm:leading-tight lg:text-3xl">
                                    TICKET PRICES INCREASE AFTER 18 JUN 2026
                                </p>
                            </div>
                            <RegisterCountDown />
                        </div>
                    </div>
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 ">
                        <table className="min-w-full mt-12 divide-y divide-gray-300">
                            <tbody className="bg-white">
                                {summit.map((delegate) => (
                                    <tr
                                        key={delegate.title}
                                        className={`h-full ${delegate.rowClassName ?? 'odd:bg-gray-100'}`}
                                    >
                                        <td className="flex-wrap px-3 py-4 text-lg font-semibold text-gray-900 whitespace-nowrap">
                                            {delegate.title}
                                            {delegate.limited ? (
                                                <div className="font-bold text-red-700">{delegate.limited}</div>
                                            ) : null}
                                        </td>
                                        <td className="flex-wrap px-3 py-4 text-lg text-gray-900">
                                            {delegate.description}
                                            {delegate.earlyBird ? (
                                                <div className="font-bold text-red-700">{delegate.earlyBird}</div>
                                            ) : null}
                                        </td>
                                        <td className="flex-wrap px-3 py-4 font-bold text-gray-900">
                                            <div className="w-full h-full text-lg">
                                                {delegate.old_price != null ? (
                                                    <div className="text-red-700 line-through">
                                                        {gbp(delegate.old_price)}
                                                    </div>
                                                ) : null}
                                                <div>{gbp(delegate.item_price)}</div>
                                            </div>
                                        </td>
                                        <td className="px-3 py-4">
                                            <div className="justify-self-center mx:auto my-auto">
                                                {delegate.enquireHref ? (
                                                    <a
                                                        href={delegate.enquireHref}
                                                        className="block w-full px-3 py-2 text-sm font-semibold text-center text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                    >
                                                        {delegate.cta ?? 'Enquire Now'}
                                                    </a>
                                                ) : delegate.line_items ? (
                                                    <Link
                                                        href={{
                                                            pathname: '/register/form',
                                                            query: {
                                                                line_items: JSON.stringify(delegate.line_items),
                                                            },
                                                        }}
                                                        className="block w-full px-3 py-2 text-sm font-semibold text-center text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                    >
                                                        {delegate.cta ?? 'Register Now'}
                                                    </Link>
                                                ) : null}
                                                {delegate.footnote ? (
                                                    <p className="mt-2 text-xs text-gray-600">{delegate.footnote}</p>
                                                ) : null}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="container flex justify-between px-8 mx-auto mb-12">
                <div className="w-full mt-12 md:w-1/2 lg:w-full sm:text-start">
                    <h3 className="tracking-tight text-red-700 sm:text-lg">
                        <span className="font-bold">IMPORTANT NOTICE:</span>
                    </h3>
                    <h3 className="w-11/12 tracking-tight sm:text-lg">
                        Please select the correct pass type. Registrations in the wrong category may be cancelled and
                        refunded.{' '}
                        <span className="text-lg italic">
                            A deduction for non-refundable processing fees will apply.
                        </span>
                        <br />
                    </h3>

                    <h3 className="tracking-tight sm:text-lg">
                        For any issues, email us at{' '}
                        <Link
                            href={'mailto:info@worldcoffeealliance.com'}
                            target="_blank"
                            className="text-blue-600 underline hover:underline-offset-4"
                        >
                            info@worldcoffeealliance.com
                        </Link>
                    </h3>
                </div>
                <div className="w-full mt-12 md:w-1/2 lg:w-full sm:text-start">
                    <h3 className="tracking-tight text-red-700 sm:text-lg">
                        <span className="font-bold">GROUP DISCOUNTS AVAILABLE!</span>
                    </h3>
                    <h3 className="tracking-tight sm:text-lg">
                        <span className="font-bold">Book a Team of 3+ </span> — Save an Additional 10% Off
                    </h3>
                    <h3 className="tracking-tight sm:text-lg">
                        <span className="font-bold">Book a Team of 5+ </span> — Save an Additional 15% Off
                    </h3>

                    <h3 className="tracking-tight sm:text-lg">
                        If you would like to register a team of 3 or more, please email{' '}
                        <Link
                            href={'mailto:info@worldcoffeealliance.com'}
                            target="_blank"
                            className="text-blue-600 underline hover:underline-offset-4"
                        >
                            info@worldcoffeealliance.com
                        </Link>{' '}
                        for your discount coupon code before registering.
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default TicketPricing
