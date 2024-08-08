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


    const animateContentBoxesLow = animateContentBoxes('fade-in-top', 200);
    const animateContentBoxesNormal = animateContentBoxes('scale-in', 150);
    const animateContentBoxesExtreme = animateContentBoxes('slam', 150);
    useEffect(() => {
        hideContentBoxes();
        switch (animation) {
            case 'Low':
                animateContentBoxesLow(boxAnimationStates, setBoxAnimationStates);
                break
            case 'Normal':
                animateContentBoxesNormal(boxAnimationStates, setBoxAnimationStates);
                break
            case 'Extreme':
                animateContentBoxesExtreme(boxAnimationStates, setBoxAnimationStates);
                break
            
        }

    }, [animation]);

    return (
        <div>
            <h1 className={`${darkMode ? 'text-white' : 'text-black'} text-4xl font-bold mb-10 text-center relative -translate-x-1/2 left-1/2`}>Check out my Projects</h1>
            <div className="flex flex-row flex-wrap w-4/5 relative -translate-x-1/2 left-1/2"> 
                {projects.map((project, index) => (
                    <div key={index} className="p-2 m-4">
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