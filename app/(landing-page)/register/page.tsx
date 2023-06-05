import RegistrationChoice from "../../../components/RegistrationChoice"
import RegistrationSteps from "../../../components/RegistrationSteps"

export default function Register() {
    const steps = [
        { id: '01', name: 'Choose an Event', status: 'current' },
        { id: '02', name: 'Choose a ticket', status: 'upcoming' },
        { id: '03', name: 'Registration Details', status: 'upcoming' },
        { id: '04', name: 'Checkout', status: 'upcoming' },
        { id: '05', name: 'Complete', status: 'upcoming' },
    ]
    return (
        <>
            <RegistrationSteps steps={steps} />
            <RegistrationChoice />
        </>
    )
}