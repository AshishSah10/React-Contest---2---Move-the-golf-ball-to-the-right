import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false, //variable needed to be changed
      posi: 0,
      ballPosition: { left: "0px" }
    };
    this.renderChoice = this.renderChoice.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.keyPressHandler = this.keyPressHandler.bind(this);
  }

  //call back function
  buttonClickHandler() {
    const stateCopy = { ...this.state };
    stateCopy.renderBall = true;
    this.setState(stateCopy);
  }
  keyPressHandler(code) {
    if (code === 39) {
      var stateCopy = { ...this.state };
      stateCopy.posi += 5;
      let value = stateCopy.posi;
      stateCopy.ballPosition = { left: value + "px" };
      this.setState(stateCopy);
    }
  }
  renderChoice() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else
      return (
        <button onClick={this.buttonClickHandler}>Click For One Ball</button>
      );
  }

  //bind ArrowRight keydown event
  componentDidMount() {
    //const bodyElem = document.querySelector("body");
    document.addEventListener("keydown", (event) =>
      this.keyPressHandler(event.keyCode)
    );
  }

  render() {
    return <div className="playground">{this.renderChoice()}</div>;
  }
}

export default App;
