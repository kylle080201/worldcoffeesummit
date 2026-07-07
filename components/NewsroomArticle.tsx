import Link from 'next/link'
import React from 'react'
import type { NewsArticle } from '../data/newsArticles'
import NewsroomSubscribeForm from './NewsroomSubscribeForm'

export default function NewsroomArticle({ article }: { article: NewsArticle }) {
  return (
    <div className="w-full bg-white">
      <section className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/newsroom"
            className="inline-flex items-center gap-2 text-sm font-semibold text-lime-700 transition-colors hover:text-lime-900 sm:text-base"
          >
            &larr; Back to Newsroom
          </Link>

          <header className="mt-8 text-center">
            <h1 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
              {article.communiquéTitle}
            </h1>

            <p className="mt-6 text-lg font-medium text-lime-700 sm:text-xl lg:text-2xl">
              {article.subtitle}
            </p>

            <p className="mt-4 text-base italic text-gray-900 sm:text-lg lg:text-xl">
              {article.tagline}
            </p>
          </header>

          <hr className="mt-10 border-sky-300" />

          <div className="mt-10 space-y-6 text-base leading-relaxed text-gray-900 sm:text-lg">
            {article.body.map((paragraph, index) => (
              <p
                key={index}
                className={paragraph.bold ? 'font-bold' : undefined}
              >
                {paragraph.text}
              </p>
            ))}
          </div>
        </div>
      </section>

      <NewsroomSubscribeForm />
    </div>
  )
}
