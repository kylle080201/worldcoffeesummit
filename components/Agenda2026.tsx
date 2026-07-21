"use client";

import { useState } from "react";

type AgendaItem = {
  time: string;
  title: string;
  variant?: "session" | "break";
  subtitle?: string;
  description?: string;
  extra?: { title: string; subtitle?: string; description?: string }[];
};

type DayAgenda = {
  label: string;
  date: string;
  theme: string;
  items: AgendaItem[];
};

const day1: DayAgenda = {
  label: "Day 1",
  date: "DAY 1, WEDNESDAY 21 OCTOBER 2026",
  theme: "UNDERSTANDING THE CHALLENGE – RETHINKING COFFEE & COCOA SUPPLY",
  items: [
    {
      time: "08:00 – 09:00",
      title: "COFFEE REGISTRATION",
      variant: "break",
    },
    {
      time: "09:00 – 09:05",
      title: "WELCOME REMARKS",
    },
    {
      time: "09:05 – 09:15",
      title: "OPENING KEYNOTE",
    },
    {
      time: "09:15 – 09:25",
      title: "INSPIRATIONAL TALK",
    },
    {
      time: "09:25 – 10:15",
      title:
        "OPENING PANEL: TRACEABILITY VS REALITY: CAN TODAY'S SUPPLY CHAIN DELIVER COMPLIANCE AT SCALE?",
      description:
        "As regulatory expectations reshape global trade, organisations are strengthening traceability, supplier visibility and data readiness to maintain market access and secure long-term supply. This executive discussion explores how business leaders are preparing their organisations for the next generation of compliance.",
    },
    {
      time: "10:15 – 10:30",
      title: "CASE STUDY",
    },
    {
      time: "10:30 – 11:00",
      title: "NETWORKING COFFEE BREAK",
      variant: "break",
    },
    {
      time: "11:00 – 12:00",
      title: "GLOBAL LEADERS FORUM",
      subtitle: "“IS THE TRADITIONAL COFFEE TRADING MODEL STILL FIT FOR THE FUTURE?”",
      description:
        "Global coffee trade is entering a period of structural transformation. Industry leaders will examine how sourcing strategies, commercial partnerships and trading models are evolving to strengthen resilience and secure future supply.",
    },
    {
      time: "12:00 – 12:40",
      title: "PANEL",
      subtitle:
        "“WHO PAYS—OR PROFITS—FROM RESILIENCE? FINANCING THE FUTURE OF GLOBAL SUPPLY CHAINS”",
      description:
        "As resilience moves from ambition to business necessity, investment and financing models are evolving to protect supply, reduce risk and unlock long-term value. The discussion highlights how finance is enabling more resilient and competitive global supply chains.",
    },
    {
      time: "12:40 – 13:00",
      title: "CASE STUDY",
    },
    {
      time: "13:00 – 14:00",
      title: "NETWORKING LUNCH",
      variant: "break",
    },
    {
      time: "14:00 – 15:30",
      title: "EXECUTIVE DEEP DIVES (INVITATION ONLY)",
      extra: [
        {
          title: "EXECUTIVE DEEP DIVE I",
          subtitle:
            "From Space to Strategy: Earth Observation, Geospatial Intelligence & AI",
          description:
            "Discover how Earth Observation, geospatial intelligence and AI are helping organisations monitor supply risk, strengthen traceability and support faster, more informed business decisions.",
        },
        {
          title: "EXECUTIVE DEEP DIVE II",
          subtitle:
            "From Exposure to Investment: Turning Climate & Nature Intelligence into Business Value",
          description:
            "As climate and nature increasingly influence investment decisions and long-term competitiveness, organisations need better intelligence to manage risk and identify opportunities. Leading organisations are increasingly leveraging climate and nature intelligence to strengthen investment decisions, improve risk management and create measurable business value.",
        },
      ],
    },
    {
      time: "15:30 – 16:00",
      title: "NETWORKING COFFEE BREAK",
      variant: "break",
    },
    {
      time: "16:00 – 16:40",
      title: "PANEL",
      subtitle:
        "Decarbonisation at Scale: From Scope 3 Commitments to Measurable Outcomes",
      description:
        "Scope 3 is becoming a business performance issue rather than simply a reporting requirement. Discover how organisations are embedding carbon management into procurement, supplier engagement and operational decision-making, supported by digital measurement, reporting and verification (MRV) capabilities.",
    },
    {
      time: "16:40 – 17:25",
      title: "PANEL",
      subtitle:
        "Putting Nature on the Balance Sheet: Natural Capital as a Strategic Business Asset",
      description:
        "Biodiversity, soil health and water resilience are becoming increasingly important business considerations. Organisations are increasingly integrating natural capital into sourcing, investment and long-term resilience strategies.",
    },
    {
      time: "17:25 – 17:30",
      title: "CLOSING REMARKS",
    },
    {
      time: "18:30 – 20:30",
      title: "NETWORKING SOIRÉE AT UK HOUSE OF LORDS (INVITATION ONLY)",
      variant: "break",
    },
  ],
};

