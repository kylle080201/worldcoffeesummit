/** Promo rates end at this instant (matches register countdown). */
export const PRICING_DEADLINE = new Date('2026-09-04T23:59:00')

export function isPromoPricingActive(now = Date.now()): boolean {
    return now < PRICING_DEADLINE.getTime()
}

/** Full / post–4 September rates (display + Stripe). */
export const STANDARD_STRIPE_PRICES = {
    ngoGovernmentAcademic: 'price_1TzY9lKMWpUKzQVze5HZBsjJ',
    corporate: 'price_1TzYBaKMWpUKzQVzuSIvbSuA',
    startUp: 'price_1Rb9T2KMWpUKzQVzaQhry4yi',
    serviceProvider: 'price_1RVYT2KMWpUKzQVzleFRk7vr',
    /** £185 full rate */
    networkingSoiree: 'price_1TzYD8KMWpUKzQVzGFsxGOI3',
} as const

/** Rates before 5 September 2026. */
export const PROMO_STRIPE_PRICES = {
    ngoGovernmentAcademic: 'price_1Tze7kKMWpUKzQVznfiZ3pUY',
    corporate: 'price_1SHoadKMWpUKzQVzCk3pc4oP',
    serviceProvider: 'price_1Rr82DKMWpUKzQVz3mGm7mS2',
    /** £165 promo rate */
    networkingSoiree: 'price_1TzZ58KMWpUKzQVz12PQEdIQ',
} as const

export function getActiveStripePrices(now = Date.now()) {
    const promo = isPromoPricingActive(now)
    return {
        ngoGovernmentAcademic: promo
            ? PROMO_STRIPE_PRICES.ngoGovernmentAcademic
            : STANDARD_STRIPE_PRICES.ngoGovernmentAcademic,
        corporate: promo ? PROMO_STRIPE_PRICES.corporate : STANDARD_STRIPE_PRICES.corporate,
        startUp: STANDARD_STRIPE_PRICES.startUp,
        serviceProvider: promo
            ? PROMO_STRIPE_PRICES.serviceProvider
            : STANDARD_STRIPE_PRICES.serviceProvider,
        networkingSoiree: promo
            ? PROMO_STRIPE_PRICES.networkingSoiree
            : STANDARD_STRIPE_PRICES.networkingSoiree,
    } as const
}

/** @deprecated Prefer getActiveStripePrices() — kept for call sites that need a static map. */
export const STRIPE_PRICES = STANDARD_STRIPE_PRICES

/** Legacy price IDs kept for in-flight checkouts and confirmation emails. */
export const LEGACY_STRIPE_PRICES = {
    ngoGovernmentAcademicEarlyBird: 'price_1TU6ZNKMWpUKzQVzFeZzO8Zd',
    corporateEarlyBird: 'price_1Rr81dKMWpUKzQVzBqtbsbxH',
    networkingSoireeEarlyBird: 'price_1TU6d9KMWpUKzQVzbvEL5xFJ',
    networkingSoireePrevious: 'price_1TzYD8KMWpUKzQVzGFsxGOI3',
    academics: 'price_1RJ3cYKMWpUKzQVzk2sR6LGo',
} as const

export const NETWORKING_SOIREE_PRICE_IDS = [
    PROMO_STRIPE_PRICES.networkingSoiree,
    STANDARD_STRIPE_PRICES.networkingSoiree,
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
        case PROMO_STRIPE_PRICES.ngoGovernmentAcademic:
        case STANDARD_STRIPE_PRICES.ngoGovernmentAcademic:
        case LEGACY_STRIPE_PRICES.ngoGovernmentAcademicEarlyBird:
            return 'NGO / Government / Academic'
        case PROMO_STRIPE_PRICES.corporate:
        case STANDARD_STRIPE_PRICES.corporate:
        case LEGACY_STRIPE_PRICES.corporateEarlyBird:
            return 'Corporates'
        case STANDARD_STRIPE_PRICES.startUp:
            return 'Start Ups'
        case PROMO_STRIPE_PRICES.serviceProvider:
        case STANDARD_STRIPE_PRICES.serviceProvider:
            return 'Service Providers'
        case PROMO_STRIPE_PRICES.networkingSoiree:
        case STANDARD_STRIPE_PRICES.networkingSoiree:
        case LEGACY_STRIPE_PRICES.networkingSoireePrevious:
        case LEGACY_STRIPE_PRICES.networkingSoireeEarlyBird:
            return 'Networking Soirée'
        default:
            return 'Summit Delegate'
    }
}

export function getNetworkingSoireeLineItem(now = Date.now()) {
    return {
        price: getActiveStripePrices(now).networkingSoiree,
        quantity: 1 as const,
        tax_rates: PRODUCTION_TAX_RATES,
    }
}

/** Snapshot at request time — prefer getNetworkingSoireeLineItem() for deadline-aware checkout. */
export const networkingSoireeLineItem = getNetworkingSoireeLineItem()
