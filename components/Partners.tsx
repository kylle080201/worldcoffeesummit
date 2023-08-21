import Link from 'next/link'
import React from 'react'

export default function Partners() {
    const supporters = [
        {
            href: 'https://icocoffee.org/',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2023/06/ICO.jpg',
            className: 'w-[35rem] mx-auto'
        },
        {
            href: 'https://britishcoffeeassociation.org/',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2023/06/BCA_PrimaryLogo_Large-scaled.jpg',
            className: 'w-[35rem] mx-auto'
        },
        {
            href: 'https://www.reuters.com/',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2023/06/Reuters-2020-horizontal-full-color-preferred-1-1.png',
            className: 'w-[40rem] mx-auto'
        },
        {
            href: 'https://www.ethioembassy.org.uk/',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2023/06/ETHIOPIA-EMBASSY-LOGO.jpg',
            className: 'w-[15rem] mx-auto'
        },
        {
            href: 'https://www.eda.admin.ch/london',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2023/06/Swiss-embassy-logo.jpg',
            className: 'w-[30rem] mx-auto'
        },
        {
            href: 'https://www.uk.emb-japan.go.jp/itprtop_en/index.html',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2023/06/JAPANESE-EMBASSY-UK.jpg',
            className: 'w-[20rem] mx-auto'
        },
        {
            href: 'https://en.wikipedia.org/wiki/Embassy_of_El_Salvador,_London',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2023/06/EU_REINO-UNIDO.png',
            className: 'w-[25rem] mx-auto'
        },
        {
            href: 'https://www.fairtrade.net/',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2020/08/FBM_INT_VERT_RGB_POS.png',
            className: 'w-[10rem] mx-auto'
        },
        {
            href: 'https://www.systemiq.earth/',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2023/06/SYSTEMIQ-Logo-white-copy1x.png',
            className: 'w-[25rem] bg-gray-900 p-2 mx-auto'
        },
        {
            href: 'https://www.solidaridadnetwork.org/region/europe/',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2023/07/Logo-e1690540671905.png',
            className: 'w-[20rem] p-2 mx-auto'
        },
        {
            href: 'https://www.impact-finance.com/',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2023/07/Logo-Black-and-White.jpg',
            className: 'w-[50rem] p-2 mx-auto'
        },
    ]

    const partners = [
        {
            href: 'https://intracen.org/',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2023/07/ITC-Alliances-for-action.png',
            className: 'w-[40rem] p-2 mx-auto'
        },
        {
            href: 'https://www.garp.org/',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2023/08/GARP_Logo_RGB-2.png',
            className: 'w-[20rem] p-2 mx-auto'
        },
        {
            href: 'https://www.iod.com/',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2023/08/IOD-Orange-logo.png',
            className: 'w-[12rem] p-2 mx-auto'
        },
        {
            href: 'https://gbaglobal.org/',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2023/08/gba.png',
            className: 'w-[20rem] p-2 mx-auto'
        },
        {
            href: 'https://www.coffeeinstitute.org/',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2023/08/CQI-2.png',
            className: 'w-[20rem] p-2 mx-auto'
        },
        {
            href: 'https://www.wbaforum.org/',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2023/08/servlet.png',
            className: 'w-[12rem] p-2 mx-auto'
        },
        {
            href: 'https://beantale.com/',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2023/08/image001.png',
            className: 'w-[11rem] p-2 mx-auto'
        },
    ]

    const mediaPartners = [
        {
            href: 'https://teamblockchain.net/',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2023/08/Screenshot-2023-08-17-at-10.36.35.png',
            className: 'w-[20rem] p-2 mx-auto'
        },
    ]

    return (
        <>
            <div className='w-full py-20 bg-white' id='partners'>
                <div className='mb-20'>
                    <div className="max-w-2xl mx-auto text-center">
                        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">EVENT PARTNERS</p>
                    </div>
                    <div className='grid items-center justify-center grid-cols-1 gap-4 mx-auto mt-12 sm:grid-cols-3 sm:gap-12 sm:flex-row sm:max-w-7xl'>
                        {partners.map((partner) => (
                            <Link key={partner.href} href={partner.href} target='_blank' rel='noreferer'>
                                <div className='items-center flex-shrink-0 h-full p-4'>
                                    <img className={partner.className} src={partner.imgSrc}>
                                    </img>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className='mb-20'>
                    <div className="max-w-2xl mx-auto text-center">
                        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">MEDIA PARTNERS</p>
                    </div>
                    <div className='grid items-center justify-center grid-cols-1 gap-4 mx-auto mt-12 sm:grid-cols-3 sm:gap-12 sm:flex-row sm:max-w-7xl'>
                        {mediaPartners.map((partner) => (
                            <Link key={partner.href} href={partner.href} target='_blank' rel='noreferer'>
                                <div className='items-center flex-shrink-0 h-full p-4'>
                                    <img className={partner.className} src={partner.imgSrc}>
                                    </img>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="max-w-2xl mx-auto text-center">
                        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">SUPPORTED BY</p>
                    </div>
                    <div className='grid items-center justify-center grid-cols-1 gap-4 mx-auto mt-12 sm:grid-cols-3 sm:gap-12 sm:flex-row sm:max-w-7xl'>
                        {supporters.map((supporter) => (
                            <Link key={supporter.href} href={supporter.href} target='_blank' rel='noreferer'>
                                <div className='items-center flex-shrink-0 h-full p-4'>
                                    <img className={supporter.className} src={supporter.imgSrc}>
                                    </img>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}