"use client";

import Slider from "react-slick";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WCIS_IN_ACTION_IMAGE_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8];

const WCIS_IN_ACTION_IMAGES = WCIS_IN_ACTION_IMAGE_NUMBERS.map((number) => ({
  src: `/images/wcis-in-action/${number}.jpg`,
  alt: `World Coffee Innovation Summit in action — photo ${number}`,
}));

const GREEN_BAR = "rgb(38 72 51)";

function NextArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-lime-700 p-2.5 text-white shadow-md transition-colors hover:bg-lime-800 sm:right-5 sm:p-3"
      onClick={onClick}
      aria-label="Next photos"
    >
      <ArrowRightIcon className="h-4 w-4 sm:h-5 sm:w-5" />
    </button>
  );
}

function PrevArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-lime-700 p-2.5 text-white shadow-md transition-colors hover:bg-lime-800 sm:left-5 sm:p-3"
      onClick={onClick}
      aria-label="Previous photos"
    >
      <ArrowLeftIcon className="h-4 w-4 sm:h-5 sm:w-5" />
    </button>
  );
}

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3.2,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  swipe: true,
  draggable: true,
  touchMove: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2.2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1.2,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function WcisInAction() {
  return (
    <div className="w-full bg-white py-12 sm:py-16">
      <h2 className="px-4 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        WCIS IN ACTION
      </h2>

      <div className="wcis-in-action relative mt-8 w-full">
        <div className="h-6 sm:h-8 md:h-10" style={{ backgroundColor: GREEN_BAR }} />

        <Slider {...sliderSettings} className="wcis-in-action-slider">
          {WCIS_IN_ACTION_IMAGES.map((image) => (
            <div key={image.src} className="wcis-in-action-slide">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.src}
                alt={image.alt}
                className="block h-[220px] w-full object-cover object-center sm:h-[300px] md:h-[360px] lg:h-[420px]"
              />
            </div>
          ))}
        </Slider>

        <div className="h-6 sm:h-8 md:h-10" style={{ backgroundColor: GREEN_BAR }} />
      </div>
    </div>
  );
}
