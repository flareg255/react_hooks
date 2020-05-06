import React, { createContext, useState, useReducer } from 'react'

import ComponentC from './ComponentC';

export const UserContext = createContext();
export const LanguageContext = createContext();

function WrapContextComp() {
    const [user, setUser] = useState({ name: 'yamada', age: '32'});
    const [language, setLanguage] = useState('日本語');

    return (
        <UserContext.Provider value={user}>
            <LanguageContext.Provider value={language}>
                <ComponentC />
            </LanguageContext.Provider>
        </UserContext.Provider>
    )
}

export default WrapContextComp
