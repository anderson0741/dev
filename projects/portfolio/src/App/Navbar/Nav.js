import React from 'react';
import { Link } from 'react-router-dom';


import './Nav.css';

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function Nav() {
    return (
        <div className="outside_nav">
            <div className="navBod topnav">
                <div className="navBod_main active">
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
                        <a href="/level_up_shopping">Shop</a>
                        <a href="/level_up_contact">Contact Us</a>
                        <a href="/level_up_login">Login</a>
                    </div>
                </div>
                <div className="navBod_star">
                    <button className="dropbtn">Star Wars</button>
                    <div className="star_dropdwn">
                        <a href="/starwarsapi">API</a>
                    </div>
                </div>
                <div>
                    {/* <a href="javascript:void(0);" style="font-size:15px;" className="icon" onclick="myFunction()">&#9776;</a> */}
                </div>
            </div>
        </div>
    )
}

export default Nav;
