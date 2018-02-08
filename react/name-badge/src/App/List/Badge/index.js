import React, { Component } from 'react';
import './badge.css';

export default class Badge extends Component {
    constructor(props) {
        super(props);
        let { firstName, lastName, email, birthPlace, phone, favFood, about } = props;
        this.state = {
            badge: {
                firstName,
                lastName,
                email,
                birthPlace,
                phone,
                favFood,
                about
            },
            backgroundColor: props.backgroundColor
        }
    }
    render() {
        let { firstName, lastName, email, birthPlace, phone, favFood, about } = this.state.badge;
        let color = this.state.backgroundColor;
        let style = { backgroundColor: color };
        return (
            <div className='badge-wrapper'>
                <div className="banner">Banner</div>
                <div className="info-wrapper">
                    <p className="fullName">{firstName} {lastName}</p>
                    <p className="birthPlace">{birthPlace}</p>
                    <p className="email">{email}</p>
                    <p className="phone">{phone}</p>
                    <p className="favFood">{favFood}</p>
                    <p className="about">{about}</p>

                </div>
            </div>
        )
    }
}
