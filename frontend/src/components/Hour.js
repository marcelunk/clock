import "./Clock.css";
import React from 'react';

export default function Hour(props) {

    return (
        <div className="clock">            
            { props.hour }
        </div>
    )
}