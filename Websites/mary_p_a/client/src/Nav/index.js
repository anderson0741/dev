import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import images from '../../images/level_up_cars.jpg';
import Home from '../shared/Home';
import { connect } from "react-redux";
import { logout } from "../redux/auth";


import './Nav.css';

class Nav extends Component {
    render() {
        const isAuthenticated = this.props.isAuthenticated;
        return (
            <div className="papa">
                <div className="navBod">
                    <div className="navi ">
                        <div><p className='links'>/</p></div>
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
                        </div> : null}
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav;
