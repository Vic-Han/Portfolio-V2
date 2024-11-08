// ProjectCard.jsx
import React from 'react';
/**
 * @component ProjectCard
 * @description
 * A responsive project card component that displays project information
 * with hover effects and configurable styling.
 * 
 * @properties
 * @param {Object} project - The project data object
 * @param {string} project.name - The name of the project
 * @param {string} project.image - URL of the project image
 * @param {string} project.description - Short description of the project
 * @param {string} project.github - GitHub repository URL (optional)
 * @param {string} project.report - Project report URL (optional)
 * @param {string} project.link - Live site URL (optional)
 * @param {string} project.video - Project video URL (optional)
 * @param {string} project.buttonStyle - CSS classes for button styling
 * @param {string} project.titleTextStyle - CSS classes for title text styling
 * @param {string} project.descriptionTextStyle - CSS classes for description text styling
 * 
 * @layout
 * - Responsive card sizing
 * - Image background with overlay on hover
 * - Title always visible, description and links appear on hover
 * 
 * @styling
 * - Tailwind classes for responsive design
 * - Configurable text and button styles through props
 * - Hover effects for revealing additional information
 * 
 * @animations
 * - Scale up on hover
 * - Fade-in overlay on hover
 * - Slide-up animation for description and links on hover
 * 
 */


const ProjectCard = ({ project }) => {
  const link = (hyperlink, text) =>{
    return(
      <a href={hyperlink} target="_blank" rel="noreferrer" className={`text-sm px-2 py-1 md:px-4 md:py-2 md:text-base lg:text-lg 2xl:px-5 2xl:py-3 2xl:text-xl ${project.buttonStyle}`}>
      {text}
      </a>
    )
  }
  return (
    <div className="relative overflow-hidden transition duration-500 ease-in-out transform hover:scale-105 w-36 h-44 md:w-48 md:h-60 lg:w-64 lg:h-80 2xl:w-80 2xl:h-100 group rounded-lg">
      <img src={project.image} alt={project.name} className="absolute top-0 left-0 w-full h-full object-cover"/>
      <div className="absolute top-0 left-0 p-1 md:p-4 z-50">
          <h2 className={`text-base md:text-lg lg:text-xl 2xl:text-3xl z-50 ${project.titleTextStyle}`}>{project.name}</h2>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-65 transition-opacity duration-500 ease-in-out z-20"/>
      <div className="absolute bottom-0 left-0 w-full p-1 md:p-4 transition-transform duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0 z-30 text-xl">
          <p className={`text-xs md:text-sm lg:text-base 2xl:text-lg ${project.descriptionTextStyle}`}>{project.description}</p>
          <div className="flex space-x-1 md:space-x-4 mt-1 md:mt-4">
            {project.github && link(project.github, "Github")}
            {project.report && link(project.report, "Report")}
            {project.link && link(project.link, "Live Site")}
            {project.video && link(project.video, "Video")}
          </div>
        </div>
    </div>
  );
};

export default ProjectCard;