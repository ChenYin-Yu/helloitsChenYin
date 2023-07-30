import './App.css';
import React from 'react'
import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom"
import Navi from './Componets/Navi/Navi'
import Footer from './Componets/Footer/Footer'
import About from './pages/navbar/About'
import Projects from './pages/navbar/Projects'
import Project1 from './pages/projects/Project1'
import Project2 from './pages/projects/Project2'
import Project3 from './pages/projects/Project3'


const NaviWithDynamicColor = () => {
  const location = useLocation();

  // Function to calculate the font color based on the current path
  const getFontColor = () => {
    const color = location.pathname.startsWith('/Projects/Project') ? '#ffffff' : '#000000';
    return color;
  };

  const fontColor = getFontColor();

  return <Navi fontColor={fontColor} />;
};


const App =  () => {

  return ( 
    <div className="App">
      <header>
        <Router>
          <NaviWithDynamicColor  />
          <Routes>
          <Route path = '/*'  element = {<Projects />}/>
          <Route path = '/About' element = {<About />}/>
          <Route path = '/Projects' element = {<Projects />}/>
          <Route path = '/Projects/Project1' element = {<Project1 />}/>
          <Route path = '/Projects/Project2' element = {<Project2 />}/>
          <Route path = '/Projects/Project3' element = {<Project3 />}/>
          </Routes>
        </Router>
      </header>
      <Footer/>
      
    </div>
  );
}

export default App;
