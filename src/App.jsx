import React from "react";
// import ClockList from "./component/ClockList";
import './App.css'
// import Form from "./component/Form";
import Calculator from "./component/Calculator";
import ClickCounter from "./component/ClickCounter";
import HovwerCounter, { HoverCounter } from "./component/HoverCounter";
import Clock from "./component/Clock";
import User from "./component/HOC/User";
import Counter from "./component/Counter";

function App() {
  return (
    <>
      <div className="app">
        {/* <ClickCounter />
        <HovwerCounter /> */}

        <Counter renderProps={(count, increamentCount) => (
          <ClickCounter count={count} increamentCount={increamentCount} />
        )} />

        <Counter renderProps={(count, increamentCount) => (
          <HoverCounter count={count} increamentCount={increamentCount} />
        )} />

      </div>
    </>
  );
}

export default App;
