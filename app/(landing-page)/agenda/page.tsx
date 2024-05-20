import React from 'react'
import Agenda from '../../../components/Agenda'
import KeyThemes from '../../../components/KeyThemes'

function page() {
  return (
    <div>
      <div className='py-20'>
        <KeyThemes />
      </div>
      <div className='flex w-full justify-center py-20'>
        <h2 className="text-4xl">Full Agenda Coming Soon…</h2>
      </div>
      {/* <Agenda /> */}
    </div>
  )
}

export default page