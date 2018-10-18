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
          <div className="form-row">
            <div className="col-auto">
              <input
                className="form-control mb-2"
                placeholder="Add new task"
                type="text"
                value={this.state.taskName}
                onChange={e => this.onChange(e)}
              />
            </div>
            <div className="col-auto">
              <button
                type="submit"
                className="btn btn-primary mb-2"
                disabled={this.state.taskName === ""}
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default TaskAddForm;
