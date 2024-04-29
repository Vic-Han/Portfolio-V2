import React, { useState, createContext, useEffect } from 'react';
import Cookies from 'js-cookie';

const SettingsContext = createContext();

const SettingsProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(Cookies.get('darkMode') === 'true');
  const [animation, setAnimation] = useState(Cookies.get('animationLevel') || 'Low');

  useEffect(() => {
    Cookies.set('darkMode', darkMode.toString());
  }, [darkMode]);

  useEffect(() => {
    Cookies.set('animationLevel', animation);
  }, [animation]);

  return (
    <SettingsContext.Provider value={{ darkMode, setDarkMode, animation, setAnimation }}>
      {children}
    </SettingsContext.Provider>
  );
};

export {SettingsContext, SettingsProvider};