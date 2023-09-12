import Image from 'next/image'
import React from 'react'

function CuppingTeam() {
  const cuppingTeam = [
    {
      name: 'Julian Loayza',
      role: 'Head Trainer',
      company: 'Beantale Coffee',
      imgUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2023/09/Julian_Loayza-scaled.jpeg',
      link: 'https://beantale.com/'
    },
    {
      name: 'Jon Townsend',
      role: 'Director & Founder',
      company: 'The Institute of Coffee',
      imgUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2023/09/img_0510-scaled.jpg',
      link: 'https://www.linkedin.com/in/ACoAAA0VNigBs68hHeF7MpmzXLLWIObCsptz6l4?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAA0VNigBs68hHeF7MpmzXLLWIObCsptz6l4'
    },
    {
      name: 'Gayan Munaeeera',
      imgUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2023/09/Gayan-Munaeeera.jpeg'
    },
    {
      name: 'Joshua Fletcher',
      imgUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2023/09/Joshua-Fletcher.jpeg'
    },
    {
      name: 'Sterling Weston',
      imgUrl: 'https://worldcoffeealliance.com/wp-content/uploads/2023/09/Sterling-Weston.jpeg'
    },
  ]
  return (
    <div className='px-12 py-20 bg-gray-100 sm:px-2'>
      <div className='mx-auto sm:content-center'>
        <h2 className="text-4xl font-bold text-center tracking-tight">CUPPING TEAM</h2>
        <ul
            role="list"
            className="grid grid-cols-1 mx-auto mt-20 max-w-7xl gap-x-6 gap-y-20 md:grid-cols-4 lg:gap-x-8"
        >
          {cuppingTeam.map((person) => (
            person.link ?
            <a key={person.name} href={person.link} target='_blank'>
              <li className='flex flex-col gap-6 hover:cursor-pointer'>
                {person.imgUrl ?
                <div className='flex-shrink-0 mx-auto'>
                  <Image className="rounded-md w-[30rem]" src={person.imgUrl} alt={person.name} width={160} height={160} />
                </div> : null }
                <div className="flex mx-auto text-center">
                    <div>
                        <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{person.name}</p>
                        {person.role ? <p className="leading-7 text-gray-700 text-md">{person.role}</p> : null}
                        {person.company ? <p className="font-semibold leading-7 text-gray-900 text-md">{person.company}</p> : null}
                    </div>
                </div>
              </li>
            </a> : 
            <li key={person.name} className='flex flex-col gap-6'>
            {person.imgUrl ?
            <div className='flex-shrink-0 mx-auto'>
              <Image className="rounded-md w-[30rem]" src={person.imgUrl} alt={person.name} width={160} height={160} />
            </div> : null }
            <div className="flex mx-auto text-center">
                <div>
                    <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{person.name}</p>
                    {person.role ? <p className="leading-7 text-gray-700 text-md">{person.role}</p> : null}
                    {person.company ? <p className="font-semibold leading-7 text-gray-900 text-md">{person.company}</p> : null}
                </div>
            </div>
          </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CuppingTeam