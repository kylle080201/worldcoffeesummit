import React from 'react'
import Agenda2026 from '../../../components/Agenda2026'
import KeyThemes from '../../../components/KeyThemes'

function page() {
  return (
    <>
      <Agenda2026 />
      <KeyThemes showNavigator={false} compactTop compactBottom />
    </>
  )
}
export default page
