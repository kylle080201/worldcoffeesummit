import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Venue = () => {
    return (
        <>
            <div className='flex py-24 lg:flex-row md:flex-col sm:flex-col md:items-center'>
                <div className='w-1/2 lg:px-16 md:px-8 sm:px-4'>
                    <Carousel
                        autoPlay={true}
                        infiniteLoop={true}
                        interval={3000}
                        showIndicators={false}
                        showStatus={false}
                        stopOnHover={true}
                        emulateTouch={true}
                        showArrows={false}
                    >
                        <div>
                            <img src="https://worldcoffeealliance.com/wp-content/uploads/2022/11/Courthouse-front_cropped.jpg" />
                        </div>
                        <div>
                            <img src="https://worldcoffeealliance.com/wp-content/uploads/2022/11/PATCHC-SP2__02_cropped.jpg" />
                        </div>
                        <div>
                            <img src="https://worldcoffeealliance.com/wp-content/uploads/2022/11/Courthouse-Hotel-Lobby_cropped.jpg" />
                        </div>
                        <div>
                            <img src="https://worldcoffeealliance.com/wp-content/uploads/2022/11/Silk-Restaurant-@-Courthouse-Hotel-Soho_cropped.jpg" />
                        </div>
                        <div>
                            <img src="https://worldcoffeealliance.com/wp-content/uploads/2022/11/RAU_7291_cropped.jpg" />
                        </div>
                        <div>
                            <img src="https://worldcoffeealliance.com/wp-content/uploads/2022/11/Courthouse-Shoreditch-restaurant-02a-1-1024x683_cropped.jpg" />
                        </div>
                        <div>
                            <img src="https://worldcoffeealliance.com/wp-content/uploads/2022/11/Courthouse-Hotel-London-web-1-1-1_cropped.jpg" />
                        </div>
                        <div>
                            <img src="https://worldcoffeealliance.com/wp-content/uploads/2022/11/courthouse-cinema_cropped.jpg" />
                        </div>
                        <div>
                            <img src="https://worldcoffeealliance.com/wp-content/uploads/2022/11/20220622_163535_cropped.jpg" />
                        </div>
                    </Carousel>
                </div>
                <div className='w-1/2 px-8 mlg:text-center'>
                    <h2 className="mb-6 font-bold text-gray-900 sm:text-2xl lg:text-5xl">
                        THE VENUE - THE COURTHOUSE HOTEL
                    </h2>
                    <h4 className="text-gray-600 sm:text-sm lg:text-xl">
                        The Courthouse Hotel is located in the old Grade II listed Marlborough Street Magistrates Court
                        building, which was the second-oldest magistrates court in the UK, dating back to the 1800s.The
                        building has a turbulent history from its time as the Marlborough Street Magistrates Court, which set
                        the scene for many famous cases over the years, involving figures such as John Lennon, Oscar Wilde,
                        Johnny Rotten, Mick Jagger and Keith Richards. In 1835 Charles Dickens worked as a reporter in the
                        building for the Morning Chronicle, and Louis Napoleon appeared in court as witness in a fraud case
                        between attempts to establish a second empire in France in 1847.
                    </h4>
                    <h4 className="mt-4 text-gray-600 sm:text-sm lg:text-xl mlg:hidden">
                        In 1895 Oscar Wilde took the Marquess of Queensbury to court on a criminal libel charge. The
                        current building was designed between 1912-1913 by the Surveyor to the Metropolitan Police, John
                        Dixon Butler. In 1963 Christine Keeler was taken to court over sex allegations which led to the
                        Profumo scandal becoming public. In 1966 Bob Monkhouse faced a charge of conspiracy to defraud
                        film distribution companies, and in 1967 former television presenter Katie Boyle gave evidence
                        against a man facing careless driving charges after an accident.
                    </h4>
                </div>
            </div>

        </>
    );
};

export default Venue