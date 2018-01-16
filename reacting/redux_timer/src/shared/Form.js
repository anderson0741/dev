import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
        let { name, category, cookTime } = props;
        this.state = {
            inputs: {
                name: name || "",
                category: category || "",
                cookTime: cookTime || "",
            }
        }
    }
    handleChange(e) {
        let {name,value} = e.target;
        this.setState((prevState) => {
            return {
                inputs:{
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }
    render() {
        return (
            <form action="">
                <input value={name} name="name" type="text" />
                <input value={value} name="category" type="text" />
                <input value={cookTime} name="cookTime" type="text" />
            </form>
        )
    }
}

export default Form;