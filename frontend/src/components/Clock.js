import "./Clock.css";
import React, { useEffect, useRef } from 'react';

export default function Clock({hour, minute, second, setHour, setMinute, setSecond}) {

    const usePrevious = (value) => {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    }

    const prevSecond = usePrevious(second);

    useEffect(() => {
        const interval = setInterval(() => {
            setSecond(second => second + 1);
            if(second >= 59) {
                setSecond(0);
                setMinute(minute => minute + 1);
                if(minute >= 59) {
                    setMinute(0);
                    setHour(hour => hour + 1);
                    if(hour >= 24) {
                        setHour(0);
                    }
                }
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [prevSecond]);

    return (
        <div className="clock">            
            { ('0'+hour).slice(-2) + ":" + ('0'+minute).slice(-2) + ":" + ('0'+second).slice(-2) }
        </div>
    )
}