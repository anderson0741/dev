import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import images from '../images/level_up_cars.jpg';
import { connect } from "react-redux";
import { logout } from "../redux/auth";
// import Home from '../../shared/Home/index.js';


import './Nav.css';

class Nav extends Component {
    render() {
        const isAuthenticated = this.props.isAuthenticated;
        return (
            <div className="papa" >
                <div className="navBod">
                    <img className='imgs' src={images} alt="" />
                    <div className="navi ">
                        {/* <img className='imgs' src={images} alt="" /> */}
                        <div className='links'><p>/</p></div>
                        {isAuthenticated ? null : <div className='links'><Link className='links' to="/">Home</Link></div>}
                        <div className='links'><p>/</p></div>
                        {isAuthenticated ? null : <div className='links'><Link className='links' to="/about">About</Link></div>}
                        <div className='links'><p>/</p></div>
                        {isAuthenticated ? null : <div className='links'><Link className='links' to="/cars">Shop Cars</Link></div>}
                        <div className='links'><p>/</p></div>
                        {isAuthenticated ? <div className='links'><Link className='links' to="/upload">Upload Content</Link></div> : null}
                        {isAuthenticated ? <div className='links'><p>/</p></div> : null}
                        {isAuthenticated ? <div className="links"><Link className='links' onClick={this.props.logout}>Logout</Link></div> : null}
                        {/* <Link to="/image">Upload Image</Link> */}
                        {isAuthenticated ? <div className='links'><p>/</p></div> : null}
                        <div className='links'><Link className='links' to="/contact">Contact Us</Link></div>
                        <div className='links'><p>/</p></div>
                        <div className='links'><Link className='links' to="/login">Login</Link></div>
                    </div>
                </div>
            </div>
        )
    }
    }

const mapStateToProps = (state) => {
    return state.user;
}

export default connect(mapStateToProps, { logout })(Nav); 
