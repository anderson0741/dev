import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                fname: props.fname || "",
                lname: props.lname || "",
                age: props.age || "",
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        let { name, value } = e.target;
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }
    clearInputs() {
        this.setState({
            inputs: {
                fname: "",
                lname: "",
                age: "",
            }
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.submit(this.state.inputs, this.props.index);
        this.clearInputs();
    }
    render() {
        console.log(this.state.inputs);
        let { fname, lname, age } = this.state.inputs;
        return (
            <div>
                <form onSubmit={this.handleChange}>
                    <input onChange={this.handleChange} value={fname} name="fname" placeholder="Enter First Name" type="text" />
                    <input onChange={this.handleChange} value={lname} name="lname" placeholder="Enter Last Name" type="text" />
                    <input onChange={this.handleChange} value={age} name="age" placeholder="Enter Age" type="text" />
                    <button>Add</button>
                </form>
            </div>
        )
    }
}
