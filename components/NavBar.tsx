"use client"
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    ClockIcon,
    DocumentIcon,
    MapPinIcon,
    PencilSquareIcon,
    PresentationChartBarIcon,
    QuestionMarkCircleIcon,
    UserGroupIcon,
    UserIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const pathname = usePathname();
    const navigation = [
        { name: 'Partnership', href: '/partnership', current: pathname === '/partnership' ? true : false },
        { name: 'Contact', href: '/contact', current: pathname === '/contact' ? true : false },
    ]
    const dropdown = [
        { name: 'Overview', href: '#overview', icon: PresentationChartBarIcon },
        { name: 'Agenda', href: '#agenda', icon: ClockIcon },
        { name: 'Speakers', href: '#speakers', icon: UserIcon },
        { name: 'Venue', href: '#venue', icon: MapPinIcon },
        { name: 'Partners', href: '#partners', icon: UserGroupIcon },
        { name: 'FAQ', href: '#faq', icon: QuestionMarkCircleIcon },
        { name: 'Brochure', href: '#brochure', icon: DocumentIcon },
        { name: 'Register', href: '#register', icon: PencilSquareIcon },
    ]
    return (
        <header className="z-50 bg-white shadow-md">
            <nav className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8" aria-label="Global">
                <div className="flex font-bold lg:flex-1">
                    <Link href={'/'} className='cursor-pointer'>
                        WCA World<span className='text-yellow-900'>Coffee</span>Summit 2023
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="w-6 h-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="items-center hidden px-3 py-2 lg:flex lg:gap-x-8">
                    <Popover className="relative">
                        <Popover.Button className={classNames(pathname === '/' ? 'bg-lime-700 text-white hover:bg-lime-900' : 'text-gray hover:bg-lime-700 hover:text-white',
                            "flex items-center px-3 py-2 font-semibold leading-6 text-gray-900 rounded-md gap-x-1 ")}>
                            Home
                            <ChevronDownIcon className="flex-none w-5 h-5" aria-hidden="true" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute z-10 w-screen max-w-sm mt-3 overflow-hidden bg-white rounded-lg shadow-lg -left-8 top-full ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {dropdown.map((item) => (
                                        <div
                                            key={item.name}
                                            className="relative flex items-center p-4 text-base leading-6 rounded-lg group gap-x-6 hover:bg-lime-700"
                                        >
                                            <div className="flex items-center justify-center flex-none rounded-lg h-11 w-11 bg-gray-50 group-hover:bg-white">
                                                <item.icon className="w-6 h-6 text-gray-600 group-hover:text-yellow-900" aria-hidden="true" />
                                            </div>
                                            <div className="flex-auto ">
                                                <Popover.Button as={Link} href={item.href} className="block font-semibold text-gray-900 hover:text-white">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </Popover.Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={classNames(
                                item.current ? 'bg-lime-700 text-white hover:bg-lime-900' : 'text-gray hover:bg-lime-700 hover:text-white',
                                'px-3 py-2 rounded-md font-semibold cursor-pointer'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                        >
                            {item.name}
                        </Link>
                    ))}
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <div className="flex-shrink-1">
                        <Link
                            href={"/buy-tickets"}
                            className="relative inline-flex items-center px-8 py-2 font-medium text-white bg-yellow-900 border border-transparent rounded-full shadow-sm hover:bg-lime-700"
                        >
                            <span>Buy tickets</span>
                        </Link>
                    </div>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <div className="flex font-bold lg:flex-1">
                            <Link href={'/'} className='cursor-pointer'>
                                WCA World<span className='text-yellow-900'>Coffee</span>Summit 2023
                            </Link>
                        </div>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="flow-root mt-6">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="py-6 space-y-2">
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-lime-700 hover:text-white">
                                                Product
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...dropdown].map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-lime-700 hover:text-white"
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="py-6">
                                <div className="flex-shrink-1">
                                    <Link
                                        href={"/buy-tickets"}
                                        className="relative inline-flex items-center px-8 py-2 font-medium text-white bg-yellow-900 border border-transparent rounded-full shadow-sm hover:bg-lime-700"
                                    >
                                        <span>Buy tickets</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}

export default Navbar;