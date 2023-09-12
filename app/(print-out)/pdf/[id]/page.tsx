import React from 'react'
import PrintOut from '../../../../components/PrintOut'
import PrintablePage from '../../../../components/PrintablePage'
import { PrinterIcon } from '@heroicons/react/24/outline'
import ReactToPrint from 'react-to-print'

function page({ params }: { params: { id: string } }) {
    return (
        // <PrintOut />
        <div className='py-20 max-w-5xl mx-auto'>
            <div className='py-20 max-w-7xl mx-auto'>
                <PrintablePage id={params.id} />
            </div>
            
        </div>
        
    )
}

export default page