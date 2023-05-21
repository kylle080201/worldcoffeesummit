"use client"
import React from 'react'
import { GET, POST } from '../app/api/hello/route'

const Contact = () => {

    const submitHandler = (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = e.target.elements.email.value;
        const lastName = e.target.elements.lastName.value;
        const firstName = e.target.elements.firstName.value;
        const companyName = e.target.elements.companyName.value;
        const subject = e.target.elements.subject.value;
        const message = e.target.elements.message.value;
        const body = {
            email,
            lastName,
            firstName,
            companyName,
            subject,
            message
        }
        POST(body);
    }
    return (
        <>
            <div className="max-w-screen-md px-4 py-8 mx-auto mb-12 lg:py-16">
                <h2 className="mb-4 text-4xl font-bold tracking-tight text-center text-gray-900 dark:text-white"><span className='text-lime-700'>Contact</span> Us</h2>
                <form onSubmit={(e) => submitHandler(e)} className="space-y-8">
                    <div >
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
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
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                        <input type="text" id="subject" className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required />
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                        <textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button
                            className="flex justify-center px-12 py-4 font-medium text-white border border-transparent rounded-full shadow-sm text-md bg-lime-700 hover:bg-lime-900 focus:outline-none"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}


export default Contact