/** Promo rates end at this instant (matches register countdown). 19 September 2026 23:59 UK (BST). */
export const PRICING_DEADLINE = new Date('2026-09-19T23:59:00+01:00')

export function isPromoPricingActive(now = Date.now()): boolean {
    return now < PRICING_DEADLINE.getTime()
}

/** Full / post–19 September rates (display + Stripe). */
export const STANDARD_STRIPE_PRICES = {
    ngoGovernmentAcademic: 'price_1TzY9lKMWpUKzQVze5HZBsjJ',
    corporate: 'price_1TzYBaKMWpUKzQVzuSIvbSuA',
    startUp: 'price_1Rb9T2KMWpUKzQVzaQhry4yi',
    serviceProvider: 'price_1RVYT2KMWpUKzQVzleFRk7vr',
    /** £185 full rate */
    networkingSoiree: 'price_1TzYD8KMWpUKzQVzGFsxGOI3',
} as const

/** Rates before 20 September 2026. */
export const PROMO_STRIPE_PRICES = {
    ngoGovernmentAcademic: 'price_1Tze7kKMWpUKzQVznfiZ3pUY',
    corporate: 'price_1SHoadKMWpUKzQVzCk3pc4oP',
    serviceProvider: 'price_1Rr82DKMWpUKzQVz3mGm7mS2',
    /** £165 promo rate */
    networkingSoiree: 'price_1TzZ58KMWpUKzQVz12PQEdIQ',
} as const

export function getActiveStripePrices(_now = Date.now()) {
    // Keep promo Stripe IDs after the countdown ends so displayed prices stay unchanged.
    return {
        ngoGovernmentAcademic: PROMO_STRIPE_PRICES.ngoGovernmentAcademic,
        corporate: PROMO_STRIPE_PRICES.corporate,
        startUp: STANDARD_STRIPE_PRICES.startUp,
        serviceProvider: PROMO_STRIPE_PRICES.serviceProvider,
        networkingSoiree: PROMO_STRIPE_PRICES.networkingSoiree,
    } as const
}

/** Link-only exhibition exclusive pass — not listed on the public ticket page. */
export const EXHIBITION_STRIPE_PRICE = 'price_1UBvR5KMWpUKzQVz1RtUgg9D'

export function getExhibitionLineItems() {
    return [
        {
            price: EXHIBITION_STRIPE_PRICE,
            quantity: 1,
            tax_rates: [...PRODUCTION_TAX_RATES],
        },
    ]
}

export function getExhibitionRegistrationHref() {
    return `/register/form?line_items=${encodeURIComponent(JSON.stringify(getExhibitionLineItems()))}`
}

export function isExhibitionPriceId(priceId: string | undefined): boolean {
    return priceId === EXHIBITION_STRIPE_PRICE
}

export function parseRegistrationLineItems(raw: string | null | undefined): { price?: string }[] {
    if (!raw) return []
    try {
        const parsed = JSON.parse(raw)
        return Array.isArray(parsed) ? parsed : []
    } catch {
        return []
    }
}

export function hasExhibitionLineItem(lineItems: { price?: string }[]): boolean {
    return lineItems.some((item) => isExhibitionPriceId(item?.price))
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
        case EXHIBITION_STRIPE_PRICE:
            return 'Exhibition Exclusive'
        default:
            return 'Summit Delegate'
    }
}

export function getNetworkingSoireeLineItem() {
    return {
        price: PROMO_STRIPE_PRICES.networkingSoiree,
        quantity: 1 as const,
        tax_rates: PRODUCTION_TAX_RATES,
    }
}

/** Snapshot at request time — prefer getNetworkingSoireeLineItem() for deadline-aware checkout. */
export const networkingSoireeLineItem = getNetworkingSoireeLineItem()
