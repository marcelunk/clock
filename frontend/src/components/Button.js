import "./Button.css";
import React, { useEffect } from "react";

export default function Button({getTime, display, region, city, active, setActive}) {

    return (
        <div className={(active == display ? "active" : "") + " button"} 
                onClick={() => { getTime(region, city); setActive(display)}} >
            {display}
        </div>
    )
}