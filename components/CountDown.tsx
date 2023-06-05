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
                        <div className="flex flex-row justify-center w-full gap-2 px-20 mx-auto text-center sm:px-60">
                            <div className="flex flex-col">
                                <div className="flex flex-col p-2 bg-white rounded-md md:p-6">
                                    <h2 className="font-bold text-center text-md text-lime-700 md:text-4xl">
                                        {days}
                                    </h2>
                                </div>
                                <div className="p-2 mt-4 bg-white rounded-md">
                                    <p className="text-base font-semibold md:text-md">Days</p>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <div className="flex flex-col p-2 bg-white rounded-md md:p-6">
                                    <h2 className="font-bold text-center text-md text-lime-700 md:text-4xl">
                                        {hours}
                                    </h2>
                                </div>
                                <div className="p-2 mt-4 bg-white rounded-md">
                                    <p className="text-base font-semibold md:text-md">Hours</p>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <div className="flex flex-col p-2 bg-white rounded-md md:p-6">
                                    <h2 className="font-bold text-center text-md text-lime-700 md:text-4xl">
                                        {minutes}
                                    </h2>
                                </div>
                                <div className="p-2 mt-4 bg-white rounded-md">
                                    <p className="text-base font-semibold md:text-md">Minutes</p>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <div className="flex flex-col p-2 bg-white rounded-md md:p-6">
                                    <h2 className="font-bold text-center text-md text-lime-700 md:text-4xl">
                                        {seconds}
                                    </h2>
                                </div>
                                <div className="p-2 mt-4 bg-white rounded-md">
                                    <p className="text-base font-semibold md:text-md">Seconds</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center pt-6 mx-auto text-center lg:px-44 md:px-24 msm:px-12">
                            <p className="px-6 py-4 mx-auto text-lg font-bold tracking-tight text-gray-900 bg-yellow-500 w-max sm:text-2xl">Register Now </p>
                        </div>
                    </div >
                </>
            )}
        </>
    );
};

export default CountDown;