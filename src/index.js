import React from "react";
import ReactDOM from "react-dom";

import Clock from "./components/Clock.js";

const Header = props => {
  return <div>{props.name}</div>;
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      consts: {
        appName: "Pomodoro App",
        taskTime: 0.5,
        breakTime: 5,
        longBreakTime: 15
      }
    };
  }

  timerFinished() {
    alert("Timer Finished!");
  }

  render() {
    return (
      <div>
        <Header name={this.state.consts.appName} />
        <Clock
          timerIntervalInMinutes={this.state.consts.taskTime}
          onFinished={this.timerFinished}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
