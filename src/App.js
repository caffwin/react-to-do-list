import React from "react";
import TodoItem from "./TodoItem";
import todoData from "./todoData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1 // return new version of state
      };
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Change</button>
      </div>
    );
  }
}

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       todos: todoData
//     };
//   }

//   render() {
//     const todoItems = this.state.todos.map(item => (
//       <TodoItem key={item.id} item={item} />
//     ));

//     return <div>{todoItems}</div>;
//   }
// }

export default App;
