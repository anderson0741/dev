import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../shared/Home';
import About from '../shared/About/About';
import Shop from '../shared/Shop/Cars';
import Contact from '../shared/Contact/index';

import Nav from './Nav';

function App(props) {
    return (
        <div>
            <Nav />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/cars' component={Shop} />
                <Route path='/contact' component={Contact} />
            </Switch>
        </div>
    )
}

export default App
