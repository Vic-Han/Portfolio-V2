import React from "react";
import './Navbar.css';

// Navbar component
// This component renders the navigation bar with buttons to toggle between different screens.
function Navbar({clickHandler, darkmode}) {
    console.log(darkmode)
    return (
        <div className={`navbar ${darkmode ? 'dark' : 'light'}`}>
            <div className={`navbar-btn ${darkmode ? 'dark' : 'light'} `} onClick={() => clickHandler('settings')}> Settings </div>    
            <div className={`navbar-btn ${darkmode ? 'dark' : 'light'} `} onClick={() => clickHandler('mainpage')}> Mainpage </div>
            <div className={`navbar-btn ${darkmode ? 'dark' : 'light'} `} onClick={() => clickHandler('projects')}> Projects </div>
            <div className={`navbar-btn ${darkmode ? 'dark' : 'light'} `} onClick={() => clickHandler('resume')}> Resume </div>
            <div className={`navbar-btn ${darkmode ? 'dark' : 'light'} `} onClick={() => clickHandler('about')}> About </div>

        </div>
    );
}

export default Navbar;