"use client"
import React, { useEffect, useState } from 'react'
import 'crypto-js/enc-utf8';
import { IResponseData } from '../types/responseData';

function PaymentSuccess({ checkoutSessionId, decryptedFormData, line_items }: any) {
    const [res, setRes] = useState<IResponseData>(Object)
    const [origin, setOrigin] = useState('')
    const [copied, setCopied] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        if (typeof window !== "undefined") {
            setOrigin(window.location.origin)
        }
    }, [])

    const patchData = async () => {
        try {
            setIsLoading(true)
            setErrorMessage('')
            const response = await fetch(`${origin}/api/payment-success`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    checkoutSessionId,
                    decryptedFormData,
                    line_items
                })
            });

            const data = await response.json();
            if (!response.ok || !data?.res?.ticketName) {
                setErrorMessage(data?.error || 'Unable to load confirmation details right now. Please try again.')
                return
            }
            setRes(data)
        } catch (error: any) {
            setErrorMessage('Unable to load confirmation details right now. Please try again.')
        } finally {
            setIsLoading(false)
        }
    };

    useEffect(() => {
        if (origin) {
            patchData();
        }
    }, [origin]);

    const shareCopyText = "Join me at the 4th World Coffee Innovation Summit London 2026, 21-22 October 2026, at Queen Elizabeth II Centre & UK House of Lords."

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
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                REGISTERED CONFIRMED
                            </h2>
                            <p className="mt-6 text-[32px] leading-tight tracking-tight text-gray-900">
                                Thank you for registering for the <span className="font-bold">4<sup>th</sup> World Coffee Innovation Summit London 2026</span>.
                            </p>
                            <p className="mt-6 text-[32px] leading-tight tracking-tight text-gray-900">
                                You&apos;re also confirmed for the <span className="font-bold">Networking Soiree at the UK House of Lords.</span>
                            </p>
                            <p className="mt-6 text-[32px] leading-tight tracking-tight text-gray-900">
                                A confirmation email has been sent with further details.
                            </p>

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
                            <p className="mt-8 text-[32px] leading-tight tracking-tight text-gray-900">
                                Didn&apos;t receive an email? Please check your spam/junk mail.
                            </p>
                            <div className='flex flex-col gap-5 mt-8 sm:flex-row sm:items-center'>
                                <p className="text-[32px] leading-tight tracking-tight text-gray-900">
                                    Still haven&apos;t received it?
                                </p>
                                <div className="flex justify-center gap-x-6">
                                    <button
                                        onClick={(() => patchData())}
                                        className="rounded-[10px] border-2 border-sky-700 px-8 py-2 text-[28px] font-bold text-gray-900 hover:bg-gray-100"
                                    >
                                        Resend Email
                                    </button>
                                </div>
                            </div>

                            <p className="mt-8 text-[32px] leading-tight tracking-tight text-gray-900">
                                Invite your colleagues and professional network to join you
                            </p>
                            <div className="flex flex-col items-center mt-6 gap-y-4">
                                <a
                                    href="https://www.linkedin.com/company/worldcoffeealliance/"
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
                                    onClick={patchData}
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
