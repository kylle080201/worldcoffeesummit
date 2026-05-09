"use client"
import React from 'react'

import Link from 'next/link'
import { BriefcaseBusiness, Landmark, Rocket, Users, Wine, type LucideIcon } from 'lucide-react'
import RegisterCountDown from './RegisterCountDown'

const taxRates = [
    // 'txr_1NBBYeKMWpUKzQVzkTT4Wib4', // production
    'txr_1NCgheKMWpUKzQVzZ761hX9q', // testing
] as const

export type SummitLineItem = {
    price: string
    quantity: number
    tax_rates: readonly string[]
}

export type SummitRow = {
    title: string
    description: string
    icon: LucideIcon
    item_price: number
    old_price?: number
    earlyBird?: string
    limited?: string
    limitedOnTop?: boolean
    limitedClassName?: string
    subDescription?: string
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
        icon: Landmark,
        old_price: 1195,
        item_price: 895,
        description:
            'For non-profit organisations, government bodies, policymakers, producer organisations, and full-time academics.',
        earlyBird: 'Save £300 book before 19 Jun 2026',
        line_items: [
            {
                // price: 'price_1TU6ZNKMWpUKzQVzFeZzO8Zd', // production
                price: 'price_1TUHqbKMWpUKzQVzAYk5Ctmo', // testing
                quantity: 1,
                tax_rates: taxRates,
            },
        ],
    },
    {
        title: 'Corporate',
        icon: BriefcaseBusiness,
        old_price: 1495,
        item_price: 1095,
        description:
            'For corporate organisations, including F&B and Agri-commodity brands, retailers, traders, agribusinesses and other related commercial organisations.',
        earlyBird: 'Save £400 book before 19 Jun 2026',
        line_items: [
            {
                // price: 'price_1Rr81dKMWpUKzQVzBqtbsbxH', // production
                price: 'price_1TUHsIKMWpUKzQVzGM1Fgqg5', // testing
                quantity: 1,
                tax_rates: taxRates,
            },
        ],
    },
    {
        title: 'Start-Up',
        icon: Rocket,
        item_price: 995,
        description: 'For early-stage innovators, solution providers, and independent consultants.',
        earlyBird: 'Eligibility criteria apply',
        limited: 'Limited Availability',
        limitedClassName: 'text-lime-700',
        cta: 'Enquire Now',
        enquireHref: '/register/start-up-enquiry',
        // price reference only (start-up currently uses enquiry flow):
        // price: 'price_1Rb9T2KMWpUKzQVzaQhry4yi', // production
        // price: 'price_1TUHspKMWpUKzQVzeiuq5ATZ', // testing
    },
    {
        title: 'Service Provider',
        icon: Users,
        old_price: 1895,
        item_price: 1495,
        description:
            'For for-profit consultancies, technology and service providers, mature start-ups, financial institutions, and investors.',
        earlyBird: 'Save £400 book before 19 Jun 2026',
        line_items: [
            {
                // price: 'price_1RVYT2KMWpUKzQVzleFRk7vr', // production
                price: 'price_1TUHtiKMWpUKzQVzQK1vBQ1O', // testing
                quantity: 1,
                tax_rates: taxRates,
            },
        ],
    },
    {
        title: 'Networking Soirée',
        icon: Wine,
        old_price: 185,
        item_price: 155,
        description:
            'Early evening of Day 1, Wednesday, 21 October 2026. A two-hour, invite-only reception bringing together global leaders and senior stakeholders in a unique and historic setting. Most attendees join this reception.',
        subDescription: 'Available to registered delegate only. Limited Capacity',
        earlyBird: 'Save £30 book before 19 Jun 2026',
        rowClassName: 'bg-orange-50',
        line_items: [
            {
                // price: 'price_1TU6d9KMWpUKzQVzbvEL5xFJ', // production
                price: 'price_1TUHu5KMWpUKzQVzaZLAIhUe', // testing
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
                        <div className="flex flex-col w-full font-bold lg:w-1/2 text-center items-center justify-center lg:text-left lg:items-start">
                            <h1 className="w-full mt-1 text-3xl text-black xl:text-4xl">
                                Register for World Coffee Innovation Summit London 2026
                            </h1>
                            <p className="w-full mt-3 text-base font-normal text-black xl:text-2xl">
                                Join in senior stakeholders across global coffee and cocoa supply chain on 21-22 October 2026
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 lg:w-1/2 items-center">
                            <p className="w-full max-w-xl text-lg font-bold leading-snug text-left text-lime-700 sm:text-2xl sm:leading-tight lg:text-4xl">
                                Prices increase after 18 June 2026
                            </p>
                            <p className="w-full max-w-xl text-sm text-left text-black ml-12">
                                Current rates end in:
                            </p>
                            <RegisterCountDown />
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-full gap-4 mt-10">
                        <div className="h-px bg-gray-300 w-28 sm:w-44" />
                        <h2 className="text-2xl font-bold text-center text-black">CHOOSE YOUR PASS</h2>
                        <div className="h-px bg-gray-300 w-28 sm:w-44" />
                    </div>
                    <div
                        id="choose-your-pass"
                        className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 "
                    >
                        <table className="min-w-full mt-12 divide-y divide-gray-300">
                            <tbody className="bg-white">
                                {summit.map((delegate) => (
                                    <React.Fragment key={delegate.title}>
                                        {delegate.title === 'Networking Soirée' ? (
                                            <tr>
                                                <td colSpan={4} className="px-3 pt-8 pb-1 bg-white">
                                                    <div className="flex items-center justify-center w-full gap-4">
                                                        <div className="h-px bg-gray-300 w-20 sm:w-28" />
                                                        <span className="text-2xl font-bold tracking-wide text-black sm:text-3xl">
                                                            Add-on
                                                        </span>
                                                        <div className="h-px bg-gray-300 w-20 sm:w-28" />
                                                    </div>
                                                </td>
                                            </tr>
                                        ) : null}
                                        <tr
                                            className={`h-full ${delegate.rowClassName ?? 'odd:bg-gray-100'}`}
                                        >
                                            <td
                                                className={`px-3 text-gray-900 whitespace-nowrap ${delegate.title === 'Service Provider' || delegate.title === 'Networking Soirée' ? 'py-6' : 'py-4'}`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-lime-100/70">
                                                        <delegate.icon className="w-6 h-6 text-lime-700" />
                                                    </div>
                                                    <div className="text-lg font-semibold leading-tight">
                                                        {delegate.limited && delegate.limitedOnTop ? (
                                                            <div
                                                                className={`font-bold ${delegate.limitedClassName ?? 'text-red-700'}`}
                                                            >
                                                                {delegate.limited}
                                                            </div>
                                                        ) : null}
                                                        {delegate.title}
                                                        {delegate.limited && !delegate.limitedOnTop ? (
                                                            <div
                                                                className={`font-bold ${delegate.limitedClassName ?? 'text-red-700'}`}
                                                            >
                                                                {delegate.limited}
                                                            </div>
                                                        ) : null}
                                                    </div>
                                                </div>
                                            </td>
                                            <td
                                                className={`flex-wrap px-3 text-lg text-gray-900 ${delegate.title === 'Service Provider' || delegate.title === 'Networking Soirée' ? 'py-6' : 'py-4'}`}
                                            >
                                                {delegate.description}
                                                {delegate.subDescription ? (
                                                    <div className="font-semibold text-red-700">
                                                        {delegate.subDescription}
                                                    </div>
                                                ) : null}
                                                {delegate.earlyBird ? (
                                                    <div className="font-bold text-red-700">{delegate.earlyBird}</div>
                                                ) : null}
                                            </td>
                                            <td
                                                className={`flex-wrap px-3 font-bold text-gray-900 ${delegate.title === 'Service Provider' || delegate.title === 'Networking Soirée' ? 'py-6' : 'py-4'}`}
                                            >
                                                <div className="w-full h-full text-lg">
                                                    {delegate.old_price != null ? (
                                                        <div className="text-red-700 line-through">
                                                            {gbp(delegate.old_price)}
                                                        </div>
                                                    ) : null}
                                                    <div>{gbp(delegate.item_price)}</div>
                                                </div>
                                            </td>
                                            <td
                                                className={`px-3 ${delegate.title === 'Service Provider' || delegate.title === 'Networking Soirée' ? 'py-6' : 'py-4'}`}
                                            >
                                                <div className="justify-self-center mx:auto my-auto">
                                                    {delegate.enquireHref ? (
                                                        <a
                                                            href={delegate.enquireHref}
                                                            className="block w-full px-3 py-2 text-sm font-semibold text-center border rounded-md shadow-sm text-lime-700 border-lime-700 bg-transparent hover:bg-lime-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700"
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
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="flow-root px-6 mx-auto mt-12 mb-12 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="w-full lg:w-1/2">
                        <h3 className="text-3xl font-bold tracking-tight text-black">Please Note</h3>
                        <p className="mt-6 text-2xl tracking-tight text-black">
                            Please ensure you register under the most appropriate pass category.
                        </p>
                        <p className="mt-8 text-2xl tracking-tight text-black">For any registration queries, please contact:</p>
                        <Link
                            href={'mailto:info@worldcoffeealliance.com'}
                            target="_blank"
                            className="text-2xl text-blue-600 underline hover:underline-offset-4"
                        >
                            info@worldcoffeealliance.com
                        </Link>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <h3 className="text-3xl font-bold tracking-tight text-lime-700">Group Discounts Available</h3>
                        <p className="mt-6 text-2xl tracking-tight text-black">
                            <span className="font-bold">3+ delegates</span> - Save 10%
                        </p>
                        <p className="text-2xl tracking-tight text-black">
                            <span className="font-bold">5+ delegates</span> - Save 15%
                        </p>
                        <p className="mt-8 text-2xl tracking-tight text-black">For group registrations, please contact:</p>
                        <Link
                            href={'mailto:info@worldcoffeealliance.com'}
                            target="_blank"
                            className="text-2xl text-blue-600 underline hover:underline-offset-4"
                        >
                            info@worldcoffeealliance.com
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TicketPricing
