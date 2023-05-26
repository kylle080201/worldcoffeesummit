import React from 'react'

export default function Overview() {
    return (
        <>
            <div id="overview" className="flex flex-col bg-[url('https://worldcoffeealliance.com/wp-content/uploads/2023/05/COVER-PAGE-WORLD-COFFEE-SUMMIT-LONDON13-SEPTEMBER-2023-DARK.jpg')] py-20 bg-cover mlg:flex-col">
                <div className="self-center px-12 text-center sm:px-20">
                    <div>
                        <p className="text-xl leading-8 text-white">13th September 2023</p>
                        <p className="text-4xl font-bold tracking-tight text-white sm:text-6xl">World Coffee Summit London</p>
                        <p className="mt-6 text-2xl font-bold tracking-tight text-white sm:text-4xl">SUSTAINABILITY BEYOND COMPLIANCE </p>
                        <p className="mt-32 text-xl leading-8 text-white sm:mt-80">
                            WITH THE LOOMING IMPLEMENTATION OF THE  EU DUE DILIGENCE LEGISLATION, THE GLOBAL COFFEE INDUSTRY IS FACED WITH REGULATORY COMPLIANCE THAT WILL  HAVE DRAMATIC IMPACT ON BUSINESSES. AGAINST THE BACKDROP OF RISING COST, CLIMATE CHANGE AND SUSTAINABILITY ISSUES, THIS BUSINESS EVENT WILL TACKLE AND FLESH OUT HOW TO NAVIGATE ITS COMPLEXITIES AND FIND COLLABORATIVE AND REGENERATIVE SOLUTIONS FOR THE FUTURE OF COFFEE.
                        </p>
                    </div>
                </div>
            </div>
            <div className='justify-center px-12 py-40 bg-white mlg:flex-row mmd:flex-col msm:flex-col sm:px-20' >
                <p className="mt-6 text-2xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl">Overview</p>
                <p className="mt-4 text-xl leading-8 text-gray-900 sm:mt-8">
                    This event will deep dive into the relationship between adoption of Regenerative Agriculture, its benefits and challenges against the backdrop of climate change and ESG Investing, its strategies and funding infrastructure. Transforming from conventional agriculture to regenerative will require some collaboration, incentives, government grants and private funding to be climate positive, scalable, and operational.
                </p>
            </div>
        </>
    )
}