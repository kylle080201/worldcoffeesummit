/** Active Stripe price IDs — update here when tariffs change. */
export const STRIPE_PRICES = {
    ngoGovernmentAcademic: 'price_1TzY9lKMWpUKzQVze5HZBsjJ',
    corporate: 'price_1TzYBaKMWpUKzQVzuSIvbSuA',
    startUp: 'price_1Rb9T2KMWpUKzQVzaQhry4yi',
    serviceProvider: 'price_1RVYT2KMWpUKzQVzleFRk7vr',
    networkingSoiree: 'price_1TzZ58KMWpUKzQVz12PQEdIQ',
} as const

/** Legacy price IDs kept for in-flight checkouts and confirmation emails. */
export const LEGACY_STRIPE_PRICES = {
    ngoGovernmentAcademicEarlyBird: 'price_1TU6ZNKMWpUKzQVzFeZzO8Zd',
    corporateEarlyBird: 'price_1Rr81dKMWpUKzQVzBqtbsbxH',
    networkingSoireeEarlyBird: 'price_1TU6d9KMWpUKzQVzbvEL5xFJ',
    networkingSoireePrevious: 'price_1TzYD8KMWpUKzQVzGFsxGOI3',
    academics: 'price_1RJ3cYKMWpUKzQVzk2sR6LGo',
} as const

export const NETWORKING_SOIREE_PRICE_IDS = [
    STRIPE_PRICES.networkingSoiree,
    LEGACY_STRIPE_PRICES.networkingSoireePrevious,
    LEGACY_STRIPE_PRICES.networkingSoireeEarlyBird,
] as const

export const PRODUCTION_TAX_RATES = ['txr_1NBBYeKMWpUKzQVzkTT4Wib4'] as const

export function isNetworkingSoireePriceId(priceId: string | undefined): boolean {
    return priceId != null && (NETWORKING_SOIREE_PRICE_IDS as readonly string[]).includes(priceId)
}

export function getTicketNameForPriceId(priceId: string): string {
    switch (priceId) {
        case LEGACY_STRIPE_PRICES.academics:
            return 'Academics'
        case STRIPE_PRICES.ngoGovernmentAcademic:
        case LEGACY_STRIPE_PRICES.ngoGovernmentAcademicEarlyBird:
            return 'NGO / Government / Academic'
        case STRIPE_PRICES.corporate:
        case LEGACY_STRIPE_PRICES.corporateEarlyBird:
            return 'Corporates'
        case STRIPE_PRICES.startUp:
            return 'Start Ups'
        case STRIPE_PRICES.serviceProvider:
            return 'Service Providers'
        case STRIPE_PRICES.networkingSoiree:
        case LEGACY_STRIPE_PRICES.networkingSoireePrevious:
        case LEGACY_STRIPE_PRICES.networkingSoireeEarlyBird:
            return 'Networking Soirée'
        default:
            return 'Summit Delegate'
    }
}

export const networkingSoireeLineItem = {
    price: STRIPE_PRICES.networkingSoiree,
    quantity: 1,
    tax_rates: PRODUCTION_TAX_RATES,
} as const
