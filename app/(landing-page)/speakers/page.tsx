import React from 'react'
import Speakers2025 from '../../../components/2024Speakers'
import Speakers2026 from '../../../components/Speakers2026'

function page() {
  return (
    <div>
      <div className="pt-16 bg-white">
        <Speakers2026 />
      </div>
      <div id="speakers-2025" className="bg-gray-100 scroll-mt-24">
        <Speakers2025 />
      </div>
    </div>
  )
}

export default page