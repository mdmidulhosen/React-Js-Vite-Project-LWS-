import React, { Component } from "react";
// import ClockList from "./component/ClockList";
import './App.css'
// import Form from "./component/Form";
import Calculator from "./component/Calculator";
import ClickCounter from "./component/ClickCounter";
import HovwerCounter, { HoverCounter } from "./component/HoverCounter";
import Clock from "./component/Clock";
import User from "./component/HOC/User";
import Counter from "./component/Counter";
import Section from "./component/Section";

export default class App extends Component {
  state = {
    theme: "dark"
  }
  render(){
    const {theme} = this.state
    return (
      <>
        <div className="app">
          {/* <ClickCounter />
          <HovwerCounter /> */}
  
          <Counter renderProps={(count, increamentCount) => (
            <ClickCounter count={count} increamentCount={increamentCount} />
          )} />
  
          <Section theme={theme} />
  
        </div>
      </>
    );
  }
}

