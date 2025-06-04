import React, { useRef, useState } from "react";
import Slider from "react-slick";

interface Speaker {
  name: string;
  designation: string;
  organization: string;
  image: string;
  logo:string;
  description:string;
}

const speakers: Speaker[] = [
  {
    name: 'Dr Leonard Mizzi',
    designation: 'Head of Unit, Sustainable Agri-Food Systems and Fisheries, Directorate-General for International Partnerships (DG INTPA)',
    organization: 'European Commission (EU)',
    image: 'https://softtechs360.com/worldcoffee/wp-content/uploads/2025/06/photo-LM-high-reso.jpg',
    logo: 'https://softtechs360.com/worldcoffee/wp-content/uploads/2025/06/eu.png',
    description:''
  },
  {
    name: 'The Rt. Hon John Gummer, Lord Deben',
    designation: 'Former Chairman',
    organization: 'UK Climate Change Committee (CCC)',
    image: 'https://softtechs360.com/worldcoffee/wp-content/uploads/2025/06/Lord-Deben-Photo-2019-adj-003-scaled-copy.jpg',
    logo: 'https://softtechs360.com/worldcoffee/wp-content/uploads/2025/06/House_of_Lords_logo_2020.svg_.png',
    description:'The Rt. Hon John Gummer, Lord Deben, is the founder and Chairman of Sancroft International, a consultancy that advises both businesses and investors on all areas of Sustainability and ESG. Between 2012 and 2023 he was Chairman of the UK’s Independent Climate Change Committee. Lord Deben was also the UK’s longest serving Secretary of State for the Environment (1993-97) having previously been Minister of Agriculture, Fisheries, and Food. His sixteen years of top-level ministerial experience also include Minister for London, Employment Minister, and Paymaster General in HM Treasury. Lord Deben is currently Chairman of Valpak Ltd and of PIMFA, the trade body representing financial advisers and wealth managers. Throughout his political, business, and personal life Lord Deben has consistently championed an accord between sustainability and business sense.'
  },
  {
    name: 'Ashwini Sebastian',
    designation: 'Senior Economist',
    organization: 'The World Bank',
    image: 'https://softtechs360.com/worldcoffee/wp-content/uploads/2025/06/Ashwini-Sebastian-upscaled.jpg',
     logo: 'https://softtechs360.com/worldcoffee/wp-content/uploads/2025/06/The-World-Bank.png',
     description:''
  },
  {
    name: 'Stefan Dierks',
    designation: 'Director Sustainability Strategy',
    organization: 'Melitta Group',
    image: 'https://softtechs360.com/worldcoffee/wp-content/uploads/2025/06/Dierks.jpg',
     logo: 'https://softtechs360.com/worldcoffee/wp-content/uploads/2025/06/Untitled-design-2.png',
     description:'Stefan Dierks is since 2019 Director Sustainability Strategy at Melitta Group. In this role he is responsible for the group-wide coordination and monitoring of the Melitta sustainability transformation process. •	He has 19-years’ sustainability experience across different economic sectors, with a special focus on the coffee value chain.  •	Due to his prior professional experience as HR coach and developer, he places a high value on the needs of human beings in transformation processes.  •	Along with his engagement in the mentioned sectors, he is engaged in various sector and sustainability associations and initiatives, on global as well as European and German scale.  •	Stefan studied Environmental Sciences at the Leuphana Luneburg in Germany.  •	He is engaged in different alliances, e.g. as a Board Member of the Global Coffee Platform GCP, Member of the Advisory Board of BAUM e.V., as well as Member of the Board of Trustees of the German Consumer Protection Foundation. •	Stefan regularly gives lectures, e.g. at universities and at conferences.'
  },
  {
    name: 'Mario Abreu',
    designation: 'Group Vice President Sustainability',
    organization: 'Ferrero',
    image: 'https://softtechs360.com/worldcoffee/wp-content/uploads/2025/06/MarioAbreu_Pic.jpg',
     logo: 'https://softtechs360.com/worldcoffee/wp-content/uploads/2025/06/Ferrero-logo.png',
     description:'Mario Abreu has been the Ferrero Group Vice President Sustainability since April 2020, based in Luxembourg. That role entails securing sustainability is fully embedded in the Group&apos;s long-term business strategy. Prior to Ferrero Mario worked for over 20 years in sustainability for Tetra Pak, the last 5 of them as their Global VP Sustainability based in Lund, Sweden. Throughout his time in Tetra Pak he led teams of up to 100 people globally, developing industry-leading programmes for collection and recycling of beverage cartons. Earlier Mario worked as a technical and commercial director for paper manufacturing and recycling businesses. In addition, he has served on several boards (FSC International, RSPO, High Conservation Value Resource Network, Proforest Initiative, and ACE Beverage Cartons) and technical advisory groups (Science Based Targets initiative). Mario is a Mechanical Engineer, with a Post-Grad Diploma in Environmental Decision Making, having done sustainability and business trainings at CISL (UK), IMD (CH), Ashridge (UK), the Open University (UK), and Fundaçao Getulio Vargas (BR).'
  },
  {
    name: 'Toby Behrmann',
    designation: 'Head of London Market & Public Private Partnerships',
    organization: 'AXA Climate',
    image: 'https://softtechs360.com/worldcoffee/wp-content/uploads/2025/06/1669983783165-1.jpg',
     logo: 'https://softtechs360.com/worldcoffee/wp-content/uploads/2025/06/AXA_Climate_Blue_Horizontal_RVB-1.png',
     description:''
  },
  {
    name: 'Nick Appleyard',
    designation: 'Head of Applications and Solutions',
    organization: 'European Space Agency (ESA)',
    image: 'https://softtechs360.com/worldcoffee/wp-content/uploads/2025/06/1549301011565-1.jpg',
     logo: 'https://softtechs360.com/worldcoffee/wp-content/uploads/2025/06/ESA_logo_2020_Deep.png',
     description:''
     
  },
  {
    name: 'Paul Stewart',
    designation: 'Global Coffee Director',
    organization: 'TechnoServe',
    image: 'https://softtechs360.com/worldcoffee/wp-content/uploads/2025/06/Paul-Stewart-headshot.jpg',
     logo: 'https://softtechs360.com/worldcoffee/wp-content/uploads/2025/06/ENG_TNSLogoCMYK_Horz_TaglineTM_Color.png',
     description:'Paul Stewart is TechnoServe’s Global Coffee Director, overseeing a portfolio of partnerships with the world’s leading coffee companies, foundations, and public sector agencies to increase the coffee income of farmers across Africa and Latin America. Over the course of a 23-year career at TechnoServe, Paul has helped build its coffee practice into a recognized leader in “shared value” solutions that reduce poverty for farmers while developing sustainable supply chains for coffee businesses. '
  },
  {
    name: 'Owen Hewlett',
    designation: 'Chief Technical Officer, <strong>Gold Standard;</strong> Technical Council Member, ',
    organization: '',
    image: 'https://softtechs360.com/worldcoffee/wp-content/uploads/2025/06/Owen.jpg',
     logo: 'https://softtechs360.com/worldcoffee/wp-content/uploads/2025/06/Gold-Standard.png',
     description:'Paul Stewart is TechnoServe’s Global Coffee Director, overseeing a portfolio of partnerships with the world’s leading coffee companies, foundations, and public sector agencies to increase the coffee income of farmers across Africa and Latin America. Over the course of a 23-year career at TechnoServe, Paul has helped build its coffee practice into a recognized leader in “shared value” solutions that reduce poverty for farmers while developing sustainable supply chains for coffee businesses. '
  },
  {
    name: 'Patrick Gibson',
    designation: 'EO Senior Climate Lead',
    organization: 'UK Space Agency',
    image: 'https://softtechs360.com/worldcoffee/wp-content/uploads/2025/06/1697446416741.jpg',
     logo: 'https://softtechs360.com/worldcoffee/wp-content/uploads/2025/06/full_transparent.png',
     description:''
  },
  {
    name: 'James Chamberlayne',
    designation: 'Director, Sustainable Finance Program',
    organization: 'CDP',
    image: 'https://softtechs360.com/worldcoffee/wp-content/uploads/2025/06/James-1.jpg',
     logo: 'https://softtechs360.com/worldcoffee/wp-content/uploads/2025/06/pngegg.png',
     description:'James Chamberlayne is the director of CDP’s Sustainable Finance Program, Capital Markets, which facilitates real-economy engagement, disclosure and data insights tailored specifically to serve the needs of banks and financial institutions. Before this, he led the UK and worldwide supply chain team at CDP working with large multinationals in their efforts to build sustainable supply chains. Before CDP, James worked in India, as head of sustainability and social impact for a company in the agriculture commodities sector and has a background in International and sustainable development. '
  },
  {
    name: 'Andrea Olivar',
    designation: 'Strategy & Quality Director-Latin America',
    organization: 'Solidaridad Network',
    image: 'https://softtechs360.com/worldcoffee/wp-content/uploads/2025/06/Andrea-Olivar.jpg',
     logo: 'https://softtechs360.com/worldcoffee/wp-content/uploads/2025/06/Solidaridad.png',
     description:''
  },
  {
    name: 'Claude Bizimana',
    designation: 'Chief Executive Officer (CEO)',
    organization: 'National Agricultural Export Development Board (NAEB), Rwanda',
    image: 'https://softtechs360.com/worldcoffee/wp-content/uploads/2025/06/Claude-Bizimana.jpg',
     logo: 'https://softtechs360.com/worldcoffee/wp-content/uploads/2025/06/NAEB.png',
     description:'Claude Bizimana is the Chief Executive Officer (CEO) of the National Agricultural Export Development Board (NAEB), a commercial public institution in Rwanda in charge of exports of agricultural and livestock products. With over 20 years of experience as a lecturer and researcher in one of Rwanda’s most prominent academic institutions, Claude Bizimana led different initiatives at national, regional and continental levels, including the country office of the Comprehensive Africa Agriculture Development Program, the most ambitious and comprehensive agricultural reform effort ever undertaken in Africa made by African Heads of States and Governments. As the CEO of NAEB, Claude Bizimana thrives to establish relations and cooperation with regional and international organisations with the aim of improving operations in the coffee value chain and collaboration among stakeholders, especially those who grow and produce the raw product.'
  },
];

