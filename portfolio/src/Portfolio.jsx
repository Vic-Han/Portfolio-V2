import React, { useState, useEffect, useContext } from 'react';
import './style.css';

import Settings from './views/Settings';  
import Mainpage from './views/Mainpage';
import Projects from './views/Projects';
import Resume from './views/Resume';
import Contact from './views/Contact';
import Navbar from './components/Navbar';

import FadeCircleTransition from './transitions/FadeCircleTransition';
import SlideCoverTransition from './transitions/SlideCoverTransition';
import { SettingsContext } from './context/SettingsContext';

function Portfolio() {
  
  const settingsStates = useContext(SettingsContext);
  const { darkMode, animation } = settingsStates;
  const [screen, setScreen] = useState(null);


  const [settings, setSettings] = useState(false);
  const [circleTransition, setCircleTransition] = useState(false);
  const [slideTransition, setSlideTransition] = useState(false);
  const toggleScreen = (page) => {
    if(page === 'settings'){
      toggleSettings();
      return;
    }
    setScreen(page);
  }
  function toggleSettings(){
    setSettings(!settings);
  }
  useEffect(() => { 
    toggleScreen('mainpage');    
  }, []); 
  
  return (
    <div className=''>
  
      <Navbar clickHandler={toggleScreen} darkmode={darkMode}/>
      {slideTransition && <SlideCoverTransition/>}
      {circleTransition && <FadeCircleTransition/>}
      {settings && <Settings close={toggleSettings} setSlideTransition={setSlideTransition} setCircleTransition={setCircleTransition}/>}
      {screen === 'mainpage' && <Mainpage/>}
      {screen === 'projects' && <Projects />}
      {screen === 'resume' && <Resume />}
      {screen === 'contact' && <Contact/>}
    </div>  
  );
}
  
export default Portfolio; 