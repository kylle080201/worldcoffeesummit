import React from 'react'

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

function KeyThemes() {
  const themesColumn1 = keyThemes.slice(0, 5);
  const themesColumn2 = keyThemes.slice(5);
  return (
    <div className='mx-auto sm:max-w-7xl'>
      <div className='flex w-full justify-center'>
        <h2 className="text-4xl font-bold tracking-tight">2024 KEY THEMES</h2>
      </div>
      
      <div className='grid grid-cols-2 gap-12 mt-12'>
        {/* Column 1 */}
        <div className="col-span-1">
          <ul className="list-disc flex flex-col gap-4 ml-6">
            {themesColumn1.map(theme => (
              <li key={theme.title} className="text-xl">
                <strong>{theme.title}:</strong> {theme.description}
              </li>
            ))}
          </ul>
        </div>
        {/* Column 2 */}
        <div className="col-span-1">
          <ul className="list-disc flex flex-col gap-4 ml-6">
            {themesColumn2.map(theme => (
              <li key={theme.title} className="text-xl">
                <strong>{theme.title}:</strong> {theme.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default KeyThemes