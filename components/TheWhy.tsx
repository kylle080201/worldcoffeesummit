import React from 'react'

const TheWhy = () => {
    return (
        <>
            <div className="flex flex-row bg-[url('https://worldcoffeealliance.com/wp-content/uploads/2019/11/11.jpg')] mlg:flex-col lg:px-40 bg-cover py-16">
                <div className="py-4 mx-auto sm:w-1/2 max-w-7xl lg:pr-4 sm:px-2 msm:px-12">
                    <div className="h-full p-8 bg-local bg-gray-700 bg-opacity-75 bg-cover border-none rounded-lg shadow-md mmd:text-center">
                        <h2 className="mb-6 font-bold text-white sm:text-xl lg:text-5xl">
                            THE WHY?
                        </h2>
                        <h4 className="mt-4 text-white sm:text-sm lg:text-xl">
                            Coffee is the third most consumed drink worldwide and has been
                            shown when consumed correctly to have positive impacts on productivity.
                        </h4>
                    </div>
                </div>
                <div className="py-4 mx-auto sm:w-1/2 max-w-7xl lg:pl-4 msm:px-12">
                    <div className="h-full p-8 bg-local bg-gray-700 bg-opacity-75 bg-cover border-none rounded-lg shadow-md mmd:text-center">
                        <h2 className="mb-6 font-bold text-white sm:text-2xl lg:text-5xl">
                            THE HOW?
                        </h2>
                        <h4 className="mt-4 text-white sm:text-sm lg:text-xl">
                            Digitalization creates a paradigm shift in the coffee industry and can be a game
                            changer. Payments could be speeded up considerably using blockchain.
                            Smart contracts could see an end to interoperability
                            and the endless piles of paper used to move
                            coffee from farm to retailer.
                        </h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TheWhy