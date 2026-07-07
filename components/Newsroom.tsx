import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'
import { newsArticles } from '../data/newsArticles'
import NewsArticleImage from './NewsArticleImage'
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

            <div className="w-full max-w-md rounded-2xl bg-lime-700 px-6 py-8 sm:px-8 sm:py-9 lg:ml-auto">
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                Join Our Network
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/95 sm:text-base">
                Stay informed with the latest news, insights, opportunities, and
                announcements.
              </p>
              <div className="mt-6">
                <Link
                  href="#join-our-network"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-2.5 text-sm font-bold text-lime-700 transition-colors hover:bg-gray-100 sm:text-base"
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
                className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)] lg:gap-10"
              >
                <Link
                  href={`/newsroom/${article.slug}`}
                  className="overflow-hidden"
                >
                  <NewsArticleImage
                    article={article}
                    className="transition-opacity hover:opacity-90"
                  />
                </Link>

                <div className="flex max-w-xl flex-col lg:max-w-md">
                  <p className="text-sm font-bold uppercase tracking-wide text-lime-700 sm:text-base">
                    {article.category}
                  </p>

                  <h2 className="mt-4 text-2xl font-bold leading-snug text-gray-900 sm:text-3xl">
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

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <time
                      dateTime={article.dateTime}
                      className="text-sm text-gray-900 sm:text-base"
                    >
                      {article.date}
                    </time>
                    <Link
                      href={`/newsroom/${article.slug}`}
                      className="inline-flex items-center gap-2 text-base font-bold text-lime-700 transition-colors hover:text-lime-900 sm:text-lg"
                    >
                      Read more
                      <ArrowRightIcon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}          </div>
        </div>
      </section>

      <NewsroomSubscribeForm />
    </div>
  )
}
