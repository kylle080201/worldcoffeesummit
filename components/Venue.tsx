"use client"

import Link from "next/link";


const Venue = () => {
    return (
        <>
            <div className='flex justify-center px-12 py-24 mlg:flex-row mmd:flex-col msm:flex-col' id="venue" >
                <div className="self-center max-w-2xl mx-auto ">
                    <div>
                        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">THE VENUE</p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            The QEII Centre is the largest dedicated conference and exhibition space in central London. Our venue offers world-class facilities for high-profile conferences, conventions, exhibitions and corporate events with a capacity of up to 2,500 and hosting over 400 national and international events a year.
                        </p>
                    </div>
                </div>
                <div className='px-6 drop-shadow-md hover:drop-shadow-lg'>
                    <Link href={"https://www.google.com/maps/place/Queen+Elizabeth+II+Centre/@51.5005231,-0.1292871,19z/data=!4m6!3m5!1s0x487604c4cb112d93:0x39efdcc690b64ca3!8m2!3d51.5005006!4d-0.1290725!16zL20vMDgwbDQx"} target="_blank">
                        <img alt="Venue image" src="https://worldcoffeealliance.com/wp-content/uploads/2023/05/QEII-GMAPS.png" className="rounded-lg" />
                    </Link>

                </div>
            </div>

        </>
    );
};

export default Venue