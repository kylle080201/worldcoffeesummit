"use client"
import { useEffect, useState } from "react";

const CountDown = () => {
    const [eventTime, setEventTime] = useState(false);
    const [days, setDays] = useState("00");
    const [hours, setHours] = useState("00");
    const [minutes, setMinutes] = useState("00");
    const [seconds, setSeconds] = useState("00");
    const target = new Date("09/13/2023 08:30:00");

    function addLeadingZeros(num: any, totalLength: any) {
        return String(num).padStart(totalLength, '0');
    }

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const difference = target.getTime() - now.getTime();

            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            setDays(addLeadingZeros(d, 2))
            const h = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            setHours(addLeadingZeros(h, 2));

            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            setMinutes(addLeadingZeros(m, 2));

            const s = Math.floor((difference % (1000 * 60)) / 1000);
            setSeconds(addLeadingZeros(s, 2));

            if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
                setEventTime(true);
            }
        }, 1000);

        return () => clearInterval(interval);
    });

    return (
        <>
            {eventTime ? (
                null
            ) : (
                <>
                    <div className="flex-col py-20 justify-self-center">
                        <div className="flex flex-row justify-center w-full px-20 mx-auto text-center sm:px-60">
                            <div className="flex flex-col">
                                <div className="flex flex-col p-2 mr-1 bg-white rounded-md md:p-6">
                                    <h2 className="font-bold text-center text-md text-lime-700 md:text-4xl">
                                        {days}
                                    </h2>
                                </div>
                                <div className="p-2 mt-4 bg-white rounded-l-md">
                                    <p className="text-base font-semibold md:text-md">Days</p>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <div className="flex flex-col p-2 mx-1 bg-white rounded-md md:p-6">
                                    <h2 className="font-bold text-center text-md text-lime-700 md:text-4xl">
                                        {hours}
                                    </h2>
                                </div>
                                <div className="p-2 mt-4 bg-white">
                                    <p className="text-base font-semibold md:text-md">Hours</p>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <div className="flex flex-col p-2 mx-1 bg-white rounded-md md:p-6">
                                    <h2 className="font-bold text-center text-md text-lime-700 md:text-4xl">
                                        {minutes}
                                    </h2>
                                </div>
                                <div className="p-2 mt-4 bg-white">
                                    <p className="text-base font-semibold md:text-md">Minutes</p>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <div className="flex flex-col p-2 ml-1 bg-white rounded-md md:p-6">
                                    <h2 className="font-bold text-center text-md text-lime-700 md:text-4xl">
                                        {seconds}
                                    </h2>
                                </div>
                                <div className="p-2 mt-4 bg-white rounded-r-md">
                                    <p className="text-base font-semibold md:text-md">Seconds</p>
                                </div>
                            </div>
                            <div className="flex flex-row items-end justify-center pt-6 ml-4 text-center">
                                <p className="px-6 py-4 mx-auto text-lg font-bold tracking-tight text-gray-900 bg-yellow-500 h-fit sm:text-2xl">Register Now </p>
                            </div>
                        </div>
                    </div >
                </>
            )}
        </>
    );
};

export default CountDown;