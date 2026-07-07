"use client";

import { EnvelopeIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";

type ArticleShareButtonsProps = {
  title: string;
};

function ShareLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-gray-700 transition-colors hover:bg-gray-300"
    >
      {children}
    </a>
  );
}

export default function ArticleShareButtons({ title }: ArticleShareButtonsProps) {
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex flex-col items-start gap-3 sm:items-end">
      <p className="text-sm font-medium text-gray-900 sm:text-base">
        Share this article
      </p>
      <div className="flex items-center gap-2">
        <ShareLink
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          label="Share on LinkedIn"
        >
          <span className="text-xs font-bold">in</span>
        </ShareLink>
        <ShareLink
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
          label="Share on X"
        >
          <span className="text-xs font-bold">X</span>
        </ShareLink>
        <ShareLink
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          label="Share on Facebook"
        >
          <span className="text-xs font-bold">f</span>
        </ShareLink>
        <ShareLink
          href={`mailto:?subject=${encodedTitle}&body=${encodedUrl}`}
          label="Share by email"
        >
          <EnvelopeIcon className="h-4 w-4" aria-hidden="true" />
        </ShareLink>
      </div>
    </div>
  );
}
