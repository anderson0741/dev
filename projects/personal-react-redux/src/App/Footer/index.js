// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Footer.css';

// function Footer(props) {
//     return (
//         <div className='footerDiv'>
//             <div className='images'>
//                 <h1>hello</h1>
//             </div>
//             <div className="links">
//             <h3>&copy; 2018</h3>
//             </div>
//         </div>
//     )
// }

// export default Footer;

import React from 'react';
import './Footer.css';

const Footer = () => (
    <div className='footerDiv'>
        <div className="iconz">
            <a href="/swanson"><img className='icons' src="http://flaticons.net/icons/Wildlife/Bird.png" alt="" /></a>
            <a href="https://github.com/anderson0741"><img className='icons' src="http://amillionbluepages.net/img/logos/octocat.png" alt="" /></a>
            <a href="/"><img className='icons' src="https://27v3co3099ow3pfl2j3mqktgr-wpengine.netdna-ssl.com/wp-content/themes/VERTIQUL-Child/images/icon-home-white.png" alt="" /></a>
        </div>
        <div className="copy">&copy; 2018</div>
    </div>
)

export default Footer
