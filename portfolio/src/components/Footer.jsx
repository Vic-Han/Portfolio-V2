import React, { useState, useEffect, useRef } from 'react';

function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {    
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.2 }); // Adjust threshold as needed
  
    if (footerRef.current) observer.observe(footerRef.current);    
    return () => { if (footerRef.current) observer.unobserve(footerRef.current); 
    };   
  }, []); 

  return ( 
    <footer ref={footerRef} className={`mt-12 border-t border-black  w-full overflow-hidden  ${ isVisible ? 'animate-footer' : ''} `}> 
        <div className="flex flex-col items-center justify-between w-screen px-4 py-6 md:flex-row md:items-center md:justify-between md:py-12"> 

          {/* Left Column */}
          <div className="text-sm text-gray-600">
            &copy; 2024 Victor Han
          </div>

          {/* Center Column */}
          <div className="md:w-1/2 px-4 md:ml-20">
            <div className="text-sm text-gray-600">Get in touch! </div>
            <div className="text-sm text-gray-500">victor.han72@gmail.com</div>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-500">
            <div> Programmed by yours truly, with React and Tailwind CSS - <a href="https://github.com/Vic-Han/Portfolio-V2" className="hover:text-blue-700">Source code</a></div>
            <div> I also took some components from <a href ="https://uiverse.io/" className="hover:text-blue-700"> UIverse </a> - <a href="https://uiverse.io/SelfMadeSystem/selfish-starfish-40" className="hover:text-blue-700">Star toggle</a> <a href="https://uiverse.io/andrew-demchenk0/honest-stingray-90" className="hover:text-blue-700"> Dark switch</a></div>
          </div>
        </div> 
    </footer>
  ); 
}

export default Footer;