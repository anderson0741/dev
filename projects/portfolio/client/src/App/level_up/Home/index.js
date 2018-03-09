import React from 'react';
import './Home.css';
import Home1 from '../../screen_shots/home1.png';
import Home2 from '../../screen_shots/home2.png';

function Home(props) {
    return (
        <div className="outerHomeDiv">
            <img className='contact_shot' src={Home1} alt="" />
            <img className='contact_shot' src={Home2} alt="" />
            {/* <div className='homeDivBox'>
                <br/>
                <div className="welcome_level">
                    <h1 className='tag'>Welcome to Level Up Car's</h1>
                </div>
                <br/>
                <div className="selector">
                    <a href="/level_up_cars" className="shopCars homeBox">
                        <h1>SHOP CARS</h1>
                    </a>
                    <a className="aboutSelector homeBox" href="/level_up_about">
                        <h1>ABOUT US</h1>
                    </a>
                    <a href="/level_up_contact" className="location homeBox">
                        <h1>LOCATION</h1>
                    </a>
                </div>
            </div> */}
        </div>
    )
}

export default Home
