import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import TextToggler from "../components/TextToggler";
function About() {
    const settingsStates = useContext(GlobalContext);
    const { darkMode, animation } = settingsStates;
    return (
        <div className={`${darkMode ? 'bg-dark' : 'bg-light'} `}>
            <div className={`${darkMode ? 'card-dark' : 'card-light'} w-144`}>
                <TextToggler darkMode={darkMode} animation={animation}/>
            </div>
        </div>
    );
}

export default About;