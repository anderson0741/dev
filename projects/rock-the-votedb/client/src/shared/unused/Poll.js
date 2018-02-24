import React, { Component } from 'react';
import Form from './Form';
import EditForm from './EditForm';

import './Form.css';

class Poll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        }
        this.toggleEdit = this.toggleEdit.bind(this);
    }

    toggleEdit() {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }
    render() {
        let { title, description, pollDelete, handleEdit, _id } = this.props;
        let { isEditing } = this.state;
        return (
            <div className="disp">
                {!isEditing ?
                    <div>
                        <button className="deleteButton" onClick={() => { pollDelete(_id) }}>Close</button>
                        <h2>{title}</h2>
                        <h3>{description}</h3>
                        <button className="editButton" onClick={this.toggleEdit}>Edit</button>
                        <div className="buttons"></div>
                        <buttom className="plus">+</buttom>
                        <button className="minus">-</button>
                    </div>
                    :
                    <EditForm {...this.props} toggleEdit={this.toggleEdit} handleEdit={this.props.handleEdit} />}
            </div>
        )
    }
}

export default Poll;