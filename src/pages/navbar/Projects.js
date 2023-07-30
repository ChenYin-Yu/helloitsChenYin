import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Snippet from '../../Componets/Snippet/Snippet'
import d from '../../data/projects.json'

class Projects extends Component {
    componentDidMount() {
    }

    render() {
        return(
            <div className='App-body'>
                <header>
                </header>
                <div className='snippet-container projects'>
                    <Snippet snippet={d.project_info.project1.snippet}/>
                    <Snippet snippet={d.project_info.project2.snippet}/>
                    <Snippet snippet={d.project_info.project3.snippet}/>
                </div>
            </div>
    )};
}
export default Projects;

