import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Nav from './Navbar/Nav';

import Home from './MainContent/Home';
import About from './MainContent/About';
import Level_Up_Home from './level_up/Home';
import Level_Up_About from './level_up/About';

export default class App extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path ='/about' component={About} />
                    <Route path='/level_up_home' component={Level_Up_Home} />
                    <Route path='/level_up_about' component={Level_Up_About} />
                </Switch>
            </div>
        )
    }
}
