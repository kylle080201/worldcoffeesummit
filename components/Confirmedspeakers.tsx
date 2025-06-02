import React, { useRef } from 'react';
import Slider from 'react-slick';

interface Speaker {
  name: string;
  designation: string;
  image: string;
}

const speakers: Speaker[] = [
  {
    name: 'Toby Behrmann',
    designation: 'Head of London Market & Public Private Partnerships, AXA Climate',
    image: 'https://softtechs360.com/worldcoffee/wp-content/uploads/2025/06/1669983783165-1.jpg'
  },
  {
    name: 'James Chamberlayne',
    designation: 'Director, Sustainable Finance Program, CDP',
    image: 'https://softtechs360.com/worldcoffee/wp-content/uploads/2025/06/James-1.jpg'
  },
  {
    name: 'Nick Appleyard',
    designation: 'Head of Applications and Solutions, European Space Agency (ESA)',
    image: 'https://softtechs360.com/worldcoffee/wp-content/uploads/2025/06/1549301011565-1.jpg'
  },
  {
    name: 'Dr Leonard Mizzi',
    designation: 'Head of Unity, Sustainable Agri-Food Systems and Fisheries, Directorate-General for International Partnerships (DG INTPA), European Commission (EU)',
    image: 'https://softtechs360.com/worldcoffee/wp-content/uploads/2025/06/photo-LM-high-reso.jpg'
  },
  {
    name: 'Mario Abreu',
    designation: 'Group Vice President Sustainability, Ferrero',
    image: 'https://softtechs360.com/worldcoffee/wp-content/uploads/2025/06/MarioAbreu_Pic.jpg'
  },
  {
    name: 'The Rt. Hon John Gummer, Lord Deben',
    designation: 'Former Chairman, UK Climate Change Committee (The CCC) (House Of Lords)',
    image: 'https://softtechs360.com/worldcoffee/wp-content/uploads/2025/06/1549301011565-1.jpg'
  },
  {
    name: 'Stefan Dierks',
    designation: 'Director Sustainability Strategy, Melitta Group',
    image: 'https://softtechs360.com/worldcoffee/wp-content/uploads/2025/06/Dierks.jpg'
  },
  {
    name: 'Claude Bizimana',
    designation: 'Chief Executive Officer (CEO), National Agricultural Export Development Board (NAEB), Rwanda',
    image: 'https://softtechs360.com/worldcoffee/wp-content/uploads/2025/06/Claude-Bizimana.jpg'
  },
  {
    name: 'Andrea Olivar',
    designation: 'Strategy & Quality Director-Latin America, Solidaridad Network',
    image: 'https://softtechs360.com/worldcoffee/wp-content/uploads/2025/06/Andrea-Olivar.jpg'
  },
  {
    name: 'Paul Stewart',
    designation: 'Global Coffee Director, TechnoServe',
    image: 'https://softtechs360.com/worldcoffee/wp-content/uploads/2025/06/Paul-Stewart-headshot.jpg'
  },
  {
    name: 'Owen Hewlett',
    designation: 'Chief Technical Officer, Gold Standard; Technical Council Member (SBTi)',
    image: 'https://softtechs360.com/worldcoffee/wp-content/uploads/2025/06/Owen.jpg'
  },
  {
    name: 'Ashwini Sebastian ',
    designation: 'Senior Economist, The World Bank ',
    image: 'https://softtechs360.com/worldcoffee/wp-content/uploads/2025/06/Ashwini-Sebastian-upscaled.jpg'
  },
  {
    name: 'Patrick Gibson',
    designation: 'EO Senior Climate Lead, UK Space Agency',
    image: 'https://softtechs360.com/worldcoffee/wp-content/uploads/2025/06/1697446416741.jpg'
  },
];

export default function Confirmedspeakers() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto py-8">
      {/* External arrows */}
      <button
        onClick={() => sliderRef.current?.slickPrev()}
        className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-green-600 text-white rounded-full p-3 z-10 hover:bg-green-700 focus:outline-none"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => sliderRef.current?.slickNext()}
        className="absolute -right-8 top-1/2 transform -translate-y-1/2 bg-green-600 text-white rounded-full p-3 z-10 hover:bg-green-700 focus:outline-none"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Carousel */}
      <Slider ref={sliderRef} {...settings}>
        {speakers.map((speaker, index) => (
          <div key={index} className="px-2">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-4">
                <h3 className="text-lg font-bold">{speaker.name}</h3>
                <p className="text-sm">{speaker.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
