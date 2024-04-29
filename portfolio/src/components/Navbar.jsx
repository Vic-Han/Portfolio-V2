import React from "react";


function Navbar({clickHandler, darkmode}) {
    console.log(darkmode)
    return (
        <div className={`navbar ${darkmode ? 'dark' : 'light'}`}>
            <div className={`navbar-btn ${darkmode ? 'dark' : 'light'} `} onClick={() => clickHandler('settings')}> Settings </div>    
            <div className={`navbar-btn ${darkmode ? 'dark' : 'light'} `} onClick={() => clickHandler('mainpage')}> Mainpage </div>
            <div className={`navbar-btn ${darkmode ? 'dark' : 'light'} `} onClick={() => clickHandler('projects')}> Projects </div>
            <div className={`navbar-btn ${darkmode ? 'dark' : 'light'} `} onClick={() => clickHandler('resume')}> Resume </div>
            <div className={`navbar-btn ${darkmode ? 'dark' : 'light'} `} onClick={() => clickHandler('contact')}> Contact </div>

        </div>
    );
}

export default Navbar;