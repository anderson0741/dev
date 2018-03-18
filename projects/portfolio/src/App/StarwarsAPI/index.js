import React from 'react';
import StarW from '../ShrunkPix/starw.png';
import '../level_up/NextLast.css';

function StarwarsAPI(props) {
    return (
        <div className="contact_parent levelHome_parent">
            <div className="disclaimer">
                <h3>The following are screenshots from Level Up Auto</h3>
            </div>
            <div className="next_last">
                <button className="prev_btn"><a className='levelLink' href="/travel">Prev</a></button>
            </div>
            <div class="addresses">
                <img className='contact_shot' src={StarW} />
            </div>
            <div className="next_last">
                <button className="prev_btn"><a className='levelLink' href="/travel">Prev</a></button>
            </div>
        </div>
    )
}

export default StarwarsAPI
