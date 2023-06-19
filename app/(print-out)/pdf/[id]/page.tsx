import React from 'react'
import PrintOut from '../../../../components/PrintOut'

function page({ params }: { params: { id: string } }) {
    return (
        <PrintOut />
    )
}

export default page