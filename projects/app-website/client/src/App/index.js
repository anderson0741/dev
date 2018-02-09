import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../shared/Home';
import About from '../shared/About/About';
import Contact from '../shared/Contact/index';
// import Upload from '../shared/Upload';
import Listing from '../shared/Content/Form/Listing/Listing';
import ListingDisplay from '../shared/Content/Form/Listing/ListingDisplay';
import Shop from '../shared/Shop/index';
import Form from '../shared/Content/Form/Form';
import Content from '../shared/Content/Content';
import Nav from './Nav';
import Footer from './Footer/Footer';
import './App.css';


function App(props) {
    return (
        <div>
            <Nav />
            <br />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/cars' component={Shop} />
                <Route path='/upload' component={Content} />
                {/* <Route path='/image' component={Upload} /> */}
                <Route path='/contact' component={Contact} />
            </Switch>
            <br />
            <Footer />
        </div>
    )
}

export default App;


//The idea is to make a site for a dealership where car listings can be added like a blog page.  It will include a description of the vehicle, a picture, the model, year, miles, drivetrain, etc. The minimum will be a listing set up where they can at least add information about the vehicle.
