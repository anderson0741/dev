import React, { Component } from 'react';
import axios from "axios";

const ronQuotes = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes';

export default class Swanson extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: {},
            loading: true
        }
        this.getSwansonQuote = this.getSwansonQuote.bind(this);
    }

    componentDidMount() {
        let { id } = this.props.match.params;
        this.getSwansonQuote(id);
    }

    componentWillReceiveProps(nexProps) {
        let { id } = this.props.match.params;
        let nextId = nextProps.match.params.id;
        if (nextId !== id) {
            this.getSwansonQuote(nextId);
        }
    }

    getSwansonQuote(id) {
        axios.get(ronQuotes + id)
        .then(response => {
            this.setState({
                quote: response.data,
                loading: false 
            });
        })
        .catch(err =>{
            console.error(err);
            this.setState({
                loading: false
            });
        })
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}
