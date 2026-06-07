import React from 'react'
import Agenda from '../../../components/Agenda'
import KeyThemes from '../../../components/KeyThemes'

function page() {
  return (
    <>
      <KeyThemes showNavigator={false} compactTop />
      <Agenda />
    </>
  )
}
export default page
