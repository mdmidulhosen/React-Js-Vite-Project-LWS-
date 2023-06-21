import React, { Component, useCallback, useMemo, useState } from "react";
// import ClockList from "./component/ClockList";
import './App.css'
import Form from "./component/useRef/Form";

export default function App() {
  return (
    <>
      <div className="app">
        <React.StrictMode>
          <Form />
        </React.StrictMode>
      </div>
    </>
  );
}

