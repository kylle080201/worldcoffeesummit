import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function SummitInTheNews() {
  return (
    <div className='w-full py-24 md:px-0 px-12 bg-gray-100'>
      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold leading-10 tracking-tight text-gray-900">World Coffee Innovation Summit in The News</h2>
        <div className='flex md:flex-row flex-col gap-8 '>
          <div className="flex w-full md:w-[500px] h-full mt-12">
            <div className="testimonial-item bg-white shadow rounded hover:shadow-lg">
              <div className='p-8 flex flex-col gap-8 h-full'>
                <div>
                  <p className="font-bold text-2xl tracking-tight text-gray-900">BLOOMBERG</p>
                  <p>The coffee industry navigates tracing beans from global farms to European cafes amidst new sustainability regulations, a complex challenge. <Link target={'_blank'} className='underline' href={'https://www.bloomberg.com/news/newsletters/2023-09-15/global-food-roundup-coffee-world-prepares-for-eu-deforestation-rules'}>Read the whole article here</Link></p>
                </div>
                <div className='mx-auto'>
                  <Image className='rounded-md' src={'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ilVBv6U8Ks7I/v1/1200x800.jpg'} alt={''} width={400} height={400} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full md:w-[500px] h-full mt-12">
            <div className="testimonial-item bg-white shadow rounded hover:shadow-lg">
              <div className='p-8 flex flex-col gap-8'>
                <div>
                  <p className="font-bold text-2xl tracking-tight text-gray-900">REUTERS</p>
                  <p>The European Commission said on Wednesday that financial institutions are not backing the EU&apos;s new deforestation law, which has faced a backlash from producing countries concerned it will create unfair trade barriers. <Link target={'_blank'} className='underline' href={'https://www.reuters.com/sustainability/land-use-biodiversity/eu-says-financial-firms-unwilling-support-new-deforestation-law-2023-09-13/'}>Read the whole article here</Link></p>
                </div>
                <div className='mx-auto'>
                  <Image className='rounded-md' src={'https://www.reuters.com/resizer/v2/VCQKHC2L3FJBNBLRCZKBBLY3AA.jpg?auth=ea5a83ff4e5194404acf96b7ca8e97e38230663f6ce87cd2febd52e7c4b4ad47&width=640&quality=80'} alt={''} width={400} height={400} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full md:w-[500px] h-full mt-12">
            <div className="testimonial-item bg-white shadow rounded hover:shadow-lg">
              <div className='p-8 flex flex-col gap-8 h-full'>
                <div>
                  <p className="font-bold text-2xl tracking-tight text-gray-900">AFRICA INTELLIGENCE</p>
                  <p>Africa&apos;s largest coffee producer is set to bear the brunt of Brussels&apos;s new traceability directives. Consequently, it has begun to turn its attention to India and China. <Link target={'_blank'} className='underline' href={'https://www.africaintelligence.com/eastern-africa-and-the-horn/2023/12/06/new-eu-rules-prompt-coffee-sector-to-seek-fresh-markets,110116331-art'}>Read the whole article here</Link></p>
                </div>
                <div className='mx-auto'>
                  <Image className='rounded-md' src={'https://www.africaintelligence.com/img/images/pictoog/picto-AIA-og.png'} alt={''} width={400} height={400} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SummitInTheNews