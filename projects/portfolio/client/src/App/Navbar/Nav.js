import React from 'react';
import { Link } from 'react-router-dom';
// import images from '../../images/level_up_cars.jpg';
// import Home from '../../shared/Home/index.js';


import './Nav.css';

function Nav() {
    return (
        <div className="outside_nav">
            <div className="navBod">
                <div className="navBod_main">
                    <button className='dropbtn'>Home Content</button>
                    <div className="main_dropdwn">
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/contact">Contact</a>
                    </div>
                </div>
                <div className="navBod_level">
                    <button className="dropbtn">Level Up Site</button>
                    <div className="level_up_dropdwn">
                        <a href="/level_up_home">Home</a>
                        {/* <a href="/level_up_about">About</a> */}
                        <a href="/level_up_create">Upload Content</a>
                        <a href="/level_up_contact">Contact Us</a>
                        <a href="/level_up_shopping">Shop</a>
                        <a href="/level_up_login">Login</a>
                    </div>
                </div>
                <div className="navBod_star">
                    <button className="dropbtn">Star Wars</button>
                    <div className="star_dropdwn">
                        <a href="/starwarsapi">API</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;
