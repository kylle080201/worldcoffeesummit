import RegistrationSteps from "../../../../components/RegistrationSteps"
import TicketPricing from "../../../../components/Ticket-Pricing"

export default function Summit() {
    const steps = [
        { id: '01', name: 'Choose an Event', description: 'Choose what event to attend', status: 'complete' },
        { id: '02', name: 'Buy a ticket', description: 'Buy a ticket for the event', status: 'current' },
        { id: '03', name: 'Registration Details', description: 'Enter your details', status: 'upcoming' },
    ]
    return (
        <>
            <RegistrationSteps steps={steps} />
            <TicketPricing />
        </>
    )
}