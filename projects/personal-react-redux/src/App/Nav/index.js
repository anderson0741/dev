import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav(props) {
    return (
        <div className='navDiv'>
            <div className='title'>
                <h1>Swanson Quotes</h1>
            </div>
            <div className="links">
                <Link to='/' className='childLink'>Home</Link>
                <Link to='/swanson' className='childLink'>Swanson Quotes</Link>
                <Link to='/swanson' className='childLink'>Several Swanson Quotes</Link>
            </div>
        </div>
    )
}

export default Nav;
