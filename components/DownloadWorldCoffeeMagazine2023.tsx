import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function DownloadWorldCoffeeMagazine2023() {
  return (
    <>

    <div className='py-12 sm:py-20'>
      <div className='px-12 sm:px-2 max-w-7xl md:px-0 mx-auto bg-gray-100 rounded-md shadow-md '>
        <div className='mx-auto sm:content-center px-12'>
          <div className='mx-auto sm:content-center max-w-xl py-20'>
              <h1 className='font-bold text-xl'>Thank you for your interest in the <span className='text-lime-600'>World Coffee Magazine 2023</span>.</h1>
              <h2 className='text-md mt-4'>
                We are currently assessing the information you have submitted, and we will send you a digital copy of the World Coffee Magazine 2023 upon approval.
              </h2>
              <h2 className='text-md mt-4'>
                Meanwhile, please follow us on <Link target='_blank' href={'https://www.linkedin.com/company/worldcoffeealliance/'} className='underline font-medium'>LinkedIn</Link> and <Link target='_blank' href={'https://twitter.com/WCoffeeAlliance'} className='underline font-medium'>X (Twitter)</Link>, and stay tuned with the updates.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default DownloadWorldCoffeeMagazine2023