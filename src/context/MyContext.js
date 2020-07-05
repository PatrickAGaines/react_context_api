import React, { useState, createContext } from 'react';

export const MyContext = createContext();

export const ContextProvider = (props) => {
    const[state, setState] = useState({ name: '' });

    return(
        <MyContext.Provider value={[state, setState]}>
            {props.children}
        </MyContext.Provider>
    );
}

