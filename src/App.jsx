import React from "react";
import Clock from "./component/Clock";
import './App.css'

function App() {
  return (
    <>
      <Clock locale="en-us" />
      <Clock locale="bn-BD" />
    </>
  );
}

export default App;
