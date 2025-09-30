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
      name: 'Tim Scharrer',
      designation: 'COO and Regional Director Europe and North America',
      organization: 'Volcafe',
      image: 'https://worldcoffeealliance.com/wp-content/uploads/2024/07/Tim_Scharrer_COO_RD_1600x1200.jpg',
      logo: "https://worldcoffeealliance.com/wp-content/uploads/2024/05/logo@2x-1.png",
      description: `
      Appointed Chief Operating Officer and member of the Senior Leadership Team of Volcafe in 2023, Tim assumes global oversight of Volcafe’s Sustainability and Supply Chain functions. In his capacity as Regional Director Europe and North America, Tim leads our destination businesses in those regions. 
      Tim brings over 30 years of experience in green coffee trading and operations management, from both coffee merchants and the roasting industry. Tim started his career with an apprenticeship as a wholesale and international trade specialist. 
      He went on to work in various coffee producing countries, including eight years at Volcafe in Colombia (Carcafe), and in the coffee trade in a variety of roles and markets. Prior to re-joining Volcafe, Tim was the Managing Director of SCTC (Starbucks Coffee Trading Company), where he worked for over 15 years. 
      `
    },
    {
      name: 'Mario Abreu',
      designation: 'Group Vice President Sustainability',
      organization: 'Ferrero',
      image: 'https://worldcoffeealliance.com/wp-content/uploads/2025/06/Mario-Abreu.jpg',
      logo: "https://worldcoffeealliance.com/wp-content/uploads/2025/06/Ferrero-logo.png",
      description: `Mario Abreu has been the Ferrero Group Vice President Sustainability since April 2020, based in Luxembourg. 
      That role entails securing sustainability is fully embedded in the Group's long-term business strategy. 
      Prior to Ferrero Mario worked for over 20 years in sustainability for Tetra Pak, 
      the last 5 of them as their Global VP Sustainability based in Lund, Sweden. 
      Throughout his time in Tetra Pak he led teams of up to 100 people globally, 
      developing industry-leading programmes for collection and recycling of beverage cartons. 
      Earlier Mario worked as a technical and commercial director for paper manufacturing and recycling businesses. In addition, he has served on several boards (FSC International, RSPO, High Conservation Value Resource Network, Proforest Initiative, and ACE Beverage Cartons) and technical advisory groups (Science Based Targets initiative). Mario is a Mechanical Engineer, with a Post-Grad Diploma in Environmental Decision Making, having done sustainability and business trainings at CISL (UK), IMD (CH), Ashridge (UK), the Open University (UK), and Fundaçao Getulio Vargas (BR).`
 
    },
    {
      name: 'Piet van Asten',
      designation: 'Head of Sustainable Production Systems',
      organization: 'Olam Food Ingredients (ofi)',
      image: 'https://worldcoffeealliance.com/wp-content/uploads/2024/08/piet-van-asten.jpg',
      logo: "https://worldcoffeealliance.com/wp-content/uploads/2024/08/image00111.png",
      description: `
      Transforming agriculture to (re-)build livelihoods and nature requires knowledge, resources and motivation from farmers. Piet is driving the Regenerative Agriculture agenda across ofi through co-creation and co-investment from farmers to customers. He joined Olam in 2017 to co-create, adapt and apply technologies, approaches and services that improve the productivity, profitability, and carbon footprint of ofi’s coffee estates as well as its (smallholder) farmer network. He holds a PhD from Wageningen with a strong focus on agronomy, farming systems, livelihoods and rural innovation. Prior to his work at ofi, he worked for 20 years as a CGIAR scientist on agricultural systems, based out of Africa.
      `
    },
    {
      name: 'Carolina Castañeda ',
      designation: 'Director - Europe ',
      organization: 'National Federation of Coffee Growers of Colombia (FNC)',
      image: 'https://softtechs360.com/coffee/wp-content/uploads/2025/09/Carolina-Castaneda-1.jpeg',
      logo: "https://softtechs360.com/coffee/wp-content/uploads/2025/07/Logos-FNC_Cereza.png",
      description: `Carolina Castañeda has served as Director for Europe at the Federación Nacional de Cafeteros de Colombia B.V.since 2016. She leads a team focused on business development across various coffee segments (green, roasted and freeze dried), with regional coverage spanning Europe, the Middle East, and Africa. With 19 years of experience across different subsidiaries of the FNC, Carolina brings deep industry expertise and a strong commitment to sustainable coffee trade and long term commercial relationships. Before joining the FNC, she worked in finance. She holds Bachelor of Science degrees in both Physics and Economics, as well as a Master’s in Economics from Los Andes University in Colombia. In 2012, she earned a Master’s in Mathematics in Finance from New York University.
Carolina advocates for fair negotiation terms in the coffee sector, seeing them as a fundamental pillar of long-term sustainability.
      `
    },
    {
      name: 'Cleiton Vargas',
      designation: 'SVP Innovation Americas',
      organization: 'Yara International',
      image: 'https://softtechs360.com/coffee/wp-content/uploads/2025/07/Cleiton-Vargas.jpg',
      logo: "https://softtechs360.com/coffee/wp-content/uploads/2025/07/Knowledge_grows_for_A4.png",
      description: `Cleiton Vargas (born in 1969) has been with Yara for over 30 years and recently took on the role of Senior Vice President of Innovation for the Americas. Throughout his career at the company, he has held various positions across different business units, including Commercial, Operations, and Logistics. Cleiton holds a degree in Agronomic Engineering from the Federal University of Rio Grande do Sul and an MBA in Marketing from the Escola Superior de Propaganda e Marketing`
    },


    {
      name: 'Toby Behrmann',
      designation: 'Head of London Market & Public Private Partnerships',
      organization: 'AXA Climate',
      image: 'https://softtechs360.com/coffee/wp-content/uploads/2025/09/Toby-Behrmann.jpeg',
      logo: "https://worldcoffeealliance.com/wp-content/uploads/2025/06/AXA_Climate_Blue_Horizontal_RVB.png",
      description: ` Toby is currently Head of London Market and Public Private Partnerships at AXA Climate, the specialized entity within the AXA Group, created to address the growing need for climate adaptation across both private and public sectors.  He focuses on developing innovative financial solutions to address the growing impacts of climate change. Starting his career at international insurer AIG, Toby has spent over 20 years structuring and deploying global financial mechanisms across retail, commercial, and public sector channels, with a particular emphasis on resilience and adaptation strategies. With extensive experience in re/insurance, derivatives, and ILS, Toby is a passionate advocate for alternative risk transfer as a vital tool for bridging gaps in traditional insurance coverage and enhancing climate resilience across sectors     `
    }
  
];

export default function Advisoryboard() {
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
    
    
    <div className="relative w-full max-w-7xl mx-auto my-8" >
                          <div className="max-w-2xl mx-auto text-center ">
                        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl pb-20">ADVISORY BOARD</p>
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
<div className="flex flex-col w-72 bg-white rounded-lg overflow-hidden shadow-md h-[470px] relative">
  {/* Image Section */}
  <div className="h-[300px] relative">
    <img
      src={speaker.image}
      alt={speaker.name}
      className="w-full h-full object-cover object-top"
      loading="lazy"
    />

    {/* Floating Logo */}
    <div className="absolute bottom-0 right-4 translate-y-1/2 z-20 bg-white rounded-xl shadow p-4">
      <img
        src={speaker.logo}
        alt="Logo"
        className="w-12 h-12 object-contain"
        loading="lazy"
      />
    </div>
  </div>

  {/* Info Section */}
  <div className="flex flex-col justify-start flex-grow bg-[#4D7C0F] px-4 pt-12 pb-4 text-white">
    <h3 className="text-lg font-semibold leading-8 tracking-tight text-white md:text-xl">{speaker.name}</h3>
    <p className="text-sm">{speaker.designation}</p>
    <p className="text-sm font-semibold">{speaker.organization}</p>
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
