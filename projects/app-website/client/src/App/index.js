import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../shared/Home';
import About from '../shared/About/About';
import Contact from '../shared/Contact/index';
import Shop from '../shared/Shop/index';
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

