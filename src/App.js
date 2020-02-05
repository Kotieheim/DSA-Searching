import React, { Component } from "react";
import Algorithms from "./searching.js";
import store from "./store";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <textarea placeholder="numbers go here"></textarea>
      </div>
    );
  }
}
