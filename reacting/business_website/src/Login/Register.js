import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from "axios";
import { AppBar } from 'material-ui/AppBar';
import './Login';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        }
    }

    handleClick(event) {
        let apiBaseUrl = "http://localhost:4000/api";
        console.log("values", this.state.first_name, this.state.last_name, this.state.email, this.state.password);
        let self = this;
        let payload = {
            "first_name": this.state.first_name,
            "last_name": this.state.last_name,
            "email": this.state.email,
            "password": this.state.password
        }
        axios.post(apiBaseUrl)
    }
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar
                            title='Register'
                        />
                        <TextField
                            hintText="Enter your First Name"
                            floatingLabelText="First Name"
                            onChange={
                                (event, newValue) => this.setState({
                                    first_name: newValue
                                })
                            } />
                        <br />
                        <TextField
                            hintText="Enter your Last Name"
                            floatingLabelText="Last Name"
                            onChange={
                                (event, newValue) => this.setState({
                                    last_name: newValue
                                })
                            } />
                        <br />
                        <TextField
                            hintText="Enter your Email"
                            floatingLabelText="Last Name"
                            onChange={
                                (event, newValue) => this.setState({
                                    email: newValue
                                })
                            } />
                        <br />
                        <TextField
                            type="password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            onChange={
                                (event, newValue) => this.setState({
                                    password: newValue
                                })
                            } />
                        <br />
                        <RaisedButton
                            label="Submit" primary={true} style={style} onClick={
                                (event) => this.handleClick(event)
                            } />
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

const style = {
    margin: 15,
};

export default Register;