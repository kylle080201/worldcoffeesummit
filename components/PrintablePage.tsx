/* eslint-disable @next/next/no-img-element */
"use client"
import { PrinterIcon } from '@heroicons/react/24/outline'
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import ReactToPrint from 'react-to-print';
import Ebadge from './Ebadge'

interface buyerDataDto {
  _id: string;
  paymentIntentId: string;
  checkoutSessionId: string;
  createdAt: string;
  __v: number;
  companyName: string;
  country: string;
  email: string;
  event: string;
  firstName: string;
  jobTitle: string;
  lastName: string;
  mobileNumber: string;
  isEmailAccepted: boolean;
}


function PrintablePage({id}: {id: string}) {
  const [buyerData, setBuyerData] = useState<buyerDataDto>({} as buyerDataDto)
  const [origin, setOrigin] = useState('')
  const eBadge = useRef(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setOrigin(window.location.origin)
        }
    }, [])

  const getBuyerData = async () => {
    try {
        await fetch(`${origin}/api/get-registrant`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id
          }),
        }).then(response => response.json())
            .then(async data => {
                setBuyerData(data.res)
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
  }, [])

  return (
    <>
      <ReactToPrint
        trigger={() => {
          return (
            <button className='block w-full px-6 py-4 text-md font-semibold text-center text-white rounded-md mb-4 shadow-sm bg-lime-700 hover:bg-lime-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
              <span>
                <PrinterIcon className='inline-block w-7 h-7 mr-2 -mt-1' aria-hidden='true' />
              </span>
              Print
            </button>
          )
        }}
        content={() => eBadge.current}
        documentTitle='WCS 2023 E-badge'
        pageStyle={`@page {
          size: A4;
          margin: 0;
        }`}
      />
      {Object.keys(buyerData).length != 0 ?
        <div ref={eBadge} className="justify-self-center mx-auto border w-[21cm] h-[29.7cm] p-4">
          <div className='flex h-1/3'>
            <div className='border-b-2 border-dashed border-gray-700 p-4 w-1/2'>
              <div className='text-center font-bold text-lg w-full min-w-full h-full min-h-full'>
                <div className='pt-24'> 
                  This is your personal entry badge for
                </div>
                <div className='mt-2'>
                  World Coffee Summit 2023
                </div>
              </div>
            </div>
            <div className='border-b-2 border-l-2 border-dashed border-gray-700 p-4 w-1/2'>
              <div className='text-left font-bold text-lg'>
              <div className='mt-8'> 
                  For quick and easy access to Innovation Zero 2023 please:
                </div>
                <div className='mt-2'>
                  - Print this e-badge to A4
                </div>
                <div className='mt-2'>
                  - Fold along the dotted line
                </div>
                <div className='mt-2'>
                  - Bring along to the event
                </div>
                <div className='mt-2'>
                  - A lanyard will be provided at the entrance
                </div>
              </div>
            </div>
          </div>

          <div className='flex h-1/3'>
            <div className='border-b-2 border-dashed border-gray-700 p-4 w-1/2'>
              <div className='text-center font-bold text-xl w-full min-w-full h-full min-h-full'>
                <div className='flex justify-center mx-auto'> 
                  <Image
                    src='https://worldcoffeealliance.com/wp-content/uploads/2023/05/world-coffee-summit-high-resolution-logo-color-on-transparent-background.png'
                    alt='WCS 2023'
                    width={200}
                    height={200}
                  />
                </div>
                <div className='mt-4 font-medium capitalize'>
                  {buyerData.firstName} {buyerData.lastName}
                </div>
                <div className='font-medium'>
                  {buyerData.jobTitle}
                </div>
                <div className='font-medium'>
                  {buyerData.companyName}
                </div>
                <div className='mt-4'>
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://www.worldcoffeesummit.net/pdf/${buyerData._id}`}
                    alt='QR Code badge'
                    width={75}
                    height={75}
                    className='mx-auto'
                  />
                </div>
                <div className='italic font-normal mt-4'>
                  {buyerData.event === 'Summit' ? 'Summit Delegate' : 'Exhibition Visitor'}
                </div>
              </div>
            </div>
            <div className='border-b-2 border-l-2 border-dashed border-gray-700 p-4 w-1/2'>
              <div className='text-center font-bold text-xl w-full min-w-full h-full min-h-full'>
                <div className='flex justify-center mx-auto'> 
                  <Image
                    src='https://worldcoffeealliance.com/wp-content/uploads/2023/05/world-coffee-summit-high-resolution-logo-color-on-transparent-background.png'
                    alt='WCS 2023'
                    width={200}
                    height={200}
                  />
                </div>
                <div className='mt-4 font-medium capitalize'>
                  {buyerData.firstName} {buyerData.lastName}
                </div>
                <div className='font-medium'>
                  {buyerData.jobTitle}
                </div>
                <div className='font-medium'>
                  {buyerData.companyName}
                </div>
                <div className='mt-4'>
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://www.worldcoffeesummit.net/pdf/${buyerData._id}`}
                    alt='QR Code badge'
                    width={75}
                    height={75}
                    className='mx-auto'
                  />
                </div>
                <div className='italic font-normal mt-4'>
                  {buyerData.event === 'Summit' ? 'Summit Delegate' : 'Exhibition Visitor'}
                </div>
              </div>
            </div>
          </div>

          <div className='flex h-1/3'>
            <div className='border-dashed border-gray-700 p-4 w-1/2'>
              <div className='text-center font-bold text-lg w-full min-w-full h-full min-h-full'>
                <div className='pt-12'> 
                  This is your personal entry badge for
                </div>
                <div className='mt-2'>
                  World Coffee Summit 2023
                </div>
              </div>
            </div>
            <div className='border-l-2 border-dashed border-gray-700 p-4 w-1/2'>
              <div className='text-left font-bold text-lg'>
              <div className=''> 
                  For quick and easy access to Innovation Zero 2023 please:
                </div>
                <div className='mt-2'>
                  - Print this e-badge to A4
                </div>
                <div className='mt-2'>
                  - Fold along the dotted line
                </div>
                <div className='mt-2'>
                  - Bring along to the event
                </div>
                <div className='mt-2'>
                  - A lanyard will be provided at the entrance
                </div>
              </div>
            </div>
          </div>
        </div>
      : <div>loading...</div>}
    </>
      
  )
}

export default PrintablePage
