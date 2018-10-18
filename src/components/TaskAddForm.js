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
    this.props.onSubmitted({
      name: this.state.taskName,
      timestamp: Date.now()
    });
    this.setState({ taskName: "" });
  }

  onChange(e) {
    this.setState({ taskName: e.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.onSubmitted(e)}>
          <input
            placeholder="Add new task"
            type="text"
            value={this.state.taskName}
            onChange={e => this.onChange(e)}
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
