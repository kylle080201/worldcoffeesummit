"use client"
import React, { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import getStripe from '../get_stripe'
import { useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import BackButton from './BackButton'
import Link from 'next/link'

const RegisterForm = () => {
    const searchParams = useSearchParams()
    const [isAgree, setIsAgree] = useState(false)
    const [origin, setOrigin] = useState('')
    const [openTermsAndConditions, setOpenTermsAndConditions] = useState(false)
    const [openLetterOfInvitation, setOpenLetterOfInvitation] = useState(false)

    useEffect(() => {
        if (typeof window !== "undefined") {
            setOrigin(window.location.origin)
        }
    }, [])

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: any) => {
        const { email, confirmEmail } = data;
        if (data) {
            if (email === confirmEmail) {
                redirectToCheckout(data)
            }
        }
    }

    const redirectToCheckout = async (formData: any) => {
        const line_items = JSON.parse(searchParams?.get('line_items')!)[0];
        if (line_items) {
            try {
                await fetch('/api/checkout-sessions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(
                        {
                            line_items,
                            formData,
                            origin
                        }
                    )
                }).then(response => response.json())
                    .then(async data => {
                        const stripe = await getStripe();
                        await stripe?.redirectToCheckout({ sessionId: data?.response?.retrievedSession?.id })
                    }).catch(error => {
                        console.log(error);
                    });
            } catch (error) {
                alert(error)
            }
        }
    }

    const watchEmail = watch('email');
    return (
        <>
            <div className="z-40 py-12 bg-white sm:py-20">
                <div className="max-w-screen-md px-4 mx-auto mb-12">
                    <h2 className="mb-4 text-4xl font-bold tracking-tight text-center text-gray-900 dark:text-white"><span className='text-lime-700'>Personal</span> Information</h2>
                    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex gap-4'>
                            <div className='w-1/2'>
                                <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First Name</label>
                                <input {...register('firstName')} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required />
                            </div>
                            <div className='w-1/2'>
                                <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last Name</label>
                                <input {...register('lastName')} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="companyName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company</label>
                            <input {...register('companyName')} className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required />

                        </div>

                        <div>
                            <label htmlFor="jobTitle" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Job Title</label>
                            <input {...register('jobTitle')} className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required />
                        </div>

                        <div className='flex gap-4'>
                            <div className='w-1/2'>
                                <label htmlFor="mobileNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mobile Number</label>
                                <input {...register('mobileNumber')} type='number' className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required />
                            </div>
                            <div className='w-1/2'>
                                <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Country</label>
                                <input {...register('country')} className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required />
                            </div>
                        </div>

                        <div className='flex gap-4'>
                            <div className='w-1/2'>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email Address</label>
                                <input {...register('email')} type='email' className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required />
                            </div>
                            <div className='w-1/2'>
                                <label htmlFor="confirmEmail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm Email Address</label>
                                <input {...register('confirmEmail', {
                                    validate: (value) => value === watchEmail,
                                })} type='email' className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required />
                                {errors.confirmEmail && errors.confirmEmail.type === 'validate' && <span className='text-red-700'>Emails do not match</span>}
                            </div>
                        </div>

                        <fieldset>
                            <div className="space-y-5">
                                <div className="relative flex items-start">
                                    <div className="flex items-center h-6">
                                        <input
                                            required
                                            onChange={() => (setIsAgree(!isAgree))}
                                            id="agree"
                                            aria-describedby="terms-and-conditions"
                                            name="agree"
                                            type="checkbox"
                                            className="w-4 h-4 border-gray-300 rounded text-lime-700 focus:ring-lime-700"
                                        />
                                    </div>
                                    <div className="ml-3 text-sm leading-6">
                                        <label htmlFor="agree" className="font-medium text-gray-900">
                                            I agree
                                        </label>
                                        <p id="comments-description" className="text-gray-500">
                                            By ticking this checkbox you agree to the <button type='button' onClick={() => { setOpenTermsAndConditions(!openTermsAndConditions) }} className='underline text-lime-700'>terms and conditions</button>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <div className="flex justify-end">
                            <input type="submit" className="flex justify-center px-3 py-2 text-sm font-semibold text-white border border-transparent rounded-md shadow-sm bg-lime-700 hover:cursor-pointer hover:bg-lime-900 focus:outline-none"
                            />
                        </div>
                    </form>
                    <BackButton />
                </div >

                {/* terms and conditions */}
                < Transition.Root show={openTermsAndConditions} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={setOpenTermsAndConditions}>
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
                                        <Dialog.Title className="py-4 font-semibold leading-6 text-gray-900 text-md sm:text-xl">
                                            Terms and Condition
                                        </Dialog.Title>
                                        <div className='overflow-auto max-h-80'>
                                            <div className="text-sm sm:mt-5">
                                                <p className="text-gray-600 ">
                                                    <span className='font-semibold'>Global Stratagem Group Ltd</span> is the registered owner of <span className='font-semibold'>World Coffee Alliance (WCA)</span> and organizer of <span className='font-semibold'>World Coffee Summit London</span> and <span className='font-semibold'>World Coffee Exhibition London</span>. By ticking this box (and any third party platform provider acting on our behalf) you consent to allow  us to use your personal information for analysing visitor traffic with a view to improving the event experience for event delegates.
                                                </p>
                                                <p className="mt-2 text-gray-600">
                                                    By registering,  your personal information will be shared with the exhibitor or sponsor to allow them to engage with you and provide some more information of what they offer, and what they can help you with in terms of solutions and services. Once registered, your full contact details will be shared directly with another attendee, sponsor or exhibitor and they may follow-up and use your details for marketing and networking purposes.
                                                </p>
                                                <p className="mt-2 text-gray-600">
                                                    For more information on how we use your data, please visit our <Link href="/privacy-policy" target='_blank' className='underline'>privacy policy</Link>.
                                                </p>

                                                <p className="mt-8 text-gray-600">
                                                    <span className='font-semibold'>1. PAYMENTS:</span> Delegates, Visitors and Sponsors/Exhibitors to World Coffee Summit & Exhibition London shall pay the full price upon clicking the registration button online at <Link href="www.worldcoffeesummit.net" target='_blank' className='underline'>www.worldcoffeesummit.net</Link>, and by ticking the box provided or in case of Sponsor and/or Exhibitor by signed contract agreement, hereby agrees and accepts the terms and conditions provided herein by Global Stratagem Group Ltd. By clicking the Register button provided on <Link href="www.worldcoffeesummit.net" target='_blank' className='underline'>www.worldcoffeesummit.net</Link>, all payments are non-refundable. Global Stratagem Group Ltd. reserves the right to cancel the booking without notice and retain any payments in full including payment terms provided by third party including Stripe.
                                                </p>
                                                <p className="mt-4 font-semibold text-gray-600">
                                                    2. CANCELLATION OR TERMINATION:
                                                </p>
                                                <p className="mt-2 text-gray-600">
                                                    <span className='font-semibold'>a. Cancellation/Postponement by Organiser. </span> Global Stratagem Group Ltd. reserves the right to cancel or postpone all or any part of this events for any reason whatsoever. In the event that Global Stratagem Group Ltd. cancels or postpones these events, Delegates to the Summit, Visitors to the Exhibition and Sponsor/Exhibitor will be credited towards a rescheduled date. If the Delegate, Visitor or Sponsor/Exhibitor is unable to attend the rescheduled event, the Delegate, Visitor and Sponsor/Exhibitor will receive a 100% credit, valid for one year from date of issuance and represent payments made towards a future Global Stratagem Group Ltd. event. In the event that the Summit and Exhibition is cancelled or postponed due to a fortuitous event, Act of God and those beyond its reasonable control, including but not limited to, natural or public disaster, other emergency, acts of terrorism, strike, adverse weather, and other natural disasters, industrial and labour dispute, power and internet failure or disconnection or acts or omissions of providers of telecommunications and electricity services, epidemic, venue construction, insufficient participation, market fluctuations, government regulation or pandemic policy in-person restriction, or other similar reasons, which will make the event impossible or impracticable to hold, in which case, there will be no refund available to Delegate, Visitor or Sponsor/Exhibitor. A change in the name of the Event does not constitute a cancellation by Global Stratagem Group Ltd.
                                                </p>
                                                <p className="mt-2 text-gray-600">
                                                    <span className='font-semibold'>b. Cancellation by Sponsor. </span> In the event that Delegate, Visitor or Sponsor/Exhibitor cancels this event booking provided by Global Stratagem Group Ltd. with written notice of cancellation not less than eight (8 weeks) prior to the date of the event, the cancellation fee payable therewith shall be the amount equal to 50% of the total contract price. Any cancellation received less than eight (8) weeks prior the event shall be deemed to be breach of this Agreement by Sponsor/Exhibitor and, accordingly the full amount otherwise payable hereunder shall immediately be paid to Global Stratagem Group Ltd. The parties intend by this provision to agree in advance to the settlement of all damages to Global Stratagem Group Ltd. that will arise from Sponsor’s or Exhibitor’s cancellation. All fees are deemed fully earned and non-refundable when due. Termination by Sponsor/Exhibitor must be in writing and will be effective upon receipt by Global Stratagem Group Ltd. of an email addressed to <Link href={"mailto:info@globalstratagemgroup.com"} target='_blank' className='underline'>info@globalstratagemgroup.com</Link> or <Link href={"mailto:info@worldcoffeealliance.com"} target='_blank' className='underline'>info@worldcoffeealliance.com</Link>. Sponsor/Exhibitor acknowledges the difficulty in determining a precise value for services rendered and expenses incurred by Global Stratagem Group Ltd. for the Summit/Exhibition, and of ascertaining damages incurred by Global Stratagem Group Ltd. If Sponsor/Exhibitor terminates this Agreement or Sponsor/Exhibitor’s participation in the event; the amounts due from Sponsor/Exhibitor under this Agreement as of the effective date of any termination by Sponsor/Exhibitor belong to Global Stratagem Group Ltd. and represent an agreed measure of compensation and are not to be deemed or construed as a forfeiture or penalty.
                                                </p>
                                                <p className="mt-2 text-gray-600">
                                                    <span className='font-semibold'>c. Termination by Organizer. </span> Global Stratagem Group Ltd. reserves the right to terminate this Agreement immediately by written notice to Delegate, Visitor and Sponsor in the event of breach or anticipatory breach by Delegate, Visitor or Sponsor/Exhibitor of any of the terms and conditions set forth herein, in any addendum hereto or in the Manual, including failure to make any payment when due under the terms of this Agreement. Global Stratagem Group Ltd. is expressly authorized (but has no obligation) to resell or dispose oof Registration tickets of Delegate or Visitor passes or Sponsor/Exhibitor package signed up or  or made available by reason of action taken under this paragraph in such manner as it may deem best, and without releasing the Delegate, Visitor and Sponsor/Exhibitor from any liability hereunder Global Stratagem Group Ltd. reserves the right to re-name or the Event or change the date and time on which it is held without penalty.
                                                </p>
                                                <p className="mt-4 text-gray-600">
                                                    <span className='font-semibold'>3. ALTERATION TO THE ADVERTISED PACKAGE: </span> Whilst every reasonable effort will be made to adhere to the advertised Sponsorship/Exhibitor packages that appears on Global Stratagem Group Ltd. main corporate website and/or event website (<Link href="www.worldcoffeesummit.net" target='_blank' className='underline'>www.worldcoffeesummit.net</Link>) or any other related literature therewith including Sponsorship Media Kit (PTT/PDF) or Program, List of Speakers and Panellist, Event Brochure in relation thereto, such package and program, including confirmed speakers which Global Stratagem Group Ltd do not guarantee appearance of confirmed speakers at the Event for one reason or another, and maybe altered or parts thereof modified or omitted or platform or venue changed, dates and time changed for any cause whatsoever, which Global Stratagem Group Ltd. in its absolute discretion, shall consider to be just and reasonable within the circumstances. Global Stratagem Group Ltd. reserves the right to change the event venue, event date, program, speakers, panellists and topics as it deems necessary without penalty. Furthermore, Global Stratagem Group Ltd. will not be responsible for re-scheduling any Summit or Exhibition, which were due to be held at the event, which is postponed or cancelled. The Delegate, Visitor or Exhibitors and Sponsors are strongly advised to procure extensive personal insurance coverage, including his entourage through its own insurance brokers to protect against any losses incurred in connection with the postponement or cancellation of the event.
                                                </p>

                                                <p className="mt-4 text-gray-600">
                                                    <span className='font-semibold'>4. LIABILITY: </span> In making arrangements with third parties including venue and any of its third parties contracted, who have been retained by Global Stratagem Group Ltd to set up and operate this Summit (remote or in situ) on online platforms like Zoom, Go Webinar, FB or YouTube Livestream and other Webinar providers software or apps etc., the private company organizer or venue hired to operate and facilitate this Event, is solely responsible including but not limited to all hardware and software faults, disconnection, internet failure, outage including other negligent acts or omissions. Global Stratagem Group Ltd. acts solely as the Sponsor’s agent and does so on the express condition that no liability of any kind howsoever caused shall attach to Global Stratagem Group Ltd. in connection with or arising out of such arrangements. Global Stratagem Group Ltd. reserves the right to change without prior notice, the Summit and/or Exhibition providers, dates, speakers, summit program, topics and roundtable and panel speakers/participants within reason should circumstances warrant such change. No liability is attached to Global Stratagem Group Ltd. should change be effected for any reason whatsoever and howsoever.
                                                </p>

                                                <p className="mt-4 text-gray-600">
                                                    <span className='font-semibold'>5. INFORMATION AND COPYRIGHT. </span> All information supplied by Global Stratagem Group Ltd. in relation to this event is for use by the Sponsor/Exhibitor only for the purposes of this event. All copyrights and trademarks in this project belong to Global Stratagem Group Ltd. and cannot be passed to any third parties for any purpose whatsoever (excepted all copyrights and trademark of the Sponsor that remain Sponsor’s sole and exclusive property)
                                                </p>

                                                <p className="mt-4 text-gray-600">
                                                    <span className='font-semibold'>6. PRODUCT DEMONSTRATION. </span> Sponsor and/or Exhibitors shall be solely responsible for all technical setup, equipment, cable, server or satellite installation and operational personnel for any product demonstration or corporate presentation at the event. Whilst all efforts will be extended to the Sponsor/Exhibitor to facilitate technical product presentation, Global Stratagem Group Ltd. cannot be held responsible for any technical faults whatsoever which causes delay, interruption or cancellation of any presentation or product demonstration. Sponsor will be liable for all damages or liability of any kind or for any loss, damage or injury to persons or any property during the show from any cause whatsoever by reason of use, occupation and enjoyment of exhibit or conference space.
                                                </p>

                                                <p className="mt-4 text-gray-600">
                                                    <span className='font-semibold'>7. PROHIBITION OF TRANSFER: </span> The Sponsor or Exhibitor may not assign, transfer, access, sublet or share possession of any part of this Terms and Conditions and all areas and facilities including speaking slots at the event allocated to the Exhibitor and/or Sponsor, or use any materials of any nature other than that which the Sponsor/Exhibitor are allowed by Global Stratagem Group Ltd. to be exhibited in or distributed from any area other than specified by Global Stratagem Group Ltd. This does not apply to subsidiaries, agents or principals of Sponsor/Exhibitor, which are notified in writing to Global Stratagem Group Ltd. at the time of the Booking.
                                                </p>

                                                <p className="mt-4 text-gray-600">
                                                    <span className='font-semibold'>8. INDEMNITY: </span> The Sponsor and or Exhibitor hereby indemnifies and holds Global Stratagem Group Ltd. harmless from and against any and all claims, damages and expenses arising in any way from the act, omission or negligence of the Sponsor or its employees, representatives or agents.
                                                </p>

                                                <p className="mt-4 text-gray-600">
                                                    <span className='font-semibold'>9. CONFIDENTIALITY: </span> All information supplied by Global Stratagem Group Ltd. in connection with this Agreement and Event, including the names of Speakers and Participants, special package and price agreed with Sponsor, is confidential and for Sponsor use only. Subject to the rules of GDPR and other UK existing privacy law and regulations, the parties agree that such Information may not be conveyed to any third party for any purpose. Reciprocally, all information supplied by the Sponsor or Exhibitor to Global Stratagem Group Ltd in connection with this Agreement and event, is confidential and shall be used by Global Stratagem Group Ltd. only to the extent necessary to the performance of the terms and conditions herein specified, or otherwise allowed by Sponsor /Exhibitor and the parties agree that such Information may not be conveyed to any third party for any purpose.
                                                </p>

                                                <p className="mt-4 text-gray-600">
                                                    <span className='font-semibold'>10. INTEGRATION: </span> This Agreement constitutes the sole and exclusive Agreement between the parties and supersedes any and all prior oral or written and all contemporaneous oral Agreements, promises, or understandings among them, pertaining to the transactions contemplated in this Agreement. The parties herein agree that no express or implied representations, warranties, or inducements have been made by with each party herein named except as set forth in this agreement.
                                                </p>

                                                <p className="mt-4 font-semibold text-gray-600">
                                                    11. MISCELLANEOUS:
                                                </p>
                                                <p className="mt-2 text-gray-600">
                                                    <span className='font-semibold'>a. </span> The terms and conditions herein provided may not be modified without the expressed written consent of the Chief Executive Officer and Founder or General Counsel of Global Stratagem Group Ltd. b) Should Sponsor’s behaviour, at any point for any reason, including but not limited to payment, delay in provision of necessary information or excessive alterations to the requirements have any effect to the smooth operation of this event, Global Stratagem Group Ltd. maintains the right to cancel Sponsor’s Booking by written notification. Global Stratagem Group Ltd. shall also be entitled to deduct any costs associated with Sponsor’s order at this point.
                                                </p>
                                                <p className="mt-2 text-gray-600">
                                                    <span className='font-semibold'>b. </span> Should a portion of the Agreement price be at the time of acceptance or at anytime in the future be subject to state, federal, local taxation, VAT or other applicable sales tax, Global Stratagem Group Ltd. reserves the right to add such charges to the final invoice or recover such sums from the Sponsor at the time when they become due.
                                                </p>
                                                <p className="mt-2 text-gray-600">
                                                    <span className='font-semibold'>c. </span> This contract shall be governed and construed by and in accordance with the laws of the United Kingdom and Wales to the exclusive jurisdiction of whose courts the parties hereby agree to submit. However, Global Stratagem Group Ltd. only is entitled to waive this right and submit to the jurisdiction of the courts in which the Sponsor’s office is located.
                                                </p>
                                                <p className="mt-2 text-gray-600">
                                                    <span className='font-semibold'>d. </span> If Sponsor or Exhibitor fails to pay any amounts when due, or if Global Stratagem Group Ltd. retains a Solicitor, Barrister or an Attorney to protect its interests under this Agreement, Sponsor shall pay any and all costs and expenses incurred by Global Stratagem Group Ltd. in enforcing any term of, or collecting under, this Agreement, including reasonable Legal fees, collection fees and any expenses. If any provision of this Agreement is deemed unenforceable, the remaining terms shall be enforceable to the fullest extent of the law. All parties expressly waive all rights to trial by jury.
                                                </p>
                                                <p className="mt-2 text-gray-600">
                                                    <span className='font-semibold'>e. </span> Sponsor or Exhibitor agrees that in case of litigation, Global Stratagem Group Ltd. will not be able to mitigate its losses for any less than fifty (50%) of the Agreement value.
                                                </p>
                                                <p className="mt-2 text-gray-600">
                                                    <span className='font-semibold'>f. </span> Notwithstanding anything contained herein to the contrary, in the event of any default by Global Stratagem Group Ltd. under the terms or provisions of this Agreement, Global Stratagem Ltd. liability shall never exceed the amount already paid by the Sponsor under this Agreement.
                                                </p>
                                                <p className="mt-2 text-gray-600">
                                                    <span className='font-semibold'>g. </span> The Sponsor or Exhibitor agrees to abide by the rules of all venue facilities including those provided by the venue owners or those provided for the Summit by Global Stratagem Group Ltd. staff and organisers in relation to this Agreement.
                                                </p>
                                                <p className="mt-2 text-gray-600">
                                                    <span className='font-semibold'>h. </span> The official representative of Sponsor and/or Exhibitor warrants and represents that he or she is specifically authorized by the Sponsor and/or Exhibitor to execute this Agreement and bind the Sponsor and/or Exhibitor to the obligations under this Agreement. The Sponsor and/or Exhibitor acknowledges that Global Stratagem Group Ltd. has relied on such representation.
                                                </p>
                                                <p className="mt-2 text-gray-600">
                                                    <span className='font-semibold'>i. </span> . This Agreement shall be binding upon all parties upon execution and delivery either by clicking the box of this terms and conditions to the other party of this Agreement. Delivery by email or facsimile transmittal shall constitute delivery hereof.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-5 sm:mt-6">
                                            <button
                                                type="button"
                                                className="inline-flex justify-center max-w-5xl px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700"
                                                onClick={() => setOpenTermsAndConditions(!openTermsAndConditions)}
                                            >
                                                Back
                                            </button>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </ Transition.Root >

                {/* letter of invitation*/}
                < Transition.Root show={openLetterOfInvitation} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={setOpenLetterOfInvitation}>
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
                                        <Dialog.Title className="py-4 font-semibold leading-6 text-gray-900 text-md sm:text-xl">
                                            Letter of Invitation
                                        </Dialog.Title>
                                        <div className='overflow-auto max-h-60'>
                                            <div className="text-sm sm:text-md sm:mt-5">
                                                <p className="mt-2 text-gray-600">
                                                    An official invitation letter can be sent by the by the COO and Co-Founder of Global Stratagem Group Ltd, operator of World Coffee Alliance and organiser of World Coffee Summit and Exhibition London upon request. This personal invitation is intended to facilitate travel and visa arrangements for registered participants. Visa applications are the sole responsibility of participants. To request an official invitation letter, participants must first complete the registration process. In order to receive a hard copy of the invitation letter, please send email request to <span className='font-semibold text-gray-900'>mavis@worldcoffeealliance.com</span>.
                                                </p>
                                                <p className="mt-2 text-gray-600">
                                                    Please check the <a href='https://www.gov.uk/browse/visas-immigration' target='_blank' className='underline text-lime-700'>United Kingdom Visa Portal website</a> for visa-related information in the United Kingdom.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-5 sm:mt-6">
                                            <button
                                                type="button"
                                                className="inline-flex justify-center max-w-5xl px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-lime-700 hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700"
                                                onClick={() => setOpenLetterOfInvitation(!openLetterOfInvitation)}
                                            >
                                                Back
                                            </button>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </ Transition.Root>
            </div>

        </>
    )
}


export default RegisterForm