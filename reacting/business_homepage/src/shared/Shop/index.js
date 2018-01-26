import React, { Component } from 'react'; 
import {Link} from 'react-router-dom';
import axios from 'axios';

const cloudUrl = 'https://api.cloudinary.com/v1_1/anderson0741/'

export default class Shop extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        axios.get(cloudUrl)
        .then(response => {
            console.log(response.data.results);
            this.setState({

            })
        })
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

