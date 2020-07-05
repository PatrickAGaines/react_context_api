import React, { useContext } from 'react';
import { MyContext } from '../context/MyContext.js';

const Form = (props) => {
    const[state, setState] = useContext(MyContext);

    const onChange = (e) => setState({ [e.target.name]: e.target.value });

    return(
        <form>
            <input
                type='text'
                name='name'
                value={ state.name }
                onChange={ onChange }
            />
            <input
                type='submit'
                value='submit'
            />
        </form>
    );
}

export default Form;