import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function DownloadResources() {
  return (
    <>
      <div className='py-20'>
        <div className='text-center mx-auto mt-12 sm:mt-20'>
          <h1 className='font-bold text-lg sm:text-2xl mb-4'>RESOURCES</h1>
        </div>
        <div className='px-12 sm:px-2 max-w-7xl md:px-0 mx-auto bg-gray-100 rounded-md shadow-md'>
          <div className='mx-auto sm:content-center px-12 py-8'>
            <h1 className='font-bold text-lg mb-4'>World Coffee Magazine 2023</h1>
            <Link href={'/resources/form'} className="flex max-w-[10rem] my-4 justify-center px-3 py-2 text-sm font-semibold text-white border border-transparent rounded-md shadow-sm bg-lime-700 hover:cursor-pointer hover:bg-lime-900 focus:outline-none">
              Download
            </Link>
            <Image src='https://worldcoffeealliance.com/wp-content/uploads/2023/09/World-Coffee-Magazine-2023-01.png' height={50} width={300} alt='Magazine Preview' />
          </div>
        </div>
      </div>
    </>
  )
}

export default DownloadResources