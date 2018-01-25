import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Nav from './Nav';
import Content from './Content';
import Footer from './Footer';
import swansonQuotes from '../SwansonQuotes';

function App(props) {
    return (
        <div className='app-wrap'>
            <Nav />
            <br />
            <Switch>
                {/* <Route path='/' component={home} /> */}
                <Route exact path='/swanson' component={Content} />
                
            </Switch>
            <Footer />
        </div>
    )
}

export default App
