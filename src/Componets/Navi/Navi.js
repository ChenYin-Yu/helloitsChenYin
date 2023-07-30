import React from 'react';
import { Link } from "react-router-dom";
import './Navi.css';

const Navi = ({fontColor}) => {
    return (
        <div className="Navi-bar" >
            <span className = 'sub-page Name'>
                <Link to="/" className = 'styled-link-title' style={{ color: fontColor}}> CHEN-YIN &nbsp; YU </Link>
            </span>
            <span className = 'sub-page'>
                <Link to="/About" className = 'styled-link-navi' style={{ color: fontColor}}> About </Link>
            </span>
            <span className = 'sub-page'>
                <Link to="/Projects" className = 'styled-link-navi' style={{ color: fontColor}}> Projects </Link>
            </span>
        </div>
    );
}

export default Navi