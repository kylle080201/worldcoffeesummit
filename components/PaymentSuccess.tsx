"use client"
import React, { useEffect, useState } from 'react'
import 'crypto-js/enc-utf8';
import QRCode from "qrcode"

interface IResponseData {
    res: {
        checkoutSessionId: string,
        companyName: string,
        createdAt: string,
        email: string,
        firstName: string,
        jobTitle: string,
        lastName: string,
        paymentIntentId: string,
        _id: string,
    }
}

function PaymentSuccess({ checkoutSessionId, decryptedFormData }: any) {
    const [res, setRes] = useState<IResponseData>(Object)
    const [src, setSrc] = useState<string>('')
    const [origin, setOrigin] = useState('')

    useEffect(() => {
        if (typeof window !== "undefined") {
            setOrigin(window.location.origin)
        }
    }, [])

    const patchData = async () => {
        if (origin) {
            try {
                await fetch(`${origin}/api/payment-success`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(
                        {
                            checkoutSessionId,
                            decryptedFormData
                        }
                    )
                }).then(response => response.json())
                    .then(async data => {
                        setRes(data)
                    }).catch(error => {
                        console.log(error);
                    });
            } catch (error: any) {
                console.log(error)
            }
        }
    }

    if (Object.keys(res).length === 0) {
        patchData()
    }

    if (res) {
        const data = JSON.stringify(res?.res?._id);
        if (data) {
            QRCode.toDataURL(data).then(setSrc)
        }
    }

    return (
        <>
            <div>Hello</div>
            {src ? <img className='w-60' src={src} /> : <span>Generating QR Code...</span>}
        </>
    )
}

export default PaymentSuccess
