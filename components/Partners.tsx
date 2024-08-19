import Link from 'next/link'
import React from 'react'

export default function Partners() {
    const goldSponsors = [
        {
            href: 'https://www.ice.com/index',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2023/09/ICE_logo_Rmark_rgb-1.png',
            className: 'w-[10rem] p-2 mx-auto'
        },
    ]

    const silverSponsors = [
        {
            href: '',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2024/08/agmatix_logo_New_RGB-Vertical_1.png',
            className: 'w-[14rem] p-2 mx-auto'
        }
    ]

    const bronzeSponsors = [
        {
            href: '',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2024/06/Logo-Koltiva-header.webp',
            className: 'w-[16rem] p-2 mx-auto'
        }
    ]

    const coSponsors = [
        {
            href: '',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2024/08/image_regenagri_logo_full__002_.png',
            className: 'w-[22rem] p-2 mx-auto rounded-md'
        },
    ]

    const mediaPartners = [
        {
            href: '',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2021/02/ROAST-LOGO-MEDIA-PARTNER.jpg',
            className: 'w-[15rem] p-2 mx-auto'
        },
        {
            href: '',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2024/08/perfect-daily-grind.png',
            className: 'w-[15rem] p-2 mx-auto'
        },
    ]

    const crossIndustryPartners = [
        {
            href: '',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2024/05/ICC_United_Kingdom_BLACK_RGB_300dpi.png',
            className: 'w-[12rem] mx-auto py-8'
        },
        {
            href: '',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2024/07/B-Lab-Europe-Country-Partners-Logos-1.webp',
            className: 'w-[12rem] mx-auto'
        },
    ]

    return (
        <>
            <div className='w-full py-20 bg-white' id='partners'>
                <div className='mb-20'>
                    <div className="max-w-2xl mx-auto text-center">
                        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">SPONSORS</p>
                    </div>

                    <div className="max-w-2xl mx-auto text-center mt-12">
                        <div className="inline-flex items-center justify-center w-full">
                            <hr className="w-full h-px bg-gray-400 border-0" />
                            <span className="absolute px-3 text-2xl sm:text-4xl font-bold tracking-tight text-gray-900 -translate-x-1/2 bg-white left-1/2">Gold Sponsor</span>
                        </div>
                    </div>
                    <div className='grid items-center justify-center grid-cols-1 gap-4 mx-auto sm:gap-12 sm:flex-row sm:max-w-7xl mt-4'>
                        {goldSponsors.map((sponsor) => (
                            sponsor.href ? 
                            <Link key={sponsor.href} href={sponsor.href} target='_blank' rel='noreferer'>
                                <div className='items-center flex-shrink-0 h-full p-4'>
                                    <img className={sponsor.className} src={sponsor.imgSrc}>
                                    </img>
                                </div>
                            </Link> : 
                                <div key={sponsor.href} className='items-center flex-shrink-0 h-full p-4'>
                                    <img className={sponsor.className} src={sponsor.imgSrc}>
                                    </img>
                                </div>
                        ))}
                    </div>

                    <div className="max-w-2xl mx-auto text-center mt-6">
                        <div className="inline-flex items-center justify-center w-full">
                            <hr className="w-full h-px bg-gray-400 border-0" />
                            <span className="absolute px-3 text-2xl sm:text-4xl font-bold tracking-tight text-gray-900 -translate-x-1/2 bg-white left-1/2">Silver Sponsor</span>
                        </div>
                    </div>
                    <div className='grid items-center justify-center grid-cols-1 gap-4 mx-auto sm:gap-12 sm:flex-row sm:max-w-7x mt-4'>
                        {silverSponsors.map((sponsor) => (
                            sponsor.href ?
                                <Link key={sponsor.href} href={sponsor.href} target='_blank' rel='noreferer'>
                                    <div className='items-center flex-shrink-0 h-full p-4'>
                                        <img className={sponsor.className} src={sponsor.imgSrc}>
                                        </img>
                                    </div>
                                </Link> :
                                <div key={sponsor.href} className='items-center flex-shrink-0 h-full p-4'>
                                    <img className={sponsor.className} src={sponsor.imgSrc}>
                                    </img>
                                </div>
                        ))}
                    </div>

                    <div className="max-w-2xl mx-auto text-center mt-6">
                        <div className="inline-flex items-center justify-center w-full">
                            <hr className="w-full h-px bg-gray-400 border-0" />
                            <span className="absolute px-3 text-2xl sm:text-4xl font-bold tracking-tight text-gray-900 -translate-x-1/2 bg-white left-1/2">Bronze Sponsor</span>
                        </div>
                    </div>
                    <div className='grid items-center justify-center grid-cols-1 gap-4 mx-auto sm:gap-12 sm:flex-row sm:max-w-7x mt-4'>
                        {bronzeSponsors.map((sponsor) => (
                            sponsor.href ?
                                <Link key={sponsor.href} href={sponsor.href} target='_blank' rel='noreferer'>
                                    <div className='items-center flex-shrink-0 h-full p-4'>
                                        <img className={sponsor.className} src={sponsor.imgSrc}>
                                        </img>
                                    </div>
                                </Link> :
                                <div key={sponsor.href} className='items-center flex-shrink-0 h-full p-4'>
                                    <img className={sponsor.className} src={sponsor.imgSrc}>
                                    </img>
                                </div>
                        ))}
                    </div>

                    <div className="max-w-2xl mx-auto text-center mt-6">
                        <div className="inline-flex items-center justify-center w-full">
                            <hr className="w-full h-px bg-gray-400 border-0" />
                            <span className="absolute px-3 text-2xl sm:text-4xl font-bold tracking-tight text-gray-900 -translate-x-1/2 bg-white left-1/2">Co Sponsor</span>
                        </div>
                    </div>
                    <div className='grid items-center justify-center gap-4 mx-auto sm:gap-12 sm:flex-row sm:max-w-7xl mt-4'>
                        {coSponsors.map((sponsor) => (
                            sponsor.href ?
                                <Link key={sponsor.href} href={sponsor.href} target='_blank' rel='noreferer'>
                                    <div className='items-center flex-shrink-0 h-full p-4'>
                                        <img className={sponsor.className} src={sponsor.imgSrc}>
                                        </img>
                                    </div>
                                </Link> :
                                <div key={sponsor.href} className='items-center flex-shrink-0 h-full p-4'>
                                    <img className={sponsor.className} src={sponsor.imgSrc}>
                                    </img>
                                </div>
                        ))}
                    </div>

                    <div className="max-w-2xl mx-auto text-center mt-6">
                        <div className="inline-flex items-center justify-center w-full">
                            <hr className="w-full h-px bg-gray-400 border-0" />
                            <span className="absolute px-3 text-2xl sm:text-4xl font-bold tracking-tight text-gray-900 -translate-x-1/2 bg-white left-1/2">Cross-industry Partners</span>
                        </div>
                    </div>
                    <div className='flex items-center justify-center gap-4 mx-auto sm:flex-row sm:max-w-7xl mt-4'>
                        {crossIndustryPartners.map((sponsor) => (
                            sponsor.href ?
                                <Link key={sponsor.href} href={sponsor.href} target='_blank' rel='noreferer'>
                                    <div className='items-center flex-shrink-0 h-full p-4'>
                                        <img className={sponsor.className} src={sponsor.imgSrc}>
                                        </img>
                                    </div>
                                </Link> :
                                <div key={sponsor.href} className='items-center flex-shrink-0 h-full p-4'>
                                    <img className={sponsor.className} src={sponsor.imgSrc}>
                                    </img>
                                </div>
                        ))}
                    </div>
                </div>
                <div className='mb-20'>
                    <div className="max-w-2xl mx-auto text-center">
                        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">MEDIA PARTNERS</p>
                    </div>
                    <div className='flex items-center justify-center gap-4 mx-auto mt-12 sm:flex-row sm:max-w-7xl'>
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
            </div>
        </>
    )
}