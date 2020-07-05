import React, { useState, useContext } from 'react';
import { MyContext } from '../context/MyContext.js';

const Navbar = props => {
    const[state, setState] = useContext(MyContext);
 
    return(
        <header>
            Hello { state.name }
        </header>
    );
}

export default Navbar;