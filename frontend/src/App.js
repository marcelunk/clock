import React, { Component, useState } from 'react';
import "./App.css";
import Clock from "./components/Clock";
import Button from "./components/Button";
import AddHourButton from "./components/AddHourButton";

export default function App() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  return (
    <div className="grid">
      <Clock hour={hour} setHour={setHour} minute={minute} setMinute={setMinute} second={second} setSecond={setSecond} />
      {/* <Button display="NY" region="America" city="New_York" setRegion={this.setRegion} setCity={this.setCity} setHour={this.setHour} setMinute={this.setMinute} setSecond={this.setSecond} />
      <Button display="D" region="Europe" city="Berlin" setRegion={this.setRegion} setCity={this.setCity} setHour={this.setHour} setMinute={this.setMinute} setSecond={this.setSecond} />
      <AddHourButton display="1+" hour={this.state.hour} setHour={this.setHour} /> */}
    </div>
  );
}