export default function ConfirmedSpeakers() {
  const sliderRef = useRef<Slider>(null);

  // State to track modal open/close and selected speaker
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

const settings = {
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 0,
  cssEase: "linear",
  arrows: false,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};

  // Close modal when clicking outside modal content
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setSelectedSpeaker(null);
    }
  };

  return (
    
    
    <div className="relative w-full max-w-7xl mx-auto py-8" >
                          <div className="my-8  max-w-2xl mx-auto text-center">
                        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">2025 SPEAKERS</p>
                    </div>
      {/* External Arrows */}
      <button
        onClick={() => sliderRef.current?.slickPrev()}
        className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-green-600 text-white rounded-full p-3 z-10 hover:bg-green-700 focus:outline-none"
        aria-label="Previous Slide"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => sliderRef.current?.slickNext()}
        className="absolute -right-8 top-1/2 transform -translate-y-1/2 bg-green-600 text-white rounded-full p-3 z-10 hover:bg-green-700 focus:outline-none"
        aria-label="Next Slide"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="px-2 cursor-pointer"
            onClick={() => setSelectedSpeaker(speaker)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setSelectedSpeaker(speaker);
              }
            }}
          >
            <div className="flex flex-col w-72 bg-white rounded-lg overflow-hidden shadow-md h-[450px]">
              {/* Image */}
              <div className="relative flex-shrink-0 h-1/2">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Logo overlay */}
                <div className="absolute -bottom-5 right-4 bg-white rounded-lg shadow p-2 flex items-center justify-center">
                  <img
                    src={speaker.logo}
                    alt="Logo"
                    className="w-16 h-16 object-contain"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Info */}
