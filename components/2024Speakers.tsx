import { Transition, Dialog } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import Image from 'next/image'

interface T_Speaker {
  name: string;
  role?: string;
  company: string;
  iconWidth: number;
  iconHeight: number;
  imageUrl: string;
  companyIcon: string;
  bio: string;
}

function Speakers2024() {
  const speakers = [
    {
      name: 'Dr. Ngozi Okonjo-Iweala',
      role: 'Director-General',
      company: 'World Trade Organization (WTO)',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/08/Ngozi-Okonjo-Iweala-1-scaled.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/08/World_Trade_Organization-Logo.wine_.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: `
        Dr Ngozi Okonjo-Iweala took office as WTO Director-General on 1 March 2021. She is a global finance expert, an economist and international development professional with over 40 years of experience working in Asia, Africa, Europe, Latin America and North America. Dr Okonjo-Iweala was formerly Chair of the Board of Gavi, the Vaccine Alliance. She was previously on the Boards of Standard Chartered PLC and Twitter Inc. She was appointed as African Union (AU) Special Envoy to mobilise international financial support for the fight against COVID-19 and WHO Special Envoy for Access to COVID-19 Tools Accelerator. She is a skilled negotiator and has brokered numerous agreements which have produced win-win outcomes in negotiations. She is regarded as an effective consensus builder and an honest broker enjoying the trust and confidence of governments and other stakeholders.
        Previously, Dr Okonjo-Iweala twice served as Nigeria's Finance Minister (2003-2006 and 2011-2015) and briefly acted as Foreign Minister in 2006, the first woman to hold both positions. She distinguished herself by carrying out major reforms which improved the effectiveness of these two Ministries and the functioning of the government machinery. She had a 25-year career at the World Bank as a development economist, rising to the No. 2 position of Managing Director, Operations. As a development economist and Finance Minister, Dr Okonjo-Iweala steered her country through various reforms ranging from macroeconomic to trade, financial and real sector issues.

      `
    },
    {
      name: 'Dr. Florika Fink-Hooijer',
      role: 'Director-General, Environment Department',
      company: 'European Commission',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/05/FLORIKA-SQUARE-scaled.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2020/12/LOGO-CE_Vertical_EN_quadri_HR.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: `
        Dr. Florika Fink-Hooijer is the Director-General of the Environment 
        Department of the European Commission. 
        Having occupied various senior management positions in the European 
        Commission, Florika is recognized for her strong management and 
        leadership skills and her in-depth experience in EU policy making & 
        shaping. 
        A lawyer by training, Florika brings a proven record of accomplishment 
        in foreign external and security policy as well as in humanitarian aid and 
        disaster risk reduction. She has extensive experience in leading complex 
        inter-institutional and intergovernmental negotiations.
        In her current role, she is responsible for implementing the European 
        Green Deal objectives in particular the areas of Circular Economy, 
        Biodiversity and Zero Pollution
      `
    },
    {
      name: 'The Rt. Hon John Gummer, Lord Deben',
      role: 'Former Chairman',
      company: 'UK Climate Change Committee (The CCC)',
      company2: "House of Lords",
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2023/08/Lord-Deben-Photo-2019-adj-003-scaled-1.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/05/House_of_Lords_logo_2020.svg.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: `
      The Rt. Hon John Gummer, Lord Deben, is the founder and Chairman of Sancroft International, a consultancy that advises both businesses and investors on all areas of Sustainability and ESG. Between 2012 and 2023 he was Chairman of the UK’s Independent Climate Change Committee. Lord Deben was also the UK’s longest serving Secretary of State for the Environment (1993-97) having previously been Minister of Agriculture, Fisheries, and Food. His sixteen years of top-level ministerial experience also include Minister for London, Employment Minister, and Paymaster General in HM Treasury. Lord Deben is currently Chairman of Valpak Ltd and of PIMFA, the trade body representing financial advisers and wealth managers. Throughout his political, business, and personal life Lord Deben has consistently championed an accord between sustainability and business sense.
      `
    },
    {
      name: 'H.E. Johnston Busingye',
      company: 'High Commissioner for the Republic of Rwanda to the United Kingdom',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/07/HC-Potrait.jpeg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/07/Coat_of_arms_of_Rwanda.svg",
      iconWidth: 60,
      iconHeight: 60,
      bio: `
      Johnston Busingye, appointed as Rwanda's High Commissioner to the Court of Saint James in August 2021, has a diverse background in law and justice. He began his career as a Legal Officer at Uganda Airlines and later served as the Director of Airports in Rwanda. Busingye played a key role in reopening the international airport post-war and genocide against the Tutsi in 1994. He then practiced as an advocate and served as the National Prosecutor, contributing to justice sector reforms. As Secretary General for the Ministry of Justice, he oversaw various justice-related services. Busingye later served as the President of the High Court in Rwanda and as Principal Judge of the East African Court of Justice. During his tenure as Minister of Justice and Attorney General (2013-2021), he significantly contributed to transforming Rwanda's justice system. Busingye is married to Phoebe Murerwa and is a father of six children.
      `
    },
    {
      name: 'Dr. Helge Elisabeth Zeitler',
      role: 'Director for UN, EU',
      company: 'German Federal Ministry for Economic Cooperation and Development (BMZ)',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/08/Helge-Zeitler-frei-verwendbar-2.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/08/bmz-1.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: `
      A lawyer by training, Dr. Helge Elisabeth Zeitler has been since April 2024 Director for  UN and EU affairs, also covering G7/20 and trade, at the German Federal Ministry for Economic Cooperation and Development. Prior to this post, she held different positions in the international directorate of the European Commission’s Environment Department, with topics ranging from deforestation-free supply chains and international water policy to environmental cooperation at the UN and under various multilateral agreements. Helge Zeitler also served in the past at the EU Delegation to the UN in New York, at the UN International Criminal Tribunal for Rwanda in Tanzania and at the German Foreign Ministry.
      `
    },
    {
      name: 'Dr. Jennifer “Vern” Long',
      role: 'Chief Executive Officer',
      company: 'World Coffee Research',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/05/JENNIFER-SQUARE-scaled.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/07/WCR-primary-logo.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: `
        Vern Long is the Chief Executive Officer of World Coffee Research (WCR). WCR unites the 
        global coffee industry to drive science-based agricultural solutions to urgently secure a 
        diverse and sustainable supply of quality coffee today and for generations to come. In close 
        collaboration with the WCR Board and member companies, Dr. Long and the WCR executive 
        leadership team are harnessing the collective power of the coffee industry to deepen public 
        and private investment and engagement in coffee R&D in response to the significant 
        innovation gap in coffee agriculture. A plant breeder by training, Long has over 25 years of 
        experience in global collaborative crop improvement and seed systems initiatives aligning 
        public sector and industry goals. She is deeply motivated by the transformative power of 
        agricultural R&D to achieve the coffee industry’s sustainability priorities. A dual citizen of 
        Canada and the U.S., she holds a Ph.D. in plant breeding from Cornell University.
      `
    },
    {
      name: 'Sylvia J. Megret',
      role: 'President and Chief Executive Officer',
      company: 'ACDI/VOCA',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/05/SYLVIA-SQUARE.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/05/ACDIVOCA-logo-gray-tag.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: `
      Sylvia J. Megret serves as president and CEO of ACDI/VOCA. As a global development executive with 30 years of experience, she promotes the organization’s mission and lives its values in support of inclusive, sustainable development worldwide. Sylvia joined ACDI/VOCA in December 2016, first serving as chief operating officer (COO) and later as president and COO from February 2021 to April of 2022. She also served as interim CEO from December 2017 to June 2018.
      Sylvia has proven expertise convening diverse teams that bridge functions, cultures, and international borders. She is also skilled at identifying and institutionalizing effective teams and systems for maximum efficiency and success.
      Sylvia is currently board chair of the Fundación ACDI/VOCA Latin America (FAVLA). She also serves as a board member of the Society of International Development’s U.S. Chapter (SID-US) and as the 2022 SID-US conference chair. Sylvia led ACDI/VOCA’s role as a founding member of the Coalition for Racial and Ethnic Equity in International Development (CREED) and is also a founding member of Chief (Washington).
      She holds a master’s degree in international development from American University and a bachelor’s degree in political science and French from the University of Michigan. She is fluent in English and French, and her work has taken her from Africa to Asia, Latin America, and the Caribbean.      
      `
    },
    {
      name: 'Dr. Parmesh Shah',
      role: 'Global Lead for Data-Driven Digital Agriculture and Innovations',
      company: 'The World Bank',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/06/PARMESH-SQUARE.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/06/THE-WORLD-BANK.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: `
      Parmesh Shah is the Global Lead for Data-Driven Digital Agriculture and Innovations at the World Bank. He provides leadership to the Bank’s work in these areas and supports the development of global knowledge and learning. His current areas of interest are making markets and public services work for the poor, social entrepreneurship, digital and data-based innovations in agriculture and rural development, climate-smart agriculture, Agriculture and technology-enabled start-ups, innovation, promotion of on-farm, off-farm and digital jobs and public-private and people partnerships for rural poverty reduction. He is currently involved in developing a global program on scaling up data-driven digital agriculture involving data platforms and establishing ecosystems for innovation, entrepreneurship, and incubation. He holds a D Phil in Development Studies from the Institute of Development Studies at the University of Sussex, an MBA from the Indian Institute of Management, Ahmedabad, and a B. Tech degree in Agricultural Engineering from Pantnagar in India.
      `
    },
    {
      name: 'Graham Turnock',
      role: 'Integrated Accelerator Team Leader, Special Advisor',
      company: 'European Space Agency (ESA)',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/06/GTimage.png',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/06/ESA_logo_2020_Deep-e1719391553788.png",
      iconWidth: 120,
      iconHeight: 120,
      bio: `
      Graham Turnock is Special Advisor to the European Space Agency.  He currently leads the ESA Accelerator programme, an initiative aimed at speeding up the adoption of space solutions to problems of sustainability on Earth and in Space.  He has over 30 years’ experience in public administration including almost 20 as a UK senior civil servant and was Chief Executive Officer of the UK Space Agency from 2017-2021.  He holds a PhD in particle physics from Cambridge University and CERN.
      `
    },
    {
      name: 'Chris Southworth',
      role: 'Secretary General',
      company: 'International Chamber of Commerce (ICC) United Kingdom',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/05/Headshot-Chris-Southworth.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/05/ICC_United_Kingdom_BLACK_RGB_300dpi.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: `
       Chris Southworth is Secretary General at the International Chamber of Commerce UK and a regular voice for business in the international media speaking on a wide range of business issues including trade, sustainability, international priorities and government policy. 

        He is Co-Chair of Commonwealth Legal Reform and Digitalisation programme launched by Commonwealth Trade Ministers in June 2023, a member of the Legal Reform Advisory Board at the ICC Digital Standards Initiative and co-founder of the UK Centre for Digital Trade and Innovation. He is also a member of the ICC World Council as well as the International Advisory Board of the Queen Mary-UNIDROIT Institute of Transnational Commercial Law. 

        Chris is a leading international expert on creating modern digital trade ecosystems and a regular speaker at international conferences and events. He is the founder of the ICC Digital Trade Roadmap, helped initiate the Electronic Trade Documents Act 2023 and helped secure the 2021 G7 Ministerial Commitment to remove legal barriers to handle commercial trade documents in digital form. He is also a leading industry adviser to the UK government on the digitalisation of trade and works closely with the Department for Business and Trade, Her Majesty’s Revenue and Customs, Cabinet Office and the Department for Science, Innovation and Technology.  

        Prior to joining ICC, he was Executive Director for Global Partnerships, at the British Chambers of Commerce, Head of the International Chambers of Commerce Unit at UK Trade and Investment (UKTI) and a Senior Policy Advisor to Lord Heseltine, former Deputy Prime Minister, for his independent review of UK competitiveness. In 2011 he was advisor to the Minister for Trade and Investment for the government review of mid-size businesses and consequent establishment of the mid-size business export programme. Former roles have encompassed deregulatory and social enterprise policy at the Department for Business.

      `
    },
    {
      name: 'Owen Hewlett',
      role: 'Chief Technical Officer',
      company: 'Gold Standard',
      role2: 'Technical Council Member',
      company2: 'SBTi',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/08/A7404215.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/08/GS_Logo_Secondary.png",
      iconWidth: 120,
      iconHeight: 120,
      bio: `
      Owen is Chief Technical Officer at the Gold Standard Foundation, a leading climate, nature and sustainable development standards system and thought leader. Owen’s expertise and work encompasses the accounting, reporting, funding and policy behind credible corporate and government action, with a focus on the market and non-market mechanisms that support them.

      Owen joined Gold Standard in 2014 and leads all aspects of the Foundation’s standards, assurance and technical policy and best practices work. 

      Owen is also a member of the SBTi Technical Council and the Greenhouse Gas Protocol Advisory Committee for Land Sector and Removals.
      `
    },
    {
      name: 'H. E. Alex Assanvo',
      role: 'Executive Secretary',
      company: 'Cȏte d’Ivoire Ghana Cocoa Initiative (CIGCI)',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/07/alex-assanvo.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/07/cote-divoire-ghana-cocoa-initiative.png",
      iconWidth: 120,
      iconHeight: 120,
      bio: `
      H. E. Alex Assanvo is the first Executive Secretary of the Cȏte d'Ivoire-Ghana Cocoa Initiative (CIGCI). This unique partnership was set up as the result of the presidents of the world’s top cocoa producers, Côte d’Ivoire and Ghana, coming together to address market challenges one by one, faced by the countries, so that the cocoa price eventually reflects the social value of the product and ensures a decent income for farmers. 
      Before his appointment, Assanvo was Global Director of Corporate Affairs and Sustainability at Mars. He began his international development career with the German development agency (GIZ) as a Rural Development Expert between 2002 and 2006 in Dakar, Senegal. 
      He moved on to Fairtrade Labelling International (FLO), in Germany in 2006 as Head for Africa and the Strategic Lead for Cocoa and Cotton. He later joined the Sustainability and Procurement team at Kraft Foods, now Mondelēz International, from October 2011 to 2013 as the Cocoa Development Manager in charge of the Cocoa Life Programme.
      `
    },
    {
      name: 'Claude Bizimana',
      role: 'Chief Executive Officer (CEO)',
      company: 'National Agricultural Export Development Board (NAEB), Rwanda',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/08/Claude-Bizimana.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/08/NAEB-logo.jpg",
      iconWidth: 120,
      iconHeight: 120,
      bio: `
      Claude Bizimana is the Chief Executive Officer (CEO) of the National Agricultural Export Development Board (NAEB), a commercial public institution in Rwanda in charge of exports of agricultural and livestock products. With over 20 years of experience as a lecturer and researcher in one of Rwanda’s most prominent academic institutions, Claude Bizimana led different initiatives at national, regional and continental levels, including the country office of the Comprehensive Africa Agriculture Development Program, the most ambitious and comprehensive agricultural reform effort ever undertaken in Africa made by African Heads of States and Governments. As the CEO of NAEB, Claude Bizimana thrives to establish relations and cooperation with regional and international organisations with the aim of improving operations in the coffee value chain and collaboration among stakeholders, especially those who grow and produce the raw product.
      `
    },
    {
      name: 'Tim Scharrer',
      role: 'COO and Regional Director Europe and North America',
      company: 'Volcafe',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/07/Tim_Scharrer_COO_RD_1600x1200.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/05/logo@2x-1.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: `
      Appointed Chief Operating Officer and member of the Senior Leadership Team of Volcafe in 2023, Tim assumes global oversight of Volcafe’s Sustainability and Supply Chain functions. In his capacity as Regional Director Europe and North America, Tim leads our destination businesses in those regions. 
      Tim brings over 30 years of experience in green coffee trading and operations management, from both coffee merchants and the roasting industry. Tim started his career with an apprenticeship as a wholesale and international trade specialist.
      
      He went on to work in various coffee producing countries, including eight years at Volcafe in Colombia (Carcafe), and in the coffee trade in a variety of roles and markets. Prior to re-joining Volcafe, Tim was the Managing Director of SCTC (Starbucks Coffee Trading Company), where he worked for over 15 years. 
      `
    },
    {
      name: 'Pablo von Waldenfels',
      role: 'Director Corporate Responsibility',
      company: 'Tchibo GmbH',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/05/PABLO-SQUARE-scaled.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/05/Tchibo_Logo-hor_Gold-dark_sRGB-scaled.jpg",
      iconWidth: 100,
      iconHeight: 100,
      bio: `
        In November 2022, Pablo von Waldenfels took on his new role as Director Corporate Responsibility at 
        Tchibo GmbH – alongside with Johanna von Stechow in a job-sharing concept.
        After completing his Master's degree at Leuphana University Lüneburg (Economics and Social 
        Sciences), Pablo von Waldenfels started his career at PricewaterhouseCoopers International (PwC) in
        the end of 2008. Already then, his consulting work focused on the topic of sustainability 
        management. From October 2013 to July 2015, Pablo von Waldenfels worked as a freelance 
        consultant for the Ministry of the Environment on behalf of GIZ / CIM in Uruguay. This was followed 
        by a further five and a half years at PwC as Sustainability Manager & Sustainable Finance Specialist.
        In April 2021, Pablo von Waldenfels started as Head of Sustainable Coffee at Tchibo GmbH. In this 
        position, he has since been responsible for the transformation towards sustainable and future-proof 
        coffee supply chains. Together with his team as well as business partners, coffee farmers and other 
        stakeholders along the value chain, he designs and manages in-country sustainability programs. 
        These serve as pilots and implementing grounds for the development of better farm incomes, supply 
        chains that do not respect human rights violations and to strengthen environmentally friendly coffee 
        cultivation. In addition to this role, he took over the management of the entire CR department
        together with Johanna von Stechow at the end of 2022.
        Additionally, Pablo von Waldenfels is Vice Chair of the Board of World Coffee Research (WCR) and a 
        member of the Steering Committee of the International Coffee Partners (ICP) and the initiative for
        coffee&climate (c&c).
        In his private life, the father of two daughters enjoys sports – including the participation in triathlon 
        competitions
      `
    },
    {
      name: 'Laurent Sagarra',
      role: 'Vice President Sustainability',
      company: 'JDE Peet’s',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/08/laurent-sagarra-scaled.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/07/Logo.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: `
        Laurent is Vice President of Sustainability at JDE Peet’s, leading the company towards a better future through sustainable growth. He has worked in the Food & Beverage industry for over 20 years focused on quality and sustainability management and has extensive expertise in developing and implementing strategies to ensure product quality, food safety, and compliance. Laurent joined JDE Peet’s in 2017 as Director Global Consumer, Quality & Technology. Prior to joining JDE Peet’s, Laurent held various leadership positions including at Tata Global Beverages where he was Head of Product Innovation, Compliance and Quality. He also held senior quality and food safety roles at Salins Group and Kraft Europe (now part of Mondelez). He started his career at Pernod Ricard, implementing and researching agricultural programs in Bulgaria, Mexico, Poland, China and Trinidad and Tobago.
        Laurent has a Ph.D. in Entomology-Plant Protection from McGill University and a degree in Agronomy from ESA, L'Ecole Supérieure des Agricultures in Angers, France.
      `
    },
    {
      name: 'Roberto Alonso Vega Alfaro',
      role: 'VP of Global Coffee Agronomy, R&D and Sustainability',
      company: 'Starbucks',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/07/World-Coffee-Innovation-Sumit-London.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/07/STARBUCKS-LOGO.jpg",
      iconWidth: 120,
      iconHeight: 120,
      bio: `
      Roberto Vega is a seasoned sustainability practitioner with over 30 years of experience in the financial and agricultural sectors, working across the globe. Having lived in Costa Rica, France, Germany, and Switzerland, Roberto brings a wealth of international perspectives to his work. With formal education in Business (MBA), Environmental Governance and Policy Making (Executive Master), and Sustainability, he possesses a robust skill set encompassing financial analysis, project implementation, and environmental and social policy expertise.
      Fluent in Spanish, French, and English, with advanced knowledge of German, Roberto has effectively navigated diverse cultural and linguistic landscapes in his professional journey. His career spans various projects in developing markets, particularly in Latin America, APAC, and Africa, where he has demonstrated a keen understanding of local contexts and challenges.
      Roberto's extensive experience in stakeholder management has been pivotal in representing companies across multiple platforms and initiatives. He has collaborated with a wide range of organizations, including private and public sectors, as well as civil society organizations (CSOs), fostering partnerships for sustainable development.
      Roberto is currently serving as the VP of Sustainability, Agronomy, and R&D at Starbucks.
      `
    },
    {
      name: 'Piet van Asten',
      role: 'Head of Sustainable Production Systems',
      company: 'Olam Food Ingredients (ofi)',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/08/piet-van-asten.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/08/image00111.png",
      iconWidth: 50,
      iconHeight: 50,
      bio: `
      Transforming agriculture to (re-)build livelihoods and nature requires knowledge, resources and motivation from farmers. Piet is driving the Regenerative Agriculture agenda across ofi through co-creation and co-investment from farmers to customers. He joined Olam in 2017 to co-create, adapt and apply technologies, approaches and services that improve the productivity, profitability, and carbon footprint of ofi’s coffee estates as well as its (smallholder) farmer network. He holds a PhD from Wageningen with a strong focus on agronomy, farming systems, livelihoods and rural innovation. Prior to his work at ofi, he worked for 20 years as a CGIAR scientist on agricultural systems, based out of Africa.
      `
    },
    {
      name: 'Jonathan Sullivan',
      role: 'Vice President Commercial & Sustainability',
      company: 'Agmatix',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/08/Jonathan-Sullivan-Headshot-1.png',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/08/agmatix_logo_New_RGB-Vertical_1.png",
      iconWidth: 50,
      iconHeight: 50,
      bio: `
      Jonathan Sullivan joined Agmatix in 2023 and leads the company’s commercial efforts including the new offering in sustainability and regenerative agriculture. Having a history across the corporate and sustainability sectors, Jonathan is driven to help business be the catalyst for positive impact on the planet. Previously, Jonathan lead sustainability strategy work at PepsiCo, ocean sustainability efforts at OceanX and worked with several Agri-food and CPG clients while a consultant at McKinsey & Company.  Jonathan is a graduate of the Royal Military College and Australian Defence Force Academy, has an MBA from the University of Queensland, and has studied Sustainable Supply Chains at the University of Cambridge. 
      `
    },
    {
      name: 'Manfred Borer',
      role: 'Co-Founder & Chief Executive officer',
      company: 'Koltiva',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/06/Manfred-Borer-CEO-and-Co-Founder-KOLTIVA.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/06/Logo-Koltiva-header.webp",
      iconWidth: 100,
      iconHeight: 100,
      bio: `
      Manfred Borer has been with Koltiva Indonesia since 2013 and has successfully established
      Koltiva AG in Switzerland, together with The Founders.
      Under his direction, Koltiva builds a technology-enabled service company that supports some
      of the largest multinational companies in 61 countries by digitizing and verifying global supply
      chains to enhance traceability, inclusiveness, and sustainability. From Seed to Table.
      He also spearheads the company's significant growth in scaling up to more than 1,300,000
      producers and business users, uplifting producers' income, and bringing responsible finance
      and environmental protection to underserved communities in rural areas. In addition, he
      strengthens Koltiva's positioning to be the world's leading tech company in building ethical,
      transparent, and sustainable supply chains with several exceptional award-winning
      milestones such as Top Innovator Tropical Forest Commodities Challenge 2021 by Uplink and
      World Economic Forum.
      Prior to founding Koltiva, Manfred has over 20 years of experience in entrepreneurship and 16
      years in rural development and working alongside multinational companies’ agriculture supply
      chains.
      Manfred grew up on a smallholder farm in Switzerland, then vocational training as a carpenter,
      and started his career in 1994 as owner-manager of a construction company in his home
      region. After his first 10-years start-up experience, he graduated as a Business Process
      Manager with an Engineering Degree from the University of Applied Sciences Northwestern
      Switzerland, majoring in Plant Management.
      `
    },
    {
      name: 'Franco Costantini',
      role: 'CEO',
      company: 'Regenagri',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/08/Franco-Costantini-Headshot-scaled.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/08/image_regenagri_logo_full__002_.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: `
      Franco has worked for about 20 years in sustainability across different sectors and specializing in the design, development and implementation of certifications and impact programmes.
      Franco is the CEO of Regenagri, an organisation that he initiated in 2019. Currently he focuses on innovation and stakeholders’ engagement.
      
      Franco holds a Master of Business Administration MBA, a post-grad Research Master (M.Res) in Fluid Dynamics and a Master of Engineering (M.Eng) in Mechanical Engineering.
      `
    },
    {
      name: 'Jari Partanen',
      role: 'Board Director',
      company: 'European Bank for Reconstruction and Development (EBRD)',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/06/Partanen_Jari_potretti.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/06/Ebrd-logo-regular-blue-english-e1719190097501.png",
      iconWidth: 120,
      iconHeight: 120,
      bio: `
      Mr Jari Partanen is the EBRD Board Director for Finland, Norway, Latvia, Lebanon.   He joined the Bank in September 2021.  
      Prior to the EBRD, Jari had a long-term position as State Secretary (Vice Minister) with a wide and strong record in the fields of finance and finance markets, economy, sustainable growth, SME policy, agribusiness (EU CAP), transport and infrastructure policies and regulation. 
      He held leadership roles in government and international institutes including during Finland´s Presidency of the Council of the European Union and European Neighbourhood Instrument Cross Border Cooperation Programme, specialising in Finland and European Union legislative processes. 
      He holds a MA in Law and has received the Cross of Knight, First Class of the Order of the White Rose of Finland.

      `
    },
    {
      name: 'Evan Paul',
      role: 'Senior Director, Innovation for Nature',
      company: 'Salesforce',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/08/evan-paul-scaled.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/08/salesforce-with-type-logo.png",
      iconWidth: 120,
      iconHeight: 120,
      bio: `
      Evan Paul is the Senior Director of Innovation for Nature at Salesforce, bringing over two decades of experience in digital innovation and environmental impact. Formerly the Head of Product at GuideStar.org, Evan led the development of the United States' largest impact reporting program for charities. He also co-founded SeaSketch.org, a pioneering platform for participatory marine conservation planning. Evan is passionate about using software to embed consideration of nature into the flow of work for large enterprises.
      `
    },
    {
      name: 'Rick van der Kamp',
      role: 'Global Lead for Markets, Value Chains and Rural Finance',
      company: 'International Fund for Agriculture Development (IFAD)',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/08/rick-van-der-kamp-2.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/08/E_g_web.png",
      iconWidth: 120,
      iconHeight: 120,
      bio: `
      Rick van der Kamp is the International Fund for Agriculture Development (IFAD)’s global lead for markets, value chains and rural finance, based out of its headquarters in Rome. He has over 20 years of experience in agribusiness, markets and value chains, and rural finance projects, in particular in cocoa, coffee and agro-inputs. A Dutch national, he has Masters in Physics & Development Studies (Eindhoven University of Technology) and in Economics (University of London, UK). 
      Rick started his career in management consulting with Accenture in London, focusing on financial management for manufacturing and services. After four years, he decided to shift his focus to international development, and worked in agribusiness, value chains and microfinance across Africa, Latin America, Eastern Europe and Southeast Asia. Before IFAD, he spent 11 years with IFC (agribusiness advisory services), some time at FMO and he ran an agricultural markets development program in Nepal. Besides running a number of coffee projects in Central America, he managed IFC's agri-finance program in Indonesia, and coordinated IFC’s ag-tech offering. Currently, part of his responsibilities is to expand IFAD’s work with private sector partners. 
      `
    },
    {
      name: 'Barney Reynolds',
      role: 'Partner',
      company: 'A&O Shearman',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/08/reynolds_b_hires.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/08/AOShearman_Wordmark_Progress-Green_RGB.png",
      iconWidth: 120,
      iconHeight: 120,
      bio: `Barney Reynolds is Global Co-Head of Financial Institutions, and of the Financial Services Regulatory Group, at A&O Shearman. He is one of the world's leading financial institution practitioners, specialising in all areas of banking, fund management, financial markets and financial infrastructure, crypto, insurance/reinsurance, AML and sanctions. He has particular expertise in UK and EU regulation. He has additional familiarity with the regime of Abu Dhabi Global Market (ADGM), which he conceived and established. He advises on navigating legal and regulatory systems worldwide. He is known as a pathfinder for giving strategic advice to financial services firms on how to plot the most efficient course through law and regulation; on the use of legal reasoning to achieve legal and regulatory certainty; and in engaging productively with the regulators and government officials. Barney is a noted commercial thinker on law and regulation, assisting firms in planning for and managing emerging risks from legal and regulatory change. He has helped numerous clients with business transformation. Barney advised the UK government and numerous businesses in the context of the legal and other implications of leaving the EU, and how to navigate them. He is interviewed and published widely and is frequently called to give evidence before Parliamentary Committees.`
    },
    {
      name: 'Joy Macknight',
      role: 'Journalist, Former Editor',
      company: 'The Banker',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/08/Joy-Macknight-12-of-19.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/08/ftlogo-v1_brand-ft-logo-landscape-coloured.png",
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
      name: 'Andrea Geremicca',
      role: 'Director General',
      company: 'European Institute of Innovation for Sustainability (EIIS)',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/05/ANDREA-SQUARE.jpeg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/05/Logo-EIIS_Colour.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: `
      Andrea Geremicca is the Director General of the European Institute of Innovation for Sustainability (EIIS). 
      He is an adjunct professor at LUISS and LUMSA, where he teaches Innovation for Sustainability, and a faculty member at Singularity University, where he specializes in innovation for sustainability and foresight. Andrea attended the Harvard Business School Exc in Boston, focusing on driving innovation in large organizations. He contributes to the Harvard Business Review, writing about future scenarios and emerging macro trends. He has delivered two TEDx Talks, in 2018 and 2021. In 2018, Andrea had the honor of lecturing at Harvard Kennedy School and Sciences Po in Paris. Additionally, he authored two books in 2022 and 2023, which have become essential texts in the business faculties of two universities.      
      `
    },
    {
      name: 'Thomas Bagge',
      role: 'Chief Executive Officer',
      company: 'Digital Container Shipping Association (DCSA)',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/07/Ze9atkmNsf2sHgce_ThomasBaggeSquareWEB.png.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/07/DCSA_logo-1.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: `
        Thomas Bagge is the CEO of the Digital Container Shipping Association (DCSA). Before joining DCSA, he lead numerous large-scale change initiatives at A.P Möller Maersk, focusing on technology, process optimization, and personnel management. 
        With over two decades of experience in transportation and logistics, Thomas possesses a profound understanding of customer needs, industry dynamics, and the complexities of digitizing container shipping. He holds qualifications in Applied Finance and an Executive MBA from Copenhagen Business School, supplemented by executive courses from IMD and Berkeley.
      `
    },
    {
      name: 'Claire Elsdon',
      role: 'Global Director, Capital Markets',
      company: 'CDP',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/07/Claire-Elsdon-profile-pic-2023.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/07/pngegg.png",
      iconWidth: 60,
      iconHeight: 60,
      bio: `
      Claire Elsdon leads the Global Capital Markets and Environmental Data Sales teams at CDP, the non-profit that runs the world’s environmental disclosure system. She defines engagement strategy with financial institutions and other capital markets actors including institutional investors, banks, insurers and private equity and debt houses on a global basis, enabling them to request, utilise and apply critical climate, water and forest impact data from the companies they finance. Claire led CDP's role in delivering disclosure solutions for the Bank of England's CBES exercise and has spearheaded CDP's highly innovative sustainable supplier financing solution, most recently culminating in the Vodafone/Citi collaboration.     
      Prior to CDP, Claire worked for over a decade broking Pan-European Equities to UK based Institutional Investors at HSBC, Merrill Lynch and JP Morgan before moving to Tanzania to establish Africa's leading social enterprise focusing on community motorcycle safety solutions.
      `
    },
    {
      name: 'Sophie Aujean',
      role: 'Director Global Advocacy',
      company: 'Fairtrade International',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/05/SOPHIE-SQUARE.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2020/08/FBM_INT_VERT_RGB_POS.png",
      iconWidth: 60,
      iconHeight: 60,
      bio: `
      Sophie is an advocacy expert, with more than 15 years of experience in human rights and sustainable development. She joined Fairtrade International as Director of Global Advocacy in October 2022. Previously, she was working as EU Representative for WaterAid, on access to water, sanitation and hygiene in developing countries, with a focus on global health and climate adaptation. She also worked for ILGA-Europe, advocating on the human rights of LGBTI people, and beforehand, within the European Commission and the European Parliament. She has volunteered for 13 years for Amnesty International on the human rights situation in Tunisia, Syria and Lebanon. She holds a master’s degree in human rights law.
      `
    },
    {
      name: 'Paul Rooke',
      role: 'Executive Director',
      company: 'British Coffee Association (BCA)',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/05/PAUL-SQUARE.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2023/06/BCA_PrimaryLogo_Large-scaled.jpg",
      iconWidth: 100,
      iconHeight: 100,
      bio: `
      Paul Rooke is Executive Director of the British Coffee Association, responsible for managing and leading the Association, developing key relationships and representing the Association on policy, media and technical issues.  An agricultural graduate, he has over 25 year’s experience in trade associations covering policy, technical and contractual issues. From 2013-2019 has was the President of CELCAA, the European Liaison Committee for the Agricultural and Agri-food Trade, He is a former Chairman of DG Agri’s Civil Dialogue Group for International Aspects of Agriculture of the EU’s High Level Forum for a Better Functioning Supply Chain and DG Trade’s Expert Group on EU Trade Agreements.
      `
    },
    {
      name: 'Dr. James Gimase',
      role: 'Chief Research Scientist',
      company: 'Coffee Research Institute',
      company2: 'Kenya Agricultural and Livestock Research Organization (KALRO)',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/07/James-Gimase-passport-photo.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/07/KALRO.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: `
      Paul Rooke is Executive Director of the British Coffee Association, responsible for managing and leading the Association, developing key relationships and representing the Association on policy, media and technical issues.  An agricultural graduate, he has over 25 year’s experience in trade associations covering policy, technical and contractual issues. From 2013-2019 has was the President of CELCAA, the European Liaison Committee for the Agricultural and Agri-food Trade, He is a former Chairman of DG Agri’s Civil Dialogue Group for International Aspects of Agriculture of the EU’s High Level Forum for a Better Functioning Supply Chain and DG Trade’s Expert Group on EU Trade Agreements.
      `
    },
    {
      name: 'Ashley Olson Onyango',
      role: 'Head of Financial Inclusion & AgriTech',
      company: 'GSMA (Mobile for Development)',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/05/ASHLEY-SQUARE-scaled.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/05/image0011.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: `
      Ashley joined the GSMA in 2021 as the Head of Financial Inclusion and AgriTech.  Prior to joining GSMA, Ashley had been living and working in East Africa, championing financial inclusion and the development of agrifood systems across sub-Saharan Africa for over 11 years.  During this time, Ashley designed and managed funds, investing in agribusinesses and fintechs across the continent, with Root Capital and Africa Enterprise Challenge Fund (AECF), to catalyze innovation and growth for wide impact.  Ashley has played key roles in driving and supporting gender lens investing in her work.  She also worked with Mastercard Foundation and Financial Sector Deepening Africa (FSDA), managing large multi-million-dollar programmes, partnering and working with a wide array of implementing partners and key stakeholders in the industry.
 	
      Ashley holds a BSc in Management and Finance from the University of Minnesota – Twin Cities (United States) and an MBA from IESE Business School (Spain).

      `
    },
    {
      name: 'Dominic Robinson',
      role: 'CEO',
      company: 'Soil Association Certification',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/05/DOMINIC-SQUARE-scaled.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/05/soil-association.jpg",
      iconWidth: 100,
      iconHeight: 100,
      bio: `
      Dominic Robinson joined Soil Association Certification Ltd as CEO in 2022. Over his career he has worked across forestry, water and sustainable land management sectors, with a continued focus on utilising nature-based solutions to drive change. In his pursuit to drive environmental impact he has headed up the National Conifer Collection at Bedgebury, Kent, led the Environment and Planning functions for Forestry England, before then moving to Severn Trent Water. Today he is at the helm of the UK’s leading certification body in sustainable standards in the UK, seeking to grow the UK Organic market and the protection and sustainable utilisation of global forestry resources. SA Cert provides organic certification for farming, food, healthy, beauty and textiles and outside the UK, SA Cert is one of the leading forestry certification bodies for FSC and PEFC standards, operating in over 60 countries and protecting over 28m hectares of the earth’s forests. The unifying mission behind Dominic’s approach has been to ensure that SA Cert utilises its reputation for high integrity to provide trust for consumers and expertise for businesses, to enable organisations around the world to deliver a global impact to address the climate, health and biodiversity crises.
      `
    },
    {
      name: 'T.J. Ryan',
      role: 'Chief of Party of Philippine Coffee Advancement and Farm Enterprise Project',
      company: 'ACDI/VOCA',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/05/T.J.-Ryan-photo.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/05/ACDIVOCA-logo-gray-tag.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: `
      T.J. Ryan has over 30 years of experience in international development and has lived and worked in Africa, South America, and Asia. Over the last 23 years at ACDI/VOCA, he has focused on agribusiness development in the coffee and cocoa sectors by providing technical oversight and managing projects and partnerships with public, private and civil society entities throughout these value chains. He recently completed five years as the project director for ACDI/VOCA on the USDA funded PhilCAFE project which successfully strengthened the coffee sector in the Philippines. Mr. Ryan holds an MBA in international business from Johns Hopkins University and is fluent in English, French, and Spanish. 
      `
    },
    {
      name: 'Peter Nestor',
      role: 'Global Head of Human Rights',
      company: 'Novartis',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/07/peter-nestor.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/07/novartis.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: `
      Peter has been the Global Head of Human Rights since 2020. He is a member of the Ethics and Compliance Leadership Team in the Ethics, Risk, and Compliance function.

      Prior to his current appointment, Peter served as Manager, Human Rights from 2019 to 2020.

      Before joining Novartis, Peter was Director, Human Rights at BSR, a non-profit corporate responsibility advisory firm based in the US. Prior to that, Peter was an attorney at Jones Day, an international law firm.  

      Peter received his juris doctor law degree from the University of Washington in 2008 (US). In 2001, he received his bachelor’s degree in Political Science from Middlebury College (US). 
      `
    },
    {
      name: 'Josep Garí',
      role: 'Head of Climate, Forests & Land',
      company: 'United Nations / UNDP',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/07/Josep-GARI.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/07/UNDP_Logo_Blue.png",
      iconWidth: 40,
      iconHeight: 40,
      bio: `
      Josep Garí leads the Climate, Forests & Land practice at the UN agency for sustainable development (UNDP). He manages a portfolio of projects and partnerships to assist countries implement the Paris Agreement, including financial instruments for the conservation & restoration of forests, national policy schemes that integrate the climate, agricultural and finance sectors, and tailored support to indigenous peoples for their climate and bioeconomy roles. In 2019 he set up the UNDP-Lavazza partnership for deforestation-free coffee, which has served to pilot national blueprints for sustainable coffee production & trade in Latin America. Josep has worked in international cooperation for over two decades, equally serving in multilateral diplomatic negotiations for agricultural and environmental affairs. He holds a DPhil in Political Ecology from the University of Oxford and is a Fellow of the World Academy of Art & Science.
      `
    },
    {
      name: 'Juliette Caulkins',
      role: 'Executive Director',
      company: 'B Lab Europe',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/07/juliette-caulkins-scaled.jpg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/07/B-Lab-Europe-Country-Partners-Logos-1.webp",
      iconWidth: 140,
      iconHeight: 140,
      bio: `Juliette Caulkins is the Executive Director of B Lab Europe, a not-for-profit and social enterprise transforming the global economy. B Lab creates standards, policies, tools, and programs for business, and certifies companies—known as B Corps—who are leading the way.
      Juliette has spent her career bridging the gap between the public and private sector to accelerate systemic change. She has over twenty-five years of experience building resilience and accountability into organizations and demonstrating that business and social purpose go hand in hand. Having led multicultural teams at international corporations and NGOs like UTZ, Mars, Nike and IKEA, Juliette is passionate about equipping and empowering courageous leaders to use business as a force for good.
      She now leads a pan-European network that equips and empowers courageous leaders to measure and improve their impact, collaborate across sectors and transition from shareholder primacy to stakeholder governance. Fun fact: As a certified Chinese Tea Master, she’s always up for a good cup of tea!
      `
    },
    {
      name: 'Grainne Lynch',
      role: 'Business Transformation Lead',
      company: 'IBM Consulting',
      imageUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2024/07/Grainne-Lynch-Profile-pic-2024.jpeg',
      companyIcon: "https://worldcoffeealliance.com/wp-content/uploads/2024/07/IBM_logo®_pos_blue60_RGB.png",
      iconWidth: 100,
      iconHeight: 100,
      bio: `My mission is to enhance the visibility, transparency, and efficiency of supply chains, and to ensure positive environmental and social impact. I am obsessed with innovation and collaboration, and I leverage my expertise in traceability and sustainability to create value for my clients and stakeholders. Being a leader in this space - encouraging and influencing others to think and act is where the magic happens to achieve my mission.
      `
    },
  ];

  const [selectedSpeaker, setSelectedSpeaker] = useState<T_Speaker | null>(null);

  return (
    <>
      <div className="px-12 py-20 sm:px-20" id="speakers">
        <div className="mx-auto sm:content-center">
          <div className="max-w-2xl mx-auto text-center">
              <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">2024 SPEAKERS</p>
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
                      </div>
                    </div>
                  </div>
                  <div className="overflow-auto text-sm sm:text-md sm:mt-5 max-h-60">
                    <p className="mt-2 text-gray-600">
                      {selectedSpeaker.bio}
                    </p>
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
