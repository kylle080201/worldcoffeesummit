import { Transition, Dialog } from '@headlessui/react'
import Image from 'next/image'
import React, { Fragment, SetStateAction } from 'react'
import { Speaker } from './WebinarSpeakers'

type Props = {
  openModal: boolean,
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>,
  speaker: Speaker,
}

export default function SpeakerBioModal({ openModal, setOpenModal, speaker }: Props) {
  return (
    <Transition.Root show={openModal} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpenModal}>
          <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
          >
              <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
                  <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                      enterTo="opacity-100 translate-y-0 sm:scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                      leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                      <Dialog.Panel className="relative px-4 pt-5 pb-4 text-left transition-all transform bg-white rounded-lg shadow-xl h-max sm:my-8 sm:w-full sm:max-w-4xl sm:p-6">
                          <div className='flex flex-col h-max'>
                              <div className='flex-shrink-0 mx-auto'>
                                  <Image className="rounded-md w-[20rem] " src={speaker.imageUrl} alt={speaker.name} width={160} height={160} />
                              </div>
                              <div className="flex mx-auto text-center">
                                  <div>
                                      <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 md:text-2xl">{speaker.name}</p>
                                      <p className="leading-7 text-gray-700 text-md">{speaker.role}</p>
                                      <p className="font-semibold leading-7 text-gray-900 text-md">{speaker.company}</p>
                                  </div>
                              </div>
                          </div>
                          <div className="overflow-auto text-sm sm:text-md sm:mt-5 max-h-60">
                              {speaker.bio.map((sentence, index) => (
                                <p key={index} className="mt-2 text-gray-600">
                                    {sentence}
                                </p>
                              ))}
                          </div>
                          <div className="mt-5 sm:mt-6">
                              <button
                                  type="button"
                                  className="inline-flex justify-center max-w-5xl px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700"
                                  onClick={() => setOpenModal(!openModal)}
                              >
                                  Back
                              </button>
                          </div>
                      </Dialog.Panel>
                  </Transition.Child>
              </div>
          </div>
      </Dialog>
    </Transition.Root >
  )
}