import React from 'react';
import './Home.css';
import Home1 from '../../screen_shots/home1.png';
import Home2 from '../../screen_shots/home2.png';

function Home(props) {
    return (
        <div className="outerHomeDiv">
            <img className='contact_shot' src={Home1} alt="" />
            <img className='contact_shot' src={Home2} alt="" />
        </div>
    )
}

export default Home
