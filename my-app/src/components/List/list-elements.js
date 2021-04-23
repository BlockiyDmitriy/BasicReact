import React from 'react';
import "..//..//styles/style.css"

const Element = (props) => {
    return (
        <div className="elements">
            <ul>
                <li>
                    <form >
                        <input type="checkbox" className="mycheckbox"/>
                        <label className="element">{props.text}</label>
                        <input type="button" onClick={() => props.onDelete(props.index)} value="DELETE" className="element"/>
                    </form>
                </li>
            </ul>
        </div>
    );
};
export default Element;