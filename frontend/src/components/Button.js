import "./Button.css";
import React, { useEffect } from "react";

//async function
//const response = await fetch("http://localhost:8000/timezone")
//console.log(await response.json());

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
                setTimeZone();
            })
            .catch(error => console.log(error))
    }

    function setTimeZone() {
        props.setRegion(props.region);
        props.setCity(props.city);
    }

    return (
        <div className="button" onClick={() => getTime()}>
            {props.display}
        </div>
    )
}