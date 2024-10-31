import Link from "next/link";

export default function FormPage() {
    return (
        <>
          <div className="flex flex-col text-center justify-center items-center py-24 h-[80vh]">
            <div className="font-bold text-2xl xs:text-4xl max-w-4xl">
              Thank you for your interest in World Coffee Innovation Summit London 2025, a member of our team will be in touch shortly.
            </div>
            <div className="text-lg xs:text-2xl max-w-4xl mt-4">
              If you want to chat to someone sooner, feel free to <Link href={"mailto:info@worldcoffeealliance.com?Subject=Book%20Stand%20-%20Form%20Completion%20Email%20Enquiry"} target="_blank" className="text-yellow-900 underline hover:underline-offset-4">email us</Link>.
            </div>
            <div className="text-lg xs:text-2xl max-w-4xl mt-4">
              Have a great day!
            </div>
          </div>
        </>
    )
}