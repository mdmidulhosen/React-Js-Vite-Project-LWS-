import React, { useEffect, useRef } from 'react';
import Input from './Input';

function Form() {

const inputRef = useRef(null)

useEffect(()=>{
    inputRef.current.focus()
}, [])

  return (
    <div>
      <Input type={"text"} placeholder={'Write Something Here'} ref={inputRef}/>
    </div>
  )
}

export default Form
