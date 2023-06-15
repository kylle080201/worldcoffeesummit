import RegistrationChoice from "../../../components/RegistrationChoice"
import RegistrationSteps from "../../../components/RegistrationSteps"
import TicketPricing from "../../../components/Ticket-Pricing"

export default function Register() {
    const steps = [
        { id: '1', name: 'Choose a Pass', status: 'current' },
        { id: '2', name: 'Personal Information', status: 'upcoming' },
        { id: '3', name: 'Payment', status: 'upcoming' },
    ]
    return (
        <>
            <RegistrationSteps steps={steps} />
            <TicketPricing />
        </>
    )
}