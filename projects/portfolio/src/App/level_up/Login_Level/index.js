import React from 'react'
import log_in from '../../ShrunkPix/login1.png';
import '../NextLast.css';

function Login_Level() {
    return (
        <div className="login_parent levelHome_parent">
            <div className="disclaimer">
                <h3>The following are screenshots from Level Up Auto</h3>
            </div>
            <div className="next_last">
                <button className='prev_btn'><a className='levelLink' href="/level_up_contact">Prev</a></button>
            </div>
            <div>
                <img className='contact_shot' src={log_in} alt="" />
            </div>
            <div className="next_last">
                <button className='prev_btn'><a className='levelLink' href="/level_up_contact">Prev</a></button>
            </div>
        </div>
    )
}

export default Login_Level
