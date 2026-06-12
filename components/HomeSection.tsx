"use client";

import React, { createContext, useContext } from "react";

type SectionIndexContextType = {
  consumeIndex: () => number;
};

const SectionIndexContext = createContext<SectionIndexContextType | null>(null);

function alternatingBackground(index: number) {
  return index % 2 === 0 ? "bg-white" : "bg-gray-100";
}

export function HomePageLayout({ children }: { children: React.ReactNode }) {
  let index = 0;

  return (
    <SectionIndexContext.Provider value={{ consumeIndex: () => index++ }}>
      {children}
    </SectionIndexContext.Provider>
  );
}

export function HomeSection({
  children,
  className = "",
  bare = false,
}: {
  children: React.ReactNode;
  className?: string;
  /** Skip alternating background (e.g. hero, image backgrounds). Does not advance the index. */
  bare?: boolean;
}) {
  const ctx = useContext(SectionIndexContext);

  if (bare) {
    return <>{children}</>;
  }

  const sectionIndex = ctx?.consumeIndex() ?? 0;

  return (
    <section className={`w-full ${alternatingBackground(sectionIndex)} ${className}`.trim()}>
      {children}
    </section>
  );
}
