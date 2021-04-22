import "./Button.css";
import React from "react";

//async function
//const response = await fetch("http://localhost:8000/timezone")
//console.log(await response.json());

function getTimeZone() {
    fetch("http://localhost:8080/timezone")
        .then(response => response.json())
        .then(data => { console.log(data) })
}

export default function Button(props) {
    return (
        <div className="button" onClick={getTimeZone}>
            {props.display}
        </div>
    )
}