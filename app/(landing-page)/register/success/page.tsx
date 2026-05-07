import PaymentSuccess from "../../../../components/PaymentSuccess"
import RegistrationSteps from "../../../../components/RegistrationSteps"
import { decryptData } from "../../../../utils/encryptor";

export default function Success({ searchParams }: any) {
    const checkoutSessionId = searchParams?.session_id;
    const lineItemsParam = Array.isArray(searchParams?.line_items)
        ? searchParams.line_items[0]
        : searchParams?.line_items;
    const buyerDataParam = Array.isArray(searchParams?.buyer_data)
        ? searchParams.buyer_data[0]
        : searchParams?.buyer_data;

    let decryptedFormData: any = null
    let line_items = ''

    try {
        line_items = lineItemsParam ? decodeURIComponent(lineItemsParam) : ''
        const encryptedFormData = buyerDataParam ? decodeURIComponent(buyerDataParam) : ''
        decryptedFormData = encryptedFormData ? decryptData(encryptedFormData) : null
    } catch {
        decryptedFormData = null
    }

    const steps = [
        { id: '1', name: 'Choose a Pass', status: 'complete' },
        { id: '2', name: 'Delegate Information', status: 'complete' },
        { id: '3', name: 'Payment', status: 'complete' },
        { id: '4', name: 'Confirmation', status: 'current' },
    ]
    return (
        <>
            <RegistrationSteps steps={steps} />
            {decryptedFormData
                ? <PaymentSuccess checkoutSessionId={checkoutSessionId} line_items={line_items} decryptedFormData={JSON.parse(decryptedFormData)} />
                : (
                    <div className="max-w-3xl px-6 py-12 mx-auto text-base text-red-700 sm:text-lg">
                        Unable to load your registration confirmation details. Please refresh this page or contact support.
                    </div>
                )}
        </>
    )
}