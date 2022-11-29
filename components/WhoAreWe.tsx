import React from 'react'

const WhoAreWe = () => {
    return (
        <>
            <div className="flex flex-row py-24 bg-white mlg:flex-col lg:px-72 md:px-0">
                <div className="mx-auto mmd:flex mlg:w-1/2 msm:w-56 mmd:w-80 max-w-7xl sm:py-24 sm:px-6 lg:px-8">
                    <div className="mlg:text-left mmd:text-center">
                        <h2 className="mb-6 font-bold text-gray-900 msm:text-3xl mmd:text-5xl lg:text-7xl">
                            <span className='text-lime-700'>WHO</span> ARE WE?
                        </h2>
                        <h4 className="font-semibold text-gray-600 msm:text-sm mmd:text-md lg:text-xl">
                            <span className='font-bold text-yellow-900'>World Coffee Alliance (WCA)</span> is a network alliance of coffee
                            professionals, stakeholders and industry partners, producing
                            critical insights into the global coffee value chain.
                        </h4>
                    </div>
                </div>
                <div className="flex items-center mlg:w-1/2">
                    <div className="block mx-auto w-96 mlg:hidden">
                        <img
                            src='https://worldcoffeealliance.com/wp-content/uploads/2021/08/WCA_new_logo.png'
                        >
                        </img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhoAreWe