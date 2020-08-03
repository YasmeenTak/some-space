import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import $ from "jquery";
import HomePage from "./components/HomePage/HomePage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }
}

export default App;
