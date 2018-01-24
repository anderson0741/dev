import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav(props) {
    return (
        <div className='navDiv'>
            <h1>Swanson Quotes</h1>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/'>Swanson Quotes</Link>
            </div>
        </div>
    )
}

export default Nav;
