import React, { useEffect, useState } from 'react';
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import SocialGrid from '../components/SocialGrid';
import ImageToggler from '../components/ImageToggler';
import { animateContentBoxes } from '../transitions/AnimationHelper';

// Mainpage component
function Mainpage() {
  const settingsStates = useContext(GlobalContext);
  const { darkMode, animation } = settingsStates;
  const [boxAnimationStates, setBoxAnimationStates] = useState(['', '', '']);

  // Content box animation
  // These functions animate the content boxes with different effects based on the animation prop.
  const hideContentBoxes = () => {    
    const newAnimationStates = boxAnimationStates.map(() => 'opacity-0');
    setBoxAnimationStates(newAnimationStates);
  }

  const animateContentBoxesLow = animateContentBoxes('fade-in', 200);
  const animateContentBoxesNormal = animateContentBoxes('scale-in', 250);
  const animateContentBoxesExtreme = animateContentBoxes('slam', 300);

  // Setup and teardown
  // Set up the content box animation based on the animation prop.
  // Clear the animation when the component unmounts or re-renders.
  useEffect(() => {
    if(animation !== 'None'){
      hideContentBoxes();
      if (animation === 'Low') {
        animateContentBoxesLow(boxAnimationStates, setBoxAnimationStates);
      } else if (animation === 'Normal') {
        animateContentBoxesNormal(boxAnimationStates, setBoxAnimationStates);
      } else if (animation === 'Extreme') {
        animateContentBoxesExtreme(boxAnimationStates, setBoxAnimationStates);
      }
    }
  }, []);

  // Render the main page layout
  return (
    <div className="flex flex-col md:flex-row w-full">
      {/* Content boxes */}
      {/* The content boxes are animated based on the boxAnimationStates array. */}
      <div className="md:w-2/3 lg:w-3/4 xl:w-4/5 flex flex-col">
        {/* First content box */}
        <div className={`w-11/12 relative left-1/2 -translate-x-1/2 m-10 flex md:flex-row flex-col overflow-hidden ${darkMode ? 'card-dark' : 'card-light'} ${boxAnimationStates[0]}`}>
          {/* Image toggler */}
          <div className='mx-4 flex-shrink-0 w-60 sm:w-96 md:w-80 lg:w-96 xl:w-128 2xl:w-144 xl:py-8 2xl:py-10'>
            <ImageToggler animation={animation}/>
          </div>
          {/* Text content */}
          <div className='text-semibold text-primary flex-shrink-0 p-4 w-full grid place-items-center
            sm:p-8 md:p-6 md:w-80 
            lg:text-7xl lg:w-96
            xl:py-8 xl:px-24 xl:w-128 
            2xl:py-10 2xl:px-4  2xl:w-144'>
              <div className='text-center text-lg sm:text-2xl md:text-3xl xl:text-5xl 2xl:text-7xl'>
                Hi I'm Victor!
              </div>
            
          </div>
        </div>

        {/* Second content box */}
        <div className={`w-11/12 relative left-1/2 -translate-x-1/2 m-10 flex flex-col overflow-auto p-5 ${darkMode ? 'card-dark' : 'card-light'} ${boxAnimationStates[1]}`}>
          {/* Text content */}
          <div className={`flex flex-col items-center m-5 text-3xl leading-loose text-secondary`}>
            I'm a web developer currently training AI to write code at DataAnnotation. 
            I recently graduated from the University of Calgary with a degree in Computer Science. 
            I'm driven by my curiosity and love for taking on difficult challenges.
          </div>
        </div>
      </div>

      {/* Third content box */}
      <div className={`md:w-1/3 lg:w-1/4 xl:w-1/5 flex justify-center m-10`}>
        <div className={`w-full relative left-1/2 -translate-x-1/2 flex p-2 flex-col ${darkMode ? 'card-dark' : 'card-light'} ${boxAnimationStates[2]}`}>
          {/* Social grid */}
          <div className={`w-11/12 relative left-1/2 -translate-x-1/2 h-full grid items-center text-4xl text-primary text-center leading-loose`}>          
              
              <div>Stay in touch!</div>
            <SocialGrid />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;