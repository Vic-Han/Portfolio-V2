// Mainpage.jsx
import React, { useEffect, useState } from 'react';
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import SocialGrid from '../components/SocialGrid';
import ImageToggler from '../components/ImageToggler';
import { animateContentBoxes } from '../transitions/AnimationHelper';
/**
 * @component Mainpage
 * @description
 * A responsive landing page component that combines personal introduction, image slideshow,
 * and social media links. Features customizable animations and theme modes.
 
 * @requires
 * - GlobalContext with properties:
 *   - darkMode: boolean
 *   - animation: 'Minimal' | 'Normal' | 'Extreme'
 *   - mainPictures: string[] (for ImageToggler)
 * 
 * @layout
 * Implements a responsive layout that adapts to different screen sizes:
 * - Mobile: Single column layout
 * - Desktop: Two-column layout (main content 4/5, social sidebar 1/5)
 * 
 * @sections
 * 1. Welcome Section:
 *    - Image slideshow (ImageToggler)
 *    - Welcome text
 * 2. Description Section:
 *    - Main content text
 * 3. Social Media Section:
 *    - Interactive social media grid (SocialGrid)
 * 
 * @animations
 * Features three animation modes for content reveal:
 * - Minimal: No animations
 * - Normal: Fade-in effect (200ms delay between elements)
 * - Extreme: Smooth reveal effect (250ms delay between elements)
 * 
 * @styling
 * Uses Tailwind CSS for responsive design with custom classes for:
 * - Dark/light mode theming
 * - Card-style containers
 */

function Mainpage() {
  const settingsStates = useContext(GlobalContext);
  const { darkMode, animation } = settingsStates;
  const [boxAnimationStates, setBoxAnimationStates] = useState(['', '', '']);

  
  const hideContentBoxes = () => {    
    const newAnimationStates = boxAnimationStates.map(() => 'opacity-0');
    setBoxAnimationStates(newAnimationStates);
  }

  const animateContentBoxesNormal = animateContentBoxes('fade-in', 200);
  const animateContentBoxesExtreme = animateContentBoxes('smooth-reveal', 250);

  
  useEffect(() => {
    if(animation !== 'Minimal'){
      hideContentBoxes();
      if (animation === 'Normal') {
        animateContentBoxesNormal(boxAnimationStates, setBoxAnimationStates);
      } else if (animation === 'Extreme') {
        animateContentBoxesExtreme(boxAnimationStates, setBoxAnimationStates);
      }
    }
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full">
     
      <div className="md:w-3/4 lg:w-4/5 flex flex-col">
        <div className={`w-11/12 my-2 relative left-1/2 -translate-x-1/2 md:m-2 lg:m-4 xl:m-6 2xl:m-8 flex md:flex-row flex-col overflow-hidden items-center ${darkMode ? 'card-dark' : 'card-light'} ${boxAnimationStates[0]}`}>
          <div className='py-1 md:mx-4 md:py-3 lg:p-2 flex-shrink-0 w-60 sm:w-96 md:w-72 lg:w-100 xl:w-112 2xl:w-128 3xl:w-168 xl:py-4 2xl:py-6'>
            <ImageToggler/>
          </div>
          <div className='text-semibold text-primary flex-shrink-0 p-4 w-full grid place-items-center md:flex-1
            sm:p-8 md:px-0 xl:py-8 2xl:py-10 2xl:px-3 3xl:px-2'>
              <div className='text-center text-lg sm:text-3xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-7xl'>
                Hi I'm Victor!
              </div>
          </div>
        </div>

        <div className={`w-11/12 my-1 relative left-1/2 -translate-x-1/2 md:p-2 lg:p-3 2xl:p-4 md:m-2 lg:m-4 xl:m-6 2xl:m-8 flex flex-col overflow-auto  ${darkMode ? 'card-dark' : 'card-light'} ${boxAnimationStates[1]}`}>
          <div className='flex flex-col items-center m-3 text-sm sm:text-base md:text-lg lg:text-xl/relaxed 2xl:text-2xl/relaxed 3xl:text-3xl/relaxed 4xl:text-4xl/relaxed text-secondary'>
          I'm a web developer and ultra runner. 
          I graduated in May with a Bachelor's in Computer Science from the University of Calgary. 
          I'm driven by my desire to create meanigful impact through technology, and the pride I take in solving complex problems.
          </div>
        </div>
      </div>

      <div className={`w-full md:w-1/4 lg:w-1/5 flex flex-col md:flex-row justify-center my-2 mx-0 md:m-2 lg:m-4 xl:m-6 2xl:m-8`}>
        <div className={`w-11/12 md:w-full relative left-1/2 -translate-x-1/2 flex p-3 md:px-4 md:py-2 3xl:px-6s animate-right-mainpage ${darkMode ? 'card-dark' : 'card-light'} ${boxAnimationStates[2]}`}>
          <div className={`w-11/12 relative left-1/2 -translate-x-1/2 h-full flex flex-col md:grid md:items-center xl:text-3xl 2xl:text-4xl 3xl:px-4 text-primary text-center leading-loose`}>          
              <div>Stay in touch!</div>
              <SocialGrid />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;