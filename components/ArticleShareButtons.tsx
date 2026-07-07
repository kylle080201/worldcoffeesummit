"use client";

import React, { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";

const iconStyle = { height: 36, width: 36 };

type ArticleShareButtonsProps = {
  title: string;
};

export default function ArticleShareButtons({ title }: ArticleShareButtonsProps) {
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex flex-wrap items-center justify-end gap-3">
      <p className="text-sm font-medium text-gray-900 sm:text-base">
        Share this article
      </p>
      <div className="flex items-center gap-2">
        <SocialIcon
          network="linkedin"
          url={
            shareUrl
              ? `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
              : "#"
          }
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
          aria-label="Share on LinkedIn"
        />
        <SocialIcon
          network="x"
          url={
            shareUrl
              ? `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`
              : "#"
          }
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
          aria-label="Share on X"
        />
        <SocialIcon
          network="facebook"
          url={
            shareUrl
              ? `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
              : "#"
          }
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
          aria-label="Share on Facebook"
        />
        <SocialIcon
          network="email"
          url={
            shareUrl
              ? `mailto:?subject=${encodedTitle}&body=${encodedUrl}`
              : "#"
          }
          style={iconStyle}
          aria-label="Share by email"
        />
      </div>
    </div>
  );
}
