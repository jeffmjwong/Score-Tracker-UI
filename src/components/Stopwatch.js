import React, { Component } from 'react';

class Stopwatch extends Component {
  state = {
    isRunning: false,
    elapsedTime: 0,
    previousTime: 0
  };

  componentDidMount() {
    this.intervalID = setInterval(this.tick, 100);
  }

  tick = () => {
    const { isRunning } = this.state;

    if (isRunning) {
      this.setState((prevState) => ({
        elapsedTime: prevState.elapsedTime + (Date.now() - prevState.previousTime),
        previousTime: Date.now()
      }));
    }
  }

  handleStopwatch = () => {
    this.setState((prevState) => ({
      isRunning: !prevState.isRunning
    }), () => {
      const { isRunning } = this.state;
      if (isRunning) this.setState({ previousTime: Date.now() });
    });
  }

  render() {
    const { isRunning, elapsedTime } = this.state;
    const seconds = Math.floor(elapsedTime / 1000);

    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{ seconds }</span>
        <button onClick={this.handleStopwatch}>{ isRunning ? 'Stop' : 'Start' }</button>
        <button onClick={() => this.setState({ elapsedTime: 0 })}>Reset</button>
      </div>
    );
  }
}

export default Stopwatch;
