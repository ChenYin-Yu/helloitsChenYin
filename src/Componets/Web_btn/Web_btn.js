import React from 'react';
import './Web_btn.css';

const Web_btn = ({text, url}) => {
    return (
        <a href={url}>
            <button className='web_btn'>{text}</button>
        </a>
    );
}

export default Web_btn