import React, { Component } from 'react';
import Form from './Form';
import Poll from './Poll';

const pollUrl = `/poll/`;

export default class DisplayPoll extends Component {
    render() {
        let {handleEdit, pollDelete, loading, polls} = this.props;
        return (
            loading ?
            <div>
                loading....
            </div>
            :
            <div>
                {polls.map((poll, index) => {
                    return <Poll pollDelete={pollDelete} /*handleEdit={handleEdit}*/ key={index + poll.title} {...poll} />
                })}
            </div>
        )
    }
}
