import React, { createContext, useReducer } from 'react';

import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC2 from './ComponentC2';

export const CountContext = createContext();
const initialState = {
    firstCounter: 0
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment1':
            return {...state, firstCounter: state.firstCounter + action.value}
        case 'decrement1':
            return {...state, firstCounter: state.firstCounter - action.value}
        case 'reset1':
            return {...state, firstCounter: initialState.firstCounter}
        default:
            return state
    }
};

function WrapContextReducerComp() {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <CountContext.Provider
            value={ { countState: count, countDispatch: dispatch } } >
            <ComponentA />
            <ComponentB />
            <ComponentC2 />
        </CountContext.Provider>
    )
}

export default WrapContextReducerComp
