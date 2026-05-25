 "use client"
import { Transition, Dialog } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import Image, { type StaticImageData } from 'next/image'
import chrystelImage from '../images/2026-speakers/Yara international-Chrystel-Monthean/Chrystel Monthean.jpg'
import yaraLogo from '../images/2026-speakers/Yara international-Chrystel-Monthean/Knowledge_grows_for_A4.png'
import tawandaImage from '../images/2026-speakers/Gates-Foundation-Tawanda-Mthintwa-Hove/tawanda.jpg'
import gatesLogo from '../images/2026-speakers/Gates-Foundation-Tawanda-Mthintwa-Hove/3840px-Gates_Foundation_Logo.svg.png'
import marisaImage from '../images/2026-speakers/SC-Marisa Drew/Marisa Drew.jpeg'
import marisaLogo from '../images/2026-speakers/SC-Marisa Drew/sc-lock-up-english-grey-rgb.png'
import jennyImage from '../images/2026-speakers/Bain & Co.-Jenny Davis-Peccoud/Jenny Davis-Peccoud.jpg'
import bainLogo from '../images/2026-speakers/Bain & Co.-Jenny Davis-Peccoud/bainstackedlogo_dig_red_1280x389px (1).png'
import prueImage from '../images/2026-speakers/Google-Prue Mackenzie/prue photo (1).jpg'
import googleLogo from '../images/2026-speakers/Google-Prue Mackenzie/Google Logo.png'
import katrinaImage from '../images/2026-speakers/HSBC-Katrina-Hayter/Katrina Hayter.jpeg'
import hsbcLogo from '../images/2026-speakers/HSBC-Katrina-Hayter/Hsbc_logo_PNG2.png'
import sonyaImage from '../images/2026-speakers/CDP-Sonya Bhonsle/Sonya Bhonsle.jpg'
import cdpLogo from '../images/2026-speakers/CDP-Sonya Bhonsle/cdp.png'
const anupImage = '/images/2026-speakers/anup-jagwani.jpg'
const worldBankLogo = '/images/2026-speakers/world-bank-group-logo.png'
const teddyImage = '/images/2026-speakers/teddy-esteve.jpg'
const ecomLogo = '/images/2026-speakers/ecom-logo.jpg'
const timImage = '/images/2026-speakers/tim-scharrer.jpg'
const volcafeLogo = '/images/2026-speakers/volcafe-logo.png'
const olivierImage = '/images/2026-speakers/olivier-laboulle.jpeg'
const olivierLogo = '/images/2026-speakers/olivier-ldc-logo.png'
const sarahImage = '/images/2026-speakers/sarah-tischer.jpg'
const nkgLogo = '/images/2026-speakers/nkg-logo.jpg'
const pietImage = '/images/2026-speakers/piet-van-asten.jpg'
const ofiLogo = '/images/2026-speakers/ofi-logo.png'
const marioImage = '/images/2026-speakers/mario-abreu.jpg'
const andreImage = '/images/2026-speakers/andre-van-den-beld.jpg'
const etgLogo = '/images/2026-speakers/etg-logo.png'
const malcolmImage = '/images/2026-speakers/malcolm-hett.jpg'
const uccLogo = '/images/2026-speakers/ucc-europe-logo.png'
const peterImage = '/images/2026-speakers/peter-foster.jpg'
const financialTimesLogo = '/images/2026-speakers/financial-times-logo.jpg'
const michaelImage = '/images/2026-speakers/michael-mowat.jpg'
const ibmLogo = '/images/2026-speakers/michael-ibm-logo-v3.png'
const tobyImage = '/images/2026-speakers/toby-behrmann.jpeg'
const axaLogo = '/images/2026-speakers/axa-climate-logo.png'
const joyImage = '/images/2026-speakers/joy-macknight-v2.jpg'
const seanImage = '/images/2026-speakers/sean-edwards-v2.jpg'
const itfaLogo = '/images/2026-speakers/sean-itfa-logo-v2.png'
const lenaImage = '/images/2026-speakers/lena-schweighofer.jpg'
const tchiboLogo = '/images/2026-speakers/tchibo-logo.png'
const raymondImage = '/images/2026-speakers/raymond-katta.jpeg'
const pmbLogo = '/images/2026-speakers/pmb-logo.png'

