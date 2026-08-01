"use client"
import { useEffect, useState } from "react";
import { PRICING_DEADLINE } from "../utils/stripePrices";

const getRemaining = () => {
    const difference = PRICING_DEADLINE.getTime() - Date.now();
    if (difference <= 0) {
        return { expired: true as const, days: "00", hours: "00", minutes: "00", seconds: "00" };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
        expired: false as const,
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
    };
};

const RegisterCountDown = ({ onExpired }: { onExpired?: () => void } = {}) => {
    const [remaining, setRemaining] = useState(getRemaining);

    useEffect(() => {
        const tick = () => {
            const next = getRemaining();
            setRemaining(next);
            if (next.expired) onExpired?.();
        };
        tick();
        const interval = setInterval(tick, 1000);
        return () => clearInterval(interval);
    }, [onExpired]);

    if (remaining.expired) return null;

    const units = ["days", "hrs", "mins", "seconds"] as const;
    const values = [remaining.days, remaining.hours, remaining.minutes, remaining.seconds];

    return (
        <div className="flex flex-col items-center w-full max-w-xl">
            <div className="flex flex-row flex-wrap items-baseline justify-center w-full gap-x-2 gap-y-1 sm:gap-x-3">
                {values.map((value, index) => (
                    <span
                        key={units[index]}
                        className="inline-flex items-baseline gap-1 font-bold tabular-nums text-lime-700"
                    >
                        <span className="text-2xl sm:text-3xl md:text-4xl">{value}</span>
                        <span className="text-sm font-normal normal-case sm:text-base">{units[index]}</span>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default RegisterCountDown;
