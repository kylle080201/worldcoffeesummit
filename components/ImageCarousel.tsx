import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const slideImages = [
  {
    url: 'https://worldcoffeealliance.com/wp-content/uploads/2024/05/1.jpg',
    caption: 'Slide 1'
  },
  {
    url: 'https://worldcoffeealliance.com/wp-content/uploads/2024/05/2-copy.jpg',
    caption: 'Slide 2'
  },
  {
    url: 'https://worldcoffeealliance.com/wp-content/uploads/2024/05/3.jpg',
    caption: 'Slide 3'
  },
  {
    url: 'https://worldcoffeealliance.com/wp-content/uploads/2024/05/4.jpg',
    caption: 'Slide 4'
  },
  {
    url: 'https://worldcoffeealliance.com/wp-content/uploads/2024/05/5.jpg',
    caption: 'Slide 5'
  },
  {
    url: 'https://worldcoffeealliance.com/wp-content/uploads/2024/05/6.jpg',
    caption: 'Slide 6'
  },
  {
    url: 'https://worldcoffeealliance.com/wp-content/uploads/2024/05/7-copy.jpg',
    caption: 'Slide 7'
  },
  {
    url: 'https://worldcoffeealliance.com/wp-content/uploads/2024/05/8.jpg',
    caption: 'Slide 8'
  },
  {
    url: 'https://worldcoffeealliance.com/wp-content/uploads/2024/05/9.jpg',
    caption: 'Slide 9'
  },
  {
    url: 'https://worldcoffeealliance.com/wp-content/uploads/2024/05/10.jpg',
    caption: 'Slide 10'
  },
  {
    url: 'https://worldcoffeealliance.com/wp-content/uploads/2024/05/11.jpg',
    caption: 'Slide 11'
  },
  {
    url: 'https://worldcoffeealliance.com/wp-content/uploads/2024/05/12-copy.jpg',
    caption: 'Slide 12'
  },
];

const ImageCarousel = () => {

  return (
    <div className='py-24 max-w-7xl mx-auto flex flex-col gap-12'>
      <div className='flex w-full text-center justify-center'>
        <h2 className="text-4xl font-bold tracking-tight">2023 SUMMIT HIGHLIGHTS</h2>
      </div>
      <Carousel showArrows={true} infiniteLoop interval={3000} autoPlay>
        <div>
            <img src={slideImages[0].url} alt="Slide 1" />
        </div>
        <div>
            <img src={slideImages[1].url} alt="Slide 2" />
        </div>
        <div>
            <img src={slideImages[2].url} alt="Slide 3" />
        </div>
        <div>
            <img src={slideImages[3].url} alt="Slide 4" />
        </div>
        <div>
            <img src={slideImages[4].url} alt="Slide 5" />
        </div>
        <div>
            <img src={slideImages[5].url} alt="Slide 6" />
        </div>
        <div>
            <img src={slideImages[6].url} alt="Slide 7" />
        </div>
        <div>
            <img src={slideImages[7].url} alt="Slide 8" />
        </div>
        <div>
            <img src={slideImages[8].url} alt="Slide 9" />
        </div>
        <div>
            <img src={slideImages[9].url} alt="Slide 10" />
        </div>
        <div>
            <img src={slideImages[10].url} alt="Slide 11" />
        </div>
        <div>
            <img src={slideImages[11].url} alt="Slide 12" />
        </div>
      </Carousel>
    </div>
     
  );
};

export default ImageCarousel;