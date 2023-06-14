import React from "react";
import ClockList from "./component/ClockList";
import './App.css'

function App() {
  const quantities = [1, 2, 3]
  return (
    <>
      <ClockList quantities={quantities}/>
    </>
  );
}

export default App;
