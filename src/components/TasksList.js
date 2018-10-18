import React from "react";

import Task from "./Task.js";
class TasksList extends React.Component {
  render() {
    return (
      <div>
        {this.props.tasks.map(task => (
          <Task name={task.name} />
        ))}
      </div>
    );
  }
}

export default TasksList;
