'use client'

import Image from 'next/image'
import React from 'react'

import {
  governmentRepresentationCountries,
  type GovernmentRepresentationCountry,
} from './governmentRepresentationFlags'

const MARQUEE_DURATION_SECONDS = 75
const FLAG_SIZE_CLASS_BY_OFFSET: Record<number, string> = {
  [-1]: 'h-[66px] sm:h-[72px]',
  0: 'h-[78px] sm:h-[84px]',
  1: 'h-[90px] sm:h-[96px]',
}

function FlagItem({
  country,
  copyIndex,
}: {
  country: GovernmentRepresentationCountry
  copyIndex: number
}) {
  const sizeOffset = country.flagSizeOffset ?? 0
  const flagSizeClass = FLAG_SIZE_CLASS_BY_OFFSET[sizeOffset] ?? FLAG_SIZE_CLASS_BY_OFFSET[0]

  return (
    <div
      className="flex shrink-0 items-center gap-3 px-6 sm:px-8"
      aria-hidden={copyIndex !== 0}
    >
      <Image
        src={country.flag}
        alt={copyIndex === 0 ? `${country.name} flag` : ''}
        className={`w-auto object-contain ${flagSizeClass}`}
        sizes="84px"
      />
      <span className="whitespace-nowrap text-lg font-medium text-gray-900 sm:text-xl">
        {country.name}
      </span>
    </div>
  )
}

export default function GovernmentRepresentation() {
  const countries = governmentRepresentationCountries

  if (countries.length === 0) {
    return null
  }

  return (
    <section
      className="w-full bg-[#EEF3E8] px-4 py-6 sm:px-6 sm:py-8"
      aria-label="Government representatives"
    >
      <p className="text-center text-xl font-semibold text-[#173D2B] sm:text-2xl">
        GOVERNMENT REPRESENTATIVES
      </p>

      <div className="relative mt-5 overflow-hidden">
        <div
          className="flex w-max animate-marquee-loop items-center"
          style={{ animationDuration: `${MARQUEE_DURATION_SECONDS}s` }}
        >
          {[0, 1].map((copyIndex) =>
            countries.map((country) => (
              <FlagItem
                key={`${copyIndex}-${country.name}`}
                country={country}
                copyIndex={copyIndex}
              />
            )),
          )}
        </div>
      </div>
    </section>
  )
}
