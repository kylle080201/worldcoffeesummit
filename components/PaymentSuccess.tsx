"use client"
import React, { useEffect, useState } from 'react'
import 'crypto-js/enc-utf8';
import Link from 'next/link';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { IResponseData } from '../types/responseData';



function PaymentSuccess({ checkoutSessionId, decryptedFormData, priceId }: any) {
    const [res, setRes] = useState<IResponseData>(Object)
    const [origin, setOrigin] = useState('')

    useEffect(() => {
        if (typeof window !== "undefined") {
            setOrigin(window.location.origin)
        }
    }, [])

    const patchData = async () => {
        try {
            const response = await fetch(`${origin}/api/payment-success`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    checkoutSessionId,
                    decryptedFormData,
                    priceId
                })
            });

            const data = await response.json();
            setRes(data)
        } catch (error: any) {
            return error
        }
    };

    useEffect(() => {
        if (origin) {
            patchData();
        }
    }, [origin]);

    return (
        <>
            <div className="bg-white">
                <div className="flex-shrink-0 max-w-3xl px-6 py-20 mx-auto sm:px-6 sm:py-32 lg:px-8 md:max-w-7xl">
                    <div className='max-w-5xl mx-auto'>
                        <img src="https://worldcoffeealliance.com/wp-content/uploads/2023/06/confirmation-cover.jpg" />
                    </div>
                    <div className="justify-center max-w-2xl mx-auto mt-6 text-center md:mt-12">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Thank you for registering for World Coffee Summit London 2023
                        </h2>
                        <h3 className="mt-6 text-lg font-bold tracking-tight text-lime-700 sm:text-2xl">
                            Check the email you used in the Registration Form for further instructions.
                        </h3>
                        {Object.keys(res).length !== 0 ? <Link target={'_blank'} href={`/print-out?session_id=${checkoutSessionId}`} className="max-w-xl mx-auto mt-12 text-lg leading-8 text-gray-900 underline">
                            Download your e-Badge here
                        </Link> : <p className="max-w-xl mx-auto mt-12 text-lg leading-8 text-gray-900">Generating your e-Badge download link ...</p>}

                        <div className="flex items-center justify-center mt-10 gap-x-6">
                            <Link href="/" className="flex content-center font-semibold leading-6 text-gray-900 hover:underline text-md">
                                Back to home <span aria-hidden="true"> <ArrowLongRightIcon className="mx-auto ml-2 w-7 h-7" aria-hidden="true" /> </span>
                            </Link>
                        </div>
                        <p className="max-w-xl mx-auto mt-12 text-lg leading-8 text-gray-900">
                            Didn&apos;t receive an email?
                        </p>
                        <div className="flex items-center justify-center mt-4 gap-x-6">
                            <button
                                onClick={(() => patchData())}
                                className="rounded-md bg-lime-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Resend Email
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentSuccess
