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

const tierBoxClass =
  'flex h-full min-h-[200px] flex-col overflow-hidden border border-gray-300 bg-white sm:min-h-[220px]'

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
      sizes={compact ? '120px' : `(max-width: 768px) 80vw, ${maxWidth}px`}
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
    <article className={tierBoxClass}>
      <div className="shrink-0 px-4 pt-5 pb-3">
        <p className={tierTitleClass}>{tier.heading}</p>
        <div className="mx-auto mt-3 h-px w-10 bg-gray-400" aria-hidden="true" />
      </div>

      {isSplit ? (
        <div className="flex min-h-0 flex-1 items-center justify-center gap-3 px-2 py-5 sm:gap-4 sm:px-3 sm:py-6">
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
        <div className="flex min-h-0 flex-1 items-center justify-center px-4 py-6">
          <PartnerLogo logo={tier.logos[0]} />
        </div>
      )}
    </article>
  )
}

function MediaPartnerCard({ logo }: { logo: Partners2026Logo }) {
  return (
    <div
      className={`${tierBoxClass} min-h-[160px] items-center justify-center sm:min-h-[180px]`}
    >
      <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden px-4 py-8">
        <PartnerLogo logo={logo} />
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
      <div className="w-full px-4 py-10 sm:px-8 sm:py-12 lg:px-12">
        <h2 id="partners-2026-heading" className={partnersPageSectionHeadingClass}>
          2026 Sponsors &amp; Partners
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3">
          {sponsors2026Grid.map((tier) => (
            <SponsorTierCard key={tier.heading} tier={tier} />
          ))}
        </div>

        <div className="mt-12 sm:mt-14">
          <h3 className="text-center text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
            Media &amp; Marketing
            <br />
            Partners
          </h3>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-3">
            {mediaPartners2026.map((logo) => (
              <MediaPartnerCard key={logo.name} logo={logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
