import React, { Component } from 'react';
import axios from 'axios';
import BountiesLink from './BountiesLink';
import './Form.css';
import Bounty from './Bounty';

const bountyUrl = '/bounty/';

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
        this.bountyDelete = this.bountyDelete.bind(this);
    }

    handleChange(e) {
        let { name, value, type, checked } = e.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: type === "checkbox" ? checked : value
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
                this.setState((prevState)=>{
                    return {
                        bounties: [response.data, ...prevState.bounties],
                        loading: false
                    }
                })
            })
            .catch(err => {
                console.error(err);
            });
        this.clearInputs();
    }

    bountyDelete(id) {
        let { bounties } = this.state;
        axios.delete('/bounty/' + id)
            .then(response => {
                this.setState({
                    bounties: bounties.filter((bounty, index) => {
                        return bounty._id !== id
                    }),
                    loading: false
                });
            })
            .catch((err) => {
                console.error(err);
            })
    }

    // bountyChange(id){
    //     let {bounties} =this.state;
    //     axios.put('/bounty/' + id)
    //         .then(response => {
    //             this.setState({
    //                 bounties:
    //             })
    //         })
    // }

    componentDidMount() {
        axios.get(bountyUrl)
            .then(response => {
                this.setState({
                    bounties: response.data,
                    loading: false
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
        let { name, type, reward, alive } = this.state.inputs;
        let { bounties, loading } = this.state;
        return (
            <div className="menu">
                <form /*onSubmit={this.handleSubmit}*/ className='bounties-wrap'>
                    <h1 className="title">Bounty Hunter</h1>
                    <input onChange={this.handleChange} name='name' value={name} type='text' placeholder='Bounties Name' />
                    <br />
                    <label className="radioStyle">
                        Living:
                        {/* <input type="radio" onChange={this.handleChange} name="status" value="true" /> True
                        <input type="radio" onChange={this.handleChange} name="status" value="false" /> False */}
                        <input name='alive' onChange={this.handleChange} checked={alive} type="checkbox" /> Alive
                        {/* <input name="type" onChange={this.handleChange} checked={alive}  type="checkbox" /> Super Dead */}
                        {/* <input name="type" onChange={this.handleChange} checked={alive}  type="checkbox" /> Dead */}
                    </label>
                    <br />
                    <input type="number" onChange={this.handleChange} name="reward" value={reward} placeholder='Reward Amount' />
                    <br />
                    <label className="radioStyle">
                        Type:
                        <input type="radio" onChange={this.handleChange} name="type" value="Jedi" /> Jedi
                        <input type="radio" onChange={this.handleChange} name="type" value="Sith" /> Sith
                    </label>
                    <br />
                    <input type="submit" value="Submit" onClick={this.handleSubmit} />
                    <br />
                </form>
                <br />
                <BountiesLink bountyDelete={this.bountyDelete} bounties={bounties} loading={loading} />
            </div>
        )
    }
}
