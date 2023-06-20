import React, { Component, useCallback, useMemo, useState } from "react";
// import ClockList from "./component/ClockList";
import './App.css'
import Title from "./component/Title";
import ShowCount from "./component/ShowCount";
import HookButton from "./component/HookButton";
// // import Form from "./component/Form";
// import Calculator from "./component/Calculator";
// import ClickCounter from "./component/ClickCounter";
// import HovwerCounter, { HoverCounter } from "./component/HoverCounter";
// import Clock from "./component/Clock";
// import User from "./component/HOC/User";
// import Counter from "./component/Counter";
// import Section from "./component/Section";
// import themeContext from "./context/themeContext";
// import Todo from "./component/Todo";
// import AnotherCounter from "./component/AnotherCounter";
// import UseEffectClass from "./component/UseEffectClass";
// import UseEffectFunction from "./component/UseEffectFunction";

export default function App() {

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const increamentByOne = useCallback(() => {
    setCount1((prevCount) => prevCount + 1)
  }, [])

  const increamentByFive = useCallback(() => {
    setCount2((prevCount) => prevCount + 5)
  }, [])

  const isEvenOrOdd = useMemo(() => {
    let i = 0
    while (i < 1000000000) i += 1;
    return count1 % 2 === 0;
  }, [count1])

  return (
    <>
      <div className="app">

        <Title />
        <ShowCount count={count1} title={"Counter 1"} />
        <p>
          {isEvenOrOdd ? "Even" : "Odd"}
        </p>
        <HookButton handleClick={increamentByOne}>Increament By One</HookButton>
        <hr />
        <ShowCount count={count2} title={"Counter 2"} />
        <HookButton handleClick={increamentByFive}>Increament By Five</HookButton>

      </div>
    </>
  );
}

