import React from 'react';
import './Project_intro.css';

const Project_intro = ({bullet}) => {
    return (
        <div className='bullet'>
            <div className = 'bullet-title'>
                <div className = 'bullet-text'> {bullet.title} </div>
            </div>
            <div className = 'bullet-content'> 
                {bullet.content}
            </div>
        </div>
    )
}

export default Project_intro;