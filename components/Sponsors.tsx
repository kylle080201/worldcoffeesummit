import Link from 'next/link'
import React from 'react'

export default function Sponsors() {
    return (
        <>
            <div className='w-full py-20 bg-white ' id='sponsors'>
                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">SPONSORS</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-4 mx-auto mt-12 sm:gap-12 sm:flex-row sm:max-w-7xl'>
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
                </div>
            </div>
        </>
    )
}