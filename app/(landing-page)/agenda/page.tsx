import React from 'react'
import Agenda from '../../../components/Agenda'
import KeyThemes from '../../../components/KeyThemes'

function page() {
  return (
    <>
      <KeyThemes showNavigator={false} compactTop compactBottom />
      <Agenda />
    </>
  )
}
export default page
