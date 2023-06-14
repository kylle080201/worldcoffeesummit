import PaymentSuccess from "../../../../components/PaymentSuccess"
import RegistrationSteps from "../../../../components/RegistrationSteps"
import { decryptData } from "../../../../utils/encryptor";
import { redirect } from 'next/navigation'

export default function Success({ searchParams }: any) {
    if (Object.keys(searchParams).length === 0) {
        redirect('/')
    }
    const checkoutSessionId = searchParams.session_id;
    const priceId = searchParams.price_id;
    const encryptedFormData = searchParams.buyer_data;
    const decryptedFormData = decryptData(encryptedFormData)

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
            {decryptedFormData ? <PaymentSuccess checkoutSessionId={checkoutSessionId} priceId={priceId} decryptedFormData={JSON.parse(decryptedFormData)} /> : null}
        </>
    )
}