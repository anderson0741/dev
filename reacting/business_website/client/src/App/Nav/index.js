import React from 'react';
import { Link } from 'react-router-dom';
import images from '../../images/level_up_cars.jpg';
import Home from '../../shared/Home/index.js';


import './Nav.css';

function Nav() {
    return (
        <div className="papa">
            <div className="navBod">
                <img className='imgs' src={images} alt="" />
                <div className="navi ">
                    {/* <img className='imgs' src={images} alt="" /> */}
                    <p className='links'>/</p>
                    <Link className='links' to="/">Home</Link>
                    <p className='links'>/</p>
                    <Link className='links' to="/about">About</Link>
                    <p className='links'>/</p>
                    <Link className='links' to="/cars">Shop Cars</Link>
                    <p className='links'>/</p>
                    <Link className='links' to="/contact">Contact Us</Link>
                    <p className='links'>/</p>
                    <Link className='links' to="/upload">Upload Content</Link>
                    <p className='links'>/</p>
                </div>
            </div>
            {/* <div className="mobile">
                <div class="pos-f-t">
                    <div class="collapse" id="navbarToggleExternalContent">
                        <div class="bg-dark p-4">
                            <h4 class="text-white">Collapsed content</h4>
                            <span class="text-muted">Toggleable via the navbar brand.</span>
                        </div>
                    </div>
                    <nav class="navbar navbar-dark bg-dark">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </nav>
                </div>
            </div> */}
        </div>
    )
}

export default Nav;
