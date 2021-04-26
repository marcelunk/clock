import React, { Component, useEffect, useState } from 'react';
import "./App.css";
import Clock from "./components/Clock";
import Button from "./components/Button";
import AddHourButton from "./components/AddHourButton";

export default function App() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  const buttons = [
    {display:"NY", region:"America", city:"New_York"},
    {display:"D", region:"Europe", city:"Berlin"},
  ]

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
    <div className="grid">
      <Clock hour={hour} setHour={setHour} minute={minute} setMinute={setMinute} second={second} setSecond={setSecond} />
      {buttons.map((button) => (
        <Button key={button.display} display={button.display} region={button.region} city={button.city} getTime={getTime} /> 
      ))}
      <AddHourButton display="1+" hour={hour} setHour={setHour} />
    </div>
  );
}

