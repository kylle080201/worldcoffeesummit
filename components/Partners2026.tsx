'use client'

import Image, { type StaticImageData } from 'next/image'
import React from 'react'

import { partners2026Tiers, type Partners2026Logo } from './partners2026Tiers'

const partnersPageSectionHeadingClass =
  'text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'

function isStaticImage(src: StaticImageData | string): src is StaticImageData {
  return typeof src !== 'string'
}

function PartnerLogo({ logo }: { logo: Partners2026Logo }) {
  const maxHeight = logo.maxHeight ?? 72
  const maxWidth = logo.maxWidth ?? 240
  const imageClassName = 'h-auto w-auto max-h-full max-w-full object-contain'

  const image = isStaticImage(logo.src) ? (
    <Image
      src={logo.src}
      alt={logo.name}
      className={imageClassName}
      style={{ maxHeight, maxWidth }}
      sizes={`(max-width: 768px) 80vw, ${maxWidth}px`}
    />
  ) : (
    <img
      src={logo.src}
      alt={logo.name}
      className={imageClassName}
      style={{ maxHeight, maxWidth }}
      loading="lazy"
    />
  )

  if (logo.logoWrapperClassName) {
    return (
      <div className={`flex items-center justify-center ${logo.logoWrapperClassName}`}>
        {image}
      </div>
    )
  }

  return image
}

export default function Partners2026() {
  return (
    <section className="mt-20 sm:mt-24" aria-labelledby="partners-2026-heading">
      <h2 id="partners-2026-heading" className={partnersPageSectionHeadingClass}>
        2026 PARTNERS
      </h2>

      <div className="mt-14 space-y-14 sm:mt-16 sm:space-y-16">
        {partners2026Tiers.map((tier) => (
          <div key={tier.heading}>
            <h3 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
              {tier.heading}
            </h3>
            <div
              className={
                tier.layout === 'row'
                  ? 'mt-8 flex flex-wrap items-center justify-center gap-10 sm:gap-14 md:gap-16'
                  : 'mt-8 flex justify-center px-4'
              }
            >
              {tier.logos.map((logo) => (
                <div
                  key={logo.name}
                  className="flex items-center justify-center"
                  style={{
                    minHeight: logo.maxHeight ?? 72,
                    maxWidth: tier.layout === 'row' ? logo.maxWidth ?? 240 : undefined,
                  }}
                >
                  <PartnerLogo logo={logo} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
