import React, { useState } from 'react';
import "./App.css";
import Clock from "./components/Clock";
import Button from "./components/Button";

function App() {
  const [timeZone, setTimeZone] = useState("Europe/Berlin");
  const [hour, setHour] = useState(5);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  return (
    <div className="grid">
      <Clock hour={hour} minute={minute} second={second} />
      <Button display="NY" region="America" city="New_York" setTimeZone={setTimeZone} setHour={setHour} setMinute={setMinute} setSecond={setSecond} />
      <Button display="D" region="Europe" city="Berlin" setTimeZone={setTimeZone} setHour={setHour} setMinute={setMinute} setSecond={setSecond} />
      <Button display="1+" />
    </div>
  );
}

export default App;
