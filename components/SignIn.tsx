import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SignIn = () => {
    return (
        <>
            <div className="flex min-h-full ">
                <div className="relative flex-1 hidden w-0 lg:block">
                    <Image
                        className="absolute inset-0 object-cover w-full h-full"
                        src="https://plus.unsplash.com/premium_photo-1675237625862-d982e7f44696?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt=""
                        fill
                    />
                </div>
                <div className="flex flex-col justify-center flex-1 h-screen sm:px-6 lg:flex-none lg:px-12 xl:px-24">
                    <div className="w-full max-w-sm mx-auto lg:w-96">
                        <div>
                            <div className="flex items-center flex-shrink-0 font-bold md:text-3xl">
                                <Link href='/' className='cursor-pointer'>
                                    WCA World<span className='text-yellow-900'>Coffee</span>Summit 2023
                                </Link>
                            </div>
                            <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900">Admin access</h2>
                        </div>
                        <div className="mt-8">
                            <div className="mt-6">
                                <form className="space-y-6">

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                            Email address
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                id="email"
                                                name="email"
                                                type="text"
                                                placeholder='johndoe@samplemail.com'
                                                autoComplete="email"
                                                required
                                                className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-lime-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                            Password
                                        </label>
                                        <div className="relative mt-1">
                                            <input
                                                id="password"
                                                name="password"
                                                type='password'
                                                placeholder={'●●●●●●●●●●●●●'}
                                                autoComplete="current-password"
                                                required
                                                className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-lime-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            />

                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-yellow-900 border border-transparent rounded-md shadow-sm hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        >
                                            Sign in
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn