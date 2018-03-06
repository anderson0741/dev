import React from 'react';
import './Home.css';

function Home(props) {
    return (
        <div className="outerHomeDiv">
            <div className='homeDivBox'>
                <div className="welcome_level">
                    <h1 className='tag'>Welcome to Level Up Car's</h1>
                </div>
                <div className="selector">
                    <a href="cars" className="shopCars homeBox">
                        <h1>SHOP CARS</h1>
                    </a>
                    <a className="aboutSelector homeBox" href="/about">
                        <h1>ABOUT US</h1>
                    </a>
                    <a href="contact" className="location homeBox">
                        <h1>LOCATION</h1>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home
