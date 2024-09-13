import React, { useState, useEffect } from 'react';
import DarkThemeSwitch from '../components/DarkThemeSwitch';
import AnimationToggle from '../components/AnimationToggle';

import ReadOnlyStars from '../components/ReadOnlyStars';
import { useContext } from 'react';
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
    

    return(
        <div className={`${darkMode ? 'bg-dark' : 'bg-light'} p-10 box-border w-screen h-screen fixed top-0 left-0 z-30`}>
          
            <div className={`relative -translate-x-1/2 left-1/2 ${darkMode ? 'card-dark' : 'card-light'} rounded-xl my-10 p-6 w-2/3 text-center ${boxAnimationStates[0]}`}>
            <div className='flex flex-row relative left-1/2 -translate-x-1/2 w-2/3 my-10'>
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
                <div className='text-3xl mb-10'>Animation Level:</div>
                <div> {animation}</div>
                <div className={`relative -translate-x-1/2 left-1/2 w-fit p-5 ${darkMode ? 'bg-white' : 'bg-gray-50'}`}> <AnimationToggle value={animation} change={setAnimation}/> </div>
                <div className='flex flex-row'>
                    <div> Extreme: </div> 
                    <ReadOnlyStars value={4}/>
                </div>
                <div> Completely unecessary </div>
                <div className='flex flex-row'>
                    <div> Normal: </div> 
                    <ReadOnlyStars value={3}/>
                </div>
                <div> Flashy </div>
                <div className='flex flex-row'>
                    <div> Low: </div> 
                    <ReadOnlyStars value={2}/>
                </div>
                <div> Recommended </div>
                <div className='flex flex-row'>
                    <div> None: </div> 
                    <ReadOnlyStars value={1}/>
                </div>
                <div> No animations </div>
                
            </div>
            

        </div>
    )
}

export default Settings;
