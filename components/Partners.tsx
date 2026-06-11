"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Partners2025Marquee, WhoAttends } from './WholsInTheRoom'
import { type WhoAttendsLogo } from './whoAttendsLogos'
import partnerHeaderImage from '../images/partners-image/PARTNER-HEADER-IMAGE.jpg'
import partnerImage1 from '../images/partners-image/PARTNER-IMAGE-1.jpg'
import partnerImage2 from '../images/partners-image/PARTNER-IMAGE-2.jpg'
import partnerImage3 from '../images/partners-image/PARTNER-IMAGE-3.jpg'
import becomeAPartnerIcon from '../images/partners-image/icons/become-a-partner.png'
import briefcaseIcon from '../images/partners-image/icons/briefcase.png'
import globeIcon from '../images/partners-image/icons/globe.png'
import peopleIcon from '../images/partners-image/icons/people.png'

const sectionIconClassName = 'h-20 w-20 flex-shrink-0 object-contain sm:h-24 sm:w-24 md:h-28 md:w-28'
const partners2025: WhoAttendsLogo[] = [
  {
    name: 'Okala',
    logo: 'https://softtechs360.com/coffee/wp-content/uploads/2025/07/Okala.png',
    maxHeight: 56,
    maxWidth: 140,
  },
  {
    name: 'Picterra',
    logo: 'https://softtechs360.com/coffee/wp-content/uploads/2025/09/Picterra_Primary_Logo_Dark-1-scaled.png',
    maxHeight: 56,
    maxWidth: 160,
  },
  {
    name: 'Chloris Geospatial',
    logo: 'https://softtechs360.com/coffee/wp-content/uploads/2025/07/Chloris-Geospatial.png',
    maxHeight: 56,
    maxWidth: 120,
  },
  {
    name: 'Planet',
    logo: 'https://softtechs360.com/coffee/wp-content/uploads/2025/07/Planet.png',
    maxHeight: 56,
    maxWidth: 120,
  },
  {
    name: 'Satelligence',
    logo: 'https://softtechs360.com/coffee/wp-content/uploads/2025/08/Satelligence-blue.svg',
    maxHeight: 56,
    maxWidth: 160,
  },
  {
    name: 'Origin Country Exhibitor',
    logo: 'https://softtechs360.com/coffee/wp-content/uploads/2025/10/imageedit_74_8864533329.png',
    maxHeight: 56,
    maxWidth: 120,
  },
  {
    name: 'FoodChain ID',
    logo: 'https://softtechs360.com/coffee/wp-content/uploads/2025/07/FoodChain-ID.webp',
    maxHeight: 56,
    maxWidth: 180,
  },
  {
    name: 'Ubees',
    logo: 'https://softtechs360.com/coffee/wp-content/uploads/2025/09/Ubees-logo-2022_1.avif',
    maxHeight: 56,
    maxWidth: 140,
  },
]

const whyPartnerItems = [
  {
    title: 'SHOWCASE SOLUTIONS & INNOVATION',
    description:
      'Demonstrate technologies, services and solutions to brands, traders, producers and investors actively seeking scalable approaches to resilience, compliance and supply security.',
    image: partnerImage1,
  },
  {
    title: 'LEAD INDUSTRY CONVERSATIONS',
    description:
      "Establish thought leadership and strengthen your authority alongside senior industry leaders through keynotes, curated panels, case studies and deep-dive discussions that position your organisation at the centre of the industry's most important conversations.",
    image: partnerImage2,
  },
  {
    title: 'BUILD STRATEGIC RELATIONSHIPS',
    description:
      'Build meaningful relationships with senior decision-makers from across the global value chain—including brands, traders, producers, investors, policymakers, technology providers and sustainability organisations—through curated networking, hosted lunches, coffee tasting experiences and the exclusive WCIS Networking Soirée at the UK House of Lords.',
    image: partnerImage3,
  },
]

