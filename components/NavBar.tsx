import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const NavBar = ({ currentPage }) => {

    const navigation = [
        { name: 'Partnership', href: '/partnership', current: currentPage === "Partnership" ? true : false },
        { name: 'Contact', href: '/contact', current: currentPage === "Contact" ? true : false },
    ]
    return (
        <Disclosure as="nav" className="sticky top-0 z-50 bg-white drop-shadow-md">
            {({ open }) => (
                <>
                    <div className="px-4 py-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="flex justify-between h-20">
                            <div className="flex">
                                <div className="flex items-center mr-2 -ml-2 md:hidden">
                                    {/* Mobile menu button */}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md hover:bg-yellow-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        {open ? (
                                            <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                {/* Logo icon */}
                                <div className="flex items-center flex-shrink-0 font-bold md:text-2xl">
                                    <a href='/' >
                                        WCA World<span className='text-yellow-900'>Coffee</span>Summit 2023
                                    </a>
                                </div>
                                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-lime-700 text-white hover:bg-lime-900' : 'text-black hover:bg-lime-900 hover:text-white',
                                                'px-3 py-2 rounded-md text-xl font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                    <div className="flex items-center">
                                        <div className="flex-shrink-1">
                                            <button
                                                type="button"
                                                className="relative inline-flex items-center px-8 py-4 text-xl font-medium text-white bg-yellow-900 border border-transparent rounded-full shadow-sm hover:bg-lime-700"
                                            >
                                                <span>Buy tickets</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <Disclosure.Panel className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-lime-700 text-white' : 'text-black hover:bg-lime-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
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

export default NavBar