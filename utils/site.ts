import type { StaticImageData } from "next/image";

export const SITE_URL = "https://www.worldcoffeeinnovationsummit.com";

export function getArticleShareUrl(slug: string) {
  return `${SITE_URL}/newsroom/${slug}`;
}

export function getArticleOgImageUrl(image: string | StaticImageData) {
  if (typeof image === "string") {
    if (image.startsWith("http")) {
      return image;
    }

    return new URL(
      image.startsWith("/") ? image : `/${image}`,
      SITE_URL
    ).href;
  }

  if (image.src.startsWith("http")) {
    return image.src;
  }

  return new URL(
    image.src.startsWith("/") ? image.src : `/${image.src}`,
    SITE_URL
  ).href;
}