const ctaButtonClassName =
  'inline-flex items-center justify-center rounded-lg bg-teal-700 px-6 py-3 text-base font-bold text-white transition-colors duration-300 hover:bg-teal-800 sm:px-8 sm:text-lg'

const becomePartnerPrimaryButtonClassName =
  'inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-bold text-teal-700 transition-colors duration-300 hover:bg-gray-100 sm:px-8 sm:text-lg'

const becomePartnerSecondaryButtonClassName =
  'inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 text-base font-bold text-white transition-colors duration-300 hover:bg-teal-800 sm:px-8 sm:text-lg'

export default function Partners() {
  return (
    <div className="w-full py-16 sm:py-20" id="partners">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              PARTNER WITH US
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-900 sm:text-xl">
              Position your organisation at the centre of coffee and cocoa resilience,
              supply security and sustainable growth.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/interest" className={ctaButtonClassName}>
                Submit Your Interest
              </Link>
              <Link
                href="mailto:info@worldcoffeealliance.com"
                className={ctaButtonClassName}
              >
                Email Us
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-sm">
            <Image
              src={partnerHeaderImage}
              alt="Panel discussion at World Coffee Innovation Summit"
              className="h-full w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        <div className="mt-20 sm:mt-24">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            WHY PARTNER WITH US?
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {whyPartnerItems.map((item) => (
              <article key={item.title}>
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="aspect-[4/3] w-full object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="mt-5 text-lg font-bold uppercase leading-snug text-teal-700 sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-gray-900">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <section className="mt-20 w-full bg-[#E8F5F2] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {`WHO'S IN THE ROOM`}
          </h2>
          <p className="mx-auto mt-4 max-w-4xl text-center text-lg leading-8 text-gray-900 sm:text-xl">
            A cross-industry ecosystem bringing together senior leaders from business,
            finance, technology, policy and production to address the future of resilient
            supply chains.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            <div className="flex items-start gap-4 md:items-center">
              <Image
                src={peopleIcon}
                alt=""
                className={sectionIconClassName}
                aria-hidden
              />
              <div>
                <p className="text-4xl font-bold text-gray-900 sm:text-5xl">200+</p>
                <p className="mt-2 text-base font-bold text-gray-900 sm:text-lg">
                  Senior leaders from 25+ Countries
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 md:items-center">
              <Image
                src={briefcaseIcon}
                alt=""
                className={sectionIconClassName}
                aria-hidden
              />
              <div>
                <p className="text-4xl font-bold text-gray-900 sm:text-5xl">75%+</p>
                <p className="mt-2 text-base font-bold text-gray-900 sm:text-lg">
                  C-Suite, VP or Director Level
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 md:items-center">
              <Image
                src={globeIcon}
                alt=""
                className={sectionIconClassName}
                aria-hidden
              />
              <p className="text-base leading-7 text-gray-900 sm:text-lg">
                Uniting the entire value chain to accelerate sustainable and inclusive
                growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhoAttends subtitle="Organisations represented include:" />

      <section className="w-full bg-white py-16 sm:py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            2025 PARTNERS INCLUDE :
          </h2>
          <Partners2025Marquee logos={partners2025} />
        </div>
      </section>

      <section className="w-full bg-teal-700">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-10 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Image
              src={becomeAPartnerIcon}
              alt=""
              className="h-16 w-16 flex-shrink-0 object-contain sm:h-20 sm:w-20"
              aria-hidden
            />
            <div>
              <h2 className="text-xl font-bold text-white sm:text-2xl">BECOME A PARTNER</h2>
              <p className="mt-1 text-base text-white sm:text-lg">
                Interested in partnering with WCIS?
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link href="/interest" className={`${becomePartnerPrimaryButtonClassName} w-full sm:w-auto`}>
              Submit Your Interest
            </Link>
            <Link
              href="mailto:info@worldcoffeealliance.com"
              className={`${becomePartnerSecondaryButtonClassName} w-full sm:w-auto`}
            >
              Email Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
