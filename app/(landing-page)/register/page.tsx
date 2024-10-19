import { ArrowLongRightIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import RegistrationSteps from "../../../components/RegistrationSteps"
import TicketPricing from "../../../components/Ticket-Pricing"
import TicketPricingMaintenance from "../../../components/TicketPricingMaintenance"


export default function Tickets() {
    const steps = [
        { id: '1', name: 'Choose a Pass', status: 'current' },
        { id: '2', name: 'Personal Information', status: 'upcoming' },
        { id: '3', name: 'Payment', status: 'upcoming' },
        { id: '4', name: 'Confirmation', status: 'upcoming' },
    ]
    return (
        <>
            {/* <RegistrationSteps steps={steps} />
            <TicketPricing /> */}
            {/* <TicketPricingMaintenance /> */}
            <div className="flex flex-col items-center h-screen bg-lime-700">
                <div className="px-6 my-auto sm:px-6 sm:py-32 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
                            Registration for World Coffee Innovation Summit 2024 has been closed
                        </h2>
                        <div className="flex items-center justify-center mt-10 gap-x-6">

                            <Link href="/" className="flex content-center text-2xl font-semibold leading-6 text-white hover:underline">
                                Back to home <span aria-hidden="true"> <ArrowLongRightIcon className="mx-auto ml-2 h-7" aria-hidden="true" /> </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}