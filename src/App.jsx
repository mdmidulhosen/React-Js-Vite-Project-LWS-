import React, { Component, useCallback, useMemo, useState } from "react";
// import ClockList from "./component/ClockList";
import './App.css'
import Counter from "./component/useReducer/Counter";

export default function App() {
  return (
    <>
      <div className="app">
          <Counter />
      </div>
    </>
  );
}

