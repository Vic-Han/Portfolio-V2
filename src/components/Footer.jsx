import React, { useState, useEffect, useRef, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import './footer.css';

function Footer() {
  const GlobalStates = useContext(GlobalContext);
  const { darkMode, animation } = GlobalStates;

  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);
  const UIverseLink = "https://uiverse.io/";
  const StarToggleLink = "https://uiverse.io/SelfMadeSystem/selfish-starfish-40";
  const DarkSwitchLink = "https://uiverse.io/andrew-demchenk0/honest-stingray-90";
  const observer = new IntersectionObserver(([entry]) => {    
    setIsVisible(entry.isIntersecting);
  }, { threshold: 0.2 });
  useEffect(() => {
  
    if (footerRef.current && animation !== 'None') observer.observe(footerRef.current);    
    return () => { if (footerRef.current) observer.unobserve(footerRef.current); 
    };   
  }, []); 
  useEffect(() => {
    if (animation === 'None') {
      if (footerRef.current) observer.unobserve(footerRef.current); 
    } else {
      observer.observe(footerRef.current); 
    }
  }, [animation]);

  return ( 
    <footer ref={footerRef} className={`mt-12 ${ isVisible ? 'animate-footer overflow-x-hidden' : ''} `}> 
        <div className={`flex flex-col items-center justify-between w-screen px-4 py-1 md:flex-row md:py-12 ${darkMode ? 'footer-bg-dark' : 'footer-bg-light'}`}> 

          {/* Left Column */}
          <div className='text-sm xl:text-lg footer-text xl:w-1/4 text-center'>
            &copy; 2024 Victor Han
          </div>

          {/* Center Column */}
          <div className="px-4 xl:w-1/4 flex-col flex text-center">
            <div className="text-sm footer-text xl:text-base">Contact Me! </div>
            <div className="text-sm footer-link xl:text-base">victor.han72@gmail.com </div>
          </div>

          <div className='footer-text px-3 xl:1/4'> Programmed by yours truly, with React and Tailwind CSS - 
              <a href="https://github.com/Vic-Han/Portfolio-V2" className="footer-link"> Source code</a>
          </div>
          {/* Right Column */}
          <div className="xl:w-1/4">
            <div className = "footer-text"> I also took some components and a lot of inspiration from 
              <a href ={UIverseLink} className="footer-link"> UIverse </a> 
              
              
            </div>
            <div className='flex flex-row'>
              <div className="footer-text mx-1"> • <a href={StarToggleLink} className="footer-link mx-1"> Star toggle</a>  </div>
              <div className="footer-text mx-1"> • <a href={DarkSwitchLink} className="footer-link mx-1"> Dark switch</a> </div>
              
            </div>
          </div>
        </div> 
    </footer>
  ); 
}

export default Footer;