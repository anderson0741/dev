import React, { Component } from 'react';
import axios from 'axios';

import './color.css';

const colorUrl = 'http://www.colr.org/json/color/random';

export default class Color extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: 'white',
            loading: true,
            err: false,
            errMsg: ""
        }
        this.getBackgroundColor = this.getBackgroundColor.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
    }
    componentDidMount() {
        this.getBackgroundColor();
    }

    getBackgroundColor() {
        axios.get(colorUrl)
            .then(response => {
                let color = response.data.colors[0].hex;
                console.log(color);
                this.setState({
                    backgroundColor: color,
                    loading: false
                })
            })
            .catch(err => {
                console.error(err);
                this.setState({
                    loading: false,
                    errMsg: err.message,
                    err: true
                })
            })
    }

    handleMouseOver() {
        this.getBackgroundColor();
    }

    render() {
        let { colors, loading, err, errMsg } = this.state;
        let style = { backgroundColor: `#${this.state.backgroundColor}` }
        return (
            <div style={style} className="rand-color" onMouseOver={this.handleMouseOver}>
                Color Component test
           </div>
        )
    }
}