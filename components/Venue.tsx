import { ArrowLongRightIcon, } from '@heroicons/react/24/solid'
import Link from 'next/link'

export default function Venue() {
    return (
        <div className="relative py-20 overflow-hidden bg-gray-100 isolate" id='venue'>
            <div className="px-6 mx-auto lg:flex sm:px-20">
                <div className="flex-shrink-0 w-1/2 mx-auto sm:w-2/5">
                    <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        THE VENUE
                    </p>
                    <div className='mt-12'>
                        <p className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                            Summit: St. James&apos;s Hall
                        </p>
                        <p className="mt-6 text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                            Exhibition: Westminster Hall
                        </p>
                    </div>

                    <div className='mt-12'>
                        <p className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                            QEII Centre
                        </p>
                        <p className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                            Broad Sanctuary
                        </p>
                        <p className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                            Westminster
                        </p>
                        <p className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                            London SW1P 3EE
                        </p>
                    </div>

                    <p className="mt-12 text-lg font-semibold leading-8 text-gray-700">
                        Further information
                    </p>
                    <div className="flex items-center mt-4 gap-x-6">
                        <div className='flex flex-col'>
                            <Link
                                href="https://qeiicentre.london/about/hotels/"
                                target='_blank'
                                className='py-2 border-lime-700 hover:border-b-2'
                            >
                                <div className='rounded-md flex bg-lime-700  px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm '>
                                    Accomodation
                                </div>
                                <ArrowLongRightIcon className="self-center mx-auto mt-2 w-7 h-7" aria-hidden="true" />
                            </Link>
                        </div>
                        <div className='flex flex-col'>
                            <Link
                                href="https://qeiicentre.london/about/sustainability/"
                                target='_blank'
                                className='py-2 border-lime-700 hover:border-b-2'
                            >
                                <div className='rounded-md flex bg-lime-700  px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm '>
                                    Sustainability
                                </div>
                                <ArrowLongRightIcon className="self-center mx-auto mt-2 w-7 h-7" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex-shrink-0 w-1/2 max-w-5xl mx-auto mt-12 sm:mt-0 sm:ml-16">
                    <img
                        src="https://worldcoffeealliance.com/wp-content/uploads/2023/06/sustainable-foods-QE2-2.jpg"
                        alt="QE II"
                        className="w-full h-full rounded-lg shadow-lg bg-white/5"
                    />
                </div>
            </div>
            <div className="items-center px-12 mx-auto mt-20 max-w-7xl">
                <Link href={"https://www.google.com/maps/place/Queen+Elizabeth+II+Centre/@51.5005231,-0.1292871,19z/data=!4m6!3m5!1s0x487604c4cb112d93:0x39efdcc690b64ca3!8m2!3d51.5005006!4d-0.1290725!16zL20vMDgwbDQx"} target="_blank">
                    <img
                        src="https://worldcoffeealliance.com/wp-content/uploads/2023/05/QEII-GMAPS.png"
                        alt="QE II Map"
                        className="rounded-lg shadow-lg bg-white/5 hover:shadow-2xl"
                    />
                </Link>
            </div>
        </div>
    )
}
