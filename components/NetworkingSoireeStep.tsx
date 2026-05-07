"use client"

import React, { useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import getStripe from '../get_stripe'
import BackButton from './BackButton'

const networkingLineItem = {
    // price: 'price_1TU6d9KMWpUKzQVzbvEL5xFJ', // production
    price: 'price_1TUHu5KMWpUKzQVzaZLAIhUe', // testing
    quantity: 1,
    tax_rates: [
        // 'txr_1NBBYeKMWpUKzQVzkTT4Wib4', // production
        'txr_1NCgheKMWpUKzQVzZ761hX9q', // testing
    ],
}

type SummitLineItem = {
    price: string
    quantity: number
    tax_rates: readonly string[]
}

type DelegateData = {
    firstName: string
    lastName: string
    companyName: string
    jobTitle: string
    countryCode: string
    mobileNumber: string
    country: string
    email: string
    confirmEmail: string
}

function NetworkingSoireeStep() {
    const searchParams = useSearchParams()
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const parsedData = useMemo(() => {
        const lineItemsRaw = searchParams?.get('line_items') ?? '[]'
        const buyerDataRaw = searchParams?.get('buyer_data') ?? '{}'

        try {
            return {
                lineItems: JSON.parse(lineItemsRaw) as SummitLineItem[],
                buyerData: JSON.parse(buyerDataRaw) as DelegateData,
            }
        } catch {
            return {
                lineItems: [] as SummitLineItem[],
                buyerData: {} as DelegateData,
            }
        }
    }, [searchParams])

    const redirectToCheckout = async (includeNetworking: boolean) => {
        try {
            setErrorMessage('')
            setIsLoading(true)

            const lineItems = [...parsedData.lineItems]
            const hasNetworking = lineItems.some((item) => item.price === networkingLineItem.price)

            if (includeNetworking && !hasNetworking) {
                lineItems.push(networkingLineItem)
            }

            const origin = window.location.origin

            const data = await fetch('/api/checkout-sessions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    line_items: lineItems,
                    formData: parsedData.buyerData,
                    origin,
                }),
            }).then((response) => response.json())

            const stripe = await getStripe()
            await stripe?.redirectToCheckout({ sessionId: data?.response?.retrievedSession?.id })
        } catch (error) {
            console.log(error)
            setErrorMessage('Unable to continue to payment right now. Please try again.')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="z-40 py-12 bg-white sm:py-20">
            <div className="max-w-screen-md px-4 mx-auto mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 whitespace-nowrap">
                    Join the Networking Soiree at the UK House of Lords
                </h2>
                <p className="text-xl text-gray-900">Early evening of Day 1, Wednesday, 21 October 2026</p>
                <p className="mt-6 text-lg text-gray-900">
                    A two-hour, invite-only reception bringing together senior stakeholders in a unique and historic setting.
                </p>
                <p className="mt-2 text-lg text-gray-900">Most attendees join this reception.</p>

                <div className="mt-8">
                    <div className="text-2xl font-bold text-gray-900">
                        <span className="mr-2 text-red-700 line-through">£185</span>
                        <span>£155 per person</span>
                    </div>
                    <div className="text-lg italic text-red-700">Limited capacity</div>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 mt-10 sm:flex-row">
                    <button
                        type="button"
                        onClick={() => redirectToCheckout(true)}
                        disabled={isLoading || parsedData.lineItems.length === 0}
                        className="w-full px-5 py-3 text-sm font-semibold text-white rounded-md shadow-sm sm:w-auto bg-lime-700 hover:bg-lime-900 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        Add Networking Soiree
                    </button>
                    <button
                        type="button"
                        onClick={() => redirectToCheckout(false)}
                        disabled={isLoading || parsedData.lineItems.length === 0}
                        className="w-full px-5 py-3 text-sm font-semibold text-gray-900 bg-gray-100 rounded-md shadow-sm sm:w-auto hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        Continue without
                    </button>
                </div>

                {errorMessage ? <p className="mt-4 text-sm text-red-700">{errorMessage}</p> : null}

                <div className="mt-8 text-left">
                    <BackButton />
                </div>
            </div>
        </div>
    )
}

export default NetworkingSoireeStep
