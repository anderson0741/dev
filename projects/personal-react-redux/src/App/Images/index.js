import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './index.css';

const ronQuotes = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes';
// axios.post(Content);

export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: [],
            err: '',
            errMsg: ''
        }
    }

    componentDidMount() {
        axios.get(ronQuotes)
            .then(response => {
                console.log(response.data.results);
                this.setState({
                    quote: response.data.results
                })
            })
            .catch(err => {
                this.setState({
                    err: err,
                    errMsg: err.msg
                })
                console.error(err.message);
            })

    }



    render() {
        return (
            <div className='imageDiv'>

                <div className="swanDiv">
                    <h1 className="swan">Ron Swanson Quotes</h1>
                    <button className='button'>Quotes</button>
                    <p></p>
                </div>
            </div>
        )
    }
}
