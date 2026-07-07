"use client";

import React, { useEffect, useMemo, useState } from "react";
import { SocialIcon } from "react-social-icons";

const iconStyle = { height: 40, width: 40 };

type ShareIconLayout = "horizontal" | "vertical";

type ArticleShareButtonsProps = {
  title: string;
  shareUrl: string;
  variant?: "inline" | "sidebar";
  iconLayout?: ShareIconLayout;
};

function buildShareLinks(shareUrl: string, title: string) {
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  return {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    x: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
  };
}

export default function ArticleShareButtons({
  title,
  shareUrl: canonicalShareUrl,
  variant = "inline",
  iconLayout = "horizontal",
}: ArticleShareButtonsProps) {
  const [shareUrl, setShareUrl] = useState(canonicalShareUrl);

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  const shareLinks = useMemo(
    () => buildShareLinks(shareUrl, title),
    [shareUrl, title]
  );

  const icons = (
    <>
      <SocialIcon
        network="linkedin"
        url={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        style={iconStyle}
        aria-label="Share on LinkedIn"
      />
      <SocialIcon
        network="x"
        url={shareLinks.x}
        target="_blank"
        rel="noopener noreferrer"
        style={iconStyle}
        aria-label="Share on X"
      />
      <SocialIcon
        network="facebook"
        url={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        style={iconStyle}
        aria-label="Share on Facebook"
      />
      <SocialIcon
        network="email"
        url={shareLinks.email}
        bgColor="#4d7c0f"
        fgColor="#ffffff"
        style={iconStyle}
        aria-label="Share by email"
      />
    </>
  );

  const iconContainerClassName =
    iconLayout === "vertical"
      ? "flex flex-col items-center gap-2"
      : "flex flex-nowrap items-center justify-center gap-2";

  if (variant === "sidebar") {
    return (
      <div className="flex flex-col items-center gap-3 text-center">
        <p className="text-base font-bold text-lime-700 sm:text-lg">
          Share this article
        </p>
        <div className={iconContainerClassName}>{icons}</div>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-end">
      <p className="text-base font-bold text-lime-700 sm:text-lg">
        Share this article
      </p>
      <div className={iconContainerClassName}>{icons}</div>
    </div>
  );
}
