import React, { Component } from 'react';
import Form from './Form/Form';
import Form_Shot from '../../screen_shots/upload.png'; 

export default class componentName extends Component {
    render() {
        return (
            <div>
            <img className='contact_shot' src={Form_Shot} alt="" />
                {/* <Form add/> */}
            </div>
        )
    }
}
