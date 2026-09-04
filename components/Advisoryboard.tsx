"use client";

import React, { useRef, useState } from "react";
import Slider from "react-slick";
import type { StaticImageData } from "next/image";
import { speakers2026, type Speaker } from "./Speakers2026";

const advisoryBoardNames = [
  "The Rt. Hon John Gummer, The Lord Deben",
  "Tim Scharrer",
  "Piet van Asten",
  "Juliette Cody",
  "Mario Abreu",
  "Toby Behrmann",
];

const advisoryBoard = advisoryBoardNames.map((name) => {
  const speaker = speakers2026.find((entry) => entry.name === name);
  if (!speaker) {
    throw new Error(`Advisory board member not found: ${name}`);
  }
  return speaker;
});

function assetSrc(src: string | StaticImageData) {
  return typeof src === "string" ? src : src.src;
}

export default function Advisoryboard() {
  const sliderRef = useRef<Slider>(null);
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

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setSelectedSpeaker(null);
    }
  };

  return (
    <div className="relative mx-auto my-8 w-full max-w-7xl" id="advisory">
      <div className="mx-auto max-w-2xl pb-20 text-center">
        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          ADVISORY BOARD
        </p>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {advisoryBoard.map((speaker) => (
          <div
            key={speaker.name}
            className="cursor-pointer px-2"
            onClick={() => setSelectedSpeaker(speaker)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setSelectedSpeaker(speaker);
              }
            }}
          >
            <div className="relative flex h-[520px] w-72 flex-col overflow-hidden rounded-lg bg-white shadow-md">
              <div className="relative h-[300px]">
                <img
                  src={assetSrc(speaker.image)}
                  alt={speaker.name}
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />

                {speaker.logo ? (
                  <div className="absolute right-4 top-4/4 h-24 w-24 -translate-y-1/2 transform overflow-hidden rounded-md bg-white p-2 shadow-md">
                    <div className="flex h-full w-full items-center justify-center">
                      <img
                        src={assetSrc(speaker.logo)}
                        alt={`${speaker.organization} logo`}
                        height={speaker.iconHeight}
                        width={speaker.iconWidth}
                        className={`max-h-full max-w-full object-contain ${speaker.logoClassName ?? ""}`}
                        loading="lazy"
                      />
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="flex flex-grow flex-col justify-start bg-[#4D7C0F] p-6 px-4 pb-4 pt-12 text-white">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-white md:text-2xl">
                  {speaker.name}
                </h3>
                <p className="text-md font-semibold leading-7 text-white">
                  {speaker.designation}
                </p>
                {speaker.organization ? (
                  <p className="text-sm leading-7 text-white">{speaker.organization}</p>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {selectedSpeaker ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={handleOverlayClick}
          aria-modal="true"
          role="dialog"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <div className="relative flex max-h-[90vh] w-full max-w-3xl flex-col items-center overflow-y-auto rounded-lg bg-white p-6 text-center shadow-lg">
            <button
              onClick={() => setSelectedSpeaker(null)}
              className="absolute right-3 top-3 text-gray-600 hover:text-gray-900 focus:outline-none"
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <img
              src={assetSrc(selectedSpeaker.image)}
              alt={selectedSpeaker.name}
              className="mx-auto mb-4 h-80 w-80 rounded-md object-cover"
              loading="lazy"
            />

            {selectedSpeaker.logo ? (
              <div className="mb-6 flex justify-center">
                <img
                  src={assetSrc(selectedSpeaker.logo)}
                  alt={`${selectedSpeaker.organization} logo`}
                  width={160}
                  height={160}
                  className="h-20 object-contain"
                  loading="lazy"
                />
              </div>
            ) : null}

            <h2 id="modal-title" className="mb-2 text-3xl font-bold">
              {selectedSpeaker.name}
            </h2>
            <p id="modal-description" className="mb-2 font-semibold text-gray-700">
              {selectedSpeaker.designation}
            </p>
            {selectedSpeaker.organization ? (
              <p className="italic text-gray-600">{selectedSpeaker.organization}</p>
            ) : null}
            {selectedSpeaker.description ? (
              <div
                className="mt-4 text-gray-600"
                dangerouslySetInnerHTML={{ __html: selectedSpeaker.description }}
              />
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
