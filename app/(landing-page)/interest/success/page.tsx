import Link from "next/link";

export default function FormPage() {
    return (
        <>
          <div className="flex flex-col justify-center py-24 h-[80vh] max-w-4xl mx-auto">
            <div className="font-bold text-2xl xs:text-4xl text-left">
              Thank you for registering your interest in attending the World Coffee Innovation Summit London 2025.
            </div>
            <div className="text-lg xs:text-2xl mt-8 text-left">
              Our team will be in touch shortly.
            </div>
            <div className="text-lg xs:text-2xl mt-4 text-left">
              Any questions, feel free to reach out to{" "}
              <Link
                href={"mailto:info@worldcoffeealliance.com?Subject=Book%20Stand%20-%20Form%20Completion%20Email%20Enquiry"}
                target="_blank"
                className="text-yellow-900 underline hover:underline-offset-4"
              >
                info@worldcoffeealliance.com
              </Link>{" "}
              directly.
            </div>
            <div className="text-lg xs:text-2xl mt-4 text-left">
              Best regards, 
            </div>
            <div className="text-lg xs:text-2xl text-left">
              The Team @ World Coffee Innovation Summit
            </div>
          </div>
        </>
    )
}