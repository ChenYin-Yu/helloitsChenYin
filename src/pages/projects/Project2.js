import React from 'react';
import Project_info from '../../Componets/Project_main/Project_main'
import Project_intro from '../../Componets/Project_intro/Project_intro'
import Img_gallery from '../../Componets/Img_gallery/Img_gallery'
import d from '../../data/projects.json'
import Credit from '../../Componets/Credit/Credit'
const Project = () => {
    const fontColor = '#ffffff';
    return (
        <div className='App-body'>
            <Project_info info={d.project_info.project2} fontColor={fontColor}/>
            <div>
                <Project_intro bullet={d.project_info.project2.intro[0]}/>
                <Project_intro bullet={d.project_info.project2.intro[1]}/>
                
                <Img_gallery img_gallery={d.project_info.project2.gallery[0]} width={"auto"} height={"100%"}/>
                <Project_intro bullet={d.project_info.project2.intro[2]} width={"auto"} height={"100%"}/>
                <Img_gallery img_gallery={d.project_info.project2.gallery[1]} width={"auto"} height={"100%"}/>
                <Credit credit_list={d.project_info.project2.credit}/> 
            </div>
             
        </div>
    );
}


export default Project;
