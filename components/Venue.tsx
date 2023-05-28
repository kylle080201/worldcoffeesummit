"use client"

import Link from "next/link";


const Venue = () => {
    return (
        <>
            <div className="px-12 py-20 sm:px-20" id="venue">
                <div className="px-4 sm:w-3/4">
                    <div>
                        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">THE VENUE</p>
                        <p className="mt-6 leading-8 text-gray-600 text-md sm:text-lg">
                            The QEII Centre is the largest dedicated conference and exhibition space in central London. Our venue offers world-class facilities for high-profile conferences, conventions, exhibitions and corporate events with a capacity of up to 2,500 and hosting over 400 national and international events a year.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col justify-center p-4 mt-12 md:flex-row'>
                    <div className='px-6 drop-shadow-md md:w-3/4 hover:drop-shadow-lg'>
                        <Link href={"https://www.google.com/maps/place/Queen+Elizabeth+II+Centre/@51.5005231,-0.1292871,19z/data=!4m6!3m5!1s0x487604c4cb112d93:0x39efdcc690b64ca3!8m2!3d51.5005006!4d-0.1290725!16zL20vMDgwbDQx"} target="_blank">
                            <img alt="Venue map" src="https://worldcoffeealliance.com/wp-content/uploads/2023/05/QEII-GMAPS.png" className="rounded-lg" />
                        </Link>
                    </div>
                    <div className='px-6 pt-4 md:pt-0 md:w-2/4 drop-shadow-sm'>
                        <img alt="Venue image" src="https://worldcoffeealliance.com/wp-content/uploads/2023/05/DSC09004.jpg" className="rounded-lg" />
                        <p className="text-sm text-gray-600">src: https://structurae.net/en/media/192770-queen-elizabeth-ii-conference-centre</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Venue