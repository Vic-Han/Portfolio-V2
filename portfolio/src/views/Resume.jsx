/**
 * Resume component that displays a list of categories and their corresponding items
 * in a visually appealing and animated way.
 */
import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { animateContentBoxes } from '../transitions/AnimationHelper';

/**
 * Define the Resume component
 */
function Resume() {
  // Get the global context states
  const settingsStates = useContext(GlobalContext);
  const { darkMode, animation } = settingsStates;

  // Define the categories and items to be displayed
  const refactoredItems = {
    "Front end": ["React", "Vue", "Angular"],
    "Back end": ["Node", "Express", "Django"],
    "Database": ["MongoDB", "PostgreSQL", "MySQL"],
    "Languages": ["JavaScript", "Python", "Java"],
    "Tools": ["Git", "Docker", "Jenkins"],
    "Cloud": ["AWS", "Azure", "Google Cloud"],
  };

  // Initialize state variables for category list, item list, box animation states, and item animation states
  const categories = Object.keys(refactoredItems);
  const [categoryList, setCategoryList] = useState(categories);
  const [itemList, setItemList] = useState(
    categories.map(category => refactoredItems[category])
  );
  const [boxAnimationStates, setBoxAnimationStates] = useState(
    categories.map(() => "")
  );
  const [itemAnimationStates, setItemAnimationStates] = useState(
    categories.map(category => refactoredItems[category].map(() => ""))
  );

  /**
   * Hide all content boxes
   */
  const hideContentBoxes = () => {    
    const newAnimationStates = boxAnimationStates.map(() => 'hidden');
    setBoxAnimationStates(newAnimationStates);
    const newItemAnimationStates = itemAnimationStates.map(category => category.map(() => 'hidden'));
    setItemAnimationStates(newItemAnimationStates);
  }

  /**
   * Define animation functions with different animation classes and durations
   */
  const animateContentBoxesLow = animateContentBoxes('fade-in', 200);
  const animateContentBoxesNormal = animateContentBoxes('slide-in', 250);
  const animateContentBoxesExtreme = animateContentBoxes('bounce-in', 300);

  /**
   * Animate items in a category
   * @param {number} index - The index of the category
   */
  const animateItems = (index) => {
    const itemLength = itemAnimationStates[index].length;
    for (let i = 0; i < itemLength; i++) {
      setTimeout(() => {
        setItemAnimationStates((prevItemAnimationStates) => {
          const newItemAnimationStates = [...prevItemAnimationStates];
          newItemAnimationStates[index][i] = 'fade-in-top';
          return newItemAnimationStates;
        });
        setTimeout(() => {
          setItemAnimationStates((prevItemAnimationStates) => {
            const newItemAnimationStates = [...prevItemAnimationStates];
            newItemAnimationStates[index][i] = 'animate-glow';
            return newItemAnimationStates;
          });
        }, 800); 
      }, i * 100); 
    }
  }

  /**
   * Run the animation functions when the component mounts
   */
  useEffect(() => {
    hideContentBoxes();
    if (animation === 'Low') {
      animateContentBoxesLow(boxAnimationStates, setBoxAnimationStates, animateItems);
    } else if (animation === 'Normal') {
      animateContentBoxesNormal(boxAnimationStates, setBoxAnimationStates, animateItems);
    } else if (animation === 'Extreme') {
      animateContentBoxesExtreme(boxAnimationStates, setBoxAnimationStates, animateItems);
    }

  }, []);

  /**
   * Render the Resume component
   */
  
  return (
    <div className="flex flex-wrap justify-center w-full">
      {categoryList.map((category, index) => (
        <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div
            className={`
              relative left-1/2 -translate-x-1/2 p-4 
              ${darkMode ? 'card-dark' : 'card-light'} 
              ${boxAnimationStates[index]}
            `}
          >
            <h2 className="text-xl font-bold mb-2">{category}</h2>
            <div className="flex flex-wrap justify-center"> 
              {itemList[index].map((item, itemIndex) => (
                <div key={itemIndex} className="w-fit mx-1">
                  <div
                    className={`
                      relative left-1/2 -translate-x-1/2 
                      inline-block 
                      px-2 py-1 mb-2 mx-1
                      ${itemAnimationStates[index][itemIndex]} 
                      bg-slate-500 
                      text-white 
                    `}
                  >
                    <p>{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
  
}

export default Resume;