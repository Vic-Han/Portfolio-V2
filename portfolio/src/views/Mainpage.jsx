import React, { useEffect, useState } from 'react';

import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import SocialGrid from '../components/SocialGrid';
import ImageToggler from '../components/ImageToggler';
function Mainpage() {
  const settingsStates = useContext(GlobalContext);
  const { darkMode, animation } = settingsStates;

  
  return (
    <div className={`flex flex-col`}>
      <div className={`w-fit relative left-1/2 -translate-x-1/2 m-10 flex md:flex-row flex-col overflow-auto ${darkMode ? 'card-dark' : 'card-light'}`}>
        <div className='mx-4 flex-shrink-0 w-60 sm:w-96 md:w-80 lg:w-96 xl:w-128 2xl:w-144'>
          <ImageToggler animation={animation}/>
        </div>
        <div className='text-semibold flex-shrink-0 text-center text-lg p-4 leading-normal w-full  
          sm:p-8 sm:text-2xl
          md:p-6 md:text-6xl md:leading-relaxed md:w-80 
          lg:text-7xl lg:leading-relaxed lg:w-96
          xl:py-8 xl:px-24 xl:text-7xl xl:leading-relaxed xl:w-128 
          2xl:py-10 2xl:px-16 2xl:text-8xl 2xl:leading-relaxed 2xl:w-144'>
          Hi there! My name is Victor!
        </div>
      </div>

      <div className={` flex flex-col md:flex-row-reverse w-fit relative left-1/2 -translate-x-1/2 ${darkMode ? 'card-dark' : 'card-light'}`}>
      <div className={`w-128 h-128 grid items-center m-5 p-6`}>
          <SocialGrid />
        </div>
        
        <div className={`flex flex-col items-center m-5 `}>
          I am a full stack developer
        </div>
        
      </div>

    </div>
  );
}

export default Mainpage;     
