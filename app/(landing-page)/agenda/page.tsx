import React from 'react'
import Agenda from '../../../components/Agenda'
import KeyThemes from '../../../components/KeyThemes'

function page() {
  return (
    <div>
      <div className='py-20'>
        <KeyThemes />
      </div>
      <Agenda />
    </div>
  )
}

export default page