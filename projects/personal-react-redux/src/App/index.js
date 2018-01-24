import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Nav from './Nav';
import Content from './Content';
import swansonQuotes from '../SwansonQuotes';

function App(props) {
    return (
        <div className='app-wrap'>
            {/* <Nav /> */}
            <Switch>
                <Route exact path='/' component={Content} />
                {/* <Route path='/swansonjokes' component={} */}
            </Switch>
        </div>
    )
}

export default App
