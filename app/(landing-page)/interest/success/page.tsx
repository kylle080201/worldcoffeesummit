import Link from "next/link";

export default function FormPage() {
    return (
        <>
          <div className="flex flex-col justify-center py-24 h-[80vh] max-w-4xl mx-auto">
            <div className="font-bold text-2xl xs:text-4xl text-left">
              Thank you for registering your interest in the upcoming World Coffee Innovation Summit London 2027.
            </div>
            <div className="text-lg xs:text-2xl mt-8 text-left">
              We&apos;ll keep you informed.
            </div>
            <div className="text-lg xs:text-2xl mt-4 text-left">
              In the meantime, follow us on{" "}
              <Link
                href={"https://www.linkedin.com/company/worldcoffeealliance/"}
                target="_blank"
                className="text-yellow-900 underline hover:underline-offset-4"
              >
                LinkedIn
              </Link>{" "}
              for updates.
            </div>
            <div className="text-lg xs:text-2xl mt-4 text-left">
              If you have any questions, please feel free to contact us at{" "}
              <Link
                href={"mailto:events@worldcoffeealliance.com"}
                target="_blank"
                className="text-yellow-900 underline hover:underline-offset-4"
              >
                events@worldcoffeealliance.com
              </Link>
            </div>
            <div className="text-lg xs:text-2xl mt-8 text-left">
              Best regards,
            </div>
            <div className="text-lg xs:text-2xl text-left">
              World Coffee Innovation Summit Team
            </div>
          </div>
        </>
    )
}
