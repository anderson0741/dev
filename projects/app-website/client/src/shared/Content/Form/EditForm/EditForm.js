import React, { Component } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';
// import Upload from '../shared/Upload';
import request from 'superagent';
import ListingDisplay from '../Listing/ListingDisplay';

import '../Form.css';

const listingUrl = `/listing/`;
const cloudinaryPreset = 'level_up';
const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/anderson0741/upload';

export default class Form extends Component {
    constructor(props) {
        super(props);
        let { make, model, year, miles, drivetrain, transmission, color, doors, price, photos, description, _id, updateListing, options } = this.props;
        this.state = {
            inputs: {
                "make": make || '',
                "model": model || '',
                "year": year || '',
                "miles": miles || '',
                "drivetrain": drivetrain || '',
                "transmission": transmission || '',
                "color": color || '',
                "doors": doors || '',
                "price": price || '',
                "description": description || ''
            },
            listings: [],
            uploadedFileCloudinaryUrl: "",
            loading: true
        }
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleEdit(e) {
        e.preventDefault();
        let { listings, inputs } = this.state;
        let { make, model, year, miles, drivetrain, transmission, color, doors, price, photos, description, _id, updateListing, options } = this.props;
        let newListing = listings;
        axios.put(listingUrl + "/" + _id, inputs)
            .then(response => {
                for (let i = 0; i < newListing.length; i++) {
                    if (newListing[i]._id === _id) {
                        newListing[i] = Object.assign(newListing[i], updateListing);
                        updateListing = newListing[i];
                        this.setState({
                            listings: newListing
                        })
                    }
                }
            })
        options.toggle()
    }


componentDidMount() {
    axios.get(listingUrl)
        .then(response => {
            this.setState({
                listings: response.data,
                loading: false
            })
        })
        .catch(err => {
            console.error(err);
        });
}

render() {
    let { make, model, year, miles, drivetrain, transmission, color, doors, price, photos, description, _id, updateListing, options } = this.state.inputs;
    let { listings, loading } = this.state;
    console.log(listings);

    return (
        <div>
            <form onSubmit={this.handleSubmit} className="overallWrap">
                <br />
                <div className="color small"><h1 className="title">Shop Cars</h1></div>
                <br />
                <div className="listingWrap">
                    <div className="color">
                        <h3 className="input about small">About Vehicle</h3>
                        <div className="grid">
                            <p className="input">Make:
                                    <input className="input vehicleInfo make" onChange={this.handleChange} name="make" type="text" value={make} placeholder="Vehicle Make" /></p>
                            <p className="input">Model:
                                    <input className="input vehicleInfo model" onChange={this.handleChange} name="model" type="text" value={model} placeholder="Vehicle Model" /></p>
                            <p className="input">Year:
                                    <input className="input vehicleInfo year" onChange={this.handleChange} name="year" type="number" value={year} placeholder="Vehicle Year" /></p>
                            <p className="input">Miles:
                                    <input className="input vehicleInfo miles" onChange={this.handleChange} name="miles" type="number" value={miles} placeholder="Vehicle Miles" /></p>
                            <p className="input">Color:
                                    <input className="input vehicleInfo carColor" onChange={this.handleChange} name="color" type="text" value={color} placeholder="Vehicle Color" /></p>
                            <p className="input">Price:
                                    <input className="input vehicleInfo price" onChange={this.handleChange} name="price" type="number" value={price} placeholder="Vehicle Price" /></p>
                        </div>
                        <p className="input">Drivetrain:
                                <label htmlFor=""><input className="input" onChange={this.handleChange} type="radio" name="drivetrain" value={drivetrain} checked={"drivetrain" === "4WD"} /> 4WD</label>
                            {/* Fix with checked in the radios! */}
                            <label htmlFor=""><input className="input" onChange={this.handleChange} type="radio" name="drivetrain" value={drivetrain} checked={"drivetrain" === "RWD"} /> RWD</label>
                            <label htmlFor=""><input className="input" onChange={this.handleChange} type="radio" name="drivetrain" value={drivetrain} checked={"drivetrain" === "AWD"} /> AWD</label>
                            <label htmlFor=""><input className="input" onChange={this.handleChange} type="radio" name="drivetrain" value={drivetrain} checked={"drivetrain" === "FWD"} /> FWD</label>
                        </p>
                        <p className="input">Transmission:
                                <label htmlFor=""><input className="input" onChange={this.handleChange} type="radio" name="transmission" value={transmission} /> Automatic</label>
                            <label htmlFor=""><input className="input" onChange={this.handleChange} type="radio" name="transmission" value={transmission} /> Manual</label>
                        </p>
                        <p className="input">Doors:
                                <label htmlFor=""><input className="input" onChange={this.handleChange} type="radio" name="door" value={doors} /> 2 door</label>
                            <label htmlFor=""><input className="input" onChange={this.handleChange} type="radio" name="door" value={doors} /> 4 door</label>
                            <label htmlFor=""><input className="input" onChange={this.handleChange} type="radio" name="door" value={doors} /> 5 door</label>
                            <label htmlFor=""><input className="input" onChange={this.handleChange} type="radio" name="door" value={doors} /> Other</label>
                        </p>
                        {/* <h3 className="titleRange input">Price Range</h3>
                            <div className="range input">$0
                                <input className="input" onChange={this.handleChange} id="price" type="range" value={price} name="points" min="0" max="100000" />
                                $100,000
                            </div>
                            <p className="result input"></p> */}
                        <div className="description input">
                            <textarea name="description" className="describe" placeholder="Description" value={description} onChange={this.handleChange} id="" cols="30" rows="10"></textarea>
                        </div>
                        {/* <div className="photo input">
                                <textarea name="text" id="" cols="30" rows="10"></textarea>
                            </div> */}
                        {/* <div className="imageUpload input">
                            <Dropzone
                                multiple={true}
                                accept="image/*"
                                onDrop={this.onImageDrop.bind(this)}>
                                <p className="imgTxt">Select Image</p>
                            </Dropzone>
                        </div> */}
                        <div className="input">
                            {this.state.uploadedFileCloudinaryUrl === '' ? null :
                                <div>
                                    <p>{this.state.uploadedFile.name}</p>
                                    <img className="thumbnail" src={this.state.uploadedFileCloudinaryUrl} />
                                </div>}
                        </div>
                        <br />
                        <input className="submit" type="submit" value="Submit" />
                        <br />
                    </div>
                </div>
            </form>
            <ListingDisplay listingDelete={this.listingDelete} listingChange={this.listingChange} loading={loading} listings={listings} />
        </div>

    )
}
}
