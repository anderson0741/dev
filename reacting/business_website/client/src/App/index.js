import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../shared/Home';
import About from '../shared/About/About';
import Contact from '../shared/Contact/index';
import Upload from '../shared/Upload';
import Listing from './Listing';
import Form from './Form';
import Nav from './Nav';
import './App.css';


function App(props) {
    return (
        <div>
            <Nav />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/cars' component={Listing} />
                <Route path='/upload' component={Form} />
                <Route path='/image' component={Upload} />
                <Route path='/contact' component={Contact} />
            </Switch>
        </div>
    )
}

export default App;


//The idea is to make a site for a dealership where car listings can be added like a blog page.  It will include a description of the vehicle, a picture, the model, year, miles, drivetrain, etc. The minimum will be a listing set up where they can at least add information about the vehicle.
