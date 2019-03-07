import React, { Component } from "react";
import TodoItem from "./TodoItem";
import todoData from "./todoData";

// function App() {
//   const todoItems = todoData.map(item => (
//     <TodoItem key={item.id} item={item} />
//   ));
//   return <div>{todoItems}</div>;
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true
    };
  }

  render() {
    let wordDisplay;
    if (this.state.isLoggedIn === true) {
      wordDisplay = "in";
    } else {
      wordDisplay = "out";
    }

    return (
      <div>
        <h1>You're currently logged {wordDisplay}</h1>
      </div>
    );
  }
}

export default App;
