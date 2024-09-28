import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import projects from "../data/Projects";
import ProjectCard from "../components/ProjectCard";
import { animateContentBoxes } from "../transitions/AnimationHelper";

function Projects() {
    const settingsStates = useContext(GlobalContext);
    const { darkMode, animation } = settingsStates;
    const [boxAnimationStates, setBoxAnimationStates] = useState(new Array(projects.length).fill(''));


    const hideContentBoxes = () => {
        const newAnimationStates = boxAnimationStates.map(() => 'opacity-0');
        setBoxAnimationStates(newAnimationStates);
    }


    const animateContentBoxesNormal = animateContentBoxes('fade-in-top', 200);
    const animateContentBoxesExtreme = animateContentBoxes('scale-in', 150);
    useEffect(() => {
        if(animation !== 'Minimal'){
        hideContentBoxes();
        switch (animation) {
            case 'Normal':
                animateContentBoxesNormal(boxAnimationStates, setBoxAnimationStates);
                break
            case 'Extreme':
                animateContentBoxesExtreme(boxAnimationStates, setBoxAnimationStates);
                break
            
        }
    }

    }, [animation]);

    return (
        <div>
            <h1 className={`${darkMode ? 'text-white' : 'text-black'} text-4xl font-bold mb-10 text-center relative -translate-x-1/2 left-1/2`}>Check out my Projects</h1>
                <div className="flex flex-row flex-wrap w-11/12 xl:w-4/5 relative -translate-x-1/2 left-1/2 justify-center"> 
                    {projects.map((project, index) => (
                        <div key={index} className="p-1 m-2 xl:p-2 xl:m-4">
                            <div className={`${boxAnimationStates[index]} relative left-1/2 -translate-x-1/2`}>
                                <ProjectCard
                                    project={project}
                                />
                            </div>
                        </div>
                    ))}
                </div>
       
        </div>
    );
}

export default Projects;