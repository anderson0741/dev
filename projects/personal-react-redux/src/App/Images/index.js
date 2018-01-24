import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ronQuotes = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes';
// axios.post(Images);

export default class Images extends Component {
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
            <div>
                <button>Quotes</button>
            </div>
        )
    }
}
