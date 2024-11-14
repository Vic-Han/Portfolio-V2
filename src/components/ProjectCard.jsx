// // ProjectCard.jsx
import React from 'react';
/**
 * @component ProjectCard
 * @description
 * A responsive project card component that displays project information
 * with hover effects on desktop and touch interaction on mobile devices.
 * Uses a hidden checkbox input pattern to handle mobile touch interactions.
 * 
 * @properties
 * @param {Object} project - The project data object
 * @param {string} project.name - The name of the project (also used as unique ID for checkbox)
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
 * - Responsive card sizing with mobile-first approach
 * - Image background with overlay
 * - Title always visible
 * - Description and links revealed on hover (desktop) or touch (mobile)
 * 
 * @animations
 * Desktop:
 * - Hover effect reveals description and links
 * - Scale up animation on hover
 * 
 * Mobile:
 * - Touch anywhere on card toggles content visibility
 * - Uses hidden checkbox pattern for toggle state
 * - Links stop propagation to prevent toggle when clicked
 * 
 * - Scale up on hover (desktop only)
 * - Fade-in overlay on hover/touch
 * - Slide-up animation for description and links
 * - Smooth transitions for all interactive elements
 * 
 * @styling
 * - Tailwind classes for responsive design
 * - Mobile-first breakpoints (md: for desktop styles)
 * - Peer classes for checkbox-based mobile interactions
 * - Group classes for hover-based desktop interactions
 * 
 * @accessibility
 * - Hidden checkbox maintains semantic HTML structure
 * - Links open in new tabs with rel="noreferrer"
 * - Alt text for project images
 * 
 * @example
 * const project = {
 *   name: "Project Name",
 *   image: "image-url.jpg",
 *   description: "Project description",
 *   github: "https://github.com/...",
 *   titleTextStyle: "text-white font-bold"
 * };
 * 
 * <ProjectCard project={project} />
 */


const ProjectCard = ({ project }) => {
  const link = (hyperlink, text) => {
    return (
      <a 
        href={hyperlink} 
        target="_blank" 
        rel="noreferrer" 
        className='text-sm px-2 py-1 md:px-4 md:py-2 md:text-base lg:text-lg 2xl:px-5 2xl:py-3 2xl:text-xl bg-white text-black rounded'
        onClick={(e) => e.stopPropagation()}
      >
        {text}
      </a>
    )
  }

  return (
    <div className="relative overflow-hidden transition duration-500 ease-in-out transform hover:scale-105 w-36 h-44 md:w-48 md:h-60 lg:w-64 lg:h-80 2xl:w-80 2xl:h-100 group rounded-lg">
      {/* Hidden checkbox and label */}
      <input type="checkbox" className="peer hidden" id={`toggle-${project.name}`} />
      <label 
        htmlFor={`toggle-${project.name}`} 
        className="absolute inset-0 z-30 cursor-pointer md:hidden"
      ></label>
      
      {/* Image */}
      <img 
        src={project.image} 
        alt={project.name} 
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      
      {/* Title - Always visible */}
      <div className="absolute top-0 left-0 p-1 md:p-4 z-20">
        <h2 className={`text-base md:text-lg lg:text-xl 2xl:text-3xl ${project.titleTextStyle}`}>
          {project.name}
        </h2>
      </div>

      {/* Overlay */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-500 ease-in-out z-10 peer-checked:opacity-65 md:group-hover:opacity-65"
      />

      {/* Content that appears on hover/touch */}
      <div 
        className="absolute bottom-0 left-0 w-full p-1 md:p-4 transition-all duration-500 ease-in-out transform translate-y-full opacity-0 z-40 text-xl peer-checked:translate-y-0 peer-checked:opacity-100 md:group-hover:translate-y-0 md:group-hover:opacity-100"
      >
        <p className='text-xs md:text-sm lg:text-base 2xl:text-lg text-white'>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1 md:gap-4 mt-1 md:mt-4">
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
