import React, { useState, useEffect, useContext } from 'react';
import DarkThemeSwitch from '../components/DarkThemeSwitch';
import AnimationToggle from '../components/AnimationToggle';

import ReadOnlyStars from '../components/ReadOnlyStars';
import {GlobalContext} from '../context/GlobalContext';
import {animateContentBoxes} from '../transitions/AnimationHelper';
function Settings({close}) {
    const settingsStates = useContext(GlobalContext);
    const {darkMode, setDarkMode, animation, setAnimation} = settingsStates;
    const [boxAnimationStates, setBoxAnimationStates] = useState(['']);

    const hideContentBoxes = () => {    
        const newAnimationStates = boxAnimationStates.map(() => 'hidden');
        setBoxAnimationStates(newAnimationStates);
    }

    const animateContentBoxesLow = animateContentBoxes('fade-in', 200);
    const animateContentBoxesNormal = animateContentBoxes('smooth-reveal', 250);
    const closeButtonStyle = (animation) =>{
        if(animation === 'Minimal'){return ''}
        if (animation === 'Normal') {return 'hover:scale-105 transition duration-400'}  
        if (animation === 'Extreme') {return 'hover:scale-105 transition duration-400 close-hover'} 
    }

    useEffect(() => {
        if(animation !== 'Minimal'){
            hideContentBoxes();
            if (animation === 'Normal') {
            animateContentBoxesLow(boxAnimationStates, setBoxAnimationStates);
            } else if (animation === 'Extreme') {
            animateContentBoxesNormal(boxAnimationStates, setBoxAnimationStates);
            } 
        }
      }, []);
    

    return(
        <div className={`${darkMode ? 'bg-dark' : 'bg-light'} p-2 sm:p-4 xl:p-10 box-border w-screen h-screen fixed top-0 left-0 z-30`}>
          
            <div className={`relative -translate-x-1/2 left-1/2 rounded-xl my-2 sm:my-4 xl:my-10 p-3 sm:p-4 xl:p-6 3xl:p-10 w-11/12 sm:w-5/6 xl:w-2/3 text-center ${darkMode ? 'card-dark' : 'card-light'} ${boxAnimationStates[0]}`}>
                <div className='flex flex-row'>
                    <div className='w-1/2 p-0'>
                        <div className='relative left-0 w-fit'>
                            <div className='text-sm sm:text-base xl:text-3xl 2xl:text-4xl 3xl:text-5xl text-primary w-fit mb-0.5 sm:mb-1 md:mb-2 lg-mb-3 xl:mb-4 2xl:mb-4 3xl:mb-6'>Dark Theme?</div>
                            <div className='scale-60 sm:scale-75 md:scale-95 lg:scale-105 2xl:scale-125 3xl:scale-150'><DarkThemeSwitch value={darkMode} change={setDarkMode}/></div>
                        </div>
                    </div>
                    <div className='w-1/2 p-0'>
                        <div className='relative left-full -translate-x-full w-fit'>
                            <button onClick={close} className={`close-button w-10 sm:w-14 xl:w-20 2xl:w-24 3xl:w-28 4xl:w-32 ${closeButtonStyle(animation)}`}></button>
                        </div>
                    </div> 
                </div>
                <div className='flex flex-row -my-6 md:my-0 3xl:my-8'>
                    <div className='min-h-full w-1/3'>
                        <div className='relative left-0 w-fit top-1/2 -translate-y-1/2'>
                            <div className='text-sm sm:text-base xl:text-3xl 2xl:text-4xl 3xl:text-5xl mb-2 sm:mb-4 lg:mb-6 xl:mb-10 text-primary xl:-translate-x-0.5'>Animation Level:</div>
                            <div className='text-secondary text-xs sm:text-base xl:text-xl 2xl:text-2xl 3xl:text-3xl'> {animation}</div>
                            <div className='relative -translate-x-1/2 left-1/2 p-0 sm:p-1 md:p-2 lg:p-3 xl:w-fit 3xl:p-8 scale-50 sm:scale-60 md:scale-95 lg:scale-110 xl:scale-125 3xl:scale-150'> <AnimationToggle value={animation} change={setAnimation} dark={darkMode}/> </div>
                        </div>
                    </div>
                    <div className='min-h-full p-0 lg:p-6 w-2/3 scale-50 sm:scale-60 md:scale-95 lg:scale-110 xl:scale-125 3xl:scale-150 xl:p-8'>
                    <div className='relative -translate-x-1/2 left-1/2 w-fit flex flex-row mt-2 xl:mt-4 h-10'>
                        <div className='relative mt-4 -translate-y-1/2 text-secondary text-lg w-16 text-left h-fit mr-1'> Extreme: </div> 
                        <div className='w-28'><ReadOnlyStars value={3}/></div>
                    </div>
                    <div className='relative -translate-x-1/2 left-1/2 text-secondary w-fit text-sm mb-8'> Completely unnecessary, but I wanna see it anyways! </div>
                    <div className='relative -translate-x-1/2 left-1/2 w-fit flex flex-row h-10'>
                        <div className='relative mt-4 -translate-y-1/2 text-secondary text-lg w-16 text-left h-fit mr-1'> Normal: </div> 
                        <div className='w-28'><ReadOnlyStars value={2}/></div>
                    </div>
                    <div className='relative -translate-x-1/2 left-1/2 text-secondary w-fit text-sm mb-8'> Dynamic stuff will enhance my experience. </div>
                    <div className='relative -translate-x-1/2 left-1/2 w-fit flex flex-row h-10'>
                        <div className='relative mt-4 -translate-y-1/2 text-secondary text-lg w-16 text-left h-fit mr-1'> Minimal: </div> 
                        <div className='w-28'><ReadOnlyStars value={1}/></div>
                    </div>
                    <div className='relative -translate-x-1/2 left-1/2 text-secondary w-fit text-sm mb-2'> No thanks, I just want to browse the website. </div>
                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default Settings;
