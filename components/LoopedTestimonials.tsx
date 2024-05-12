"use client"

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image'

type Testimonial = {
  text: string,
}

const testimonials = [
  {
    text: 'It’s been a critically important event. I’ve learned more about coffee than I’ve ever thought I would have learned, but I also learned about many of the innovations and the work going on to ensure that in years to come, that we will still have coffee, it would still be affordable and available. I think that the coffee industry has a lot to teach all the other sectors of the economy that have gone through the same process.',
  },
  {
    text: 'This is a great event, and I also found a good mix between the educational purpose and the business opportunities.'
  },
  {
    text: 'I am here to present the farmers, and this event is so crucial because of the climate change challenges. We are here to discuss with industry trailblazers, customers, producers, consumers, wonderful event, and a lot of engagements, a lot of ideas, innovations, so much to have to take from this event. I want to congratulate the World Coffee Alliance and they should carry on because they are able to connect us and give us a lot of insights, so that we can be more prepared and more awareness to the farmers, thank you to the team.'
  },
  {
    text: 'It’s been great to be here at World Coffee Summit, very exciting event, enabling me to talk to different stakeholders and individuals from different organisations, getting their insights. I was able to get more information to help with EUDR deforestation in Africa. I would say WCA should develop and carry on and I hope to attend this event again hopefully soon.'
  },
  {
    text: 'It’s been an absolutely amazing, informative, inspiring and challenging summit, so many heavyweights stakeholders present, the biggest takeaway from me has been to think about innovators way to motivate the producers for them to have a little bit more leverage and bargaining power so that sustainability becomes a unique selling point as opposed to a default exercise.'
  },
];

const Testimonials = () => {
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

      const intervalId = setInterval(moveSlider, 15); // Move slider every 15 milliseconds

      return () => {
        clearInterval(intervalId); // Clean up the interval on component unmount
      };
    }
  }, [tempTestimonials, currentIndex]);

  return (
    <div className='w-full bg-gray-100 py-24'>
      <div className="relative overflow-hidden max-w-7xl flex mx-auto h-[400px]">
        <div ref={sliderRef} className="flex absolute top-0 left-0">
          {tempTestimonials.map((testimonial, index) => (
            <div key={index} className="w-[500px] px-2 ">
              <div className="testimonial-item bg-white shadow rounded hover:shadow-lg">
                <div className='p-8'>
                  <p className="italic">{testimonial.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
};

export default Testimonials;
