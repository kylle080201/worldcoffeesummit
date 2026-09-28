import type { StaticImageData } from 'next/image'

import aonLogo from '../images/2026-speakers/Aon-Dominic-Probyn/new-aon-logo.png'
import gccLogo from '../images/2026-partners/LOGO-original-GCC (1).png'
import osapiensLogo from '../images/2026-partners/logo_osapiens_horizontal_halfblack.png'
import preferredByNatureLogo from '../images/2026-partners/Preferred_by_Nature_Green_CMYK.png'
import probaLogo from '../images/2026-partners/ProbaPositive.png'
import comunicaffeLogo from '../images/2026-partners/media-and-marketing-partners/comunicaffe-international.png'
import dailyCoffeeNewsLogo from '../images/2026-partners/media-and-marketing-partners/daily-coffee-news.png'
import perfectDailyGrindLogo from '../images/2026-partners/media-and-marketing-partners/pdg-events-logo.png'

export type Partners2026Logo = {
  name: string
  src: StaticImageData | string
  maxHeight?: number
  maxWidth?: number
  logoWrapperClassName?: string
}

export type Sponsors2026Tier = {
  heading: string
  logos: Partners2026Logo[]
  /** Bronze tier: two logos side-by-side with a vertical divider. */
  layout?: 'single' | 'split'
  /** Optional grid placement below lg (bronze spans full row on tablet). */
  gridClassName?: string
}

export const sponsors2026Grid: Sponsors2026Tier[] = [
  {
    heading: 'Silver Sponsor',
    logos: [
      {
        name: 'osapiens',
        src: osapiensLogo,
        maxHeight: 142,
        maxWidth: 480,
      },
    ],
  },
  {
    heading: 'Bronze Sponsors',
    layout: 'split',
    gridClassName: 'sm:col-span-2 lg:col-span-1',
    logos: [
      {
        name: 'Aon',
        src: aonLogo,
        maxHeight: 38,
        maxWidth: 92,
        logoWrapperClassName: 'bg-white px-2 py-1.5',
      },
      {
        name: 'Proba',
        src: probaLogo,
        maxHeight: 54,
        maxWidth: 120,
      },
    ],
  },
  {
    heading: 'Sustainable Coffee Sponsor',
    logos: [
      {
        name: 'Green Coffee Company',
        src: gccLogo,
        maxHeight: 132,
        maxWidth: 132,
      },
    ],
  },
  {
    heading: 'Exhibitor',
    logos: [
      {
        name: 'Preferred by Nature',
        src: preferredByNatureLogo,
        maxHeight: 96,
        maxWidth: 280,
      },
    ],
  },
]

export const mediaPartners2026: Partners2026Logo[] = [
  {
    name: 'Daily Coffee News by Roast Magazine',
    src: dailyCoffeeNewsLogo,
    maxHeight: 58,
    maxWidth: 168,
  },
  {
    name: 'international Comunicaffe',
    src: comunicaffeLogo,
    maxHeight: 48,
    maxWidth: 152,
  },
  {
    name: 'Perfect Daily Grind',
    src: perfectDailyGrindLogo,
    maxHeight: 60,
    maxWidth: 176,
  },
]
