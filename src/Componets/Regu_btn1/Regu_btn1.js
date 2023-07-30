import React from 'react';
import './Regu_btn1.css';

const btn = ({text, url}) => {
    return (
        <a href={url}>
            <button className='Regu_btn1'>{text}</button>
        </a>
    );
}

export default btn