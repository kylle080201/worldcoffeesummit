import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export default function Venue() {
    return (
        <div className="relative py-20 overflow-hidden bg-gray-100 isolate" id='venue'>
            <div className="px-6 mx-auto lg:flex sm:px-20">
                <div className="flex-shrink-0 w-1/2 mx-auto sm:w-2/5">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        THE VENUE
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-700">
                        The QEII Centre is the largest dedicated conference and exhibition space in central London. The offers world-class facilities for high-profile conferences, conventions, exhibitions and corporate events with a capacity of up to 2,500 and hosting over 400 national and international events a year.
                    </p>
                    <p className="mt-6 text-lg font-semibold leading-8 text-gray-700">
                        Further information
                    </p>
                    <div className="flex items-center mt-4 gap-x-6">
                        <Link
                            href="https://qeiicentre.london/about/hotels/"
                            target='_blank'
                            className="rounded-md flex bg-lime-700 hover:bg-yellow-900 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm "
                        >
                            Accomodation <ArrowRightIcon className="self-center w-5 h-5 ml-2" aria-hidden="true" />
                        </Link>
                        <Link
                            href="https://qeiicentre.london/about/sustainability/"
                            target='_blank'
                            className="rounded-md flex bg-lime-700 hover:bg-yellow-900 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm "
                        >
                            Sustainability <ArrowRightIcon className="self-center w-5 h-5 ml-2" aria-hidden="true" />
                        </Link>
                    </div>
                    <div className="mx-auto mt-12">
                        <Link href={"https://www.google.com/maps/place/Queen+Elizabeth+II+Centre/@51.5005231,-0.1292871,19z/data=!4m6!3m5!1s0x487604c4cb112d93:0x39efdcc690b64ca3!8m2!3d51.5005006!4d-0.1290725!16zL20vMDgwbDQx"} target="_blank">
                            <img
                                src="https://worldcoffeealliance.com/wp-content/uploads/2023/05/QEII-GMAPS.png"
                                alt="QE II Map"
                                className="rounded-lg shadow-lg bg-white/5 hover:shadow-2xl"
                            />
                        </Link>
                    </div>
                </div>
                <div className="flex-shrink-0 w-1/2 max-w-3xl mx-auto mt-12 sm:ml-16 sm:max-w-5xl">
                    <img
                        src="https://worldcoffeealliance.com/wp-content/uploads/2023/06/sustainable-foods-QE2-2.jpg"
                        alt="QE II Map"
                        className="w-full h-full rounded-lg shadow-lg bg-white/5"
                    />
                </div>
            </div>
        </div>
    )
}
