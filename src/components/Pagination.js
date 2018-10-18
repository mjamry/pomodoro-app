import React from "react";

const NumberOfItemsOnPage = 3;

class Pagination extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentFirstItem: 0
    };
  }

  onPrevSelected() {
    let current = this.state.currentFirstItem - NumberOfItemsOnPage;
    if (current < 0) {
      current = 0;
    }
    this.setState(
      { currentFirstItem: current },
      console.log(
        `Prev | start: ${this.state.currentFirstItem} | current: ${current}`
      )
    );
  }

  onNextSelected() {
    let current = this.state.currentFirstItem + NumberOfItemsOnPage;
    if (current < this.props.items.length) {
      this.setState(
        { currentFirstItem: current },
        console.log(
          `Next | start: ${this.state.currentFirstItem} | current: ${current}`
        )
      );
    }
  }

  getItems() {
    let itemsOnPage = this.props.items.slice(
      this.state.currentFirstItem,
      this.state.currentFirstItem + NumberOfItemsOnPage
    );
    return itemsOnPage;
  }

  render() {
    return (
      <div>
        <div className="row">
          <ul className="list-group">
            {this.getItems().map(item => (
              <li className="list-group-item">{item}</li>
            ))}
          </ul>
        </div>
        <div className="row pagination">
          <div
            className={
              "page-item " +
              (this.state.currentFirstItem === 0 ? "disabled" : "")
            }
          >
            <button className="page-link" onClick={() => this.onPrevSelected()}>
              Prev
            </button>
          </div>
          <div
            class={
              "page-item " +
              (this.state.currentFirstItem + NumberOfItemsOnPage >=
              this.props.items.length
                ? "disabled"
                : "")
            }
          >
            <button className="page-link" onClick={() => this.onNextSelected()}>
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Pagination;
