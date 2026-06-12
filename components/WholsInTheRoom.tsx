"use client";

import React, { useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { whoAttendsLogoRows, type WhoAttendsLogo } from './whoAttendsLogos';
import WcisInAction from './WcisInAction';

const AUDIENCE_DATA = [
  { label: 'Brands, Retailers, Traders & Agribusiness', percentage: 30 },
  { label: 'Government, Policy, NGOs & Development Organisations', percentage: 20 },
  { label: 'Producers & Origin Organisations', percentage: 10 },
  { label: 'Advisory, Research & Strategy', percentage: 10 },
  { label: 'Technology & Solution Providers', percentage: 20 },
  { label: 'Finance, Investment & Insurance', percentage: 10 },
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
    <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
      {AUDIENCE_DATA.map((item) => (
        <div key={item.label}>
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
const LOGO_SCALE = 1.2;
const LOGO_BASE_MAX_HEIGHT = 112;
const LOGO_BASE_MAX_WIDTH = 300;
const LOGO_MARGIN_X = 16;
const LOGO_MARGIN_Y = 16;
const LOGO_ROW_GAP_PX = 16;
const LOGO_SLOT_WIDTH = Math.round(160 * LOGO_SCALE);
const LOGO_ROW_HEIGHT = Math.round(120 * LOGO_SCALE);
const ROW_STAGGER_PX = (LOGO_SLOT_WIDTH + LOGO_MARGIN_X * 2) / 2;

const MARQUEE_MASK = {
  maskImage:
    'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
  WebkitMaskImage:
    'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
};

const PARTNERS_2025_SLOT_WIDTH = 220;
const PARTNERS_2025_ROW_HEIGHT = 112;
const PARTNERS_2025_MARGIN_X = 8;

const GRID_BASE_MAX_HEIGHT = 72;
const GRID_BASE_MAX_WIDTH = 140;

function StaticLogoGridItem({ logo }: { logo: WhoAttendsLogo }) {
  const maxHeight = logo.maxHeight ?? GRID_BASE_MAX_HEIGHT;
  const maxWidth = logo.maxWidth ?? GRID_BASE_MAX_WIDTH;

  return (
    <div className="flex h-16 w-full items-center justify-center overflow-hidden px-1 sm:h-20 lg:h-24">
      <Image
        src={logo.logo}
        alt={`${logo.name} logo`}
        width={maxWidth}
        height={maxHeight}
        className="max-h-full max-w-full object-contain"
      />
    </div>
  );
}

function Partners2025LogoItem({
  logo,
  copyIndex,
}: {
  logo: WhoAttendsLogo;
  copyIndex: number;
}) {
  const slotWidth = logo.slotWidth ?? PARTNERS_2025_SLOT_WIDTH;
  const maxHeight = Math.min(
    Math.round((logo.maxHeight ?? LOGO_BASE_MAX_HEIGHT) * LOGO_SCALE),
    PARTNERS_2025_ROW_HEIGHT,
  );
  const maxWidth = Math.min(
    Math.round((logo.maxWidth ?? LOGO_BASE_MAX_WIDTH) * LOGO_SCALE),
    slotWidth,
  );

  return (
    <div
      className="flex flex-shrink-0 items-center justify-center"
      style={{
        width: slotWidth,
        height: PARTNERS_2025_ROW_HEIGHT,
        marginLeft: logo.marginX ?? PARTNERS_2025_MARGIN_X,
        marginRight: logo.marginX ?? PARTNERS_2025_MARGIN_X,
      }}
    >
      <Image
        src={logo.logo}
        alt={copyIndex === 0 ? `${logo.name} logo` : ''}
        aria-hidden={copyIndex !== 0}
        width={maxWidth}
        height={maxHeight}
        className="h-auto w-auto object-contain"
        style={{
          maxHeight,
          maxWidth,
          transform: logo.scale ? `scale(${logo.scale})` : undefined,
        }}
      />
    </div>
  );
}

function LogoItem({
  logo,
  copyIndex,
}: {
  logo: WhoAttendsLogo;
  copyIndex: number;
}) {
  const maxHeight = Math.min(
    Math.round((logo.maxHeight ?? LOGO_BASE_MAX_HEIGHT) * LOGO_SCALE),
    LOGO_ROW_HEIGHT,
  );
  const maxWidth = Math.min(
    Math.round((logo.maxWidth ?? LOGO_BASE_MAX_WIDTH) * LOGO_SCALE),
    LOGO_SLOT_WIDTH,
  );

  return (
    <div
      className="flex flex-shrink-0 items-center justify-center"
      style={{
        width: LOGO_SLOT_WIDTH,
        height: LOGO_ROW_HEIGHT,
        marginLeft: logo.marginX ?? LOGO_MARGIN_X,
        marginRight: logo.marginX ?? LOGO_MARGIN_X,
        marginTop: logo.marginY ?? LOGO_MARGIN_Y,
        marginBottom: logo.marginY ?? LOGO_MARGIN_Y,
      }}
    >
      <Image
        src={logo.logo}
        alt={copyIndex === 0 ? `${logo.name} logo` : ''}
        aria-hidden={copyIndex !== 0}
        width={maxWidth}
        height={maxHeight}
        className="h-auto w-auto object-contain"
        style={{
          maxHeight,
          maxWidth,
          transform: logo.scale ? `scale(${logo.scale})` : undefined,
        }}
      />
    </div>
  );
}

function LogoRowMarquee({
  logos,
  duration,
  measureRef,
  rowIndex,
}: {
  logos: WhoAttendsLogo[];
  duration: number;
  measureRef: (element: HTMLDivElement | null) => void;
  rowIndex: number;
}) {
  return (
    <div
      style={rowIndex === 1 ? { marginLeft: ROW_STAGGER_PX } : undefined}
    >
      <div className="relative overflow-hidden" style={MARQUEE_MASK}>
        <div
          ref={measureRef}
          className="flex w-max animate-marquee-loop items-center"
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
    </div>
  );
}

function SingleLogoMarqueeRow({
  logos,
  renderLogo,
}: {
  logos: WhoAttendsLogo[];
  renderLogo: (logo: WhoAttendsLogo, copyIndex: number, index: number) => React.ReactNode;
}) {
  const measureRef = useRef<HTMLDivElement | null>(null);
  const [duration, setDuration] = useState(MARQUEE_DURATION);

  useLayoutEffect(() => {
    const syncDuration = () => {
      setDuration(MARQUEE_DURATION);
    };

    syncDuration();

    const observer = new ResizeObserver(syncDuration);
    if (measureRef.current) observer.observe(measureRef.current);

    window.addEventListener('load', syncDuration);

    return () => {
      observer.disconnect();
      window.removeEventListener('load', syncDuration);
    };
  }, [logos]);

  return (
    <div className="relative overflow-hidden" style={MARQUEE_MASK}>
      <div
        ref={measureRef}
        className="flex w-max animate-marquee-loop items-center"
        style={{ animationDuration: `${duration}s` }}
      >
        {[0, 1].map((copyIndex) =>
          logos.map((logo, index) => renderLogo(logo, copyIndex, index)),
        )}
      </div>
    </div>
  );
}

function WhoAttendsMarquee({
  rows,
  subtitle,
}: {
  rows: WhoAttendsLogo[][];
  subtitle?: string;
}) {
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
      <div className="text-center">
        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">WHO ATTENDS</p>
        {subtitle ? (
          <p className="mt-3 text-lg text-gray-900 sm:text-xl">{subtitle}</p>
        ) : null}
      </div>
      <div className="flex flex-col" style={{ gap: LOGO_ROW_GAP_PX }}>
        {rows.map((row, index) => (
          <LogoRowMarquee
            key={index}
            rowIndex={index}
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
            <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">{`WHO'S IN THE ROOM`}</p>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-700">
              Bringing together decision-makers from across the coffee and cocoa ecosystem.
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

export function Partners2025Marquee({ logos }: { logos: WhoAttendsLogo[] }) {
  return (
    <div className="mt-10 w-full">
      <SingleLogoMarqueeRow
        logos={logos}
        renderLogo={(logo, copyIndex, index) => (
          <Partners2025LogoItem
            key={`${copyIndex}-${logo.name}-${index}`}
            logo={logo}
            copyIndex={copyIndex}
          />
        )}
      />
    </div>
  );
}

export function WhoAttendsGrid({
  rows,
  subtitle,
  compactBottom = false,
}: {
  rows: WhoAttendsLogo[][];
  subtitle?: string;
  compactBottom?: boolean;
}) {
  return (
    <div
      className={`w-full border-t border-gray-200 bg-gray-50 pt-16 ${compactBottom ? 'pb-4 sm:pb-6' : 'pb-16'}`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            WHO ATTENDS
          </h2>
          {subtitle ? (
            <p className="mt-3 text-lg text-gray-900 sm:text-xl">{subtitle}</p>
          ) : null}
        </div>
        <div className="mt-8 flex flex-col gap-4 sm:gap-5">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid w-full grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-4 sm:gap-x-3 lg:grid-cols-7 lg:gap-x-3"
            >
              {row.map((logo) => (
                <StaticLogoGridItem key={logo.name} logo={logo} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function WhoAttends({
  subtitle,
  compactBottom = false,
}: {
  subtitle?: string;
  compactBottom?: boolean;
}) {
  return (
    <div
      className={`w-full bg-white pt-16 ${compactBottom ? 'pb-4 sm:pb-6' : 'pb-16'}`}
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <WhoAttendsMarquee rows={whoAttendsLogoRows} subtitle={subtitle} />
      </div>
      <WcisInAction />
    </div>
  );
}

export default WhoIsInTheRoom;
