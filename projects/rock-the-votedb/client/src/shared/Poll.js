import React from 'react';
import Form from './Form';

function Poll(props) {
    let { title, description, pollDelete, handleEdit, _id } = props;
    return (
        <div>
            <button className="deleteButton" onClick={() => { pollDelete(_id) }}>Close</button>
            <h2>{title}</h2>
            <h3>{description}</h3>
            <button className="editButton" onClick={() => { handleEdit(_id) }} >edit</button>
        </div>
    )
}

export default Poll;