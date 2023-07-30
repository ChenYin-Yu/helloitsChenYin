import React from 'react';
import './Img_desc.css';

const Img_desc = ({img_section}) => {
    return (
        <div className='project-content center-position'>
            <div className='left'>
                <div className='bullet-text'>{img_section.img_title}</div>
                <div className='bullet-content'>{img_section.img_text}</div>
            </div>
            <div className='right'>
                <img className='rounded-image img-single'src= {process.env.PUBLIC_URL + '/' + img_section.img_url} ></img>
            </div>
        </div>
    )
}
export default Img_desc;