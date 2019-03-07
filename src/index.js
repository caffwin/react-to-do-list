import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";

function App() {
  return (
    <div>
      <Header />
      <Greeting />
    </div>
  );
}

function Header(props) {
  return (
    <header>
      <p>Welcome!, {props.username}</p>
    </header>
  );
}

function Greeting() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
