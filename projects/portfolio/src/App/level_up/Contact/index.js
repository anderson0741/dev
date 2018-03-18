import React from 'react';
import Contact from '../../ShrunkPix/contact.png';
import '../NextLast.css';

function Level_Up_Contact() {
    return (
        <div className="contact_parent levelHome_parent">
            <div className="disclaimer">
                <h3>The following are screenshots from Level Up Auto</h3>
            </div>
            <div className="next_last">
                <button className="prev_btn"><a className='levelLink' href="/level_up_shopping">Prev</a></button>
                <button className='next_btn'><a className='levelLink' href="/level_up_login">Next</a></button>
            </div>
            <div class="addresses">
                <img className='contact_shot' src={Contact}/>
            </div>
            <div className="next_last">
                <button className="prev_btn"><a className='levelLink' href="/level_up_shopping">Prev</a></button>
                <button className='next_btn'><a className='levelLink' href="/level_up_login">Next</a></button>
            </div>
        </div>
    )
}

export default Level_Up_Contact
