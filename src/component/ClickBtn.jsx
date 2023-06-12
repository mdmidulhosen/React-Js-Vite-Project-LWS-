import React, { useState, useEffect } from 'react';

function MyButton() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button className='btn btn-md btn-primary' onClick={() => setCount(count - 1)}>Decrement</button>
      <button className='btn btn-md btn-primary' onClick={() => setCount(count + 1)}>Increment</button>
      <h1>Time is: {time}</h1>
    </div>
  );
}

export default MyButton;
