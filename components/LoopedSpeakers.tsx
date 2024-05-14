"use client"

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image'

type Testimonial = {
  title: string,
  author: string,
  company: string
  imageUrl?: string
}

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

const SpeakerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Create a temporary array by concatenating the original testimonials array multiple times
  const tempTestimonials: Testimonial[] = [];
  const numIterations = 5; // Number of times to repeat the testimonials
  for (let i = 0; i < numIterations; i++) {
    tempTestimonials.push(...testimonials);
  }

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      let position = 0;
      const sliderWidth = slider.offsetWidth;
      const numTestimonials = tempTestimonials.length;

      slider.style.transition = 'none'; // Disable transition initially

      const moveSlider = () => {
        position -= 1; // Decrement position to move right
        if (Math.abs(position) >= sliderWidth) {
          position += sliderWidth; // Reset position when reaching the end
          setCurrentIndex((currentIndex + 1) % numTestimonials); // Move to the next testimonial
        }
        slider.style.transform = `translateX(${position}px)`; // Apply transformation
      };

      const intervalId = setInterval(moveSlider, 7); // Move slider every 10 milliseconds

      return () => {
        clearInterval(intervalId); // Clean up the interval on component unmount
      };
    }
  }, [tempTestimonials, currentIndex]);

  return (
    <div id='speakers' className='w-full bg-gray-100 py-24'>
      <div className='flex w-full justify-center'>
        <h2 className="text-4xl font-bold tracking-tight">2023 SPEAKERS</h2>
      </div>
      <div className="relative mt-12 overflow-hidden max-w-7xl flex mx-auto h-[450px]">
        <div ref={sliderRef} className="flex absolute top-0 left-0">
          {tempTestimonials.map((testimonial, index) => (
            <div key={index} className="w-[300px] px-2 ">
              <div className="testimonial-item bg-white shadow rounded flex flex-col hover:shadow-lg">
                <div>
                  <Image className="w-full" src={testimonial?.imageUrl as string} alt={testimonial.author} width={160} height={160} />
                </div>
                <div className='p-4'>
                  <p className="text-gray-800 font-medium">{testimonial.author}</p>
                  <p className="text-gray-800 text-sm italic font-medium">{testimonial.company}</p>
                  <p className="text-gray-600 text-sm italic">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeakerSlider;
