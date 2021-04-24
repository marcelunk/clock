import "./Clock.css";
import React from "react";
import LiveClock from 'react-live-clock';

export default function Clock(props) {
    return (
        <div className="clock">            
            <LiveClock 
                format={"HH:mm:ss"} 
                ticking={true} 
                timezone={props.timeZone} />
        </div>
    )
}