const day2: DayAgenda = {
  label: "Day 2",
  date: "DAY 2, THURSDAY 22 OCTOBER 2026",
  theme: "DELIVERING THE SOLUTION – MOVING FROM STRATEGY TO EXECUTION",
  items: [
    {
      time: "08:00 – 09:00",
      title: "COFFEE REGISTRATION",
      variant: "break",
    },
    {
      time: "08:00 – 08:45",
      title: "MORNING BRIEFING",
    },
    {
      time: "09:00 – 09:05",
      title: "OPENING REMARKS",
    },
    {
      time: "09:05 – 09:15",
      title: "OPENING KEYNOTE",
    },
    {
      time: "09:15 – 09:30",
      title: "INSPIRATIONAL PRESENTATION",
    },
    {
      time: "09:30 – 10:45",
      title: "SIGNATURE PANEL",
      subtitle: "“Who Will Secure Coffee & Cocoa Supply by 2030?”",
      description:
        "Bringing together senior decision-makers from across the value chain to examine how procurement, finance, technology and partnerships must evolve to secure resilient coffee and cocoa supply for the decade ahead.",
    },
    {
      time: "10:45 – 11:15",
      title: "NETWORKING COFFEE BREAK",
      variant: "break",
    },
    {
      time: "11:15 – 12:00",
      title: "PANEL",
      subtitle:
        "Building the Next Generation of Resilient Coffee & Cocoa Production Systems",
      description:
        "Long-term supply resilience depends on production systems that integrate regenerative agriculture, strengthen biodiversity and help producers adapt to climate, market and resource pressures. Hear how producers, buyers and technology partners are scaling practical innovations to improve productivity, resilience and future supply.",
    },
    {
      time: "12:00 – 12:40",
      title: "PANEL DISCUSSION",
      subtitle:
        "“THE PROCUREMENT DECADE: SECURING SUPPLY IN AN ERA OF STRUCTURAL CHANGE”",
      description:
        "Procurement is becoming one of the industry’s most strategic business functions. The discussion focuses on how procurement leaders are balancing resilience, supplier partnerships, traceability and long-term competitiveness.",
    },
    {
      time: "12:40 – 13:40",
      title: "NETWORKING LUNCH + COFFEE TASTING",
      variant: "break",
    },
    {
      time: "13:40 – 14:10",
      title: "INNOVATION SHOWCASE",
      subtitle:
        "From Data to Decisions: AI & Digital Intelligence for Resilient Supply Chains",
      description:
        "See how AI, digital platforms and advanced analytics are helping organisations improve sourcing decisions, strengthen supplier visibility and build more resilient coffee and cocoa supply chains.",
    },
    {
      time: "14:10 – 14:50",
      title: "CLOSING PANEL",
      subtitle:
        "Mapping the Next Five Years: What Will Define the Future of Coffee & Cocoa?",
      description:
        "After two days of executive discussions, this closing forum distils the biggest insights, toughest challenges and defining opportunities shaping the future of coffee and cocoa.",
    },
    {
      time: "14:50 – 15:00",
      title: "CLOSING REFLECTIONS",
    },
  ],
};

const tabs = [
  { id: "full" as const, label: "Full agenda" },
  { id: "day1" as const, label: "21 Oct 2026" },
  { id: "day2" as const, label: "22 Oct 2026" },
];

