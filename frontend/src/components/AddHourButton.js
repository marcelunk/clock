import "./Button.css";
import React, { useEffect } from "react";

export default function AddHourButton(props) {

    const request = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ hour: props.hour })
    };

    function getTime() {
        fetch("http://localhost:8080/addhour", request)
            .then(response => response.json())
            .then(data => { 
                console.log(data);
                props.setHour(data.hour);
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="button" onClick={() => getTime()}>
            {props.display}
        </div>
    )
}