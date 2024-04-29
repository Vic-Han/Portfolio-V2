import React from "react";
import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";
function Contact() {
    const settingsStates = useContext(SettingsContext);
    const { darkMode, animation } = settingsStates;
    return (
        <div>
            <h1>Contact</h1>
        </div>
    );
}

export default Contact;