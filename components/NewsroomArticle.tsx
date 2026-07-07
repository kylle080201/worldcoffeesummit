import { HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import type { NewsArticle } from "../data/newsArticles";
import { articleShareSidebarLayout } from "../config/newsroom";
import { getArticleShareUrl } from "../utils/site";
import ArticleShareButtons from "./ArticleShareButtons";
import NewsArticleImage from "./NewsArticleImage";
import NewsroomSubscribeForm from "./NewsroomSubscribeForm";

export default function NewsroomArticle({ article }: { article: NewsArticle }) {
  const shareProps = {
    title: article.communiquéTitle,
    shareUrl: getArticleShareUrl(article.slug),
    iconLayout: articleShareSidebarLayout,
  };

  return (
    <div className="w-full bg-white">
      <section className="w-full px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-sm text-gray-600 sm:text-base lg:w-[80%]"
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

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm sm:text-base lg:w-[80%]">
            <span className="font-bold uppercase tracking-wide text-lime-700">
              {article.category}
            </span>
            <time dateTime={article.dateTime} className="text-gray-900">
              {article.date}
            </time>
          </div>

          <div className="mt-6 lg:hidden">
            <ArticleShareButtons {...shareProps} variant="inline" />
          </div>

          <div className="mt-8 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-3">
            <div className="min-w-0">
              <header className="text-left">
                <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                  {article.communiquéTitle}
                </h1>

                <p className="mt-5 text-lg font-medium text-lime-700 sm:text-xl lg:text-2xl">
                  {article.subtitle}
                </p>

                <p className="mt-4 text-lg italic text-gray-900 sm:text-xl">
                  {article.tagline}
                </p>
              </header>
              <div className="mt-10 overflow-hidden">
                <NewsArticleImage
                  article={article}
                  priority
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>

              <div className="mt-10 space-y-6 text-left text-base leading-relaxed text-gray-900 sm:text-lg">
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

            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <ArticleShareButtons {...shareProps} variant="sidebar" />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <NewsroomSubscribeForm />
    </div>
  );
}
