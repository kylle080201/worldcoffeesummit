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
  /** Optional wrapper for logos that need a light background (e.g. Aon on black). */
  logoWrapperClassName?: string
}

export type Partners2026Tier = {
  heading: string
  logos: Partners2026Logo[]
  /** Default: single centered logo; `row` for side-by-side (e.g. bronze sponsors). */
  layout?: 'single' | 'row'
}

export const partners2026Tiers: Partners2026Tier[] = [
  {
    heading: 'Silver Sponsor',
    logos: [
      {
        name: 'osapiens',
        src: osapiensLogo,
        maxHeight: 110,
        maxWidth: 400,
      },
    ],
  },
  {
    heading: 'Bronze Sponsors',
    layout: 'row',
    logos: [
      {
        name: 'Aon',
        src: aonLogo,
        maxHeight: 44,
        maxWidth: 120,
        logoWrapperClassName: 'rounded-md bg-white px-6 py-4',
      },
      {
        name: 'Proba',
        src: probaLogo,
        maxHeight: 72,
        maxWidth: 200,
      },
    ],
  },
  {
    heading: 'Sustainable Coffee Sponsor',
    logos: [
      {
        name: 'Green Coffee Company',
        src: gccLogo,
        maxHeight: 160,
        maxWidth: 160,
      },
    ],
  },
  {
    heading: 'Exhibitors',
    logos: [
      {
        name: 'Preferred by Nature',
        src: preferredByNatureLogo,
        maxHeight: 110,
        maxWidth: 340,
      },
    ],
  },
  {
    heading: 'Media & Marketing Partners',
    layout: 'row',
    logos: [
      {
        name: 'Daily Coffee News by Roast Magazine',
        src: dailyCoffeeNewsLogo,
        maxHeight: 88,
        maxWidth: 220,
      },
      {
        name: 'international Comunicaffe',
        src: comunicaffeLogo,
        maxHeight: 72,
        maxWidth: 220,
      },
      {
        name: 'Perfect Daily Grind',
        src: perfectDailyGrindLogo,
        maxHeight: 100,
        maxWidth: 280,
      },
    ],
  },
]
