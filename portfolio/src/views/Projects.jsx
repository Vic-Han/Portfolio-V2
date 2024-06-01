import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import projects from "../data/Projects";
import ProjectCard from "../components/ProjectCard";
import { animateContentBoxes } from "../transitions/AnimationHelper";

function Projects() {
    const settingsStates = useContext(GlobalContext);
    const { darkMode, animation } = settingsStates;
    const [boxAnimationStates, setBoxAnimationStates] = useState(new Array(projects.length).fill(''));

    useEffect(() => {
        let animationClass = '';
        let stagger = 0;

        switch (animation) {
            case 'Low':
                animationClass = 'fade-in';
                stagger = 200;
                break;
            case 'Normal':
                animationClass = 'scale-in';
                stagger = 150;
                break;
            case 'Extreme':
                animationClass = 'slam';
                stagger = 100;
                break;
            default:
                animationClass = 'fade-in';
                stagger = 200;
        }

        animateContentBoxes(animationClass, stagger)(boxAnimationStates, setBoxAnimationStates);
    }, [animation]);

    return (
        <div>
            <h1 className={`${darkMode ? 'text-white' : 'text-black'} text-4xl font-bold mb-10`}>Check out my Projects</h1>
            <div className="flex flex-row flex-wrap-reverse"> 
                {projects.map((project, index) => (
                    <div key={index} className={boxAnimationStates[index]}>
                        <ProjectCard
                            project={project}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;