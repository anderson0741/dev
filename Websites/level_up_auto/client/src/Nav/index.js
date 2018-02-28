import React from 'react';
import { Link } from 'react-router-dom';
import images from '../images/level_up_cars.jpg';
import { connect } from "react-redux";
import { logout } from "../redux/auth";
// import Home from '../../shared/Home/index.js';


import './Nav.css';

function Nav() {
    return (
        <div className="papa">
            <div className="navBod">
                <img className='imgs' src={images} alt="" />
                <div className="navi ">
                    {/* <img className='imgs' src={images} alt="" /> */}
                    <p className='links'>/</p>
                    {isAuthenticated ? null :  <Link className='links' to="/">Home</Link>}
                    <p className='links'>/</p>
                    {isAuthenticated ? null : <Link className='links' to="/about">About</Link>}
                    <p className='links'>/</p>
                    {isAuthenticated ? null : <Link className='links' to="/cars">Shop Cars</Link>}
                    <p className='links'>/</p>
                    {isAuthenticated ? <Link className='links' to="/upload">Upload Content</Link> : null}
                    <p className='links'>/</p>
                    {isAuthenticated ? <div className="navlinkz">
                        <Link className='links' onClick={this.props.logout}>Logout</Link className='links'>
                    </div> : null}
                    {/* <Link className='links' to="/image">Upload Image</Link> */}
                    <p className='links'>/</p>
                    <Link className='links' to="/contact">Contact Us</Link>
                    <p className='links'>/</p>
                </div>
            </div>
        </div>
    )
}

export default Nav;
