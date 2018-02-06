import React, { Component } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';
// import Upload from '../shared/Upload';
import request from 'superagent';

import './Form.css';

const listingUrl = '/listing/';
const cloudinaryPreset = 'level_up';
const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/anderson0741/upload';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                "make": '',
                "model": '',
                "year": '',
                "miles": '',
                "drivetrain": '',
                "transmission": '',
                "color": '',
                "doors": '',
                "price": ''
            },
            listings: [],
            uploadedFileCloudinaryUrl: "",
            loading: true
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.listingDelete = this.listingDelete.bind(this);
        this.handleImageUpload = this.handleImageUpload.bind(this);
        this.onImageDrop = this.onImageDrop.bind(this);
    }

    onImageDrop(files) {
        this.setState({
            uploadedFile: files[0]
        });
        this.handleImageUpload(files[0]);
    }

    handleImageUpload(file) {
        let upload = request.post(cloudinaryUrl)
            .field('upload_preset', cloudinaryPreset)
            .field('file', file);
        upload.end((err, response) => {
            if (err) {
                console.error(err);
            }
            console.log(response)
            if (response.body.secure_url !== '') {
                this.setState({
                    uploadedFileCloudinaryUrl: response.body.secure_url
                });
            }
        });
    }

    handleChange(e) {
        let { name, value, checked, type } = e.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        });
    }

    handleSubmit(e) {
        let listing = this.state.inputs
        e.preventDefault();
        axios.post(listingUrl, listing)
            .then(response => {
                console.log('response:', response);
                this.setState((prevState) => {
                    return {
                        listings: [response.data, ...prevState.listings],
                        loading: false
                    }
                })
            })
            .catch(err => {
                console.error(err);
            });
        this.clearInputs();
    }

    listingDelete(id) {
        let { listings } = this.state;
        axios.delete('/listing/' + id)
            .then(response => {
                this.setState({
                    listings: listings.filter((listing, index) => {
                        return listing._id !== id
                    }),
                    loading: false
                });
            })
            .catch((err) => {
                console.error(err);
            })
    }

    // listingChange

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

    clearInputs() {
        this.setState({
            inputs: {
                "make": '',
                "model": '',
                "year": '',
                "miles": '',
                "drivetrain": '',
                "transmission": '',
                "color": '',
                "doors": '',
                "price": ''
            },
            uploadedFileCloudinaryUrl: ""
        })
    }

    render() {
        let { make, model, year, miles, drivetrain, transmission, color, doors, price } = this.state.inputs;
        let { listings, loading } = this.state;
        console.log(make, model, year, miles, drivetrain, transmission, color, doors, price);

        return (
            <div>
                <form onSubmit={this.handleSubmit} className="overallWrap">
                    <br />
                    <div className="color"><h1 className="title">Shop Cars</h1></div>
                    <br />
                    <div className="listingWrap">
                        <div className="color">
                            <h3 className="input about">About Vehicle</h3>
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
                                    <input className="input vehicleInfo price" onChange={this.handleChange} name="price" type="text" value={price} placeholder="Vehicle Price" /></p>
                            </div>
                            <p className="input">Drivetrain:
                                    <label htmlFor=""><input className="input" onChange={this.handleChange} type="radio" name="drivetrain" value={drivetrain} /> 4WD</label>
                                {/* Fix with checked in the radios! */}
                                <label htmlFor=""><input className="input" onChange={this.handleChange} type="radio" name="drivetrain" value={drivetrain} /*checked={"drivetrain" === "Rear Wheel Drive"}*/ /> RWD</label>
                                <label htmlFor=""><input className="input" onChange={this.handleChange} type="radio" name="drivetrain" value={drivetrain} /> AWD</label>
                                <label htmlFor=""><input className="input" onChange={this.handleChange} type="radio" name="drivetrain" value={drivetrain} /> FWD</label>
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
                            <div className="imageUpload input">
                                <Dropzone
                                    multiple={true}
                                    accept="image/*"
                                    onDrop={this.onImageDrop.bind(this)}
                                >
                                    <p className="imgTxt">Drop Image</p>
                                </Dropzone>
                            </div>
                            <div className="input">
                                {this.state.uploadedFileCloudinaryUrl === '' ? null :
                                    <div>
                                        <p>{this.state.uploadedFile.name}</p>
                                        <img src={this.state.uploadedFileCloudinaryUrl} />
                                    </div>}
                            </div>
                            <br />
                            <input className="submit" type="submit" value="Submit" onClick={this.handleSubmit} />
                            <br />
                        </div>
                    </div>
                </form>
            </div>

        )
    }
}
