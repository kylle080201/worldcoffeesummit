import React from 'react'

const WhoAreWe = () => {
    return (
        <>
            <div className="flex flex-row py-24 bg-white mlg:flex-col lg:px-72 md:px-0">
                <div className="mx-auto mmd:flex mlg:w-1/2 max-w-7xl sm:py-24 sm:px-6 lg:px-8">
                    <div className="mlg:text-left mmd:text-center">
                        <h2 className="mt-1 font-bold text-gray-900 sm:text-4xl lg:text-7xl">
                            WHO ARE WE?
                        </h2>
                        <h4 className="mt-4 font-bold text-gray-600 sm:text-sm lg:text-xl">
                            World Coffee Alliance (WCA) is a network alliance of coffee
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