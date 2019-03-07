import React, { Component } from "react";
import ReactDOM from "react-dom";
// import App from "./App";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
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

class Greeting extends React.Component {
  render() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if (hours < 12) {
      timeOfDay = "morning";
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon";
    } else {
      timeOfDay = "night";
    }
    return <h1>Good {timeOfDay} to you, sir or madam!</h1>;
  }
}

// ReactDOM.render(<Greeting />, document.getElementById("root"));
ReactDOM.render(<App />, document.getElementById("root"));
