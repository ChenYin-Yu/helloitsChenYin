import React from 'react';
import Project_info from '../../Componets/Project_main/Project_main'
import Project_intro from '../../Componets/Project_intro/Project_intro'
import Img_desc from '../../Componets/Img_desc/Img_desc'
import Credit from '../../Componets/Credit/Credit'
import d from '../../data/projects.json'

const Project = () => {
    const fontColor = '#ffffff';
    return (
        <div className='App-body'>
            <Project_info info={d.project_info.project1} fontColor={fontColor}/>
            <div className='project-content'>
                <div className='left'>
                    <Project_intro bullet={d.project_info.project1.intro[0]}/>
                    <Project_intro bullet={d.project_info.project1.intro[1]}/>
                </div>
                <div className='right'>
                    <img className='rounded-image img-single' style={{width:42+'vw'}} src= {process.env.PUBLIC_URL + '/' + d.project_info.project1.img_section[2].img_url} ></img>
                </div>
            </div>
            <div className='project-content'>
                <div className='left'>
                    
                </div>
                <div className='right'>
                    <Project_intro bullet={d.project_info.project1.intro[2]}/>
                </div>
            </div>
            <Img_desc img_section={d.project_info.project1.img_section[1]}/>
            <div className='project-content'>
                <div className='left'>
                </div>
                <div className='right'>
                    <Project_intro bullet={d.project_info.project1.intro[3]}/>
                </div>
            </div>
            <Img_desc img_section={d.project_info.project1.img_section[0]}/>
            <Credit credit_list={d.project_info.project1.credit}/>
        </div>
    );
}


export default Project;
