import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
function Projects() {
    const settingsStates = useContext(GlobalContext);
    const { darkMode, animation } = settingsStates;
    return (
        <div>
            <h1>Projects</h1>
        </div>
    );
}

export default Projects;