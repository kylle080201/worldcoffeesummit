import Link from 'next/link'
import React from 'react'

export default function Partners() {
    const partners = [
        {
            href: 'https://icocoffee.org/',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2023/06/ICO.jpg',
            className: 'w-[40rem]'
        },
        {
            href: 'https://britishcoffeeassociation.org/',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2023/06/BCA_PrimaryLogo_Large-scaled.jpg',
            className: 'w-[40rem]'
        },
        {
            href: 'https://www.fairtrade.net/',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2020/08/FBM_INT_VERT_RGB_POS.png',
            className: 'w-[10rem]'
        },
        {
            href: 'https://www.reuters.com/',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2023/06/Reuters-2020-horizontal-full-color-preferred-1-1.png',
            className: 'w-[40rem]'
        },
        {
            href: 'https://www.systemiq.earth/',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2023/06/SYSTEMIQ-Logo-white-copy1x.png',
            className: 'w-[25rem] bg-gray-900 p-2'
        },
        {
            href: 'https://www.uk.emb-japan.go.jp/itprtop_en/index.html',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2023/06/JAPANESE-EMBASSY-UK.jpg',
            className: 'w-[20rem]'
        },
    ]
    return (
        <>
            <div className='w-full py-20 bg-white ' id='partners'>
                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">SUPPORTED BY:</p>
                </div>
                <div className='grid items-center justify-center grid-cols-1 gap-4 mx-auto mt-12 sm:grid-cols-3 sm:gap-12 sm:flex-row sm:max-w-7xl'>
                    {partners.map((partner) => (
                        <Link key={partner.href} href={partner.href} target='_blank' rel='noreferer'>
                            <div className='flex-shrink-0 h-full p-4 '>
                                <img className={partner.className} src={partner.imgSrc}>
                                </img>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}