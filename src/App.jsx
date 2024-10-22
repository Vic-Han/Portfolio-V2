import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import Portfolio from './Portfolio';
import { GlobalProvider } from './context/GlobalContext';

/**
 * The main App component wraps the Portfolio component within the GlobalProvider.
 * In addition, it checks for the presence of 'darkMode' and 'animationLevel' cookies and assigns default values if they are not found.
 */
function App() {
  /**
   * The useEffect checks for the presence of 'darkMode' and 'animationLevel' cookies.
   * 
   * 'darkMode' defaults to 'true' if not present.
   * 'animationLevel' defaults to 'Normal' if not present.
   */
  useEffect(() => { 
    
    if (!Cookies.get('darkMode')) {      
      Cookies.set('darkMode', 'true')    
    }
    if (!Cookies.get('animationLevel')) {      
      Cookies.set('animationLevel', 'Normal')
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