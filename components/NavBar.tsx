"use client"
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons'
import React from 'react'
import { useRouter } from 'next/navigation'

type NavItem = {
  name: string
  href?: string
  children?: { name: string; href: string }[]
}

function Navbar() {
  const router = useRouter()
  const navigation: NavItem[] = [
    { name: 'Overview', href: '/#overview' },
    { name: 'Speakers', href: '/speakers' },
    { name: 'Agenda', href: '/agenda#agenda-2026' },
    { name: 'Venue', href: '/venue' },
    { name: 'Partners', href: '/partners' },
    { name: 'Newsroom', href: '/newsroom' },
    { name: 'About', href: '/about-wcis' },
  ]

  const navLinkClassName =
    'inline-flex items-end px-2 pb-4 text-sm font-bold text-gray-900 sm:text-base lg:px-4 lg:text-lg hover:border-b-2 hover:border-lime-700'

  const navButtonClassName =
    'relative inline-flex items-center justify-center gap-x-1.5 rounded-md bg-lime-700 px-3 py-2 text-sm font-bold text-white shadow-sm hover:bg-lime-900 sm:px-4 sm:py-2.5 sm:text-base lg:text-lg'

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
                <div className="hidden max-w-5xl mx-auto sm:flex sm:items-end">
                  {navigation.map((item) =>
                    item.children ? (
                      <div key={item.name} className="group relative inline-flex items-end self-end">
                        <button
                          type="button"
                          className={navLinkClassName}
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {item.name}
                        </button>
                        <div className="invisible absolute left-0 top-full z-20 min-w-[10rem] pt-1 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                          <div className="rounded-md border border-gray-100 bg-white py-1 shadow-lg">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 hover:text-lime-800"
                            >
                              {child.name}
                            </Link>
                          ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link key={item.name} href={item.href!} className={navLinkClassName}>
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
                        className={navButtonClassName}
                      >
                        Register Now
                      </button>
                      <button
                        onClick={() => router.push('/interest')}
                        className={navButtonClassName}
                      >
                        Sponsor or Exhibit
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
                item.children ? (
                  <div key={item.name}>
                    <p className="py-2 pl-3 pr-4 text-lg font-bold text-gray-900">
                      {item.name}
                    </p>
                    {item.children.map((child) => (
                      <Disclosure.Button
                        as="a"
                        key={child.name}
                        href={child.href}
                        className="block py-2 pl-6 pr-4 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                      >
                        {child.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                ) : (
                  <Disclosure.Button
                    as="a"
                    key={item.name}
                    href={item.href}
                    className="block py-2 pl-3 pr-4 text-lg font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                  >
                    {item.name}
                  </Disclosure.Button>
                )
              )}
            </div>
            <div className="mt-4 flex flex-col gap-2 pl-3">
              <button
                onClick={() => router.push('/register')}
                className={`${navButtonClassName} w-fit`}
              >
                Register Now
              </button>
              <button
                onClick={() => router.push('/interest')}
                className={`${navButtonClassName} w-fit`}
              >
                Sponsor or Exhibit
              </button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar
