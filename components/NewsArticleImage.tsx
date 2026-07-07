import Image, { type StaticImageData } from "next/image";
import React from "react";
import type { NewsArticle } from "../data/newsArticles";

type NewsArticleImageProps = {
  article: Pick<NewsArticle, "image" | "imageAlt" | "articleHeroImage">;
  variant?: "listing" | "hero";
  priority?: boolean;
  sizes?: string;
  className?: string;
};

export default function NewsArticleImage({
  article,
  variant = "listing",
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 50vw",
  className = "",
}: NewsArticleImageProps) {
  const src: string | StaticImageData =
    variant === "hero" && article.articleHeroImage
      ? article.articleHeroImage
      : article.image;

  const aspectClassName =
    variant === "hero" ? "aspect-video" : "aspect-[4/3]";

  return (
    <div className={`relative w-full overflow-hidden ${aspectClassName}`}>
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
