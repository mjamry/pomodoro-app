import React from "react";

import Task from "./Task.js";
class TasksList extends React.Component {
  render() {
    return (
      <div>
        <ul className="list-group">
          {this.props.tasks.map(task => (
            <li className="list-group-item task-item">
              <Task name={task.name} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TasksList;
