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
    const animateContentBoxesExtreme = animateContentBoxes('slam', 300);
    const changeDarkMode = (value) => { 
        if(animation === 'Extreme'){
            toggleSlideTransition()
            setTimeout(() => {
                setDarkMode(value)
                hideContentBoxes()
            },500);
            setTimeout(() => {
                animateContentBoxesExtreme(boxAnimationStates, setBoxAnimationStates);
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
        <div className={`${darkMode ? 'bg-dark' : 'bg-light'} p-10 box-border w-screen h-screen fixed top-0 left-0 z-30`}>
          
            <div className={`relative -translate-x-1/2 left-1/2 ${darkMode ? 'card-dark' : 'card-light'} rounded-xl my-10 p-6 w-2/3 text-center ${boxAnimationStates[0]}`}>
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
                            <div className={`text-3xl text-primary w-fit`}>Dark Theme?</div>
                            <DarkThemeSwitch value={darkMode} change={changeDarkMode}/>
                        </div>
                        

                    </div>
                    <div className='w-1/2 p-6'>
                        <div className='relative left-full -translate-x-full w-fit'>
                            <button onClick={close} className='close-button'> Close </button>
                        </div>
                    </div> 
                </div>
                <div className="flex flex-row">
                    <div className='min-h-full w-1/3'>
                        <div className='relative left-0 w-fit top-1/2 -translate-y-1/2 border border-red-600'>
                            <div className='text-3xl mb-10 text-primary'>Animation Level:</div>
                            <div className="text-secondary"> {animation}</div>
                            <div className={`relative -translate-x-1/2 left-1/2 w-fit p-5 `}> <AnimationToggle value={animation} change={setAnimation} dark={darkMode}/> </div>
                        </div>
                    </div>
                    <div className='min-h-full p-6 w-2/3 scale-110'>
                    <div className='relative -translate-x-1/2 left-1/2 flex flex-row w-fit my-4'>
                        <div className='text-secondary w-16 text-left'> Extreme: </div> 
                        <div className='w-28'><ReadOnlyStars value={3}/></div>
                    </div>
                    <div className='relative -translate-x-1/2 left-1/2 text-secondary w-fit'> Flashy </div>
                    <div className='relative -translate-x-1/2 left-1/2 w-fit flex flex-row my-4'>
                        <div className='text-secondary w-16 text-left'> Normal: </div> 
                        <div className='w-28'><ReadOnlyStars value={2}/></div>
                    </div>
                    <div className='relative -translate-x-1/2 left-1/2 text-secondary w-fit'> Recommended </div>
                    <div className='relative -translate-x-1/2 left-1/2 w-fit flex flex-row my-4'>
                        <div className='text-secondary text-left w-16'> Minimal: </div> 
                        <div className='w-28'><ReadOnlyStars value={1}/></div>
                    </div>
                    <div className='relative -translate-x-1/2 left-1/2 w-fit text-secondary'> No animations </div>
                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default Settings;
