import Image from 'next/image'
import React from 'react'
import headerImage from '../images/about-wcis/ICONS/images/header.jpg'
import icon1 from '../images/about-wcis/ICONS/1.png'
import icon2 from '../images/about-wcis/ICONS/2.png'
import icon3 from '../images/about-wcis/ICONS/3.png'
import icon4 from '../images/about-wcis/ICONS/4.png'
import icon5 from '../images/about-wcis/ICONS/5.png'
import icon6 from '../images/about-wcis/ICONS/6.png'

const wcisDifferenceItems = [
  {
    title: 'Beyond Coffee & Cocoa',
    description:
      'The future of coffee and cocoa is increasingly shaped by forces beyond the sectors themselves—from climate and regulation to capital and supply chain resilience.',
  },
  {
    title: 'Beyond Scenarios',
    description:
      'The focus is not on hypothetical futures, but on what is already being implemented, financed and scaled.',
  },
  {
    title: 'Beyond Familiar Circles',
    description:
      'Progress depends on bringing together stakeholders who do not usually sit around the same table—from origin to boardroom.',
  },
  {
    title: 'Beyond Dialogue',
    description:
      'The objective is not discussion for its own sake, but identifying the partnerships and actions capable of moving the sector forward.',
  },
]

const whoWeBringTogetherItems = [
  {
    icon: icon1,
    label: 'Brands, Retailers, Traders & Agribusiness',
  },
  {
    icon: icon2,
    label: 'Government, Policy, NGOs & Development Organisations',
  },
  {
    icon: icon3,
    label: 'Producers & Origin Organisations',
  },
  {
    icon: icon4,
    label: 'Advisory, Research & Strategy',
  },
  {
    icon: icon5,
    label: 'Technology & Solution Providers',
  },
  {
    icon: icon6,
    label: 'Finance, Investment & Insurance',
  },
]

const evolutionTimeline = [
  { year: '2023', theme: 'Delivering Collaborative Change' },
  { year: '2024', theme: 'Redefining Shared Value' },
  { year: '2025', theme: 'The Bigger Picture' },
  { year: '2026', theme: 'Moving The Needle' },
]

function LimeDivider({ className = 'mx-auto w-12' }: { className?: string }) {
  return (
    <div
      className={`mt-3 h-0.5 bg-lime-700 ${className}`}
      aria-hidden="true"
    />
  )
}

