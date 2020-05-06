import React from 'react';

import './App.css';
import Counter from './components/Counter';
import CounterHooks from './components/CounterHooks';
import FormHook from './components/FormHook';
import ItemHook from './components/ItemHook';
import ClassEffect from './components/ClassEffect';
import EffectHook from './components/EffectHook';
import MouseEventEffect from './components/MouseEventEffect';
import DataFeatch from './components/DataFeatch';
import DataFetchByid from './components/DataFetchByid';
import CounterReducer from './components/CounterReducer';
import WrapComponent from './components/WrapComponent';
import WrapReducerAxios from './components/WrapReducerAxios';
import WrapContextComp from './components/WrapContextComp';
import WrapContextReducerComp from './components/WrapContextReducerComp';

function App() {

  return (
    <div className="App">
      <Counter />
      <CounterHooks />
      <FormHook />
      <ItemHook />
      <ClassEffect />
      <EffectHook />
      <MouseEventEffect />
      <DataFeatch />
      <DataFetchByid />

      <WrapContextComp />

      <CounterReducer />

      <WrapContextReducerComp />

      <WrapReducerAxios />

      <WrapComponent />
    </div>
  );
}

export default App;