<div className="flex flex-col justify-start flex-grow bg-[#4D7C0F] p-4">
  <h3 className="mt-4 text-lg font-bold text-white">{speaker.name}</h3>
  <p className="text-white">
    {speaker.name === "Owen Hewlett" ? (
      <>
        Chief Technical Officer, <strong>Gold Standard</strong>; Technical Council Member, <strong>SBTi</strong>
      </>
    ) : (
      speaker.designation
    )}
  </p>
  <p className="text-lg font-bold text-white">{speaker.organization}</p>
</div>

            </div>
          </div>
        ))}
      </Slider>

{/* Modal */}
{selectedSpeaker && (
  <div
    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
    onClick={handleOverlayClick}
    aria-modal="true"
    role="dialog"
    aria-labelledby="modal-title"
    aria-describedby="modal-description"
  >
    <div className="bg-white rounded-lg max-w-3xl w-full p-6 relative shadow-lg max-h-[90vh] overflow-y-auto flex flex-col items-center text-center">
      <button
        onClick={() => setSelectedSpeaker(null)}
        className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 focus:outline-none"
        aria-label="Close modal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Speaker Image */}
      <img
        src={selectedSpeaker.image}
        alt={selectedSpeaker.name}
        className="w-80 h-80 object-cover rounded-md mb-4 mx-auto"
        loading="lazy"
      />

      {/* Logo below the image */}
      <div className="flex justify-center mb-6">
        <img
          src={selectedSpeaker.logo}
          alt="Logo"
          className="h-20 object-contain"
          loading="lazy"
        />
      </div>

      {/* Speaker info */}
      <h2 id="modal-title" className="text-3xl font-bold mb-2">{selectedSpeaker.name}</h2>
<p id="modal-description" className="mb-2 text-gray-700 font-semibold">
  {selectedSpeaker.name === "Owen Hewlett" ? (
    <>
      Chief Technical Officer, Gold Standard; Technical Council Member, SBTi
    </>
  ) : (
    selectedSpeaker.designation
  )}
</p>
      {selectedSpeaker.organization && (
        <p className="text-gray-600 italic">{selectedSpeaker.organization}</p>
      )}
      {selectedSpeaker.description && (
        <p className="text-gray-600 italic">{selectedSpeaker.description}</p>
      )}
    </div>
  </div>
)}


    </div>
  );
}
