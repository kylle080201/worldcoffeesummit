import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { newsArticles } from '../data/newsArticles'
import NewsroomSubscribeForm from './NewsroomSubscribeForm'

export default function Newsroom() {
  return (
    <div className="w-full bg-white" id="newsroom">
      <section className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                NEWSROOM
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-900 sm:text-xl">
                Updates, insights and announcements from across the World Coffee
                Alliance(WCA) network.
              </p>
            </div>

            <div className="rounded-2xl bg-lime-700 px-8 py-10 sm:px-10 sm:py-12">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Join Our Network
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/95 sm:text-lg">
                Stay informed with the latest news, insights, opportunities, and
                announcements.
              </p>
              <div className="mt-8">
                <Link
                  href="#join-our-network"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-base font-bold text-lime-700 transition-colors hover:bg-gray-100 sm:text-lg"
                >
                  Subscribe
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 space-y-16 sm:mt-20">
            {newsArticles.map((article) => (
              <article
                key={article.slug}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
              >
                <Link
                  href={`/newsroom/${article.slug}`}
                  className="overflow-hidden"
                >
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    className="aspect-[4/3] h-full w-full object-cover transition-opacity hover:opacity-90"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </Link>

                <div className="flex flex-col">
                  <p className="text-sm font-bold uppercase tracking-wide text-lime-700 sm:text-base">
                    {article.category}
                  </p>

                  <h2 className="mt-4 text-2xl font-bold leading-snug text-gray-900 sm:text-3xl lg:text-4xl">
                    <Link
                      href={`/newsroom/${article.slug}`}
                      className="transition-colors hover:text-lime-800"
                    >
                      {article.title}
                    </Link>
                  </h2>

                  <p className="mt-5 text-base leading-relaxed text-gray-900 sm:text-lg">
                    {article.excerpt}
                  </p>

                  <div className="mt-8 flex items-center justify-between gap-4">
                    <time
                      dateTime={article.dateTime}
                      className="text-sm text-gray-900 sm:text-base"
                    >
                      {article.date}
                    </time>
                    <Link
                      href={`/newsroom/${article.slug}`}
                      className="text-base font-bold text-lime-700 transition-colors hover:text-lime-900 sm:text-lg"
                    >
                      Read more &rarr;
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <NewsroomSubscribeForm />
    </div>
  )
}
