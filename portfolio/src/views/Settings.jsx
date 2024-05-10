import React, { useState, useEffect } from 'react';
import DarkThemeSwitch from '../components/DarkThemeSwitch';
import AnimationToggle from '../components/AnimationToggle';

import ReadOnlyStars from '../components/ReadOnlyStars';
import { useContext } from 'react';
import {GlobalContext} from '../context/GlobalContext';

function Settings({close}) {
    const settingsStates = useContext(GlobalContext);
    const {darkMode, setDarkMode, animation, setAnimation, toggleSlideTransition, toggleCircleTransition} = settingsStates;
    const [boxAnimationStates, setBoxAnimationStates] = useState(['', '', '']);

    const changeBoxAnimationStates = (index, value) => {
        setBoxAnimationStates(prevState => {
            const newAnimationStates = [...prevState];
            newAnimationStates[index] = value;
            return newAnimationStates;
        });
    }
    const hideContentBoxes = () => {    
        const newAnimationStates = boxAnimationStates.map(() => 'hidden');
        setBoxAnimationStates(newAnimationStates);
    }
    const animateContentBoxesLow = () => {
        for (let i = 0; i <3; i++) {
            setTimeout(() => {
                changeBoxAnimationStates(i, 'fade-in'); // Adjust animation class if needed
                setTimeout(() => {
                    changeBoxAnimationStates(i, '');
                }, 1200); // Adjust animation duration if needed
            }, i * 200); // Stagger animations by 200ms
        }
    };

    const animateContentBoxesNormal = () => {
        for (let i = 0; i <3; i++) {
            setTimeout(() => {
                changeBoxAnimationStates(i, 'scale-in'); 
                setTimeout(() => {
                    changeBoxAnimationStates(i, ''); 
                }, 52000); 
            }, i * 250); 
        }
    };

    const animateContentBoxesExtreme = () => {
        
        for (let i = 0; i <3; i++) {
          setTimeout(() => {
            changeBoxAnimationStates(i, 'slam');
            setTimeout(() => {
              changeBoxAnimationStates(i, '');
            }, 200);
          }, i * 300); // Stagger animations by 200ms
        }
    };
    const changeDarkMode = (value) => { 
        if(animation === 'Extreme'){
            toggleSlideTransition()
            setTimeout(() => {
                setDarkMode(value)
                hideContentBoxes()
            },500);
            setTimeout(() => {
                animateContentBoxesExtreme()
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
        hideContentBoxes()
        if(animation === 'Low'){
            animateContentBoxesLow();
        }
        else if(animation === 'Normal'){
            animateContentBoxesNormal()
        }
        else if(animation === 'Extreme'){
            animateContentBoxesExtreme()
        }
    },[])
    

    return(
        <div className={`${darkMode ? 'bg-dark' : 'bg-light'} p-10 box-border w-screen h-screen fixed top-0 left-0 z-30`}>
            <div className='flex flex-row relative left-1/2 -translate-x-1/2 w-2/3 my-10'>
                <div className='w-1/2'> 
                <div className={`relative left-1/2 -translate-x-1/2 w-2/3 ${darkMode ? 'card-dark' : 'card-light'} rounded-xl p-6 ${boxAnimationStates[0]}` }>
                    <div className={`text-3xl`}>Dark Theme?</div>
                    <DarkThemeSwitch value={darkMode} change={changeDarkMode}/>
                </div> 
                </div>
                <div className='w-1/2'>
                <div className={`relative left-1/2 -translate-x-1/2 w-2/3 ${darkMode ? 'card-dark' : 'card-light'} rounded-xl p-6 text-center ${boxAnimationStates[2]}`}>
                    <button onClick={close} className={`${darkMode ? 'btn-primary-dark' : 'btn-primary-light'}`}> Close </button>
                </div>
                </div>
                
                
            </div>
            <div className={`relative -translate-x-1/2 left-1/2 ${darkMode ? 'card-dark' : 'card-light'} rounded-xl my-10 p-6 w-2/3 text-center ${boxAnimationStates[1]}`}>
                <div className='text-3xl mb-10'>Animation Level:</div>
                <div> {animation}</div>
                <div className={`relative -translate-x-1/2 left-1/2 w-fit p-5 ${darkMode ? 'bg-white' : 'bg-gray-50'}`}> <AnimationToggle value={animation} change={setAnimation}/> </div>
                <div className='flex flex-row'>
                    <div> Extreme: </div> 
                    <ReadOnlyStars value={3}/>
                </div>
                <div> Unecessary, I know </div>
                <div className='flex flex-row'>
                    <div> Normal: </div> 
                    <ReadOnlyStars value={2}/>
                </div>
                <div> Just right </div>
                <div className='flex flex-row'>
                    <div> Low: </div> 
                    <ReadOnlyStars value={1}/>
                </div>
                <div> I'm a boomer </div>
                
            </div>
            

        </div>
    )
}

export default Settings;
