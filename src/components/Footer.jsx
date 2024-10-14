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
  
    if (footerRef.current && animation !== 'Minimal') observer.observe(footerRef.current);    
    return () => { if (footerRef.current) observer.unobserve(footerRef.current); 
    };   
  }, []); 
  useEffect(() => {
    if (animation === 'Minimal') {
      if (footerRef.current) observer.unobserve(footerRef.current); 
    } else {
      observer.observe(footerRef.current); 
      return () => { if (footerRef.current) observer.unobserve(footerRef.current); };
    }
  }, [animation]);

  return ( 
    <footer ref={footerRef} className={`mt-4 2xl:mt-12 ${ isVisible ? 'animate-footer overflow-x-hidden' : ''} `}> 
        <div className={`flex flex-col items-center justify-between w-screen px-4 py-1 md:flex-row md:flex-wrap md:py-12 ${darkMode ? 'footer-bg-dark' : 'footer-bg-light'}`}> 

          {/* Left Column */}
          <div className='text-xs my-1 sm:text-sm md:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl footer-text md:w-1/2 xl:w-1/4 text-center'>
            &copy; 2024 Victor Han
          </div>

          {/* Center Column */}
          <div className="my-1 px-4 md:w-1/2 xl:w-1/4 flex-col flex text-center">
            <div className="text-2xs sm:text-xs md:text-sm footer-text xl:text-base 2xl:text-lg 3xl:text-xl">Contact Me! </div>
            <div className="text-2xs sm:text-xs md:text-sm footer-link xl:text-base 2xl:text-lg 3xl:text-xl">victor.han72@gmail.com </div>
          </div>

          <div className='text-2xs sm:text-xs md:text-sm xl:text-base 2xl:text-lg 3xl:text-xl footer-text px-0 md:px-3 w-2/3 md:w-1/2 xl:w-1/4'> Programmed by yours truly, with React and Tailwind CSS - 
              <a href="https://github.com/Vic-Han/Portfolio-V2" className="footer-link"> Source code</a>
          </div>
          {/* Right Column */}
          <div className="my-1 w-2/3 md:w-1/2 xl:w-1/4 md:px-3 text-2xs sm:text-xs md:text-sm xl:text-base 2xl:text-lg 3xl:text-xl">
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