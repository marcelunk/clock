import "./Button.css";
import React, { useEffect } from "react";

export default function Button(props) {

    const request = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ region: props.region, city: props.city })
    };

    function getTime() {
        fetch("http://localhost:8080/time", request)
            .then(response => response.json())
            .then(data => { 
                console.log(data);
                props.setHour(data.hour);
                props.setMinute(data.minute);
                props.setSecond(data.second);
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="button" onClick={() => getTime()}>
            {props.display}
        </div>
    )
}