"use client"
import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useSearchParams } from 'next/navigation'
import { Controller, useForm } from 'react-hook-form'
import BackButton from './BackButton'
import TermsAndConditionsContent from './TermsAndConditionsContent'
import Link from 'next/link'
import { countryCodes } from './ResourceForm'
import getStripe from '../get_stripe'

interface Exhibitor {
    firstName: string
    lastName: string
    companyName: string
    jobTitle: string
    country: string
    countryCode: string
    mobileNumber: string
    email: string
    confirmEmail: string
}

const inputClassName =
    'block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500'

export default function ExhibitionRegisterForm() {
    const searchParams = useSearchParams()
    const [isAgree, setIsAgree] = useState(false)
    const [openTermsAndConditions, setOpenTermsAndConditions] = useState(false)
    const [submitError, setSubmitError] = useState('')

    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors, isSubmitting },
    } = useForm<Exhibitor>({
        defaultValues: {
            country: '',
            countryCode: '',
        },
    })

    const watchEmail = watch('email')

    const onSubmit = async (data: Exhibitor) => {
        try {
            setSubmitError('')
            if (data.email !== data.confirmEmail) return

            const line_items = searchParams?.get('line_items')
            if (!line_items) {
                setSubmitError('This exhibition registration link is missing ticket details. Please use the original link.')
                return
            }

            const parsedLineItems = JSON.parse(line_items) as { price: string }[]
            const dialCode =
                countryCodes.find((c) => c.code === data.countryCode)?.dial_code ?? data.countryCode
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

            const origin = window.location.origin
            const dataRes = await fetch('/api/checkout-sessions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    line_items: parsedLineItems,
                    formData: submitData,
                    origin,
                    registration_flow: 'exhibition',
                    cancel_url: window.location.href,
                }),
            })
            const dataResJson = await dataRes.json()
            const sessionId = dataResJson?.response?.retrievedSession?.id
            if (!dataRes.ok || !sessionId) {
                setSubmitError(
                    typeof dataResJson?.message === 'string'
                        ? dataResJson.message
                        : 'Unable to continue to payment right now. Please try again.'
                )
                return
            }

            const stripe = await getStripe()
            await stripe?.redirectToCheckout({ sessionId })
        } catch (error) {
            console.log(error)
            setSubmitError('Unable to continue to payment right now. Please try again.')
        }
    }

    return (
        <>
            <div className="z-40 py-12 bg-white sm:py-20">
                <div className="max-w-screen-md px-4 mx-auto mb-12">
                    <h2 className="mb-4 text-4xl font-bold tracking-tight text-center text-gray-900">
                        <span className="text-lime-700">Exhibitor</span> Information
                    </h2>
                    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    {...register('firstName', { required: true, pattern: /^[a-zA-Z0-9\s&@#*!]+$/ })}
                                    className={inputClassName}
                                    required
                                />
                            </div>
                            <div className="w-1/2">
                                <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    {...register('lastName', { required: true, pattern: /^[a-zA-Z0-9\s&@#*!]+$/ })}
                                    className={inputClassName}
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <label htmlFor="companyName" className="block mb-2 text-sm font-medium text-gray-900">
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    {...register('companyName', { required: true, pattern: /^[a-zA-Z0-9\s&@#*!]+$/ })}
                                    className={inputClassName}
                                    required
                                />
                            </div>
                            <div className="w-1/2">
                                <label htmlFor="jobTitle" className="block mb-2 text-sm font-medium text-gray-900">
                                    Job Title
                                </label>
                                <input
                                    type="text"
                                    {...register('jobTitle', { required: true, pattern: /^[a-zA-Z0-9\s&@#*!]+$/ })}
                                    className={inputClassName}
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900">
                                Country
                            </label>
                            <Controller
                                control={control}
                                name="country"
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <select {...field} className={inputClassName} required>
                                        <option value="" disabled>
                                            Select Country
                                        </option>
                                        {countryCodes.map((country) => (
                                            <option key={country.code} value={country.name}>
                                                {country.name}
                                            </option>
                                        ))}
                                    </select>
                                )}
                            />
                        </div>

                        <div>
                            <label htmlFor="mobileNumber" className="block mb-2 text-sm font-medium text-gray-900">
                                Mobile Number
                            </label>
                            <div className="flex gap-4">
                                <Controller
                                    control={control}
                                    name="countryCode"
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <select {...field} className={inputClassName} required>
                                            <option value="" disabled>
                                                Select Country Code
                                            </option>
                                            {countryCodes.map((country) => (
                                                <option key={country.code} value={country.code}>
                                                    {country.name} ({country.dial_code})
                                                </option>
                                            ))}
                                        </select>
                                    )}
                                />
                                <input
                                    {...register('mobileNumber', { required: true })}
                                    type="tel"
                                    className={inputClassName}
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                                    Email Address
                                </label>
                                <input {...register('email')} type="email" className={inputClassName} required />
                            </div>
                            <div className="w-1/2">
                                <label htmlFor="confirmEmail" className="block mb-2 text-sm font-medium text-gray-900">
                                    Confirm Email Address
                                </label>
                                <input
                                    {...register('confirmEmail', {
                                        validate: (value) => value === watchEmail,
                                    })}
                                    type="email"
                                    className={inputClassName}
                                    required
                                />
                                {errors.confirmEmail && errors.confirmEmail.type === 'validate' && (
                                    <span className="text-red-700">Emails do not match</span>
                                )}
                            </div>
                        </div>

                        <fieldset>
                            <div className="space-y-5">
                                <div className="relative flex items-start">
                                    <div className="flex items-center h-6">
                                        <input
                                            required
                                            onChange={() => setIsAgree(!isAgree)}
                                            checked={isAgree}
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
                                            By ticking this checkbox you agree to the{' '}
                                            <button
                                                type="button"
                                                onClick={() => setOpenTermsAndConditions(!openTermsAndConditions)}
                                                className="underline text-lime-700"
                                            >
                                                terms and conditions
                                            </button>{' '}
                                            and{' '}
                                            <Link target="_blank" href="/privacy-policy" className="underline text-lime-700">
                                                privacy policy
                                            </Link>
                                            .
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        {submitError ? <p className="text-sm text-red-700">{submitError}</p> : null}
                        <div className="flex justify-end">
                            <input
                                type="submit"
                                value={isSubmitting ? 'Please wait...' : 'Next'}
                                disabled={isSubmitting}
                                className="flex justify-center px-3 py-2 text-sm font-semibold text-white border border-transparent rounded-md shadow-sm bg-lime-700 hover:cursor-pointer hover:bg-lime-900 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
                            />
                        </div>
                    </form>
                    <BackButton />
                </div>

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
                                    <Dialog.Panel className="relative px-4 pt-5 pb-4 text-left transition-all transform bg-white rounded-lg shadow-xl h-max sm:my-8 sm:w-full sm:max-w-4xl sm:p-6">
                                        <Dialog.Title className="py-4 font-semibold leading-6 text-gray-900 text-md sm:text-xl">
                                            Terms and Condition
                                        </Dialog.Title>
                                        <div className="overflow-auto max-h-80">
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
                </Transition.Root>
            </div>
        </>
    )
}
