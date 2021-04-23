import React from 'react';
import "../styles/style.css";

const DataInput = (props) => {

    return (
        <div>
            <form>
                <input type="text" size="40" className="myinput" />
                <input type="submit" onClick={() => props.onAdd} value="Add" className="element" />

            </form>
        </div>
    );
};

export default DataInput;
