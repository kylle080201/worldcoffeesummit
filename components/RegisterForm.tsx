"use client"
import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import getStripe from '../get_stripe'
import { useSearchParams } from 'next/navigation'

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

const RegisterForm = () => {
    const searchParams = useSearchParams()
    const [isAgree, setIsAgree] = useState(false)
    const [line_items, setLine_items] = useState('')
    const [openTermsAndConditions, setOpenTermsAndConditions] = useState(false)
    const [openLetterOfInvitation, setOpenLetterOfInvitation] = useState(false)

    const redirectToCheckout = async () => {
        if (searchParams?.get('line_items')) {
            setLine_items(JSON.parse(searchParams?.get('line_items'))[0]);
        }

        let sessionId = ""
        if (line_items) {
            try {
                await fetch('/api/checkout-sessions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(
                        {
                            line_items,
                            hello: "hello"
                        }
                    )
                }).then(response => response.json())
                    .then(data => {
                        sessionId = data?.response?.id
                    }).catch(error => {
                        console.error(error);
                    });

                if (sessionId) {
                    const stripe = await getStripe();
                    await stripe?.redirectToCheckout({ sessionId })
                }
            } catch (error) {
                alert(error)
            }
        }
    }
    return (
        <>
            <div className="max-w-screen-md px-4 py-8 mx-auto mb-12 lg:py-16">
                <h2 className="mb-4 text-4xl font-bold tracking-tight text-center text-gray-900 dark:text-white"><span className='text-lime-700'>Regstration</span> Form</h2>
                <form className="space-y-8">
                    <div >
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required />
                    </div>

                    <div className='flex gap-4'>
                        <div className='w-1/2'>
                            <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last Name</label>
                            <input type="text" id="lastName" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required />
                        </div>
                        <div className='w-1/2'>
                            <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First Name</label>
                            <input type="text" id="firstName" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company Name</label>
                        <input type="text" id="companyName" className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required />
                    </div>

                    <div>
                        <label htmlFor="jobTitle" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Job Title</label>
                        <input type="text" id="jobTitle" className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required />
                    </div>
                    <fieldset>
                        <legend className="sr-only">Notifications</legend>
                        <div className="space-y-5">
                            <div className="relative flex items-start">
                                <div className="flex items-center h-6">
                                    <input
                                        onChange={() => (setIsAgree(!isAgree))}
                                        id="agree"
                                        aria-describedby="terms-and-conditions"
                                        name="agree"
                                        type="checkbox"
                                        className="w-4 h-4 border-gray-300 rounded text-lime-700 focus:ring-lime-700"
                                    />
                                </div>
                                <div className="ml-3 text-sm leading-6">
                                    <label htmlFor="agree" className="font-medium text-gray-900">
                                        I agree
                                    </label>
                                    <p id="comments-description" className="text-gray-500">
                                        By ticking this checkbox you agree to the <button type='button' onClick={() => { setOpenTermsAndConditions(!openTermsAndConditions) }} className='underline text-lime-700'>terms and conditions</button> and have read the <button type='button' onClick={() => { setOpenLetterOfInvitation(!openLetterOfInvitation) }} className='underline text-lime-700'>letter of invitation</button>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <div className="flex justify-end">
                        <button
                            type='button'
                            disabled={!isAgree}
                            onClick={() => { redirectToCheckout() }}
                            className={classNames(
                                isAgree ? ' bg-lime-700 hover:bg-lime-900 focus:outline-none'
                                    : ' bg-gray-400 focus:outline-none',
                                'flex justify-center px-3 py-2 font-semibold text-sm text-white border border-transparent rounded-md shadow-sm'
                            )}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>

            {/* terms and conditions */}
            <Transition.Root show={openTermsAndConditions} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpenTermsAndConditions}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-50" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative px-4 pt-5 pb-4 text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-4xl sm:p-6">
                                    <Dialog.Title className="py-4 font-semibold leading-6 text-gray-900 text-md sm:text-xl">
                                        Terms and Condition
                                    </Dialog.Title>
                                    <div className='overflow-auto max-h-60'>
                                        <div className="text-sm sm:text-md sm:mt-5">
                                            <p className="text-gray-600 ">
                                                <span className='font-semibold'>Global Stratagem Group Ltd</span> is the registered owner of <span className='font-semibold'>World Coffee Alliance (WCA)</span> and organizer of <span className='font-semibold'>World Coffee Summit London</span> and <span className='font-semibold'>World Coffee Exhibition London</span>. By ticking this box (and any third party platform provider acting on our behalf) you consent to allow  us to use your personal information for analysing visitor traffic with a view to improving the event experience for event delegates.
                                            </p>
                                            <p className="mt-2 text-gray-600">
                                                By registering,  your personal information will be shared with the exhibitor or sponsor to allow them to engage with you and provide some more information of what they offer, and what they can help you with in terms of solutions and services. Once registered, your full contact details will be shared directly with another attendee, sponsor or exhibitor and they may follow-up and use your details for marketing and networking purposes.
                                            </p>
                                            <p className="mt-2 text-gray-600">
                                                For more information on how we use your data, please visit our <a href="#" className='underline'>privacy policy</a>.
                                            </p>
                                            <p className="mt-4 font-semibold text-gray-900 text-md">
                                                Badge Scanning
                                            </p>
                                            <p className="mt-2 text-gray-600">
                                                Please be aware that your QR Code will serve as your badge and contains the information you provided upon registering to attend the event. The sponsors and exhibitors of this event may wish to scan your badge so they can contact you with more information. We provide badge scanning services to those exhibitors that request it. By allowing a sponsor or exhibitor to scan your badge, you are consenting for us to send your contact details to them for marketing purposes. For more information on how we use your data, please visit our <a href="#" className='underline'>privacy policy</a>.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-5 sm:mt-6">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center max-w-5xl px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
                                            onClick={() => setOpenTermsAndConditions(!openTermsAndConditions)}
                                        >
                                            Back
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>

            {/* letter of invitation*/}
            <Transition.Root show={openLetterOfInvitation} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpenLetterOfInvitation}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-50" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative px-4 pt-5 pb-4 text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-4xl sm:p-6">
                                    <Dialog.Title className="py-4 font-semibold leading-6 text-gray-900 text-md sm:text-xl">
                                        Letter of Invitation
                                    </Dialog.Title>
                                    <div className='overflow-auto max-h-60'>
                                        <div className="text-sm sm:text-md sm:mt-5">
                                            <p className="mt-2 text-gray-600">
                                                An official invitation letter will be sent by the Chair of the World Coffee Leaders Forum Organizing Committee upon request. This personal invitation is intended to facilitate travel and visa arrangements for registered participants. Visa applications are the sole responsibility of participants. To request an official invitation letter, participants must first complete the registration process. In order to receive a hard copy of the invitation letter, a requester should disburse USD 30 for postage at onsite registration desk.
                                            </p>
                                            <p className="mt-2 text-gray-600">
                                                Please check the <a href='https://www.gov.uk/browse/visas-immigration' target='_blank' className='underline text-lime-700'>United Kingdom Visa Portal website</a> for visa-related information in the United Kingdom.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-5 sm:mt-6">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center max-w-5xl px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
                                            onClick={() => setOpenLetterOfInvitation(!openLetterOfInvitation)}
                                        >
                                            Back
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}


export default RegisterForm