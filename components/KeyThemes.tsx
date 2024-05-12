import React from 'react'
import TestimonialSlider from './LoopedSpeakers';

const keyThemes = [
  {
    title: "EUDR COUNTDOWN, WELCOME CSDDD",
    description: "Navigating climate policy and regulatory risks as a pathway towards a positive impact on the ground"
  },
  {
    title: "COFFEE INNOVATION & GENOMICS",
    description: "Unlocking the potential of Genomics in coffee breeding and other climate science breakthroughs for a more climate resilient variety in the international market."
  },
  {
    title: "REGENERATIVE AGRICULTURE",
    description: "Investing in scalable nature-positive production and incorporating it into climate strategy across the sustainable supply chain. "
  },
  {
    title: "NATURE CAPITAL & NATURE-BASED SOLUTIONS",
    description: "Finding solutions to address societal challenges involving actions to protect, sustainably manage and restore natural and modified ecosystems, benefiting people, business and nature at the same time."
  },
  {
    title: "CARBON MARKETS",
    description: "Navigating opportunities in natural-based solutions and Scaling climate impact through carbon markets."
  },
  {
    title: "SCALING UP TRANSPARENCY PLATFORMS",
    description: "Tackling Traceability, Monitoring and Measurement platforms for assess real impact and regulatory compliance."
  },
  {
    title: "AGRICULTURE FINANCE",
    description: "Leveraging Advanced Technologies including Fintech to improve smallholder farmers’ access and climate risk coverage."
  },
  {
    title: "DATA AND DIGITALISATION",
    description: "Fuelling transparency and traceability of the supply chain and supporting decarbonisation."
  },
  {
    title: "INNOVATION SHOWCASE",
    description: "How advance technologies deliver transparent, trustworthy and scalable nature-based and engineered solutions."
  },
  {
    title: "CROSS-SECTOR COLLABORATION",
    description: "Sharing best practices and innovations with other sectors and accelerating progress towards a net positive future"
  },
]

