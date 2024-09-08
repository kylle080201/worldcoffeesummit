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
            <RegistrationSteps steps={steps} />
            <TicketPricing />
            {/* <TicketPricingMaintenance /> */}
        </>
    )
}