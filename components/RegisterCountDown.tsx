"use client"
import { useEffect, useState } from "react";

const RegisterCountDown = () => {
    const [eventTime, setEventTime] = useState(false);
    const [days, setDays] = useState("00");
    const [hours, setHours] = useState("00");
    const [minutes, setMinutes] = useState("00");
    const [seconds, setSeconds] = useState("00");

    const target = new Date("2026-06-18T23:59:00");

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const difference = target.getTime() - now.getTime();

            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            setDays(String(d).padStart(2, '0'));
            
            const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            setHours(String(h).padStart(2, '0'));

            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            setMinutes(String(m).padStart(2, '0'));

            const s = Math.floor((difference % (1000 * 60)) / 1000);
            setSeconds(String(s).padStart(2, '0'));

            if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
                setEventTime(true);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const units = ['days', 'hrs', 'mins', 'seconds'] as const

    return (
        <div className="flex flex-col items-center w-full max-w-xl">
            {!eventTime && (
                <div className="flex flex-row flex-wrap items-baseline justify-center w-full gap-x-2 gap-y-1 sm:gap-x-3">
                    {[days, hours, minutes, seconds].map((value, index) => (
                        <span
                            key={index}
                            className="inline-flex items-baseline gap-1 font-bold tabular-nums text-lime-700"
                        >
                            <span className="text-lg sm:text-xl md:text-2xl">{value}</span>
                            <span className="text-xs font-normal normal-case sm:text-sm">{units[index]}</span>
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};

export default RegisterCountDown;