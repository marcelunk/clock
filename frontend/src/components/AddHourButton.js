import "./Button.css";
import React from "react";

/**
 * Button which adds an hour to the current time.
 * 
 * @param {string} display  The text displayed on the button. 
 * @param {integer} hour    The current hour of the clock.
 * @param {function} setHour    Setter to change the hour of the clock.
 * @returns {HTMLDivElement}
 * @author Marcel Unkauf
 */

export default function AddHourButton({display, hour, setHour}) {

    function addHour(hour) {
        let request = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ hour: hour })
        };
    
        fetch("http://localhost:8080/addhour", request)
            .then(response => response.json())
            .then(data => { 
                console.log(data);
                setHour(data.hour);
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="button" onClick={() => addHour(hour)}>
            {display}
        </div>
    )
}