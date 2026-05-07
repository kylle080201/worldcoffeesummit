import RegistrationSteps from "../../../../components/RegistrationSteps";
import NetworkingSoireeStep from "../../../../components/NetworkingSoireeStep";

export default function AddOnsPage() {
    const steps = [
        { id: '1', name: 'Choose a Pass', status: 'complete' },
        { id: '2', name: 'Delegate Information', status: 'complete' },
        { id: '3', name: 'Payment', status: 'upcoming' },
        { id: '4', name: 'Confirmation', status: 'upcoming' },
    ]

    return (
        <>
            <RegistrationSteps steps={steps} />
            <NetworkingSoireeStep />
        </>
    )
}
