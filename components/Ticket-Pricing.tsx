"use client"
import React from 'react'

import Link from 'next/link'
import { BriefcaseBusiness, Landmark, Rocket, Users, Wine, type LucideIcon } from 'lucide-react'
import RegisterCountDown from './RegisterCountDown'

const taxRates = [
    'txr_1NBBYeKMWpUKzQVzkTT4Wib4', // production
    // 'txr_1NCgheKMWpUKzQVzZ761hX9q', // testing
] as const

export type SummitLineItem = {
    price: string
    quantity: number
    tax_rates: readonly string[]
}

export type SummitRow = {
    title: string
    /** Optional second line under title (e.g. venue), regular weight */
    titleSubline?: string
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
                price: 'price_1TU6ZNKMWpUKzQVzFeZzO8Zd', // production
                // price: 'price_1TVyhwKMWpUKzQVzeGCqN8CQ', // prod testing (£5)
                // price: 'price_1TUHqbKMWpUKzQVzAYk5Ctmo', // testing
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
                price: 'price_1Rr81dKMWpUKzQVzBqtbsbxH', // production
                // price: 'price_1RJHLYKMWpUKzQVzFS993eOR', // prod testing (£5)
                // price: 'price_1TUHsIKMWpUKzQVzGM1Fgqg5', // testing
                quantity: 1,
                tax_rates: taxRates,
            },
        ],
    },
    {
        title: 'Start-Up',
        icon: Rocket,
        item_price: 995,
        description:
            'For early-stage innovators and solution providers, typically pre-seed to pre\u2013Series A.',
        earlyBird: 'Subject to qualification',
        limited: 'Limited Availability',
        limitedClassName: 'text-lime-700',
        cta: 'Enquire Now',
        enquireHref: '/register/start-up-enquiry',
        // price reference only (start-up currently uses enquiry flow):
        // price: 'price_1Rb9T2KMWpUKzQVzaQhry4yi', // production
        // price: 'price_1RJHKqKMWpUKzQVzqUg2mW67', // prod testing (£5)
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
                price: 'price_1RVYT2KMWpUKzQVzleFRk7vr', // production
                // price: 'price_1RLn8fKMWpUKzQVzG5ZhHwZM', // prod testing (£5)
                // price: 'price_1TUHtiKMWpUKzQVzQK1vBQ1O', // testing
                quantity: 1,
                tax_rates: taxRates,
            },
        ],
    },
    {
        title: 'Networking Soirée',
        titleSubline: 'at the UK House of Lords',
        icon: Wine,
        old_price: 185,
        item_price: 155,
        description:
            'Early evening of Day 1 \u00B7 A two-hour, invite-only reception bringing together global leaders and senior stakeholders in a unique and historic setting.',
        subDescription: 'Available to registered delegates only. Limited capacity.',
        earlyBird: 'Save £30 book before 19 Jun 2026',
        cta: 'Add Now',
        rowClassName: 'bg-orange-50',
        line_items: [
            {
                price: 'price_1TU6d9KMWpUKzQVzbvEL5xFJ', // production
                // price: 'price_1TVyh9KMWpUKzQVzYXpxkkUr', // prod testing (£5)
                // price: 'price_1TUHu5KMWpUKzQVzaZLAIhUe', // testing
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
                            <h1 className="w-full mt-1 text-4xl text-black xl:text-5xl">
                                Secure your pass to WCIS26
                            </h1>
                            <p className="w-full mt-3 text-sm font-normal text-black sm:text-base lg:max-w-xl">
                                Join global leaders and senior stakeholders from across the coffee and cocoa supply chain.
                            </p>
                        </div>
                        <div className="flex flex-col items-center w-full gap-3 lg:w-1/2">
                            <p className="w-full max-w-xl px-1 text-xl font-bold leading-tight text-center text-lime-700 whitespace-nowrap sm:text-2xl md:text-3xl xl:text-4xl">
                                Prices increase after 18 June 2026
                            </p>
                            <p className="w-full max-w-xl text-sm font-normal text-center text-black sm:text-base">
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
                                                <td colSpan={4} className="px-3 pt-8 pb-6 bg-white">
                                                    <div className="flex items-center justify-center w-full gap-4">
                                                        <div className="h-px bg-gray-300 w-28 sm:w-44" />
                                                        <span className="text-2xl font-bold text-center text-black uppercase">
                                                            Add-on
                                                        </span>
                                                        <div className="h-px bg-gray-300 w-28 sm:w-44" />
                                                    </div>
                                                </td>
                                            </tr>
                                        ) : null}
                                        <tr
                                            className={`h-full ${delegate.rowClassName ?? 'odd:bg-gray-100'}`}
                                        >
                                            <td
                                                className={`px-3 text-gray-900 whitespace-nowrap ${delegate.title === 'Networking Soirée' ? 'py-6' : 'py-4'}`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-lime-100/70">
                                                        <delegate.icon className="w-6 h-6 text-lime-700" />
                                                    </div>
                                                    <div
                                                        className={`text-lg leading-tight ${delegate.titleSubline ? '' : 'font-semibold'}`}
                                                    >
                                                        {delegate.limited && delegate.limitedOnTop ? (
                                                            <div
                                                                className={`font-bold ${delegate.limitedClassName ?? 'text-red-700'}`}
                                                            >
                                                                {delegate.limited}
                                                            </div>
                                                        ) : null}
                                                        {delegate.titleSubline ? (
                                                            <>
                                                                <div className="font-semibold">{delegate.title}</div>
                                                                <div className="mt-0.5 text-base font-normal text-gray-900">
                                                                    {delegate.titleSubline}
                                                                </div>
                                                            </>
                                                        ) : (
                                                            delegate.title
                                                        )}
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
                                                className={`flex-wrap px-3 text-lg text-gray-900 ${delegate.title === 'Networking Soirée' ? 'py-6' : 'py-4'}`}
                                            >
                                                {delegate.description}
                                                {delegate.subDescription ? (
                                                    <div
                                                        className={
                                                            delegate.title === 'Networking Soirée'
                                                                ? 'mt-2 text-base font-bold text-red-700'
                                                                : 'font-semibold text-red-700'
                                                        }
                                                    >
                                                        {delegate.subDescription}
                                                    </div>
                                                ) : null}
                                                {delegate.earlyBird ? (
                                                    <div className="font-bold text-red-700">{delegate.earlyBird}</div>
                                                ) : null}
                                            </td>
                                            <td
                                                className={`flex-wrap px-3 font-bold text-gray-900 ${delegate.title === 'Networking Soirée' ? 'py-6' : 'py-4'}`}
                                            >
                                                {delegate.title === 'Networking Soirée' &&
                                                delegate.old_price != null ? (
                                                    <div className="w-full space-y-1 text-left text-lg">
                                                        <div className="text-red-700 line-through decoration-red-700">
                                                            {gbp(delegate.old_price)}
                                                        </div>
                                                        <div>{gbp(delegate.item_price)}</div>
                                                    </div>
                                                ) : (
                                                    <div className="w-full h-full text-lg">
                                                        {delegate.old_price != null ? (
                                                            <div className="text-red-700 line-through">
                                                                {gbp(delegate.old_price)}
                                                            </div>
                                                        ) : null}
                                                        <div>{gbp(delegate.item_price)}</div>
                                                    </div>
                                                )}
                                            </td>
                                            <td
                                                className={`px-3 ${delegate.title === 'Networking Soirée' ? 'py-6' : 'py-4'}`}
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
                <div className="flex flex-col gap-8 text-base leading-snug text-black lg:flex-row lg:gap-10 lg:text-lg">
                    <div className="w-full lg:w-1/2">
                        <h3 className="text-xl font-bold tracking-tight text-black sm:text-2xl">Please Note</h3>
                        <p className="mt-3 tracking-tight">
                            Please ensure you register under the correct pass category.
                        </p>
                        <p className="mt-3 tracking-tight">For any registration queries, please contact:</p>
                        <Link
                            href={'mailto:info@worldcoffeealliance.com'}
                            target="_blank"
                            className="text-base text-blue-600 underline hover:underline-offset-4 sm:text-lg"
                        >
                            info@worldcoffeealliance.com
                        </Link>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <h3 className="text-xl font-bold tracking-tight text-lime-700 sm:text-2xl">
                            Group Discounts Available
                        </h3>
                        <p className="mt-3 tracking-tight">
                            <span className="font-bold">3+ delegates</span>
                            {' \u2013 '}
                            Save 10%
                        </p>
                        <p className="tracking-tight">
                            <span className="font-bold">4+ delegates</span>
                            {' \u2013 '}
                            Save 12%
                        </p>
                        <p className="tracking-tight">
                            <span className="font-bold">5+ delegates</span>
                            {' \u2013 '}
                            Save 15%
                        </p>
                        <p className="mt-3 tracking-tight">For group registrations, please contact:</p>
                        <Link
                            href={'mailto:info@worldcoffeealliance.com'}
                            target="_blank"
                            className="text-base text-blue-600 underline hover:underline-offset-4 sm:text-lg"
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
