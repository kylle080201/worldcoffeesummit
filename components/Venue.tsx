import {
  ArrowRightIcon,
  BuildingOffice2Icon,
  MapPinIcon,
} from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'

const sectionLabelClassName =
  'text-sm font-bold uppercase tracking-wide text-lime-700 sm:text-base'

const ctaButtonClassName =
  'inline-flex items-center justify-center rounded-lg bg-lime-700 px-8 py-3 text-lg font-bold text-white transition-colors duration-300 hover:bg-lime-800 sm:px-10 sm:py-4 sm:text-xl'

const outlineButtonClassName =
  'inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-3 text-lg font-bold text-white transition-colors duration-300 hover:bg-white/10 sm:px-10 sm:py-4 sm:text-xl'

const introPrimaryButtonClassName =
  'inline-flex items-center gap-2 rounded-lg bg-lime-700 px-5 py-2.5 text-base font-bold text-white transition-colors duration-300 hover:bg-lime-800 sm:px-6 sm:py-3 sm:text-lg'

const introOutlineButtonClassName =
  'inline-flex items-center gap-2 rounded-lg border-2 border-lime-700 bg-white px-5 py-2.5 text-base font-bold text-lime-700 transition-colors duration-300 hover:bg-lime-50 sm:px-6 sm:py-3 sm:text-lg'

function VenueImage({
  src,
  alt,
  priority = false,
}: {
  src: string
  alt: string
  priority?: boolean
}) {
  return (
    <div className="relative h-full min-h-[16rem] overflow-hidden sm:min-h-[20rem] lg:min-h-0 lg:absolute lg:inset-0">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 58vw"
        priority={priority}
      />
    </div>
  )
}

const venueTextColumnClassName = 'py-10 sm:py-12 lg:py-14'

const venueImageColumnClassName = 'relative h-full min-h-[16rem] sm:min-h-[20rem] lg:min-h-0'

function VenueAddress({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 flex items-start gap-2 text-lg font-bold text-gray-900 sm:text-xl">
      <MapPinIcon className="mt-1 h-5 w-5 shrink-0 text-lime-700 sm:h-6 sm:w-6" aria-hidden="true" />
      <span>{children}</span>
    </p>
  )
}

function PlanningCard({
  href,
  icon: Icon,
  title,
  description,
  footnote,
}: {
  href: string
  icon: typeof BuildingOffice2Icon
  title: string
  description: string
  footnote?: string
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className="group flex items-stretch gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:gap-6 sm:p-8"
    >
      <div className="flex h-14 w-14 shrink-0 items-center justify-center self-center rounded-full bg-lime-700 sm:h-16 sm:w-16">
        <Icon className="h-7 w-7 text-white sm:h-8 sm:w-8" aria-hidden="true" />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">{title}</h3>
        <p className="mt-3 text-base leading-7 text-gray-700 sm:mt-4 sm:text-lg">{description}</p>
        {footnote ? (
          <p className="mt-3 text-xs leading-6 text-gray-700 sm:mt-4 sm:text-base">{footnote}</p>
        ) : null}
      </div>
      <ArrowRightIcon
        className="h-7 w-7 shrink-0 self-end text-lime-700 transition-transform group-hover:translate-x-1 sm:h-8 sm:w-8"
        aria-hidden="true"
      />
    </Link>
  )
}

export default function Venue() {
  return (
    <div className="w-full" id="venue">
      <section className="bg-white px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <div className={`lg:col-span-5 ${venueTextColumnClassName}`}>
            <p className={sectionLabelClassName}>VENUE &amp; NETWORKING —</p>
            <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              At the Heart of Westminster
            </h1>
            <div className="mt-6 space-y-4 text-lg leading-normal text-gray-900 sm:text-xl">
              <p>
                WCIS takes place at the QEII Centre, located in the heart of Westminster,
                bringing together leaders from across coffee, cocoa, finance, policy and technology.
              </p>
              <p>
                The event concludes with the exclusive WCIS Networking Soirée at the House of Lords.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="https://qeiicentre.london/about/location/"
                target="_blank"
                className={introPrimaryButtonClassName}
              >
                View Venue
                <MapPinIcon className="h-5 w-5 shrink-0" aria-hidden="true" />
              </Link>
              <Link
                href="https://qeiicentre.london/about/hotels/"
                target="_blank"
                className={introOutlineButtonClassName}
              >
                Recommended Hotels
                <BuildingOffice2Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className={`${venueImageColumnClassName} lg:col-span-7`}>
            <VenueImage
              src="/images/venue/at-the-hear-of-westminster.jpg"
              alt="Panel discussion at World Coffee Innovation Summit"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-100 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <div className={`lg:col-span-5 ${venueTextColumnClassName}`}>
            <p className={sectionLabelClassName}>THE SUMMIT VENUE —</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">QEII Centre</h2>
            <VenueAddress>
              Broad Sanctuary, Westminster London SW1P 3EE, United Kingdom
            </VenueAddress>
            <div className="mt-6 space-y-4 text-lg leading-normal text-gray-900 sm:text-xl">
              <p>
                The UK&apos;s premier conference and events venue, located in the heart of Westminster.
              </p>
              <p>
                Purpose-built for high-level international events, the QEII Centre provides
                state-of-the-art facilities and a professional environment for two days of strategic
                discussions and networking.
              </p>
            </div>
          </div>
          <div className={`${venueImageColumnClassName} lg:col-span-7`}>
            <VenueImage
              src="https://worldcoffeealliance.com/wp-content/uploads/2024/05/qeii-vac2021-071021-hires-1039-1080x675.jpg.webp"
              alt="QEII Centre exterior"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <div className={`lg:order-1 lg:col-span-7 ${venueImageColumnClassName}`}>
            <VenueImage
              src="/images/venue/house-of-lords.jpg"
              alt="WCIS Networking Soirée at the House of Lords"
            />
          </div>
          <div className={`lg:order-2 lg:col-span-5 ${venueTextColumnClassName}`}>
            <p className={sectionLabelClassName}>EXCLUSIVE NETWORKING SOIRÉE —</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              House of Lords
            </h2>
            <VenueAddress>
              Houses of Parliament Parliament Sq, London SW1A 0PW, United Kingdom
            </VenueAddress>
            <div className="mt-6 space-y-4 text-lg leading-normal text-gray-900 sm:text-xl">
              <p>
                Selected delegates are invited to an exclusive evening reception at the House of Lords.
              </p>
              <p>
                This unique setting offers an unparalleled opportunity to connect with senior leaders
                from across the coffee and cocoa value chains, as well as finance, policy and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-100/40 px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-2xl font-bold tracking-tight text-lime-700 sm:text-3xl">
            — PLANNING YOUR VISIT —
          </h2>
          <p className="mt-3 text-center text-lg text-gray-700 sm:text-xl">
            Everything you need to plan your trip to WCIS
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            <PlanningCard
              href="https://qeiicentre.london/about/hotels/"
              icon={BuildingOffice2Icon}
              title="Recommended Hotels"
              description="A curated list of recommended hotels recommended by the QEII Centre."
              footnote="* For your reference only, you can book from other platforms"
            />
            <PlanningCard
              href="https://qeiicentre.london/about/location/"
              icon={MapPinIcon}
              title="Venue Directions"
              description="Find the QEII Centre, explore transport options and get detailed directions."
            />
          </div>
        </div>
      </section>

      <section className="bg-emerald-900 px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start text-left">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to join us in London?</h2>
          <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <Link href="/register" className={ctaButtonClassName}>
              Register Now
            </Link>
            <Link href="/interest" className={outlineButtonClassName}>
              Sponsor or Exhibit
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
