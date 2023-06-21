import React, { useEffect, useRef } from 'react';

function Form() {

const inputRef = useRef(null)

useEffect(()=>{
    inputRef.current.focus()
}, [])

  return (
    <div>
      <input type="text" ref={inputRef} placeholder='Write Something Here' />
    </div>
  )
}

export default Form
