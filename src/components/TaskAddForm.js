import React from "react";

class TaskAddForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      taskName: ""
    };
  }

  onSubmitted(e) {
    e.preventDefault();
    this.props.onSubmitted();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitted}>
          <input
            placeholder="Add new task"
            type="text"
            value={this.state.taskName}
          />
          <button type="submit" className="primary">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default TaskAddForm;
