import React, { useState } from 'react'

function AnotherCounter() {
    const [count, setCount] = useState(0)
  return (
    <div>
      {count}
      <p>
        <button type='button' onClick={()=>{setCount(count + 1)}}>Icreament 1</button>
      </p>
    </div>
  )
}

export default AnotherCounter
