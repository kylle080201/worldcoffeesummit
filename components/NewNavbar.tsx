"use client"
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { PlusIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

function NewNavbar() {
    const pathname = usePathname();
    const navigation = [
        { name: 'Overview', href: '#overview', current: pathname === '/#speakers' ? true : false },
        { name: 'Speakers', href: '#speakers', current: pathname === '/#speakers' ? true : false },
        { name: 'Agenda', href: '#agenda', current: pathname === '/#program' ? true : false },
        { name: 'Venue', href: '#venue', current: pathname === '/#venue' ? true : false },
        { name: 'FAQ', href: '#faq', current: pathname === '/#faq' ? true : false },
        { name: 'Sponsors', href: '#sponsors', current: pathname === '/#sponsors' ? true : false },
        { name: 'Register', href: '#register', current: pathname === '/#register' ? true : false },
        { name: 'Partnership', href: '/partnership', current: pathname === '/partnership' ? true : false },
        { name: 'Contact', href: '/contact', current: pathname === '/contact' ? true : false },
    ]
    return (
        <Disclosure as="nav" className="bg-white shadow">
            {({ open }) => (
                <>
                    <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-6">
                        <div className="flex justify-between h-16">
                            <div className="flex">
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
                                    <div className="flex font-bold lg:flex-1">
                                        <Link href={'/'} className='cursor-pointer'>
                                            WCA World<span className='text-yellow-900'>Coffee</span>Summit 2023
                                        </Link>
                                    </div>
                                </div>
                                <div className="hidden md:ml-6 md:flex md:space-x-8">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'border-b-2 border-lime-600' : '',
                                                'inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 '
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="flex items-center sm:ml-12">
                                    <div className="flex-shrink-0">
                                        <button
                                            type="button"
                                            className="relative inline-flex items-center gap-x-1.5 rounded-md bg-yellow-900 hover:bg-lime-700 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Register Now
                                        </button>
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
                                    className={classNames(
                                        item.current ?
                                            ' text-indigo-700 border-indigo-500 bg-indigo-50' :
                                            ' text-gray-500 border-transparent hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700',
                                        'block py-2 pl-3 pr-4 text-base font-medium border-l-4 sm:pl-5 sm:pr-6'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default NewNavbar;