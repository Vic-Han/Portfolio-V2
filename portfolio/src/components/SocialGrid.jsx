import React from "react";
import './SocialGrid.css';
function SocialGrid() {

    return (
        <div className='social-container'>
            
            <div className="relative w-full h-full">
                <a href='https://www.linkedin.com/in/victor-han-vh45/' 
                target='linkedin' rel='noreferrer' className="social-box linkedin-box" >

                </a>
                <a href='https://github.com/Vic-Han' 
                target='github' rel='noreferrer' className="social-box git-box">

                </a>
                <a href='https://www.instagram.com/viccccc_h/' 
                target='instagram' rel='noreferrer' className="social-box insta-box">

                </a>
            </div>
           
        </div>
    )

}

export default SocialGrid;