type TabId = (typeof tabs)[number]["id"];

function startTime(time: string) {
  return time.split("–")[0]?.trim() ?? time;
}

function AgendaSession({ item }: { item: AgendaItem }) {
  const isBreak = item.variant === "break";
  const contentBg = isBreak ? "bg-lime-50" : "bg-gray-100";

  return (
    <div className="mt-4 flex gap-3 sm:gap-4">
      <div className="flex w-16 shrink-0 items-start justify-center bg-lime-700 px-2 py-4 sm:w-20">
        <span className="text-base font-bold text-white sm:text-lg">
          {startTime(item.time)}
        </span>
      </div>

      <div className={`min-w-0 flex-1 px-4 py-4 sm:px-5 sm:py-5 ${contentBg}`}>
        <h3 className="text-base font-bold text-gray-900 sm:text-lg">
          {item.title}
        </h3>

        {item.subtitle && (
          <p className="mt-2 font-semibold text-gray-800">{item.subtitle}</p>
        )}

        {item.description && (
          <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
            {item.description}
          </p>
        )}

        {item.extra && item.extra.length > 0 && (
          <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
            {item.extra.map((block) => (
              <div
                key={block.title}
                className="border border-lime-700/25 bg-white p-4"
              >
                <p className="text-sm font-bold uppercase tracking-wide text-lime-700">
                  {block.title}
                </p>
                {block.subtitle && (
                  <p className="mt-2 font-semibold text-gray-900">
                    {block.subtitle}
                  </p>
                )}
                {block.description && (
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">
                    {block.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function DaySection({ day, showHeading }: { day: DayAgenda; showHeading: boolean }) {
  return (
    <div>
      {showHeading && (
        <>
          <h3 className="mt-3 text-center text-2xl font-bold tracking-tight text-lime-700 sm:text-3xl">
            {day.date}
          </h3>
          <h4 className="mt-1 text-center text-xl font-bold tracking-tight sm:text-2xl">
            {day.theme}
          </h4>
        </>
      )}
      <div className={showHeading ? "mt-6" : "mt-2"}>
        {day.items.map((item) => (
          <AgendaSession key={`${day.label}-${item.time}-${item.title}`} item={item} />
        ))}
      </div>
    </div>
  );
}

function Agenda2026() {
  const [activeTab, setActiveTab] = useState<TabId>("full");

  return (
    <div id="agenda-2026" className="w-full scroll-mt-24">
      <div className="mx-auto max-w-5xl px-4 pb-16 pt-6 sm:px-6">
        <h2 className="relative text-center text-4xl font-bold tracking-tight">
          2026 AGENDA
        </h2>

        <div
          role="tablist"
          aria-label="2026 agenda days"
          className="mt-8 flex flex-wrap items-center justify-center gap-2 border-b border-gray-200 sm:gap-6"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.id)}
                className={`-mb-px border-b-2 px-3 py-3 text-base font-semibold transition-colors sm:px-4 sm:text-lg ${
                  isActive
                    ? "border-lime-700 text-lime-700"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-800"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="mt-8" role="tabpanel">
          {activeTab === "full" && (
            <>
              <DaySection day={day1} showHeading />
              <div className="mt-16">
                <DaySection day={day2} showHeading />
              </div>
            </>
          )}

          {activeTab === "day1" && (
            <>
              <h3 className="text-center text-2xl font-bold tracking-tight text-lime-700 sm:text-3xl">
                {day1.date}
              </h3>
              <h4 className="mt-1 text-center text-xl font-bold tracking-tight sm:text-2xl">
                {day1.theme}
              </h4>
              <DaySection day={day1} showHeading={false} />
            </>
          )}

          {activeTab === "day2" && (
            <>
              <h3 className="text-center text-2xl font-bold tracking-tight text-lime-700 sm:text-3xl">
                {day2.date}
              </h3>
              <h4 className="mt-1 text-center text-xl font-bold tracking-tight sm:text-2xl">
                {day2.theme}
              </h4>
              <DaySection day={day2} showHeading={false} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Agenda2026;
