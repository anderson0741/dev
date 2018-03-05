import React from 'react';
import { Link } from 'react-router-dom';
// import images from '../../images/level_up_cars.jpg';
// import Home from '../../shared/Home/index.js';


import './Nav.css';

function Nav() {
    return (
        <div className="papa">
            <div className="navBod">
                {/* <img className='imgs' src={images} alt="" /> */}
                <button className="dropbtn">Level Up Site</button>
                <div className="level_up_dropdwn">
                    <a href="/level_up_home">Home</a>
                    <a href="/level_up_about">About</a>
                    <a href="/level_up_upload">Upload Content</a>
                    <a href="/level_up_contact">Contact Us</a>
                    {/* <img className='imgs' src={images} alt="" /> */}
                    {/* <p className='links'>/</p>
                    <Link className='links' to="/level_up_home">Home</Link>
                    <p className='links'>/</p>
                    <Link className='links' to="/level_up_about">About</Link>
                    <p className='links'>/</p>
                    <Link className='links' to="/level_up_upload">Upload Content</Link>
                    <p className='links'>/</p>
                    <Link className='links' to="/level_up_contact">Contact Us</Link>
                    <p className='links'>/</p> */}
                </div>
            </div>
        </div>
    )
}

export default Nav;
