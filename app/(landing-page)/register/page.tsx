import RegistrationChoice from "../../../components/RegistrationChoice"
import RegistrationSteps from "../../../components/RegistrationSteps"

export default function Register() {
    const steps = [
        { id: '01', name: 'Choose an Event', description: 'Choose what event to attend', status: 'current' },
        { id: '02', name: 'Buy a ticket', description: 'Buy a ticket for the event', status: 'upcoming' },
        { id: '03', name: 'Registration Details', description: 'Enter your details', status: 'upcoming' },
    ]
    return (
        <>
            <RegistrationSteps steps={steps} />
            <RegistrationChoice />
        </>
    )
}