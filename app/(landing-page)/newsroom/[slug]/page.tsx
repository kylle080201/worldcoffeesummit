import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NewsroomArticle from "../../../../components/NewsroomArticle";
import { getNewsArticleBySlug } from "../../../../data/newsArticles";
import {
  getArticleOgImageUrl,
  getArticleShareUrl,
} from "../../../../utils/site";

type NewsroomArticlePageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: NewsroomArticlePageProps): Promise<Metadata> {
  const article = getNewsArticleBySlug(params.slug);

  if (!article) {
    return {};
  }

  const articleUrl = getArticleShareUrl(article.slug);
  const imageUrl = getArticleOgImageUrl(article.image);

  return {
    title: article.communiquéTitle,
    description: article.excerpt,
    alternates: {
      canonical: articleUrl,
    },
    openGraph: {
      title: article.communiquéTitle,
      description: article.excerpt,
      url: articleUrl,
      type: "article",
      publishedTime: article.dateTime,
      images: [
        {
          url: imageUrl,
          alt: article.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.communiquéTitle,
      description: article.excerpt,
      images: [imageUrl],
    },
  };
}

export default function NewsroomArticlePage({
  params,
}: NewsroomArticlePageProps) {
  const article = getNewsArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return <NewsroomArticle article={article} />;
}
