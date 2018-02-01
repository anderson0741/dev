import React, { Component } from 'react';
import axios from 'axios';
import bountiesLink from './bountiesLink';

const bountyUrl = 'http://localhost:8080/bounty';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                "name": '',
                "type": '',
                "reward": '',
                "alive": false
            },
            bounties: [],
            loading: true
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getBounties = this.getBounties.bind(this);
    }

    handleChange(e) {
        let { name, value } = e.target;
        if (name === 'alive') {
            if (value === "true") {
                value = true;
            } else {
                value = false;
            }
        }
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        });
        console.log(this.state.inputs);
    }

    handleSubmit(e) {
        let bounty = this.state.inputs
        e.preventDefault();
        axios.post(bountyUrl, bounty)
            .then(response => {
                console.log('response:', response);
            })
            .catch(err => {
                console.error(err);
            });
        this.clearInputs();
    }

    getBounties() {
        axios.get(bountyUrl)
            .then(response => {
                this.setState({
                    bounties: response.data
                })
            })
            .catch(err => {
                console.error(err);
            });
    }

    clearInputs() {
        this.setState({
            inputs: {
                "name": '',
                "type": '',
                "reward": '',
                "alive": false
            }
        })
    }
    render() {
        let {name, type, reward} = this.state.inputs;
        let {bounties} =this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit} className='bounties-wrap'>
                    <h1 className="title">Bounty Hunters</h1>
                    <input onChange={this.handleChange} name='name' value={name} type='text' placeholder='Bounties Name'/>
                    <label className="radioStyle">
                        alive? 
                        <input onChange={this.handleChange} name='alive' value='true' type="radio"/> True
                        <input onChange={this.handleChange} name='alive' value='false' type="radio"/> False
                    </label>
                    <input type="number" onChange={this.handleChange} name="reward" value={reward} placeholder='Reward Amount'/> 
                    <label className="radioStyle">
                        Type:
                        <input type="radio" onChange={this.handleChange} name="type" value="Jedi"/> Jedi
                        <input type="radio" onChange={this.handleChange} name="type" value="Sith"/> Sith
                    </label>
                    <input type="submit" value="Sumbit"/>
                </form>
                <bountiesLink bounties = {bounties} />
            </div>
        )
    }
}
