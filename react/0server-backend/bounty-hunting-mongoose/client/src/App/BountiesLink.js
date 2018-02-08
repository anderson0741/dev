import React, { Component } from 'react';
import axios from 'axios';
import Form from './Form';

import Bounty from './Bounty';

const bountyUrl = '/bounty/';

export default class BountiesLink extends Component {

    render() {
        let { bounties, loading, bountyDelete } = this.props;
        return (
            loading ?
                <div>
                    loading
                </div>
                :
                <div>
                    {bounties.map((bounty, index) => {
                        return <Bounty bountyDelete={bountyDelete} key={index + bounty.name} {...bounty} />
                    })}
                </div>
        )
    }
}
