"use client"
import React, { useEffect, useState } from 'react'
import 'crypto-js/enc-utf8';
import { IResponseData } from '../types/responseData';
import Image from 'next/image';
import getStripe from '../get_stripe'

const networkingLineItem = {
    // price: 'price_1TU6d9KMWpUKzQVzbvEL5xFJ', // production
    price: 'price_1TVyh9KMWpUKzQVzYXpxkkUr', // prod testing (£5)
    // price: 'price_1TUHu5KMWpUKzQVzaZLAIhUe', // testing
    quantity: 1,
    tax_rates: [
        'txr_1NBBYeKMWpUKzQVzkTT4Wib4', // production (active — prod testing uses live Stripe)
        // 'txr_1NCgheKMWpUKzQVzZ761hX9q', // testing
    ] as const,
}

function PaymentSuccess({
    checkoutSessionId,
    decryptedFormData,
    line_items,
    registrationFlow,
}: {
    checkoutSessionId?: string
    decryptedFormData: Record<string, unknown>
    line_items: string | unknown[]
    registrationFlow?: string
}) {
    const RESEND_COOLDOWN_MS = 3 * 60 * 1000
    const resendCooldownKey = `payment-success-resend-cooldown-${checkoutSessionId ?? 'unknown'}`
    const [res, setRes] = useState<IResponseData>(Object)
    const [origin, setOrigin] = useState('')
    const [copied, setCopied] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [isResending, setIsResending] = useState(false)
    const [resendErrorMessage, setResendErrorMessage] = useState('')
    const [resendSuccessMessage, setResendSuccessMessage] = useState('')
    const [cooldownEndTime, setCooldownEndTime] = useState(0)
    const [now, setNow] = useState(Date.now())
    const [errorMessage, setErrorMessage] = useState('')
    const [isAddOnCheckoutLoading, setIsAddOnCheckoutLoading] = useState(false)
    const [addOnCheckoutError, setAddOnCheckoutError] = useState('')
    const getReadableError = (error: unknown, fallback: string) => {
        if (typeof error === 'string' && error.trim()) return error
        if (error && typeof error === 'object' && 'message' in error && typeof (error as { message?: unknown }).message === 'string') {
            return (error as { message: string }).message
        }
        return fallback
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            setOrigin(window.location.origin)
        }
    }, [])

    const patchData = React.useCallback(async ({ forceResend = false }: { forceResend?: boolean } = {}) => {
        try {
            if (forceResend) {
                setIsResending(true)
                setResendErrorMessage('')
                setResendSuccessMessage('')
            } else {
                setIsLoading(true)
                setErrorMessage('')
            }
            const response = await fetch(`${origin}/api/payment-success`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    checkoutSessionId,
                    decryptedFormData,
                    line_items,
                    forceResend,
                    ...(typeof registrationFlow === 'string' && registrationFlow
                        ? { registration_flow: registrationFlow }
                        : {}),
                })
            });

            const data = await response.json();
            if (!response.ok || !data?.res?.ticketName) {
                if (forceResend) {
                    setResendErrorMessage(getReadableError(data?.error, 'Unable to resend email right now. Please try again.'))
                } else {
                    setErrorMessage(getReadableError(data?.error, 'Unable to load confirmation details right now. Please try again.'))
                }
                return
            }
            setRes(data)
            if (forceResend) {
                const nextCooldown = Date.now() + RESEND_COOLDOWN_MS
                setCooldownEndTime(nextCooldown)
                localStorage.setItem(resendCooldownKey, String(nextCooldown))
                setResendSuccessMessage('Confirmation email resent successfully.')
            }
        } catch (error: any) {
            if (forceResend) {
                setResendErrorMessage('Unable to resend email right now. Please try again.')
            } else {
                setErrorMessage('Unable to load confirmation details right now. Please try again.')
            }
        } finally {
            if (forceResend) {
                setIsResending(false)
            } else {
                setIsLoading(false)
            }
        }
    }, [origin, checkoutSessionId, decryptedFormData, line_items, registrationFlow, RESEND_COOLDOWN_MS, resendCooldownKey]);

    useEffect(() => {
        if (origin) {
            patchData();
        }
    }, [origin, patchData]);

    useEffect(() => {
        if (typeof window === 'undefined') return
        const storedCooldownEndTime = Number(localStorage.getItem(resendCooldownKey) ?? 0)
        if (storedCooldownEndTime > Date.now()) {
            setCooldownEndTime(storedCooldownEndTime)
        }
    }, [resendCooldownKey])

    useEffect(() => {
        const timer = setInterval(() => {
            setNow(Date.now())
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    const cooldownRemainingMs = Math.max(cooldownEndTime - now, 0)
    const isCooldownActive = cooldownRemainingMs > 0
    const resendButtonDisabled = isLoading || isResending || isCooldownActive || !res?.res?.ticketName
    const cooldownMinutes = Math.floor(cooldownRemainingMs / 60000)
    const cooldownSeconds = Math.floor((cooldownRemainingMs % 60000) / 1000)
    const countdownLabel = `${cooldownMinutes}:${String(cooldownSeconds).padStart(2, '0')}`
    const parsedLineItems = React.useMemo(() => {
        if (Array.isArray(line_items)) return line_items
        try {
            return JSON.parse(line_items ?? '[]')
        } catch {
            return []
        }
    }, [line_items])
    const hasNetworkingSoiree = parsedLineItems.some(
        (item: { price?: string }) => item?.price === 'price_1TVyh9KMWpUKzQVzYXpxkkUr'
    )
    const isNetworkingSoireeOnly =
        hasNetworkingSoiree &&
        parsedLineItems.length === 1 &&
        parsedLineItems[0]?.price === 'price_1TVyh9KMWpUKzQVzYXpxkkUr'
    const isNetworkingAddonConfirmation =
        registrationFlow === 'networking_addon' && isNetworkingSoireeOnly && hasNetworkingSoiree

    const eventUrl = 'https://www.worldcoffeeinnovationsummit.com'
    const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(eventUrl)}`

    const startNetworkingAddOnCheckout = async () => {
        try {
            setAddOnCheckoutError('')
            setIsAddOnCheckoutLoading(true)
            if (!decryptedFormData?.email) {
                setAddOnCheckoutError('Unable to continue: missing registration details. Please contact support.')
                return
            }
            const origin = typeof window !== 'undefined' ? window.location.origin : ''
            const res = await fetch('/api/checkout-sessions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    line_items: [networkingLineItem],
                    formData: decryptedFormData,
                    origin,
                    registration_flow: 'networking_addon',
                }),
            })
            const data = await res.json()
            const sessionId = data?.response?.retrievedSession?.id
            if (!res.ok || !sessionId) {
                setAddOnCheckoutError(
                    typeof data?.message === 'string' ? data.message : 'Unable to start checkout. Please try again.'
                )
                return
            }
            const stripe = await getStripe()
            await stripe?.redirectToCheckout({ sessionId })
        } catch {
            setAddOnCheckoutError('Unable to start checkout. Please try again.')
        } finally {
            setIsAddOnCheckoutLoading(false)
        }
    }
    const shareCopyText = `Looking forward to attending the 4th World Coffee Innovation Summit London,
21-22 October 2026.

It would be great to connect with leaders and peers across the coffee and cocoa supply chains.

Join me: ${eventUrl}`

    const copyInviteText = async () => {
        try {
            await navigator.clipboard.writeText(shareCopyText)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="bg-white">
                <div className="flex-shrink-0 max-w-3xl px-6 py-20 mx-auto sm:px-6 sm:py-32 lg:px-8 md:max-w-7xl">
                    {res?.res?.ticketName ?
                        <div className="justify-left">
                            <Image
                                src="https://worldcoffeealliance.com/wp-content/uploads/2024/04/world-coffee-innovation-summit-high-resolution-logo-transparent-1.png"
                                alt="World Coffee Innovation Summit logo"
                                width={640}
                                height={180}
                                className="object-contain w-full max-w-md mb-6"
                            />
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-12 lg:mt-24">
                                REGISTRATION CONFIRMED
                            </h2>
                            <p className="mt-6 text-2xl leading-snug tracking-tight text-gray-900">
                                {isNetworkingAddonConfirmation ? (
                                    <>
                                        Thank you for registering for the{' '}
                                        <span className="font-bold">Networking Soirée at the UK House of Lords.</span>
                                    </>
                                ) : isNetworkingSoireeOnly ? (
                                    <>
                                        Thank you for registering for the{' '}
                                        <span className="font-bold">Networking Soirée at the UK House of Lords.</span>
                                    </>
                                ) : (
                                    <>
                                        Thank you for registering for the <span className="font-bold">4<sup>th</sup> World Coffee Innovation Summit London 2026</span>.
                                    </>
                                )}
                            </p>
                            {hasNetworkingSoiree && !isNetworkingSoireeOnly ? (
                                <p className="mt-6 text-2xl leading-snug tracking-tight text-gray-900">
                                    You&apos;re also confirmed for the <span className="font-bold">Networking Soiree at the UK House of Lords.</span>
                                </p>
                            ) : null}
                            <p className="mt-6 text-2xl leading-snug tracking-tight text-gray-900">
                                A confirmation email has been sent with further details.
                            </p>
                            {isNetworkingSoireeOnly && !isNetworkingAddonConfirmation ? (
                                <div className="mt-8">
                                    <p className="text-2xl font-bold leading-snug tracking-tight text-gray-900">Please note</p>
                                    <p className="mt-4 text-2xl leading-snug tracking-tight text-gray-900">
                                        The Networking Soirée pass is available to attendees with confirmed summit access.
                                    </p>
                                    <p className="mt-6 text-2xl leading-snug tracking-tight text-gray-900">
                                        If you haven&apos;t yet registered for the <span className="font-bold">World Coffee Innovation Summit London 2026</span>, you can do so below.
                                    </p>
                                    <a
                                        href="/register"
                                        className="inline-block px-8 py-2 mt-6 text-2xl font-bold text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-800"
                                    >
                                        Register Now
                                    </a>
                                </div>
                            ) : null}

                            <h3 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
                                Event Details
                            </h3>
                            <h3 className="mt-6 text-2xl font-bold tracking-tight text-gray-900">
                                Date
                            </h3>
                            <p className="text-2xl leading-snug tracking-tight text-gray-900">
                                21–22 October 2026
                            </p>
                            <h3 className="mt-6 text-2xl font-bold tracking-tight text-gray-900">
                                Location
                            </h3>
                            <p className="text-2xl leading-snug tracking-tight text-gray-900">
                                Queen Elizabeth II Centre &amp; UK House of Lords
                            </p>
                            {!hasNetworkingSoiree ? (
                                <div className="mt-8">
                                    <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                                        Join the Networking Soir&eacute;e at the UK House of Lords
                                    </h3>
                                    <p className="mt-2 text-2xl leading-snug tracking-tight text-gray-900">
                                        A two-hour, invite-only reception with global leaders and senior stakeholders
                                    </p>
                                    <p className="mt-4 text-2xl italic text-red-600">Limited capacity</p>
                                    <button
                                        type="button"
                                        onClick={startNetworkingAddOnCheckout}
                                        disabled={isAddOnCheckoutLoading}
                                        className="inline-block px-6 py-2 mt-6 text-2xl font-bold text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-800 disabled:cursor-not-allowed disabled:opacity-60"
                                    >
                                        {isAddOnCheckoutLoading ? 'Redirecting…' : 'Add Networking Soirée'}
                                    </button>
                                    {addOnCheckoutError ? (
                                        <p className="mt-3 text-2xl leading-snug text-red-700">{addOnCheckoutError}</p>
                                    ) : null}
                                </div>
                            ) : null}
                            <p className="mt-8 text-2xl leading-snug tracking-tight text-gray-900">
                                Didn&apos;t receive an email? Please check your spam/junk mail.
                            </p>
                            <div className='flex flex-col gap-5 mt-8 sm:flex-row sm:items-center'>
                                <p className="text-2xl leading-snug tracking-tight text-gray-900">
                                    Still haven&apos;t received it?
                                </p>
                                <div className="flex justify-center gap-x-6">
                                    <button
                                        type="button"
                                        onClick={() => patchData({ forceResend: true })}
                                        disabled={resendButtonDisabled}
                                        className="rounded-[10px] border-2 border-sky-700 px-6 py-1.5 text-xl font-bold text-gray-900 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60"
                                    >
                                        {isResending
                                            ? 'Resending...'
                                            : isCooldownActive
                                                ? `Resend in ${countdownLabel}`
                                                : 'Resend Email'}
                                    </button>
                                </div>
                            </div>
                            {resendSuccessMessage ? (
                                <p className="mt-3 text-base text-green-700">{resendSuccessMessage}</p>
                            ) : null}
                            {resendErrorMessage ? (
                                <p className="mt-3 text-base text-red-700">{resendErrorMessage}</p>
                            ) : null}

                            <p className="mt-8 text-2xl leading-snug tracking-tight text-gray-900">
                                Invite your colleagues and professional network to join you
                            </p>
                            <div className="flex flex-col items-center mt-6 gap-y-4">
                                <a
                                    href={linkedInShareUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-[10px] border-2 border-sky-700 bg-lime-700 px-8 py-2 text-2xl font-bold text-white hover:bg-lime-800"
                                >
                                    Share on LinkedIn
                                </a>
                                <button
                                    type="button"
                                    onClick={copyInviteText}
                                    className="text-xl tracking-tight text-amber-800 hover:underline text-center"
                                >
                                    {copied ? 'Invite Text Copied' : 'Copy Invite Text'}
                                </button>
                            </div>

                        </div>
                        : isLoading ? (
                            <div className="flex-shrink-0 max-w-3xl px-6 py-20 mx-auto sm:px-6 sm:py-32 lg:px-8 md:max-w-7xl">
                                <div className="text-2xl leading-snug text-gray-900">Loading your confirmation...</div>
                                <p className="mt-2 text-base text-gray-600">Please wait while we verify your registration details.</p>
                            </div>
                        ) : (
                            <div className="flex-shrink-0 max-w-3xl px-6 py-20 mx-auto sm:px-6 sm:py-32 lg:px-8 md:max-w-7xl">
                                <p className="text-2xl leading-snug text-red-700">{errorMessage || 'Unable to load confirmation details.'}</p>
                                <button
                                    type="button"
                                    onClick={() => patchData()}
                                    className="px-5 py-3 mt-4 text-sm font-semibold text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-900"
                                >
                                    Retry
                                </button>
                            </div>
                        )
                    }

                </div>
            </div>


        </>
    )
}

export default PaymentSuccess
