import React, { forwardRef } from 'react'

function Input({type, placeholder}, myRef) {
  return (
    <input type={type} ref={myRef} placeholder={placeholder} />
  )
}

const forwardedInput = React.forwardRef(Input)
export default forwardedInput;
