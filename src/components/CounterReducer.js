import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
};
const reducer = (state, action) => {
    switch(action.type) {
        case 'increment1':
            return {...state, firstCounter: state.firstCounter + action.value}
        case 'decrement1':
            return {...state, firstCounter: state.firstCounter - action.value}
        case 'increment2':
            return {...state, secondCounter: state.secondCounter + action.value}
        case 'decrement2':
            return {...state, secondCounter: state.secondCounter - action.value}
        case 'reset1':
            return {...state, firstCounter: initialState.firstCounter}
        case 'reset2':
            return {...state, secondCounter: initialState.secondCounter}
        default:
            return state
    }
}

function CounterReducer() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <div>カウント：　{count.firstCounter}</div>
            <div>カウント：　{count.secondCounter}</div>
            <button onClick={() => dispatch({type: 'increment1', value: 1})}>increment1</button>
            <button onClick={() => dispatch({type: 'decrement1', value: 1})}>decrement1</button>
            <button onClick={() => dispatch({type: 'reset1'})}>reset1</button>
            <button onClick={() => dispatch({type: 'increment2', value: 10})}>increment2</button>
            <button onClick={() => dispatch({type: 'decrement2', value: 10})}>decrement2</button>
            <button onClick={() => dispatch({type: 'reset2'})}>reset2</button>
        </div>
    )
}

export default CounterReducer
