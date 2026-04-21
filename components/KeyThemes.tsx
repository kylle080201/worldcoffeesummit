"use client"
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import regulationCompetitiveAdvantage from "../images/key-themes/REGULATION & COMPETITIVE ADVANTAGE.jpg";
import resilienceImperative from "../images/key-themes/THE RESILIENCE IMPERATIVE.jpg";
import spaceGeospatialIntelligence from "../images/key-themes/SPACE & GEOSPATIAL INTELLIGENCE .jpg";
import carbonLandscapeFinance from "../images/key-themes/CARBON & LANDSCAPE FINANCE.jpg";
import resilientSourcingProcurement from "../images/key-themes/RESILIENT SOURCING & PROCUREMENT.jpg";
import scope3EudrAction from "../images/key-themes/SCOPE 3 & EUDR IN ACTION.jpg";
import financingResilience from "../images/key-themes/FINANCING RESILIENCE.jpg";
import aiDigitalInfrastructure from "../images/key-themes/AI & DIGITAL INFRASTRUCTURE .jpg";
import regenerativeAgricultureAtScale from "../images/key-themes/REGENERATIVE AGRICULTURE AT SCALE.jpg";
import biodiversityValueCreation from "../images/key-themes/BIODIVERSITY & VALUE CREATION.jpg";
import soilHealthEcosystems from "../images/key-themes/SOIL HEALTH & ECOSYTEMS.jpg";
import theNewSupplyMap from "../images/key-themes/THE NEW SUPPLY MAP.jpg";

type ThemeCard = {
  title: string;
  subtitle: string;
  description: string;
  image: StaticImageData;
};

const keyThemes: ThemeCard[] = [
  {
    title: "EUDR Compliance & Competitive Advantage",
    subtitle: "From Compliance to Strategic Sourcing",
    description: "Turning regulatory pressure into stronger traceability, reduced risk, and more secure sourcing models.",
    image: regulationCompetitiveAdvantage,
  },
  {
    title: "The Resilience Imperative",
    subtitle: "Why Resilience Is Now Business-Critical",
    description: "Climate risk, sustainability, and adaptive strategy are redefining operational continuity and long-term value.",
    image: resilienceImperative,
  },
  {
    title: "Space & Geospatial Intelligence",
    subtitle: "From Data to Deployment",
    description: "Satellite technologies support compliance, risk management, and scalable solutions.",
    image: spaceGeospatialIntelligence,
  },
  {
    title: "Carbon Landscape Finance",
    subtitle: "Unlocking Scalable Solutions",
    description: "Mobilising capital through carbon markets and forest intelligence to drive investment.",
    image: carbonLandscapeFinance,
  },
  {
    title: "Resilient Sourcing & Procurement",
    subtitle: "From Cost to Supply Security",
    description: "Brands and traders are deploying capital, partnerships, and sourcing strategies to secure supply.",
    image: resilientSourcingProcurement,
  },
  {
    title: "Scope 3 in Action",
    subtitle: "From Compliance to Execution",
    description: "Translating emissions targets and regulatory requirements into systems, supplier onboarding, and real-world delivery.",
    image: scope3EudrAction,
  },
  {
    title: "Financing Resilience",
    subtitle: "The True Cost of Future Supply",
    description: "Allocating capital and evolving cost models to secure long-term supply.",
    image: financingResilience,
  },
  {
    title: "AI & Digital Infrastructure",
    subtitle: "Building the Backbone of Scalable Systems",
    description: "Data, traceability, and AI are unlocking investment and accelerating supply chain transformation.",
    image: aiDigitalInfrastructure,
  },
  {
    title: "Regenerative Agriculture at Scale",
    subtitle: "Embedding Nature as Infrastructure",
    description: "Moving beyond mitigation to embed nature-based solutions into long-term system stability.",
    image: regenerativeAgricultureAtScale,
  },
  {
    title: "Biodiversity & Value Creation",
    subtitle: "Building the Resilience Economy",
    description: "Turning nature into a measurable business driver for long-term stability and value.",
    image: biodiversityValueCreation,
  },
  {
    title: "Soil Health & Ecosystems",
    subtitle: "From Pilot to System Change",
    description: "Restoring soils and water balance to strengthen ecosystem resilience.",
    image: soilHealthEcosystems,
  },
  {
    title: "The New Supply Map",
    subtitle: "Redrawing Coffee & Cocoa Geography",
    description: "Climate, trade, and geopolitics are reshaping global sourcing and what leaders must do now.",
    image: theNewSupplyMap,
  },
];

function KeyThemes() {
  return (
    <section className="w-full bg-gray-100 px-6 pt-4 pb-12 sm:px-8 md:pt-2 md:pb-16">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
          2026 KEY THEMES
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {keyThemes.map((theme) => (
            <article
              key={theme.title}
              className="relative overflow-hidden rounded-3xl shadow-sm"
            >
              <Image
                src={theme.image}
                alt={theme.title}
                className="h-64 w-full object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={false}
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/65 to-black/20" />

              <div className="absolute bottom-3 left-0 right-0 flex h-44 flex-col px-4 pt-4 pb-6">
                <div className="min-h-[6.5rem]">
                  <h3 className="text-2xl font-semibold leading-tight text-white md:text-[1.7rem]">
                    {theme.title}
                  </h3>
                  <p className="mt-1 text-base italic leading-snug text-gray-100 md:text-lg">
                    {theme.subtitle}
                  </p>
                </div>
                <p className="mt-3 min-h-[2.75rem] text-sm leading-snug text-gray-100">
                  {theme.description}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            href="/interest"
            className="rounded-lg bg-lime-700 px-6 py-3 text-lg font-bold text-white transition-colors duration-300 hover:bg-lime-800"
          >
            REGISTER INTEREST
          </Link>
        </div>
      </div>
    </section>
  );
}

export default KeyThemes;