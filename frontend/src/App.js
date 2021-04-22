import React, { useState } from 'react';
import "./App.css";
import Clock from "./components/Clock";
import Button from "./components/Button";

function App() {
  const [timezone, setTimezone] = useState("Europe/Berlin");

  return (
    <div className="grid">
      <Clock timezone={timezone} />
      <Button display="NY" setTimeZone={setTimezone}/>
      <Button display="D" setTimeZone={setTimezone}/>
      <Button display="1+" />
    </div>
  )
}

export default App;
