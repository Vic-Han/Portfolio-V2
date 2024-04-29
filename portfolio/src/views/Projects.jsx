import React from "react";
import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";
function Projects() {
    const settingsStates = useContext(SettingsContext);
    const { darkMode, animation } = settingsStates;
    return (
        <div>
            <h1>Projects</h1>
        </div>
    );
}

export default Projects;