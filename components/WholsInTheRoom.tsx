"use client";

import React from 'react';
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

const LOGO_SCALE = 0.85;
const LOGO_BASE_MAX_HEIGHT = 112;
const LOGO_BASE_MAX_WIDTH = 300;
const LOGO_ROW_HEIGHT = Math.round(120 * LOGO_SCALE);
const LOGO_COLUMNS = 9;
const LOGO_GAP_PX = 64; // gap-16

function getStaggeredRowStyle(rowIndex: number): React.CSSProperties {
  if (rowIndex !== 1) return {};

  return {
    marginLeft: `calc(((100% - ${LOGO_GAP_PX}px * ${LOGO_COLUMNS - 1}) / ${LOGO_COLUMNS} + ${LOGO_GAP_PX}px) / 2)`,
  };
}

function LogoCell({ logo }: { logo: WhoAttendsLogo }) {
  const maxHeight = Math.round((logo.maxHeight ?? LOGO_BASE_MAX_HEIGHT) * LOGO_SCALE);
  const maxWidth = Math.round((logo.maxWidth ?? LOGO_BASE_MAX_WIDTH) * LOGO_SCALE);

  return (
    <div
      className="flex min-w-0 flex-1 items-center justify-center px-3"
      style={{ height: LOGO_ROW_HEIGHT }}
    >
      <Image
        src={logo.logo}
        alt={`${logo.name} logo`}
        width={maxWidth}
        height={maxHeight}
        className="h-auto w-auto max-w-full object-contain"
        style={{ maxHeight, maxWidth }}
      />
    </div>
  );
}

function WhoAttendsGrid({ rows }: { rows: WhoAttendsLogo[][] }) {
  return (
    <div className="space-y-8">
      <p className="text-3xl font-bold text-center">WHO ATTENDS</p>
      <div className="overflow-x-auto pb-2">
        <div className="mx-auto w-full min-w-[1120px] max-w-6xl space-y-4">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex w-full"
              style={{ gap: LOGO_GAP_PX, ...getStaggeredRowStyle(rowIndex) }}
            >
              {row.map((logo) => (
                <LogoCell key={logo.name} logo={logo} />
              ))}
            </div>
          ))}
        </div>
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
        <WhoAttendsGrid rows={whoAttendsLogoRows} />
      </div>
    </div>
  );
}

export default WhoIsInTheRoom;
