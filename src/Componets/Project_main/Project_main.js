import React from 'react';
import './Project_main.css';
import '../Web_btn/Web_btn';
import Web_btn from '../Web_btn/Web_btn';
const Project_main = ({info, fontColor}) => {
    
    return (
        
        <div className='main-container'>
            <div className='project-info project-name floating-text' style={{color:fontColor}}> {info.name} </div>
            <div className='project-info project-team floating-text' style={{color:fontColor}}> {info.team} </div>
            <Web_btn text={info.outer_link.button_name} url={info.outer_link.link}/>
            <div className='project-info project-goal floating-text' style={{color:fontColor}}> {info.goal} </div>
            <div
                className='main-container-background'
                style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: `url("${process.env.PUBLIC_URL} + ${info.img_url}")`,
                backgroundSize: 'cover',
                pointerEvents: 'none',
                zIndex: -1,
                }}
            ></div>
        </div>
    );
}

export default Project_main