import React, { useState, createContext, useEffect } from 'react';
import Cookies from 'js-cookie';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(Cookies.get('darkMode') === 'true');
  const [animation, setAnimation] = useState(Cookies.get('animationLevel') || 'Low');
  const [circleTransition, setCircleTransition] = useState(false);
  const [slideTransition, setSlideTransition] = useState(false);

  const toggleCircleTransition = () => {
    setCircleTransition(true)
    setTimeout(() => {
      setCircleTransition(false)
    }, 1200);
  }
  const toggleSlideTransition = () => { 
    setSlideTransition(true);
    setTimeout(() => {
      setSlideTransition(false);
    }, 1000);
  }
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