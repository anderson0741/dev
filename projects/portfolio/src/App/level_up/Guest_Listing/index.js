import React from 'react';
import Shopping from '../../screen_shots/listed.png';
import '../NextLast.css';

function Guest_Listing() {
    return (
        <div className="shop_parent">
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
