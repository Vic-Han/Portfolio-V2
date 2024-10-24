import React, { useState, useEffect, useContext } from 'react';

import Settings from './views/Settings';  
import Mainpage from './views/Mainpage';
import Projects from './views/Projects';
import Resume from './views/Resume';
import About from './views/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import FadeCircleTransition from './transitions/FadeCircleTransition';
import { GlobalContext } from './context/GlobalContext';


// Portfolio component
// This component handles the main logic for the portfolio, including switching between screens and playing transitions.
function Portfolio() {
  
  // Initialize state and context
  const GlobalStates = useContext(GlobalContext);
  const {darkMode, animation, circleTransition, toggleCircleTransition} = GlobalStates;
  const [screen, setScreen] = useState(null);
  const [settings, setSettings] = useState(false);

  // Function to toggle between screens with transitions
  // This function handles the logic for switching between different screens in the portfolio,
  // including playing transitions based on the current animation level.
  const toggleScreen = (page) => {    
    if (page === 'settings') {      
      toggleSettings();      
      return;    
    }    
    if (animation === 'Normal' || animation === "Minimal"){
      setScreen(page);
      return;
    }  

    toggleCircleTransition(); 
    setTimeout(() => {
      setScreen('none')
    }, 610);     
    setTimeout(() => {        
      setScreen(page);      
    }, 1200);    
   
  };

  // This function simply toggles the settings state on and off.
  function toggleSettings(){
    setSettings(!settings);
  }

  // Initialize screen to main page on mount
  useEffect(() => { 
    setScreen('mainpage');    
  }, []); 
  
  return (
    <div className=''>
      <div className={`w-screen h-screen fixed top-0 left-0 -z-50 ${darkMode ? 'bg-dark' : 'bg-light'}`}/>
      <Navbar clickHandler={toggleScreen} darkmode={darkMode}/>
      {circleTransition && <FadeCircleTransition/>}
      {settings && <Settings close={toggleSettings}/>}
      {screen === 'mainpage' && <Mainpage/>}
      {screen === 'projects' && <Projects />}
      {screen === 'resume' && <Resume />}
      {screen === 'about' && <About/>}
      {screen !== 'none' && <Footer/>}
    </div>  
  );
}

export default Portfolio;