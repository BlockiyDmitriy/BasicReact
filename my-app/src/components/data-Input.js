import React from 'react';
import { useState } from 'react/cjs/react.development';
import "../styles/style.css";

const DataInput = (props) => {
    const [state, setState] = useState('')

    const handler = (e) => {
        setState(e.target.value)
    }

    const handlerSubmit = (e) =>{
        e.preventDefault()
        props.onAdd(state)
    }
    
    return (
        <div>
            <form onSubmit={handlerSubmit}>
                <input value={state} onChange={handler} type="text" size="40" className="myinput" />
                <input type="submit" value="Add" className="element" />

            </form>
        </div>
    );
};

export default DataInput;
