import React, { useState, useEffect, useContext } from 'react';
import DarkThemeSwitch from '../components/DarkThemeSwitch';
import AnimationToggle from '../components/AnimationToggle';

import ReadOnlyStars from '../components/ReadOnlyStars';
import {GlobalContext} from '../context/GlobalContext';
import { animateContentBoxes } from '../transitions/AnimationHelper';
function Settings({close}) {
    const settingsStates = useContext(GlobalContext);
    const {darkMode, setDarkMode, animation, setAnimation, toggleSlideTransition, toggleCircleTransition} = settingsStates;
    const [boxAnimationStates, setBoxAnimationStates] = useState(['']);

    const hideContentBoxes = () => {    
        const newAnimationStates = boxAnimationStates.map(() => 'hidden');
        setBoxAnimationStates(newAnimationStates);
    }

    const animateContentBoxesLow = animateContentBoxes('fade-in', 200);
    const animateContentBoxesNormal = animateContentBoxes('scale-in', 250);
    const changeDarkMode = (value) => { 
        if(animation === 'Extreme'){
            toggleSlideTransition()
            setTimeout(() => {
                setDarkMode(value)
                hideContentBoxes()
            },500);
            setTimeout(() => {
                animateContentBoxesNormal(boxAnimationStates, setBoxAnimationStates);
            }, 1000);
            
        }
        else if(animation === 'Normal'){
            toggleCircleTransition()            
            setTimeout(() => {
                setDarkMode(value)
            }, 650);
        }
        else{
            setDarkMode(value)
        }
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
        <div className={`${darkMode ? 'bg-dark' : 'bg-light'} p-2 xm:p-4 xl:p-10 box-border w-screen h-screen fixed top-0 left-0 z-30`}>
          
            <div className={`relative -translate-x-1/2 left-1/2 ${darkMode ? 'card-dark' : 'card-light'} rounded-xl my-2 sm:my-4 xl:my-10 p-3 sm:p-4 xl:p-6 3xl:p-10 w-11/12 sm:w-5/6 xl:w-2/3 text-center ${boxAnimationStates[0]}`}>
            {/* <div className='flex flex-row relative left-1/2 -translate-x-1/2 w-2/3 my-10'>
                <div className='w-1/2'> 
                <div className={`relative left-1/2 -translate-x-1/2 w-2/3  rounded-xl p-6` }>
                    <div className={`text-3xl text-primary`}>Dark Theme?</div>
                    <DarkThemeSwitch value={darkMode} change={changeDarkMode}/>
                </div> 
                </div>
                <div className='w-1/2'>
                <div className={`relative left-1/2 -translate-x-1/2 w-2/3 rounded-xl p-6 text-center`}>
                    <button onClick={close} className={`${darkMode ? 'btn-primary-dark' : 'btn-primary-light'}`}> Close </button>
                </div>
                </div>
                
                
            </div>
                <div className='text-3xl mb-10 text-primary'>Animation Level:</div>
                <div className="text-secondary"> {animation}</div>
                <div className={`relative -translate-x-1/2 left-1/2 w-fit p-5 `}> <AnimationToggle value={animation} change={setAnimation} dark={darkMode}/> </div>
                    <div className='flex flex-row'>
                    <div className='text-secondary'> Normal: </div> 
                    <ReadOnlyStars value={3}/>
                </div>
                <div className='text-secondary'> Flashy </div>
                <div className='flex flex-row'>
                    <div className='text-secondary'> Low: </div> 
                    <ReadOnlyStars value={2}/>
                </div>
                <div className='text-secondary'> Recommended </div>
                <div className='flex flex-row'>
                    <div className='text-secondary'> None: </div> 
                    <ReadOnlyStars value={1}/>
                </div>
                <div className='text-secondary'> No animations </div> */}
                <div className='flex flex-row'>
                    <div className="w-1/2 p-0">
                        <div className='relative left-0 w-fit border border-red-600'>
                            <div className={`text-sm sm:text-base xl:text-3xl 2xl:text-4xl 3xl:text-5xl text-primary w-fit mb-0.5 sm:mb-1 md:mb-2 lg-mb-3 xl:mb-4 2xl:mb-5 3xl:mb-6`}>Dark Theme?</div>
                            <DarkThemeSwitch value={darkMode} change={changeDarkMode}/>
                        </div>
                        

                    </div>
                    <div className='w-1/2 p-0'>
                        <div className='relative left-full -translate-x-full w-fit'>
                            <button onClick={close} className='close-button w-24 close-hover'>  </button>
                        </div>
                    </div> 
                </div>
                Am I an idiot or are the 'Dark Theme' and 'Animation Level' texts not aligned?? The borders appear aligned but the texts don't feel that way
                <br/>
                Also the 'Normal' section of the animation legend is my best attempt at making it look smooth but idk if it looks any better than the 'Minimal'
                <br/>
                <div className="flex flex-row -my-6 md:my-0 3xl:my-8">
                    <div className='min-h-full w-1/3'>
                        <div className='relative left-0 w-fit top-1/2 -translate-y-1/2 border border-red-600'>
                            <div className='text-sm sm:text-base xl:text-3xl 2xl:text-4xl 3xl:text-5xl mb-2 sm:mb-4 lg:mb-6 xl:mb-10 text-primary'>Animation Level:</div>
                            <div className="text-secondary text-xs sm:text-base xl:text-xl 2xl:text-2xl 3xl:text-3xl"> {animation}</div>
                            <div className={`relative -translate-x-1/2 left-1/2 p-0 sm:p-1 md:p-2 lg:p-3 xl:p-4 3xl:p-8 scale-50 sm:scale-60 md:scale-95 lg:scale-110 xl:scale-125 3xl:scale-150`}> <AnimationToggle value={animation} change={setAnimation} dark={darkMode}/> </div>
                        </div>
                    </div>
                    <div className='min-h-full p-0 lg:p-6 w-2/3 scale-50 sm:scale-60 md:scale-95 lg:scale-110 xl:scale-125 3xl:scale-150 xl:p-8'>
                    <div className='relative -translate-x-1/2 left-1/2 flex flex-row w-fit my-2 xl:my-4'>
                        <div className='text-secondary w-16 text-left'> Extreme: </div> 
                        <div className='w-28'><ReadOnlyStars value={3}/></div>
                    </div>
                    <div className='relative -translate-x-1/2 left-1/2 text-secondary w-fit text-sm'> Completely unecessary, but I wanna see it anyways! </div>
                    <div className='relative -translate-x-1/2 left-1/2 w-fit flex flex-row my-2 xl:my-4 h-10'>
                        <div className='relative mt-4 -translate-y-1/2 text-secondary text-lg w-16 text-left h-fit'> Normal: </div> 
                        <div className='w-28'><ReadOnlyStars value={2}/></div>
                    </div>
                    <div className='relative -translate-x-1/2 left-1/2 text-secondary w-fit text-sm'> Dynamic stuff will enhance my experience. </div>
                    <div className='relative -translate-x-1/2 left-1/2 w-fit flex flex-row my-2 xl:my-4'>
                        <div className='text-secondary text-left w-16'> Minimal: </div> 
                        <div className='w-28'><ReadOnlyStars value={1}/></div>
                    </div>
                    <div className='relative -translate-x-1/2 left-1/2 w-fit text-secondary'> No thanks, I just want to browse the website. </div>
                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default Settings;
