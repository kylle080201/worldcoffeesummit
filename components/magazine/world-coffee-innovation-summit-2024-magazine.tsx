"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'

function DownloadWorldCoffeeInnovationSummit2024() {
  useEffect(() => {
    const downloadTimeout = setTimeout(() => {
      window.open(
        'https://worldcoffeealliance.com/wp-content/uploads/2024/10/World-Coffee-Magazine-Issue-2-2024.pdf',
        '_blank'
      );
    }, 1000); // Add a slight delay to ensure rendering

    return () => clearTimeout(downloadTimeout); // Cleanup timeout on unmount
  }, []);

  return (
    <>
      <div className='py-12 sm:py-20'>
        <div className='px-12 sm:px-2 max-w-7xl md:px-0 mx-auto bg-gray-100 rounded-md shadow-md '>
          <div className='mx-auto sm:content-center px-12'>
            <div className='mx-auto sm:content-center max-w-xl py-20'>
              <h1 className='font-bold text-xl'>Thank you for your interest in the <span className='text-lime-600'>World Coffee Magazine 2024 Issue 2</span>.</h1>
              <h2 className='text-md mt-4'>
                Please kindly wait for the file to open. If the file did not open, click <a href='https://worldcoffeealliance.com/wp-content/uploads/2024/10/World-Coffee-Magazine-Issue-2-2024.pdf' target='_blank' className='underline font-medium'>here</a>.
              </h2>
              <h2 className='text-md mt-4'>
                Meanwhile, please follow us on <Link target='_blank' href={'https://www.linkedin.com/company/worldcoffeealliance/'} className='underline font-medium'>LinkedIn</Link> and <Link target='_blank' href={'https://twitter.com/WCoffeeAlliance'} className='underline font-medium'>X (Twitter)</Link>, and stay tuned with the updates.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DownloadWorldCoffeeInnovationSummit2024;
