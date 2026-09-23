import type { StaticImageData } from 'next/image'

import brazilFlag from '../images/country-flags/Brazil.png'
import unitedKingdomFlag from '../images/country-flags/United Kingdom.png'
import colombiaFlag from '../images/country-flags/Colombia.png'
import costaRicaFlag from '../images/country-flags/Costa Rica.png'
import ecuadorFlag from '../images/country-flags/Ecuador.png'
import guatemalaFlag from '../images/country-flags/Guatemala.png'
import indonesiaFlag from '../images/country-flags/Indonesia.png'
import panamaFlag from '../images/country-flags/Panama.png'
import rwandaFlag from '../images/country-flags/Rwanda.png'
import sierraLeoneFlag from '../images/country-flags/Sierra Leone.png'
import tanzaniaFlag from '../images/country-flags/Tanzania.png'

export type GovernmentRepresentationCountry = {
  name: string
  flag: StaticImageData
  /** Steps relative to default flag height (−1 smaller, +1 bigger). */
  flagSizeOffset?: number
}

/** Display order for the homepage government representation marquee. */
export const governmentRepresentationCountries: GovernmentRepresentationCountry[] = [
  { name: 'United Kingdom', flag: unitedKingdomFlag, flagSizeOffset: -1 },
  { name: 'Brazil', flag: brazilFlag },
  { name: 'Colombia', flag: colombiaFlag },
  { name: 'Indonesia', flag: indonesiaFlag, flagSizeOffset: 1 },
  { name: 'Tanzania', flag: tanzaniaFlag },
  { name: 'Ecuador', flag: ecuadorFlag },
  { name: 'Rwanda', flag: rwandaFlag },
  { name: 'Costa Rica', flag: costaRicaFlag },
  { name: 'Guatemala', flag: guatemalaFlag },
  { name: 'Panama', flag: panamaFlag },
  { name: 'Sierra Leone', flag: sierraLeoneFlag },
]
