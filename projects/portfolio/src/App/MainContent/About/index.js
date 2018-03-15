import React, { Component } from 'react';
import './About.css';
import Picture_Of_Me from '../../images/picture_of_me.png';

function About(props) {
    return (
        <div className="about_parent" >
            <div className="about_adjust">
                <div className="picture_of_me">
                    <img className='picture_border' src={Picture_Of_Me} alt="" />
                </div>
                <div className="theAbout">
                    <h1>Web Developer with a background in sales and client relations creating hundreds of accounts over a 5 year period and maintaining one of the company's highest retention rates. Looking to apply recent training in front end development including JavaScript and React. Eager to learn new programming languages. </h1>
                </div>
            </div>
        </div>
    )
}

export default About;
