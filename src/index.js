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
        taskTime: 20,
        breakTime: 5,
        longBreakTime: 15
      }
    };
  }

  render() {
    return (
      <div>
        <Header name={this.state.consts.appName} />
        <Clock timerIntervalInMinutes={this.state.consts.taskTime} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
