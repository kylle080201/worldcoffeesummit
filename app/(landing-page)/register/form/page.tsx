import RegisterForm from "../../../../components/RegisterForm";
import RegistrationSteps from "../../../../components/RegistrationSteps";

export default function FormPage() {
    const steps = [
        { id: '1', name: 'Choose a Pass', status: 'complete' },
        { id: '2', name: 'Personal Information', status: 'current' },
        { id: '3', name: 'Payment', status: 'upcoming' },
        { id: '4', name: 'Confirmation', status: 'upcoming' },
    ]
    return (
        <>
            <RegistrationSteps steps={steps} />
            <RegisterForm />
        </>
    )
}