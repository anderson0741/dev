import React from 'react';
import vid from '../../images/level_up.mov';
import './Home.css';

function Home(props) {
    return (
        <div className='homeD'>
            <h1>Hello Welcome</h1>
            <p className='words'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique commodi consequatur assumenda harum ex ducimus labore cupiditate impedit repellendus, quaerat quos dolorem aliquid, deserunt odio quisquam velit voluptas cumque molestias.</p>
            <video className='vid' src={vid}></video>
        </div>
    )
}

export default Home
