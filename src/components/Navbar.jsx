import React from "react";

// Navbar component
// This component renders the navigation bar with buttons to toggle between different screens.
function Navbar({clickHandler, darkmode}) {
    const dark = 'text-white hover:bg-gray-700';
    const light = 'text-black hover:bg-gray-300';
    const styles = 'rounded-lg p-4 text-xl cursor-pointer font-bold';
    return (
        <div className="flex flex-row justify-between py-3 px-10">
            
            <div className={`${styles} ${darkmode ? dark : light} `} onClick={() => clickHandler('settings')}> Settings </div>    
            <div className={`${styles} ${darkmode ? dark : light} `}  onClick={() => clickHandler('mainpage')}> Mainpage </div>
            <div className={`${styles} ${darkmode ? dark : light} `}  onClick={() => clickHandler('projects')}> Projects </div>
            <div className={`${styles} ${darkmode ? dark : light} `}  onClick={() => clickHandler('resume')}> Resume </div>
            <div className={`${styles} ${darkmode ? dark : light} `} onClick={() => clickHandler('about')}> About </div>

        </div>
    );
}

export default Navbar;