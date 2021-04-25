import "./Clock.css";
import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hour: props.hour,
            minute: props.minute,
            second: props.second,
        };
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
        }, 100);
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="clock">            
                { this.state.hour + ":" + this.state.minute + ":" + this.state.second }
            </div>
        )
    }
}

export default Clock;