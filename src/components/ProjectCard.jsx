import React from 'react';


const ProjectCard = ({ project }) => {
  const link = (hyperlink, text) =>{
    return(
      <a href={hyperlink} target="_blank" rel="noreferrer" className={project.buttonStyle}>
      {text}
      </a>
    )
  }
  return (
    <div className="relative overflow-hidden transition duration-500 ease-in-out transform hover:scale-105 w-32 h-40 md:w-48 md:h-60 lg:w-64 lg:h-80 group rounded-lg">
      <img
        src={project.image}
        alt={project.name}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 p-4 z-50">
          <h2 className={`text-xl z-50 ${project.titleTextStyle}`}>{project.name}</h2>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-65 transition-opacity duration-500 ease-in-out z-20"/>
      <div className="absolute bottom-0 left-0 w-full p-4 transition-transform duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0 z-30">
          <p className={project.descriptionTextStyle}>{project.description}</p>
          <div className="flex space-x-4 mt-4">
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