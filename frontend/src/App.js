import React, { useState } from 'react';
import "./App.css";
import Clock from "./components/Clock";
import Button from "./components/Button";

function App() {
  const [timeZone, setTimeZone] = useState("Europe/Berlin");

  return (
    <div className="grid">
      <Clock timeZone={timeZone} />
      <Button display="NY" timeZone="NewYork" setTimeZone={setTimeZone}/>
      <Button display="D" timeZone="Germany" setTimeZone={setTimeZone}/>
      <Button display="1+" />
    </div>
  )
}

export default App;
