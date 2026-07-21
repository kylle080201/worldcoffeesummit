import React from 'react'
import Agenda from '../../../components/Agenda'
import Agenda2026 from '../../../components/Agenda2026'
import KeyThemes from '../../../components/KeyThemes'

function page() {
  return (
    <>
      <KeyThemes showNavigator={false} compactTop compactBottom />
      <Agenda2026 />
      <Agenda />
    </>
  )
}
export default page
