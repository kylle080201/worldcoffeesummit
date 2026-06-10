"use client";

import React from 'react';
import Image, { type StaticImageData } from 'next/image';
import { speakerCompanyLogos } from './Speakers2026';

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

function DonutChart({ percentage, label }: { percentage: number; label: string }) {
  const size = 160;
  const strokeWidth = 40;
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
          <span className="text-2xl font-bold text-amber-700">{percentage}%</span>
        </div>
      </div>
      <p className="mt-4 text-center text-sm font-semibold leading-snug text-gray-800 max-w-[220px]">
        {label}
      </p>
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
  const topRow = AUDIENCE_DATA.slice(0, 3);
  const bottomRow = AUDIENCE_DATA.slice(3);

  return (
    <div className="w-full py-16">
      <p className="text-3xl font-bold text-center mb-4">{`WHO'S IN THE ROOM`}</p>
      <p className="text-center text-lg text-gray-700 max-w-2xl mx-auto mb-12 px-4">
        A cross-industry audience shaping the future of coffee and cocoa.
      </p>

      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 justify-items-center">
          {topRow.map((item) => (
            <DonutChart key={item.label} percentage={item.percentage} label={item.label} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-items-center max-w-2xl mx-auto mt-10">
          {bottomRow.map((item) => (
            <DonutChart key={item.label} percentage={item.percentage} label={item.label} />
          ))}
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4">
        <WhoAttendsMarquee logos={speakerCompanyLogos} />
      </div>
    </div>
  );
}

export default WhoIsInTheRoom;
