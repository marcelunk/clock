import "./Clock.css";
import React, { useEffect, useState } from 'react';

export default function Clock(props) {

    const[hours, setHours] = useState(0);
    const[minutes, setMinutes] = useState(0);
    const[seconds, setSeconds] = useState(0);

    useEffect( () => {
        setTimeout(() => {
            setSeconds(seconds+1)
            console.log(seconds)
            if(seconds == 60) {
                setSeconds(0)
                setMinutes(minutes+1)
                if(minutes == 60) {
                    setMinutes(minutes%60)
                    setHours(hours+1)
                    if(hours == 24) {
                        setHours(hours%1)
                    }
                }
            }
        }, 100);
    }, [hours, minutes, seconds]);

    return (
        <div className="clock">            
            {hours}:{minutes}:{seconds}
        </div>
    )
}