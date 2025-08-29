import React from 'react';
import Image from 'next/image'; 
import picture1 from '../images/audience.png';
import picture2 from '../images/Picture2.png';
import picture3 from '../images/Picture3.png';

function WhoIsInTheRoom() {
  return (
    <>
      <div className="w-full py-16 ">
        <p className="text-3xl font-bold text-center mb-8">{`WHO'S IN THE ROOM`}</p>

        <div className="flex flex-col lg:flex-row items-center justify-center max-w-screen-xl mx-auto px-4">
          {/* Image 1 */}
          <div className="w-full lg:w-1/2 p-2">
            <div className="relative w-full h-[500px]">
              <Image
                src={picture1}
                alt="Who's in the Room Left"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </div>

          {/* Vertical Divider - only shows on large screens */}
          <div className="hidden lg:block h-[400px] w-px bg-gray-400 mx-4" />

          {/* Image 2 */}
          <div className="w-full lg:w-1/2 p-2 mt-6 lg:mt-0">
            <div className="relative w-full h-[500px]">
              <Image
                src={picture3}
                alt="Who's in the Room Right"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhoIsInTheRoom;
