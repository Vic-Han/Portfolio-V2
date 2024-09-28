



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
  const [categoryList, setCategoryList] = useState(categories);
  const [itemList, setItemList] = useState(
    categories.map(category => skills[category])
  );
  const [boxAnimationStates, setBoxAnimationStates] = useState(
    [...categories.map(() => ""), ""]
  );
  const [itemAnimationStates, setItemAnimationStates] = useState(
    categories.map(category => skills[category].map(() => "animate-glow"))
  );
  const [mainCardAnimationStates, setMainCardAnimationStates] = useState(["", "", ""]);

  // Hide all content boxes
  const hideContentBoxes = () => {    
    const newAnimationStates = boxAnimationStates.map(() => 'opacity-0');
    setBoxAnimationStates(newAnimationStates);
    const newItemAnimationStates = itemAnimationStates.map(category => category.map(() => 'opacity-0'));
    setItemAnimationStates(newItemAnimationStates);
    const newMainCardAnimationStates = mainCardAnimationStates.map(() => 'opacity-0');
    setMainCardAnimationStates(newMainCardAnimationStates);
  }

  // Define animation functions with different animation classes and durations
  const animateContentBoxesLow = animateContentBoxes('fade-in', 200);
  const animateContentBoxesNormal = animateContentBoxes('slide-in', 250);

  // Animate items in a category
  const animateItems = (index) => {
    if (index === 0) {
      const mainCardLength = mainCardAnimationStates.length;
      for (let i = 0; i < mainCardLength; i++) {
        setTimeout(() => {
          setMainCardAnimationStates((prevMainCardAnimationStates) => {
            const newMainCardAnimationStates = [...prevMainCardAnimationStates];
            newMainCardAnimationStates[i] = `fade-in-right`;
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
              newItemAnimationStates[index - 1][i] = 'animate-glow';
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
        animateContentBoxesLow(boxAnimationStates, setBoxAnimationStates, animateItems);
      } else if (animation === 'Extreme') {
        animateContentBoxesNormal(boxAnimationStates, setBoxAnimationStates, animateItems);
      }
    }
    
  }, []);

  return (
    <div className="flex flex-wrap justify-center w-full">
      <div key={0} className="w-full md:w-3/4 lg:w-2/3 px-4 mb-8">
        <div
          className={`
            relative left-1/2 -translate-x-1/2 py-4 px-10 
            ${darkMode ? 'card-dark' : 'card-light'} 
            ${boxAnimationStates[0]}
          `}
        >
          <h2 className="text-xl text-primary mb-2">Resume</h2>
          <div className = 'w-fit mx-2'>
            <div className={`relative left-1/2 -translate-x-1/2 ${mainCardAnimationStates[0]}`}>
              <div className="flex flex-wrap justify-center mb-4">
                <p className="text-lg">Download my resume:</p>
                <a
                  href="resume.pdf"
                  download
                  className="ml-2 md:ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
          <h2 className="text-xl font-bold mb-2">Experience:</h2>
          <div className = 'w-fit mx-2'>
            <div className={`relative left-1/2 -translate-x-1/2 ${mainCardAnimationStates[1]}`}>
              {workExperience.map((experience, experienceIndex) => (
                <div key={experienceIndex} className="mb-4">
                  <h3 className="text-lg font-bold">{experience.title}</h3>
                  <p className="text-lg">{experience.company}</p>
                  <p className="text-lg">{experience.timeline}</p>
                  <ul>
                    {experience.accomplishments.map((accomplishment, accomplishmentIndex) => (
                      <li key={accomplishmentIndex}>{accomplishment}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <h2 className="text-xl font-bold mb-2"> Education and Certificates: </h2>
          <div className = 'w-fit mx-2'>
            <div className={`relative left-1/2 -translate-x-1/2 ${mainCardAnimationStates[2]}`}>
              {education.map((qualification, qualificationIndex) => (
                <div key={qualificationIndex} className="mb-4">
                  <h3 className="text-lg font-bold">{qualification.qualification}</h3>
                  <p className="text-lg">{qualification.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-center">
        {categoryList.map((category, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div
              className={`
                relative left-1/2 -translate-x-1/2 p-4 
                ${darkMode ? 'card-dark' : 'card-light'} 
                ${boxAnimationStates[index + 1]} flex-grow min-h-full
              `}
            >
              <h2 className="text-xl font-bold mb-2 text-primary">{category}</h2>
              <div className="flex flex-wrap"> 
                {itemList[index].map((item, itemIndex) => (
                  <div key={itemIndex} className="w-fit mx-1">
                    <div
                      className={`
                        skill
                        ${itemAnimationStates[index][itemIndex]} 
                      
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
    </div>
  );
}

export default Resume;