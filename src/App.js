import React from "react";
import TodoItem from "./TodoItem";
import todoData from "./todoData";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(prevState => {
//       return {
//         count: prevState.count + 1 // return new version of state
//       };
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.handleClick}>Change</button>
//         {/* Can take obj literal or function that takes prev state as param, returning object literal that represents new version of state */}
//         {/* <ChildComponent count={this.state.count} /> */}
//       </div>
//     );
//   }
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todoData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    console.log("Changed", id);
    // loop through array and create new array using .map method with updated value
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id == id) {
          todo.completed = !todo.completed;
        }
        return todo; // puts todo item in new array in same index of original array
      });
      return {
        todos: updatedTodos // array just created
      };
    });
  }

  render() {
    const todoItems = this.state.todos.map(item => (
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));

    return <div>{todoItems}</div>;
  }
}

export default App;
