import React from "react";

import Task from "./Task.js";
import Pagination from "./Pagination.js";

class TasksList extends React.Component {
  render() {
    return (
      <div>
        <Pagination
          items={this.props.tasks.map(task => (
            <Task name={task.name} />
          ))}
        />
      </div>
    );
  }
}

export default TasksList;
