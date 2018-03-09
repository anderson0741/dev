import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import images from '../../images/level_up_cars.jpg';
import Home from '../shared/Home';
import { connect } from "react-redux";
import { logout } from "../redux/auth";
import Logo from '../images/Logo1.png';

import './Nav.css';

class Nav extends Component {
    render() {
        const isAuthenticated = this.props.isAuthenticated;
        return (
            <div className="outerNavDiv">
                <div className="navBod">
                    <img className='imgs' src={Logo} alt="" />
                    <div className="menuOptions">
                        <div className="navBod_nav guest">
                            <button className="dropbtn">Menu</button>
                            <div className="nav_dropdwn">
                                <Link className='links' to="/">Home</Link>
                                <Link className='links' to="/about">About</Link>
                                <Link className='links' to="/contact">Contact</Link>
                            </div>
                            {isAuthenticated ? <div className="navBod_nav user">
                                <button className="dropbtn">Username</button>
                                <div className="nav_dropdwn user">
                                    <a><Link className='links' to="/upload">Upload Content</Link></a>
                                    <a className='links' onClick={this.props.logout}>Logout</a>
                                </div>
                            </div> : null}
                        </div>
                        {/* <div><p className='links'>/</p></div>
                        {isAuthenticated ? null : <div><Link className='links' to="/">Home</Link></div>}
                        <div><p className='links'>/</p></div>
                        {isAuthenticated ? null : <div><Link className='links' to="/about">About</Link></div>}
                        <div><p className='links'>/</p></div>
                        {isAuthenticated ? <div><Link className='links' to="/upload">Upload Posts</Link></div> : null}
                        <div><p className='links'>/</p></div>
                        {isAuthenticated ? null : <div><Link className='links' to="/contact">Contact</Link></div>}
                        <div><p className='links'>/</p></div>
                        {isAuthenticated ? null : <div className="navlinkz"><Link to="/login">Login</Link></div>}
                        {isAuthenticated ? <div className="navlinkz">
                            <Link onClick={this.props.logout}>Logout</Link>
                        </div> : null} */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav;
