import React from "react";
import todoData from "./todoData";

class TodoItem extends React.Component {
  constructor() {
    super();
    this.state = {
      isChecked: false
    };
  }

  render() {
    let checkedDisplay;
    if (this.state.isChecked === true) {
      checkedDisplay = true;
    } else {
      checkedDisplay = false;
    }
    return (
      <div>
        <input type="checkbox" checked={checkedDisplay} />
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default TodoItem;
