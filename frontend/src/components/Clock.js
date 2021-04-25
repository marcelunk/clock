import "./Clock.css";
import React, { useEffect } from 'react';

export default function Clock(props) {

    useEffect(() => {

        }
    );

    return (
        <div className="clock">            
            { props.hour + ":" + props.minute + ":" + props.second }
        </div>
    )
}