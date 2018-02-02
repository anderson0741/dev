import React, { Component } from 'react'
import axios from 'axios';
import Vote from './Vote';
import VoteDisplay from './VoteDisplay';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                "title": '',
                "description": '',
                "vote": '',
                "total": ''
            },
            polls: [],
            loading: true
        }
    }

    handleChange(e) {
        let { title, description, vote, total } = e.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    //[name]
                }
            }
        });
        console.log(this.state.inputs);
    }

    handleSubmit(e) {
        let poll = this.state.inputs
        e.preventDefault();
        axios.post(pollUrl, poll)
            .then(response => {
                console.log('response', response);
                this.setState((prevState) => {
                    return {
                        polls: [response.data, ...prevState.polls],
                        loading: false
                    }
                })
            })
            .catch(err => {
                console.error(err);
            })
        this.clearInputs();
    }

    pollDelete(id) {
        let { polls } = this.state;
        axios.delete('/poll/' + id)
            .then(response => {
                this.setState({
                    polls: polls.filter((poll, index) => {
                        return poll._id !== id
                    }),
                    loading: false
                });
            })
            .catch(err => {
                console.error(err);
            })
    }

    //pollChange

    componentDidMount() {
        axios.get(pollUrl)
            .then(response => {
                this.setState({
                    polls: response.data,
                    loading: false
                })
            })
            .catch(err => {
                console.error(err);
            })
    }

    clearInputs() {
        this.setState({
            inputs: {
                "title": '',
                "description": '',
                "vote": '',
                "total": ''
            }
        })
    }

    render() {
        let {title, description, vote, total} = this.state.inputs;
        let {polls, loading} = this.state;
        return (
            <div>
                <form>
                    <h1 className="theTitle">Rock The VOTE!</h1>
                    
                </form>
            </div>
        )
    }
}
