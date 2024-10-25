import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { animateContentBoxes } from '../transitions/AnimationHelper';
import resumeData from "../data/Resume";
import '../styles/resume.css';

function Resume() {
  const { darkMode, animation } = useContext(GlobalContext);
  const { skills, workExperience, education } = resumeData;
  const categories = Object.keys(skills);
  const itemList = categories.map(category => skills[category]);

  const createInitialAnimationState = (count, nested = false) => 
    nested ? categories.map(category => itemList[categories.indexOf(category)].map(() => ""))
      : [...Array(count)].map(() => "");

  const [boxAnimationStates, setBoxAnimationStates] = useState(createInitialAnimationState(categories.length + 1));
  const [itemAnimationStates, setItemAnimationStates] = useState(createInitialAnimationState(0, true));
  const [mainCardAnimationStates, setMainCardAnimationStates] = useState(createInitialAnimationState(3));

  const hideStates = (setState, hideValue = 'opacity-0') => {
    setState(current => 
      Array.isArray(current[0]) ? current.map(category => category.map(() => hideValue))
        : current.map(() => hideValue));
  };

  const animateContentBoxesLow = animateContentBoxes('fade-in', 200);
  const animateContentBoxesNormal = animateContentBoxes('smooth-reveal', 250);

  const animateItems = (index) => {
    if (index === 0) {
      mainCardAnimationStates.forEach((_, i) => {
        setTimeout(() => {
          setMainCardAnimationStates(prev => {
            const updated = [...prev];
            updated[i] = 'width-shrink';
            return updated;
          });
        }, i * 300);
      });
    } else {
      itemList[index - 1].forEach((_, i) => {
        setTimeout(() => {
          setItemAnimationStates(prev => {
            const updated = [...prev];
            updated[index - 1][i] = 'fade-in-top';
            return updated;
          });
          
          setTimeout(() => {
            setItemAnimationStates(prev => {
              const updated = [...prev];
              updated[index - 1][i] = '';
              return updated;
            });
          }, 800);
        }, i * 100);
      });
    }
  };

  useEffect(() => {
    if (animation !== "Minimal") {
      hideStates(setBoxAnimationStates);
      if (animation === 'Normal') {
        animateContentBoxesLow(boxAnimationStates, setBoxAnimationStates);
      } else if (animation === 'Extreme') {
        hideStates(setItemAnimationStates);
        hideStates(setMainCardAnimationStates);
        animateContentBoxesNormal(boxAnimationStates, setBoxAnimationStates, animateItems);
      }
    }
  }, []);

  const titleClasses = "text-sm sm:text-base md:text-2xl 2xl:text-3xl 3xl:text-4xl text-primary";
  const subtitleClasses = "text-xs sm:text-sm md:text-lg 2xl:text-xl 3xl:text-2xl text-secondary";
  const jobTitleClasses = "text-sm sm:text-base md:text-xl 2xl:text-2xl 3xl:text-3xl text-primary";
  const centeredClasses = "relative left-1/2 -translate-x-1/2";

  return (
    <div className="flex flex-wrap justify-center w-full">
      <div className="w-full md:w-11/12 lg:w-5/6 xl:w-3/4 2xl:w-2/3 px-4 mb-8">
        <div className={`
          ${centeredClasses} 
          py-1 px-2 sm:py-2 md:py-4 sm:px-6 md:px-10 
          flex flex-col w-full
          ${darkMode ? 'card-dark' : 'card-light'} 
          ${boxAnimationStates[0]}
        `}>
          <h2 className={`${titleClasses} mb-2 ${centeredClasses} text-center`}>
            Resume
          </h2>

          <div className='w-full mx-2'>
            <div className={`${centeredClasses} ${mainCardAnimationStates[0]}`}>
              <div className="flex flex-wrap justify-center mb-4">
                <a 
                  href="resume.pdf" 
                  download 
                  className={`download ${animation !== 'Minimal' ? 'animate-glow' : ''}`}
                >
                  Download
                </a>
              </div>
            </div>
          </div>

          <h2 className={`${titleClasses} font-bold mb-2 mt-4 text-center`}>
            Experience:
          </h2>
          <div className='mx-2'>
            <div className={`${centeredClasses} ${mainCardAnimationStates[1]}`}>
              {workExperience.map((experience, experienceIndex) => (
                <div key={experienceIndex} className="mb-4">
                  <div className="flex flex-row mb-2">
                    <div className="w-1/2">
                      <p className={jobTitleClasses}>{experience.title}</p>
                      <p className={subtitleClasses}>{experience.company}</p>
                    </div>
                    <p className={`${subtitleClasses} w-1/2 text-right`}>
                      {experience.timeline}
                    </p>
                  </div>
                  <ul>
                    {experience.accomplishments.map((accomplishment, accomplishmentIndex) => (
                      <li 
                        key={accomplishmentIndex} 
                        className="text-2xs md:text-base text-secondary"
                      > 
                        • {accomplishment}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <h2 className={`${titleClasses} mb-2 text-center`}> 
            Education and Certificates: 
          </h2>
          <div className='mx-2'>
            <div className={`${centeredClasses} ${mainCardAnimationStates[2]}`}>
              {education.map((qualification, qualificationIndex) => (
                <div key={qualificationIndex} className="mb-4 flex flex-row" >
                  <div className="w-2/3">
                    <p className={jobTitleClasses}>{qualification.qualification}</p>
                    <p className={subtitleClasses}>{qualification.provider}</p>
                  </div>
                  <p className={`${subtitleClasses} w-1/3 text-right`}>
                    {qualification.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-row flex-wrap justify-center px-4 sm:px-10 md:px-0 2xl:px-3 3xl:px-6 4xl:px-10">
        {categories.map((category, index) => (
          <div key={index} className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8">
            <div className={`
              ${centeredClasses} 
              p-4 2xl:p-6 
              ${darkMode ? 'card-dark' : 'card-light'}
              ${boxAnimationStates[index + 1]} 
              flex-grow min-h-full
            `}>
              <h2 className="text-base sm:text-lg md:text-xl 2xl:text-2xl 3xl:text-3xl font-bold mb-2 text-primary">
                {category}
              </h2>
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

