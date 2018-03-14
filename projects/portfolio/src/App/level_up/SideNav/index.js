import React from 'react'
import './SideNav.css';

function SideNav() {
    return (
        <div className='sideNav_parent'>
            <a href="/level_up_home">Home</a>
            {/* <a href="/level_up_about">About</a> */}
            <a href="/level_up_create">Upload Content</a>
            <a href="/level_up_contact">Contact Us</a>
            <a href="/level_up_shopping">Shop</a>
            <a href="/level_up_login">Login</a>
        </div>
    )
}

export default SideNav
