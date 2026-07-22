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
        "Traceability is becoming the licence to trade—but how much of today's coffee and cocoa supply is genuinely ready? As EUDR reshapes global value chains, what separates compliance on paper from compliance in practice—and what will it take to close the gap?",
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
      title:
        "GLOBAL LEADERS FORUM: IS THE TRADITIONAL COFFEE TRADING MODEL STILL FIT FOR THE FUTURE?",
      description:
        "Coffee trading has always adapted to change. Today's combination of regulation, volatility and supply uncertainty is testing whether traditional models remain fit for purpose. What will define the next generation of coffee trading?",
    },
    {
      time: "12:00 – 12:40",
      title:
        "PANEL: WHO PAYS—OR PROFITS—FROM RESILIENCE? FINANCING THE FUTURE OF GLOBAL SUPPLY CHAINS",
      description:
        "Resilience cannot be built without capital. Who carries the risk, who finances the transition and where is long-term value created? How are financial institutions, buyers and supply chain partners reshaping investment models to protect supply while creating long-term commercial value?",
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
      title: "EXECUTIVE DEEP DIVES",
      extra: [
        {
          title:
            "FROM SPACE TO STRATEGY: EARTH OBSERVATION, GEOSPATIAL INTELLIGENCE & AI",
          description:
            "Satellite intelligence is moving from maps to boardrooms. Discover how Earth Observation, geospatial intelligence and AI are supporting sourcing decisions, strengthening traceability and providing earlier visibility of supply risk.",
        },
        {
          title:
            "FROM EXPOSURE TO INVESTMENT: TURNING CLIMATE & NATURE INTELLIGENCE INTO BUSINESS VALUE",
          description:
            "Climate and nature data are becoming business intelligence. Explore how better insights are supporting investment decisions, improving risk management and helping organisations identify opportunities across global supply chains.",
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
      title:
        "PANEL: DECARBONISATION AT SCALE: FROM SCOPE 3 COMMITMENTS TO MEASURABLE OUTCOMES",
      description:
        "Moving from Scope 3 commitments to measurable outcomes remains one of the industry's biggest execution challenges. Discover how organisations are embedding carbon management into procurement, supplier engagement and day-to-day business decisions through practical implementation and digital MRV.",
    },
    {
      time: "16:40 – 17:25",
      title:
        "PANEL: PUTTING NATURE ON THE BALANCE SHEET: NATURAL CAPITAL AS A STRATEGIC BUSINESS ASSET",
      description:
        "Healthy landscapes underpin long-term productivity, supply security and investment performance. How can biodiversity, soil health and water resilience become measurable business assets rather than external costs?",
    },
    {
      time: "17:25 – 17:30",
      title: "CLOSING REMARKS",
    },
    {
      time: "18:30 – 20:30",
      title: "NETWORKING SOIRÉE AT UK HOUSE OF LORDS",
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
      title:
        "SIGNATURE PANEL: WHO WILL SECURE COFFEE & COCOA SUPPLY BY 2030?",
      description:
        "Bringing together senior decision-makers from across the coffee and cocoa value chain, this signature discussion examines how procurement, finance, technology and partnerships must evolve to secure future supply. Which decisions made today will matter most over the next decade?",
    },
    {
      time: "10:45 – 11:15",
      title: "NETWORKING COFFEE BREAK",
      variant: "break",
    },
    {
      time: "11:15 – 12:00",
      title:
        "PANEL: BUILDING THE NEXT GENERATION OF RESILIENT COFFEE & COCOA PRODUCTION SYSTEMS",
      description:
        "Higher productivity alone is no longer enough. Resilient production depends on farming systems that can respond to climate pressures, protect natural resources and remain commercially viable. What does scalable resilience look like on the ground?",
    },
    {
      time: "12:00 – 12:40",
      title:
        "PANEL: THE PROCUREMENT DECADE: SECURING SUPPLY IN AN ERA OF STRUCTURAL CHANGE",
      description:
        "Procurement is no longer simply about buying—it is becoming central to long-term supply resilience. Explore how leading organisations are balancing resilience, supplier partnerships and competitiveness in an increasingly uncertain market.",
    },
    {
      time: "12:40 – 13:40",
      title: "NETWORKING LUNCH + COFFEE TASTING",
      variant: "break",
    },
    {
      time: "13:40 – 14:10",
      title:
        "INNOVATION SHOWCASE: FROM DATA TO DECISIONS: AI & DIGITAL INTELLIGENCE FOR RESILIENT SUPPLY CHAINS",
      description:
        "Technology creates value only when it improves decisions. See how AI, digital platforms and advanced analytics are helping organisations strengthen sourcing, increase supply chain visibility and respond faster to emerging risks.",
    },
    {
      time: "14:10 – 14:50",
      title:
        "CLOSING PANEL: MAPPING THE NEXT FIVE YEARS: WHAT WILL DEFINE THE FUTURE OF COFFEE & COCOA?",
      description:
        "After two days of discussion, one question remains: what will define the next generation of resilient coffee and cocoa supply? From technology and finance to procurement and production, which shifts deserve the industry’s attention—and which are simply noise?",
    },
    {
      time: "14:50 – 15:00",
      title: "CLOSING REFLECTIONS",
    },
  ],
};

