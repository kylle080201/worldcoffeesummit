import { ArrowLongRightIcon, } from '@heroicons/react/24/solid'
import Link from 'next/link'

export default function Venue() {
    return (
        <div className="py-20 overflow-hidden" id='venue'>
            <div className="mx-auto lg:flex md:max-w-7xl">
                <div className="flex-shrink-0 mx-12 lg:mx-0 md:w-2/5">
                    <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        THE SUMMIT VENUE
                    </p>
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
                    </div>
                </div>
                <div className="flex-shrink-0 max-w-5xl mx-12 mt-12 lg:mx-0 md:mt-0 lg:ml-16 w-3/5">
                    <img
                        src="https://worldcoffeealliance.com/wp-content/uploads/2024/05/qeii-vac2021-071021-hires-1039-1080x675.jpg.webp"
                        alt="QE II"
                        className="w-full h-full rounded-lg shadow-lg bg-white/5"
                    />
                </div>
            </div>
            <div className="mx-auto lg:flex md:max-w-7xl mt-12 gap-12">
                <div className="flex-shrink-0 max-w-5xl mx-12 mt-12 lg:mx-0 md:mt-0 w-3/5">
                    <img
                        src="https://worldcoffeealliance.com/wp-content/uploads/2024/05/11c55634acb3faa3c15d13127891b37e-e1716190907215.jpeg"
                        alt="house of Lords"
                        className="w-full h-full rounded-lg shadow-lg bg-white/5"
                    />
                </div>
                <div className="flex-shrink-0 flex flex-col mx-12 lg:mx-0 md:w-2/5 gap-12">
                    <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        THE NETWORKING SOIRÉE VENUE
                    </p>
                    <div className='flex flex-col h-full'>
                        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            House of Lords
                        </p>
                        <p className="text-2xl tracking-tight text-gray-900 sm:text-4xl">
                            Houses of Parliament
                        </p>
                        <p className="text-2xl tracking-tight text-gray-900 sm:text-4xl">
                            Parliament Sq
                        </p>
                        <p className="text-2xl tracking-tight text-gray-900 sm:text-4xl">
                            London SW1A 0PW
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
