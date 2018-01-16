import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRecipe, editRecipe } from '../Redux/recipes';

class Form extends Component {
    constructor(props) {
        super(props);
        let { name, category, cookTime } = props.recipes[props.index];
        this.state = {
            inputs: {
                name: name || "",
                category: category || "",
                cookTime: cookTime || "",
            }
        }
        this.handleChange = this.handleChange.bind(this);
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
                name: "",
                category: "",
                cookTime: ""
            }
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        // this.props.submit(this.state.inputs);

        if (this.props.clear) {
            this.clearInputs();
        }
    }
    render() {
        let { name, category, cookTime } = this.state.inputs;
        console.log(this.state.inputs);
        return (
            <form>
                <input onChange={this.handleChange} placeholder="Name" value={name} name="name" type="text" />
                <input onChange={this.handleChange} placeholder="Category" value={category} name="category" type="text" />
                <input onChange={this.handleChange} placeholder="Cook Time" value={cookTime} name="cookTime" type="text" />
                <button>Submit</button>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return { recipes: state.recipes }
}

export default connect() //Form;