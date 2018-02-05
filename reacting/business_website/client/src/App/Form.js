import React, { Component } from 'react';
import axios from 'axios';

const listingUrl = '/listing/';

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
            loading: true
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.listingDelete = this.listingDelete.bind(this);
    }

    // handleChange(e) {
    //     let { make, model, year, miles, drivetrain, transmission, color, doors, price } = e.target;
    //     this.setState(prevState => {
    //         return {
    //             inputs: {
    //                 ...prevState.inputs,
    //                 [name]: make === 'radio' ? checked : value
    //             }
    //         }
    //     });
    //     console.log(this.state.inputs);
    // }

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
            }
        })
    }

    render() {
        let { make, model, year, miles, drivetrain, transmission, color, doors, price } = this.state.inputs;
        let { listings, loading } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="listingWrap">
                    <h1>Shop Cars</h1>
                    <input onChange={this.handleChange} type="text" value={make} placeholder="Vehicle Make" />
                    <input onChange={this.handleChange} type="text" value={model} placeholder="Vehicle Model" />
                    <input onChange={this.handleChange} type="number" value={year} placeholder="Vehicle Year" />
                    <input onChange={this.handleChange} type="number" value={miles} placeholder="Vehicle Miles" />
                    <input onChange={this.handleChange} type="text" value={color} placeholder="Vehicle Color" />
                    <input onChange={this.handleChange} type="range" value={price} name="points" min="0" max="100000" />
                    <label>
                        Drivetrain:
                        <input onChange={this.handleChange} type="radio" name="drivetrain" value="4WD" /> 4 Wheel Drive
                        <input onChange={this.handleChange} type="radio" name="drivetrain" value="RWD" /> Rear Wheel Drive
                        <input onChange={this.handleChange} type="radio" name="drivetrain" value="AWD" /> All Wheel Drive
                        <input onChange={this.handleChange} type="radio" name="drivetrain" value="FWD" /> Front Wheel Drive
                    </label>
                    <label>
                        Transmission:
                        <input onChange={this.handleChange} type="radio" name="transmission" value="auto" /> Automatic
                        <input onChange={this.handleChange} type="radio" name="transmission" value="manual" /> Manual
                    </label>
                    <label>
                        Doors:
                        <input onChange={this.handleChange} type="radio" name="door" value="two" /> 2 door
                        <input onChange={this.handleChange} type="radio" name="door" value="four" /> 4 door
                        <input onChange={this.handleChange} type="radio" name="door" value="five" /> 5 door
                    </label>
                    <input type="submit" value="Submit" onClick={this.handleSubmit} />
                </form>
            </div>
        )
    }
}
