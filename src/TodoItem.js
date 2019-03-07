import React from "react";
import todoData from "./todoData";

function TodoItem(props) {
  return (
    <div>
      <input type="checkbox" checked={props.item.completed} />
      <p>{props.item.text}</p>
    </div>
  );
}

export default TodoItem;
