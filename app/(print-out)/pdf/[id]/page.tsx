import React from 'react'
import PrintOut from '../../../../components/PrintOut'
import PrintablePage from '../../../../components/PrintablePage'
import { PrinterIcon } from '@heroicons/react/24/outline'

function page({ params }: { params: { id: string } }) {
    return (
        // <PrintOut />
        <div>
            <button className='block w-full px-6 py-4 text-md font-semibold text-center text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
              <span>
                <PrinterIcon className='inline-block w-7 h-7 mr-2 -mt-1' aria-hidden='true' />
              </span>
              Print
            </button>
            <div className='py-20 max-w-7xl mx-auto'>
                <PrintablePage id={params.id} />
            </div>
            
        </div>
        
    )
}

export default page