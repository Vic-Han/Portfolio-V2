import React, { useState,useRef } from 'react';
import './TextToggler.css';


function TextToggler({darkMode, animation}) {
  const textArray = ["Text Option 1", "Text Option 2", "Text Option 3"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const textRef = useRef(null); // Reference to the <p> element

  const handleTransition = (direction) => {
    if (!textRef.current) return; // Safety check

    const textElement = textRef.current;
    
    switch (animation) {
        case 'Low':
          handleLowAnimation(textElement, direction); 
          break;
        case 'Normal':
          handleNormalAnimation(textElement, direction);  
          break;
        case 'Extreme':
          handleExtremeAnimation(textElement, direction);  
          break;
        default: 
          console.warn('Unsupported animation level:', animation); 
          handleLowAnimation(textElement, direction); // Fallback to low
      }
    };
  
    const handleLowAnimation = (textElement, direction) => {
        if (direction === 'next') {
            textElement.classList.add('slideOutLeft');  // Start slide-out 
            setTimeout(() => {
              // Change text content (after slide-out is mostly done)
              setCurrentTextIndex((prevIndex) => Math.min(prevIndex + 1, textArray.length - 1));
              textElement.classList.remove('slideOutLeft'); // Reset
              textElement.classList.add('slideInRight');  // Slide in new text
              setTimeout(() => {
                  textElement.classList.remove('slideInRight'); // Reset
              }, 500); // Adjust timeout as needed
            }, 500); // Adjust timeout as needed
          } else if (direction === 'prev') {
            // Similar logic for previous (reverse the order of class changes)
            textElement.classList.add('slideOutLeft');
            setTimeout(() => {
              setCurrentTextIndex((prevIndex) => Math.max(prevIndex - 1, 0));
              textElement.classList.remove('slideOutLeft'); 
              textElement.classList.add('slideInRight');  
            }, 500); 
          }
    };
  
    const handleNormalAnimation = (textElement, direction) => {
        if (direction === 'next') {
          textElement.classList.add('slide-normal'); 
          setTimeout(() => {
            setCurrentTextIndex((prevIndex) => Math.min(prevIndex + 1, textArray.length - 1));
            textElement.classList.remove('slide-normal'); 
          }, 800);  // Adjust timeout as needed
        } else { 
          // Similar logic with reversed direction for 'prev'
          textElement.classList.add('slide-normal'); // Add the class for animation
        }
      };
  
    const handleExtremeAnimation = (textElement, direction) => {
      // Implement your 'Extreme' animation logic here
    };
  

  return (
    <div className='overflow-x-hidden w-128'>
        <p className='relative w-full left-1/2 -translate-x-1/2 text-center' ref={textRef}>{textArray[currentTextIndex]}</p> 
        {currentTextIndex > 0 && <button className={darkMode ? 'btn-primary-dark' : 'btn-primary-light'} onClick={() => handleTransition('prev')}>Previous</button>} 
        {currentTextIndex < textArray.length - 1 && <button className={darkMode ? 'btn-primary-dark' : 'btn-primary-light'} onClick={() => handleTransition('next')}>Next</button>}
        <div className='something'>
            Hello Whats up
        </div>
    </div>
  );
}

export default TextToggler;