"use client";

import React, { useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { whoAttendsLogoRows, type WhoAttendsLogo } from './whoAttendsLogos';

const AUDIENCE_DATA = [
  { label: 'Brands, Traders, Retailers & Agribusiness', percentage: 30 },
  { label: 'Government, NGOs & Policymakers', percentage: 20 },
  { label: 'Producers & Origin Organisations', percentage: 15 },
  { label: 'Technology & Solution Providers', percentage: 20 },
  { label: 'Finance & Investors', percentage: 15 },
];

function DonutChart({
  percentage,
  label,
  size = 160,
}: {
  percentage: number;
  label: string;
  size?: number;
}) {
  const strokeWidth = Math.round(size * 0.25);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const filled = (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center px-2">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#1a3a5c"
            strokeWidth={strokeWidth}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#4D7C0F"
            strokeWidth={strokeWidth}
            strokeDasharray={`${filled} ${circumference - filled}`}
            strokeLinecap="butt"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className={`font-bold text-amber-700 ${size <= 140 ? 'text-xl' : 'text-2xl'}`}
          >
            {percentage}%
          </span>
        </div>
      </div>
      <p className="mt-4 text-center text-sm font-semibold leading-snug text-gray-800">
        {label}
      </p>
    </div>
  );
}

function AudienceBreakdown() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-5">
      {AUDIENCE_DATA.map((item, index) => (
        <div
          key={item.label}
          className={
            index === AUDIENCE_DATA.length - 1
              ? 'col-span-2 mx-auto w-full max-w-[12rem] lg:col-span-1 lg:max-w-none'
              : undefined
          }
        >
          <div className="flex h-full flex-col items-center rounded-xl bg-white px-3 py-5 shadow-sm ring-1 ring-gray-200/70 sm:px-4 sm:py-6">
            <DonutChart
              percentage={item.percentage}
              label={item.label}
              size={140}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

const MARQUEE_DURATION = 50;
const DEFAULT_LOGO_MAX_HEIGHT = 112;
const DEFAULT_LOGO_MAX_WIDTH = 300;

const MARQUEE_MASK = {
  maskImage:
    'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
  WebkitMaskImage:
    'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
};

function LogoItem({
  logo,
  copyIndex,
}: {
  logo: WhoAttendsLogo;
  copyIndex: number;
}) {
  const maxHeight = logo.maxHeight ?? DEFAULT_LOGO_MAX_HEIGHT;
  const maxWidth = logo.maxWidth ?? DEFAULT_LOGO_MAX_WIDTH;

  return (
    <div className="flex h-40 flex-shrink-0 items-center justify-center">
      <Image
        src={logo.logo}
        alt={copyIndex === 0 ? `${logo.name} logo` : ''}
        aria-hidden={copyIndex !== 0}
        width={maxWidth}
        height={maxHeight}
        className="h-auto w-auto object-contain"
        style={{ maxHeight, maxWidth }}
      />
    </div>
  );
}

function LogoRowMarquee({
  logos,
  duration,
  measureRef,
}: {
  logos: WhoAttendsLogo[];
  duration: number;
  measureRef: (element: HTMLDivElement | null) => void;
}) {
  return (
    <div className="relative overflow-hidden" style={MARQUEE_MASK}>
      <div
        ref={measureRef}
        className="flex w-max animate-marquee-loop items-center gap-3 py-1"
        style={{ animationDuration: `${duration}s` }}
      >
        {[0, 1].map((copyIndex) =>
          logos.map((logo, index) => (
            <LogoItem
              key={`${copyIndex}-${logo.name}-${index}`}
              logo={logo}
              copyIndex={copyIndex}
            />
          )),
        )}
      </div>
    </div>
  );
}

function WhoAttendsMarquee({ rows }: { rows: WhoAttendsLogo[][] }) {
  const measureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [durations, setDurations] = useState<number[]>(() =>
    rows.map(() => MARQUEE_DURATION),
  );

  useLayoutEffect(() => {
    const syncDurations = () => {
      const widths = rows.map((_, index) => {
        const track = measureRefs.current[index];
        return track ? track.offsetWidth / 2 : 0;
      });
      const maxWidth = Math.max(...widths, 1);

      setDurations(widths.map((width) => MARQUEE_DURATION * (width / maxWidth)));
    };

    syncDurations();

    const observer = new ResizeObserver(syncDurations);
    measureRefs.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    window.addEventListener('load', syncDurations);

    return () => {
      observer.disconnect();
      window.removeEventListener('load', syncDurations);
    };
  }, [rows]);

  return (
    <div className="space-y-8">
      <p className="text-3xl font-bold text-center">WHO ATTENDS WCIS</p>
      <div className="space-y-0">
        {rows.map((row, index) => (
          <LogoRowMarquee
            key={index}
            logos={row}
            duration={durations[index] ?? MARQUEE_DURATION}
            measureRef={(element) => {
              measureRefs.current[index] = element;
            }}
          />
        ))}
      </div>
    </div>
  );
}

function WhoIsInTheRoom() {
  return (
    <div className="w-full py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-b from-lime-700/[0.05] via-white to-white shadow-sm">
          <div className="border-b border-gray-200/80 px-6 py-8 text-center sm:px-10">
            <p className="text-3xl font-bold">{`WHO'S IN THE ROOM`}</p>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-700">
              A cross-industry audience shaping the future of coffee and cocoa.
            </p>
          </div>

          <div className="p-6 sm:p-8">
            <AudienceBreakdown />
          </div>
        </div>
      </div>
    </div>
  );
}

export function WhoAttends() {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <WhoAttendsMarquee rows={whoAttendsLogoRows} />
      </div>
    </div>
  );
}

export default WhoIsInTheRoom;
