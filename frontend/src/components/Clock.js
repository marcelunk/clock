import "./Clock.css";
import React, { useEffect, usePrevious, useRef } from 'react';

export default function Clock({hour, minute, second, setHour, setMinute, setSecond}) {

    const usePrevious = (value) => {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    }

    const prevHour = usePrevious(hour);
    const prevMinute = usePrevious(minute);
    const prevSecond = usePrevious(second);

    console.log(prevSecond)

    useEffect(() => {
        setInterval(() => {
            if (second >= 59) {
                setMinute(prevMinute + 1);
                setSecond(0);               
            }
            if (minute >= 59) {
                setHour(prevHour + 1);
                setMinute(0);
                setSecond(0);
            }
            if (hour >= 24) {
                setHour(0);
                setMinute(0);
                setSecond(0);
            }
            setSecond(prevSecond + 1);
            // console.log(time.hour +":"+time.minute +":"+time.second);
        }, 1000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [second]);

    return (
        <div className="clock">            
            { hour + ":" + minute + ":" + second }
        </div>
    )
}