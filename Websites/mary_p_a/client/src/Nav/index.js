import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import images from '../../images/level_up_cars.jpg';
import Home from '../shared/Home';
import { connect } from "react-redux";
import { logout } from "../redux/auth";
import Logo from '../images/Logo1.png';
import styled from 'styled-components';

import './Nav.css';
import { HashLink as Link } from 'react-router-hash-link';

const SNav = styled.div`
    display: grid;
    position: absolute;
    height: 50;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    backgroundColor: transparent;
    border: none;
    width: 100vw;
    height: 60px;
    
`;
const StyledLink = styled(Link)`
    color: white;
    font-size: 30px;
    text-decoration: none;
    justify-self: center;
    align-items: center;
    :hover {
        border-radius: 5px;
        background-color: #555;
        color: white;
    }
`;


class Nav extends Component {
    render() {
        const isAuthenticated = this.props.isAuthenticated;
        return (
            <div className="outerNavDiv">
                <div className="navBod">
                    <img className='imgs' src={Logo} alt="" />
                    <div className="menuOptions">
                        <SNav className="navBod_nav guest">
                            <button className="dropbtn">Menu</button>
                            <div className="nav_dropdwn">
                                <StyledLink smooth="true" className='links' to="/#">Home</StyledLink>
                                <StyledLink smooth="true" className='links' to="/#about">About</StyledLink>
                                <StyledLink smooth="true" className='links' to="/#contact">Contact</StyledLink>
                            </div>
                            {isAuthenticated ? <div className="navBod_nav user">
                                <button className="dropbtn">Username</button>
                                <div className="nav_dropdwn user">
                                    <a><StyledLink className='links' to="/upload">Upload Content</StyledLink></a>
                                    <a className='links' onClick={this.props.logout}>Logout</a>
                                </div>
                            </div> : null}
                        </SNav>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav;
