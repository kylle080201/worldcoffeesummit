import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

const CountDown = () => {
    const [eventTime, setEventTime] = useState(false);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const target = new Date("06/21/2023 08:30:00");

    function addLeadingZeros(num, totalLength) {
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
        <div>

            {eventTime ? (
                <>
                    <h1>Event Day</h1>
                    <video autoPlay loop muted>
                        <source src="/party.mp4" />
                    </video>
                </>
            ) : (
                <>
                    <div className="flex flex-row bg-gray-100 mlg:flex-col ">
                        <div className="flex py-24 mx-auto text-center ">
                            <div className="text-center">
                                <h2 className="font-bold text-center text-lime-700 text-9xl">
                                    {days} : {hours} : {minutes} : {seconds}
                                </h2>
                                <h2 className="mt-6 text-3xl font-bold text-gray-900">
                                    Time left until the event, buy your tickets now!
                                </h2>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default CountDown;