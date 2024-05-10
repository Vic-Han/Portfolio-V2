import React, { useState, useEffect, useContext } from 'react';
import './style.css';

import Settings from './views/Settings';  
import Mainpage from './views/Mainpage';
import Projects from './views/Projects';
import Resume from './views/Resume';
import About from './views/About';
import Navbar from './components/Navbar';

import FadeCircleTransition from './transitions/FadeCircleTransition';
import SlideCoverTransition from './transitions/SlideCoverTransition';
import { GlobalContext } from './context/GlobalContext';

function Portfolio() {
  
  const GlobalStates = useContext(GlobalContext);
  const { darkMode, animation, circleTransition, slideTransition, toggleCircleTransition,  toggleSlideTransition} = GlobalStates;
  const [screen, setScreen] = useState(null);


  const [settings, setSettings] = useState(false);
  const toggleScreen = (page) => {    
    if (page === 'settings') {      
      toggleSettings();      
      return;    
    }    
    if (animation === 'Low'){
      setScreen(page);
      return;
    }  
    if (animation === 'Normal') {      
      toggleCircleTransition(); 
      setTimeout(() => {
        setScreen('none')
      }, 610);     
      setTimeout(() => {        
        setScreen(page);      
      }, 1200);    
    } else {      
      toggleSlideTransition();  
      setTimeout(() => {
        setScreen('none')
      }, 510);      
      setTimeout(() => {        
        setScreen(page);      
      }, 1000);    
    }  
  };
  function toggleSettings(){
    setSettings(!settings);
  }
  useEffect(() => { 
    toggleScreen('mainpage');    
  }, []); 
  
  return (
    <div className=''>
      <div className={`w-screen h-screen fixed top-0 left-0 -z-50 ${darkMode ? 'bg-dark' : 'bg-light'}`}/>
      <Navbar clickHandler={toggleScreen} darkmode={darkMode}/>
      {slideTransition && <SlideCoverTransition/>}
      {circleTransition && <FadeCircleTransition/>}
      {settings && <Settings close={toggleSettings}/>}
      {screen === 'mainpage' && <Mainpage/>}
      {screen === 'projects' && <Projects />}
      {screen === 'resume' && <Resume />}
      {screen === 'contact' && <About/>}
    </div>  
  );
}
  
export default Portfolio; 