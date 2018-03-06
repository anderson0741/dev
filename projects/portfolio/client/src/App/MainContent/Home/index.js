import React from 'react';
// import './Home.css';

function Home(props) {
    return (
        <div className="main_outerHomeDiv">
            <div className='main_homeDivBox'>
                <br/>
                <div className="welcome_main">
                    <h1 className='main_tag'>Welcome to Level Up Car's</h1>
                </div>
                <br/>
                <div className="main_selector">
                    <a href="cars" className="main_shopCars main_homeBox">
                        <h1>SHOP CARS</h1>
                    </a>
                    <a className="main_aboutSelector main_homeBox" href="/about">
                        <h1>ABOUT US</h1>
                    </a>
                    <a href="contact" className="main_location main_homeBox">
                        <h1>LOCATION</h1>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home
