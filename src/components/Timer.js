import React from "react";

import Clock from "./Clock.js";

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isRunning: true,
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
      this.setState(
        {
          timerTicksLeft: this.state.timerTicksLeft - 1
        },
        () => {
          this.forceUpdate();
        }
      );
    } else {
      this.props.onFinished();
    }
  }

  pause() {
    this.setState(state => ({ isRunning: !state.isRunning }));
  }

  stop() {
    this.setState(
      state => ({
        timerTicksLeft: 0,
        isRunning: !state.isRunning
      }),
      //ensures that view are updates after state change
      () => this.forceUpdate()
    );
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
            <button className="btn btn-primary" onClick={() => this.pause()}>
              {this.state.isRunning ? "Pause" : "Start"}
            </button>
          </div>
          <div className="col justify-content-start">
            <button className="btn btn-primary" onClick={() => this.stop()}>
              Stop
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;