const tabs = [
  { id: "full" as const, label: "Full agenda" },
  { id: "day1" as const, label: "Day 1" },
  { id: "day2" as const, label: "Day 2" },
];

type TabId = (typeof tabs)[number]["id"];

function startTime(time: string) {
  return time.split("–")[0]?.trim() ?? time;
}

function toBarTitle(title: string, subtitle?: string) {
  if (!subtitle) return title.toUpperCase();
  const cleaned = subtitle.replace(/^[“"']+|[”"']+$/g, "").trim();
  return `${title}: ${cleaned}`.toUpperCase();
}

function AgendaSession({ item }: { item: AgendaItem }) {
  const isBreak = item.variant === "break";
  const barClass = isBreak ? "bg-gray-600" : "bg-lime-700";
  const heading = toBarTitle(item.title, item.subtitle);
  const hasDetails = Boolean(item.description || item.extra?.length);

  return (
    <div className="mt-8">
      <div className="grid h-max w-full grid-cols-10 gap-x-4">
        <div
          className={`col-span-2 mx-auto flex w-full items-center justify-center px-6 font-medium text-white ${barClass}`}
        >
          {startTime(item.time)}
        </div>
        <div
          className={`col-span-8 mx-auto flex w-full items-center px-6 py-2 font-medium uppercase text-white ${barClass}`}
        >
          {heading}
        </div>
      </div>

      {hasDetails && (
        <div className="mt-4 max-w-5xl px-2">
          {item.description && <p className="italic">{item.description}</p>}
          {item.extra && item.extra.length > 0 && (
            <div
              className={`grid grid-cols-1 gap-4 md:grid-cols-2 ${
                item.description ? "mt-4" : ""
              }`}
            >
              {item.extra.map((block) => (
                <div
                  key={block.title}
                  className="border border-lime-700/30 bg-lime-50/50 p-4"
                >
                  <p className="font-bold uppercase text-lime-700">
                    {toBarTitle(block.title, block.subtitle)}
                  </p>
                  {block.description && (
                    <p className="mt-2 italic">{block.description}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function DaySection({ day, showHeading }: { day: DayAgenda; showHeading: boolean }) {
  return (
    <div>
      {showHeading && (
        <>
          <h3 className="mt-3 text-center text-3xl font-bold tracking-tight text-lime-700">
            {day.date}
          </h3>
          <h4 className="text-center text-2xl font-bold tracking-tight">
            {day.theme}
          </h4>
        </>
      )}
      <div>
        {day.items.map((item) => (
          <AgendaSession
            key={`${day.label}-${item.time}-${item.title}`}
            item={item}
          />
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
              <h3 className="text-center text-3xl font-bold tracking-tight text-lime-700">
                {day1.date}
              </h3>
              <h4 className="text-center text-2xl font-bold tracking-tight">
                {day1.theme}
              </h4>
              <DaySection day={day1} showHeading={false} />
            </>
          )}

          {activeTab === "day2" && (
            <>
              <h3 className="text-center text-3xl font-bold tracking-tight text-lime-700">
                {day2.date}
              </h3>
              <h4 className="text-center text-2xl font-bold tracking-tight">
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
