"use client"
import React from 'react'
import getStripe from '../get_stripe'
import Link from 'next/link'

const redirectToCheckout = async (line_items) => {
    let sessionId = ""
    await fetch('/api/checkout-sessions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                line_items
            }
        )
    }).then(response => response.json())
        .then(data => {
            sessionId = data.session.id
        }).catch(error => {
            console.error(error);
        });

    if (sessionId) {
        const stripe = await getStripe();
        await stripe?.redirectToCheckout({ sessionId })
    }

}

function TicketPricing() {
    const delegates = [
        {
            title: "NGO/Cooperatives, Coffee Associations, Academic Pass",
            item_price: 799,
            link: "https://buy.stripe.com/dR6dTLdNb0Du03S28b",
            line_items: [
                {
                    price: 'price_1NCfrUKMWpUKzQVzcTWlkQsK',
                    quantity: 1
                }
            ]
        },
        {
            title: "Standard Corporate Pass - Corporate Representatives",
            item_price: 1249,
            link: "https://buy.stripe.com/bIYdTL38x71SeYM289"
        },
        {
            title: "Consultants, Start-ups, Service Providers",
            item_price: 1499,
            link: "https://buy.stripe.com/cN25nf5gFgCs6sg146"
        },
    ]

    const visitors = [
        {
            title: "Coffee Roasters, Traders and Coffee Buyers only",
            item_price: 149,
            link: "https://buy.stripe.com/test_cN21851gj7NKb9S6op"
        },
    ]

    return (
        <div className="z-40 py-24 bg-white sm:py-32">
            <div className="content-center px-6 mx-auto max-w-7xl lg:px-8">
                <div className="max-w-2xl mx-auto sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">As delegate to the Summit</h2>
                </div>
                <div className='mt-4 sm:mt-12'>
                    {delegates.map((delegate) => (
                        <div key={delegate.title} className="flex flex-col items-center content-center justify-between w-full max-w-2xl p-4 mx-auto my-auto mt-2 gap-x-4 sm:items-start sm:flex-row justify-items-start sm:p-8 rounded-3xl ring-1 ring-lime-700 sm:mt-4 lg:mx-0 lg:flex lg:max-w-none">
                            <div className='w-10/12 my-auto text-lg font-semibold text-yellow-900 sm:text-2xl'><p>{delegate.title}</p></div>
                            <div className='my-auto text-lg font-semibold sm:text-2xl'><p>£{delegate.item_price}.00</p></div>
                            <div className='my-auto justify-self-center mx:auto'>
                                <Link
                                    href={'/register/form'}
                                    type="button"
                                    className="block w-full px-3 py-2 text-lg font-semibold text-center text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Register
                                </Link>
                                {/* <button className="mt-2 sm:mt-0 "
                                    onClick={(() => {
                                        redirectToCheckout(delegate.line_items)
                                    })}
                                >
                                    <span
                                        className="block w-full px-3 py-2 text-lg font-semibold text-center text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Register
                                    </span>
                                </button> */}
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            <div className="content-center px-6 mx-auto mt-4 sm:mt-12 max-w-7xl lg:px-8">
                <div className="max-w-2xl mx-auto sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">As delegate to the Summit</h2>
                </div>
                <div className='mt-4 sm:mt-12'>
                    {visitors.map((visitor) => (
                        <div key={visitor.title} className="flex flex-col items-center content-center justify-between w-full max-w-2xl p-4 mx-auto my-auto mt-2 sm:items-start sm:flex-row justify-items-start sm:p-8 rounded-3xl ring-1 ring-lime-700 sm:mt-4 lg:mx-0 lg:flex lg:max-w-none">
                            <div className='w-10/12 my-auto text-lg font-semibold text-yellow-900 sm:text-2xl'><p>{visitor.title}</p></div>
                            <div className='w-2/12 my-auto text-lg font-semibold sm:text-2xl'><p>£{visitor.item_price}.00</p></div>
                            <div className="w-1/2 my-auto mt-2 sm:mt-0 sm:w-2/12">
                                <a
                                    href={visitor.link}
                                    target='_blank'
                                    rel="noreferrer"
                                    className="block w-full px-3 py-2 text-lg font-semibold text-center text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Register
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TicketPricing;