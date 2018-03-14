import React from 'react'
import log_in from '../../screen_shots/login1.png';
import '../NextLast.css';

function Login_Level() {
    return (
        <div className="login_parent">
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
