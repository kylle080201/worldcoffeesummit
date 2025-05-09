import React from 'react'
import Image from 'next/image'; 
import picture1 from '../images/Picture4.png';
import picture2 from '../images/Picture2.png';

function WhoIsInTheRoom() {
  return (

    <>   
    <div className="w-full py-16"  style={{ backgroundColor: '#F3F4F6' }}>
     <p className="text-3xl font-bold text-center" style={{ backgroundColor: '#F3F4F6' }}> {`WHO'S IN THE ROOM`}</p>
 <div className="flex flex-wrap -mx-4">

  <div className="w-full md:w-full lg:w-1/2 xl:w-1/2 px-4">
  <div className="mt-6 relative w-full h-[500px]">
        <Image
          src={picture1}
          alt="Who's in the Room Full Width"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
  </div>
  <div className="w-full md:w-full lg:w-1/2 xl:w-1/2 px-4 mt-3">
  <div className="mt-6 relative w-full h-[500px]">
        <Image
          src={picture2}
          alt="Who's in the Room Full Width"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
 </div>
</div>
</div>

      {/* Full-Width Image Section */}
      {/* <div className="mt-6 relative w-full h-[800px]">
        <Image
          src={picture}
          alt="Who's in the Room Full Width"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div> */}
    </>
  )
}

export default WhoIsInTheRoom;