interface Speaker {
  name: string;
  designation: string;
  organization: string;
  image: string | StaticImageData;
  logo: string | StaticImageData;
  iconHeight: number;
  iconWidth: number;
  description: string;
}

const speakers: Speaker[] = [
  {
    name: 'The Rt. Hon John Gummer, The Lord Deben',
    designation: 'Former Secretary of State for the Environment & Minister of Agriculture, Fisheries, and Food',
    organization: '',
    image: 'https://worldcoffeealliance.com/wp-content/uploads/2025/06/Lord-Deben-Photo-2019-adj-003-scaled-copy.jpg',
    logo: 'https://worldcoffeealliance.com/wp-content/uploads/2024/05/House_of_Lords_logo_2020.svg.png',
    iconHeight: 200,
    iconWidth: 200,
    description: 'The Rt. Hon John Gummer, Lord Deben, is the founder and Chairman of Sancroft International, a consultancy that advises both businesses and investors on all areas of Sustainability and ESG. Between 2012 and 2023 he was Chairman of the UK\u2019s Independent Climate Change Committee. Lord Deben was also the UK\u2019s longest serving Secretary of State for the Environment (1993-97) having previously been Minister of Agriculture, Fisheries, and Food. His sixteen years of top-level ministerial experience also include Minister for London, Employment Minister, and Paymaster General in HM Treasury. Lord Deben is currently Chairman of Valpak Ltd and of PIMFA, the trade body representing financial advisers and wealth managers. Throughout his political, business, and personal life Lord Deben has consistently championed an accord between sustainability and business sense.'
  },
  {
    name: 'Anup Jagwani',
    designation: 'Global Director, Farming and Agribusiness',
    organization: 'World Bank Group',
    image: anupImage,
    logo: worldBankLogo,
    iconHeight: 80,
    iconWidth: 80,
    description: `<p class="mb-3">Anup Jagwani is the World Bank Group (WBG) Director for Farming and Agribusiness, which brings together public and private sector expertise to transform food systems and scale climate-smart agriculture. In this role Anup also drives the AgriConnect agenda forward to transform opportunities and livelihoods for 300 million farmers globally by 2030.</p><p class="mb-3">Anup has previously held various leadership positions across the WBG and most recently as WBG Senior Manager, Farming and Agribusiness, Solutions &amp; Impact. Prior to that, Anup was Senior Global Sector Manager for Agribusiness and Forestry at the International Finance Corporation (IFC), a member of the World Bank Group, and the largest development institution focused on the private sector in emerging markets.</p><p class="mb-3">During his WBG career, Anup also led IFC&apos;s climate finance and policy team, covering several areas of climate business including sustainable finance; carbon pricing and carbon credits; climate risk, adaptation and resilience; biodiversity finance and nature-based solutions. In addition, he spent over 20 years in IFC&apos;s investment operations, with the majority of his time focused on agribusiness and agritech investments, with a particular focus on Sub Saharan Africa and South and South-East Asia. Anup has served as nominee Director for several IFC investee companies.</p><p>Before joining IFC, Anup was with Unilever in India. Anup is a graduate of the Asian Institute of Management and the Wharton School of Business and completed his undergraduate studies in Economics at St. Xavier&apos;s College in Kolkata, India.</p>`
  },
  {
    name: 'Teddy Esteve',
    designation: 'Managing Director',
    organization: 'ECOM Agroindustrial Corp',
    image: teddyImage,
    logo: ecomLogo,
    iconHeight: 80,
    iconWidth: 80,
    description: 'A lifetime with ECOM. ECOM is a 178-year-old family-owned Swiss commodity trading company with its roots in Barcelona, Spain. Seven generations trading commodities. Building the coffee business one bean at a time with farmers and roasters. I have been involved in most aspects of the business. I first managed our Mexican export operation, followed by the Guatemalan and so on to become a global coffee trading company. Also, I am a proud coffee farmer. Earlier: Born in the USA (Dallas, Texas, September 18, 1960). Raised and educated in Lausanne, Switzerland (Universite de Lausanne, HEC). Moved to Mexico in 1983 for 6 months, which lasted until 2023. Married and parent of 3 children. Fluent in Spanish, French and English, almost fluent in Italian and not fluent in German.'
  },
  {
    name: 'Tim Scharrer',
    designation: 'COO and Regional Director Europe and North America',
    organization: 'Volcafe',
    image: timImage,
    logo: volcafeLogo,
    iconHeight: 200,
    iconWidth: 200,
    description: 'Appointed Chief Operating Officer and member of the Senior Leadership Team of Volcafe in 2023, Tim assumes global oversight of Volcafe\'s Sustainability and Supply Chain functions. In his capacity as Regional Director Europe and North America, Tim leads our destination businesses in those regions. Tim brings over 30 years of experience in green coffee trading and operations management, from both coffee merchants and the roasting industry. Tim started his career with an apprenticeship as a wholesale and international trade specialist. He went on to work in various coffee producing countries, including eight years at Volcafe in Colombia (Carcafe), and in the coffee trade in a variety of roles and markets. Prior to re-joining Volcafe, Tim was the Managing Director of SCTC (Starbucks Coffee Trading Company), where he worked for over 15 years.'
  },
  {
    name: 'Olivier Laboulle',
    designation: 'Global Head of Coffee Sustainability and Social Impact',
    organization: 'Louis Dreyfus Company (LDC)',
    image: olivierImage,
    logo: olivierLogo,
    iconHeight: 80,
    iconWidth: 80,
    description: 'Olivier is the Global Head of Coffee Sustainability and Social Impact at Louis Dreyfus Company (LDC). In this role, he leads the sustainability strategy for LDC’s global coffee platform and oversees the company’s human rights due diligence efforts across all commodity supply chains. He brings 18 years of international experience in sustainability, having worked with NGOs, the United Nations, and the private sector across multiple continents. Over the past decade, Olivier has focused extensively on smallholder agriculture, with a particular emphasis on cocoa and coffee value chains. Olivier holds a B.A. and M.A. in Social Sciences from the University of Oldenburg (Germany) and an M.A. in Human Rights from the European Inter University Centre (Italy / Netherlands).'
  },
  {
    name: 'Dr. Sarah Tischer',
    designation: 'Head of Group Compliance & Group Sustainability (Co-lead)',
    organization: 'Neumann Gruppe GmbH (NKG)',
    image: sarahImage,
    logo: nkgLogo,
    iconHeight: 80,
    iconWidth: 80,
    description: 'Dr. Sarah Tischer is Head of Group Sustainability (Co Lead) & Group Compliance at Neumann Kaffee Gruppe (NKG), where she leads the Group\'s global sustainability and compliance efforts. She focuses on guiding the organization through an increasingly complex regulatory landscape and building systems that enable credible, practical implementation across diverse origin and consumer markets. Working closely with colleagues worldwide, as well as with customers, suppliers, and external partners, she helps strengthen governance and develop effective solutions for environmental and social challenges in the coffee sector. Sarah holds a PhD in Business Administration and also chairs the Sustainability Committee of the European Coffee Federation and the Ausschuss Nachhaltiger Kaffee of the German Coffee Association.'
  },
  {
    name: 'Piet van Asten',
    designation: 'SVP - Head Sustainable Production Systems',
    organization: 'Olam Food Ingredients (ofi)',
    image: pietImage,
    logo: ofiLogo,
    iconHeight: 60,
    iconWidth: 60,
    description: 'Transforming agriculture to (re-)build livelihoods and nature requires knowledge, resources and motivation from farmers. Piet is driving the Regenerative Agriculture agenda across ofi through co-creation and co-investment from farmers to customers. He joined Olam in 2017 to co-create, adapt and apply technologies, approaches and services that improve the productivity, profitability, and carbon footprint of ofi\'s coffee estates as well as its (smallholder) farmer network. He holds a PhD from Wageningen with a strong focus on agronomy, farming systems, livelihoods and rural innovation. Prior to his work at ofi, he worked for 20 years as a CGIAR scientist on agricultural systems, based out of Africa.'
  },
  {
    name: 'Mario Abreu',
    designation: 'Group Vice President Sustainability',
    organization: 'Ferrero',
    image: marioImage,
    logo: 'https://worldcoffeealliance.com/wp-content/uploads/2025/06/Ferrero-logo.png',
    iconHeight: 120,
    iconWidth: 120,
    description: 'Mario Abreu has been the Ferrero Group Vice President Sustainability since April 2020, based in Luxembourg. That role entails securing sustainability is fully embedded in the Group\'s long-term business strategy. Prior to Ferrero Mario worked for over 20 years in sustainability for Tetra Pak, the last 5 of them as their Global VP Sustainability based in Lund, Sweden. Throughout his time in Tetra Pak he led teams of up to 100 people globally, developing industry-leading programmes for collection and recycling of beverage cartons. Earlier Mario worked as a technical and commercial director for paper manufacturing and recycling businesses. In addition, he has served on several boards (FSC International, RSPO, High Conservation Value Resource Network, Proforest Initiative, and ACE Beverage Cartons) and technical advisory groups (Science Based Targets initiative). Mario is a Mechanical Engineer, with a Post-Grad Diploma in Environmental Decision Making, having done sustainability and business trainings at CISL (UK), IMD (CH), Ashridge (UK), the Open University (UK), and Fundaçao Getulio Vargas (BR).'
  },
  {
    name: 'Malcolm Hett',
    designation: 'Director of Sustainability',
    organization: 'UCC Europe',
    image: malcolmImage,
    logo: uccLogo,
    iconHeight: 80,
    iconWidth: 80,
    description: 'Malcolm has worked within some of the world\'s top 10 largest coffee companies since his first caffeinated role as a Brand Manager in 2007. His experience is mainly on the consumption side of the coffee world, with roles in innovation, marketing, insight - and as a cafe owner - now working at UCC in Europe since 2021, firstly as Director of Innovation and now as Director of Sustainability. With UCC as the Total Coffee Solution behind several well-loved retail and hospitality brands across Europe, Malcolm explores and encourages developing solutions that can deliver against the sustainability goals of UCC\'s customers.'
  },
  {
    name: 'Andre van den Beld',
    designation: 'Chief Sustainability Officer',
    organization: 'Export Trading Group (ETG)',
    image: andreImage,
    logo: etgLogo,
    iconHeight: 80,
    iconWidth: 80,
    description: 'Andre van den Beld is Chief Sustainability Officer at ETG, one of the largest global agri commodity trading and processing firms, with its stronghold in Sub-Sahara Africa. He has over 15 years of experience in building dedicated supply chains in various tropical commodities including cocoa, cashew, coffee, soya, cotton and fertilizers. Leading a 500+ FTE multidisciplinary team, ETG is mainly focusing on innovations at scale, such as waste recycling, renewable energy, biochar fertilizers and women finance solutions.'
  },
  {
    name: 'Chrystel Monthean',
    designation: 'Executive Vice Presidente Americas; Group Executive Board member',
    organization: 'Yara International',
    image: chrystelImage,
    logo: yaraLogo,
    iconHeight: 80,
    iconWidth: 80,
    description: `<p class="mb-3">With deep-rooted experience in the agribusiness sector, Chrystel Monthean is committed to fostering a more inclusive food production system by supporting farmers in their tremendous role of both feeding the world by producing nutritious and high-quality crops and protecting the planet by adopting practices that improve nature as a business.</p><p class="mb-3">As the EVP Americas at Yara International, since 2020, she brings a diverse skill set and a unique approach to tackling the complex challenges specific to the agricultural industry.</p><p class="mb-3">Embracing the richness of diversity, Chrystel champions a workplace that celebrates human beings and empowers each individual to thrive.</p><p class="mb-3">With a background in agronomy engineering and international business, her professional journey has taken her across three different continents, shaping a profound understanding of global markets and cultural nuances. She has honed her expertise in driving innovation and forging impactful partnerships in diverse food production ecosystems.</p>`
  },
  {
    name: 'Marisa Drew',
    designation: 'Chief Sustainability Officer',
    organization: 'Standard Chartered',
    image: marisaImage,
    logo: marisaLogo,
    iconHeight: 80,
    iconWidth: 80,
    description: ''
  },
  {
    name: 'Peter Foster',
    designation: 'World Trade Editor',
    organization: 'Financial Times (FT)',
    image: peterImage,
    logo: financialTimesLogo,
    iconHeight: 80,
    iconWidth: 80,
    description: 'Peter Foster is the world trade editor of the Financial Times. His brief is to report on the shifting landscape of global supply chains, investment and trade patterns being reorientated as a result of pressures being applied by the second Trump administration. Previously Peter was UK policy editor, reporting on the UK\'s post-Brexit trade, regulatory and investment environment. Peter appears regularly discussing policy issues on radio and television broadcasts, including BBC, RTE as well as Italian and German stations. He joined the FT in April 2020 from the Telegraph Media Group where he had held the position of Europe editor since 2015, focusing on the Brexit negotiations. He has more than two decades of experience covering global affairs from all sides of the world, based in New Delhi (2004-2008) and Beijing (2008-2012), as well as Washington DC, where he served as The Telegraph\'s US editor from 2012-2015. His book What Went Wrong with Brexit - and what we can do about it was published by Canongate in September 2023. It was a Waterstones \'best book of 2023\', a Guardian \'if you read one book about politics\' pick and a Christmas Book choice by \'The Week\'.'
  },
  {
    name: 'Jenny Davis-Peccoud',
    designation: 'Partner, Founder, Global Sustainability & Responsibility Practice',
    organization: 'Bain & Co.',
    image: jennyImage,
    logo: bainLogo,
    iconHeight: 80,
    iconWidth: 80,
    description: 'Jenny Davis-Peccoud is a partner in Bain & Company\'s Amsterdam office. In her almost 30 years at Bain, Jenny has advised clients across a wide range of industries, as well as government entities and NGOs, on topics such as growth strategy, organizational effectiveness, merger integration, business transformation, digital acceleration, pricing, supply chain and leadership team development. A US and French citizen, Jenny has led projects in varied business cultures across Europe, the Middle East, Asia and North America. Jenny founded and heads Bain\'s Global Sustainability & Responsibility practice. In the sustainability sphere, Jenny advises companies on how to tackle social and environmental challenges and opportunities as strategic issues at the heart of their core businesses. Beyond her broad expertise in this area, she has a particular focus on the food value chain, from agriculture to consumer products to retail, as well as the systems solutions needed to drive impactful and lasting change. She directs Bain\'s research in this field, focusing on topics such as the change management challenge of sustainability programs and the role of sustainability in employee engagement. Her work in this area has been published in The Wall Street Journal, The Huffington Post, HBR.org and the Stanford Social Innovation Review. Jenny received her BS from Georgetown University and her MBA, with distinction, from Harvard Business School.'
  },
  {
    name: 'Prue Mackenzie',
    designation: 'Director, Retail & CPG, Strategic Industries EMEA',
    organization: 'Google',
    image: prueImage,
    logo: googleLogo,
    iconHeight: 80,
    iconWidth: 80,
    description: 'Prue Mackenzie is a Director at Google Cloud, based in Paris. She is responsible for Google Cloud\'s largest clients in EMEA for the luxury, retail, CPG and travel sectors. Prue leads executives and board members on their AI and agentic journeys to accelerate their strategic priorities. Previously, Prue spent 10 years in Investment Banking at Credit Suisse in global roles across UK/EMEA, Singapore, the US and Australia. A passionate advocate for technology and AI education, Prue is an Industry Fellow at the University of Queensland, President of Harvard Alumni Women in France, and a Board Member of the Harvard Club of France.'
  },
  {
    name: 'Lena Schweighöfer',
    designation: 'Head of Sustainable Coffee',
    organization: 'Tchibo GmbH',
    image: lenaImage,
    logo: tchiboLogo,
    iconHeight: 80,
    iconWidth: 80,
    description: `<p class="mb-3">Lena Schweighöfer is Head of Sustainable Coffee at Tchibo. In this role, she oversees the Tchibo coffee program &ldquo;Coffee2Stay&rdquo; which aims to create long-term prospects for coffee farmers and promote sustainable farming practices.</p><p>After completing her master&apos;s degree with a focus on international relations, Lena has built up expertise in human rights due diligence, sustainability legislation, and agricultural supply chains through her previous professional positions at ALDI Nord and GIZ.</p>`
  },
  {
    name: 'Raymond Katta',
    designation: 'Executive Chairman',
    organization: 'Produce Monitoring Board (PMB), Sierra Leone',
    image: raymondImage,
    logo: pmbLogo,
    iconHeight: 80,
    iconWidth: 80,
    description: `<p class="mb-3">Raymond holds a Bachelor of Arts degree in Liberal Studies from Westfield State University USA (2006), a Master of Science Degree in Human Services, with a Specialization in Organizational Management and Leadership from Springfield College, USA (2007), and a European Master&apos;s degree in human Rights and Democratization from the European Inter-University Center for Human Rights and Democratization, (now Global Campus for Human Rights), in Italy (2015).</p><p class="mb-3">Throughout his career, he has held esteemed Executive and Management positions in both Sierra Leone and the United States. Notable roles include serving as Deputy Executive Secretary at the Human Rights of Commission of Sierra Leone, Program Manager at the Jubilee Association of Maryland Inc., Head of Programmes at the Public Sector Reform Unit (PSRU), and Senior Direct of Programmes at the National Commission for Social Action (NaCSA) before being appointed by his Excellency the President Brigadier Dr. Julius Maada Bio as Executive Chairman of the Produce Monitoring Board on November 14th, 2024, a position he currently holds.</p><p class="mb-3">His expertise encompasses a diverse array of specializations with contributions in rights-based programming, strategic and operational planning, organizational transformation, change management, institutional capacity strengthening, impact assessment, project cycle management, resource mobilization, management and public policy.</p><p class="mb-3">Mr. Katta is also highly experienced in designing and implementing farm-mapping, geolocation verification, and digital traceability systems to meet international sustainability requirements (including EUDR). Skilled at stakeholder engagement, smallholder onboarding, M&amp;E, and developing and translating policy into operational systems that support market access and reduced deforestation risk.</p>`
  },
  {
    name: 'Dr. Tawanda Mthintwa Hove',
    designation: 'Senior Program Officer, Digital Agronomy',
    organization: 'Gates Foundation',
    image: tawandaImage,
    logo: gatesLogo,
    iconHeight: 80,
    iconWidth: 80,
    description: ''
  },
  {
    name: 'Michael Mowat',
    designation: 'Supply Chain Strategy Practice Leader',
    organization: 'IBM Consulting',
    image: michaelImage,
    logo: ibmLogo,
    iconHeight: 80,
    iconWidth: 80,
    description: ''
  },
  {
    name: 'Katrina Hayter',
    designation: 'Global Head Sustainable Land Use & Supply Chains',
    organization: 'HSBC',
    image: katrinaImage,
    logo: hsbcLogo,
    iconHeight: 80,
    iconWidth: 80,
    description: 'Katrina is Global Head of Sustainable Land Use & Supply Chains at HSBC in Group Sustainability. She is HSBC\'s senior expert on land use and the agri-food system transition. Her focal areas include sustainable agriculture, new technologies & commericalisation, with a particularly focus on decarbonisation and low carbon and nature positive technologies, new industry segments and supply chain sustainability. She is supporting the bank and its customers globally, in land-based industries and across supply chains, transition to a low carbon future. Previously she was in the UK government, where she held a number senior civil servant roles including Executive Director for Healthy Living and Agriculture for the UK innovation agency. Katrina has worked for different organisations across the Agri-food sector including FERA Science, DuPont Pioneer, and the World Economic Forum. Throughout her career, she has worked on the commercialisation of technology innovation both from a public and government perspective. Katrina has a PhD in Biosciences, an MSc in Ecology and a BSc in Plant Sciences.'
  },
  {
    name: 'Toby Behrmann',
    designation: 'Head of London Market & Public Private Partnerships',
    organization: 'AXA Climate',
    image: tobyImage,
    logo: axaLogo,
    iconHeight: 80,
    iconWidth: 80,
    description: 'Toby is currently Head of London Market and Public Private Partnerships at AXA Climate, the specialized entity within the AXA Group, created to address the growing need for climate adaptation across both private and public sectors. He focuses on developing innovative financial solutions to address the growing impacts of climate change. Starting his career at international insurer AIG, Toby has spent over 20 years structuring and deploying global financial mechanisms across retail, commercial, and public sector channels, with a particular emphasis on resilience and adaptation strategies. With extensive experience in re/insurance, derivatives, and ILS, Toby is a passionate advocate for alternative risk transfer as a vital tool for bridging gaps in traditional insurance coverage and enhancing climate resilience across sectors.'
  },
  {
    name: 'Sonya Bhonsle',
    designation: 'Global Director of Corporates',
    organization: 'CDP',
    image: sonyaImage,
    logo: cdpLogo,
    iconHeight: 80,
    iconWidth: 80,
    description: ''
  },
  {
    name: 'Joy Macknight',
    designation: 'Journalist, Former Editor',
    organization: 'Financial Times - The Banker',
    image: joyImage,
    logo: financialTimesLogo,
    iconHeight: 80,
    iconWidth: 80,
    description: 'Joy Macknight is a freelance journalist and former editor of The Banker, part of the Financial Times group. She joined The Banker in August 2015 as transaction banking and technology editor, was promoted to deputy editor in September 2016 and then to managing editor in April 2019, before becoming the first female editor in the publication’s history in March 2021. Previously, she was features editor at Profit & Loss, editorial director at Treasury Today and editor at gtnews. She also worked as staff writer on Banking Technology and IBM Computer Today, as well as a freelancer on Computer Weekly.'
  },
  {
    name: 'Sean Edwards',
    designation: 'Chairman, International Trade Forfaiting Association (ITFA); Head of Legal',
    organization: 'Sumitomo Mitsui Banking Corporation (SMBC)',
    image: seanImage,
    logo: itfaLogo,
    iconHeight: 80,
    iconWidth: 80,
    description: 'Sean Edwards is Head of Legal at SMBC Bank International plc, part of the Sumitomo Mitsui Financial Group. He is Special Adviser to the Trade Finance Department of the bank and a member of its Trade Innovation Unit. Sean is Chairman of the International Trade & Forfaiting Association (ITFA). He is a draftsman of the Uniform Rules for Forfaiting (URF), its counterpart for digital payment obligations, the Unform Rules for Transferable Electronic Payment Obligations (URTEPO) and the Standard Definitions for Techniques of Supply Chain Finance published by ITFA, ICC, FCI, BAFT and the EBA. He is a former member of the Executive Committee of the ICC Banking Commission and the ICC Working Group on Digitalisation in Trade Finance. Sean is a member of the World Trade Organisation (WTO) Trade Finance Expert Group. He is a non-executive director of Swiss fintech, KomGo S.A. Sean has been appointed to the advisory board of the Centre for Digital Trade and Innovation (C4DTI), a joint venture of the UK Government, ICC UK and Tees Valley Combined Authority. He is a member of the Working Group of the Commonwealth Connectivity Agenda established by The Commonwealth. Sean has written for all the major trade finance magazines and is on the editorial board of Global Trade Review (GTR). He has presented at many conferences.'
  }
];

