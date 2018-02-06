import React from 'react';
import Form from './Form';
import './Listing.css';

function Listing(props) {
    console.log('listing-props', props);
    let { make, model, year, miles, drivetrain, transmission, color, doors, price, listingDelete, _id, id } = props;
    return (
        <div className="parent">
            <div className='list'>
                <button className="deleteButton" onClick={() => { listingDelete(_id) }}>Delete</button>
                <h2>{make}</h2>
                <h3>{model}</h3>
                <h3>{year}</h3>
                <h3>{miles}</h3>
                <h3>{drivetrain}</h3>
                <h3>{transmission}</h3>
                <h3>{color}</h3>
                <h3>{doors}</h3>
                <h3>{price}</h3>
                <h1>Test</h1>
            </div>
        </div>
    )
}

export default Listing
