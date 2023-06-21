import React, { useEffect, useRef } from 'react';
import Input from './Input';

function Form() {

const inputRef = useRef(null)

useEffect(()=>{
    const hello = "Hey There";
    inputRef.current.value = hello;
}, [])

  return (
    <div>
      <Input type={"text"} placeholder={'Write Something Here'} ref={inputRef}/>
    </div>
  )
}

export default Form
