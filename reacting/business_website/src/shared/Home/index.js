import React from 'react';
import vid from '../../images/level_up.mov';
import './Home.css';
import Cadillac from '../../images/IMG_4066.JPG';

function Home(props) {
    return (
        <div className='homeD'>
            <div className="cadi">
                <h1 className='tag'>Welcome to Level Up Car's</h1>
                {/* <img className="cad" src={Cadillac} alt="" /> */}
                {/* <p className='words'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique commodi consequatur assumenda harum ex ducimus labore cupiditate impedit repellendus, quaerat quos dolorem aliquid, deserunt odio quisquam velit voluptas cumque molestias.</p> */}
                {/* <video className='vid' src={vid}></video> */}
            </div>
            <div className="other">
                <h1>hello</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nam impedit nisi ex sapiente, vero praesentium magnam incidunt ut nesciunt minima, maxime doloremque, eius accusantium facilis necessitatibus sunt quidem laborum.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, culpa. Vel alias eaque ea ipsa mollitia asperiores illo, odio sint debitis harum nesciunt eos eum molestiae repellendus maxime veniam id.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A commodi perspiciatis sint minus aperiam doloribus quidem quia cumque, voluptas, ipsum delectus, cum illo quos molestias. Dolores nesciunt atque mollitia fugit!</p>
            </div>
        </div>
    )
}

export default Home
