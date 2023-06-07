import Link from 'next/link'
import React from 'react'

export default function Partners() {
    const partners = [
        {
            key: 1,
            link: 'https://icocoffee.org/',
            icon: 'https://worldcoffeealliance.com/wp-content/uploads/2023/06/ICO.jpg'
        },
        {
            key: 2,
            link: 'https://britishcoffeeassociation.org/',
            icon: 'https://worldcoffeealliance.com/wp-content/uploads/2023/06/BCA_PrimaryLogo_Large-scaled.jpg'
        },
        {
            key: 3,
            link: '',
            icon: 'https://worldcoffeealliance.com/wp-content/uploads/2020/08/FBM_INT_VERT_RGB_POS.png'
        },
        {
            key: 4,
            link: 'https://www.reuters.com/',
            icon: 'https://worldcoffeealliance.com/wp-content/uploads/2023/06/Reuters-2020-horizontal-full-color-preferred-1-1.png'
        },
    ]
    return (
        <>
            <div className='w-full py-20 bg-white ' id='partners'>
                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">SUPPORTED BY:</p>
                </div>
                <div className='grid items-center justify-center grid-cols-1 gap-4 mx-auto mt-12 sm:grid-cols-3 sm:gap-12 sm:flex-row sm:max-w-7xl'>
                    <Link href={'https://icocoffee.org/'} target='_blank' rel='noreferer'>
                        <div className='flex-shrink-0 h-full p-4 '>
                            <img className='w-[40rem]' src='https://worldcoffeealliance.com/wp-content/uploads/2023/06/ICO.jpg'>
                            </img>
                        </div>
                    </Link>
                    <Link href={'https://britishcoffeeassociation.org/'} target='_blank' rel='noreferer'>
                        <div className='flex-shrink-0 h-full p-4'>
                            <img className='w-[40rem]' src='https://worldcoffeealliance.com/wp-content/uploads/2023/06/BCA_PrimaryLogo_Large-scaled.jpg'>
                            </img>
                        </div>
                    </Link>
                    <Link href={'https://www.fairtrade.net/'} target='_blank' rel='noreferer'>
                        <div className='flex-shrink-0 h-full p-4'>
                            <img className='w-[10rem] p-2 ' src='https://worldcoffeealliance.com/wp-content/uploads/2020/08/FBM_INT_VERT_RGB_POS.png'>
                            </img>
                        </div>
                    </Link>
                    <Link href={'https://www.reuters.com/'} target='_blank' rel='noreferer'>
                        <div className='flex-shrink-0 h-full p-4 '>
                            <img className='w-[40rem]' src='https://worldcoffeealliance.com/wp-content/uploads/2023/06/Reuters-2020-horizontal-full-color-preferred-1-1.png'>
                            </img>
                        </div>
                    </Link>

                </div>
            </div>
        </>
    )
}