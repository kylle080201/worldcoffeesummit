"use client"
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import regulationCompetitiveAdvantage from "../images/key-themes/REGULATION & COMPETITIVE ADVANTAGE.jpg";
import spaceGeospatialIntelligence from "../images/key-themes/SPACE & GEOSPATIAL INTELLIGENCE .jpg";
import carbonLandscapeFinance from "../images/key-themes/CARBON & LANDSCAPE FINANCE.jpg";
import resilientSourcingProcurement from "../images/key-themes/RESILIENT SOURCING & PROCUREMENT.jpg";
import scope3EudrAction from "../images/key-themes/SCOPE 3 & EUDR IN ACTION.jpg";
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
    description: "Traceability • Risk Reduction • Market Access",
    image: regulationCompetitiveAdvantage,
  },
  {
    title: "Space & Geospatial Intelligence",
    subtitle: "From Monitoring to Strategic Intelligence",
    description: "Satellite Data • Predictive Analytics • MRV (Monitoring, Reporting, Verification)",
    image: spaceGeospatialIntelligence,
  },
  {
    title: "Climate & Carbon Finance",
    subtitle: "Unlocking Scalable Solutions",
    description: "Carbon Markets • Climate Finance • Producer Investment",
    image: carbonLandscapeFinance,
  },
  {
    title: "Regenerative Agriculture at Scale",
    subtitle: "Scaling Regenerative Practices for Long-Term Resilience",
    description: "Productivity • Farmer Livelihoods • Regenerative Practices",
    image: regenerativeAgricultureAtScale,
  },
  {
    title: "Scope 3 in Action",
    subtitle: "From Compliance to Execution",
    description: "Supplier Engagement • Emissions Reduction • Reporting",
    image: scope3EudrAction,
  },
  {
    title: "Soil Health & Ecosystems",
    subtitle: "From Pilot to System Change",
    description: "Soil Health • Water Security • Ecosystem Resilience",
    image: soilHealthEcosystems,
  },
  {
    title: "Resilient Sourcing & Procurement",
    subtitle: "From Cost to Supply Security",
    description: "Supply Security • Procurement • Producer Partnerships",
    image: resilientSourcingProcurement,
  },
  {
    title: "Biodiversity & Farm Resilience",
    subtitle: "Building Productive & Resilient Landscapes",
    description: "Ecosystem Services • Nature-Based Solutions • Landscape Stewardship",
    image: biodiversityValueCreation,
  },
  {
    title: "The Future of Coffee & Cocoa Supply",
    subtitle: "Redrawing Coffee & Cocoa Geography",
    description: "Climate Risk • Global Trade • Geopolitics",
    image: theNewSupplyMap,
  },
];

const navButtonClassName =
  "rounded-lg bg-lime-700 px-6 py-3 text-lg font-bold text-white transition-colors duration-300 hover:bg-lime-800";

export function AgendaNavigator({ useHashLinks = false }: { useHashLinks?: boolean }) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {useHashLinks ? (
        <a href="#agenda-2025" className={navButtonClassName}>
          2025 AGENDA
        </a>
      ) : (
        <Link href="/agenda#agenda-2025" className={navButtonClassName}>
          2025 AGENDA
        </Link>
      )}
    </div>
  );
}

function KeyThemes({ showNavigator = true, compactTop = false }: { showNavigator?: boolean; compactTop?: boolean }) {
  return (
    <section
      id="key-themes-2026"
      className={`w-full scroll-mt-24 px-6 pb-12 sm:px-8 md:pb-16 ${compactTop ? 'pt-4 sm:pt-6' : 'pt-10 md:pt-12'}`}
    >
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
                className="h-72 w-full object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={false}
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/65 to-black/20" />

              <div className="absolute inset-x-0 bottom-0 flex flex-col px-4 pt-4 pb-8">
                <div className="min-h-[6.5rem]">
                  <h3 className="text-2xl font-semibold leading-tight text-white uppercase md:text-[1.7rem]">
                    {theme.title}
                  </h3>
                  <p className="mt-1 text-base italic leading-snug text-gray-100 md:text-lg">
                    {theme.subtitle}
                  </p>
                </div>
                <p className="mt-3 text-base font-bold leading-snug text-gray-100 md:text-lg">
                  {theme.description}
                </p>
              </div>
            </article>
          ))}
        </div>
        {showNavigator && (
          <div className="mt-8">
            <AgendaNavigator />
          </div>
        )}
      </div>
    </section>
  );
}

export default KeyThemes;