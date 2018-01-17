import React from 'react';
import './person.css';

function Person(props) {
    return (
        <div className='wrapper' style={props.style}>
            <h4 className='name'>{props.name}</h4>
        </div>
    )
}

export default Person
