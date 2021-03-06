import React from 'react';
import './App.css';

let cond = false;

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            minutes: 2,
            seconds: 0,
        };
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.tick();
        }, 1000);
    }
    componentWillUnmount() {
       if (this.interval){
           clearInterval(this.interval);
       }
       this.interval = null;

    }
    tick() {

        let seconds = this.state.seconds;
        let minutes = this.state.minutes;

        if (minutes === 0 && seconds === 0) {
            this.props.submit();
        }

        if (seconds === 0) {
            seconds = 60;
            minutes = minutes - 1;
        }
        seconds = seconds - 1;

        this.setState({
            seconds: seconds,
            minutes: minutes
        });
        }
    zeroPad(value) {
        return value < 10 ? `0${value}` : value;
    }
    render() {
        return (
            <div>
                <div >
                    <div className="numbers">
                        <h1><span>{this.zeroPad(this.state.minutes)}:</span>
                            <span>{this.zeroPad(this.state.seconds)} </span></h1>

                    </div>
                </div>

            </div>);
    }
}

