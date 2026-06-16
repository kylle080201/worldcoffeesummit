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

function VenueImage({
  src,
  alt,
  ratioClassName,
  priority = false,
}: {
  src: string
  alt: string
  ratioClassName: string
  priority?: boolean
}) {
  return (
    <div className={`relative w-full ${ratioClassName}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority={priority}
      />
    </div>
  )
}

const venueTextColumnClassName = 'px-4 py-10 sm:px-6 sm:py-12 lg:py-16'

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
      <section className="bg-white lg:grid lg:grid-cols-8 lg:items-center">
        <div className={`${venueTextColumnClassName} lg:col-span-3 lg:pl-8 lg:pr-8`}>
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
        </div>
        <div className="lg:col-span-5">
          <VenueImage
            src="/images/venue/at-the-hear-of-westminster.jpg"
            alt="Panel discussion at World Coffee Innovation Summit"
            ratioClassName="aspect-[1066/665]"
            priority
          />
        </div>
      </section>

      <section className="bg-gray-100 lg:grid lg:grid-cols-8 lg:items-center">
        <div className={`${venueTextColumnClassName} lg:col-span-4 lg:pl-8 lg:pr-8`}>
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
        <div className="lg:col-span-4">
          <VenueImage
            src="https://worldcoffeealliance.com/wp-content/uploads/2024/05/qeii-vac2021-071021-hires-1039-1080x675.jpg.webp"
            alt="QEII Centre exterior"
            ratioClassName="aspect-[1080/675]"
          />
        </div>
      </section>

      <section className="bg-white lg:grid lg:grid-cols-8 lg:items-center">
        <div className="lg:col-span-4">
          <VenueImage
            src="/images/venue/house-of-lords.jpg"
            alt="WCIS Networking Soirée at the House of Lords"
            ratioClassName="aspect-[3/2]"
          />
        </div>
        <div className={`${venueTextColumnClassName} lg:col-span-4 lg:pl-8 lg:pr-8`}>
          <p className={sectionLabelClassName}>EXCLUSIVE NETWORKING SOIRÉE —</p>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            House of Lords
          </h2>
          <VenueAddress>
            Houses of Parliament Parliament Sq, London SW1A 0PW, United Kingdom
          </VenueAddress>
          <div className="mt-6 space-y-4 text-lg leading-normal text-gray-900 sm:text-xl">
            <p>
              The exclusive Networking Soirée will be held at the House of Lords.
            </p>
            <p>
              This unique setting offers an unparalleled opportunity to connect with senior leaders
              from across the coffee and cocoa value chains, as well as finance, policy and innovation.
            </p>
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
