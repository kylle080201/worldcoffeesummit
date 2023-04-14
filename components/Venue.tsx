import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Venue = () => {
    return (
        <>
            <div className='flex py-24 mlg:flex-row mmd:flex-col msm:flex-col '>
                <div className='justify-items-center md:w-1/2 sm:px-12'>
                    <Carousel
                        // autoPlay={true}
                        // infiniteLoop={true}
                        // interval={3000}
                        showIndicators={true}
                        showStatus={false}
                        stopOnHover={true}
                        emulateTouch={true}
                        showArrows={true}
                    >
                        <div>
                            <img src="https://worldcoffeealliance.com/wp-content/uploads/2022/11/courthouse-hotel-exterior-1.jpg" />
                        </div>
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
                            <img src="https://worldcoffeealliance.com/wp-content/uploads/2022/11/Courthouse-Hotel-London-London-Undefined-Bar-at-Courthouse-Hotel-London_cropped.jpg" />
                        </div>
                        <div>
                            <img src="https://worldcoffeealliance.com/wp-content/uploads/2022/11/Silk-Restaurant-@-Courthouse-Hotel-Soho_cropped.jpg" />
                        </div>
                        <div>
                            <img src="https://worldcoffeealliance.com/wp-content/uploads/2022/11/courthouse-hotel-bar.jpg" />
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
                <div className='px-8 lg:w-1/2 mlg:text-center'>
                    <h2 className="mb-6 font-bold text-gray-900 sm:text-2xl lg:text-5xl">
                        THE <span className='text-lime-700'>VENUE</span> - THE COURTHOUSE HOTEL
                    </h2>
                    <h4 className="text-gray-600 sm:text-sm lg:text-xl">
                        The Courthouse Hotel is located in the old Grade II listed Marlborough Street Magistrates Court
                        building, which was the second-oldest magistrates court in the UK, dating back to the 1800s.The
                        building has a turbulent history from its time as the Marlborough Street Magistrates Court, which set
                        the scene for many famous cases over the years, involving figures such
                        as <a href='https://en.wikipedia.org/wiki/John_Lennon' target={"_blank"} className='font-semibold text-yellow-900 underline'>John Lennon</a>, <a href='https://en.wikipedia.org/wiki/Oscar_Wilde' target={"_blank"} className='font-semibold text-yellow-900 underline'>Oscar Wilde</a>, <a href='https://en.wikipedia.org/wiki/John_Lydon' target={"_blank"} className='font-semibold text-yellow-900 underline'>Johnny Rotten</a>, <a href='https://en.wikipedia.org/wiki/Mick_Jagger' target={"_blank"} className='font-semibold text-yellow-900 underline'>Mick Jagger</a> and <a href='https://en.wikipedia.org/wiki/Keith_Richards' target={"_blank"} className='font-semibold text-yellow-900 underline'>Keith Richards</a>. In
                        1835 <a href='https://en.wikipedia.org/wiki/Charles_Dickens' target={"_blank"} className='font-semibold text-yellow-900 underline'>Charles Dickens</a> worked as a reporter in the
                        building for the <a href='https://en.wikipedia.org/wiki/The_Morning_Chronicle' target={"_blank"} className='font-semibold text-yellow-900 underline'>Morning Chronicle</a>, and <a href='https://en.wikipedia.org/wiki/Napoleon_III' target={"_blank"} className='font-semibold text-yellow-900 underline'>Louis Napoleon</a> appeared in court as witness in a fraud case
                        between attempts to establish a second empire in France in 1847.
                    </h4>
                    <h4 className="mt-4 text-gray-600 sm:text-sm lg:text-xl">
                        In 1895 Oscar Wilde took the <a href='https://en.wikipedia.org/wiki/Marquess_of_Queensberry' target={"_blank"} className='font-semibold text-yellow-900 underline'>Marquess of Queensbury</a> to court on a criminal libel charge. The
                        current building was designed between 1912-1913 by the Surveyor to the <a href='https://en.wikipedia.org/wiki/Metropolitan_Police' target={"_blank"} className='font-semibold text-yellow-900 underline'>Metropolitan Police</a>, <a href='https://en.wikipedia.org/wiki/John_Dixon_Butler' target={"_blank"} className='font-semibold text-yellow-900 underline'>John Dixon Butler</a>.
                        In 1963 <a href='https://en.wikipedia.org/wiki/Christine_Keeler' target={"_blank"} className='font-semibold text-yellow-900 underline'>Christine Keeler</a> was taken to court over sex allegations which led to the <a href='https://en.wikipedia.org/wiki/Profumo_affair' target={"_blank"} className='font-semibold text-yellow-900 underline'>Profumo scandal</a> becoming
                        public. In 1966 <a href='https://en.wikipedia.org/wiki/Bob_Monkhouse' target={"_blank"} className='font-semibold text-yellow-900 underline'>Bob Monkhouse</a> faced a charge of conspiracy to defraud
                        film distribution companies, and in 1967 former television presenter <a href='https://en.wikipedia.org/wiki/Katie_Boyle' target={"_blank"} className='font-semibold text-yellow-900 underline'>Katie Boyle</a> gave evidence
                        against a man facing careless driving charges after an accident.
                    </h4>
                    <div className='flex justify-center mt-16' >
                        <a target={'_blank'} rel="noopener noreferrer" href='https://memoirsofametrogirl.com/2020/11/19/marlborough-street-magistrates-court-courthouse-hotel-soho-history/?fbclid=IwAR0WHxAcGuEFVQh94x1Wo0HHVgBbjoo1F7l8-8ErVXLLuw8AYdbIP6BY4ZA'>
                            <button
                                type="button"
                                className="px-24 py-6 mx-auto text-base font-semibold text-white border border-transparent rounded-full shadow-sm bg-lime-700 hover:bg-lime-900 focus:outline-none"
                            >
                                <span className='text-xl '>CHECK THE VENUE</span>
                            </button>
                        </a>
                    </div>
                </div>

            </div>

        </>
    );
};

export default Venue