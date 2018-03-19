import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Nav from './Navbar/Nav';

import Home from './MainContent/Home';
import About from './MainContent/About';
import Resume from './MainContent/About/Resume';
import Level_Up_Home from './level_up/Home';
// import Level_Up_About from './level_up/';
import Level_Up_Contact from './level_up/Contact';
import Level_Up_Shopping from './level_up/Guest_Listing';
import Level_Up_Login from './level_up/Login_Level';
import Level_Up_Content from './level_up/Content/Content';
import Starwars_API from './StarwarsAPI';
import Travel from './Travel';
import Track from './Track';
// import Clock from './Clock';
// import Character from './StarwarsAPI/Sidebar/Character';
import Footer from './Footer';

import './App.css'

class App extends Component {

    render() {
        console.log(this.props.location.pathname)
        // const globalStyles = { backgroundImage: `url(${this.choosePic()})` }
        return (
            <div>
                {/* <div className="global_div" style={globalStyles}> */}
                <Nav />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/resume' component={Resume}/>
                    <Route path='/level_up_home' component={Level_Up_Home} />
                    {/* <Route path='/level_up_about' component={Level_Up_About} /> */}
                    <Route path='/level_up_contact' component={Level_Up_Contact} />
                    <Route path='/level_up_create' component={Level_Up_Content} />
                    <Route path='/level_up_shopping' component={Level_Up_Shopping} />
                    <Route path='/level_up_login' component={Level_Up_Login} />
                    <Route path='/starwarsapi' component={Starwars_API} />
                    {/* <Route path='/characters/:id' component={Character} /> */}
                    {/* <Route path='/clock' component={Clock} /> */}
                    <Route path='/travel' component={Travel} />
                    <Route path='/track' component={Track} />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default withRouter(App);
