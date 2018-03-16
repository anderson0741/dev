import React from 'react'
import Clock_Shot from '../ShrunkPix/Clock.png';
import '../level_up/NextLast.css';

function Clock() {
    return (
        <div className="contact_parent levelHome_parent">
            <div className="disclaimer">
                <h3>The following are screenshots from Level Up Auto</h3>
            </div>
            <div className="next_last">
                <button className='next_btn'><a className='levelLink' href="/track">Next</a></button>
            </div>
            <div class="addresses">
                <img className='contact_shot' src={Clock_Shot} alt="" />
            </div>
            <div className="next_last">
                <button className='next_btn'><a className='levelLink' href="/track">Next</a></button>
            </div>
        </div>
    )
}

export default Clock
