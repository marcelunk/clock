import React, { useEffect, useState } from 'react';
import "./App.css";
import Clock from "./components/Clock";
import TimeZoneButton from "./components/TimeZoneButton";
import AddHourButton from "./components/AddHourButton";

/**
 * A clock which communicates with a time server through user input.
 * 
 * @returns {HTMLDivElement}
 * @author Marcel Unkauf
 */
export default function App() {
  const buttons = [
    {display:"DE", region:"Europe", city:"Berlin"},
    {display:"NY", region:"America", city:"New_York"},
  ]
  
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [activeButton, setActive] = useState(buttons[0].display);

  useEffect(() => {
    getTime("Europe", "Berlin");
  }, []);

  const getTime = (region, city) => {
    let request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ region: region, city: city })
    };

    fetch("http://localhost:8080/time", request)
        .then(response => response.json())
        .then(data => { 
            console.log(data);
            setHour(data.hour);
            setMinute(data.minute);
            setSecond(data.second);
        })
        .catch(error => console.log(error))
  }
  
  return (
    <div className="parent">
      <Clock hour={hour} setHour={setHour} minute={minute} setMinute={setMinute} second={second} setSecond={setSecond} />
      <div className="buttonsParent">
        {buttons.map((button) => (
          <TimeZoneButton key={button.display} display={button.display} region={button.region} city={button.city} getTime={getTime} active={activeButton} setActive={setActive}/> 
        ))}
        <AddHourButton display="1+" hour={hour} setHour={setHour} />
      </div>
    </div>
  );
}

