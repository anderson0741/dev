import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './Nav/Nav';
import Home from '../shared/Home/Home';
import About from '../shared/About/About';
import Content from '../shared/Content/LevelUpCars/client/src/index';

function App(props) {
    return (
        <div>
            <Nav />
            <br />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                {/* <Route exact path='/content' component={Content} /> */}
                {/* <Route exact path='/' component={} /> */}
            </Switch>
        </div>
    )
}

export default App;
