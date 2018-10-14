import React, { Component } from 'react';

class Stopwatch extends Component {
  state = {
    isRunning: false
  };

  handleStopwatch = () => {
    this.setState((prevState) => ({
      isRunning: !prevState.isRunning
    }));
  }

  render() {
    const { isRunning } = this.state;

    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">0</span>
        <button onClick={this.handleStopwatch}>{ isRunning ? 'Stop' : 'Start' }</button>
        <button>Reset</button>
      </div>
    );
  }
}

export default Stopwatch;
