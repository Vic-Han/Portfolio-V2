import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
function Resume() {
    const settingsStates = useContext(GlobalContext);
    const { darkMode, animation } = settingsStates;
    
        return (
            <div>
                <h1>Resume</h1>
            </div>
        );
    }

export default Resume;