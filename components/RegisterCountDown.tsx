"use client"
import { useEffect, useState } from "react";

const RegisterCountDown = () => {
    const [eventTime, setEventTime] = useState(false);
    const [days, setDays] = useState("00");
    const [hours, setHours] = useState("00");
    const [minutes, setMinutes] = useState("00");
    const [seconds, setSeconds] = useState("00");
    const [localizedDate, setLocalizedDate] = useState("");
    
    const target = new Date("2025-07-18T23:59:00");

    useEffect(() => {
        setLocalizedDate(target.toLocaleDateString(undefined, { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }));

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

    return (
        <div className="flex flex-col items-center">

            {/* Countdown timer */}
            {!eventTime && (
                <div className="flex-col justify-self-center">
                    <div className="flex flex-row justify-center w-full mx-auto text-center">
                        {[days, hours, minutes, seconds].map((value, index) => (
                            <div key={index} className="flex flex-col">
                                <div className="flex flex-col p-2 mx-1 rounded-md md:p-4">
                                    <h2 className="font-bold text-center text-md text-lime-700 md:text-4xl">
                                        {value}
                                        <span className="text-sm font-normal">
                                            {['days', 'hrs', 'mins', 'seconds'][index]}
                                        </span>
                                    </h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default RegisterCountDown;