export default function Speakers2026() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  return (
    <>
      <div className="px-12 py-20 sm:px-20" id="speakers-2026">
        <div className="mx-auto sm:content-center">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">2026 SPEAKERS</p>
          </div>
          <ul
            role="list"
            className="grid grid-cols-1 mx-auto mt-20 max-w-7xl gap-x-6 gap-y-20 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-8"
          >
            {speakers.map((speaker) => (
              <li
                onClick={() => setSelectedSpeaker(speaker)}
                key={speaker.name}
                className="relative border rounded-md bg-lime-700 shadow-md hover:shadow-lg"
              >
                <a className="flex flex-col gap-2 hover:cursor-pointer">
                  <div className="relative">
                    <Image
                      className="w-full rounded-t-md"
                      src={speaker.image}
                      alt={speaker.name}
                      width={160}
                      height={160}
                    />
                    <div className="absolute w-24 h-24 right-4 top-4/4 transform -translate-y-1/2 bg-white p-2 rounded-md shadow-md">
                      <div className='flex items-center h-full'>
                        <Image
                          src={speaker.logo}
                          alt={`${speaker.organization} logo`}
                          width={speaker.iconWidth}
                          height={speaker.iconHeight}
                          className="my-auto mx-auto"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex text-left p-4">
                    <div className="mt-6">
                      <p className="text-lg font-semibold leading-8 tracking-tight text-white md:text-2xl">
                        {speaker.name}
                      </p>
                      <p className="leading-7 text-white text-sm">{speaker.designation}</p>
                      {speaker.organization && (
                        <p className="font-semibold leading-7 text-white text-md">{speaker.organization}</p>
                      )}
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {selectedSpeaker && (
        <Transition.Root show={Boolean(selectedSpeaker)} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={() => setSelectedSpeaker(null)}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-50" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative px-4 pt-5 pb-4 text-left transition-all transform bg-white rounded-lg shadow-xl h-max sm:my-8 sm:w-full sm:max-w-4xl sm:p-6">
                    <div className='flex flex-col h-max'>
                      <div className='flex-shrink-0 mx-auto'>
                        <Image className="rounded-md w-[20rem]" src={selectedSpeaker.image} alt={selectedSpeaker.name} width={160} height={160} />
                      </div>
                      <div className='flex justify-center p-2'>
                        <div className='bg-white p-2 rounded-md'>
                          <Image src={selectedSpeaker.logo} alt={`${selectedSpeaker.organization} logo`} width={140} height={140} />
                        </div>
                      </div>
                      <div className="flex mx-auto text-center">
                        <div>
                          <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-lg">{selectedSpeaker.name}</p>
                          <p className="leading-7 text-gray-700 text-md">{selectedSpeaker.designation}</p>
                          {selectedSpeaker.organization && (
                            <p className="font-semibold leading-7 text-gray-900 text-2xl">{selectedSpeaker.organization}</p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="overflow-auto text-sm sm:text-md sm:mt-5 max-h-60">
                      <div
                        className="mt-2 text-gray-600"
                        dangerouslySetInnerHTML={{ __html: selectedSpeaker.description }}
                      />
                    </div>
                    <div className="mt-5 sm:mt-6">
                      <button
                        type="button"
                        className="inline-flex justify-center max-w-5xl px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700"
                        onClick={() => setSelectedSpeaker(null)}
                      >
                        Back
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      )}
    </>
  );
}