export default function AboutWcis() {
  return (
    <div className="w-full" id="about-wcis">
      <section className="w-full bg-white px-4 pb-0 pt-12 sm:px-6 sm:pt-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-10 lg:gap-12">
            <div className="lg:col-span-6">
              <p className="text-sm font-bold uppercase tracking-wide text-lime-700 sm:text-base">
                ABOUT WCIS
              </p>

              <h1 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-4xl lg:whitespace-nowrap xl:text-5xl">
                World Coffee Innovation Summit
              </h1>

              <p className="mt-4 text-2xl font-medium text-lime-700 sm:text-3xl">
                Securing the Future of Coffee and Cocoa
              </p>

              <div className="mt-6 text-lg leading-normal text-gray-900 sm:text-xl">
                <p>
                  Coffee and cocoa face increasingly complex challenges, from climate and regulation
                  to capital and supply chain resilience.
                </p>
                <p className="mt-4">
                  WCIS exists to explore the expertise, partnerships and practical solutions needed to
                  strengthen the future of both sectors.
                </p>
              </div>
            </div>

            <div className="overflow-hidden shadow-sm lg:col-span-4">
              <Image
                src={headerImage}
                alt="Panel discussion at World Coffee Innovation Summit"
                className="aspect-[4/3] h-full w-full object-cover lg:aspect-auto lg:min-h-[320px]"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
          </div>

          <div className="mt-10 sm:mt-12">
            <h2 className="text-center text-2xl font-bold tracking-tight text-lime-700 sm:text-3xl">
              THE WCIS DIFFERENCE
            </h2>

            <div className="mt-6 grid grid-cols-1 divide-y divide-gray-200 sm:mt-8 md:grid-cols-4 md:divide-x md:divide-y-0">
              {wcisDifferenceItems.map((item) => (
                <article
                  key={item.title}
                  className="flex h-full flex-col items-start px-4 py-4 text-left sm:px-5 md:py-0"
                >
                  <h3 className="text-lg font-bold leading-snug text-gray-900 sm:text-xl">
                    {item.title}
                  </h3>
                  <LimeDivider className="w-24 sm:w-32" />
                  <p className="mt-3 text-base leading-7 text-gray-900 sm:text-lg">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-10 sm:mt-12">
            <h2 className="text-center text-2xl font-bold tracking-tight text-lime-700 sm:text-3xl">
              WHO WE BRING TOGETHER
            </h2>

            <p className="mx-auto mt-3 max-w-4xl text-center text-lg leading-7 text-gray-900 sm:text-xl">
              WCIS is designed for the people responsible for shaping strategy, investment and
              implementation across coffee and cocoa value chains.
            </p>

            <div className="mt-6 grid grid-cols-2 divide-y divide-gray-200 sm:mt-8 sm:grid-cols-3 lg:grid-cols-6 lg:divide-x lg:divide-y-0">
              {whoWeBringTogetherItems.map((item) => (
                <article
                  key={item.label}
                  className="flex h-full flex-col items-center px-3 pt-3 pb-0 text-center sm:px-4"
                >
                  <Image
                    src={item.icon}
                    alt=""
                    className="h-16 w-16 object-contain sm:h-20 sm:w-20"
                  />
                  <LimeDivider className="mx-auto w-16 sm:w-20" />
                  <p className="mt-3 text-sm font-medium leading-snug text-gray-900 sm:text-base">
                    {item.label}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 pb-0 pt-10 sm:px-6 sm:pt-12 lg:px-8">
          <p className="text-center text-2xl font-bold tracking-tight text-lime-700 sm:text-3xl">
            SINCE 2023
          </p>

          <h2 className="mt-2 text-center text-3xl font-bold text-gray-900 sm:mt-3 sm:text-4xl">
            How the Conversation Has Evolved
          </h2>

          <div className="mt-6 grid grid-cols-1 divide-y divide-gray-200 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
            {evolutionTimeline.map((item) => (
              <article
                key={item.year}
                className="flex h-full flex-col items-center px-3 py-3 pb-0 text-center sm:px-4"
              >
                <p className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  {item.year}
                </p>
                <LimeDivider className="mx-auto w-32 sm:w-40" />
                <p className="mt-3 text-base font-bold leading-snug text-gray-900 sm:text-lg lg:whitespace-nowrap lg:text-xl">
                  {item.theme}
                </p>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-3 max-w-5xl pb-4 text-center text-lg leading-normal text-gray-900 sm:mt-4 sm:pb-5 sm:text-xl">
            From collaboration and shared value to implementation and measurable progress, each
            edition has reflected the evolving priorities of the sector.
          </p>
        </div>

        <div className="bg-lime-700">
          <div className="mx-auto flex max-w-7xl flex-col md:flex-row md:items-center">
            <div className="flex flex-1 items-center justify-end px-6 py-10 text-left sm:pl-10 sm:pr-4 sm:py-12 lg:pl-12 lg:pr-6 lg:py-14">
              <p className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Different Themes.
                <br />
                One Mission.
              </p>
            </div>
            <div
              className="mx-auto h-1 w-24 shrink-0 bg-white md:mx-0 md:h-32 md:w-1 lg:h-40"
              aria-hidden="true"
            />
            <div className="flex flex-1 items-center px-4 py-10 text-left sm:pl-4 sm:pr-10 sm:py-12 lg:pl-6 lg:pr-12 lg:py-14">
              <p className="max-w-2xl text-xl leading-snug text-white sm:text-2xl lg:text-3xl">
                To bring together the people, expertise, and partnerships shaping the future of
                <br />
                coffee and cocoa.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
