import React from 'react';
import './Home.css';

function Home(props) {
    return (
        <div className="outerHomeDiv">
            <div className='homeDivBox'>
                <div className="cadi">
                    <h1 className='tag'>Welcome to Level Up Car's</h1>
                </div>
                <br />
                <br />
                <div className="other">
                    <h1>hello</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nam impedit nisi ex sapiente, vero praesentium magnam incidunt ut nesciunt minima, maxime doloremque, eius accusantium facilis necessitatibus sunt quidem laborum.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, culpa. Vel alias eaque ea ipsa mollitia asperiores illo, odio sint debitis harum nesciunt eos eum molestiae repellendus maxime veniam id.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A commodi perspiciatis sint minus aperiam doloribus quidem quia cumque, voluptas, ipsum delectus, cum illo quos molestias. Dolores nesciunt atque mollitia fugit!</p>
                </div>
                <br />
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
                    <div className="otherFuture homeBox">
                        <h1>future</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
