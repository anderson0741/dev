import React from 'react'
import Travel_pic from '../ShrunkPix/Travel.png';
import '../level_up/NextLast.css';

function Travel() {
    return (
        <div className="contact_parent levelHome_parent">
            <div className="disclaimer">
                <h3>The following are screenshots from Level Up Auto</h3>
            </div>
            <div className="next_last">
                <button className="prev_btn"><a className='levelLink' href="/track">Prev</a></button>
                <button className='next_btn'><a className='levelLink' href="/starwarsapi">Next</a></button>
            </div>
            <div class="addresses">
                <img className='contact_shot' src={Travel_pic} alt="" />
            </div>
            <div className="next_last">
                <button className="prev_btn"><a className='levelLink' href="/track">Prev</a></button>
                <button className='next_btn'><a className='levelLink' href="/starwarsapi">Next</a></button>
            </div>
        </div>
    )
}

export default Travel
