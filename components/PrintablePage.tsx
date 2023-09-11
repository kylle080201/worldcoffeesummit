"use client"
import { PrinterIcon } from '@heroicons/react/24/outline'
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import ReactToPrint from 'react-to-print';
import { json } from 'stream/consumers'

function PrintablePage({id}: {id: string}) {
  const [buyerData, setBuyerData] = useState({})
  const [origin, setOrigin] = useState('')

    useEffect(() => {
        if (typeof window !== "undefined") {
            setOrigin(window.location.origin)
        }
    }, [])

  const getBuyerData = async () => {
    try {
        await fetch(`/api/get-registrant`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id
          }),
        }).then(response => response.json())
            .then(async data => {
                setBuyerData(data)
            }).catch(error => {
                console.log(JSON.stringify(error));
            });
    } catch (error) {
        alert(error)
    }
  }

  useEffect(() => {
    if(buyerData) {
      getBuyerData()
    }
  }, [buyerData])
  
  return (
      <div style={{height: '842px', width: '595px'}} className="grid grid-cols-2 justify-self-center mx-auto border p-4 border-gray-900">
        <div className=' border-b-2 h-full'>hello {id}</div>
        <div className=' border-b-2 border-l-2 h-full'>world</div>

        <div className=' border-b-2 h-full'>hello</div>
        <div className=' border-b-2 border-l-2 h-full'>world</div>

        <div className=' h-full'>hello</div>
        <div className=' border-l-2 h-full'>world</div>
      </div>
  )
}

export default PrintablePage
