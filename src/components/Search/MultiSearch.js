import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { BiSearchAlt2 } from 'react-icons/bi'


const MultiSearch = ({ query, setQuery }) => {
    const [input, setInput] = useState('');

    const history = useHistory();


    const onFormSubmit = e => {
        e.preventDefault();
        setQuery(input)

        history.push(`/search/${input}`)
        setInput('')
    }

    const onInputChange = e => {
        setInput(e.target.value);
    }

    return(
        <form onSubmit={onFormSubmit}>
            <input value={input} onChange={onInputChange} 
            style={{height: '1rem'}}/>
            <button><BiSearchAlt2 
            style={{height: '.7rem'}}/></button>
        </form>
    )
    
}

export default MultiSearch
