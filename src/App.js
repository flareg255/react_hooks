import React, { createContext, useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import CounterHooks from './components/CounterHooks';
import FormHook from './components/FormHook';
import ItemHook from './components/ItemHook';
import ClassEffect from './components/ClassEffect';
import EffectHook from './components/EffectHook';
import MouseEventEffect from './MouseEventEffect';
import DataFeatch from './components/DataFeatch';
import DataFetchByid from './components/DataFetchByid';
import ComponentC from './components/ComponentC';
import CounterReducer from './components/CounterReducer';

export const UserContext = createContext();
export const LanguageContext = createContext();

function App() {
  const [user, setUser] = useState({ name: 'yamada', age: '32'});
  const [language, setLanguage] = useState('日本語');

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
      <UserContext.Provider value={user}>
        <LanguageContext.Provider value={language}>
          <ComponentC />
        </LanguageContext.Provider>
      </UserContext.Provider>
      <CounterReducer />
    </div>
  );
}

export default App;
