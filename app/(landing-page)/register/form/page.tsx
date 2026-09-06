import ExhibitionRegisterForm from "../../../../components/ExhibitionRegisterForm";
import RegisterForm from "../../../../components/RegisterForm";
import RegistrationSteps from "../../../../components/RegistrationSteps";
import {
    hasExhibitionLineItem,
    parseRegistrationLineItems,
} from "../../../../utils/stripePrices";

export default function FormPage({
    searchParams,
}: {
    searchParams?: { [key: string]: string | string[] | undefined }
}) {
    const lineItemsParam = Array.isArray(searchParams?.line_items)
        ? searchParams?.line_items[0]
        : searchParams?.line_items
    const isExhibition = hasExhibitionLineItem(parseRegistrationLineItems(lineItemsParam))

    const steps = isExhibition
        ? [
            { id: '1', name: 'Exhibitor Information', status: 'current' },
            { id: '2', name: 'Payment', status: 'upcoming' },
            { id: '3', name: 'Confirmation', status: 'upcoming' },
        ]
        : [
            { id: '1', name: 'Choose a Pass', status: 'complete' },
            { id: '2', name: 'Delegate Information', status: 'current' },
            { id: '3', name: 'Payment', status: 'upcoming' },
            { id: '4', name: 'Confirmation', status: 'upcoming' },
        ]

    return (
        <>
            <RegistrationSteps steps={steps} />
            {isExhibition ? <ExhibitionRegisterForm /> : <RegisterForm />}
        </>
    )
}
