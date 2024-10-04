import React from "react";

// Navbar component
// This component renders the navigation bar with buttons to toggle between different screens.
function Navbar({clickHandler, darkmode}) {
    const dark = 'text-white hover:bg-gray-700';
    const light = 'text-black hover:bg-gray-300';

    const cursor = ' cursor-pointer font-bold';
    const layout = 'rounded-lg p-4 '
    const textSize = 'text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl'
    const styles = `${cursor} ${layout} ${textSize}`;
    return (
        <div className="flex flex-row justify-between py-3 px-10">
            
            <div className={`${styles} ${darkmode ? dark : light} `} onClick={() => clickHandler('settings')}> Settings </div>    
            <div className={`${styles} ${darkmode ? dark : light} `}  onClick={() => clickHandler('mainpage')}> Home </div>
            <div className={`${styles} ${darkmode ? dark : light} `}  onClick={() => clickHandler('projects')}> Projects </div>
            <div className={`${styles} ${darkmode ? dark : light} `}  onClick={() => clickHandler('resume')}> Resume </div>
            <div className={`${styles} ${darkmode ? dark : light} `} onClick={() => clickHandler('about')}> About </div>

        </div>
    );
}

export default Navbar;