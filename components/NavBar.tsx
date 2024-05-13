"use client"
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, ClockIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons'
import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useRouter } from 'next/navigation'

function Navbar() {
    const router = useRouter()
    const navigation = [
        { name: 'Overview', href: '/#overview' },
        { name: 'Speakers', href: '/#speakers' },
        { name: 'Agenda', href: '/agenda' },
        { name: 'Venue', href: '/#venue' },
        { name: 'Partners', href: '/#partners' },
        { name: 'Exhibition', href: '/exhibition' },
        { name: 'FAQ', href: '/#faq' },
        { name: 'Resources', href: '/resources' },
    ]
    const [openNotice, setOpenNotice] = useState(false)
    return (
        <Disclosure as="nav" className="w-full bg-white shadow">
            {({ open }) => (
                <>
                    <div className="justify-center flex-shrink-0 w-full mx-auto max-w-7xl">
                        <div className="flex w-full h-16 sm:h-32">
                            <div className="flex w-full sm:justify-between">
                                <div className="flex items-center mr-2 -ml-2 sm:hidden">
                                    {/* Mobile menu button */}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lime-700">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>

                                <div className="flex items-center">
                                    <Link href='/'>
                                        <img
                                            className="flex-shrink-0 hidden w-32 h-auto lg:w-64 md:flex"
                                            src="https://worldcoffeealliance.com/wp-content/uploads/2024/04/world-coffee-innovation-summit-high-resolution-logo-transparent-1.png"
                                            alt="WCS Logo"
                                        />
                                    </Link>
                                </div>

                                <div className="hidden max-w-5xl mx-auto sm:flex">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className='inline-flex items-end px-2 pb-4 text-sm font-bold text-gray-900 lg:text-md lg:px-4 hover:border-b-2 hover:border-lime-700'
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>

                                <div className="hidden my-auto sm:flex">
                                    <div className="flex flex-col items-start">
                                        <div className='flex flex-wrap items-center'>
                                            <div className='flex-wrap'>
                                                <a href='mailto:events@worldcoffeealliance.com' className='mr-2 font-semibold underline text-md'>Get in touch</a>
                                            </div>

                                            <div className='flex gap-x-2'>
                                                <SocialIcon url="https://www.linkedin.com/company/worldcoffeealliance/" style={{ height: 40, width: 40 }} target='_blank' />
                                                <SocialIcon url="https://twitter.com/WCoffeeAlliance" style={{ height: 40, width: 40 }} target='_blank' />
                                                <SocialIcon url="https://www.youtube.com/channel/UCbUTtqgxTtQj9nkKTAf_AQg" style={{ height: 40, width: 40 }} target='_blank' />
                                                <SocialIcon url="https://www.instagram.com/worldcoffeealliancehq/" style={{ height: 40, width: 40 }} target='_blank' />
                                            </div>
                                        </div>
                                        <div className='mt-4 '>
                                            <button
                                                onClick={() => router.push('/interest')}
                                                className="relative inline-flex gap-x-1.5 rounded-md bg-lime-700 hover:bg-lime-800 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                            >
                                                Register Interest
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="md:hidden">
                        <div className="pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    as='a'
                                    key={item.name}
                                    href={item.href}
                                    className='block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent sm:pl-5 sm:pr-6 hover:border-lime-700 hover:bg-gray-50 hover:text-gray-900'
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                        <div className='items-center justify-center pb-4 pl-3'>
                            <div className='flex-wrap'>
                                <a href='mailto:events@worldcoffeealliance.com' className='mr-2 font-semibold underline text-md'>Get in touch</a>
                            </div>

                            <div className='flex gap-x-2'>
                                <SocialIcon url="https://www.linkedin.com/company/worldcoffeealliance/" style={{ height: 40, width: 40 }} target='_blank' />
                                <SocialIcon url="https://twitter.com/WCoffeeAlliance" style={{ height: 40, width: 40 }} target='_blank' />
                                <SocialIcon url="https://www.youtube.com/channel/UCbUTtqgxTtQj9nkKTAf_AQg" style={{ height: 40, width: 40 }} target='_blank' />
                            </div>
                        </div>
                    </Disclosure.Panel>

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
                                                    <p className="mt-2 font-medium text-center text-xl">
                                                    Registration for World Coffee Summit & Exhibition London 2023 has been closed. We hope to see you in 2024! Stay Tuned!
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
                </>
            )}
        </Disclosure>
    )
}

export default Navbar;