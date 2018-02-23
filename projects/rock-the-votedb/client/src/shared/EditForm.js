import React, { Component } from 'react';

export default class EditForm extends Component {
    constructor(props) {
        super(props);
        let { title, description } = props;
        this.state = {
            inputs: {
                "title": title || '',
                "description": description || ''
            },
            polls: [],
            loading: true
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let { title, description, name, value } = e.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.handleEdit(this.props._id, this.state.inputs);
        this.props.toggleEdit();
    }

    render() {
        let { title, description } = this.state.inputs;
        let { polls } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1 className="theTitle">Rock The VOTE!</h1>
                    <input className="title" onChange={this.handleChange} name="title" value={title} placeholder="Title" type="text" />
                    <input className="description" onChange={this.handleChange} name="description" value={description} placeholder="Description" type="text" />
                    <input type="submit" className="submit" value="Submit" />
                </form>
                <br />
            </div>
        )
    }
}
