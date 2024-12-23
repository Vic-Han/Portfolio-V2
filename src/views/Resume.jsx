// Resume.jsx
import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { animateContentBoxes } from '../transitions/AnimationHelper';
import { experienceItem, educationItem, skillsItem } from '../components/ResumeParts';
import resumeData from "../data/Resume";
import '../styles/resume.css';
/**
 * @component Resume
 * @description
 * A comprehensive resume display component showcasing work experience, education, 
 * and skills. Features animated reveals and responsive design for optimal viewing 
 * across different screen sizes.
 * 
 * @requires
 * - GlobalContext with properties:
 *   - darkMode: boolean
 *   - animation: 'Minimal' | 'Normal' | 'Extreme'
 * - resumeData: object containing skills, work experience, and education data
 * - animateContentBoxes from AnimationHelper
 * - Resume parts components (experienceItem, educationItem, skillsItem)
 * 
 * @animations
 * - Three animation modes:
 *   - Minimal: No animations
 *   - Normal: Fade-in effect (200ms delay)
 *   - Extreme: Smooth reveal with item-by-item animation
 * - Custom animation states for main sections and individual skill items
 * 
 * @state
 * - boxAnimationStates: string[] - Animation states for main content boxes
 * - itemAnimationStates: string[][] - Animation states for skill items (nested array)
 * - mainCardAnimationStates: string[] - Animation states for primary sections
 * 
 * @layout
 * - Responsive grid layout adapting to screen sizes:
 *   - Full width on mobile
 *   - Multi-column layout for skills on larger screens
 * - Separate sections for experience, education, and skills categories
 * 
 * @styling
 * - Tailwind CSS for responsive design
 * - Custom card styles for dark/light mode
 * - Animated download button with glow effect
 */

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

  
  return (
    <div className="flex flex-wrap justify-center w-full">
      <div className="w-full md:w-11/12 lg:w-5/6 xl:w-3/4 2xl:w-2/3 px-4 mb-8">
        <div className={`
          relative left-1/2 -translate-x-1/2
          py-1 px-2 sm:py-2 md:py-4 sm:px-6 md:px-10 
          flex flex-col w-full
          ${darkMode ? 'card-dark' : 'card-light'} 
          ${boxAnimationStates[0]}
        `}>
          <h2 className="text-sm sm:text-base md:text-2xl 2xl:text-3xl 3xl:text-4xl text-primary my-2 xl:my-3 py-2 text-center">
              Resume
          </h2>

          <div className='w-full mx-2'>
            <div className={`relative left-1/2 -translate-x-1/2 ${mainCardAnimationStates[0]}`}>
              <div className="flex flex-wrap justify-center">
                <a href="resume.pdf" download className={`download -my-2 ${animation !== 'Minimal' ? 'animate-glow' : ''}`}>
                  Download
                </a>
              </div>
            </div>
          </div>

          <h2 className="text-sm sm:text-base md:text-2xl 2xl:text-3xl 3xl:text-4xl text-primary my-2 xl:my-3 py-2 text-center border-b xl:border-b-2 border-green-400">
            Experience:
          </h2>
          <div className='mx-2'>
            <div className={`relative left-1/2 -translate-x-1/2 ${mainCardAnimationStates[1]}`}>
              {workExperience.map((experience, index) => 
                experienceItem(experience, index)
              )}
            </div>
          </div>

          <h2 className="text-sm sm:text-base md:text-2xl 2xl:text-3xl 3xl:text-4xl text-primary my-2 xl:my-3 py-2 text-center border-b xl:border-b-2 border-green-400">
             Education and Certificates:
          </h2>
          <div className='mx-2'>
            <div className={`relative left-1/2 -translate-x-1/2 ${mainCardAnimationStates[2]}`}>
              {education.map((qualification, index) => 
                educationItem(qualification, index)
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-row flex-wrap justify-center px-4 sm:px-10 md:px-0 2xl:px-3 3xl:px-6 4xl:px-10">
        {categories.map((category, index) => (
          skillsItem(category, index, itemList, darkMode, boxAnimationStates, itemAnimationStates)
        ))}
      </div>
    </div>
  );
}

export default Resume;