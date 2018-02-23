import React, { Component } from 'react';
// import Form from '../shared/Form';
import Issues from '../shared/Issues';

import './app.css'

export default class App extends Component {
    render() {
        return (
            <div className="screen">
                {/* <Form /> */}
                <Issues />
            </div>
        )
    }
}
