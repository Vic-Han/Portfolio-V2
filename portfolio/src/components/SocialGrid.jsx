import React from "react";
import './SocialGrid.css';

// SocialGrid component displays a grid of social media links
function SocialGrid() {
  return (
    <div className='social-container'>
      <div className="relative w-full h-full">
        <p className="social-text">Socials</p>
        <a href='https://www.linkedin.com/in/victor-han-vh45/' 
        target='linkedin' rel='noreferrer' className="social-box linkedin-box" >
          <i className="fa fa-linkedin"></i>
          <span>LinkedIn</span>
        </a>
        <a href='https://github.com/Vic-Han' 
        target='github' rel='noreferrer' className="social-box git-box">
          <i className="fa fa-github"></i>
          <span>Github</span>
        </a>
        <a href='https://www.instagram.com/viccccc_h/' 
        target='instagram' rel='noreferrer' className="social-box insta-box">
          <i className="fa fa-instagram"></i>
          <span>Instagram</span>
        </a>
      </div>
    </div>
  )
}

export default SocialGrid;