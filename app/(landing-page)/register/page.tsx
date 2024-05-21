import { AtSymbolIcon, ComputerDesktopIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

export default function Register() {
    return (
        <div className="w-full justify-center py-12">
            <div className="max-w-7xl bg-lime-700 font-bold text-2xl text-white text-center mx-auto py-2">
                2 EASY WAYS TO REGISTER
            </div>
            <div className="max-w-7xl mt-12 flex gap-12 mx-auto">
                <div className="w-1/2 flex flex-col items-center gap-6 justify-center border-2 rounded-md shadow-md hover:shadow-xl p-8">
                    <div className="w-max border-lime-700 border-8 rounded-full p-4">
                        <EnvelopeIcon width={80} color="#4d7c0f" /> 
                    </div>
                    <div>
                        <Link href={"mailto:sales@worldcoffeealliance.com"} className="text-yellow-900 text-2xl underline hover:underline-offset-4 font-bold"> sales@worldcoffeealliance.com</Link>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col items-center gap-6 justify-center border-2 rounded-md shadow-md hover:shadow-xl p-8">
                    <div className="w-max border-lime-700 border-8 rounded-full p-4">
                        <ComputerDesktopIcon width={80} color="#4d7c0f" /> 
                    </div>
                    <div>
                        <Link href={"/register/tickets"} className="text-yellow-900 text-2xl underline hover:underline-offset-4 font-bold">Register Online Now</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}