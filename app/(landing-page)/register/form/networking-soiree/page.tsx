"use client"
import { useSearchParams } from "next/navigation";
import RegisterForm from "../../../../../components/RegisterForm";
import RegistrationSteps from "../../../../../components/RegistrationSteps";
import getStripe from "../../../../../get_stripe";

interface T_Line_Items {
  price: string;
  quantity: number;
  tax_rates: string[];
}

export default function NetworkingSoiree() {
  const searchParams = useSearchParams()
  const line_items = JSON.parse(searchParams?.get('line_items') as string) as T_Line_Items[];
  const formData = JSON.parse(searchParams?.get('formData') as string);
  const networkingSoireeTicket = {
    price: 'price_1NJtFiKMWpUKzQVzsO2NBrm9',
    quantity: 1,
    tax_rates: ['txr_1NCgheKMWpUKzQVzZ761hX9q'],
  }
  const handleConfirm = async () => {
    line_items.push(networkingSoireeTicket)
    
    if (line_items) {
      try {
          await fetch('/api/checkout-sessions', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(
                  {
                      line_items,
                      formData,
                      origin
                  }
              )
          }).then(response => response.json())
              .then(async data => {
                  const stripe = await getStripe();
                  await stripe?.redirectToCheckout({ sessionId: data?.response?.retrievedSession?.id })
              }).catch(error => {
                  console.log(error);
              });
      } catch (error) {
          alert(error)
      }
    }
  }

  const handleCancel = async () => {
    if (line_items) {
      try {
          await fetch('/api/checkout-sessions', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(
                  {
                      line_items,
                      formData,
                      origin
                  }
              )
          }).then(response => response.json())
              .then(async data => {
                  const stripe = await getStripe();
                  await stripe?.redirectToCheckout({ sessionId: data?.response?.retrievedSession?.id })
              }).catch(error => {
                  console.log(error);
              });
      } catch (error) {
          alert(error)
      }
    }
  }
  return (
      <div className="flex w-full h-[100vh] justify-center items-center text-center px-12 bg-gray-100">
        <div className="flex flex-col gap-6 text-4xl max-w-7xl my-auto">
          <div>
            Why not join our <span className="font-bold">Networking Soirée</span> at UK House of Lords on 16th October 2024 early evening for <span className="font-bold">£185.00</span> per person?
          </div>
          <div>
            Wines and Hors d’oeuvres included.
          </div>
          <div className="text-red-500">
            Limited tickets only! First come, first serve!
          </div>
          <div className="flex gap-12 justify-center">
            <button onClick={() => handleConfirm()} className="flex justify-center disabled:bg-lime-700/40 px-8 py-2 text-sm font-semibold text-white border border-transparent rounded-md shadow-sm enabled:bg-lime-700 enabled:hover:bg-lime-900 focus:outline-none">Yes</button>
            <button onClick={() => handleCancel()} className="flex justify-center disabled:bg-gray-300/40 px-8 py-2 text-sm font-semibold border border-transparent rounded-md shadow-sm enabled:bg-gray-300 enabled:hover:bg-gray-400 focus:outline-none">No</button>
          </div>
        </div>
      </div>
  )
}