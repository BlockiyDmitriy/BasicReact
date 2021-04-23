import React, { useState } from 'react';
import DataInput from './components/data-Input';
import Element from './components/List/list-elements';
import "./styles/style.css"

function App() {
    const [items, setItems] = useState([]);

    const deleteHandler = (index) => {
        const item = items.concat();
        item.splice(index, 1);
        setItems(item);
    }

    const addHandler = (text) => {
        const toDoItems = [...items]
        const newArr = [...toDoItems, text]
        setItems(newArr)
    }

    return (
        <div className="container">
            <div>
                <DataInput
                    onAdd={addHandler}
                />

                {items.length && items.map((item, index) => {
                    return (
                        <Element
                            key={index}
                            index={index}
                            text={item}
                            onDelete={deleteHandler}
                        />
                    );
                })
                }
            </div>
        </div>
    );
};
export default App;