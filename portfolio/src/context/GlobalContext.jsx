import React, { useState, createContext, useEffect } from 'react';
import Cookies from 'js-cookie';


// Global context provider
// This component provides a global context for the application,
// including state for dark mode, animation level, and transitions.
const GlobalContext = createContext();
const GlobalProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(Cookies.get('darkMode') === 'true');
  const [animation, setAnimation] = useState(Cookies.get('animationLevel') || 'Low');
  const [circleTransition, setCircleTransition] = useState(false);
  const [slideTransition, setSlideTransition] = useState(false);

  // Function to toggle circle transition
  // This function plays the circle transition animation by setting the circleTransition state to true for 1.2 seconds.
  const toggleCircleTransition = () => {
    setCircleTransition(true)
    setTimeout(() => {
      setCircleTransition(false)
    }, 1200);
  }

  // Function to toggle slide transition
  // This function plays the slide transition animation by setting the slideTransition state to true for 1 second.
  const toggleSlideTransition = () => { 
    setSlideTransition(true);
    setTimeout(() => {
      setSlideTransition(false);
    }, 1000);
  }

  // Update cookies when dark mode or animation level changes
  useEffect(() => {
    Cookies.set('darkMode', darkMode.toString());
  }, [darkMode]);

  useEffect(() => {
    Cookies.set('animationLevel', animation);
  }, [animation]);

  return (
    <GlobalContext.Provider value={{ darkMode, setDarkMode, animation, setAnimation, circleTransition, toggleCircleTransition, slideTransition, toggleSlideTransition }}>
      {children}
    </GlobalContext.Provider>
  );
};

export {GlobalContext, GlobalProvider};