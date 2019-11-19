import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { SideBar, MessageList, AddMessage } from "./containers";

class App extends Component {
  render() {
    return (
      <div id="container">
        <SideBar />
        <section id="main">
          <MessageList />
          <AddMessage />
        </section>
      </div>
    );
  }
}

export default App;
