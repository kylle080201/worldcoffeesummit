export default function Venue() {
    return (
        <div className="py-20 overflow-hidden" id='venue'>
            <div className="mx-auto flex max-w-7xl flex-col gap-8 px-8 lg:flex-row lg:items-center">
                <div className="w-full lg:w-[58%]">
                    <img
                        src="https://worldcoffeealliance.com/wp-content/uploads/2024/05/11c55634acb3faa3c15d13127891b37e-e1716190907215.jpeg"
                        alt="House of Lords"
                        className="w-full rounded-lg shadow-lg bg-white/5"
                    />
                </div>

                <div className="w-full lg:w-[42%]">
                    <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        THE SUMMIT VENUE
                    </p>
                    <div className='mt-10'>
                        <p className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                            House of Lords
                        </p>
                        <p className="text-2xl tracking-tight text-gray-900 sm:text-3xl">
                            Houses of Parliament
                        </p>
                        <p className="text-2xl tracking-tight text-gray-900 sm:text-3xl">
                            Parliament Sq
                        </p>
                        <p className="text-2xl tracking-tight text-gray-900 sm:text-3xl">
                            London SW1A 0PW
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
