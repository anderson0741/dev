import React, { Component } from 'react';
import './form.css';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                firstName: '',
                lastName: '',
                email: '',
                birthPlace: '',
                phone: '',
                favFood: '',
                about: ''
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.clearInputs = this.clearInputs.bind(this);
    }

    handleChange(e) {
        let { name, value } = e.target;
        let { firstName, lastName, email, birthPlace, phone, favFood, about } = this.state.inputs;
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        });
        if (firstName.length >= 3 && lastName.length >= 3 && email.length >= 3 && birthPlace.length >= 3 && phone.length >= 3 && favFood.length >= 3 && about.length >= 3) {
            this.setState({
                emptyInputs: false
            });
        } else {
            this.setState({
                emptyInputs: true
            });
        }
    }
    clearInputs() {
        this.setState({
            inputs: {
                firstName: '',
                lastName: '',
                email: '',
                birthPlace: '',
                phone: '',
                favFood: '',
                about: ''
            },
            emptyInputs: true
        });
    }

    render() {
        let { firstName, lastName, email, birthPlace, phone, favFood, about } = this.state.inputs;
        let { emptyInputs } = this.state;
        return (
            <form action="" className="formWrapper" onSubmit={(e)=>this.props.handleSubmit(e, this.state.inputs)}>
                <div className='inputWrap'>
                    <input onChange={this.handleChange} className='inputs firstName' type="text" placeholder='First Name' value={firstName} name='firstName' />
                    <input onChange={this.handleChange} className='inputs lastName' type="text" placeholder='Last Name' value={lastName} name='lastName' />
                    <input onChange={this.handleChange} className='inputs email' type="text" placeholder='Email' value={email} name='email' />
                    <input onChange={this.handleChange} className='inputs birthPlace' type="text" placeholder='Birth Place' value={birthPlace} name='birthPlace' />
                    <input onChange={this.handleChange} className='inputs phone' type="text" placeholder='Phone Number' value={phone} name='phone' />
                    <input onChange={this.handleChange} className='inputs favFood' type="text" placeholder='Favorite Food' value={favFood} name='favFood' />
                </div>
                <input onChange={this.handleChange} className='inputs about' type="text" placeholder='Brief About' value={about} name='about' />
                <br />
                <button className="submit" type="submit" disabled={emptyInputs} onClick={this.handleSubmit}>Submit</button>
            </form>
        )
    }
}
