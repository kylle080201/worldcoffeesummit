import Link from 'next/link';

export default function TermsAndConditionsContent() {
  return (
    <div className="text-sm sm:mt-5">
      <p className="text-gray-700">
        <span className="font-semibold">Global Stratagem Group Ltd</span> is the registered owner of{' '}
        <span className="font-semibold">World Coffee Alliance (WCA)</span> and the organiser of{' '}
        <span className="font-semibold">World Coffee Innovation Summit London</span>.
      </p>

      <p className="mt-6 font-semibold text-gray-900">Payment Terms</p>
      <p className="mt-2 text-gray-700">Registrations are confirmed upon receipt of full payment.</p>
      <p className="mt-2 text-gray-700">All prices are listed in GBP and may be subject to applicable VAT.</p>
      <p className="mt-2 text-gray-700">
        Full payment must be received prior to the Event date. The Organiser reserves the right to refuse admission to the Event if payment has not been received.
      </p>

      <p className="mt-6 font-semibold text-gray-900">Delegate Eligibility &amp; Registration Review</p>
      <p className="mt-2 text-gray-700">
        The Organiser reserves the right to review registrations and determine the most appropriate delegate category in order to maintain a high-quality and relevant event experience. Registrations may be reassigned, adjusted, or declined at the Organiser&apos;s discretion.
      </p>

      <p className="mt-6 font-semibold text-gray-900">Cancellation, Refunds &amp; Substitutions</p>
      <p className="mt-2 text-gray-700">All delegate registrations are final and non-refundable.</p>
      <p className="mt-2 text-gray-700">
        Delegate substitutions may be accepted up to fourteen (14) days prior to the Event, subject to written approval by the Organiser.
      </p>
      <p className="mt-2 text-gray-700">No refunds or credits will be issued for non-attendance.</p>

      <p className="mt-6 font-semibold text-gray-900">Event Changes</p>
      <p className="mt-2 text-gray-700">
        The Organiser reserves the right to modify the Event programme, speakers, venue, timing, format, or related arrangements, where reasonably necessary. Such changes shall not entitle delegates to refunds or compensation.
      </p>
      <p className="mt-2 text-gray-700">
        If the Event is postponed, delegate registrations will automatically transfer to the rescheduled date.
      </p>
      <p className="mt-2 text-gray-700">
        If the delegate is unable to attend the rescheduled Event, the Organiser may offer a credit towards a future event at its discretion.
      </p>
      <p className="mt-2 text-gray-700">
        The Organiser shall not be liable for any travel, accommodation or other external costs incurred by delegates.
      </p>

      <p className="mt-6 font-semibold text-gray-900">Force Majeure</p>
      <p className="mt-2 text-gray-700">
        The Organiser shall not be liable for any delay, postponement, modification, or cancellation of the Event caused by circumstances beyond its reasonable control, including but not limited to natural disasters, government restrictions, acts of terrorism, industrial disputes, pandemics, venue unavailability, or technical failures. In such circumstances, the Organiser may reschedule the Event or issue a credit at its sole discretion.
      </p>

      <p className="mt-6 font-semibold text-gray-900">Photography &amp; Recording</p>
      <p className="mt-2 text-gray-700">Photography, video recording, and media coverage may take place during the Event.</p>
      <p className="mt-2 text-gray-700">
        By attending the Event, delegates consent to the use of photographs, video footage, and recordings for promotional, marketing, and communication purposes related to the Event and future events organised by the Organiser.
      </p>
      <p className="mt-2 text-gray-700">
        Delegates who prefer not to appear in photography or filming should notify the Organiser in writing prior to the Event. WCA will make reasonable efforts to accommodate such requests; however, due to the nature of the event as a professional gathering, complete exclusion from all images or recordings taken in shared spaces cannot be guaranteed.
      </p>

      <p className="mt-6 font-semibold text-gray-900">Data Protection &amp; Privacy</p>
      <p className="mt-2 text-gray-700">
        By registering for the Event, delegates consent that their personal information will be processed in accordance with the Organiser&apos;s{' '}
        <Link href="/privacy-policy" target="_blank" className="underline text-lime-700">
          Privacy Policy
        </Link>
        .
      </p>
      <p className="mt-2 text-gray-700">
        The Delegate&apos;s name, job title, organisation name, and business contact details may be shared with sponsors and selected event partners for business networking and event-related communications where relevant.
      </p>
      <p className="mt-2 text-gray-700">
        The Organiser processes personal data in accordance with applicable UK GDPR and data protection regulations.
      </p>

      <p className="mt-6 font-semibold text-gray-900">Delegate Conduct</p>
      <p className="mt-2 text-gray-700">
        The Event is a professional business gathering. The Organiser reserves the right to refuse admission or remove any attendee whose behaviour is considered inappropriate, disruptive, abusive, or inconsistent with the professional nature of the Event, without refund.
      </p>

      <p className="mt-6 font-semibold text-gray-900">Liability</p>
      <p className="mt-2 text-gray-700">
        To the maximum extent permitted by law, the Organiser shall not be liable for any indirect loss, consequential loss, business interruption, or personal loss arising from participation in the Event.
      </p>
      <p className="mt-2 text-gray-700">
        The Organiser&apos;s total liability shall not exceed the amount paid by the delegate for the relevant registration.
      </p>

      <p className="mt-6 font-semibold text-gray-900">Governing Law</p>
      <p className="mt-2 text-gray-700">
        These Terms &amp; Conditions shall be governed by and construed in accordance with the laws of England and Wales. Any disputes arising in connection with the Event shall be subject to the exclusive jurisdiction of the courts of England and Wales.
      </p>
      <p className="mt-4 text-gray-700">
        For any registration or event enquiries, please contact:{' '}
        <Link href="mailto:events@worldcoffeealliance.com" className="underline text-lime-700">
          events@worldcoffeealliance.com
        </Link>
      </p>
      <p className="mt-4 text-gray-700">
        By registering for the Event, you confirm that you have read and agreed to these Terms &amp; Conditions and the{' '}
        <Link href="/privacy-policy" target="_blank" className="underline text-lime-700">
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
}
