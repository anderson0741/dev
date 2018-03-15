import React, { Component } from 'react';
// import Form from './Form/Form';
import Form_Shot from '../../screen_shots/upload.png';
import '../NextLast.css';

export default class Content extends Component {
    render() {
        return (
            <div className="content_parent levelHome_parent">
                <div className="disclaimer">
                    <h3>The following are screenshots from Level Up Auto</h3>
                </div>
                <div className="next_last">
                    <button className="prev_btn"><a className='levelLink' href="/level_up_home">Prev</a></button>
                    <button className='next_btn'><a className='levelLink' href="/level_up_shopping">Next</a></button>
                </div>
                <div>
                    <img className='contact_shot' src={Form_Shot} alt="" />
                </div>
                <div className="next_last">
                    <button className="prev_btn"><a className='levelLink' href="/level_up_home">Prev</a></button>
                    <button className='next_btn'><a className='levelLink' href="/level_up_shopping">Next</a></button>
                </div>
            </div>
        )
    }
}
