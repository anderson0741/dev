import React from 'react'
import Track_Camaro from '../ShrunkPix/Track.png';
import '../level_up/NextLast.css';

function Track() {
    return (
        <div className="contact_parent levelHome_parent">
            <div className="disclaimer">
                <h3>The following are screenshots from Level Up Auto</h3>
            </div>
            <div className="next_last">
                <button className="prev_btn"><a className='levelLink' href="/clock">Prev</a></button>
                <button className='next_btn'><a className='levelLink' href="/travel">Next</a></button>
            </div>
            <div class="addresses">
                <img className='contact_shot' src={Track_Camaro} alt="" />
            </div>
            <div className="next_last">
                <button className="prev_btn"><a className='levelLink' href="/clock">Prev</a></button>
                <button className='next_btn'><a className='levelLink' href="/travel">Next</a></button>
            </div>
        </div>
    )
}

export default Track
