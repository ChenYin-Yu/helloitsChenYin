import React from 'react';
import './Regu_btn2.css';

const btn = ({text, url}) => {
    return (
        <a href={url}>
            <button className='Regu_btn2'>{text}</button>
        </a>
    );
}

export default btn