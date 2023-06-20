"use client"
import React, { useEffect, useState } from 'react'
import 'crypto-js/enc-utf8';
import Link from 'next/link';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { IResponseData } from '../types/responseData';
import { SocialIcon } from 'react-social-icons';



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
                    <div className='max-w-5xl'>
                        <img className='w-[20rem]' src="https://worldcoffeealliance.com/wp-content/uploads/2023/05/world-coffee-summit-high-resolution-logo-color-on-transparent-background.png" />
                    </div>
                    {res?.res?.event ?
                        <div className="mt-6 justify-left md:mt-12">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                REGISTRATION CONFIRMED
                            </h2>
                            <h3 className="my-6 text-lg tracking-tight text-gray-900 sm:text-2xl">
                                Thank you for registering to attend the World Coffee {res?.res?.event} London 2023.
                            </h3>
                            <h3 className="my-6 text-lg tracking-tight text-gray-900 sm:text-2xl">
                                An email confirmation will be with you shortly with further instructions
                            </h3>
                            <h3 className="mt-6 text-lg font-bold tracking-tight text-lime-700 sm:text-2xl">
                                Event Date:
                            </h3>
                            <h4 className="text-lg tracking-tight text-gray-900 sm:text-2xl">
                                Wednesday 13 September 2023
                            </h4>
                            <h3 className="mt-6 text-lg font-bold tracking-tight text-lime-700 sm:text-2xl">
                                Location:
                            </h3>
                            <h4 className="text-lg tracking-tight text-gray-900 sm:text-2xl">
                                QEII Centre
                            </h4>
                            <h4 className="mt-6 text-lg tracking-tight text-gray-900 sm:text-2xl">
                                Didn&apos;t receive an email? Please check your spam/junk mail.
                            </h4>
                            <div className='flex items-center my-auto mt-6 gap-x-4'>
                                <p className="max-w-xl text-lg leading-8 text-gray-900 sm:text-2xl">
                                    Still didn&apos;t receive and email?
                                </p>
                                <div className="flex justify-center gap-x-6">
                                    <button
                                        onClick={(() => patchData())}
                                        className="rounded-md bg-lime-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Resend Email
                                    </button>
                                </div>
                            </div>
                            <h4 className="mt-6 text-lg tracking-tight text-gray-900 sm:text-2xl">
                                Tell your colleagues and industry peers join you
                            </h4>
                            <div className='flex mt-3 gap-x-4'>
                                <SocialIcon url="https://www.linkedin.com/company/worldcoffeealliance/" style={{ height: 50, width: 50 }} target='_blank' />
                                <SocialIcon url="https://twitter.com/WCoffeeAlliance" style={{ height: 50, width: 50 }} target='_blank' />
                            </div>
                            <div className="flex mt-10 gap-x-6">
                                <Link href="/" className="flex content-center text-2xl font-semibold leading-6 text-gray-900 hover:underline">
                                    Back to home <span aria-hidden="true"> <ArrowLongRightIcon className="mx-auto ml-2 h-7" aria-hidden="true" /> </span>
                                </Link>
                            </div>

                        </div>
                        :
                        <div className="flex-shrink-0 max-w-3xl px-6 py-20 mx-auto sm:px-6 sm:py-32 lg:px-8 md:max-w-7xl text-md lg:text-2xl">Loading ...</div>
                    }

                </div>
            </div>


        </>
    )
}

export default PaymentSuccess
