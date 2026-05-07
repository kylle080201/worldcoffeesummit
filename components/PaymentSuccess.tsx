"use client"
import React, { useEffect, useState } from 'react'
import 'crypto-js/enc-utf8';
import { IResponseData } from '../types/responseData';
import Image from 'next/image';

function PaymentSuccess({ checkoutSessionId, decryptedFormData, line_items }: any) {
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
                    forceResend
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
    }, [origin, checkoutSessionId, decryptedFormData, line_items, RESEND_COOLDOWN_MS, resendCooldownKey]);

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
        (item: { price?: string }) => item?.price === 'price_1TUHu5KMWpUKzQVzaZLAIhUe'
    )
    const isNetworkingSoireeOnly =
        hasNetworkingSoiree &&
        parsedLineItems.length === 1 &&
        parsedLineItems[0]?.price === 'price_1TUHu5KMWpUKzQVzaZLAIhUe'

    const eventUrl = 'https://www.worldcoffeeinnovationsummit.com'
    const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(eventUrl)}`
    const networkingSoireeRegistrationUrl =
        '/register/form?line_items=%5B%7B"price"%3A"price_1TUHu5KMWpUKzQVzaZLAIhUe"%2C"quantity"%3A1%2C"tax_rates"%3A%5B"txr_1NCgheKMWpUKzQVzZ761hX9q"%5D%7D%5D'
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
                        <div className="mt-6 justify-left md:mt-12">
                            <Image
                                src="https://worldcoffeealliance.com/wp-content/uploads/2024/04/world-coffee-innovation-summit-high-resolution-logo-transparent-1.png"
                                alt="World Coffee Innovation Summit logo"
                                width={640}
                                height={180}
                                className="object-contain w-full max-w-md mb-6"
                            />
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-12">
                                REGISTRATION CONFIRMED
                            </h2>
                            <p className="mt-6 text-[32px] leading-tight tracking-tight text-gray-900">
                                {isNetworkingSoireeOnly ? (
                                    <>
                                        Thank you for registering for the <span className="font-bold">4<sup>th</sup> Networking Soir&eacute;e at the UK House of Lords.</span>
                                    </>
                                ) : (
                                    <>
                                        Thank you for registering for the <span className="font-bold">4<sup>th</sup> World Coffee Innovation Summit London 2026</span>.
                                    </>
                                )}
                            </p>
                            {hasNetworkingSoiree && !isNetworkingSoireeOnly ? (
                                <p className="mt-6 text-[32px] leading-tight tracking-tight text-gray-900">
                                    You&apos;re also confirmed for the <span className="font-bold">Networking Soiree at the UK House of Lords.</span>
                                </p>
                            ) : null}
                            <p className="mt-6 text-[32px] leading-tight tracking-tight text-gray-900">
                                A confirmation email has been sent with further details.
                            </p>
                            {isNetworkingSoireeOnly ? (
                                <div className="mt-8">
                                    <p className="text-[32px] font-bold leading-tight tracking-tight text-gray-900">Please note</p>
                                    <p className="text-[30px] leading-tight tracking-tight text-gray-900">
                                        The Networking Soiree is exclusively for registered summit delegates.
                                    </p>
                                    <p className="mt-8 text-[32px] leading-tight tracking-tight text-gray-900">
                                        If you haven&apos;t yet registered for the <span className="font-bold">World Coffee Innovation Summit London 2026</span>, you can do so below.
                                    </p>
                                    <a
                                        href="/register"
                                        className="inline-block px-8 py-2 mt-6 text-[30px] font-bold text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-800"
                                    >
                                        Register Now
                                    </a>
                                </div>
                            ) : null}

                            <h3 className="mt-8 text-[34px] font-bold tracking-tight text-gray-900">
                                Event Details
                            </h3>
                            <h3 className="mt-6 text-[34px] font-bold tracking-tight text-gray-900">
                                Date
                            </h3>
                            <p className="text-[34px] leading-tight tracking-tight text-gray-900">
                                21–22 October 2026
                            </p>
                            <h3 className="mt-6 text-[34px] font-bold tracking-tight text-gray-900">
                                Location
                            </h3>
                            <p className="text-[34px] leading-tight tracking-tight text-gray-900">
                                Queen Elizabeth II Centre &amp; UK House of Lords
                            </p>
                            {!hasNetworkingSoiree ? (
                                <div className="mt-8">
                                    <h3 className="text-[34px] font-bold tracking-tight text-gray-900">
                                        Join the Networking Soir&eacute;e at the UK House of Lords
                                    </h3>
                                    <p className="mt-2 text-[32px] leading-tight tracking-tight text-gray-900">
                                        A two-hour, invite-only reception with senior stakeholders
                                    </p>
                                    <p className="mt-4 text-[30px] italic text-red-600">Limited capacity</p>
                                    <a
                                        href={networkingSoireeRegistrationUrl}
                                        className="inline-block px-6 py-2 mt-6 text-[32px] font-bold text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-800"
                                    >
                                        Add Networking Soir&eacute;e
                                    </a>
                                </div>
                            ) : null}
                            <p className="mt-8 text-[32px] leading-tight tracking-tight text-gray-900">
                                Didn&apos;t receive an email? Please check your spam/junk mail.
                            </p>
                            <div className='flex flex-col gap-5 mt-8 sm:flex-row sm:items-center'>
                                <p className="text-[32px] leading-tight tracking-tight text-gray-900">
                                    Still haven&apos;t received it?
                                </p>
                                <div className="flex justify-center gap-x-6">
                                    <button
                                        type="button"
                                        onClick={() => patchData({ forceResend: true })}
                                        disabled={resendButtonDisabled}
                                        className="rounded-[10px] border-2 border-sky-700 px-6 py-1.5 text-[22px] font-bold text-gray-900 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60"
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
                                <p className="mt-3 text-lg text-green-700">{resendSuccessMessage}</p>
                            ) : null}
                            {resendErrorMessage ? (
                                <p className="mt-3 text-lg text-red-700">{resendErrorMessage}</p>
                            ) : null}

                            <p className="mt-8 text-[32px] leading-tight tracking-tight text-gray-900">
                                Invite your colleagues and professional network to join you
                            </p>
                            <div className="flex flex-col items-center mt-6 gap-y-4">
                                <a
                                    href={linkedInShareUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-[10px] border-2 border-sky-700 bg-lime-700 px-8 py-2 text-[28px] font-bold text-white hover:bg-lime-800"
                                >
                                    Share on LinkedIn
                                </a>
                                <button
                                    type="button"
                                    onClick={copyInviteText}
                                    className="text-[24px] tracking-tight text-amber-800 hover:underline text-center"
                                >
                                    {copied ? 'Invite Text Copied' : 'Copy Invite Text'}
                                </button>
                            </div>

                        </div>
                        : isLoading ? (
                            <div className="flex-shrink-0 max-w-3xl px-6 py-20 mx-auto sm:px-6 sm:py-32 lg:px-8 md:max-w-7xl">
                                <div className="text-lg text-gray-900 sm:text-2xl">Loading your confirmation...</div>
                                <p className="mt-2 text-sm text-gray-600 sm:text-base">Please wait while we verify your registration details.</p>
                            </div>
                        ) : (
                            <div className="flex-shrink-0 max-w-3xl px-6 py-20 mx-auto sm:px-6 sm:py-32 lg:px-8 md:max-w-7xl">
                                <p className="text-lg text-red-700 sm:text-2xl">{errorMessage || 'Unable to load confirmation details.'}</p>
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
