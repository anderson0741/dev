import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRecipe, editRecipe } from '../Redux/recipes.js';

class Form extends Component {
    constructor(props) {
        super(props);
        // var name, category, image;
        // if (props.index) {
        //     var { name, category, image } = props.recipes[props.index];
        // }
        let { name, category, image } = props;
        this.state = {
            inputs: {
                name: name || "",
                category: category || "",
                image: image || "",
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
                name: "",
                category: "",
                image: ""
            }
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        // this.props.submit(this.state.inputs);
        let { editRecipe, addRecipe, add, edit, index } = this.props;
        if (add) {
            addRecipe(this.state.inputs);
        } else {
            editRecipe(this.state.inputs, index);
        }
        if (this.props.clear) {
            this.clearInputs();
        }
    }
    render() {
        let { name, category, image } = this.state.inputs;
        // console.log(this.props);
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} placeholder="Name" value={name} name="name" type="text" />
                <input onChange={this.handleChange} placeholder="Category" value={category} name="category" type="text" />
                <input onChange={this.handleChange} placeholder="Image" value={image} name="image" type="text" />
                <button>Submit</button>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return { recipes: state.recipes }
}

export default connect(mapStateToProps, { addRecipe, editRecipe })(Form);
