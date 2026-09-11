"use client";

import { useState } from "react";
import { speakers2026, type Speaker } from "./Speakers2026";

type AgendaParticipant = Pick<
  Speaker,
  "name" | "designation" | "designationHtml" | "organization"
> & {
  image?: Speaker["image"];
};

type AgendaExtra = {
  title: string;
  subtitle?: string;
  description?: string;
  bullets?: string[];
  speaker?: AgendaParticipant;
  chair?: AgendaParticipant;
  speakers?: AgendaParticipant[];
};

type AgendaItem = {
  time: string;
  title: string;
  variant?: "session" | "break";
  subtitle?: string;
  description?: string;
  bullets?: string[];
  extra?: AgendaExtra[];
  speaker?: AgendaParticipant;
  chair?: AgendaParticipant;
  speakers?: AgendaParticipant[];
};

type DayAgenda = {
  label: string;
  date: string;
  theme: string;
  items: AgendaItem[];
};

function pick(...names: string[]): AgendaParticipant[] {
  return names.map((name) => {
    const speaker = speakers2026.find((entry) => entry.name === name);
    if (!speaker) {
      throw new Error(`Speaker not found for agenda: ${name}`);
    }
    return {
      name: speaker.name,
      designation: speaker.designation,
      designationHtml: speaker.designationHtml,
      organization: speaker.organization,
      image: speaker.image,
    };
  });
}

function pickOne(name: string): AgendaParticipant {
  return pick(name)[0];
}

function imageSrc(image: Speaker["image"] | undefined) {
  if (!image) return "";
  return typeof image === "string" ? image : image.src;
}

function AgendaSpeakerLine({ participant }: { participant: AgendaParticipant }) {
  const photo = imageSrc(participant.image);
  return (
    <div className="mb-3 flex items-start gap-3">
      {photo ? (
        <img
          className="agenda-img flex-shrink-0"
          src={photo}
          alt={participant.name}
        />
      ) : null}
      <p className="min-w-0 pt-1">
        <b>{participant.name}</b>,{" "}
        {participant.designationHtml ? (
          <span dangerouslySetInnerHTML={{ __html: participant.designationHtml }} />
        ) : (
          participant.designation
        )}
        {participant.organization ? (
          <>
            , <b>{participant.organization}</b>
          </>
        ) : null}
      </p>
    </div>
  );
}

