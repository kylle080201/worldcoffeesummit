"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'

export default function BackButton() {
    const router = useRouter()
    return (
        <>
            <button
                type='button'
                onClick={() => router.back()}
                className='text-gray-600 mt-12 hover:text-gray-900 relative inline-flex items-center gap-x-1.5 rounded-md px-3 py-2 text-md sm:text-xl font-semibold'>
                <ArrowLeftIcon className="w-5 h-5" aria-hidden="true" />
                Back
            </button>
        </>
    )
}