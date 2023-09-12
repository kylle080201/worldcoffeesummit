import React from 'react'

function ExhibitionAgenda() {
  return (
    <>
        <div id="agenda" className='py-20 max-w-5xl mx-auto'>
              <h2 className="text-4xl font-bold text-center tracking-tight">EXHIBITION PROGRAMME</h2>
              {/* agenda 1 */}
              <div className='mt-12'>
                  <div className='w-full grid grid-cols-10 gap-x-4 h-max '>
                      <div className='w-full text-white font-medium col-span-3 xl:col-span-2 justify-center bg-lime-700 mx-auto flex items-center px-6'>
                          9:00 am
                      </div>
                      <div className='w-full text-white font-medium col-span-7 xl:col-span-8 bg-lime-700 mx-auto flex items-center px-6 py-2'>
                          Registration
                      </div>
                  </div>
              </div>
              
              {/* agenda 2 */}
              <div className='mt-8'>
                  <div className='w-full grid grid-cols-10 gap-x-4 h-max '>
                      <div className='w-full text-white font-medium col-span-3 xl:col-span-2 justify-center bg-lime-700 mx-auto flex items-center px-6'>
                          10:00 am - 11:00 am
                      </div>
                      <div className='w-full text-white font-medium col-span-7 xl:col-span-8 bg-lime-700 mx-auto flex items-center px-6 py-2'>
                          Morning Cupping Session
                      </div>
                  </div>
              </div>

              {/* agenda 3 */}
              <div className='mt-8'>
                  <div className='w-full grid grid-cols-10 gap-x-4 h-max '>
                      <div className='w-full text-white font-medium col-span-3 xl:col-span-2 justify-center bg-lime-700 mx-auto flex items-center px-6'>
                          3:00 pm to 4:00 pm
                      </div>
                      <div className='w-full text-white font-medium col-span-7 xl:col-span-8 bg-lime-700 mx-auto flex items-center px-6 py-2'>
                          Afternoon Cupping Session
                      </div>
                  </div>
              </div>

              {/* agenda 4 */}
              <div className='mt-8'>
                  <div className='w-full grid grid-cols-10 gap-x-4 h-max '>
                      <div className='w-full text-white font-medium col-span-3 xl:col-span-2 justify-center bg-gray-600 mx-auto flex items-center px-6'>
                          5:00 pm
                      </div>
                      <div className='w-full text-white font-medium col-span-7 xl:col-span-8 bg-gray-600 mx-auto flex items-center px-6 py-2'>
                          Exhibition Ends
                      </div>
                  </div>
              </div>
        </div>
    </>
  )
}

export default ExhibitionAgenda