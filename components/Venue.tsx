"use client"

import Link from "next/link";


const Venue = () => {
    return (
        <>
            <div className='flex justify-center px-12 py-24 bg-gray-100 mlg:flex-row mmd:flex-col msm:flex-col' id="venue" >
                <div className="self-center max-w-2xl mx-auto ">
                    <div>
                        <p className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">THE VENUE</p>
                        <p className="mt-6 text-xl leading-8 text-gray-600">
                            The Courthouse Hotel is located in the old Grade II listed Marlborough Street Magistrates Court
                            building, which was the second-oldest magistrates court in the UK, dating back to the 1800s.
                        </p>
                    </div>
                </div>
                <div className='px-6 drop-shadow-md hover:drop-shadow-lg'>
                    <Link href={"https://www.google.com/maps/place/Courthouse+Hotel/@51.5143993,-0.1401305,19z/data=!4m9!3m8!1s0x487604d5482fa771:0xbec838d64b209b82!5m2!4m1!1i2!8m2!3d51.5143826!4d-0.1394573!16s%2Fm%2F09k68cb"} target="_blank">
                        <img alt="Venue image" src="https://worldcoffeealliance.com/wp-content/uploads/2023/05/COURTHOUSE-HOTEL-LONDON-MAP.png" className="rounded-lg" />
                    </Link>

                </div>
            </div>

        </>
    );
};

export default Venue