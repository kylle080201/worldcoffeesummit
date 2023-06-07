import RegistrationSteps from "../../../../components/RegistrationSteps"
import TicketPricing from "../../../../components/Ticket-Pricing"

export default function Summit() {
    const steps = [
        { id: '01', name: 'Choose an Event', status: 'complete' },
        { id: '02', name: 'Choose a ticket', status: 'current' },
        { id: '03', name: 'Registration Details', status: 'upcoming' },
        { id: '04', name: 'Checkout', status: 'upcoming' },
        { id: '05', name: 'Complete', status: 'upcoming' },
    ]
    const summit = [
        {
            title: "NGO/Cooperatives, Coffee Associations, Academic Pass",
            item_price: 799,
            line_items: [
                {
                    price: 'price_1NCfrUKMWpUKzQVzcTWlkQsK',
                    quantity: 1
                }
            ]
        },
        {
            title: "Standard Corporate Pass - Corporate Representatives",
            item_price: 1249,
            link: "https://buy.stripe.com/bIYdTL38x71SeYM289"
        },
        {
            title: "Consultants, Start-ups, Service Providers",
            item_price: 1499,
            link: "https://buy.stripe.com/cN25nf5gFgCs6sg146"
        },
    ]
    return (
        <>
            <RegistrationSteps steps={steps} />
            <TicketPricing tickets={summit} title={"As delegate to the Summit"} />
        </>
    )
}