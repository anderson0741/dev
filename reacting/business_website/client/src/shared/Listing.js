import React from 'react';
import Form from './Form';
import './Listing.css';

function Listing(props) {
    console.log('listing-props', props);
    let { make, model, year, miles, drivetrain, transmission, color, doors, price, photos, description, listingDelete, _id, id } = props;
    return (
        <div className="parent">
            <div className="space">
                <br />
            </div>
            <div className='list'>
                <button className="deleteButton" onClick={() => { listingDelete(_id) }}>Delete</button>
                <div className="content">
                    <div className="details">
                        <div className="image">
                            <p>PICTURES{photos}</p>
                        </div>
                        <div className="one">
                            <div className="inputListing">
                                <p>Make: {make}</p>
                                <p>Model: {model}</p>
                                <p>Year: {year}</p>
                                <p>Miles: {miles}</p>
                            </div>
                        </div>
                        <br />
                        <div className="radios">
                            <p>Drivetrain: {drivetrain}</p>
                            <p>Transmission: {transmission}</p>
                            <p>Color: {color}</p>
                            <p>Doors: {doors}</p>
                        </div>
                        <div className="price">
                            <p>Price: ${price}</p>
                        </div>
                        <div>
                            <br />
                        </div>
                    </div>
                    <div className="description">
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Listing
