import React, { Component } from 'react';
import Poll from './Poll';

export default class DisplayPoll extends Component {
    render() {
        let { polls, pollDelete, loading } = this.props;
        return (
            loading ?
                <div>
                    loading....
                </div>
                :
                <div>
                    {polls.map((poll, index) => {
                        return <Poll pollDelete={pollDelete} handleEdit={this.props.handleEdit} key={poll._id} {...poll} />
                    })}
                </div>
        )
    }
}
