import React from "react";
import TodoItem from "./TodoItem";
import todoData from "./todoData";

// function App() {
//   const todoItems = todoData.map(item => (
//     <TodoItem key={item.id} item={item} />
//   ));
//   return <div>{todoItems}</div>;
// }

class App extends React.Component {
  const todoItems = todoData.map(item => (
    <TodoItem key={item.id} item={item} />
  ));
  // conditional rendering, in line styles go here
  render() {
    return <div>{todoItems}</div>;
  }
}


export default App;
