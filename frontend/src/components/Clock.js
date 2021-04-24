import "./Clock.css";
import React from "react";

export default function Clock(props) {
    

    return (
        <div className="clock">            
            {hours}:{minutes}:{seconds}
        </div>
    )
}