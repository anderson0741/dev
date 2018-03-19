import React from 'react';
import { Link } from 'react-router-dom';
import mobileMenu from '../icons/mobileMenu.png';
import Menu from '../icons/mobileMenu.png';

import './Nav.css';

function Nav() {
    return (
        <div className="outside_nav">
            <div className="navBod topnav">
                <div className="navBod_main active">
                    <button className='dropbtn'><a className
                    ="homebtn" href="/">Menu</a></button>
                    <div className="main_dropdwn">
                        {/* <a href="/">Home</a> */}
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/contact">Contact</a>
                    </div>
                </div>
                <div className="navBod_level">
                    <button className="dropbtn">Projects</button>
                    <div className="level_up_dropdwn">
                        <a className="titleLink" href="/level_up_home">Level Up</a>
                        <a href="/level_up_home">Home</a>
                        {/* <a href="/level_up_about">About</a> */}
                        <a href="/level_up_create">Upload Content</a>
                        <a href="/level_up_shopping">Shop</a>
                        <a href="/level_up_contact">Contact Us</a>
                        <a href="/level_up_login">Login</a>
                        <a className="titleLink" href="/clock">Small Projects</a>
                        {/* <a href="/level_up_about">About</a> */}
                        <a href="https://timer-for-portfolio.herokuapp.com/end.html">Clock CSS/JS</a>
                        <a href="https://calculator-for-portfolio.herokuapp.com/calc.html">Calculator CSS/JS</a>
                        <a href="/track">Track CSS</a>
                        <a href="/travel">Travel CSS/JS</a>
                        <a href="/starwarsapi">StarWars CRUD</a>
                        {/* <a className="titleLink" href="/starwarsapi">Star Wars API</a> */}
                    </div>
                </div>
                <div className="navBod_star">
                    <button className="dropbtn">Social</button>
                    <div className="star_dropdwn">
                        <a href="https://www.linkedin.com/in/anderson0741/">LinkedIn</a>
                        <a href="https://github.com/anderson0741">GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;