function AgendaParticipants({
  speaker,
  chair,
  speakers,
}: {
  speaker?: AgendaParticipant;
  chair?: AgendaParticipant;
  speakers?: AgendaParticipant[];
}) {
  if (!speaker && !chair && !speakers?.length) return null;

  return (
    <div className="mt-4 text-base leading-relaxed">
      {speaker ? (
        <div>
          <p className="font-bold">Speaker</p>
          <AgendaSpeakerLine participant={speaker} />
        </div>
      ) : null}
      {chair ? (
        <div className={speaker ? "mt-4" : undefined}>
          <p className="font-bold">Chair</p>
          <AgendaSpeakerLine participant={chair} />
        </div>
      ) : null}
      {speakers && speakers.length > 0 ? (
        <div className={speaker || chair ? "mt-4" : undefined}>
          <p className="font-bold">Speakers</p>
          {speakers.map((participant) => (
            <AgendaSpeakerLine key={participant.name} participant={participant} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

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
      speaker: pickOne("Joy Macknight"),
    },
    {
      time: "09:05 – 09:15",
      title: "OPENING KEYNOTE",
    },
    {
      time: "09:15 – 09:25",
      title: "INSPIRATIONAL TALK",
      speaker: pickOne("The Rt. Hon John Gummer, The Lord Deben"),
    },
    {
      time: "09:25 – 10:15",
      title: "OPENING PANEL: EUDR READY? TRACEABILITY VS REALITY",
      description:
        "As EUDR reshapes global coffee and cocoa trade, traceability is becoming the licence to trade. But how ready is today's supply—and what separates compliance on paper from compliance in practice?",
      bullets: [
        "What does genuinely audit-ready traceability look like in practice?",
        "Can farm-level data deliver transparency without slowing trade or excluding smallholders?",
        "Which traceability approaches are proving reliable in practice — and where are gaps, inconsistencies or false confidence still emerging?",
      ],
      chair: pickOne("Mumbi Gitau"),
      speakers: pick(
        "Olivier Laboulle",
        "Mario Abreu",
        "Marcela Gaviria"
      ),
    },
    {
      time: "10:15 – 10:30",
      title: "CASE STUDY",
      speaker: pickOne("Patrick Lanz"),
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
        "Coffee trading has always evolved—but today's combination of regulation, volatility and supply uncertainty raises a bigger question: what will define the next generation of coffee trading?",
      bullets: [
        "As volatility intensifies, how should risk and value be shared across the supply chain?",
        "As buyers demand greater visibility and supply security, how must the trader’s role evolve?",
        "As procurement moves from a buying function to a strategic business priority, how will this reshape the role of traders and supplier relationships?",
      ],
      speakers: pick("Tim Scharrer", "Chrystel Monthean", "Eric Gorlier"),
    },
    {
      time: "12:00 – 12:40",
      title:
        "PANEL: WHO PAYS—OR PROFITS—FROM RESILIENCE? FINANCING THE FUTURE OF GLOBAL SUPPLY CHAINS",
      description:
        "Resilience cannot be built without capital. Who carries the risk, who finances the transition and where is long-term value created? As investment priorities evolve, which financing models will prove most effective in securing future supply?",
      bullets: [
        "What will make climate and supply-chain resilience genuinely investable at scale?",
        "How can blended finance, insurance and public-private capital reach farms and supply chains more effectively?",
        "Where can insurance and risk-transfer mechanisms unlock investment that traditional finance cannot?",
      ],
      chair: pickOne("Joy Macknight"),
      speakers: pick(
        "Anup Jagwani",
        "Dr. Sarah Tischer",
        "Saurabh Sharma"
      ),
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
          bullets: [
            "Can satellite and geospatial intelligence identify supply risks early enough for procurement teams to act?",
            "Which use cases are most likely to move Earth Observation from pilots into everyday sourcing, traceability and supply decisions?",
          ],
        },
        {
          title:
            "FROM EXPOSURE TO INVESTMENT: TURNING CLIMATE, NATURE & RISK INTELLIGENCE INTO BUSINESS VALUE",
          description:
            "Climate and nature data are becoming business intelligence. With a potentially very strong El Niño sharpening attention on agricultural supply risk, explore how better insights are supporting investment decisions, improving risk management and helping organisations identify opportunities across global supply chains.",
          bullets: [
            "What could a very strong El Niño mean for coffee and cocoa supply risk over the next 12–18 months?",
            "Can climate and nature intelligence reveal financial exposure before it hits supply and earnings?",
            "How can better climate and nature intelligence translate into earlier action and stronger financial protection?",
          ],
          speakers: pick("David Laborde", "Luke Knowles"),
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
        "Moving from Scope 3 commitments to measurable outcomes remains one of the industry's biggest execution challenges. What will it take to embed carbon management into procurement, supplier engagement and day-to-day business decisions—and how can digital MRV help turn ambition into measurable action?",
      bullets: [
        "Scope 3 targets are set—but where are emissions actually falling across the supply chain?",
        "How can digital MRV deliver credible farm-level data without creating additional burdens for producers?",
        "How should the cost and responsibility of upstream decarbonisation be shared?",
      ],
      chair: pickOne("Sonya Bhonsle"),
      speakers: pick(
        "Andre van den Beld",
        "Cleiton Vargas",
        "Kevin Duisters",
        "Anders Frigaard"
      ),
    },
    {
      time: "16:40 – 17:25",
      title:
        "PANEL: PUTTING NATURE ON THE BALANCE SHEET: NATURAL CAPITAL AS A STRATEGIC BUSINESS ASSET",
      description:
        "Healthy landscapes underpin long-term productivity, supply security and investment performance. How can biodiversity, soil health and water resilience become measurable business assets rather than external costs?",
      bullets: [
        "How can nature-related risks and dependencies be measured and valued credibly enough to influence sourcing, investment and risk decisions?",
        "Can businesses put a price on nature without reducing it to a purely financial metric?",
        "How can natural capital approaches create measurable value for both supply chains and producing communities?",
      ],
      chair: pickOne("David Laborde"),
      speakers: pick(
        "Juliette Cody",
        "Toby Behrmann",
        "Raymond Bob Katta"
      ),
    },
    {
      time: "17:25 – 17:30",
      title: "CLOSING REMARKS",
      speaker: pickOne("Joy Macknight"),
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
      speaker: pickOne("Sean Edwards"),
    },
    {
      time: "09:05 – 09:15",
      title: "OPENING KEYNOTE",
    },
    {
      time: "09:15 – 09:25",
      title: "INSPIRATIONAL PRESENTATION",
    },
    {
      time: "09:25 – 10:40",
      title: "PANEL: WHO WILL SECURE COFFEE & COCOA SUPPLY BY 2030?",
      description:
        "Bringing together senior decision-makers from across the coffee and cocoa value chain, this signature discussion examines how procurement, finance, technology and partnerships must evolve to secure future supply. Which decisions made today will matter most over the next decade?",
      bullets: [
        "Where will future coffee and cocoa supply come from as production conditions change?",
        "Which investments made today will have the greatest impact on supply resilience through 2030?",
        "Which actions and commitments are needed across producers, traders, brands, governments and investors to secure future supply?",
      ],
      chair: pickOne("Jenny Davis-Peccoud"),
      speakers: pick(
        "Olivier Laboulle",
        "Dr. Sarah Tischer",
        "Piet van Asten",
        "Juliette Cody",
        "Mario Abreu"
      ),
    },
    {
      time: "10:40 – 11:10",
      title: "NETWORKING COFFEE BREAK",
      variant: "break",
    },
    {
      time: "11:10 – 11:50",
      title:
        "PANEL: REGENERATIVE AGRICULTURE – BUILDING THE NEXT GENERATION OF RESILIENT COFFEE & COCOA PRODUCTION SYSTEMS",
      description:
        "If higher productivity alone is no longer enough, what will resilient production look like? How can farming systems respond to climate pressures, protect natural resources and remain commercially viable at scale?",
      bullets: [
        "Which practices are delivering measurable gains in resilience, productivity and farmer economics?",
        "Can regenerative models contribute meaningfully to the living-income challenge—or are different economic levers still required?",
        "Which technologies and data can help prove what works at farm level — and support wider adoption at scale?",
      ],
      chair: pickOne("Eden Cottee-Jones"),
      speakers: pick("Piet van Asten", "Ben Rimaud", "Adam Jason"),
    },
    {
      time: "11:50 – 12:30",
      title: "PANEL: BEYOND AI – FROM ADOPTION TO ADVANTAGE",
      description:
        "AI is only valuable when it helps organisations make faster, better and more confident decisions. As the pace of innovation accelerates, what separates the technologies that transform organisations from those that struggle to gain traction?",
      bullets: [
        "Where is AI already delivering measurable value across sourcing, forecasting and supply-chain risk?",
        "What separates AI applications that scale from those that remain pilots?",
        "Who owns, governs and is accountable for the data behind AI-driven decisions?",
      ],
      speakers: pick("Paola Scarpa", "Tim Scharrer"),
    },
    {
      time: "12:30 – 13:30",
      title: "NETWORKING LUNCH + COFFEE TASTING",
      variant: "break",
    },
    {
      time: "13:30 – 14:10",
      title:
        "PANEL: THE PROCUREMENT DECADE: SECURING SUPPLY IN AN ERA OF STRUCTURAL CHANGE",
      description:
        "Procurement is no longer simply about buying—but can it become one of the industry's greatest drivers of long-term supply resilience? How are leading organisations balancing resilience, supplier partnerships and competitiveness in an increasingly uncertain market?",
      bullets: [
        "How are procurement teams rethinking cost, risk and supply security as market volatility increases?",
        "What would stronger, longer-term supplier partnerships look like in practice?",
        "How will technology, data and AI reshape risk visibility and long-term sourcing decisions?",
      ],
      chair: pickOne("Michael Mowat"),
      speakers: pick(
        "Malcolm Hett",
        "Lena Schweighöfer",
        "Rick van der Kamp"
      ),
    },
    {
      time: "14:10 – 14:50",
      title:
        "CLOSING PANEL: MAPPING THE NEXT FIVE YEARS: WHAT WILL DEFINE THE FUTURE OF COFFEE & COCOA?",
      description:
        "After two days of discussion, one question remains: what will define the next generation of resilient coffee and cocoa supply? From technology and finance to procurement and production, which shifts deserve the industry’s attention—and which are simply noise?",
      bullets: [
        "How will climate change reshape coffee and cocoa production geographies — and how must capital, regulation and technology respond through 2030?",
        "What should the industry scale now—and what deserves less attention?",
      ],
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
  const hasDetails = Boolean(
    item.description ||
      item.bullets?.length ||
      item.extra?.length ||
      item.speaker ||
      item.chair ||
      item.speakers?.length
  );

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
        <div className="mt-4 w-full px-2">
          {item.description && <p className="italic">{item.description}</p>}
          {item.bullets && item.bullets.length > 0 && (
            <ul
              className={`list-disc space-y-1 pl-5 text-base leading-relaxed ${
                item.description ? "mt-3" : ""
              }`}
            >
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          )}
          {item.extra && item.extra.length > 0 && (
            <div
              className={`grid grid-cols-1 gap-4 md:grid-cols-2 ${
                item.description || item.bullets?.length ? "mt-4" : ""
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
                  {block.bullets && block.bullets.length > 0 && (
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-base leading-relaxed">
                      {block.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                  <AgendaParticipants
                    speaker={block.speaker}
                    chair={block.chair}
                    speakers={block.speakers}
                  />
                </div>
              ))}
            </div>
          )}
          <AgendaParticipants
            speaker={item.speaker}
            chair={item.chair}
            speakers={item.speakers}
          />
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
    <>
      <style>{`
        .agenda-img {
          display: block;
          height: 50px;
          width: 50px;
          border-radius: 100%;
        }
      `}</style>
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
    </>
  );
}

export default Agenda2026;
