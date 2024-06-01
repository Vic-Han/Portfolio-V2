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
    const newAnimationStates = boxAnimationStates.map(() => 'hidden');
    setBoxAnimationStates(newAnimationStates);
  }

  const animateContentBoxesLow = animateContentBoxes('fade-in', 200);
  const animateContentBoxesNormal = animateContentBoxes('slide-in', 250);
  const animateContentBoxesExtreme = animateContentBoxes('bounce-in', 300);

  // Setup and teardown
  // Set up the content box animation based on the animation prop.
  // Clear the animation when the component unmounts or re-renders.
  useEffect(() => {
    hideContentBoxes();
    if (animation === 'Low') {
      animateContentBoxesLow(boxAnimationStates, setBoxAnimationStates);
    } else if (animation === 'Normal') {
      animateContentBoxesNormal(boxAnimationStates, setBoxAnimationStates);
    } else if (animation === 'Extreme') {
      animateContentBoxesExtreme(boxAnimationStates, setBoxAnimationStates);
    }
  }, []);

  // Render the main page layout
  return (
    <div className="flex flex-col md:flex-row w-full">
      {/* Content boxes */}
      {/* The content boxes are animated based on the boxAnimationStates array. */}
      <div className="md:w-2/3 lg:w-3/4 xl:w-4/5 2xl:w-5/6 flex flex-col">
        {/* First content box */}
        <div className={`w-11/12 relative left-1/2 -translate-x-1/2 m-10 flex md:flex-row flex-col overflow-auto ${darkMode ? 'card-dark' : 'card-light'} ${boxAnimationStates[0]}`}>
          {/* Image toggler */}
          <div className='mx-4 flex-shrink-0 w-60 sm:w-96 md:w-80 lg:w-96 xl:w-128 2xl:w-144'>
            <ImageToggler animation={animation}/>
          </div>
          {/* Text content */}
          <div className='text-semibold flex-shrink-0 text-center text-lg p-4 leading-normal w-full
            sm:p-8 sm:text-2xl
            md:p-6 md:text-6xl md:leading-relaxed md:w-80 
            lg:text-7xl lg:leading-relaxed lg:w-96
            xl:py-8 xl:px-24 xl:text-7xl xl:leading-relaxed xl:w-128 
            2xl:py-10 2xl:px-16 2xl:text-8xl 2xl:leading-relaxed 2xl:w-144'>
            Hi there! My name is Victor!
          </div>
        </div>

        {/* Second content box */}
        <div className={`w-11/12 relative left-1/2 -translate-x-1/2 m-10 flex flex-col overflow-auto ${darkMode ? 'card-dark' : 'card-light'} ${boxAnimationStates[1]}`}>
          {/* Text content */}
          <div className={`flex flex-col items-center m-5 `}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            In sodales elit vel risus aliquet, quis commodo ipsum pulvinar. 
            Nulla et augue sit amet est efficitur scelerisque. 
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
          </div>
        </div>
      </div>

      {/* Third content box */}
      <div className={`md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 flex flex-col m-10 ${darkMode ? 'card-dark' : 'card-light'} ${boxAnimationStates[2]}`}>
        {/* Social grid */}
        <div className={`w-11/12 relative left-1/2 -translate-x-1/2 h-full grid items-center m-5 p-6`}>
          Connect with me!
          <SocialGrid />
        </div>
      </div>
    </div>
  );
}

export default Mainpage;