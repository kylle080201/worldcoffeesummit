"use client"
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

function Navbar() {
    const navigation = [
        { name: 'Overview', href: '#overview' },
        { name: 'Speakers', href: '#speakers' },
        { name: 'Agenda', href: '#agenda' },
        { name: 'Venue', href: '#venue' },
        { name: 'Partners', href: '#partners' },
        { name: 'Exhibition', href: '#exhibition' },
        { name: 'FAQ', href: '#faq' },
    ]
    return (
        <Disclosure as="nav" className="w-full bg-white shadow">
            {({ open }) => (
                <>
                    <div className="w-full px-8 mx-auto sm:max-w-7xl">
                        <div className="flex justify-between w-full h-16 sm:h-32">
                            <div className="flex w-full sm:justify-between">
                                <div className="flex items-center mr-2 -ml-2 md:hidden">
                                    {/* Mobile menu button */}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex items-center flex-shrink-0">
                                    <div>
                                        <Link href='/'>
                                            <img
                                                className="flex-shrink-0 hidden h-auto sm:w-64 lg:block"
                                                src="https://worldcoffeealliance.com/wp-content/uploads/2023/05/world-coffee-summit-high-resolution-logo-color-on-transparent-background.png"
                                                alt="WCS Logo"
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <div className="hidden sm:flex md:ml-6 ">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className='inline-flex items-end px-2 pt-1 pb-4 font-bold text-gray-900 text-md sm:px-4 hover:border-b-2 hover:border-lime-600'
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="items-end hidden pb-2 sm:flex">
                                    <div className="flex-shrink-0">
                                        <Link
                                            href={'/register'}
                                            type="button"
                                            className="relative inline-flex items-center gap-x-1.5 rounded-md bg-lime-700 hover:bg-lime-800 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                        >
                                            Register Now
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <Disclosure.Panel className="md:hidden">
                        <div className="pt-2 pb-3 space-y-1">
                            {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    as='a'
                                    key={item.name}
                                    href={item.href}
                                    className='block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent sm:pl-5 sm:pr-6 hover:border-lime-600 hover:bg-gray-50 hover:text-gray-900'
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                        <div className="items-center justify-center pb-4 pl-3">
                            <div className="flex-shrink-0">
                                <Link
                                    href={'/register'}
                                    type="button"
                                    className="relative inline-flex items-center gap-x-1.5 rounded-md bg-yellow-900 hover:bg-lime-700 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Register Now
                                </Link>
                            </div>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default Navbar;