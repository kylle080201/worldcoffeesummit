/**
 * Build a /register/success URL to replay confirmation + email (PATCH /api/payment-success).
 *
 * Uses the same AES encryption as checkout (ENCRYPT_KEY from .env.local).
 *
 * Usage (PowerShell, from repo root):
 *   $env:ENCRYPT_KEY="your-production-encrypt-key"
 *   node scripts/build-register-success-url.mjs
 *
 * Optional env overrides:
 *   SUCCESS_ORIGIN=https://www.worldcoffeeinnovationsummit.com
 *   CHECKOUT_SESSION_ID=cs_live_...
 *   LINE_ITEMS_JSON=[{"price":"price_...","quantity":1,"tax_rates":["txr_1NBBYeKMWpUKzQVzkTT4Wib4"]}]
 */

import CryptoJS from 'crypto-js'

const encryptKey = process.env.ENCRYPT_KEY
if (!encryptKey) {
  console.error('Missing ENCRYPT_KEY. Set it to the same value as production Vercel env.')
  process.exit(1)
}

const origin =
  process.env.SUCCESS_ORIGIN?.replace(/\/$/, '') ||
  'https://www.worldcoffeeinnovationsummit.com'

const checkoutSessionId =
  process.env.CHECKOUT_SESSION_ID ||
  'cs_live_b1MxM9cyW19YngH1NcmeGsSu1LEl8kgOr9Bmb8ZyTaNy7zEZawJubRMsXY'

/** Match Stripe Checkout line_items from the paid session (service pass first). */
const lineItems =
  process.env.LINE_ITEMS_JSON != null
    ? JSON.parse(process.env.LINE_ITEMS_JSON)
    : [
        {
          price: 'price_1Rr82DKMWpUKzQVz3mGm7mS2',
          quantity: 1,
          tax_rates: ['txr_1NBBYeKMWpUKzQVzkTT4Wib4'],
        },
        {
          price: 'price_1UHNWHKMWpUKzQVzce07V4qS',
          quantity: 1,
          tax_rates: ['txr_1NBBYeKMWpUKzQVzkTT4Wib4'],
        },
      ]

const formData = process.env.FORM_DATA_JSON
  ? JSON.parse(process.env.FORM_DATA_JSON)
  : {
      firstName: 'Rupert',
      lastName: 'Hodges',
      companyName: 'Oritain',
      jobTitle: 'Chief Strategy Officer',
      countryCode: '+44',
      mobileNumber: '7770970586',
      country: 'United Kingdom',
      email: 'rhodges@oritain.com',
      confirmEmail: 'rhodges@oritain.com',
    }

const lineItemsString = JSON.stringify(lineItems)
const formDataString = JSON.stringify(formData)
const ciphertext = CryptoJS.AES.encrypt(formDataString, encryptKey).toString()

const params = new URLSearchParams()
params.set('session_id', checkoutSessionId)
params.set('line_items', lineItemsString)
params.set('buyer_data', ciphertext)

const url = `${origin}/register/success?${params.toString()}`

console.log('\nOpen this URL in a browser (production ENCRYPT_KEY required):\n')
console.log(url)
console.log(
  '\nIf the page loads, use “Resend confirmation email” if needed. ' +
    'Verify LINE_ITEMS_JSON against Stripe → Checkout → session → line items if PATCH fails.\n'
)
