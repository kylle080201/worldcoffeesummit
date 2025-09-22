import Link from 'next/link'
import React from 'react'

export default function Partners() {
    const goldSponsors = [
        {
            href: '',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2023/09/ICE_logo_Rmark_rgb-1.png',
            className: 'w-[10rem] p-2 mx-auto'
        },
        {
            href: '',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2024/09/osapiens-Logo-horizontal-gradient-black-RM.svg',
            className: 'w-[16rem] p-2 mx-auto'
        },
    ]

    const silverSponsors = [
        {
            href: '',
            imgSrc: 'https://softtechs360.com/coffee/wp-content/uploads/2025/07/Planet.png',
            className: 'w-[16rem] p-2 mx-auto'
        },
        {
            href: '',
            imgSrc: 'https://softtechs360.com/coffee/wp-content/uploads/2025/07/Picterra-1.png',
            className: 'w-[16rem] p-2 mx-auto'
        }
    ]

    const bronzeSponsors = [
        {
            href: '',
            imgSrc: 'https://softtechs360.com/coffee/wp-content/uploads/2025/07/Chloris-Geospatial.png',
            className: 'w-[10rem] p-2 mx-auto'
        },
                {
            href: '',
            imgSrc: 'https://softtechs360.com/coffee/wp-content/uploads/2025/08/Satelligence-blue.svg',
            className: 'w-[16rem] p-2 mx-auto'
        },

    ]

    const coSponsors = [
        {
            href: '',
            imgSrc: 'https://softtechs360.com/coffee/wp-content/uploads/2025/07/Preferred_by_Nature-scaled.png',
            className: 'w-[12rem] p-2 mx-auto rounded-md'
        },
        {
            href: '',
            imgSrc: 'https://softtechs360.com/coffee/wp-content/uploads/2025/07/Okala.png',
            className: 'w-[12rem] p-2 mx-auto rounded-md'
        },
        {
            href: '',
            imgSrc: 'https://softtechs360.com/coffee/wp-content/uploads/2025/07/FoodChain-ID.webp',
            className: 'w-[14rem] p-2 mx-auto rounded-md'
        },
         {
            href: '',
            imgSrc: 'https://softtechs360.com/coffee/wp-content/uploads/2025/08/biometrio.earth_.svg',
            className: 'w-[14rem] p-2 mx-auto'
        },
        {
            href: '',
            imgSrc: 'https://softtechs360.com/coffee/wp-content/uploads/2025/09/Ubees-logo-2022-scaled.png',
            className: 'w-[14rem] p-2 mx-auto'
        }
    ]

    const sustainableCoffeePartner = [
        {
            href: '',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2024/10/LAVAZZA-GROUP-CROPPED.png',
            className: 'w-[15rem] p-2 mx-auto rounded-md'
        },
        
    ]

    const mediaPartners = [
        {
            href: '',
            imgSrc: 'https://softtechs360.com/coffee/wp-content/uploads/2025/07/Pefect-Daily-Grind-scaled.png',
            className: 'w-[16rem] p-2 mx-auto'
        },
        {
            href: '',
            imgSrc: 'https://softtechs360.com/coffee/wp-content/uploads/2025/07/Daily-Coffee-News.png',
            className: 'w-[16rem] p-2 mx-auto'
        },
        {
            href: '',
            imgSrc: 'https://softtechs360.com/coffee/wp-content/uploads/2025/07/Comunicaffe.png',
            className: 'w-[16rem] p-2 mx-auto'
        },
        {
            href: '',
            imgSrc: 'https://softtechs360.com/coffee/wp-content/uploads/2025/09/logo-dark.svg',
            className: 'w-[10rem] p-2 mx-auto'
        },


    ]

    const crossIndustryPartners = [
        {
            href: '',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2024/09/SMI_logo_Green-text.png',
            className: 'w-[16rem] mx-auto py-8'
        },
        {
            href: '',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2024/05/ICC_United_Kingdom_BLACK_RGB_300dpi.png',
            className: 'w-[8rem] mx-auto py-8'
        },
        {
            href: '',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2024/09/ITFA_Logo_Positive-2-e1727183762852.png',
            className: 'w-[6rem] mx-auto py-8'
        },
        {
            href: '',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2020/08/FBM_INT_VERT_RGB_POS.png',
            className: 'w-[5rem] mx-auto py-8'
        },
        {
            href: '',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2024/05/soil-association.jpg',
            className: 'w-[9rem] mx-auto py-8'
        },
        {
            href: '',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2024/07/DCSA_logo-1.png',
            className: 'w-[9rem] mx-auto py-8'
        },
    ]

    return (
        <>
            <div className='w-full py-20 bg-white' id='partners'>
                <div className='mb-20'>
                    <div className="max-w-2xl mx-auto text-center">
                        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Partners</p>
                    </div>

                    {/* <div className="max-w-2xl mx-auto text-center mt-8">
                        <div className="inline-flex items-center justify-center w-full">
                            <hr className="w-80 h-px bg-gray-400 border-0" />
                            <span className="absolute px-3 text-lg sm:text-2xl tracking-tight text-gray-900 -translate-x-1/2 bg-white left-1/2">Gold Sponsor</span>
                        </div>
                    </div>
                    <div className='flex flex-wrap flex-col items-center justify-center gap-4 mx-auto sm:flex-row sm:max-w-7xl mt-6'>
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
                    </div> */}

                    <div className="max-w-2xl mx-auto text-center mt-12">
                        <div className="inline-flex items-center justify-center w-full">
                            <hr className="w-80 h-px bg-gray-400 border-0" />
                            <span className="absolute px-3 text-lg sm:text-2xl tracking-tight text-gray-900 -translate-x-1/2 bg-white left-1/2">Silver Sponsors</span>
                        </div>
                    </div>
                    <div className='flex flex-wrap flex-col items-center justify-center gap-4 mx-auto sm:flex-row sm:max-w-7xl mt-6'>
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

                    <div className="max-w-2xl mx-auto text-center mt-12">
                        <div className="inline-flex items-center justify-center w-full">
                            <hr className="w-80 h-px bg-gray-400 border-0" />
                            <span className="absolute px-3 text-lg sm:text-2xl tracking-tight text-gray-900 -translate-x-1/2 bg-white left-1/2">Bronze Sponsors</span>
                        </div>
                    </div>
                    <div className='flex flex-wrap flex-col items-center justify-center gap-4 mx-auto sm:flex-row sm:max-w-7xl mt-6'>
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

                    <div className="max-w-2xl mx-auto text-center mt-12">
                        <div className="inline-flex items-center justify-center w-full">
                            <hr className="w-80 h-px bg-gray-400 border-0" />
                            <span className="absolute px-3 text-lg sm:text-2xl tracking-tight text-gray-900 -translate-x-1/2 bg-white left-1/2">Exhibitors</span>
                        </div>
                    </div>
                    <div className='flex flex-wrap flex-col items-center justify-center gap-4 mx-auto sm:flex-row sm:max-w-7xl mt-6'>
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

                    {/* <div className="max-w-2xl mx-auto text-center mt-12">
                        <div className="inline-flex items-center justify-center w-full">
                            <hr className="w-80 h-px bg-gray-400 border-0" />
                            <span className="absolute px-3 text-lg sm:text-2xl tracking-tight text-gray-900 -translate-x-1/2 bg-white left-1/2">Sustainable Coffee Partner</span>
                        </div>
                    </div>
                    <div className='flex flex-wrap flex-col items-center justify-center gap-4 mx-auto sm:flex-row sm:max-w-7xl mt-6'>
                        {sustainableCoffeePartner.map((sponsor) => (
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

                    <div className="max-w-2xl mx-auto text-center mt-12">
                        <div className="inline-flex items-center justify-center w-full">
                            <hr className="w-80 h-px bg-gray-400 border-0" />
                            <span className="absolute px-3 text-lg sm:text-2xl tracking-tight text-gray-900 -translate-x-1/2 bg-white left-1/2">Cross-industry Partners</span>
                        </div>
                    </div>
                    <div className='flex flex-wrap flex-col items-center justify-center gap-4 mx-auto sm:flex-row sm:max-w-7xl mt-6'>
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
                    </div> */}

                </div>
                <div className='mb-20'>
                    <div className="inline-flex items-center justify-center w-full">
                        <hr className="w-80 h-px bg-gray-400 border-0" />
                        <span className="absolute px-3 text-lg sm:text-2xl tracking-tight text-gray-900 -translate-x-1/2 bg-white left-1/2">Media & Marketing Partners</span>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-4 mx-auto sm:flex-row sm:max-w-7xl'>
                        {mediaPartners.map((partner) => (
                            partner.href ?
                                <Link key={partner.href} href={partner.href} target='_blank' rel='noreferer'>
                                    <div className='items-center flex-shrink-0 h-full p-4'>
                                        <img className={partner.className} src={partner.imgSrc}>
                                        </img>
                                    </div>
                                </Link> :
                                <div key={partner.href} className='items-center flex-shrink-0 h-full p-4'>
                                    <img className={partner.className} src={partner.imgSrc}>
                                    </img>
                                </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}