import React from 'react'
import Image from 'next/image'

function Attendees2023() {
  return (
    <div className='w-full py-24 md:px-0 px-4 flex flex-col gap-12 bg-gray-100'>
      <div className='flex w-full justify-center'>
        <h2 className="text-4xl font-bold tracking-tight text-center md:text-left">2023 ATTENDEES INCLUDE:</h2>
      </div>
      <div className='flex items-center p-2 max-w-7xl mx-auto'>
        <div className='p-2 rounded-md'>
          <img
            src="https://worldcoffeealliance.com/wp-content/uploads/2024/05/2023-ATTENDEES-INCLUDE-scaled.jpg"
            alt="2023 Attendees"
            className="w-full h-full mx-auto rounded-lg shadow-lg bg-white/5"
          />
        </div>
      </div>
    </div>
  )
}

export default Attendees2023