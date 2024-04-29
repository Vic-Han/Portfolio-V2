import React from "react";
import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";
function Resume() {
    const settingsStates = useContext(SettingsContext);
    const { darkMode, animation } = settingsStates;
    
        return (
            <div>
                <h1>Resume</h1>
            </div>
        );
    }

export default Resume;