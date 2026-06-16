import React from 'react'

const whyAttendCards = [
  {
    title: "Understand What's Next",
    description:
      'Gain practical insight into the realities, risks and opportunities shaping coffee and cocoa.',
  },
  {
    title: 'Discover What Scales',
    description:
      'Explore solutions, partnerships and investment models already delivering results.',
  },
  {
    title: 'Engage Decision-Makers',
    description:
      'Meet senior leaders driving strategy, investment and implementation.',
  },
  {
    title: 'Build Valuable Connections',
    description:
      'Connect with stakeholders from origin to boardroom across the coffee and cocoa ecosystem.',
  },
  {
    title: 'Network Beyond the Stage',
    description:
      'Strengthen relationships from coffee tastings to the House of Lords Soirée.',
  },
]

const sectionClassName =
  'w-full px-6 pb-10 pt-6 sm:px-8 sm:pb-14 sm:pt-8 md:px-12'

function AttendCard({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <article className="flex h-full flex-col items-center px-4 pt-3 pb-0 text-center sm:px-6 md:px-8">
      <h3 className="text-xl font-bold uppercase leading-tight text-gray-900 sm:text-2xl">
        {title}
      </h3>
      <p className="mt-2 max-w-sm text-base leading-snug text-gray-900 sm:text-lg">
        {description}
      </p>
    </article>
  )
}

export default function WhyAttend() {
  const [rowOne, rowTwo] = [whyAttendCards.slice(0, 3), whyAttendCards.slice(3)]

  return (
    <section className={`${sectionClassName} bg-gray-100`}>
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-2xl font-bold tracking-tight text-lime-700 sm:text-4xl">
          WHY ATTEND
        </p>

        <div className="mt-4 grid grid-cols-1 divide-y divide-gray-200 sm:mt-5 md:grid-cols-3 md:divide-x md:divide-y-0">
          {rowOne.map((card) => (
            <AttendCard key={card.title} {...card} />
          ))}
        </div>
        <div className="mt-8 flex justify-center md:mt-10">
          <div className="grid w-full max-w-4xl grid-cols-1 divide-y divide-gray-200 md:grid-cols-2 md:divide-x md:divide-y-0">
            {rowTwo.map((card) => (
              <AttendCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
