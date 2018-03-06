import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Nav from './Navbar/Nav';

import Home from './MainContent/Home';
import About from './MainContent/About';
import Level_Up_Home from './level_up/Home';
import Level_Up_About from './level_up/About';
import Level_Up_Contact from './level_up/Contact';
// import Level_Up_Login from './level_up/';
// import Level_Up_Signup from './level_up/';
import Level_Up_Content from './level_up/Content/Content';
import Starwars_API from './StarwarsAPI';

import './App.css'

class App extends Component {
    choosePic() {
        let { pathname } = this.props.location;
        switch (pathname) {
            case "/starwarsapi":
                return "http://orig12.deviantart.net/53f9/f/2016/338/7/d/star_wars___death_star_wallpaper_by_rocklou-daqj3gl.png";

            default:
                return ""
        }
    }
    render() {
        console.log(this.props.location.pathname)
        const globalStyles = { backgroundImage: `url(${this.choosePic()})` }
        return (
            <div className="global_div" style={globalStyles}>
                <Nav />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/level_up_home' component={Level_Up_Home} />
                    <Route path='/level_up_about' component={Level_Up_About} />
                    <Route path='/level_up_contact' component={Level_Up_Contact} />
                    <Route path='/level_up_create' component={Level_Up_Content} />
                    {/* <Route path='/level_up_login' component={Level_Up_Login} /> */}
                    {/* <Route path='/level_up_signup' component={Level_Up_Signup} /> */}
                    <div className="stars">
                        <Route path='/starwarsapi' component={Starwars_API} />
                    </div>
                </Switch>
            </div>
        )
    }
}

export default withRouter(App);
