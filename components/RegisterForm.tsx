"use client"
import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Controller, useForm } from 'react-hook-form'
import BackButton from './BackButton'
import TermsAndConditionsContent from './TermsAndConditionsContent'
import Link from 'next/link'
import { ClockIcon } from '@heroicons/react/24/outline'
import { countryCodes } from './ResourceForm'
import getStripe from '../get_stripe'

interface User {
    firstName: string;
    lastName: string;
    companyName: string;
    jobTitle: string;
    countryCode: string;
    mobileNumber: string;
    country: string;
    email: string;
    confirmEmail: string;
}

const networkingSoireePriceId = 'price_1TU6d9KMWpUKzQVzbvEL5xFJ' // production
// const networkingSoireePriceId = 'price_1TVyh9KMWpUKzQVzYXpxkkUr' // prod testing (£5)
// const networkingSoireePriceId = 'price_1TUHu5KMWpUKzQVzaZLAIhUe' // testing

const RegisterForm = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [isAgree, setIsAgree] = useState(false)
    const [openTermsAndConditions, setOpenTermsAndConditions] = useState(false)
    const [openLetterOfInvitation, setOpenLetterOfInvitation] = useState(false)
    const [openNotice, setOpenNotice] = useState(false)

    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors },
    } = useForm<User>();

    const onSubmit = async (data: any) => {
        try {
            const { email, confirmEmail } = data;
            if (data) {
                if (email === confirmEmail) {
                    const line_items = searchParams?.get('line_items') as string;
                    if (!line_items) return;
                    const parsedLineItems = JSON.parse(line_items) as { price: string }[];

                    // The country-code select stores the ISO code (unique) to
                    // avoid clashes between countries that share a dial code
                    // (e.g. UK / Guernsey on +44, US / Canada on +1). Convert
                    // it back to the dial code before sending downstream so
                    // mailers and storage keep their existing shape.
                    const dialCode =
                        countryCodes.find((c) => c.code === data.countryCode)?.dial_code ??
                        data.countryCode
                    const submitData = { ...data, countryCode: dialCode }

                    try {
                        await fetch('/api/unpaid-registrations', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                formData: submitData,
                                line_items: parsedLineItems,
                            }),
                            keepalive: true,
                        })
                    } catch (err) {
                        console.log('Failed to record unpaid registration', err)
                    }

                    const hasNetworkingSoiree = parsedLineItems.some(
                        (item) => item.price === networkingSoireePriceId
                    )
                    if (hasNetworkingSoiree) {
                        const origin = window.location.origin
                        const dataRes = await fetch('/api/checkout-sessions', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                line_items: parsedLineItems,
                                formData: submitData,
                                origin,
                            }),
                        })
                        const dataResJson = await dataRes.json()
                        const stripe = await getStripe()
                        await stripe?.redirectToCheckout({
                            sessionId: dataResJson?.response?.retrievedSession?.id,
                        })
                        return
                    }
                    const query = new URLSearchParams({
                        line_items,
                        buyer_data: JSON.stringify(submitData),
                    });
                    router.push(`/register/add-ons?${query.toString()}`)
                }
            }
        } catch (error) {
            console.log(error)
        }
        
        // setOpenNotice(!openNotice)
    }

    const watchEmail = watch('email');
    return (
        <>
            <div className="z-40 py-12 bg-white sm:py-20">
                <div className="max-w-screen-md px-4 mx-auto mb-12">
                    <h2 className="mb-4 text-4xl font-bold tracking-tight text-center text-gray-900"><span className='text-lime-700'>Delegate</span> Information</h2>
                    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex gap-4'>
                            <div className='w-1/2'>
                                <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900">First Name</label>
                                <input type="text" {...register('firstName', { required: true, pattern: /^[a-zA-Z0-9\s&@#*!]+$/ })} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" required />
                            </div>
                            <div className='w-1/2'>
                                <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900">Last Name</label>
                                <input type="text" {...register('lastName', { required: true, pattern: /^[a-zA-Z0-9\s&@#*!]+$/ })} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" required />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="companyName" className="block mb-2 text-sm font-medium text-gray-900">Company</label>
                            <input type={"text"} {...register('companyName', { required: true, pattern: /^[a-zA-Z0-9\s&@#*!]+$/ })} className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500" required />

                        </div>

                        <div>
                            <label htmlFor="jobTitle" className="block mb-2 text-sm font-medium text-gray-900">Job Title</label>
                            <input type={"text"} {...register('jobTitle', { required: true, pattern: /^[a-zA-Z0-9\s&@#*!]+$/ })} className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500" required />
                        </div>

                        <div className='flex gap-4'>
                            <div className='w-1/2'>
                                <label htmlFor="mobileNumber" className="block mb-2 text-sm font-medium text-gray-900">Mobile Number</label>
                                <div className='flex gap-4'>
                                    <Controller
                                        control={control}
                                        name="countryCode"
                                        rules={{ required: true }}
                                        render={({ field }) => (
                                            <select {...field} className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500" required>
                                                <option value="">Country Code</option>
                                                {countryCodes.map((country) => (
                                                    <option key={country.code} value={country.code}>{country.name} ({country.dial_code})</option>
                                                ))}
                                            </select>
                                        )}
                                    />
                                    <input {...register('mobileNumber', { required: true })} type='tel' className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500" required />
                                </div>
                            </div>
                            <div className='w-1/2'>
                                <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900">Country</label>
                                <Controller
                                    control={control}
                                    name="country"
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <select {...field} className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500" required>
                                            <option value="">Select Country</option>
                                            {countryCodes.map((country) => (
                                                <option key={country.code} value={country.name}>{country.name}</option>
                                            ))}
                                        </select>
                                    )}
                                />
                            </div>
                        </div>

                        <div className='flex gap-4'>
                            <div className='w-1/2'>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email Address</label>
                                <input {...register('email')} type='email' className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500" required />
                            </div>
                            <div className='w-1/2'>
                                <label htmlFor="confirmEmail" className="block mb-2 text-sm font-medium text-gray-900">Confirm Email Address</label>
                                <input {...register('confirmEmail', {
                                    validate: (value) => value === watchEmail,
                                })} type='email' className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500" required />
                                {errors.confirmEmail && errors.confirmEmail.type === 'validate' && <span className='text-red-700'>Emails do not match</span>}
                            </div>
                        </div>

                        <fieldset>
                            <div className="space-y-5">
                                <div className="relative flex items-start">
                                    <div className="flex items-center h-6">
                                        <input
                                            required
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
                                            By ticking this checkbox you agree to the <button type='button' onClick={() => { setOpenTermsAndConditions(!openTermsAndConditions) }} className='underline text-lime-700'>terms and conditions</button> and <Link target={'_blank'} href={'/privacy-policy'} className='underline text-lime-700'>privacy policy</Link>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <div className="flex justify-end">
                            <input type="submit" value="Next" className="flex justify-center px-3 py-2 text-sm font-semibold text-white border border-transparent rounded-md shadow-sm bg-lime-700 hover:cursor-pointer hover:bg-lime-900 focus:outline-none" />
                        </div>
                    </form>
                    <BackButton />
                </div >

                < Transition.Root show={openTermsAndConditions} as={Fragment}>
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
                                    <Dialog.Panel className="relative px-4 pt-5 pb-4 text-left transition-all transform bg-white rounded-lg shadow-xl h-max sm:my-8 sm:w-full sm:max-w-4xl sm:p-6">
                                        <Dialog.Title className="py-4 font-semibold leading-6 text-gray-900 text-md sm:text-xl">
                                            Terms and Condition
                                        </Dialog.Title>
                                        <div className='overflow-auto max-h-80'>
                                            <TermsAndConditionsContent />
                                        </div>
                                        <div className="mt-5 sm:mt-6">
                                            <button
                                                type="button"
                                                className="inline-flex justify-center max-w-5xl px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700"
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
                </ Transition.Root >

                {/* letter of invitation*/}
                < Transition.Root show={openLetterOfInvitation} as={Fragment}>
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
                                    <Dialog.Panel className="relative px-4 pt-5 pb-4 text-left transition-all transform bg-white rounded-lg shadow-xl h-max sm:my-8 sm:w-full sm:max-w-4xl sm:p-6">
                                        <Dialog.Title className="py-4 font-semibold leading-6 text-gray-900 text-md sm:text-xl">
                                            Letter of Invitation
                                        </Dialog.Title>
                                        <div className='overflow-auto max-h-60'>
                                            <div className="text-sm sm:text-md sm:mt-5">
                                                <p className="mt-2 text-gray-600">
                                                    An official invitation letter can be sent by the by the COO and Co-Founder of Global Stratagem Group Ltd, operator of World Coffee Alliance and organiser of World Coffee Innovation Summit London 2024 upon request. This personal invitation is intended to facilitate travel and visa arrangements for registered participants. Visa applications are the sole responsibility of participants. To request an official invitation letter, participants must first complete the registration process. In order to receive a hard copy of the invitation letter, please send email request to <span className='font-semibold text-gray-900'>mavis@worldcoffeealliance.com</span>.
                                                </p>
                                                <p className="mt-2 text-gray-600">
                                                    Please check the <a href='https://www.gov.uk/browse/visas-immigration' target='_blank' className='underline text-lime-700'>United Kingdom Visa Portal website</a> for visa-related information in the United Kingdom.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-5 sm:mt-6">
                                            <button
                                                type="button"
                                                className="inline-flex justify-center max-w-5xl px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700"
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
                </ Transition.Root>

                {/* event notice  */}
                < Transition.Root show={openNotice} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={setOpenNotice}>
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
                                    <Dialog.Panel className="relative px-4 pt-5 pb-4 text-left transition-all transform bg-white rounded-lg shadow-xl h-max sm:my-8 sm:w-full sm:max-w-4xl sm:p-6">
                                        <Dialog.Title className="py-4 font-semibold leading-6 text-gray-900 text-md sm:text-xl">
                                            Registration Closed
                                        </Dialog.Title>
                                        <hr />
                                        <div className='overflow-auto max-h-80'>
                                            <div className="text-sm sm:text-md sm:mt-5 flex flex-col">
                                                <p className="py-8 flex mx-auto">
                                                   <ClockIcon height={150} className='text-red-500'/>
                                                </p>
                                                <p className="mt-2 text-red-500 text-center text-xl">
                                                   Registration for World Coffee Innovation Summit London 2023 has been closed. We hope to see you in 2024! Stay Tuned!
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-5 sm:mt-6">
                                            <button
                                                type="button"
                                                className="inline-flex justify-center max-w-5xl px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700"
                                                onClick={() => setOpenNotice(!openNotice)}
                                            >
                                                Back
                                            </button>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </ Transition.Root>
            </div>
        </>
    )
}


export default RegisterForm