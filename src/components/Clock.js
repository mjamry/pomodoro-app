import React from "react";

const ClockConsts = {
  secInMinute: 60,
  timerTickIntervalInMs: 1000
};

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timerTicksLeft:
        this.props.timerIntervalInMinutes * ClockConsts.secInMinute,
      timerValue: ""
    };
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  componentWillReceiveProps({ timerIntervalInMinutes }) {
    this.setState({
      timerTicksLeft: timerIntervalInMinutes * ClockConsts.secInMinute
    });

    this.startTimer();
  }

  startTimer() {
    this.timerId = setInterval(
      () => this.onTick(),
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

  onTick() {
    if (this.state.timerTicksLeft >= 0) {
      this.setState({
        timerTicksLeft: this.state.timerTicksLeft - 1,
        timerValue: this.formatClock(this.state.timerTicksLeft)
      });
    } else {
      this.stopTimer();
      this.props.onFinished();
    }
  }

  render() {
    return <div>{this.state.timerValue}</div>;
  }
}

export default Clock;
