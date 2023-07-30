import React from 'react';
import Regu_btn1 from '../../Componets/Regu_btn1/Regu_btn1';
import Regu_btn2 from '../../Componets/Regu_btn2/Regu_btn2';
const About = () => {
    return (
        
        <div className='App-body'>
            <div className='App-body'>
                <div className = 'intro-title floating-text'>I'm Chen-Yin, a Programmer!</div>  
                <br/>
                <div className = 'intro-desc floating-text'>I like using technologies to solve problems in various fields and blending creativity and visuals to create interesting works.</div>
                <br/>
                <div className = 'intro-desc floating-text'>~2 years’ experience and globally minded programmer with strong project collaboration skills across different time zones. Skilled in full stack development using JavaScript, C#, Python, and SQL. Reliable and dedicated professional seeking a software Engineer position to contribute to team success and help achieve company goals.</div>
            </div>
            
            <div className='basic-info'>
                <Regu_btn1 text={'Works>'} url={'https://www.foreflame.com/'}/>
                <Regu_btn2 text={'Resume>'} url={'https://www.foreflame.com/'}/>
            </div>
            
        </div>
    );
}


export default About;
