import "./Clock.css";
import React, { useEffect, usePrevious, useRef } from 'react';

export default function Clock({time, setTime}) {

    const usePrevious = (value) => {
        const ref = useRef();
        console.log(ref);
        useEffect(() => {
            ref.current = value;
        });
        return ref;
    }

    console.log(time);

    const prevTime = usePrevious(time);

    useEffect(() => {
        setInterval(() => {
            if (time.second >= 59) {
                let newTime = {
                    hour: time.hour,
                    minute: prevTime.minute + 1,
                    second: 0,
                }
                setTime(newTime);                
            }
            if (time.minute >= 59) {
                let newTime = {
                    hour: prevTime.hour + 1,
                    minute: 0,
                    second: 0,
                }
                setTime(newTime);
            }
            if (time.hour >= 24) {
                let newTime = {
                    hour: 0,
                    minute: 0,
                    second: 0,
                }
                setTime(newTime);
            }
            let newTime = {
                hour: 0,
                minute: 0,
                second: prevTime.second + 1,
            }
            // console.log(time.hour +":"+time.minute +":"+time.second);
            setTime(newTime);
        }, 1000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="clock">            
            { time.hour + ":" + time.minute + ":" + time.second }
        </div>
    )
}