import React, { useState } from 'react'


function MyButton() {

const [count, setCount] = useState(0)

  return (
    <div>
        <h1>{count}</h1>
        <button className='btn btn-md btn-primary' onClick={()=>setCount(count - 1)}>Decreament</button>
        <button className='btn btn-md btn-primary' onClick={()=>setCount(count + 1)}>Increament</button>
        <h1>Time is :{new Date().toLocaleTimeString()}</h1>
        
        
    </div>
  )

  
}


export default MyButton