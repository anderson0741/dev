import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Login from './Login';
import Register from './Register';

export default class Loginscreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loginscreen: [],
            buttonLabel: 'Register',
            isLogin: true
        }
    }
    componentWillMount() {
        let loginscreen = [];
        loginscreen.push(
            <Login parentContext={this} appContext={this.props.parentContext} />);
        let loginmessage = "Username or password not found";
        this.setState({
            loginscreen: loginscreen,
            loginmessage: loginmessage
        })
    }
    handleClick(event){
        let loginmessage;
        if(this.state.isLogin){
            let loginscreen=[];
            loginscreen.push(
                <Register parentContext={this} />
            );
            loginmessage = "Already registered. Got to Login";
            this.setState({
                loginscreen: loginscreen,
                loginmessage: loginmessage,
                buttonLabel: "Login",
                isLogin: false
            })
        } else {
            let loginscreen=[];
            loginscreen.push(
                <Login parentContext={this}/>
            );
            loginmessage= "Username or password not found, go register";
            this.setState({
                loginscreen: loginscreen,
                loginmessage: loginmessage,
                buttonLabel: "Register",
                isLogin: true
            })
        }
    }
    render() {
        return (
            <div className="loginscreen">
                {this.state.loginscreen}
                <div>
                    {this.state.loginscreen}
                    <MuiThemeProvider>
                        <div>
                            <RaisedButton label= {this.state.buttonLabel} primary={true} style={style} onClick={(event) => this.handleClick (event)} />
                        </div>
                        </MuiThemeProvider>
                </div>
            </div>
        )
    }
}

const style ={
    margin: 15,
}