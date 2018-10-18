import React from "react";
import ReactDOM from "react-dom";

import Timer from "./components/Timer.js";
import Log from "./common/Logger.js";
import TaskAddForm from "./components/TaskAddForm.js";
import TasksList from "./components/TasksList.js";

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
      timerTime: AppSettings.taskTime,
      taskList: []
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

  onNewTaskAdded(newTask) {
    Log.debug(`Added new task: ${newTask.name}`);
    this.setState(prevState => ({
      taskList: [...prevState.taskList, newTask]
    }));
  }

  render() {
    return (
      <div className="app-container">
        <div className="row">
          <Header name={AppSettings.appName} />
        </div>
        <div className="row">
          <div className="col">
            <Timer
              timerIntervalInMinutes={this.state.timerTime}
              onFinished={this.timerFinished}
            />
          </div>
          <div className="col">
            <TaskAddForm onSubmitted={task => this.onNewTaskAdded(task)} />
            <TasksList tasks={this.state.taskList} />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
