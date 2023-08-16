import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Exhibitors() {

    const ETHIOPIA = 'https://worldcoffeealliance.com/wp-content/uploads/2023/08/Flag_of_Ethiopia.png'
    const UGANDA = 'https://worldcoffeealliance.com/wp-content/uploads/2023/08/Flag_of_Uganda.png'
    const BURUNDI = 'https://worldcoffeealliance.com/wp-content/uploads/2023/08/Flag_of_Burundi.png'
    const TANZANIA = 'https://worldcoffeealliance.com/wp-content/uploads/2023/08/Flag_of_Tanzania.png'
    const KENYA = 'https://worldcoffeealliance.com/wp-content/uploads/2023/08/Flag_of_Kenya.png'

    const exhibitors = [
        {
            name: 'Oromia Coffee Farmers Cooperative Union (OCFCU)',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2023/08/Oromia-Coffee-Farmers-Cooperative-Union-OCFCU.png',
            flag: ETHIOPIA
        },
        {
            name: 'Yirgacheffe Coffee Farmers Cooperative Union (YCFCU) ',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2023/08/Yirgacheffe-Coffee-Farmers-Cooperative-Union-YCFCU.png',
            flag: ETHIOPIA
        },
        {
            name: 'Dahab Specialty Farm',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2023/08/Dahab-Specialty-farm.jpeg',
            flag: ETHIOPIA
        },
        {
            name: 'Berhanu Speciality Coffee',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2023/08/Berhanu-Speciality-Coffee.png',
            flag: ETHIOPIA
        },
        {
            name: 'ESET COFFEE',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2023/08/ESET-COFFEE.jpg',
            flag: ETHIOPIA
        },
        {
            name: 'Mountain Harvest',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2023/08/Mountain-Harvest.jpg',
            flag: UGANDA
        },
        {
            name: 'Kahowa Link Company (Kalico)',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2023/08/Kahowa-Link-Company-Kalico.png',
            flag: BURUNDI
        },
        {
            name: 'Tanin Global',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2023/08/Tanin-Global.png',
            flag: TANZANIA
        },
        {
            name: 'Megnacio Company Ltd',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2023/08/Megnacio-Company-Ltd.jpg',
            flag: TANZANIA
        },
        {
            name: 'Rumani Agencies Ltd',
            imgSrc: 'https://worldcoffeealliance.com/wp-content/uploads/2023/08/Rumani-Agencies-Ltd-1.png',
            flag: KENYA
        },
    ]
    return (
        <>
            <div className='w-full py-20  bg-white' id='partners'>
                <div className='mb-20'>
                    <div className="max-w-2xl mx-auto text-center">
                        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">EXHIBITORS</p>
                    </div>
                    <div className='grid px-4 lg:px-0 items-center justify-center grid-cols-1 gap-2 mx-auto mt-12 md:grid-cols-4 sm:gap-4 sm:flex-row'>
                        {exhibitors.map((exhibitor) => (
                            <div key={exhibitor.imgSrc} className='flex flex-col w-full border-2 border-lime-700 rounded-md flex-shrink-0 h-[32rem] p-4'>
                                <div className='p-2 border-b-2 border-lime-700 h-[26rem] items-center flex'>
                                    <Image className='h-max w-max mx-auto my-auto object-contain' width={130} height={130} src={exhibitor.imgSrc} alt={exhibitor.name}>
                                    </Image>
                                </div>
                                <div className='flex flex-col md:flex-row items-center text-center md:text-left justify-between h-[6rem]'>
                                    <p className='my-auto w-3/4 font-semibold mt-4'>{exhibitor.name}</p>
                                    <div className='flex items-end w-1/4 mt-2 md:mt-0'>
                                        <Image className='h-max w-max mx-auto my-auto object-contain' width={50} height={50} src={exhibitor.flag} alt={exhibitor.name}>
                                        </Image>
                                    </div>
                                    
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>
        </>
    )
}