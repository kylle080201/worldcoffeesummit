import RegisterForm from "../../../../components/RegisterForm";
import RegistrationSteps from "../../../../components/RegistrationSteps";

export default function FormPage() {
    const steps = [
        { id: '01', name: 'Choose an Event', status: 'complete' },
        { id: '02', name: 'Choose a ticket', status: 'complete' },
        { id: '03', name: 'Registration Details', status: 'current' },
        { id: '04', name: 'Checkout', status: 'upcoming' },
        { id: '05', name: 'Complete', status: 'upcoming' },
    ]
    return (
        <>
            <RegistrationSteps steps={steps} />
            <RegisterForm />
        </>
    )
}