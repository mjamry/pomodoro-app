import React from "react";
import ReactDOM from "react-dom";

import Clock from "./components/Clock.js";

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
    this.setState(state => ({
      taskTime: state.isDuringTask
        ? AppSettings.breakTime
        : AppSettings.taskTime,
      isDuringTask: !state.isDuringTask
    }));
  };

  render() {
    return (
      <div>
        <Header name={AppSettings.appName} />
        <Clock
          timerIntervalInMinutes={this.state.taskTime}
          onFinished={this.timerFinished}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
