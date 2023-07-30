import React from 'react';
import { Link } from "react-router-dom";
import './Snippet.css';

const Snippet = ({snippet}) => {
    return (
            <div className="project">
                <Link to={snippet.link}>
                    <div className='image-container' data-text= {snippet.desc}>
                        <img className ="demo-clip rounded-image" src = {snippet.img_url}></img>
                    </div>
                </Link>
                <div className = "demo-text">
                    <span className = "title"> {snippet.title} </span>
                </div>
            </div>
    )
}
export default Snippet;