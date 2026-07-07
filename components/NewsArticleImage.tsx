import Image, { type StaticImageData } from "next/image";
import React from "react";
import type { NewsArticle } from "../data/newsArticles";

type NewsArticleImageProps = {
  article: Pick<NewsArticle, "image" | "imageAlt">;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

export default function NewsArticleImage({
  article,
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 50vw",
  className = "",
}: NewsArticleImageProps) {
  const src: string | StaticImageData = article.image;

  return (
    <div className="relative aspect-video w-full overflow-hidden">
      <Image
        src={src}
        alt={article.imageAlt}
        fill
        className={`object-cover ${className}`.trim()}
        sizes={sizes}
        priority={priority}
      />
    </div>
  );
}
