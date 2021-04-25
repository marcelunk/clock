import React, { Component, useState } from 'react';
import "./App.css";
import Clock from "./components/Clock";
import Button from "./components/Button";
import AddHourButton from "./components/AddHourButton";

class App extends Component {
  constructor(props){
    super(props);
     
    this.state = {
      region: "Europa",
      city: "Berlin",
      hour: 0,
      minute: 0,
      second: 0,
    }

    this.setHour = this.setHour.bind(this);
    this.setMinute = this.setMinute.bind(this);
    this.setSecond = this.setSecond.bind(this);
  }

  setHour(newHour) {
    this.setState((state) => {
      return {hour: newHour}
    });
  }

  setMinute(newMinute) {
    this.setState((state) => {
      return {minute: newMinute}
    });
  }

  setSecond(newSecond) {
    this.setState((state) => {
      return {second: newSecond}
    });
  }

  componentDidMount() {
    setInterval(() => {
        if (this.state.second >= 59) {
            this.setState((prevState) => ({ minute: prevState.minute + 1, second: 0 }));                
        }
        if (this.state.minute >= 59) {
            this.setState((prevState) => ({ hours: prevState.hour + 1, minute: 0, second: 0 })); 
        }
        if (this.state.hour >= 23) {
            this.setState((prevState) => ({ hour: 0, minute: 0, second: 0 })); 
        }
        this.setState((prevState) => ({ second: prevState.second + 1 }))
    }, 1000);
  }

  render() {
    return (
      <div className="grid">
        <Clock hour={this.state.hour} minute={this.state.minute} second={this.state.second} />
        <Button display="NY" region="America" city="New_York" setRegion={this.setRegion} setCity={this.setCity} setHour={this.setHour} setMinute={this.setMinute} setSecond={this.setSecond} />
        <Button display="D" region="Europe" city="Berlin" setRegion={this.setRegion} setCity={this.setCity} setHour={this.setHour} setMinute={this.setMinute} setSecond={this.setSecond} />
        <AddHourButton display="1+" hour={this.state.hour} setHour={this.setHour} />
      </div>
    );
  }
}

export default App;
