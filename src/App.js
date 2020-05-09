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
import Check from './components/Check';
import ForcusInput from './components/ForcusInput';
import Count2 from './components/Count2';
import DocTitleUpdateOne from './components/DocTitleUpdateOne';
import DocTitleUpdateTwo from './components/DocTitleUpdateTwo';
import Form from './components/Form';

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

      <Check />

      <ForcusInput />

      <Count2 />

      <DocTitleUpdateOne />
      <DocTitleUpdateTwo />

      <Form />
    </div>
  );
}

export default App;
