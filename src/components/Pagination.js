import React from "react";

const NumberOfItems = 3;

class Pagination extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 0
    };
  }

  invalidateItems() {}

  render() {
    return (
      <div>
        <div className="row">
          <ul className="list-group">
            {this.props.items.map(item => (
              <li className="list-group-item">{item}</li>
            ))}
          </ul>
        </div>
        <div className="row">
          <button onClick={() => this.onPrevSelected()}>Prev</button>
          <button onClick={() => this.onNextSelected()}>Next</button>
        </div>
      </div>
    );
  }
}

export default Pagination;
