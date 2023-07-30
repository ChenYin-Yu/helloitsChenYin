import React from 'react';
import Project_info from '../../Componets/Project_main/Project_main'
import Project_intro from '../../Componets/Project_intro/Project_intro'
import Img_gallery from '../../Componets/Img_gallery/Img_gallery'
import Img_desc from '../../Componets/Img_desc/Img_desc'
import d from '../../data/projects.json'
import Credit from '../../Componets/Credit/Credit'
import Projects from '../navbar/Projects';

const Project = () => {
    const fontColor = '#ffffff';
    return (
        <div className='App-body'>
            <Project_info info={d.project_info.project3} fontColor={fontColor}/>
            <div>
                <Project_intro bullet={d.project_info.project3.intro[0]}/>
                <Project_intro bullet={d.project_info.project3.intro[1]}/>
                <Img_gallery img_gallery={d.project_info.project3.gallery[0]} width={"auto"} height={"50%"}/>
                <Project_intro bullet={d.project_info.project3.intro[2]}/>
                <Img_gallery img_gallery={d.project_info.project3.gallery[1]} width={"auto"} height={"30%"}/>
                <Project_intro bullet={d.project_info.project3.intro[3]}/>
                <Img_desc img_section={d.project_info.project3.img_section[0]}/>
                <Credit credit_list={d.project_info.project3.credit}/>
            </div>
           
        </div>
    );
}


export default Project;
