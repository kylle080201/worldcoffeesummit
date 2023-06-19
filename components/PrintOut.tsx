import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import React from 'react'

export default function PrintOut() {
    return (
        <div className="flex flex-col items-center h-screen bg-lime-700">
            <div className="px-6 my-auto sm:px-6 sm:py-32 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
                        You are now registered!
                    </h2>
                    <h2 className="mt-12 text-2xl font-bold tracking-tight text-white sm:text-4xl">
                        See you at QEII Centre on 13th September 2023!
                    </h2>
                    <p className="max-w-xl mx-auto mt-6 text-lg leading-8 text-indigo-100">
                        Please only use the qr code on the day of the event.
                    </p>
                    <div className="flex items-center justify-center mt-10 gap-x-6">

                        <Link href="/" className="flex content-center text-2xl font-semibold leading-6 text-white hover:underline">
                            Back to home <span aria-hidden="true"> <ArrowLongRightIcon className="mx-auto ml-2 h-7" aria-hidden="true" /> </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
