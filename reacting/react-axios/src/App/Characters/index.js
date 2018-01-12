import React, { Component } from 'react';

import Character from "./Character";

import axios from "axios";
const swUrl = "https://swapi.co/api/people"

//when the component mounts, make get request
//when the data comes back, set state to contain data
// display data

class Characters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            loading: true,
            err: false,
            errMsg: ""
        }
    }

    componentDidMount() {
        axios.get(swUrl)
            .then((response) => {
                let { results } = response.data;
                this.setState({
                    characters: results,
                    loading: false
                })
            })
            .catch((err) => {
                console.error(err);
                this.setState({
                    loading: false,
                    errMsg: err.message,
                    err: true
                })

            })
    }

    render() {
        let { characters, loading, err, errMsg } = this.state;
        console.log(characters);
        return (
            loading ?
                <div>
                    <h1>Loading</h1>
                </div>
                :
                err ?
                    <div>
                        <p>Sorry, Site down</p>
                        <p>{errMsg}</p>
                    </div>
                    :
                    <div>
                        {characters.map((character, i) => {
                            return <Character key={i}{...character} />
                        })}
                    </div>
        )
    }
}

export default Characters