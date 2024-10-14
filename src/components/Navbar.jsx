import React, { useState } from "react";

// Navbar component
// This component renders the navigation bar with buttons to toggle between different screens.
function Navbar({clickHandler, darkmode}) {

    const [selected, setSelected] = useState('mainpage')

    const selectedStyle = 'underline'
    const dark = 'text-white hover:bg-black hover:text-blue-500';
    const light = 'text-black hover:bg-gray-50 hover:text-blue-800';

    const cursor = 'cursor-pointer font-bold';
    const layout = 'rounded-lg 2xl:rounded-xl p-1 md:p-2 lg:p-3 xl:p-4 2xl:p-5 3xl:p-6 4xl:p-7';
    const textSize = 'text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl'
    const styles = `${cursor} ${layout} ${textSize}`

    const click = (page) => {
        if(page === selected){
            return
        }
        if(page !== 'settings'){
            setSelected(page)
        }
        clickHandler(page)
    }

    return (
        <div className="flex flex-row justify-between py-3 px-1 sm:px-3 md:px-5 lg:px-8 xl:px-10 lg:py-5 xl:py-6 2xl:py-8">
            
            <div className={`${styles} ${darkmode ? dark : light} ${selected === 'settings' ? selectedStyle : ''}`} onClick={() => click('settings')}> Settings </div>    
            <div className={`${styles} ${darkmode ? dark : light} ${selected === 'mainpage' ? selectedStyle : ''}`}  onClick={() => click('mainpage')}> Home </div>
            <div className={`${styles} ${darkmode ? dark : light} ${selected === 'projects' ? selectedStyle : ''}`}  onClick={() => click('projects')}> Projects </div>
            <div className={`${styles} ${darkmode ? dark : light} ${selected === 'resume' ? selectedStyle : ''}`}  onClick={() => click('resume')}> Resume </div>
            <div className={`${styles} ${darkmode ? dark : light} ${selected === 'about' ? selectedStyle : ''}`} onClick={() => click('about')}> About </div>

        </div>
    );
}

export default Navbar;