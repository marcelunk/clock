import "./Button.css";
import React from "react";

/**
 * Button which sets the clock to a specified time zone.
 * 
 * @param {string} display  The text displayed on the button. 
 * @param {string} region    Region part of the time zone id.
 * @param {string} city    City part of the time zone id.
 * @param {string} active   Indicates the active time zone.
 * @param {function} setActive    Activates the button which displays the current time.
 * @param {function} getTime    Gets the specified time from the time server.
 * @returns {HTMLDivElement}
 * @author Marcel Unkauf
 */
export default function TimeZoneButton({display, region, city, active, setActive, getTime}) {

    return (
        <div className={(active == display ? "active" : "") + " button"} 
                onClick={() => { getTime(region, city); setActive(display)}} >
            {display}
        </div>
    )
}