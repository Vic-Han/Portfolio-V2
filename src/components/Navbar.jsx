// Navbar.jsx
import React, { useState } from "react";

/** 
 * @component Navbar
 * 
 * @description
 * A navigation bar component that allows users to switch between different sections of the portfolio.
 * 
 * @requires
 * - onClick: callback function to handle state changes in parent component
 * - darkmode: boolean to determine dark/light mode styling
 * 
 * @layout
 * - Horizontal layout with evenly spaced sections
 * - Highlighted section to indicate current page
 * 
 * @styling
 * - Tailwind CSS for responsive design
 * - Custom classes for dark/light mode and selected section
 * - Hover effects for interactive elements
 * 
*/
function Navbar({clickHandler, darkmode}) {
    const [selected, setSelected] = useState('mainpage')

    const selectedStyle = 'border-2' + (darkmode ? ' border-blue-500 text-blue-500 bg-black' : ' border-blue-800 bg-gray-50 text-blue-800')
    const dark = 'text-white hover:bg-black hover:text-blue-500'
    const light = 'text-black hover:bg-gray-50 hover:text-blue-800'
    const color = darkmode ? dark : light

    const cursor = 'cursor-pointer font-bold'
    const layout = 'rounded-lg 2xl:rounded-xl p-1 md:p-2 lg:p-3 2xl:p-4 3xl:p-5 4xl:p-6'
    const textSize = 'text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl'
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
        <div className="flex flex-row justify-between py-3 px-1 sm:px-3 md:px-5 lg:px-8 xl:px-10 xl:py-4 2xl:py-8">
            
            <div className={`${styles} ${color}`} onClick={() => click('settings')}> Settings </div>    
            <div className={`${styles} ${selected === 'mainpage' ? selectedStyle : color}`}  onClick={() => click('mainpage')}> Home </div>
            <div className={`${styles} ${selected === 'projects' ? selectedStyle : color}`}  onClick={() => click('projects')}> Projects </div>
            <div className={`${styles} ${selected === 'resume' ? selectedStyle : color}`}  onClick={() => click('resume')}> Resume </div>
            <div className={`${styles} ${selected === 'about' ? selectedStyle : color}`} onClick={() => click('about')}> About </div>

        </div>
    );
}

export default Navbar;