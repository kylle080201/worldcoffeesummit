"use client"
import { useEffect, useState } from "react";

const RegisterCountDown = () => {
    const [eventTime, setEventTime] = useState(false);
    const [days, setDays] = useState("00");
    const [hours, setHours] = useState("00");
    const [minutes, setMinutes] = useState("00");
    const [seconds, setSeconds] = useState("00");
    const target = new Date("05/30/2025 09:00:00");

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
                    <div className="flex-col justify-self-center">
                        <div className="flex flex-row justify-center w-full mx-auto text-center">
                            <div className="flex flex-col">
                                <div className="flex flex-col p-2 mr-1 rounded-md md:p-4">
                                    <h2 className="font-bold text-center text-md text-lime-700 md:text-4xl">
                                        {days}
                                        <span className="text-sm font-normal">days</span>
                                    </h2>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <div className="flex flex-col p-2 mx-1 rounded-md md:p-4">
                                    <h2 className="font-bold text-center text-md text-lime-700 md:text-4xl">
                                        {hours}
                                        <span className="text-sm font-normal">hrs</span>
                                    </h2>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <div className="flex flex-col p-2 mx-1 rounded-md md:p-4">
                                    <h2 className="font-bold text-center text-md text-lime-700 md:text-4xl">
                                        {minutes}
                                        <span className="text-sm font-normal">mins</span>
                                    </h2>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <div className="flex flex-col p-2 ml-1 rounded-md md:p-4">
                                    <h2 className="font-bold text-center text-md text-lime-700 md:text-4xl">
                                        {seconds}
                                        <span className="text-sm font-normal">seconds</span>
                                    </h2>
                                </div>
                            </div>

                        </div>
                    </div >
                </>
            )}
        </>
    );
};

export default RegisterCountDown;