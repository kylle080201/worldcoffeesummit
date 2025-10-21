"use client"
import { Disclosure, Menu, Transition, Dialog } from '@headlessui/react'
import { Bars3Icon, ClockIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons'
import React, { Fragment, useState } from 'react'
import { useRouter } from 'next/navigation'

function Navbar() {
  const router = useRouter()
  const [openNotice, setOpenNotice] = useState(false)

  const navigation = [
    { name: 'Overview', href: '/#overview' },
    { name: 'Speakers', href: '/#speakers', dropdown: true }, // 👈 special
    { name: 'Agenda', href: '/agenda' },
    { name: 'Venue', href: '/venue' },
    { name: 'Partners', href: '/#partners' },
    { name: 'Resources', href: '/resources' },
    { name: 'FAQ', href: '/faq' },
  ]

  return (
    <Disclosure as="nav" className="w-full bg-white shadow">
      {({ open }) => (
        <>
          {/* Logo + Desktop Nav */}
          <div className="justify-center flex-shrink-0 w-full mx-auto px-12">
            <div className="flex w-full h-16 sm:h-32">
              <div className="flex w-full sm:justify-between">

                {/* Mobile logo + hamburger */}
                <div className="flex items-center mr-2 -ml-2 sm:hidden justify-between w-full">
                  <Link href='/'>
                    <img
                      className="flex-shrink-0 flex md:hidden w-32 h-auto lg:w-64"
                      src="https://worldcoffeealliance.com/wp-content/uploads/2024/04/world-coffee-innovation-summit-high-resolution-logo-transparent-1.png"
                      alt="WCS Logo"
                    />
                  </Link>
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lime-700">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                {/* Desktop logo */}
                <div className="flex items-center">
                  <Link href='/'>
                    <img
                      className="flex-shrink-0 hidden w-32 h-auto lg:w-64 md:flex"
                      src="https://worldcoffeealliance.com/wp-content/uploads/2024/04/world-coffee-innovation-summit-high-resolution-logo-transparent-1.png"
                      alt="WCS Logo"
                    />
                  </Link>
                </div>

                {/* Desktop Nav Menu */}
                <div className="hidden max-w-5xl mx-auto sm:flex">
                  {navigation.map((item) =>
                    item.dropdown ? (
                      <Menu as="div" key={item.name} className="relative inline-flex items-end">

                        {({ open }) => (
                          <>
                            <Menu.Button className="inline-flex items-center px-2 pb-4 text-sm font-bold text-gray-900 lg:text-md lg:px-4 hover:border-b-2 hover:border-lime-700">
                              {item.name}
                              <ChevronDownIcon
                                className={`ml-1 h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`}
                                aria-hidden="true"
                              />
                            </Menu.Button>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                             <Menu.Items className="absolute left-0 top-full mt-2 w-48 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">

                                <div className="py-1">
                                  <Menu.Item>
                                    {({ active }) => (
                                      <Link
                                        href="/#advisory"
                                        className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} block px-4 py-2 text-sm`}
                                      >
                                        Advisory Board
                                      </Link>
                                    )}
                                  </Menu.Item>
                                  <Menu.Item>
                                    {({ active }) => (
                                      <Link
                                        href="/#speakers"
                                        className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} block px-4 py-2 text-sm`}
                                      >
                                        Speaker
                                      </Link>
                                    )}
                                  </Menu.Item>
                                </div>
                              </Menu.Items>
                            </Transition>
                          </>
                        )}
                      </Menu>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="inline-flex items-end px-2 pb-4 text-sm font-bold text-gray-900 lg:text-md lg:px-4 hover:border-b-2 hover:border-lime-700"
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </div>

                {/* Desktop Right Side Buttons */}
                <div className="hidden my-auto sm:flex">
                  <div className="flex flex-col items-start">
                    <div className='flex flex-wrap items-center'>
                      <div className='flex-wrap'>
                        <Link href='mailto:info@worldcoffeealliance.com' className='mr-2 font-semibold underline text-md text-gray-900'>Get in touch</Link>
                      </div>
                      <div className='flex gap-x-2'>
                        <SocialIcon url="https://www.linkedin.com/company/worldcoffeealliance/" style={{ height: 40, width: 40 }} target='_blank' />
                        <SocialIcon url="https://www.x.com/WCoffeeAlliance" style={{ height: 40, width: 40 }} target='_blank' />
                        <SocialIcon url="https://www.youtube.com/channel/UCbUTtqgxTtQj9nkKTAf_AQg" style={{ height: 40, width: 40 }} target='_blank' />
                        <SocialIcon url="https://www.instagram.com/worldcoffeealliancehq/" style={{ height: 40, width: 40 }} target='_blank' />
                      </div>
                    </div>
                    <div className='mt-4 flex gap-2'>
                      <button
                        onClick={() => router.push('/register')}
                        className="relative inline-flex gap-x-1.5 rounded-md bg-lime-700 hover:bg-lime-900 px-3 py-2 text-sm font-semibold text-white shadow-sm"
                      >
                        Book Tickets
                      </button>
                      <button
                        onClick={() => router.push('/interest')}
                        className="relative inline-flex gap-x-1.5 rounded-md bg-lime-700 hover:bg-lime-900 px-3 py-2 text-sm font-semibold text-white shadow-sm"
                      >
                        Sponsor/Exhibit
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Mobile Nav */}
          <Disclosure.Panel className="md:hidden py-5">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((item) =>
                item.dropdown ? (
                  <div key="mobile-speakers" className="pl-3">
                    <p className="font-bold text-gray-900">Speakers</p>
                    <div className="ml-3 space-y-1">
                      <Link href="/#advisory-board" className="block py-2 text-gray-600">Advisory Board</Link>
                      <Link href="/speakers" className="block py-2 text-gray-600">Speaker</Link>
                    </div>
                  </div>
                ) : (
                  <Disclosure.Button
                    as='a'
                    key={item.name}
                    href={item.href}
                    className='block py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                  >
                    {item.name}
                  </Disclosure.Button>
                )
              )}
            </div>
                                <div className='mt-4 flex gap-2'>
                      <button
                        onClick={() => router.push('/register')}
                        className="relative inline-flex gap-x-1.5 rounded-md bg-lime-700 hover:bg-lime-900 px-3 py-2 text-sm font-semibold text-white shadow-sm"
                      >
                        Book Tickets
                      </button>
                      <button
                        onClick={() => router.push('/interest')}
                        className="relative inline-flex gap-x-1.5 rounded-md bg-lime-700 hover:bg-lime-900 px-3 py-2 text-sm font-semibold text-white shadow-sm"
                      >
                        Sponsor/Exhibit
                      </button>
                    </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar
