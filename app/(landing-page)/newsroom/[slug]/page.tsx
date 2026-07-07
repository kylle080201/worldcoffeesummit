import { notFound } from 'next/navigation'
import NewsroomArticle from '../../../../components/NewsroomArticle'
import { getNewsArticleBySlug } from '../../../../data/newsArticles'
type NewsroomArticlePageProps = {
  params: {
    slug: string
  }
}

export default function NewsroomArticlePage({ params }: NewsroomArticlePageProps) {
  const article = getNewsArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  return <NewsroomArticle article={article} />
}
