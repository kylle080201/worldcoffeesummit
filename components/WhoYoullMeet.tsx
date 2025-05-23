import React from 'react';
import Slider from 'react-slick';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logos = [
  { name: 'European Commission', url: 'https://worldcoffeealliance.com/wp-content/uploads/2020/12/LOGO-CE_Vertical_EN_quadri_HR.png', height: 150, width: 150 },
  { name: 'Sustainable Markets Initiative', url: 'https://worldcoffeealliance.com/wp-content/uploads/2024/08/logo-sustainable-markets-seal-version.jpg', height: 150, width: 150 },
  { name: 'Starbucks', url: 'https://worldcoffeealliance.com/wp-content/uploads/2024/09/SbuxSiren_TM_4C.png', height: 80, width: 80 },
  { name: 'JDE Peet’s', url: 'https://worldcoffeealliance.com/wp-content/uploads/2024/07/Logo.png', height: 90, width: 90 },
  { name: 'Tchibo GmbH', url: 'https://worldcoffeealliance.com/wp-content/uploads/2024/05/Tchibo_Logo-hor_Gold-dark_sRGB-scaled.jpg', height: 150, width: 150 },
  { name: 'Volcafe', url: 'https://worldcoffeealliance.com/wp-content/uploads/2024/05/logo@2x-1.png', height: 160, width: 160 },
  { name: 'Olam Food Ingredients', url: 'https://worldcoffeealliance.com/wp-content/uploads/2024/08/image00111.png', height: 80, width: 80 },
  { name: 'European Space Agency', url: 'https://worldcoffeealliance.com/wp-content/uploads/2024/06/ESA_logo_2020_Deep-e1719391553788.png', height: 150, width: 150 },
  { name: 'German Federal Ministry for Economic Cooperation and Development (BMZ)', url: 'https://worldcoffeealliance.com/wp-content/uploads/2024/08/bmz-1.png', height: 170, width: 170 },
  { name: 'House of Lords', url: 'https://worldcoffeealliance.com/wp-content/uploads/2024/05/House_of_Lords_logo_2020.svg.png', height: 150, width: 150 },
  { name: 'Coat of Arms', url: 'https://worldcoffeealliance.com/wp-content/uploads/2024/07/Coat_of_arms_of_Rwanda.svg', height: 100, width: 100 },
  { name: 'World Coffee Research', url: 'https://worldcoffeealliance.com/wp-content/uploads/2024/07/WCR-primary-logo.png', height: 160, width: 160 },
  { name: 'Salesforce', url: 'https://worldcoffeealliance.com/wp-content/uploads/2024/08/salesforce-with-type-logo.png', height: 150, width: 150 },
  { name: 'The World Bank', url: 'https://worldcoffeealliance.com/wp-content/uploads/2024/06/THE-WORLD-BANK.png', height: 150, width: 150 },
  { name: 'Gold Standard', url: 'https://worldcoffeealliance.com/wp-content/uploads/2024/08/GS_Logo_Secondary.png', height: 150, width: 150 },
  { name: 'British Coffee Association', url: 'https://worldcoffeealliance.com/wp-content/uploads/2023/06/BCA_PrimaryLogo_Large-scaled.jpg', height: 150, width: 150 },
  { name: 'Cȏte d’Ivoire Ghana Cocoa Initiative (CIGCI)', url: 'https://worldcoffeealliance.com/wp-content/uploads/2024/07/cote-divoire-ghana-cocoa-initiative.png', height: 150, width: 150 },
  { name: 'CDP', url: 'https://worldcoffeealliance.com/wp-content/uploads/2024/07/pngegg.png', height: 150, width: 150 },
  { name: 'National Agricultural Export Development Board', url: 'https://worldcoffeealliance.com/wp-content/uploads/2024/08/NAEB-logo.jpg', height: 150, width: 150 },
  { name: 'International Fund for Agriculture Development', url: 'https://worldcoffeealliance.com/wp-content/uploads/2024/08/E_g_web.png', height: 150, width: 150 },
  { name: 'International Chamber of Commerce', url: 'https://worldcoffeealliance.com/wp-content/uploads/2024/05/ICC_United_Kingdom_BLACK_RGB_300dpi.png', height: 130, width: 130 },
  { name: 'A&O Shearman', url: 'https://worldcoffeealliance.com/wp-content/uploads/2024/08/AOShearman_Wordmark_Progress-Green_RGB.png', height: 150, width: 150 },
  { name: 'B Lab Europe', url: 'https://worldcoffeealliance.com/wp-content/uploads/2024/07/B-Lab-Europe-Country-Partners-Logos-1.webp', height: 120, width: 120 },
  { name: 'GSMA', url: 'https://worldcoffeealliance.com/wp-content/uploads/2024/05/image0011.png', height: 150, width: 150 },
  { name: 'ACDI/VOCA', url: 'https://worldcoffeealliance.com/wp-content/uploads/2024/05/ACDIVOCA-logo-gray-tag.png', height: 150, width: 150 },
  { name: 'IBM Consulting', url: 'https://worldcoffeealliance.com/wp-content/uploads/2024/07/IBM_logo®_pos_blue60_RGB.png', height: 150, width: 150 },
  { name: 'Novartis', url: 'https://worldcoffeealliance.com/wp-content/uploads/2024/07/novartis.png', height: 150, width: 150 },
  { name: 'European Bank for Reconstruction and Development', url: 'https://worldcoffeealliance.com/wp-content/uploads/2024/06/Ebrd-logo-regular-blue-english-e1719190097501.png', height: 150, width: 150 },
  { name: 'United Nations / UNDP', url: 'https://worldcoffeealliance.com/wp-content/uploads/2024/07/UNDP_Logo_Blue.png', height: 50, width: 50 },
  { name: 'Fairtrade International', url: 'https://worldcoffeealliance.com/wp-content/uploads/2020/08/FBM_INT_VERT_RGB_POS.png', height: 70, width: 70 },
  { name: 'Digital Container Shipping Association', url: 'https://worldcoffeealliance.com/wp-content/uploads/2024/07/DCSA_logo-1.png', height: 150, width: 150 },
];

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className={`slick-arrow md:visible invisible absolute top-1/2 transform -translate-y-1/2 -right-12 bg-lime-700 text-white p-2 rounded-full z-10`}
      onClick={onClick}
    >
      <ArrowRightIcon width={17} />
    </button>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className={`slick-arrow md:visible invisible absolute top-1/2 transform -translate-y-1/2 -left-12 bg-lime-700 text-white p-2 rounded-full z-10`}
      onClick={onClick}
    >
      <ArrowLeftIcon width={17} />
    </button>
  );
};

const WhoYoullMeet: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          swipe: true
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-20 overflow-hidden bg-gray-100">
      <div className="max-w-7xl my-6 mx-auto">
        <div className='flex w-full text-center justify-center'>
          <h2 className="text-4xl font-bold tracking-tight">WHO YOU&apos;LL MEET</h2>
        </div>
        <Slider {...settings} className="h-max mt-12" >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="p-2"
            >
              <div className="p-2 mx-2 bg-white flex items-center w-48 h-36 justify-center shadow rounded-md">
                <Image
                  src={logo.url}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="my-auto mx-auto"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    
  );
};

export default WhoYoullMeet;
