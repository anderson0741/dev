import React from 'react';
import EditForm from './EditForm';

function Item(props) {
    let { fname, lname, age, deleteItem, index, editItem } = props;
    return (
        <div>
            <h1>{fname}</h1>
            <h1>{lname}</h1>
            <p>{age}</p>
            <button onClick={() => deleteItem(index)}>X</button>
            <EditForm {...props} />
        </div>
    )
}

export default Item;
