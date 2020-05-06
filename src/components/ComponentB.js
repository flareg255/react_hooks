import React, { useContext } from 'react'
import { CountContext } from './WrapContextReducerComp'

function ComponentB() {
    const countContext = useContext( CountContext );
    return (
        <div>
            <div>カウント：　{countContext.countState.firstCounter}</div>
            <button onClick={() => countContext.countDispatch({type: 'increment1', value: 1})}>increment1</button>
            <button onClick={() => countContext.countDispatch({type: 'decrement1', value: 1})}>decrement1</button>
            <button onClick={() => countContext.countDispatch({type: 'reset1'})}>reset1</button>
        </div>
    )
}

export default ComponentB
