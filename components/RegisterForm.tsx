"use client"
import React, { useState } from 'react'

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

const RegisterForm = () => {
    const [isAgree, setIsAgree] = useState(false)
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
                                        className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600"
                                    />
                                </div>
                                <div className="ml-3 text-sm leading-6">
                                    <label htmlFor="agree" className="font-medium text-gray-900">
                                        I agree
                                    </label>
                                    <p id="comments-description" className="text-gray-500">
                                        By ticking this checkbox you agree to the <a className='underline text-lime-700'>terms and conditions</a>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <div className="flex justify-end">
                        <button
                            disabled={!isAgree}
                            className={classNames(
                                isAgree ? ' bg-lime-700 hover:bg-lime-900 focus:outline-none'
                                    : ' bg-gray-400 focus:outline-none',
                                'flex justify-center px-12 py-4 font-medium text-white border border-transparent rounded-full shadow-sm text-md'
                            )}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}


export default RegisterForm