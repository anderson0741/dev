import React, { Component } from 'react';
import Person from './Person';
import './hitlist.css';

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
            .catch((err) => {
                console.error(err);
                this.setState({
                    loading: false,
                    err: true,
                    errMsg: err.message
                })
                
            })
    }
    render() {
        let {people, loading, err, errMsg} = this.state;
        console.log(people);
        return (
            loading ? 
            <div>Loading, please wait.</div>
            :
                err ?
                <div>
                    <p>Your data could not be retrieved at this time.</p>
                    <p>{errMsg}</p>
                </div>
                :
                <div className='hitlist'>
                    {people.map((person, index) => {
                        let style = {backgroundImage: `url(${person.image})`}
                        return <Person style={style} {...person} key={index} />
                    })}
                </div>
        )
    }
}
