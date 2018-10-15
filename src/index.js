import React from "react";
import ReactDOM from "react-dom";

const Header = props => {
  return <div>{props.name}</div>;
};

class Clock extends React.Component {
  render() {
    return <div>20:00</div>;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      consts: {
        appName: "Pomodoro App"
      }
    };
  }

  render() {
    return (
      <div>
        <Header name={this.state.consts.appName} />
        <Clock />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
