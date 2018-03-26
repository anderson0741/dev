import React from 'react';
import Shopping from '../../ShrunkPix/listed.png';
import '../NextLast.css';

function Guest_Listing() {
    return (
        <div className="shop_parent levelHome_parent">
            <div className="disclaimer">
                <h3>The following are screenshots from Level Up Auto</h3>
                <a href="https://levelupcars.herokuapp.com/cars">Level Up Cars Site</a>
            </div>
            <div className="next_last">
                <button className="prev_btn"><a className='levelLink' href="/level_up_create">Prev</a></button>
                <button className="next_btn"><a className='levelLink' href="/level_up_contact">Next</a></button>
            </div>
            <div>
                <img className='contact_shot' src={Shopping} alt="" />
            </div>
            <div className="next_last">
                <button className="prev_btn"><a className='levelLink' href="/level_up_create">Prev</a></button>
                <button className="next_btn"><a className='levelLink' href="/level_up_contact">Next</a></button>
            </div>
        </div>
    )
}

export default Guest_Listing
