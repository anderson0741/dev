import React, { Component } from 'react';
import Form from '../Form';
import './Listing.css';
import EditForm from '../EditForm/EditForm';
// import Camaro from '../images/Camaro_orange.jpg';

class Listing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        }
        this.toggleEdit = this.toggleEdit.bind(this);
    }

    toggleEdit() {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }


    render() {
        let { make, model, year, miles, drivetrain, transmission, color, doors, price, photos, description, listingDelete, listingChange, _id, id } = this.props;
        if (this.state.isEditing) {
            return <EditForm {...this.props} options={{ toggle: this.toggleEdit }} />
        } else {
            return (
                <div className="parent">
                    <div className="space">
                        <br />
                    </div>
                    <div className='list'>
                        <div className="content">
                            <div className="details">
                                <div className="inputListing">
                                    <h1> {year} {make} {model} </h1>
                                    <div className="price">
                                        <h1>${price}</h1>
                                    </div>
                                </div>
                                <div>
                                    <br />
                                </div>
                            </div>
                            <div className="padding">
                                <div className="images">
                                    <br />
                                    <img className="image" src="https://i.ytimg.com/vi/ZopdphMMTE4/maxresdefault.jpg" alt="" />
                                </div>
                                <div className="radios">
                                    <p>Drivetrain: {drivetrain}</p>
                                    <p>Transmission: {transmission}</p>
                                    <p>Color: {color}</p>
                                    <p>Doors: {doors}</p>
                                    <p>Miles: {miles}</p>
                                </div>
                            </div>
                        </div>
                        <div className="description">
                            <p>{description}</p>
                        </div>
                        <div className="button">
                            <button className="deleteButton" onClick={() => { listingDelete(_id) }}>Delete</button>
                            <br />
                            <button className="deleteButton" onClick={this.toggleEdit}>Edit</button>
                        </div>
                        <br />
                    </div>
                </div>
            )
        }
    }
}

export default Listing