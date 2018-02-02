import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Home from '../shared/Home';
import About from '../shared/About/About';
import Shop from '../App/Form';
import Contact from '../shared/Contact/index';
import Upload from '../shared/Upload';
import Nav from './Nav';
import './App.css';


function App(props) {
    return (
        <div>
            <Nav />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/cars' component={Shop} />
                <Route path='/contact' component={Contact} />
                <Route path='/upload' component={Upload} />
            </Switch>
            <Shop />
        </div>
    )
}

export default App
