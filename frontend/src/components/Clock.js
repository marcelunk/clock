import "./Clock.css";
import React, { useEffect, usePrevious } from 'react';

export default function Clock({time, setTime}) {

    usePrevious = (value) => {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    }

    const previousTime = usePrevious(time);

    useEffect(() => {
        
    });

    return (
        <div className="clock">            
            { time.hour + ":" + time.minute + ":" + time.second }
        </div>
    )
}