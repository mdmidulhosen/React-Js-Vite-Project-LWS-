import React from "react";
// import ClockList from "./component/ClockList";
import './App.css'
// import Form from "./component/Form";
import Calculator from "./component/Calculator";
import ClickCounter from "./component/ClickCounter";
import HovwerCounter from "./component/HoverCounter";
import Clock from "./component/Clock";
import User from "./component/HOC/User";

function App() {
  return (
    <>
      <div className="app">
        <ClickCounter />
        <HovwerCounter />
        <User name={(issLoggedIn)=>(issLoggedIn ? "Mridul" : "Guest")}/>
      </div>
    </>
  );
}

export default App;
