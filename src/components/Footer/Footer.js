import React from 'react';
import './Footer.scss'
import SocialMedias from '../SocialMedias/SocialMedias'

const Footer = (props) => {
    return (
        <footer id="Footer">
            <div id="copyright">
                <p>Copyright © 2021 Zdravko Dimov, BG.  All rights reserved.</p>
            </div>
            <SocialMedias />
        </footer>
    )
}

export default Footer;