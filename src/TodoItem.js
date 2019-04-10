import React from "react";
import todoData from "./todoData";

function TodoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed} // Checks and unchecks checkbox
        onChange={() => props.handleChange(props.item.id)}
      />
      <p style={props.items.complete ? completedStyle : null}>
        {props.item.text}
      </p>
    </div>
  );
}

export default TodoItem;
