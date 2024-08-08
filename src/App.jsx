import React, { useState, useEffect, useContext } from 'react';
import Cookies from 'js-cookie';

import Portfolio from './Portfolio';
import { GlobalProvider } from './context/GlobalContext'
function App() {
  useEffect(() => { 
    const darkTheme = Cookies.get('darkMode');
    const animationLevel = Cookies.get('animationLevel'); 
    if(!darkTheme){      
      Cookies.set('darkMode', 'false');     
    }    
    else if(!animationLevel){      
      Cookies.set('animationLevel', 'Low');
    }
  }, []); 
  
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
    <GlobalProvider>
      <Portfolio/>
    </GlobalProvider>
    </div>  
  );
}
  
export default App; 