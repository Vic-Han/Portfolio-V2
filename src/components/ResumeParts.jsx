// ResumeParts.jsx 
import React from "react";
/**
 * @component ResumeParts
 * @description
 * A collection of sub-components for rendering resume sections
 * 
 * @exports
 * - experienceItem: 
 *   @param {Object} experience - Experience data object
 *   @param {number} index - Item index for key prop
 *   @returns {JSX.Element} - Formatted experience entry
 * 
 * - educationItem:
 *   @param {Object} qualification - Education data object
 *   @param {number} index - Item index for key prop
 *   @returns {JSX.Element} - Formatted education entry
 * 
 * - skillsItem:
 *   @param {string} category - Skill category name
 *   @param {number} index - Category index
 *   @param {Array} itemList - List of skills per category
 *   @param {boolean} darkMode - Theme mode
 *   @param {Array} boxAnimationStates - Animation states for boxes
 *   @param {Array} itemAnimationStates - Animation states for items
 *   @returns {JSX.Element} - Skill category card with items
 * 
 * @styling
 * - Uses Tailwind CSS for responsive design
 * - Custom classes for dark/light mode cards
 * - Dynamic skill item rendering with animation classes
 */

const experienceItem = (experience, index) => (
    <div key={index} className="mb-4">
      <div className="flex flex-row mb-2">
        <div className="w-1/2">
          <p className="text-sm sm:text-base md:text-xl 2xl:text-2xl 3xl:text-3xl text-primary">
            {experience.title}
          </p>
          <p className="text-xs sm:text-sm md:text-lg 2xl:text-xl 3xl:text-2xl text-secondary">
            {experience.company}
          </p>
        </div>
        <p className="text-xs sm:text-sm md:text-lg 2xl:text-xl 3xl:text-2xl text-secondary w-1/2 text-right">
          {experience.timeline}
        </p>
      </div>
      <ul>
        {experience.accomplishments.map((accomplishment, accomplishmentIndex) => (
          <li key={accomplishmentIndex} className="text-2xs md:text-base text-secondary">
            • {accomplishment}
          </li>
        ))}
      </ul>
    </div>
  );
  
   const educationItem = (qualification, index) => (
    <div key={index} className="mb-4 flex flex-row">
      <div className="w-2/3">
        <p className="text-sm sm:text-base md:text-xl 2xl:text-2xl 3xl:text-3xl text-primary">
          {qualification.qualification}
        </p>
        <p className="text-xs sm:text-sm md:text-lg 2xl:text-xl 3xl:text-2xl text-secondary">
          {qualification.provider}
        </p>
      </div>
      <p className="text-xs sm:text-sm md:text-lg 2xl:text-xl 3xl:text-2xl text-secondary w-1/3 text-right">
        {qualification.date}
      </p>
    </div>
  );
  
   const skillsItem = (category, index, itemList, darkMode, boxAnimationStates, itemAnimationStates) => (
    <div key={index} className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8">
      <div className={`
        relative left-1/2 -translate-x-1/2
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
  );

export {experienceItem, educationItem, skillsItem}