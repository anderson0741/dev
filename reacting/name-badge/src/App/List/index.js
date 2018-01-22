import React, { Component } from 'react';
import Badge from './Badge';
import Form from '../Form';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            badges: [],
            backgroundColor: 'orange'
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e, badge) {
        e.preventDefault();
        this.setState((prevState) => {
            let { badges, backgroundColor } = prevState;
            let color = backgroundColor === 'orange' ? 'blue' : 'orange'
            return {
                badges: [...badges, badge],
                backgroundColor: color
            };
        });
    }

    render() {
        let { badges, backgroundColor } = this.state;
        return (
            <div className='list-wrapper'>
                <Form handleSubmit={this.handleSubmit} />
                {badges.map((badge, index) => {
                    return <Badge backgroundColor={backgroundColor} {...badge} key={index} />
                })}

            </div>
        )
    }
}
