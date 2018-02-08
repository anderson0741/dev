import React, { Component } from 'react';

export default class List extends Component {
    constructor(props){
        super(props);
        this.name = props.name;
    }
    render() {
        return (
            <li>
                {this.name}
            </li>
        )
    }
}
