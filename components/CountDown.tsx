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
    }, []);

    return (
        <>
            {eventTime ? (
                <div>
                    <h1>Event Day</h1>
                    <video autoPlay loop muted>
                        <source src="/party.mp4" />
                    </video>
                </div>
            ) : (
                <>
                    <div className="flex-col bg-gray-100 justify-self-center">
                        <div className="flex flex-row justify-center gap-4 pt-24 mx-auto text-center lg:px-44 md:px-24 msm:px-12">
                            <div className="flex flex-col w-1/4 bg-white rounded-md msm:p-2 md:p-6 lg:p-8">
                                <h2 className="font-bold text-center text-lime-700 mmd:text-5xl msm:text-xl lg:text-9xl">
                                    {days}
                                </h2>
                                <p className="font-semibold text-center text-gray-900 mmd:text-3xl msm:text-sm lg:text-5xl">
                                    Days
                                </p>
                            </div>

                            <div className="flex flex-col w-1/4 bg-white rounded-md msm:p-2 md:p-6 lg:p-8">
                                <h2 className="font-bold text-center text-lime-700 mmd:text-5xl msm:text-xl lg:text-9xl">
                                    {hours}
                                </h2>
                                <p className="font-semibold text-center text-gray-900 mmd:text-3xl msm:text-sm lg:text-5xl">
                                    Hours
                                </p>
                            </div>

                            <div className="flex flex-col w-1/4 bg-white rounded-md msm:p-2 md:p-6 lg:p-8">
                                <h2 className="font-bold text-center text-lime-700 mmd:text-5xl msm:text-xl lg:text-9xl">
                                    {minutes}
                                </h2>
                                <p className="font-semibold text-center text-gray-900 mmd:text-3xl msm:text-sm lg:text-5xl">
                                    Minutes
                                </p>
                            </div>

                            <div className="flex flex-col w-1/4 bg-white rounded-md msm:p-2 md:p-6 lg:p-8">
                                <h2 className="font-bold text-center text-lime-700 mmd:text-5xl msm:text-xl lg:text-9xl">
                                    {seconds}
                                </h2>
                                <p className="font-semibold text-center text-gray-900 mmd:text-3xl msm:text-sm lg:text-5xl">
                                    Seconds
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center pt-6 pb-24 mx-auto text-center lg:px-44 md:px-24 msm:px-12">
                            <h2 className="font-semibold lg:text-4xl msm:text-sm">
                                Time left until the event. Buy your delegate tickets now!
                            </h2>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default CountDown;