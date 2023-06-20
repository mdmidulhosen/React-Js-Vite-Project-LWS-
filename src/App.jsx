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
import themeContext from "./context/themeContext";
import Todo from "./component/Todo";
import AnotherCounter from "./component/AnotherCounter";
import UseEffectClass from "./component/UseEffectClass";
import UseEffectFunction from "./component/UseEffectFunction";

export default class App extends Component {
  state = {
    theme: "dark"
  }

  changeTheme = () => {
    this.setState(({ theme }) => {
      if (theme === "dark") {
        return {
          theme: "light"
        }
      } else {
        return {
          theme: "dark"
        }
      }
    })
  }

  render() {
    const { theme } = this.state
    return (
      <>
        <div className="app">

          <UseEffectFunction />

          {/* <ClickCounter />
          <HovwerCounter /> */}

          {/* <Counter renderprops={(count, increamentCount) => (
            <ClickCounter count={count} increamentCount={increamentCount} />
          )} />

          <themeContext.Provider value={{ theme: theme, changeTheme: this.changeTheme }}><Section /></themeContext.Provider> */}

        </div>
      </>
    );
  }
}

