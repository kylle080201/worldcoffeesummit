"use client"
import React, { useEffect, useState } from 'react'
import 'crypto-js/enc-utf8';
import Link from 'next/link';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { IResponseData } from '../types/responseData';
import { SocialIcon } from 'react-social-icons';
import NetworkingSoiree from './NetworkingSoiree';



function PaymentSuccess({ checkoutSessionId, decryptedFormData, line_items }: any) {
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
                    line_items
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
                        <img className='w-[20rem]' src="https://worldcoffeealliance.com/wp-content/uploads/2024/04/world-coffee-innovation-summit-high-resolution-logo-transparent-1.png" />
                    </div>
                    {res?.res?.event ?
                        <div className="mt-6 justify-left md:mt-12">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                REGISTRATION CONFIRMED
                            </h2>
                            <h3 className="my-6 text-lg tracking-tight text-gray-900 sm:text-2xl">
                                Thank you for registering to attend the {res?.res?.event === "Summit and Networking Soirée" ? "World Coffee Innovation Summit and Networking Soirée London 2024" : res?.res?.event === "Summit" ? "World Coffee Innovation Summit London 2024" : "Networking Soirée at UK House of Lords on 16th October 2024" }.
                            </h3>
                            <h3 className="my-6 text-lg tracking-tight text-gray-900 sm:text-2xl">
                                An email confirmation will be with you shortly with further instructions
                            </h3>
                            {
                                res?.res?.event === "Summit" && 
                                    <div className="flex font-bold flex-col gap-2 text-lg tracking-tight text-gray-900 sm:text-2xl">
                                    <div>
                                        WHY NOT JOIN OUR &ldquo;NETWORKING SOIRÉE&ldquo; AT UK HOUSE OF LORDS ON 16TH OCTOBER 2024 EARLY EVENING?
                                    </div>
                                    <div className="text-red-500">
                                        LIMITED TICKETS ONLY! FIRST COME, FIRST SERVE!
                                    </div>
                                    <Link className=' underline text-yellow-900' href={'/register/tickets'}>Register Here</Link>
                                </div>
                            }
                            {
                                res?.res?.event === "Networking Soirée" && 
                                <h3 className="my-6 text-lg tracking-tight text-gray-900 sm:text-2xl">
                                    Please make sure you have already registered your pass to World Coffee Innovation Summit London 2024, as the Networking Soirée is exclusively for registered delegate to the summit only. <Link className='underline text-yellow-900' href={'/register/tickets'}>Register Here</Link>
                                </h3>
                            }
                            
                            <h3 className="mt-6 text-lg font-bold tracking-tight text-lime-700 sm:text-2xl">
                                Event Date:
                            </h3>
                            <h4 className="text-lg tracking-tight text-gray-900 sm:text-2xl">
                                { res?.res?.event === "Networking Soirée" ? "16th October 2024" : "16-17th October 2024" }
                            </h4>
                            <h3 className="mt-6 text-lg font-bold tracking-tight text-lime-700 sm:text-2xl">
                                Location:
                            </h3>
                            <h4 className="text-lg tracking-tight text-gray-900 sm:text-2xl">
                                <b>Summit</b>: 4th Floor at QEII Centre, Broad Sanctuary, London SW1P 3EE
                            </h4>
                            <h4 className="text-lg tracking-tight text-gray-900 sm:text-2xl">
                                <b>Networking Soirée</b>: UK House of Lords, Houses of Parliament, Parliament Sq, London SW1A 0PW
                            </h4>
                            <h4 className="mt-6 text-lg tracking-tight text-gray-900 sm:text-2xl">
                                Didn&apos;t receive an email? Please check your spam/junk mail.
                            </h4>
                            <div className='flex items-center my-auto mt-6 gap-x-4'>
                                <p className="max-w-xl text-lg leading-8 text-gray-900 sm:text-2xl">
                                    Still didn&apos;t receive an email?
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
                                <SocialIcon url="https://www.x.com/WCoffeeAlliance" style={{ height: 50, width: 50 }} target='_blank' />
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
