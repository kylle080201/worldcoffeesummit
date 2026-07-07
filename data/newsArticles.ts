import type { StaticImageData } from 'next/image'
import headerImage from '../images/about-wcis/ICONS/images/header.jpg'

export type NewsArticleParagraph = {
  text: string
  bold?: boolean
}

export type NewsArticle = {
  slug: string
  category: string
  title: string
  communiquéTitle: string
  subtitle: string
  tagline: string
  excerpt: string
  date: string
  dateTime: string
  image: StaticImageData
  imageAlt: string
  body: NewsArticleParagraph[]
}

export const newsArticles: NewsArticle[] = [
  {
    slug: 'global-leaders-forge-coffee-cocoa-innovation-agenda',
    category: 'WCIS2025 RECAP',
    title:
      'Global Leaders Forge Coffee & Cocoa Innovation Agenda in London Ahead of COP30',
    communiquéTitle:
      'World Coffee Innovation Summit London 2025 – Post Summit Communiqué',
    subtitle:
      'Global Leaders Forge Coffee & Cocoa Innovation Agenda in London Ahead of COP30',
    tagline:
      '“The Bigger Picture” – Unlocking Coffee & Cocoa Synergies Through Innovation',
    excerpt:
      'Explore the key themes, discussions and milestones from WCIS25, including how the Summit brought coffee and cocoa into a shared strategic conversation.',
    date: '31 October 2025',
    dateTime: '2025-10-31',
    image: headerImage,
    imageAlt: 'Panel discussion at World Coffee Innovation Summit',
    body: [
      {
        text: 'As the world looks ahead to COP30 in Belém, more than 200 senior leaders from the coffee, cocoa, climate, finance, and innovation sectors gathered in London last week to confront a defining question: how can global value chains turn sustainability from compliance into business strategy?',
        bold: true,
      },
      {
        text: 'The 3rd World Coffee Innovation Summit London (WCIS25), hosted by the World Coffee Alliance (WCA) at the QEII Centre, brought together decision-makers from across the coffee and cocoa value chains— from multinational brands and investors to origin-country governments and technology innovators — to chart a shared path toward resilience and inclusion in agri-food systems.',
      },
      {
        text: 'Rather than treating coffee and cocoa as separate conversations, WCIS25 created a shared platform for both industries to examine the intersections between regulation, resilience, finance, technology and inclusive growth—reflecting the growing recognition that many of their most pressing challenges —and opportunities—are increasingly shared.',
      },
      {
        text: '“Behind every tonne of coffee or cocoa lies a farmer facing drought, price volatility, and uncertainty,” said Joseph de Villiers, CEO and Founder of the World Coffee Alliance (WCA). “Our challenge is to design an ecosystem that rewards innovation and shared responsibility — not isolation.”',
      },
      {
        text: 'Opening addresses by H.E. Catherine Kirumba Karemu, High Commissioner of Kenya to the United Kingdom, and H.E. Mbelwa Kairuki, High Commissioner of Tanzania, underscored the urgency of aligning technology and policy to empower producers and safeguard livelihoods across origin countries.',
      },
      {
        text: 'Chaired by Agnieszka de Sousa, Global Food Tsar at Bloomberg News, the opening panel — “EUDR, CSRD & CS3D Compliance: From Compliance to Competitive Advantage” — set the tone for two days of candid dialogue. Following panels chaired by BCG and EY, and other leading global organisations argued that sustainability reporting, once a regulatory burden, is becoming a source of trust, investment, and strategic differentiation.',
      },
      {
        text: 'Day 2 opened with the fireside “The Bigger Picture: The Road to Belém”, chaired by Peter Foster, World Trade Editor at The Financial Times (FT). The discussion — joined by IFC and Bain & Company — explored how global value chains can stay connected amid changing geopolitical and economic landscape, tightening regulation, wavering carbon markets, and shifting climate risks.',
      },
      {
        text: 'Later, Jenny Davis-Peccoud of Bain & Company convened the flagship session, “Coffee & Cocoa Synergies – Unity for Resilience”, featuring voices from the International Finance Corporation (IFC) and major global brands and industry players. Together, they examined how shared innovation, blended finance, and regenerative investment can drive measurable impact at origin.',
      },
      {
        text: 'In “Carbon Confidence”, “Decoding Nature’s Complexity”, and the “Global Investors Forum” — moderated by Joy Macknight, journalist and former Editor of The Banker (Financial Times) — leaders from Howden, IFC, and Sumitomo Mitsui Banking Corporation (SMBC) unpacked how to move from ambition to accountability in climate-finance systems.',
      },
      {
        text: 'A highlight of the Summit was the official launch of the “Tanzania Coffee Hub” by the Tanzania High Commission, spotlighting the country’s role in building sustainable trade links and protecting forest landscapes. A curated coffee tasting showcased distinctive lots from Tanzania, Colombia, and Kenya, celebrating both origin diversity and the science of quality.',
      },
      {
        text: '“Innovation without inclusion is no innovation at all,” said H.E. Mbelwa Kairuki. “Our producers must be part of the conversation — and the transformation.”',
      },
      {
        text: 'Across the exhibition floor, sponsors Planet, Picterra, Chloris Geospatial, and Satelligence, and exhibitors demonstrated how space data, AI, and geospatial analytics are transforming traceability and landscape monitoring. Their solutions captured the Summit’s vision: combining digital precision with human purpose.',
      },
      {
        text: 'From Starbucks, Mars, Melitta Group, Ferrero, and Barry Callebaut to Aldi SOUTH Group, Volcafe, Touton Group, ofi, UCC Europe, ESA, IFC, Yara International, and Syngenta Group, participants reaffirmed the importance of business-led, science-based and cross-sector collaboration.',
      },
      {
        text: 'The Summit’s closed-door format encouraged candid debate and trust-building among leaders shaping the future of global supply chains. WCIS25 marked an important milestone in bringing coffee and cocoa into a shared strategic conversation ahead of COP30—one that continues to gain relevance as both sectors face increasingly interconnected challenges around climate resilience, regulation, finance, technology and long-term supply security.',
      },
      {
        text: 'These conversations continue at the World Coffee Innovation Summit London 2026.',
      },
    ],
  },
]

export function getNewsArticleBySlug(slug: string) {
  return newsArticles.find((article) => article.slug === slug)
}
