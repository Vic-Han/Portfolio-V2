import React from "react";
import './SocialGrid.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

// SocialGrid component displays a grid of social media links
function SocialGrid() {
  return (
    <div className='social-container'>
      <div className="relative w-full h-full">
        <p className="social-text">Socials</p>
        <a href='https://www.linkedin.com/in/victor-han-vh45/' 
        target='linkedin' rel='noreferrer' className="social-box linkedin-box" >
          <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "1em",color: 'white' }} />
          <span>LinkedIn</span>
        </a>
        <a href='https://github.com/Vic-Han' 
        target='github' rel='noreferrer' className="social-box git-box">
          <FontAwesomeIcon icon={faGithub} style={{ fontSize: "1em",color: 'white' }} />
          <span>GitHub</span>
        </a>
        <a href='https://www.instagram.com/viccccc_h/' 
        target='instagram' rel='noreferrer' className="social-box insta-box">
          <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "1em",color: 'white' }} />
          <span>Instagram</span>
        </a>
      </div>
    </div>
  )
}

export default SocialGrid;
