import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function DownloadWorldCoffeeMagazine2023() {
  return (
    <>

    <div className='py-12 sm:py-20'>
      <div className='px-12 sm:px-2 max-w-7xl md:px-0 mx-auto bg-gray-100 rounded-md shadow-md '>
        <div className='mx-auto sm:content-center px-12 py-8'>
          <div className='mx-auto sm:content-center px-12'>
            <h1 className='font-bold text-xl mb-4 text-center'>Click the link below to download the magazine</h1>
              <div className='flex gap-4 items-center mb-4 justify-center'>
                <Image src='https://worldcoffeealliance.com/wp-content/uploads/2023/09/pdf.png' width={50} height={50} alt='PDF' />
                <div>
                  <Link className='underline font-medium' target='_blank' href='https://worldcoffeealliance.com/wp-content/uploads/2023/09/World-Coffee-Magazine-2023.pdf'>world-coffee-magazine-2023.pdf</Link>
                </div>
              </div>
              <div className='justify-center mx-auto flex flex-col'>
                <h3 className='font-medium text-gray-600 text-center'>Preview</h3>
                <div className='mx-auto'>
                  <Image src='https://worldcoffeealliance.com/wp-content/uploads/2023/09/World-Coffee-Magazine-2023-01.png' height={50} width={300} alt='Magazine Preview' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default DownloadWorldCoffeeMagazine2023