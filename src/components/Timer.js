import React from "react";

import Clock from "./Clock.js";

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isRunning: true,
      isPaused: false,
      timerTicksLeft: this.props.timerIntervalInMinutes * 60
    };
  }

  componentWillUpdate({ timerIntervalInMinutes }) {
    if (this.props.timerIntervalInMinutes !== timerIntervalInMinutes) {
      this.setState({ timerTicksLeft: timerIntervalInMinutes * 60 });
    }
  }

  onTick() {
    if (this.state.timerTicksLeft > 0) {
      this.setState({
        timerTicksLeft: this.state.timerTicksLeft - 1
      });
    } else {
      this.props.onFinished();
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Clock
            timerTicksLeft={this.state.timerTicksLeft}
            onFinished={this.props.onFinished}
            onTick={() => this.onTick()}
            isRunning={this.state.isRunning}
            isPaused={this.state.isPaused}
          />
        </div>
        <div className="row">
          <div className="col justify-content-end text-right">
            <button className="btn btn-primary">Pause</button>
          </div>
          <div className="col justify-content-start">
            <button className="btn btn-primary">Stop</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;
