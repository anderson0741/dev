import React, { Component } from 'react';

import List from './List';

import axios from 'axios';
const hlUrl = "http://api.vschool.io:6543/hitlist.json";

export default class HitList extends Component {
    constructor(props){
        super(props);
        this.state = {
            people: [],
            loading: true,
            err: false,
            errMsg: ""
        }
    }

    componentDidMount(){
        axios.get(hlUrl)
            .then((response) => {
                this.setState({
                    people: response.data,
                    loading: false
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
