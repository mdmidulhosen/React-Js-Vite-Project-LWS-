import React, { useReducer } from 'react'


const initialState = 0;

const reducer = (state, action) => {
    switch (action) {
        case 'increament':
            return state + 1
        case 'decreament':
            return state - 1
    }
}

function Counter() {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <p>Number Is : {count}</p>

            <p>
                <button type='button' onClick={() => dispatch('increament')}>Increament</button>
                <button type='button' onClick={() => dispatch('decreament')}>Decreament</button>
            </p>
        </>
    )
}

export default Counter
