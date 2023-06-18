import { redirect } from 'next/navigation';
import React from 'react'
import Ebadge from '../../../components/Ebadge'


function page({ searchParams }: any) {
    const checkoutSessionId = searchParams.session_id;

    return (
        <>
            <Ebadge checkoutSessionId={checkoutSessionId} />
        </>
    )
}

export default page