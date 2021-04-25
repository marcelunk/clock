import "./Clock.css";
import React from 'react';

export default function Clock(props) {

    return (
        <div className="clock">            
            { props.hour + ":" + props.minute + ":" + props.second }
        </div>
    )
}