import React from 'react';
import './Img_gallery.css';

const Img_gallery = ({img_gallery, width, height}) => {
    return (
        <div className='project-content center-position'>
            <img className='rounded-image img-slide' style={{ width: width, height: height }} src= {process.env.PUBLIC_URL + '/' + img_gallery.img1} ></img>
            <img className='rounded-image img-slide' style={{ width: width, height: height }} src= {process.env.PUBLIC_URL + '/' + img_gallery.img2} ></img>
            <img className='rounded-image img-slide' style={{ width: width, height: height }} src= {process.env.PUBLIC_URL + '/' + img_gallery.img3} ></img>
        </div>
    )
}
export default Img_gallery;