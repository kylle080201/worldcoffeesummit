import RegistrationSteps from "../../../../components/RegistrationSteps"

export default function Success() {
    const steps = [
        { id: '01', name: 'Choose an Event', status: 'complete' },
        { id: '02', name: 'Choose a ticket', status: 'complete' },
        { id: '03', name: 'Registration Details', status: 'complete' },
        { id: '04', name: 'Checkout', status: 'complete' },
        { id: '05', name: 'Complete', status: 'current' },
    ]
    return (
        <>
            <RegistrationSteps steps={steps} />
        </>
    )
}