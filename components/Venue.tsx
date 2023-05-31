import Link from 'next/link'

export default function Venue() {
    return (
        <div className="relative overflow-hidden bg-white isolate">
            <div className="px-6 pt-10 pb-24 mx-auto max-w-7xl sm:pb-32 lg:flex lg:px-8 lg:py-40">
                <div className="flex-shrink-0 w-1/2 mx-auto sm:w-2/5">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        THE VENUE
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-700">
                        The QEII Centre is the largest dedicated conference and exhibition space in central London. The offers world-class facilities for high-profile conferences, conventions, exhibitions and corporate events with a capacity of up to 2,500 and hosting over 400 national and international events a year.
                    </p>
                    <div className="flex items-center mt-10 gap-x-6">
                        <Link
                            href="https://qeiicentre.london/about/hotels/"
                            target='_blank'
                            className="rounded-md bg-yellow-900 hover:bg-lime-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                        >
                            Accomodation
                        </Link>
                        <Link href="https://qeiicentre.london/about/sustainability/" target='_blank' className="text-lg font-semibold leading-6 text-gray-900">
                            Sustainability <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
                <div className="flex max-w-2xl mx-auto mt-16 sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
                    <div className="flex-none max-w-3xl sm:max-w-5xl lg:max-w-none">
                        <Link href={"https://www.google.com/maps/place/Queen+Elizabeth+II+Centre/@51.5005231,-0.1292871,19z/data=!4m6!3m5!1s0x487604c4cb112d93:0x39efdcc690b64ca3!8m2!3d51.5005006!4d-0.1290725!16zL20vMDgwbDQx"} target="_blank">
                            <img
                                src="https://worldcoffeealliance.com/wp-content/uploads/2023/05/QEII-GMAPS.png"
                                alt="QE II Map"
                                className="w-[80rem] rounded-lg bg-white/5 shadow-2xl ring-1 ring-white/10"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
