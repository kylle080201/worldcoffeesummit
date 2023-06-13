import RegistrationSteps from "../../../../components/RegistrationSteps"
import TicketPricing from "../../../../components/Ticket-Pricing"

export default function Summit() {
    const steps = [
        { id: '01', name: 'Choose an Event', status: 'complete' },
        { id: '02', name: 'Choose a ticket', status: 'current' },
        { id: '03', name: 'Registration Details', status: 'upcoming' },
        { id: '04', name: 'Checkout', status: 'upcoming' },
        { id: '05', name: 'Complete', status: 'upcoming' },
    ]
    return (
        <>
            <RegistrationSteps steps={steps} />
            <TicketPricing />
        </>
    )
}