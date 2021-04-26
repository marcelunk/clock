import "./Button.css";
import React from "react";

export default function AddHourButton({display, hour, setHour}) {

    const getTime = (hour) => {
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
        <div className="button" onClick={() => getTime(hour)}>
            {display}
        </div>
    )
}