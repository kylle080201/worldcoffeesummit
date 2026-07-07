import { HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import type { NewsArticle } from "../data/newsArticles";
import ArticleShareButtons from "./ArticleShareButtons";
import NewsArticleImage from "./NewsArticleImage";
import NewsroomSubscribeForm from "./NewsroomSubscribeForm";
export default function NewsroomArticle({ article }: { article: NewsArticle }) {
  return (
    <div className="w-full bg-white">
      <section className="w-full px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-sm text-gray-600 sm:text-base"
          >
            <Link
              href="/"
              className="inline-flex items-center text-gray-600 transition-colors hover:text-lime-700"
              aria-label="Home"
            >
              <HomeIcon className="h-5 w-5" aria-hidden="true" />
            </Link>
            <span aria-hidden="true">&gt;</span>
            <Link
              href="/newsroom"
              className="transition-colors hover:text-lime-700"
            >
              Newsroom
            </Link>
            <span aria-hidden="true">&gt;</span>
            <span className="text-gray-900">{article.communiquéTitle}</span>
          </nav>

          <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex flex-wrap items-center gap-3 text-sm sm:text-base">
              <span className="font-bold uppercase tracking-wide text-lime-700">
                {article.category}
              </span>
              <time dateTime={article.dateTime} className="text-gray-900">
                {article.date}
              </time>
            </div>

            <ArticleShareButtons title={article.communiquéTitle} />
          </div>

          <header className="mt-8 max-w-5xl">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              {article.communiquéTitle}
            </h1>

            <p className="mt-5 text-xl font-medium text-lime-700 sm:text-2xl lg:text-3xl">
              {article.subtitle}
            </p>

            <p className="mt-4 text-lg italic text-gray-900 sm:text-xl">
              {article.tagline}
            </p>
          </header>

          <div className="mt-10 overflow-hidden">
            <NewsArticleImage
              article={article}
              variant="hero"
              priority
              sizes="(max-width: 1152px) 100vw, 1152px"
            />
          </div>
          <div className="mt-10 max-w-5xl space-y-6 text-base leading-relaxed text-gray-900 sm:text-lg">
            {article.body.map((paragraph, index) => (
              <p
                key={index}
                className={paragraph.bold ? "font-bold" : undefined}
              >
                {paragraph.text}
              </p>
            ))}
          </div>
        </div>
      </section>

      <NewsroomSubscribeForm />
    </div>
  );
}
