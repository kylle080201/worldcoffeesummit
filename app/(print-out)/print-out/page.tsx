import { redirect } from 'next/navigation';
import React from 'react'
import Ebadge from '../../../components/Ebadge'


function page({ searchParams }: any) {
    if (Object.keys(searchParams).length === 0) {
        redirect('/')
    }
    const checkoutSessionId = searchParams.session_id;

    return (
        <>
            <Ebadge checkoutSessionId={checkoutSessionId} />
        </>
    )
}

export default page