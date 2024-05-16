"use client"

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel';

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

  return (
    <div className='w-full bg-gray-100 py-24 flex flex-col gap-12'>
      <div className='flex w-full justify-center'>
        <h2 className="text-4xl font-bold tracking-tight">&ldquo;WHAT OUR DELEGATES SAY&ldquo;</h2>
      </div>
      <Carousel className='max-w-5xl mx-auto' showArrows={true} showStatus={false}>
        <div className="">
          <div className="testimonial-item items-center flex bg-white shadow rounded hover:shadow-lg h-[500px]">
            <div className='p-12'>
              <p className="italic text-2xl">&ldquo;{testimonials[0].text}&ldquo;</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="testimonial-item items-center flex bg-white shadow rounded hover:shadow-lg h-[500px]">
            <div className='p-12'>
              <p className="italic text-2xl">&ldquo;{testimonials[1].text}&ldquo;</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="testimonial-item items-center flex bg-white shadow rounded hover:shadow-lg h-[500px]">
            <div className='p-12'>
              <p className="italic text-2xl">&ldquo;{testimonials[2].text}&ldquo;</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="testimonial-item items-center flex bg-white shadow rounded hover:shadow-lg h-[500px]">
            <div className='p-12'>
              <p className="italic text-2xl">&ldquo;{testimonials[3].text}&ldquo;</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="testimonial-item items-center flex bg-white shadow rounded hover:shadow-lg h-[500px]">
            <div className='p-12'>
              <p className="italic text-2xl">&ldquo;{testimonials[4].text}&ldquo;</p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonials;