const testimonials = [
  {
    title: 'Director-General',
    author: 'Dr. Qu Dongyu',
    company: 'Food and Agriculture Organization of the United Nations (FAO)',
    imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2023/07/DG_banner-Bio.png'
  },
  {
    title: 'Senior Strategic Advisor',
    author: 'Anthony Hobley',
    company: 'Inevitable Policy Response & World Economic Forum (WEF)',
    imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2023/06/ANTHONY-HOBLEY-PHOTO.jpg'
  },
  {
    title: 'Head of Unit, INTPA',
    author: 'Dr. Leonard Mizzi',
    company: 'European Commission (EC)',
    imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2023/05/DR-LEONARD-MIZZI.jpg'
  },
  {
    title: 'Executive Director',
    author: 'Vanusia Nogueira',
    company: 'International Coffee Organization(ICO)',
    imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2022/07/VANUSIA-NOGUEIRA_ICO-Square-scaled.jpg'
  },
  {
    title: 'Ethiopian Ambassador to the United Kingdom',
    author: 'H.E. Teferi Melesse Desta',
    company: '',
    imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2023/05/TEFERI-MELESSE-DESTA.jpg'
  },
  {
    title: 'Ambassador of Switzerland to the United Kingdom',
    author: 'H.E. Markus Leitner',
    company: '',
    imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2023/05/MARKUS-LEITNER.jpg'
  },
  {
    title: 'Ambassador Extraordinary and Plenipotentiary of Japan to the United Kingdom of Great Britain and Northern Ireland',
    author: 'H.E. Hajime Hayashi',
    company: "",
    imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2023/05/HAYASHU-HAJIME-1.jpg'
  },
  {
    title: 'Ambassador from the Republic of El Salvador to the United Kingdom',
    author: 'H.E. Mrs. Carmen María Gallardo',
    company: "",
    imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2023/06/Carmen-Maria-Gallardo.jpg'
  },
  {
    title: 'High Commissioner of the Republic of Kenya to the United Kingdom',
    author: 'H.E. Mr Manoah Esipisu',
    company: "",
    imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2023/06/HE-Mr-Manoah-Esipisu.webp'
  },
  {
    title: 'Ambassador of the Republic of Nicaragua to the United Kingdom',
    author: 'H.E. Guisell Morales-Echaverry',
    company: "",
    imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2023/08/H.E.-Guisell-Morales-Echaverry.jpeg'
  },
  {
    title: 'Executive Director',
    author: 'Paul Rooke',
    company: 'British Coffee Association (BCA)',
    imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2023/05/PAUL-ROOKE.jpg'
  },
  {
    title: 'Executive Director',
    author: 'Melissa Duncan',
    company: 'Fairtrade International',
    imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2023/02/preferred-Melissa-Duncan.jpg'
  },
  {
    title: 'Senior Executive Editor',
    author: 'William Kennedy',
    company: 'Bloomberg',
    imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2023/05/WILLIAM-KENNEDY.jpg'
  },
  {
    title: 'Global Soft Commodities Correspondent',
    author: 'Nigel Hunt',
    company: 'Reuters',
    imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2023/06/NIGEL-HUNT-THOMSON-REUTERS.jpg'
  },
  {
    title: 'Climate Change Senior Specialist',
    author: 'Anna R Rios',
    company: 'Inter-American Development Bank (IADB)',
    imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2023/05/ANNA-R-RIOS.jpg'
  },
  {
    title: 'Partner, Director, Blended Finance',
    author: 'Katherine Stodulka',
    company: 'Systemiq',
    imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2023/05/KATHERINE-SODULKA.png'
  },
  {
    title: 'Senior EU Policy Advisor',
    author: 'Gert van der Bijl',
    company: 'Solidaridad',
    imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2023/07/Gert-van-der-Bijl-portrait-scaled.jpg'
  },
  {
    title: 'Senior Advisor Sustainability and Livelihood',
    author: 'Dr. Martina Bozzola',
    company: 'International Trade Centre (UN/WTO)',
    imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2023/07/Bozzola.Martina-scaled.jpg'
  },
  {
    title: 'President',
    author: 'Dr. Alvaro Lario',
    company: 'International Fund of Agricultural Development (IFAD) ',
    imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2023/07/mut5673199979946008165-1.jpg'
  },
  {
    title: 'Earth System Science',
    author: 'Professor Mark Maslin',
    company: 'University College London (UCL), Natural History Museum of Denmark',
    imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2023/07/Mark-Maslin2.jpg'
  },
  {
    title: 'Founder and Co-CEO',
    author: 'Cedric Lombard',
    company: 'Impact Finance',
    imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2023/07/CLO2.png'
  },
  {
    title: 'Vice Chair; Vice President for the UK; Business Consultant',
    author: 'Juan Cabrera',
    company: 'IoD Natural Resources Group; Government Blockchain Association (GBA); WBAF',
    imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-03-at-10.14.08.jpeg'
  },
  {
    title: 'President',
    author: 'Jo Paisley',
    company: 'GARP Risk Institute (GRI)',
    imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2023/08/Jo_Paisley_GARP.jpg'
  },
  {
    title: 'Former Chairman',
    author: 'The Rt. Hon John Gummer, Lord Deben',
    company: 'UK Climate Change Committee (The CCC)',
    imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2023/08/Lord-Deben-Photo-2019-adj-003-scaled-1.jpg'
  },
  {
    title: 'Founder',
    author: 'Abdelrahman Fathalla',
    company: 'Guillam Coffee House',
    imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2023/09/IMG_6956-scaled.jpg'
  },
  {
    title: 'General Manager',
    author: 'Dejene Dadi Dika',
    company: 'Oromia Coffee Farmers Cooperatives Union(OCFCU)',
    imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2023/09/20221227_091347.jpg'
  },
  {
    title: 'Environmental Correspondent',
    author: 'Shooka Bidarian',
    company: 'Manoto TV',
    imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2023/09/ShookaB.jpeg'
  },
  {
    title: 'President',
    author: 'Clive de Ruig',
    company: 'ICE Benchmark Administration',
    imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2023/09/Clive-de-Ruig-Headshot.jpg'
  },
  {
    title: 'UK Representative',
    author: 'Alp Somyurek',
    company: 'Turkish Coffee Culture And Research Association',
    imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2023/09/Alp-Somyurek.jpg'
  },
  {
    title: 'Member UK House of Lords',
    author: 'Baroness Sandy Verma',
    company: 'Former Minister for Energy & Climate Change and International Development',
    imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2023/09/baroness-verma-photo.jpg'
  },
  {
    title: 'Co-founder and CEO',
    author: 'Thomas Vaassen',
    company: 'Meridia',
    imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2023/09/Thomas-Vaassen-Meridia-scaled.jpg'
  },
];


function KeyThemes() {
  const themesColumn1 = keyThemes.slice(0, 5);
  const themesColumn2 = keyThemes.slice(5);
  return (
    <div className='mx-auto sm:max-w-7xl'>
      <h2 className="text-4xl font-bold tracking-tight">KEY THEMES</h2>
      <div className='grid grid-cols-2 gap-12 mt-12'>
        {/* Column 1 */}
        <div className="col-span-1">
          <ul className="list-disc flex flex-col gap-4 ml-6">
            {themesColumn1.map(theme => (
              <li key={theme.title}>
                <strong>{theme.title}:</strong> {theme.description}
              </li>
            ))}
          </ul>
        </div>
        {/* Column 2 */}
        <div className="col-span-1">
          <ul className="list-disc flex flex-col gap-4 ml-6">
            {themesColumn2.map(theme => (
              <li key={theme.title}>
                <strong>{theme.title}:</strong> {theme.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <TestimonialSlider testimonials={testimonials} />
    </div>
  );
}

export default KeyThemes