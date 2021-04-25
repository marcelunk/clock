import React, { Component, useState } from 'react';
import "./App.css";
import Clock from "./components/Clock";
import Button from "./components/Button";
import AddHourButton from "./components/AddHourButton";

export default function App() {
  
  const initialTime = {
    hour: 0,
    minute: 0,
    second: 0,
  }
  
  const [time, setTime] = useState(initialTime);

  return (
    <div className="grid">
      <Clock time={time} setTime={setTime} />
      {/* <Button display="NY" region="America" city="New_York" setRegion={this.setRegion} setCity={this.setCity} setHour={this.setHour} setMinute={this.setMinute} setSecond={this.setSecond} />
      <Button display="D" region="Europe" city="Berlin" setRegion={this.setRegion} setCity={this.setCity} setHour={this.setHour} setMinute={this.setMinute} setSecond={this.setSecond} />
      <AddHourButton display="1+" hour={this.state.hour} setHour={this.setHour} /> */}
    </div>
  );
}

