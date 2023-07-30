import React from 'react';
import './Footer.css';
import email from '../../assets/email.png';
import linkedin from '../../assets/linkedin.png';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='contact'>
                <a href = "mailto:shelly7526@gmail.com" target = "_blank" className='items'>
                    <img className='icon' src={email}></img>
                </a>
                <a href = "https://www.linkedin.com/in/shellyyu/" target = "_blank" className='items'>
                    <img className='icon' src={linkedin}></img>
                </a>
            </div>
            <div>© Chen-Yin Yu</div>
        </div>
    )
}
export default Footer;