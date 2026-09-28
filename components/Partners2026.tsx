'use client'

import Image, { type StaticImageData } from 'next/image'
import React from 'react'

import {
  mediaPartners2026,
  sponsors2026Grid,
  type Partners2026Logo,
  type Sponsors2026Tier,
} from './partners2026Tiers'

const partnersPageSectionHeadingClass =
  'text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'

const tierTitleClass =
  'text-center text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 sm:text-sm'

/** Equal height for all sponsor tier frames on large screens. */
const sponsorTierBoxClass =
  'flex h-full flex-col overflow-hidden border border-gray-300 bg-white'

const sponsorRowHeightClass =
  'h-[220px] sm:h-[228px] lg:h-[236px]'

const sponsorGridClass =
  'mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.68fr)_minmax(0,0.88fr)_minmax(0,0.82fr)] lg:items-stretch lg:gap-3'

function isStaticImage(src: StaticImageData | string): src is StaticImageData {
  return typeof src !== 'string'
}

function PartnerLogo({
  logo,
  compact = false,
}: {
  logo: Partners2026Logo
  compact?: boolean
}) {
  const maxHeight = logo.maxHeight ?? 72
  const maxWidth = logo.maxWidth ?? 240
  const imageClassName = 'h-auto w-auto max-h-full max-w-full object-contain'

  const image = isStaticImage(logo.src) ? (
    <Image
      src={logo.src}
      alt={logo.name}
      className={imageClassName}
      style={{ maxHeight, maxWidth }}
      sizes={compact ? '200px' : `(max-width: 768px) 80vw, ${maxWidth}px`}
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

  const content = logo.logoWrapperClassName ? (
    <div className={`flex items-center justify-center ${logo.logoWrapperClassName}`}>
      {image}
    </div>
  ) : (
    image
  )

  return (
    <div className={compact ? 'flex w-full max-w-full items-center justify-center' : undefined}>
      {content}
    </div>
  )
}

function SponsorTierCard({ tier }: { tier: Sponsors2026Tier }) {
  const isSplit = tier.layout === 'split'

  return (
    <article
      className={`${sponsorTierBoxClass} ${sponsorRowHeightClass} ${tier.gridClassName ?? ''}`}
    >
      <div className="shrink-0 px-3 pt-4 pb-2 sm:px-4 sm:pt-5 sm:pb-3">
        <p className={tierTitleClass}>{tier.heading}</p>
        <div className="mx-auto mt-2 h-px w-10 bg-gray-400 sm:mt-3" aria-hidden="true" />
      </div>

      {isSplit ? (
        <div className="flex min-h-0 flex-1 items-center justify-center gap-3 px-2 py-3 sm:gap-5 sm:px-4 sm:py-4">
          <div className="flex min-w-0 flex-1 items-center justify-center overflow-hidden">
            <PartnerLogo logo={tier.logos[0]} compact />
          </div>
          <div
            className="h-12 w-px shrink-0 self-center bg-gray-400 sm:h-14"
            aria-hidden="true"
          />
          <div className="flex min-w-0 flex-1 items-center justify-center overflow-hidden">
            <PartnerLogo logo={tier.logos[1]} compact />
          </div>
        </div>
      ) : (
        <div className="flex min-h-0 flex-1 items-center justify-center px-3 py-4 sm:px-4 sm:py-5">
          <PartnerLogo logo={tier.logos[0]} />
        </div>
      )}
    </article>
  )
}

function MediaPartnerCard({ logo }: { logo: Partners2026Logo }) {
  return (
    <div
      className="flex h-[100px] w-full flex-col overflow-hidden border border-gray-300 bg-white sm:h-[112px]"
    >
      <div className="flex h-full items-center justify-center overflow-hidden px-3 py-2 sm:px-4">
        <PartnerLogo logo={logo} compact />
      </div>
    </div>
  )
}

export default function Partners2026() {
  return (
    <section
      className="mt-20 w-full sm:mt-24"
      aria-labelledby="partners-2026-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="partners-2026-heading" className={partnersPageSectionHeadingClass}>
          2026 Sponsors &amp; Partners
        </h2>

        <div className={sponsorGridClass}>
          {sponsors2026Grid.map((tier) => (
            <SponsorTierCard key={tier.heading} tier={tier} />
          ))}
        </div>

        <div className="mt-10 sm:mt-12">
          <div className="pb-1">
            <p className={`${tierTitleClass} whitespace-nowrap`}>
              Media &amp; Marketing Partners
            </p>
            <div
              className="mx-auto mt-2 h-px w-10 bg-gray-400 sm:mt-3"
              aria-hidden="true"
            />
          </div>

          <div className="mx-auto mt-5 grid max-w-xl grid-cols-1 gap-3 sm:mt-6 sm:max-w-3xl sm:grid-cols-3 sm:gap-4">
            {mediaPartners2026.map((logo) => (
              <MediaPartnerCard key={logo.name} logo={logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
