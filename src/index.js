import React from "react";
import ReactDOM from "react-dom";

import Timer from "./components/Timer.js";
import Log from "./common/Logger.js";

const AppSettings = {
  appName: "Pomodoro App",
  taskTime: 0.5,
  breakTime: 0.1,
  longBreakTime: 0.2
};

const Header = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <p className="text-center font-weight-bold">{props.name}</p>
        </div>
      </div>
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDuringTask: true,
      timerTime: AppSettings.taskTime
    };
  }

  timerFinished = () => {
    this.setState(
      state => ({
        timerTime: state.isDuringTask
          ? AppSettings.breakTime
          : AppSettings.taskTime,
        isDuringTask: !state.isDuringTask
      }),
      Log.debug(this.state.isDuringTask ? "Task" : "Break")
    );
  };

  render() {
    return (
      <div>
        <Header name={AppSettings.appName} />
        <Timer
          timerIntervalInMinutes={this.state.timerTime}
          onFinished={this.timerFinished}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
