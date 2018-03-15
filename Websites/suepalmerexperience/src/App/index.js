import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './Home';

// import Nav from './Navbar/Nav';

import './App.css'

class App extends Component {
    render() {
        return (
            <div>
                {/* <Nav /> */}
                <Switch>
                    <Route exact path='/' component={Home} />
                </Switch>
                {/* <Footer /> */}
            </div>
        )
    }
}

export default withRouter(App);
