import React from "react";

const ClockConsts = {
  secInMinute: 60,
  timerTickIntervalInMs: 1000
};

class Clock extends React.Component {
  timerValue = "";

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  componentWillUpdate(prevProsp) {
    console.log("update");
    this.timerValue = this.formatClock(this.props.timerTicksLeft);

    if (this.props.isRunning !== prevProsp.isRunning) {
      if (this.props.isRunning) {
        this.stopTimer();
      } else {
        this.startTimer();
      }
    }

    console.log(`Running: ${this.props.isRunning}`);
  }

  startTimer() {
    this.timerId = setInterval(
      () => this.props.onTick(),
      ClockConsts.timerTickIntervalInMs
    );
  }

  stopTimer() {
    clearInterval(this.timerId);
  }

  formatClock(ticksLeft) {
    let sec = ticksLeft % ClockConsts.secInMinute;
    let min = (ticksLeft - sec) / ClockConsts.secInMinute;

    return sec > 9 ? `${min}:${sec}` : `${min}:0${sec}`;
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="text-center font-weight-bold aligh-middle">
              {this.timerValue}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Clock;
