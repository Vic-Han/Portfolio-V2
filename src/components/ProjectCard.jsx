import React from 'react';


const ProjectCard = ({ project }) => {
  return (
    <div className="relative overflow-hidden transition duration-500 ease-in-out transform hover:scale-105 w-32 h-40 md:w-48 md:h-60 lg:w-64 lg:h-80 group rounded-lg">
      <img
        src={project.image}
        alt={project.name}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 p-4">
          <h2 className="text-white text-xl">{project.name}</h2>
        </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 
      group-hover:opacity-50 transition-opacity duration-500 ease-in-out">
        
        <div
          className="absolute bottom-0 left-0 w-full p-4 transition-transform duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0"
        >
          <p className="text-white">{project.description}</p>
          <div className="flex space-x-4 mt-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="bg-white text-black px-4 py-2 rounded"
              >
                GitHub
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="bg-white text-black px-4 py-2 rounded"
              >
                Live Site
              </a>
            )}
            {project.video && (
              <a
                href={project.video}
                target="_blank"
                rel="noreferrer"
                className="bg-white text-black px-4 py-2 rounded"
              >
                Video
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;