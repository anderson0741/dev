import React, { Component } from 'react';
import axios from 'axios';

import Bounty from './Bounty';

const bountyUrl = 'http://localhost:8080/bounty';

export default class bountiesLink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bounties: props,
            loading: true
        }
    }

    componentDidMount() {
        axios.get(bountyUrl)
            .then(response => {
                this.setState({
                    bounties: response.data,
                    loading: false
                });
            })
            .catch(err => {
                console.error(err);
            });
    }

    componentWillReceiveProps() {
        axios.get(bountyUrl)
            .then(response => {
                this.setState({
                    bounties: response.data,
                    loading: false
                });
            })
            .catch(err => {
                console.error(err);
            })
    }

    render() {
        let { bounties } = this.state;
        let { loading } = this.state;
        return (
            loading ?
            <div>
                {bounties.map((bounty, index) =>{
                    return <Bounty key= {index + bounty.name} {...bounty} />
                })}
            </div>
            :
            <div>
                loading
            </div>
        )
    }
}
