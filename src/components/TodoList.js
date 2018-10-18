import React from "react";

import Task from "./Task.js";
class TodoList extends React.Component {
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

export default TodoList;
