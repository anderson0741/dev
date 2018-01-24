import React, { Component } from 'react'
import { connect } from 'react-redux';
import {getQuote} from './Redux/quote';
import './swanson.css';

class SwansonQuotes extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.getQuote();
    }

    handleClick(e) {
        this.props.getQuote();
        console.log(this.props.quote[0]);
        
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Swanson Quote</button>
                <h1 className='answer'>{this.props.quote[0]}</h1>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        quote: state.quote
    }
}

export default connect(mapStateToProps, { getQuote })(SwansonQuotes);