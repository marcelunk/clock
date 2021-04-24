import "./Button.css";
import React, { useEffect } from "react";

//async function
//const response = await fetch("http://localhost:8000/timezone")
//console.log(await response.json());


export default function Button(props) {

    function getTimeZone() {
        fetch("http://localhost:8080/timezone?timezone="+ props.timeZone)
            .then(response => response.json())
            .then(data => { 
                console.log(data)
                props.setTimeZone(data.timeZone) })
            .catch(error => console.log(error))
    }

    return (
        <div className="button" onClick={() => getTimeZone()}>
            {props.display}
        </div>
    )
}