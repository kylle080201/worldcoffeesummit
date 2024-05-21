import PaymentSuccess from "../../../../components/PaymentSuccess"
import RegistrationSteps from "../../../../components/RegistrationSteps"
import { decryptData } from "../../../../utils/encryptor";

export default function Success({ searchParams }: any) {
    const checkoutSessionId = searchParams.session_id;
    const line_items = searchParams.line_items;
    const encryptedFormData = searchParams.buyer_data;
    const decryptedFormData = decryptData(encryptedFormData)

    const steps = [
        { id: '1', name: 'Choose a Pass', status: 'complete' },
        { id: '2', name: 'Personal Information', status: 'complete' },
        { id: '3', name: 'Payment', status: 'complete' },
        { id: '4', name: 'Confirmation', status: 'current' },
    ]
    return (
        <>
            <RegistrationSteps steps={steps} />
            {decryptedFormData ? <PaymentSuccess checkoutSessionId={checkoutSessionId} line_items={line_items} decryptedFormData={JSON.parse(decryptedFormData)} /> : null}
        </>
    )
}