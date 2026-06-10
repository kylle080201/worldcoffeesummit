"use client";

import React from 'react';
import Image, { type StaticImageData } from 'next/image';
import { whoAttendsLogos } from './whoAttendsLogos';

const AUDIENCE_DATA = [
  { label: 'Brands, Traders, Retailers & Agribusiness', percentage: 30 },
  { label: 'Government, NGOs & Policymakers', percentage: 20 },
  { label: 'Producers & Origin Organisations', percentage: 15 },
  { label: 'Technology & Solution Providers', percentage: 20 },
  { label: 'Finance & Investors', percentage: 15 },
];

interface CompanyLogo {
  name: string;
  logo: string | StaticImageData;
}

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
const LOGO_SLOT_WIDTH = 208; // w-52
const LOGO_GAP = 64; // gap-16

function splitIntoRows<T>(items: T[], rowCount: number): T[][] {
  const rows: T[][] = Array.from({ length: rowCount }, () => []);
  items.forEach((item, index) => {
    rows[index % rowCount].push(item);
  });
  return rows.filter((row) => row.length > 0);
}

function normalizeRowLengths<T>(rows: T[][]): T[][] {
  const maxLength = Math.max(...rows.map((row) => row.length));
  return rows.map((row) => {
    const normalized = [...row];
    let i = 0;
    while (normalized.length < maxLength) {
      normalized.push(row[i % row.length]);
      i += 1;
    }
    return normalized;
  });
}

function LogoMarqueeRow({ logos }: { logos: CompanyLogo[] }) {
  const duplicated = [...logos, ...logos];
  const trackWidth = logos.length * (LOGO_SLOT_WIDTH + LOGO_GAP);

  return (
    <div
      className="relative overflow-hidden"
      style={{
        maskImage:
          'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
      }}
    >
      <div
        className="flex w-max animate-marquee-left items-center gap-16 py-5"
        style={{
          animationDuration: `${MARQUEE_DURATION}s`,
          ['--marquee-distance' as string]: `${trackWidth}px`,
        }}
      >
        {duplicated.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="flex h-20 w-52 flex-shrink-0 items-center justify-center px-2"
          >
            <Image
              src={logo.logo}
              alt={`${logo.name} logo`}
              width={200}
              height={80}
              className="max-h-16 w-auto max-w-[200px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function WhoAttendsMarquee({ logos }: { logos: CompanyLogo[] }) {
  const rows = normalizeRowLengths(splitIntoRows(logos, 3));

  return (
    <div className="mt-16 space-y-6">
      <p className="text-3xl font-bold text-center">WHO ATTENDS WCIS</p>
      <div className="space-y-2">
        {rows.map((row, index) => (
          <LogoMarqueeRow key={index} logos={row} />
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

      <div className="max-w-screen-xl mx-auto px-4">
        <WhoAttendsMarquee logos={whoAttendsLogos} />
      </div>
    </div>
  );
}

export default WhoIsInTheRoom;
