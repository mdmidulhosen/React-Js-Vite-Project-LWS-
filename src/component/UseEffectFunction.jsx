import React, { useEffect, useState } from 'react'

export default function UseEffectFunction() {
    const [ count, setCount] = useState(0);
    const [ text, setText] = useState('');
    const [ date, setDate] = useState(new Date());

    useEffect(()=>{
        console.log("component render")
        document.title = `Clicked ${count} Times`
    }, [count])

    useEffect(()=>{
        const interval = setInterval(tick, 1000)
        return ()=>{
            clearInterval(interval)
        }
    })

    const tick = () =>{
        setDate(new Date());
    }

    const addClick = ()=>{
        setCount((prevCount) => prevCount + 1)
    }


  return (
    <div>
      <p>Time: {date.toLocaleTimeString()}</p>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <p>
        <button type='button' onClick={addClick}>Click</button>
      </p>
    </div>
  )
}

