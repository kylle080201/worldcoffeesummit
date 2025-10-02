import { Transition, Dialog } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import Image from 'next/image'

interface T_Speaker {
  name: string;
  role: string;
  company: string;
  role2?: string;
  company2?: string;
  iconWidth: number;
  iconHeight: number;
  imageUrl: string;
  companyIcon: string;
  bio: string;
}



function Speakers2024() {
  const speakers = [
    {
      name: 'H.E. Sheikh Mohammed Belal',
      role: 'Managing Director',
      company: 'Common Fund for Commodities (CFC)',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2025/06/H.E.-Sheikh-Mohammed-Belal-square.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2025/06/cfc_new_logo_v5_large.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: `Ambassador Sheikh Mohammed Belal, a Bangladeshi diplomat, is the Managing Director of the
Common Fund for Commodities (CFC), re-elected in 2023 for a second term through 2028. Under his
leadership, the CFC has deepened its support for smallholders and SMEs, particularly in Least
Developed and Landlocked Developing Countries, with an emphasis on inclusive and sustainable value
chains.
He is the architect of the “Humanizing Value Chains (HVC)” concept—an ambitious vision to embed
justice, traceability, and innovation into every transaction. HVC aspires to lift millions of smallholders
from poverty by ensuring they receive a fairer share of global trade.
Ambassador Belal is also overseeing the launch of the Agricultural Commodity Transformation (ACT)
Fund, a USD 100 million+ impact vehicle to drive climate-resilient, nature-positive agri-SME growth.
Before joining the CFC, he served as Bangladesh’s Ambassador to the Netherlands (2014–2020) and
held senior postings in the USA, Australia, Malaysia, and Uzbekistan. He also chaired the Executive
Council of the OPCW, represented Bangladesh at over 100 global forums, and is a known champion
for gender equity in development.
He holds degrees from the University of Chittagong, Monash University, and Harvard University.
Ambassador Belal is married, with two children and two grandchildren.`
    },
    {
      name: 'Wagner Albuquerque de Almeida',
      role: 'Global Director- Manufacturing, Agribusiness and Forestry',
      company: 'International Finance Corporation (IFC)',
      imageUrl: 'https://softtechs360.com/coffee/wp-content/uploads/2025/09/Wagner-Albuquerque-de-Almeida.jpg',
      companyIcon: "https://softtechs360.com/coffee/wp-content/uploads/2025/09/IFC-Logo.svg",
      iconWidth: 100,
      iconHeight: 100,
      bio: `Wagner Albuquerque de Almeida is the Global Director for Manufacturing‚
Agribusiness, and Forestry (MAF) at IFC, a member of the World Bank and the
largest global development institution focused on the private sector in emerging
markets. Based in Washington, DC, Wagner is responsible for managing IFC’s
investment and advisory services in the manufacturing, agribusiness, and
forestry sectors, leading a team responsible for an investment portfolio of over
$12 billion. Since joining IFC in 2010, Wagner has had a variety of roles
spanning different industries and regions, including Africa, the Middle East and North Africa, Latin
America and the Caribbean, Europe, Central Asia, and Türkiye.
Prior to joining IFC, Wagner's career spanned several key positions at prominent global financial
institutions such as ABN AMRO, Deutsche Bank, and Banco Itau, in addition to his role at Monsanto.`
    },
    {
      name: 'The Rt. Hon John Gummer, Lord Deben',
      role: 'Former Chairman',
      company: 'UK Climate Change Committee (The CCC)',
      company2: "House of Lords",
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2025/06/Lord-Deben-Photo-2019-adj-003-scaled-copy.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/05/House_of_Lords_logo_2020.svg.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: `  The Rt. Hon John Gummer, Lord Deben, is the founder and Chairman of Sancroft 
      International, a consultancy that advises both businesses and investors on all areas 
      of Sustainability and ESG. Between 2012 and 2023 he was Chairman of the UK’s Independent 
      Climate Change Committee. Lord Deben was also the UK’s longest serving Secretary of State
       for the Environment (1993-97) having previously been Minister of Agriculture, Fisheries, 
       and Food. His sixteen years of top-level ministerial experience also include Minister for London, 
       Employment Minister, and Paymaster General in HM Treasury. Lord Deben is currently Chairman of Valpak 
       Ltd and of PIMFA, the trade body representing financial advisers and wealth managers. Throughout his political, business, 
       and personal life Lord Deben has consistently championed an accord between sustainability and business sense.    `
    },
    {
      name: 'H.E. Mbelwa Brighton Kairuki',
      role: 'High Commissioner of the United Republic of Tanzania to the United Kingdom',
      company: 'Tanzania High Commission',
      imageUrl: 'https://softtechs360.com/coffee/wp-content/uploads/2025/10/Screenshot-2025-10-01-at-15.51.31.jpg',
      companyIcon: "https://softtechs360.com/coffee/wp-content/uploads/2025/10/imageedit_74_8864533329.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: ` `
    },

    {
      name: 'Harper McConnell',
      role: 'Global Vice President Sustainability',
      company: 'Mars',
      imageUrl: 'https://softtechs360.com/coffee/wp-content/uploads/2025/07/Harper-McConnell.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2025/06/Mars-Logo.png",
      iconWidth: 80,
      iconHeight: 80,
      bio: ` `
    },

    {
      name: 'Ruchira Joshi',
      role: 'Director, Global Coffee & Cocoa Sustainability',
      company: 'Starbucks',
      imageUrl: 'https://softtechs360.com/coffee/wp-content/uploads/2025/07/Ruchira-Joshi-1.jpeg',
      companyIcon: "https://softtechs360.com/coffee/wp-content/uploads/2025/07/Starbucks.png",
      iconWidth: 80,
      iconHeight: 80,
      bio: ` `
    },
    {
      name: 'Stefan Dierks',
      role:"Director Sustainability Strategy",
      company: 'Melitta Group',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2025/06/Stefan-Dierks.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2025/06/UG-Melitta_logo_mit_space_cmyk-e1749857040905.jpg",
      iconWidth: 100,
      iconHeight: 100,
      bio: `•	Stefan Dierks is since 2019 Director Sustainability Strategy at Melitta Group. In this role he is responsible for the group-wide coordination and monitoring of the Melitta sustainability transformation process. 
<br/>•	He has 19-years’ sustainability experience across different economic sectors, with a special focus on the coffee value chain. 
<br/>•	Due to his prior professional experience as HR coach and developer, he places a high value on the needs of human beings in transformation processes. 
<br/>•	Along with his engagement in the mentioned sectors, he is engaged in various sector and sustainability associations and initiatives, on global as well as European and German scale. 
<br/>•	Stefan studied Environmental Sciences at the Leuphana Luneburg in Germany. 
<br/>•	He is engaged in different alliances, e.g. as a Board Member of the Global Coffee Platform GCP, Member of the Advisory Board of BAUM e.V., as well as Member of the Board of Trustees of the German Consumer Protection Foundation.
<br/>•	Stefan regularly gives lectures, e.g. at universities and at conferences.
`
    },
    {
      name: 'Mario Abreu',
      role: 'Group Vice President Sustainability',
      company: 'Ferrero',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2025/06/Mario-Abreu.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2025/06/Ferrero-logo.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: `Mario Abreu has been the Ferrero Group Vice President Sustainability since April 2020, based in Luxembourg. 
      That role entails securing sustainability is fully embedded in the Group's long-term business strategy. 
      Prior to Ferrero Mario worked for over 20 years in sustainability for Tetra Pak, 
      the last 5 of them as their Global VP Sustainability based in Lund, Sweden. 
      Throughout his time in Tetra Pak he led teams of up to 100 people globally, 
      developing industry-leading programmes for collection and recycling of beverage cartons. 
      Earlier Mario worked as a technical and commercial director for paper manufacturing and recycling businesses. In addition, he has served on several boards (FSC International, RSPO, High Conservation Value Resource Network, Proforest Initiative, and ACE Beverage Cartons) and technical advisory groups (Science Based Targets initiative). Mario is a Mechanical Engineer, with a Post-Grad Diploma in Environmental Decision Making, having done sustainability and business trainings at CISL (UK), IMD (CH), Ashridge (UK), the Open University (UK), and Fundaçao Getulio Vargas (BR).`
 
    },
    {
      name: 'Raphaelle Peinado',
      role: 'Sustainability Director',
      company: 'Volcafe',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2025/06/Raphaelle-Peinado-2.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2025/06/Volcafe.png",
      iconWidth: 120,
      iconHeight: 120,
      bio: ` Appointed Sustainability Director in 2024, Raphaelle oversees Volcafe’s sustainability strategy across the world. She brings over 12 years of experience in sustainability of tropical agricultural commodities, across Latin America and Africa.

Raphaelle holds a bachelor's degree in political science and Spanish literature from McGill University and a master's degree in international development from the London School of Economics.

Prior to joining Volcafe, Raphaelle oversaw the sustainability department in Sucden's cocoa department for over seven years and held the position of Sustainability Manager at Transmar Group for over four years.
`
    },

    {
      name: 'Nicolas Mounard',
      role: 'Vice President ESG, Sustainability & Traceability',
      company: 'Barry Callebaut',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2025/06/Nicolas-Mounard.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2025/06/header-logo-bc.png",
      iconWidth: 120,
      iconHeight: 120,
      bio: `Nicolas was appointed in July 2022 to VP Sustainability & Farming. Since January 2024,
Nicolas is VP ESG, Sustainability and Traceability, leading the whole sustainability
agenda of Barry Callebaut, including Forever Chocolate. ESG focus includes overarching
responsibility over ESG regulations such as EUDR or CSDDD (Corporate Sustainability
Due Diligence Directive). Nicolas is also a member of the Executive Leadership team.
Nicolas brings more than 15 years of experience in sustainable food value chains. After 3
years as financial auditor for Ernst & Young, he joined the leading Fairtrade and organic
French brand Alter Eco in 2005 where he started as Producer Support Manager and
became then the Chief Financial Officer in 2007 and the Chief Executive officer from
2008 to 2012. Alter Eco sells organic and Fairtrade food products such as chocolate,
coffee, tea, rice or fruit juice in the main French supermarkets.
In 2013, he joined the UK based coffee and cocoa organization Twin/Twin Trading as
managing director. The organization’s activities covered ethical coffee and cocoa value
chain development in Africa and Latin America and sustainable green coffee trading.
Twin was also the main shareholder of Divine Chocolate in the UK and the USA and
Nicolas sat, as a consequence, in the Board of Directors of Divine from 2013 to 2016.
In 2016, he joined the UK based charity Farm Africa as Chief Executive Officer, where he
stayed until joining Barry Callebaut. Farm Africa is an agriculture and environment NGO
providing tools and expertise to enable smallholders in East Africa to increase their
harvests, whether their farm crops, livestock, fish or the forest. Farm Africa has 170 staff
operating across the eastern African countries of Ethiopia, Kenya, Tanzania and Uganda.
Nicolas holds an MBA from ESSEC Business School in Paris. `
    },
      {
      name: 'Thomas Delbar',
      role: 'Director of Sustainability – Coffee & Ingredients',
      company: 'Touton Group',
      imageUrl: 'https://softtechs360.com/coffee/wp-content/uploads/2025/07/Thomas-Delbar.jpg',
      companyIcon: "https://softtechs360.com/coffee/wp-content/uploads/2025/07/Touton-logo-transparent-background.png",
      iconWidth: 120,
      iconHeight: 120,
      bio: `Thomas Delbar is a senior sustainability executive with nearly two decades of experience leading business-integrated sustainability strategies across the global coffee and ingredients sector. As Director of Sustainability – Coffee & Ingredients at Touton SA, he drives the company’s efforts to embed ESG performance, digital traceability, and responsible sourcing into core business operations.
With a strong focus on value creation and risk mitigation, Thomas leads the transformation of supply chains into transparent, data-driven ecosystems that meet both regulatory and customer expectations. He has successfully steered the development and deployment of digital tools to monitor sustainability KPIs, track supplier compliance, and support regenerative agriculture programs at scale.
Thomas is deeply engaged in industry-wide initiatives, contributing to platforms such as the Global Coffee Platform to advance alignment on sustainable procurement and sectoral reporting frameworks. He brings extensive operational experience from Africa and Latin America, where he has led multi-country programs that balance economic performance with environmental and social impact.
Core Competencies:
Sustainability Strategy & Governance: Aligning ESG priorities with commercial goals, supplier engagement, and business transformation.
Digital Supply Chain Innovation: Driving adoption of traceability tools, monitoring systems, and data platforms for impact reporting.
Certification & Compliance: Expertise in major schemes including Rainforest Alliance, Fairtrade, and Organic, as well as evolving due diligence regulations.
Stakeholder Engagement: Active contributor in cross-sector forums, value chain coalitions, and public–private partnerships.
Thomas is a results-oriented leader who bridges sustainability with operational efficiency and business innovation. His mission: to create resilient supply chains that are not only compliant and transparent—but also competitive, future-proof, and value-generating.
 `
    },

          {
      name: 'Piet van Asten',
      role: 'SVP - Head Sustainable Production Systems',
      company: 'Olam Food Ingredients (ofi)',
      imageUrl: 'https://softtechs360.com/coffee/wp-content/uploads/2025/07/image-21.jpg',
      companyIcon: "https://softtechs360.com/coffee/wp-content/uploads/2025/07/image-22.png",
      iconWidth: 120,
      iconHeight: 120,
      bio: ` Transforming agriculture to (re-)build livelihoods and nature requires knowledge, 
      resources and motivation from farmers. Piet is driving the Regenerative Agriculture agenda across ofi through co-creation and co-investment from farmers to customers. He joined Olam in 2017 to co-create, adapt and apply technologies, 
      approaches and services that improve the productivity, profitability, and carbon footprint of ofi’s coffee estates as well as its (smallholder) farmer network. He holds a PhD from Wageningen with a strong focus on agronomy, farming systems, livelihoods and rural innovation. Prior to his work at ofi, he worked for 20 years as a CGIAR scientist on agricultural systems, based out of Africa.
`
    },

    {
      name: 'Rachel Vujovic',
      role: 'Director - International Sustainability',
      company: 'ALDI SOUTH Group',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2025/06/Rachel-Vujovic-suqare.jpg',
      companyIcon: "https://softtechs360.com/coffee/wp-content/uploads/2025/07/ALDI-SUD.png",
      iconWidth: 60,
      iconHeight: 60,
      bio:`Rachel is leading a set of global sustainability initiatives at the ALDI SOUTH Group, with a focus on driving compliance with the EU Deforestation Regulation (EUDR). She oversees cross-functional teams working across high-impact supply chains—including cocoa, coffee, produce, and seafood—where she navigates the complex intersection of regulatory compliance, traceability, and supplier engagement. She brings a strategic, systems-level approach to building credible and scalable solutions that address both environmental and social risks.

She holds a master’s degree in international political economy from the State University of New York at Buffalo and a bachelor’s degree in political science from Loyola University Chicago. Originally from the United States, she currently lives in Salzburg, Austria with her husband and two children.
`
    },

    {
      name: 'Malcolm Hett',
      role: 'Director of Sustainability',
      company: 'UCC Europe',
      imageUrl: 'https://softtechs360.com/coffee/wp-content/uploads/2025/08/image-30.jpg',
      companyIcon: "https://softtechs360.com/coffee/wp-content/uploads/2025/07/image-28.png",
      iconWidth: 120,
      iconHeight: 120,
      bio:`Malcolm has worked within some of the world’s top 10 largest coffee companies since his first caffeinated role as a Brand Manager in 2007.
His experience is mainly on the consumption side of the coffee world, with roles in innovation, marketing, insight – and as a café owner – now working at UCC in Europe since 2021, firstly as Director of Innovation and now as Director of Sustainability.
With UCC as the Total Coffee Solution behind several well-loved retail and hospitality brands across Europe, Malcolm explores and encourages developing solutions that can deliver against the sustainability goals of UCC’s customers.
`
    },

    {
      name: 'Cleiton Vargas',
      role: 'SVP Innovation Americas',
      company: 'Yara International',
      imageUrl: 'https://softtechs360.com/coffee/wp-content/uploads/2025/07/Cleiton-Vargas.jpg',
      companyIcon: "https://softtechs360.com/coffee/wp-content/uploads/2025/07/Knowledge_grows_for_A4.png",
      iconWidth: 120,
      iconHeight: 120,
      bio: `Cleiton Vargas (born in 1969) has been with Yara for over 30 years and recently took on the 
      role of Senior Vice President of Innovation for the Americas. Throughout his career at the company, 
      he has held various positions across different business units, including Commercial, Operations, and Logistics. 
      Cleiton holds a degree in Agronomic Engineering from the Federal University of Rio Grande do Sul and an MBA in Marketing 
      from the Escola Superior de Propaganda e Marketing.`
    },

    {
      name: 'Dr. Flávia De Souza Mendes',
      role: 'Senior Program Manager, Forest & Land Use',
      company: 'Planet',
      imageUrl: 'https://softtechs360.com/coffee/wp-content/uploads/2025/08/Dr.-Flavia-de-Souza-Mendes-1.jpeg',
      companyIcon: "https://softtechs360.com/coffee/wp-content/uploads/2025/07/512px-Planet_Labs_logo.svg.png",
      iconWidth: 120,
      iconHeight: 120,
      bio: `Dr. Flávia de Souza Mendes is a forest remote sensing scientist with over 17 years of experience working at the intersection of forests, land use, and environmental policy. She began her career at leading Brazilian institutions such as INPE, where she contributed to national forest monitoring systems and supply chain traceability programs. Her PhD research focused on forest carbon estimation, a field in which she remains deeply engaged through her work on carbon markets and international forest reporting frameworks such as the EU Deforestation Regulation (EUDR).

As Senior Program Manager of Forest & Land Use at Planet, Dr. Mendes leads strategic efforts to develop and scale geospatial solutions for forest monitoring, sustainable land use, and compliance with evolving climate and nature regulations. Her work bridges science, policy, and technology to empower stakeholders across governments, the private sector, and civil society with actionable, high-resolution insights for forest resilience and transparent supply chains.
`
    },

    {
      name: 'Toby Behrmann',
      role: 'Head of London Market & Public Private Partnerships',
      company: 'AXA Climate',
      imageUrl: 'https://softtechs360.com/coffee/wp-content/uploads/2025/09/Toby-Behrmann.jpeg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2025/06/AXA_Climate_Blue_Horizontal_RVB.png",
      iconWidth: 120,
      iconHeight: 120,
      bio: `Toby is currently Head of London Market and Public Private Partnerships at AXA Climate, the specialized entity within the AXA Group, created to address the growing need for climate adaptation across both private and public sectors.  He focuses on developing innovative financial solutions to address the growing impacts of climate change. Starting his career at international insurer AIG, Toby has spent over 20 years structuring and deploying global financial mechanisms across retail, commercial, and public sector channels, with a particular emphasis on resilience and adaptation strategies. With extensive experience in re/insurance, derivatives, and ILS, Toby is a passionate advocate for alternative risk transfer as a vital tool for bridging gaps in traditional insurance coverage and enhancing climate resilience across sectors.
`
    },

    {
      name: 'Tzutzuy Ramirez',
      role: 'Head of Climate and Nature',
      company: 'Syngenta Group',
      imageUrl: 'https://softtechs360.com/coffee/wp-content/uploads/2025/08/Tzutzuy-Ramirez.jpeg',
      companyIcon: "https://softtechs360.com/coffee/wp-content/uploads/2025/08/Syngenta-Logo-RGB-no-R-mark.png",
      iconWidth: 120,
      iconHeight: 120,
      bio: `As Head of Climate & Nature, Syngenta Group, Tzutzuy Ramirez oversees the establishment of Syngenta Group's decarbonization agenda and strategic plan for nature-related activities across business units. Additionally, Tzutzuy is Syngenta’s liaison delegate to the World Business Council for Sustainable Development (WBCSD), where she also serves as the company's climate and nature spokesperson. She is also the key account manager for Syngenta Group's largest NGO collaboration with The Nature Conservancy.
 
With a PhD in Biology and 13+ years in the industry, she brings extensive experience across R&D, strategic marketing, and corporate sustainability. Since joining Syngenta Group in 2023, Tzutzuy’s main focuses have been transforming agriculture through sustainable practices and innovative climate solutions.
`
    },

        {
      name: 'Mariana Osorio Londoño',
      role: 'Sustainable Trade Coordinator',
      company: 'National Federation of Coffee Growers of Colombia (FNC)',
      imageUrl: 'https://softtechs360.com/coffee/wp-content/uploads/2025/09/Mariana-Osorio-Londono-.jpeg',
      companyIcon: "https://softtechs360.com/coffee/wp-content/uploads/2025/07/Logos-FNC_Cereza.png",
      iconWidth: 120,
      iconHeight: 120,
      bio: `Mariana is a Finance and International Relations professional with a specialization in International Cooperation
and over seven years of experience leading projects in sustainability, social development, and regulatory
compliance. She has worked on designing ESG strategies, implementing projects with major global brands like
Nespresso and Nescafé, and developing supply chain traceability solutions. Passionate about challenges that
combine innovation, social impact, and corporate sustainability.`
    },
    // {
    //   name: 'Claude Bizimana',
    //   role: 'Chief Executive Officer (CEO)',
    //   company: 'National Agricultural Export Development Board (NAEB), Rwanda',
    //   imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2025/06/Claude-Bizimana.jpg',
    //   companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/08/NAEB-logo.jpg",
    //   iconWidth: 120,
    //   iconHeight: 120,
    //   bio: `Claude Bizimana is the Chief Executive Officer (CEO) of the National Agricultural Export Development Board (NAEB), 
    //   a commercial public institution in Rwanda in charge of exports of agricultural and livestock products. 
    //   With over 20 years of experience as a lecturer and researcher in one of Rwanda’s most prominent academic institutions, 
    //   Claude Bizimana led different initiatives at national, regional and continental levels, 
    //   including the country office of the Comprehensive Africa Agriculture Development Program, 
    //   the most ambitious and comprehensive agricultural reform effort ever undertaken in Africa made by African Heads of States and Governments. As the CEO of NAEB, Claude Bizimana thrives to establish relations and cooperation with regional and international organisations with the aim of improving operations in the coffee value chain and collaboration among stakeholders, especially those who grow and produce the raw product.`
    // },


    {
      name: 'Raymond Katta',
      role: 'Executive Chairman',
      company: 'Produce Monitoring Board (PMB), Sierra Leone',
      imageUrl: 'https://softtechs360.com/coffee/wp-content/uploads/2025/08/Raymond-Katta.jpeg',
      companyIcon: "https://softtechs360.com/coffee/wp-content/uploads/2025/08/PMB-Logo.png",
      iconWidth: 80,
      iconHeight: 80,
      bio: `Raymond holds a Bachelor of Arts degree in Liberal Studies from Westfield State University USA (2006), a Master of Science Degree in Human Services, with a Specialization in Organizational Management and Leadership from Springfield College, USA (2007), and a European Master’s degree in human Rights and Democratization from the European Inter-University Center for Human Rights and Democratization, (now Global Campus for Human Rights), in Italy (2015). 

Throughout his career, he has held esteemed Executive and Management positions in both Sierra Leone and the United States. Notable roles include serving as Deputy Executive Secretary at the Human Rights of Commission of Sierra Leone, Program Manager at the Jubilee Association of Maryland Inc., Head of Programmes at the Public Sector Reform Unit (PSRU), and Senior Direct of Programmes at the National Commission for Social Action (NaCSA) before being appointed by his Excellency the President Brigadier Dr. Julius Maada Bio as Executive Chairman of the Produce Monitoring Board on November 14th, 2024, a position he currently holds.

His expertise encompasses a diverse array of specializations with contributions in rights-based programming, strategic and operational planning, organizational transformation, change management, institutional capacity strengthening, impact assessment, project cycle management, resource mobilization, management and public policy.

Mr. Katta is also highly experienced in designing and implementing farm-mapping, geolocation verification, and digital traceability systems to meet international sustainability requirements (including EUDR). Skilled at stakeholder engagement, smallholder onboarding, M&E, and developing and translating policy into operational systems that support market access and reduced deforestation risk.
 `
    },
    {
      name: 'Suresh Yadav',
      role: 'Director, Climate Change and Oceans Directorate (CCO)',
      company: 'The Commonwealth Secretariat ',
      imageUrl: 'https://softtechs360.com/coffee/wp-content/uploads/2025/09/Suresh-Yadav.png',
      companyIcon: "https://softtechs360.com/coffee/wp-content/uploads/2025/09/logo.svg",
      iconWidth: 100,
      iconHeight: 100,
      bio: ` Suresh Yadav is Director for Climate Change, Ocean and Energy Directorate in
the Commonwealth Sectt., London. Earlier he was Interim Senior Director for
Trade, Ocean and Natural Resources and he was also the Secretary of the
Commonwealth AI consortium to promote development of AI and capacity
building in the Commonwealth countries.
Prior to this he had worked in the Board of World Bank Group, Washington DC
as representative of India, Bangladesh, Bhutan and Sri Lanka.
As a member of IRS in India, he had worked as an Officer on Special Duty to
President of India and Director to Finance Minister of India. He has also worked
extensively for DTAA negotiations on behalf of India and global specialist in
transfer pricing audit of MNEs.
He is an author of a Book on FDI and passionately work for using AI and
transformative technologies for development and to use the platform approach
for attracting finance by the small states.
He is alumni of IIT Delhi, Indian School of Business, John Hopkins University,
Duke University and German Development Institute,`
    },
    {
      name: 'Myriam Sainz',
      role: 'Senior Director Strategic Initiatives',
      company: 'TechnoServe',
      imageUrl: 'https://softtechs360.com/coffee/wp-content/uploads/2025/09/Myriam-Sainz.jpg',
      companyIcon: "https://softtechs360.com/coffee/wp-content/uploads/2025/09/ENG_TNSLogoCMYK_Horz_TaglineTM_Color-scaled.png",
      iconWidth: 80,
      iconHeight: 80,
      bio: `Myriam leads TechnoServe's work with food and agriculture companies to build inclusive and regenerative supply chains that improve farmer incomes, reduce carbon emissions, and preserve nature. She has spent over 15 years proving that investing in farmers and local supply chains is not only good for the planet but also a powerful lever for business growth.
With longstanding partners like Nespresso and Unilever, Myriam's work at TechnoServe has impacted over 150,000 farming families and 300 small agricultural businesses, employing hundreds of women and men agronomists in rural communities. These programs also improve soil health and protect nature across more than 200,000 hectares in 15 countries. Looking ahead, Myriam is focused on scaling this model through platform-based approaches for co-investment and effective delivery.
Before joining TechnoServe, Myriam was a management consultant with McKinsey & Company, advising agribusiness and public sector clients across the Americas and Sub-Saharan Africa.  Myriam holds a Master’s degree from the Georgetown School of Foreign Service and a B.A. in Business Management from Universidad Pontificia Comillas in Madrid. 
 `
    },

    

    {
      name: 'Nick Appleyard',
      role: 'Head of Applications and Solutions',
      company: 'European Space Agency (ESA)',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2025/06/Nick-Appleyard.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2025/06/ESA_logo_2020_Deep-e1749855679567.png",
      iconWidth: 80,
      iconHeight: 80,
      bio: ` `
    },

        {
      name: 'Peter Foster',
      role: 'World Trade Editor',
      company: 'Financial Times (FT)',
      imageUrl: 'https://softtechs360.com/coffee/wp-content/uploads/2025/10/Peter-Foster-scaled.jpg',
      companyIcon: "",
      iconWidth: 80,
      iconHeight: 80,
      bio: `Peter Foster is the world trade editor of the Financial Times (FT). `
    },
      {
      name: 'Jenny Davis-Peccoud',
      role: 'Partner, Founder, Global Sustainability & Responsibility Practice',
      company: 'Bain & Co.',
      imageUrl: 'https://softtechs360.com/coffee/wp-content/uploads/2025/09/Jenny-Davis-Peccoud.jpg',
      companyIcon: "https://softtechs360.com/coffee/wp-content/uploads/2025/09/bainstackedlogo_dig_red_1280x389px-1.png",
      iconWidth: 120,
      iconHeight: 120,
      bio: ` `
    },

     {
      name: 'Jack Bugas',
      role: 'Partner and Associate Director',
      company: 'Boston Consulting Group (BCG) ',
      imageUrl: 'https://softtechs360.com/coffee/wp-content/uploads/2025/09/Jack-Bugas.jpeg',
      companyIcon: "https://softtechs360.com/coffee/wp-content/uploads/2025/09/BCG_MONOGRAM.png",
      iconWidth: 120,
      iconHeight: 120,
      bio:``
    },

    {
      name: 'Frank de Morsier',
      role: 'Co-Founder and COO',
      company: 'Picterra',
      imageUrl: 'https://softtechs360.com/coffee/wp-content/uploads/2025/07/Frank-de-Morsier.png',
      companyIcon: "https://softtechs360.com/coffee/wp-content/uploads/2025/09/Picterra_Primary_Logo_Dark-1-scaled.png",
      iconWidth: 80,
      iconHeight: 80,
      bio: ` `
      //
    },


    {
      name: 'Felipe Carazo',
      role: 'Head of Sustainable Commodities,Tropical Forest Alliance',
      company: 'World Economic Forum',
      imageUrl: 'https://softtechs360.com/coffee/wp-content/uploads/2025/07/Felipe-Carazo.jpeg',
      companyIcon: "https://softtechs360.com/coffee/wp-content/uploads/2025/07/World-Economic-Forum.png",
      iconWidth: 120,
      iconHeight: 120,
      bio: `Felipe is passionate about fostering science-based, long-term solutions to the developmental and environmental challenges currently facing our planet, capturing both global and on-the-ground perspectives. He brings along more than twenty years of experience developing and overseeing programs and initiatives addressing policy, governance, financial instruments, impact metrics, capacity building, private-public partnerships, south-south cooperation, resource management, rural development, conservation, human wellbeing, integrated landscape management and climate change.
He currently serves as Head of Sustainable Commodities for the Tropical Forest Alliance housed in the World Economic Forum. In his role, he fosters multi-stakeholder engagement that connects, influence and mainstream good practices into private and public led policy discussions and processes. 
Previously he served as Executive Director of Fundecor, a ‘think tank’ that has been instrumental for his native country, Costa Rica, to develop and implement sound forest positive practices.  While leading Fundecor, he served as top-level advisor to the Government of Costa Rica. He has also worked at The Nature Conservancy (TNC) and the United Nations Development Program (UNDP) with diverse sustainability strategies across diverse contexts.  
He holds a bachelor´s Degree in Biology from the Universidad de Costa Rica and a master’s degree in environmental management from the Nicholas School of Environment, Duke University (USA), with a mayor in Resource Economics and Policy.
`
    },


        {
      name: 'Owen Hewlett',
      role: 'Chief Technical Officer',
      company: 'Gold Standard',
      role2: 'Technical Council Member',
      company2: 'SBTi',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2025/06/Owen.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/08/GS_Logo_Secondary.png",
      iconWidth: 120,
      iconHeight: 120,
      bio: `Owen is Chief Technical Officer at the Gold Standard Foundation, a leading climate, nature and sustainable development standards system and thought leader. Owen’s expertise and work encompasses the accounting, reporting, funding and policy behind credible corporate and government action, with a focus on the market and non-market mechanisms that support them.

Owen joined Gold Standard in 2014 and leads all aspects of the Foundation’s standards, assurance and technical policy and best practices work. 

Owen is also a member of the SBTi Technical Council and the Greenhouse Gas Protocol Advisory Committee for Land Sector and Removals.
 `
    },



     {
      name: 'Marco Albani ',
      role: 'Co-Founder, co-CEO and President',
      company: 'Chloris Geospatial',
      imageUrl: 'https://softtechs360.com/coffee/wp-content/uploads/2025/07/image-26-scaled.jpg',
      companyIcon: "https://softtechs360.com/coffee/wp-content/uploads/2025/07/image-25.png",
      iconWidth: 120,
      iconHeight: 120,
      bio: `Marco is an experienced sustainability executive, bringing a unique combination of business and science experience, and deep senior-level network in the land use arena.
He was the first director of the Tropical Forest Alliance at the World Economic Forum, and a Senior Expert with McKinsey & Company’s sustainability practice.
He has been an ecosystem scientist at Harvard modeling continental-scale forest carbon dynamics.

 `
    },

    {
      name: 'Mauricio Castro Schmitz',
      role: 'Regenerative Agriculture Director ',
      company: 'The Nature Conservancy',
      imageUrl: 'https://softtechs360.com/coffee/wp-content/uploads/2025/08/Mauricio-Castro-Schmitz-scaled.jpg',
      companyIcon: "https://softtechs360.com/coffee/wp-content/uploads/2025/08/tnc-logo-primary-registered-dark-text.svg",
      iconWidth: 120,
      iconHeight: 120,
      bio: `Mauricio Castro is a seasoned leader with over 20 years of
global experience in land conservation and sustainable
development. For two decades, he has been an integral part of
The Nature Conservancy, an organization that has empowered
his passion for transforming conventional agriculture and
livestock into regenerative models. His leadership has led to a
profound impact on global conservation and the regeneration of
our environment.
During his tenure as Chairman of the Forest Stewardship
Council, Mauricio led its expansion into new global areas and
contributed to establishing a center in Bonn, Germany. His
leadership has forged trusted relationships across diverse
cultures, geographies, and disciplines.
Mauricio is a passionate sustainability advocate and a
motivational team builder, making a significant impact on global
conservation and sustainability efforts. `
    },
 
    
        {
      name: 'Rick van der Kamp',
      role: 'Global Lead for Markets, Value Chains and Rural Finance',
      company: 'International Fund for Agriculture Development (IFAD)',
      imageUrl: 'https://softtechs360.com/coffee/wp-content/uploads/2025/07/Rick-van-der-Kamp.jpg',
      companyIcon: "https://softtechs360.com/coffee/wp-content/uploads/2025/07/E_g_web.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: `  Rick van der Kamp is the International Fund for Agriculture Development (IFAD)’s global lead for markets, value chains and rural finance, based out of its headquarters in Rome. He has over 20 years of experience in agribusiness, markets and value chains, and rural finance projects, in particular in cocoa, coffee and agro-inputs. A Dutch national, he has Masters in Physics & Development Studies (Eindhoven University of Technology) and in Economics (University of London, UK). 
Rick started his career in management consulting with Accenture in London, focusing on financial management for manufacturing and services. After four years, he decided to shift his focus to international development, and worked in agribusiness, value chains and microfinance across Africa, Latin America, Eastern Europe and Southeast Asia. Before IFAD, he spent 11 years with IFC (agribusiness advisory services), some time at FMO and he ran an agricultural markets development program in Nepal. Besides running a number of coffee projects in Central America, he managed IFC's agri-finance program in Indonesia, and coordinated IFC’s ag-tech offering. Currently, part of his responsibilities is to expand IFAD’s work with private sector partners. 
 `
    },

    {
      name: 'Mumbi Gitau',
      role: 'Soft Commodities Reporter',
      company: 'Bloomberg News',
      imageUrl: 'https://softtechs360.com/coffee/wp-content/uploads/2025/09/Mumbi-Gitau-scaled.jpg',
      companyIcon: "",
      iconWidth: 100,
      iconHeight: 100,
      bio: `Mumbi Gitau, soft commodities reporter at Bloomberg News, covering global coffee, cocoa, sugar, cotton, and orange juice markets. `
    },

    {
      name: 'Niels Wielaard',
      role: 'Founder and Director',
      company: 'Satelligence',
      imageUrl: 'https://softtechs360.com/coffee/wp-content/uploads/2025/09/Niels-Wielaard.jpg',
      companyIcon: "https://softtechs360.com/coffee/wp-content/uploads/2025/08/Satelligence-blue.svg",
      iconWidth: 100,
      iconHeight: 100,
      bio: `  Niels is the founder and director of Satelligence, a social enterprise dedicated to tracking deforestation for companies and partners such as Cargill, Unilever, Fairtrade International and Tony’s Chocolonely. He is driven by a commitment to protecting people and the planet through the use of satellite-based analytics, particularly in promoting more sustainable agricultural commodities. 

With over 25 years of experience in tropical commodity production landscapes, Niels is a recognised expert in satellite-based monitoring of forests, agriculture, carbon and water. His expertise has seen him serve as a technical advisor to the European Commission on the implementation of the EU Renewable Energy Directive. He has also been an invited member of the RSPO Working Group on GHG Emissions and a specialist in Monitoring, Reporting, and Verification (MRV) systems for REDD+. Niels earned his MSc in Forestry, specialising in Remote Sensing, from Wageningen University in 2003.
 `
    },

//     {
//       name: 'Anup Jagwani',
//       role: 'Global Sr. Sector Manager – Agribusiness and Forestry',
//       company: 'International Finance Corporation (IFC)',
//       imageUrl: 'https://softtechs360.com/coffee/wp-content/uploads/2025/09/Anup-Jagwani.jpg',
//       companyIcon: "https://softtechs360.com/coffee/wp-content/uploads/2025/09/IFC-Logo.svg",
//       iconWidth: 100,
//       iconHeight: 100,
//       bio: `  Anup Jagwani is the Senior Global Sector Manager for Agribusiness and Forestry at the International Finance Corporation (IFC), a member of the World Bank Group, and the largest development institution focused on the private sector in emerging markets.  
  
// In this role Anup leads the framing and implementation of the Agribusiness & Forestry sector strategy, including growing IFC’s Agribusiness & Forestry portfolio and creating markets through new initiatives and products. He leads on innovation and the development and rollout of new business lines/products, ensuring the effective delivery of Investment and Advisory projects.
 
// Before taking on this role in August 2023, Anup was leading the climate finance and policy team and covered several areas of IFC’s climate business including Paris Alignment; sustainable finance; carbon pricing and carbon credits; climate risk, adaptation and resilience; biodiversity finance and nature-based solutions; stakeholder engagement & disclosure including TCFD and, climate related technical assistance and training programs.
//  `
//     },
        {
      name: 'Joy Macknight',
      role: 'Journalist, Former Editor',
      company: 'Financial Times - The Banker',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/08/Joy-Macknight-12-of-19.jpg',
      companyIcon: "",
      iconWidth: 120,
      iconHeight: 120,
      bio: `Joy Macknight is a freelance journalist and former editor of The Banker, part of the
      Financial Times group. She joined The Banker in August 2015 as transaction
      banking and technology editor, was promoted to deputy editor in September 2016
      and then to managing editor in April 2019, before becoming the first female editor in
      the publication’s history in March 2021. Previously, she was features editor at Profit
      &amp; Loss, editorial director at Treasury Today and editor at gtnews. She also worked as
      staff writer on Banking Technology and IBM Computer Today, as well as a freelancer
      on Computer Weekly.`
    },
            {
      name: 'Sean Edwards',
      role: 'Chairman',
      company: 'International Trade Forfaiting Association (ITFA)',
      role2: 'Head of Legal',
      company2: 'Sumitomo Mitsui Banking Corporation(SMBC) ',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/09/sean-edwards.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/09/ITFA_Logo_Positive-2-e1727183762852.png",
      iconWidth: 120,
      iconHeight: 120,
      bio: `He is Special Adviser to the Trade Finance Department of the bank and a member of its Trade Innovation Unit. 

      Sean is Chairman of the International Trade & Forfaiting Association (ITFA).
      He is a draftsman of the Uniform Rules for Forfaiting (URF), its counterpart for digital payment obligations, the Unform Rules for Transferable Electronic Payment Obligations (URTEPO) and the Standard Definitions for Techniques of Supply Chain Finance published by ITFA, ICC, FCI, BAFT and the EBA.

      He is a former member of the Executive Committee of the ICC Banking Commission and the ICC Working Group on Digitalisation in Trade Finance.
      Sean is a member of the World Trade Organisation (WTO) Trade Finance Expert Group.

      He is a non-executive director of Swiss fintech, KomGo S.A.
      Sean has been appointed to the advisory board of the Centre for Digital Trade and Innovation (C4DTI), a joint venture of the UK Government, ICC UK and Tees Valley Combined Authority.

      He is a member of the Working Group of the Commonwealth Connectivity Agenda established by The Commonwealth.

      Sean has written for all the major trade finance magazines and is on the editorial board of Global Trade Review (GTR). He has presented at many conferences.
    `
    },
    {
      name: 'Roel Messie',
      role: 'Chief Executive Officer',
      company: 'IDH Investment Management',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2025/06/Roel-Messie-1.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2025/06/IDH-logo-kleur_RGB-e1749856681561.jpg",
      iconWidth: 240,
      iconHeight: 100,
      bio: `Roel Messie is Chief Investment Officer of IDH and leads IDH Invest. IDH is an international
organisation that convenes, manages and finances large programs with multinational and smaller
companies, governments and civil society organisations in the agricultural sector around the globe.
IDH Invest is the integrated investment proposition of IDH, with Investment Development and
Investment Management as pillars. Investment Development aims to deepen impact by supporting
agribusinesses to achieve investment readiness and IDH Investment Management manages
investment vehicles and funds for a more inclusive and sustainable agricultural sector in the Global
South.
Roel is also the Chief Executive Officer of IDH Investment Management BV. IDH Investment
Management, wholly owned by IDH, manages Blended Finance funds with the objective of creating
a more sustainable and inclusive agricultural sector in the Global South. IDH Investment
Management is the manager of the IDH Farmfit Fund, a EUR 100 million impact Fund that aims to
improve the lives of 3 million smallholder farmers.
Roel joined IDH in 2018 and prior to that, held various management positions in the Dutch
Entrepreneurial Development Bank (FMO) and worked for ABN AMRO Bank. He has over 30 years
of investment experience and holds a Master’s Degree in law from the University of Leiden. `
    },
        {
      name: 'Will Baldwin-Cantello',
      role: 'Director, Nature-based Solutions',
      company: 'WWF-UK',
      imageUrl: 'https://softtechs360.com/coffee/wp-content/uploads/2025/10/Image-empty-state.jpeg',
      companyIcon: "https://softtechs360.com/coffee/wp-content/uploads/2025/10/WWF-Logo.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: ` `
    },
    {
      name: 'Saurabh Pratap',
      role: 'Executive Director, Sustainable Finance',
      company: 'Standard Chartered Bank',
      imageUrl: 'https://softtechs360.com/coffee/wp-content/uploads/2025/09/Saurabh-Pratap.jpg',
      companyIcon: "https://softtechs360.com/coffee/wp-content/uploads/2025/09/sc-lock-up-english-grey-rgb-scaled.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: ` `
    },
        {
      name: 'Ethan Budiansky',
      role: 'Sustainable Commodities Lead',
      company: 'Wildlife Conservation Society (WCS)',
      imageUrl: 'https://softtechs360.com/coffee/wp-content/uploads/2025/09/Ethan-Budiansky.jpeg',
      companyIcon: "https://softtechs360.com/coffee/wp-content/uploads/2025/09/imageedit_1_4178324201-1.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: `Ethan Budiansky is the Sustainable Commodities Lead at the Wildlife Conservation Society, working at the intersection of biodiversity, commodity production, healthy landscapes, and livelihoods. He has over 20 years of experience in conservation, corporate engagement, and natural resource management. Previously, he spent 13 years at the World Cocoa Foundation as Sr. Director of Environment, leading the Climate Smart Cocoa Program and Cocoa & Forest Initiative to advance sustainability and address deforestation and climate risks. He also directed agroforestry programs at Trees for the Future and served in the Peace Corps in Senegal. Ethan holds a B.A. in Zoology and dual M.A.s in Sustainable Development and Natural Resource Management.
 `
    },
        {
      name: 'Patrick Gibson',
      role: 'EO Senior Climate Lead',
      company: 'UK Space Agency',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2025/06/Patrick-Gibson.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2025/06/full_transparent.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: ` `
    },

    {
      name: 'James Chamberlayne',
      role: 'Director, Sustainable Finance Program',
      company: 'CDP',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2025/06/James-Chamberlayne.jpg',
      companyIcon: "https://softtechs360.com/coffee/wp-content/uploads/2025/07/cdp.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: `  James Chamberlayne is the director of CDP’s Sustainable Finance Program, 
      Capital Markets, which facilitates real-economy engagement, disclosure and data 
      insights tailored specifically to serve the needs of banks and financial institutions. 
      Before this, he led the UK and worldwide supply chain team at CDP working with large 
      multinationals in their efforts to build sustainable supply chains. Before CDP, James 
      worked in India, as head of sustainability and social impact for a company in the agriculture 
      commodities sector and has a background in International and sustainable development. `
    },
    {
      name: 'Andrea Olivar',
      role: 'Strategy & Quality Director-Latin America',
      company: 'Solidaridad Network',
      imageUrl: 'https://softtechs360.com/coffee/wp-content/uploads/2025/09/Andrea-Olivar.jpg',
      companyIcon: "https://softtechs360.com/coffee/wp-content/uploads/2025/09/Logo-full-colour-for-professional-print.jpg",
      iconWidth: 100,
      iconHeight: 100,
      bio: `Andrea Olivar is an expert in sustainability and has been working in the coffee sector for over 15 years. 
      Andrea is the Director for Strategy and Quality for Solidaridad in Latin America. 
      Previous to that, she served as Solidaridad’s Global Manager for Coffee, Country Manager for Colombia and as Head of the Sustainable Trade Platform. Andrea also worked for a period of six years as Head of the Coffee Programme at Twin Trading, a British speciality coffee trader. She started her career at Colombian Agency for the promotion of exports (ProColombia), followed by positions at the Fairtrade Foundation and Agrofair in London.
      `
    },
    {
      name: 'Taco Bosman',
      role: 'Partner',
      company: 'EY',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2025/06/Taco-Bosman.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2025/06/ernst-young-logo-0-min.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: ` Dr. Leonard Mizzi is Head of Unit at the European Commission, Directorate-General (DG) for International Partnerships - Sustainable Agri-Food systems and Fisheries, since 1st of January 2017. Prior to this post he was Head of Unit for 10 years in DG Agriculture and Rural Development, first in charge of agri trade and development issues (2007-2014) and from 2015-2016 leading the inter institutional unit hence relations with the European Parliament, Council and consultative bodies and well as steering the Civil Dialogue Groups.
He is a graduate in Public Administration from the University of Malta (BA Hons First Class); and has degrees from CIHEAM-Montpellier (Master of Science) and a Ph.D in Agricultural economics from the University of Reading (UK). He has been an author of a number of articles and publications on agri food issues and nutrition in the Mediterranean region.
Dr. Mizzi has a broad working experience in the Maltese public administration and the Maltese private sector. He first worked in the Economic Planning Division of the Office of the Prime Minister (Malta) and from 1996-2006 was the first Director of the Malta Business Bureau in Brussels- the office of the Malta Chamber of Commerce and Enterprise and the Malta Hotels and Restaurants Association. 
He was also visiting lecturer at the Boston University (Brussels campus), Open University and Malta University. He often lectures at the College of Europe in Bruges.
His areas of specialisation are global food security governance, agriculture and food and nutrition security, the Mediterranean and Sub Saharan Africa.
 `
    },

  ];

  const [selectedSpeaker, setSelectedSpeaker] = useState<T_Speaker | null>(null);

  return (
    
    <>

      <div className="px-12 py-20 sm:px-20" id="speakers">
        <div className="mx-auto sm:content-center">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">2025 SPEAKERS</p>
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
                        src={speaker.imageUrl}
                        alt={speaker.name}
                        width={160}
                        height={160}
                      />
                      <div className="absolute w-24 h-24 right-4 top-4/4 transform -translate-y-1/2 bg-white p-2 rounded-md shadow-md">
                        <div className='flex items-center h-full'>
                          <Image
                            src={speaker.companyIcon}
                            alt={`${speaker.company} logo`}
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
                      <p className="leading-7 text-white text-sm">{speaker.role}</p>
                      <p className="font-semibold leading-7 text-white text-md">{speaker.company}</p>
                      <p className="leading-7 text-white text-sm">{speaker.role2}</p>
                      {speaker.company2 && <p className="font-semibold leading-7 text-white text-md">{speaker.company2}</p>}
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
                      <Image className="rounded-md w-[20rem]" src={selectedSpeaker.imageUrl} alt={selectedSpeaker.name} width={160} height={160} />
                    </div>
                    <div className='flex justify-center p-2'>
                      <div className='bg-white p-2 rounded-md'>
                        <Image src={selectedSpeaker.companyIcon} alt={`${selectedSpeaker.company} logo`} width={140} height={140} />
                      </div>
                    </div>
                    <div className="flex mx-auto text-center">
                      <div>
                        <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-lg">{selectedSpeaker.name}</p>
                        <p className="leading-7 text-gray-700 text-md">{selectedSpeaker.role}</p>
                        <p className="font-semibold leading-7 text-gray-900 text-2xl">{selectedSpeaker.company}</p>
                       <p className="leading-7 text-gray-700 text-md">{selectedSpeaker.role2}</p>
                       <p className="font-semibold leading-7 text-gray-900 text-2xl">{selectedSpeaker.company2}</p>
                      </div>
                    </div>
                  </div>
<div className="overflow-auto text-sm sm:text-md sm:mt-5 max-h-60">
  <div className="mt-2 text-gray-600"
    dangerouslySetInnerHTML={{ __html: selectedSpeaker.bio }}
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

export default Speakers2024;
