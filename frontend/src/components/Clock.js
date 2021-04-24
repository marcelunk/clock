import "./Clock.css";
import React, {Component} from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            seconds: 0,
            minutes: 0,
            hours: 0
        };
    }

    componentDidMount() {
        setInterval(() => {
            console.log(this.state.hours + " " + this.state.minutes + " " + this.state.seconds)
            if (this.state.seconds >= 59) {
                this.setState((prevState) => ({ minutes: prevState.minutes + 1, seconds: 0 }));                
            }
            if (this.state.minutes >= 59) {
                this.setState((prevState) => ({ hours: prevState.hours + 1, minutes: 0, seconds: 0 })); 
            }
            if (this.state.hours >= 23) {
                this.setState((prevState) => ({ hours: 0, minutes: 0, seconds: 0 })); 
            }
            this.setState((prevState) => ({ seconds: prevState.seconds + 1 }))
        }, 100);
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="clock">            
                { this.state.hours + ":" + this.state.minutes + ":" + this.state.seconds }
            </div>
        )
    }
}

export default Clock;