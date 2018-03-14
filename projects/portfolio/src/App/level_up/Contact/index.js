import React from 'react';
import './Contact.css';
import Contact from '../../screen_shots/contact.png';
import '../NextLast.css';

function Level_Up_Contact() {
    return (
        <div className="contact_parent">
            <div className="next_last">
                <button className="prev_btn"><a className='levelLink' href="/level_up_shopping">Prev</a></button>
                <button className='next_btn'><a className='levelLink' href="/level_up_login">Next</a></button>
            </div>
            <div class="addresses">
                <img className='contact_shot' src={Contact} alt="" />
            </div>
            <div className="next_last">
                <button className="prev_btn"><a className='levelLink' href="/level_up_shopping">Prev</a></button>
                <button className='next_btn'><a className='levelLink' href="/level_up_login">Next</a></button>
            </div>
        </div>
    )
}

export default Level_Up_Contact
