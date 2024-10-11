



import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { animateContentBoxes } from '../transitions/AnimationHelper';
import resumeData from "../data/Resume";
import '../styles/resume.css';

function Resume() {
  // Get the global context states
  const settingsStates = useContext(GlobalContext);
  const { darkMode, animation } = settingsStates;
  const { skills, workExperience, education } = resumeData;
  // Initialize state variables for category list, item list, box animation states, and item animation states
  const categories = Object.keys(skills);
  const itemList = categories.map(category => skills[category])
  
  const [boxAnimationStates, setBoxAnimationStates] = useState(
    [...categories.map(() => ""), ""]
  );
  const [itemAnimationStates, setItemAnimationStates] = useState(
    categories.map(category => skills[category].map(() => ""))
  );
  const [mainCardAnimationStates, setMainCardAnimationStates] = useState(["", "", ""]);

  // Hide all content boxes
  const hideContentBoxes = () => {    
    const newAnimationStates = boxAnimationStates.map(() => 'opacity-0');
    setBoxAnimationStates(newAnimationStates);
    
  }
  const hideInnerContent = () => {
    const newItemAnimationStates = itemAnimationStates.map(category => category.map(() => 'opacity-0'));
    setItemAnimationStates(newItemAnimationStates);
    const newMainCardAnimationStates = mainCardAnimationStates.map(() => 'opacity-0');
    setMainCardAnimationStates(newMainCardAnimationStates);
  }
  // Define animation functions with different animation classes and durations
  const animateContentBoxesLow = animateContentBoxes('fade-in', 200);
  const animateContentBoxesNormal = animateContentBoxes('scale-in', 250);


  // Animate items in a category
  const animateItems = (index) => {
    if (index === 0) {
      const mainCardLength = mainCardAnimationStates.length;
      for (let i = 0; i < mainCardLength; i++) {
        setTimeout(() => {
          setMainCardAnimationStates((prevMainCardAnimationStates) => {
            const newMainCardAnimationStates = [...prevMainCardAnimationStates];
            newMainCardAnimationStates[i] = `width-shrink`;
            return newMainCardAnimationStates;
          });
        }, i * 300);
      }
    } else {
      const itemLength = itemAnimationStates[index - 1].length;
      for (let i = 0; i < itemLength; i++) {
        setTimeout(() => {
          setItemAnimationStates((prevItemAnimationStates) => {
            const newItemAnimationStates = [...prevItemAnimationStates];
            newItemAnimationStates[index - 1][i] = 'fade-in-top';
            return newItemAnimationStates;
          });
          setTimeout(() => {
            setItemAnimationStates((prevItemAnimationStates) => {
              const newItemAnimationStates = [...prevItemAnimationStates];
              newItemAnimationStates[index - 1][i] = '';
              return newItemAnimationStates;
            });
          }, 800); 
        }, i * 100); 
      }
    }
  }

  useEffect(() => {
    if(animation !== "Minimal"){
      hideContentBoxes();
      if (animation === 'Normal') {
        animateContentBoxesLow(boxAnimationStates, setBoxAnimationStates);
      } else if (animation === 'Extreme') {
        hideInnerContent();
        animateContentBoxesNormal(boxAnimationStates, setBoxAnimationStates, animateItems);
      }
    }
    
  }, []);
  const resumePrimarySize = ''
  return (
    <div className="flex flex-wrap justify-center w-full">
      <div key={0} className="w-full md:w-11/12 lg:w-5/6 xl:w-3/4 2xl:w-2/3 px-4 mb-8">
        <div className={`relative left-1/2 -translate-x-1/2 py-1 px-2 sm:py-2 md:py-4 sm:px-6 md:px-10 flex flex-col w-full
            ${darkMode ? 'card-dark' : 'card-light'} ${boxAnimationStates[0]}`}>
          <h2 className="text-sm sm:text-base md:text-2xl 3xl:text-3xl text-primary mb-2 relative left-1/2 -translate-x-1/2 text-center">Resume</h2>
          <div className = 'w-full mx-2'>
            <div className={`relative left-1/2 -translate-x-1/2 ${mainCardAnimationStates[0]}`}>
              <div className="flex flex-wrap justify-center mb-4">
                <a href="resume.pdf" download className={`download ${animation !== 'Minimal' ? 'animate-glow' : ''}`}>
                  Download
                </a>
              </div>
            </div>
          </div>
          <h2 className="text-sm sm:text-base md:text-2xl 3xl:text-3xl font-bold text-primary mb-2 mt-4 text-center">Experience:</h2>
          <div className = 'mx-2'>
            <div className={`relative left-1/2 -translate-x-1/2 ${mainCardAnimationStates[1]}`}>
              {workExperience.map((experience, experienceIndex) => (
                <div key={experienceIndex} className="mb-4">
                  <div className="flex flex-row mb-2">
                    <div className="w-1/2">
                      <p className="text-sm sm:text-base md:text-xl 3xl:text-2xl text-primary">{experience.title}</p>
                      <p className="text-xs sm:text-sm md:text-lg 3xl:text-xl text-secondary">{experience.company}</p>
                    </div>
                    <p className="text-xs sm:text-sm md:text-lg 3xl:text-xl text-secondary w-1/2 text-right">{experience.timeline}</p>
                  </div>
                  <ul>
                    {experience.accomplishments.map((accomplishment, accomplishmentIndex) => (
                      <li key={accomplishmentIndex} className="text-2xs md:text-base text-secondary"> • {accomplishment}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <h2 className="text-sm sm:text-base md:text-2xl 3xl:text-3xl text-primary mb-2 text-center"> Education and Certificates: </h2>
          <div className = 'mx-2'>
            <div className={`relative left-1/2 -translate-x-1/2 ${mainCardAnimationStates[2]}`}>
              {education.map((qualification, qualificationIndex) => (
                <div key={qualificationIndex} className="mb-4 flex flex-row" >
                  <div className="w-2/3">
                    <p className="text-sm sm:text-base md:text-xl 3xl:text-2xl text-primary">{qualification.qualification}</p>
                    <p className="text-xs sm:text-sm md:text-lg 3xl:text-xl text-secondary">{qualification.provider}</p>
                  </div>
                  <p className="text-xs sm:text-sm md:text-lg 3xl:text-xl text-secondary w-1/3 text-right">{qualification.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row flex-wrap justify-center px-4 sm:px-10 md:px-0 2xl:px-3 3xl:px-6 4xl:px-10">
        {categories.map((category, index) => (
          <div key={index} className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8">
            <div className={`relative left-1/2 -translate-x-1/2 p-4 2xl:p-6 ${darkMode ? 'card-dark' : 'card-light'} 
            ${boxAnimationStates[index + 1]} flex-grow min-h-full`}>
              <h2 className="text-base sm:text-lg md:text-xl 2xl:text-2xl 3xl:text-3xl font-bold mb-2 text-primary">{category}</h2>
              <div className="flex flex-wrap"> 
                {itemList[index].map((item, itemIndex) => (
                  <div key={itemIndex} className="w-fit mx-1">
                    <div className={`skill ${itemAnimationStates[index][itemIndex]}`}>
                      <p>{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resume;