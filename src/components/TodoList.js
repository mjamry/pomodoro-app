import React from "react";

import Task from "./Task.js";
class TodoList extends React.Component {
  render() {
    return (
      <div>
        <Task name="todo1" />
        <Task name="todo2" />
        <Task name="todo3" />
      </div>
    );
  }
}

export default TodoList;
