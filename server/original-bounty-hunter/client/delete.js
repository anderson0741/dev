import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
    componentDidMount(){
        axios.get('http://localhost:8675')
        .then((response) =>{
            console.log(response.data);
            
        })
    }
    render() {
        return (
            <div>
                test
            </div>
        )
    }
}
