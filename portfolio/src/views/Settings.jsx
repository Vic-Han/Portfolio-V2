import React, { useState, useEffect } from 'react';
import DarkThemeSwitch from '../components/DarkThemeSwitch';
import AnimationToggle from '../components/AnimationToggle';
import CoolButton from '../components/CoolButton';

import ReadOnlyStars from '../components/ReadOnlyStars';
import { useContext } from 'react';
import {SettingsContext} from '../context/SettingsContext';

function Settings({close, setSlideTransition, setCircleTransition}) {
    const settingsStates = useContext(SettingsContext);
    const {darkMode, setDarkMode, animation, setAnimation} = settingsStates;
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
    const animateContentBoxes = () => {
        
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
            setSlideTransition(true);

            setTimeout(() => {
                setDarkMode(value);
                hideContentBoxes();
            },500);
            setTimeout(() => {
                setSlideTransition(false);
                animateContentBoxes();
            }, 1000);
            
        }
        else if(animation === 'Normal'){
            setCircleTransition(true);
            setTimeout(() => {
                setCircleTransition(false);
            }, 2000);
            setTimeout(() => {
                setDarkMode(value);
            }, 850);
        }
        else{
            setDarkMode(value);
        }
    }
    useEffect(() => {

    },[])
    

    return(
        <div className={`${darkMode ? 'bg-dark' : 'bg-light'} p-10 box-border w-screen h-screen fixed top-0 left-0 z-30`}>
            <div className={`relative -translate-x-1/2 left-1/2 ${darkMode ? 'card-dark' : 'card-light'} w-2/3 rounded-xl m-10 p-6 ${boxAnimationStates[0]}` }>
                <div className={`${darkMode ? 'text-blue-200' : 'text-white'} text-3xl`}>Dark Theme?</div>
                <DarkThemeSwitch value={darkMode} change={changeDarkMode}/>
            </div>
            <div className={`relative -translate-x-1/2 left-1/2 ${darkMode ? 'card-dark' : 'card-light'} text-white rounded-xl m-10 p-6 w-2/3 text-center ${boxAnimationStates[1]}`}>
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
            <div className={`relative -translate-x-1/2 left-1/2  ${darkMode ? 'card-dark' : 'card-light'} rounded-xl m-10 p-6 w-2/3 text-center ${boxAnimationStates[2]}`}>
                <CoolButton darkMode={darkMode} click={close}/>
            </div>

        </div>
    )
}

export default Settings;

