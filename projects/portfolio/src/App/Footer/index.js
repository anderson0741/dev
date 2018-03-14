import React from 'react';
import LinkedIn from '../icons/linkedin2.png';
import GitHub from '../icons/github.png';
import Resume from '../icons/resume.png';

import './Footer.css';

function Footer() {
    return (
        <div className="footer_parent">
            <div className="linkedIn">
                <a href="https://www.linkedin.com/in/anderson0741/"><img className="icons" src={LinkedIn} /></a>
            </div>
            <div className="resume_footer">
                <a href="/resume"><img className="icons" src={Resume} /></a>
            </div>
            <div className="gitHub">
                <a href="https://github.com/anderson0741"><img className="icons" src={GitHub} /></a>
            </div>
        </div>
    )
}

export default Footer
