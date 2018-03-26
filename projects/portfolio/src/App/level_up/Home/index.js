import React from 'react';
import Home1 from '../../ShrunkPix/home1.png';
import Home2 from '../../ShrunkPix/home2.png';
import '../NextLast.css';

function Home(props) {
    return (
        <div className="levelHome_parent">
            <div className="disclaimer">
                <h3>The following are screenshots from Level Up Auto</h3>
                <p>https://levelupcars.herokuapp.com/</p>
            </div>
            <div className="next_last">
                <button className="next_btn"><a className='levelLink' href="/level_up_create">Next</a></button>
            </div>
            <div className="outerHomeDiv">
                <img className='contact_shot' src={Home1}/>
                <img className='contact_shot' src={Home2}/>
            </div>
            <div className="next_last">
                <button className="next_btn"><a className='levelLink' href="/level_up_create">Next</a></button>
            </div>
        </div>
    )
}

export default Home
