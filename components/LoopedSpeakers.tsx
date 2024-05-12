import React, { useEffect, useRef, useState } from 'react';

type Testimonial = {
  title: string,
  author: string,
  imageUrl?: string
}

const TestimonialSlider = ({ testimonials }: { testimonials: Testimonial[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      let position = 0;
      const sliderWidth = slider.offsetWidth;
      const numTestimonials = testimonials.length;

      slider.style.transition = 'none'; // Disable transition initially

      const moveSlider = () => {
        position -= 1; // Decrement position to move right
        if (Math.abs(position) >= sliderWidth) {
          position += sliderWidth; // Reset position when reaching the end
          setCurrentIndex((currentIndex + 1) % numTestimonials); // Move to the next testimonial
        }
        slider.style.transform = `translateX(${position}px)`; // Apply transformation
      };

      const intervalId = setInterval(moveSlider, 10); // Move slider every 10 milliseconds

      return () => {
        clearInterval(intervalId); // Clean up the interval on component unmount
      };
    }
  }, [testimonials, currentIndex]);

  return (
    <div className="relative w-full overflow-hidden h-[400px]">
      <div ref={sliderRef} className="flex absolute top-0 left-0">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-1/6 px-2">
            <div className="testimonial-item bg-white p-4 rounded shadow-md">
              <p className="text-gray-800">{testimonial.title}</p>
              <p className="text-gray-600 mt-2">{testimonial.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
