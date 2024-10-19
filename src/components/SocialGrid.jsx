import React from "react";
import './SocialGrid.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

/*
The SocialGrid component represents a visually appealing grid of social media links.
It uses the FontAwesome library to display icons for LinkedIn, GitHub, and Instagram.
The component is styled using CSS classes in the 'SocialGrid.css' file
*/

function SocialGrid() {
  return (
    <div className='social-container'>
      {/* 
      The main container div has a CSS class 'social-container' that applies a gradient background,
      smooth transition, full width, a specific height ratio, rounded corners, and centers the element horizontally.
      */}
      <div className="relative w-full h-full">
        <p className="social-text">Socials</p>
        {/* 
        Three anchor elements are used to represent the social media links.
        Each link has a CSS class that styles it differently to create the grid effect.
        The links target blank pages to prevent the current page from refreshing when clicked.
        */}
        <a href='https://www.linkedin.com/in/victor-han-vh45/' className="social-box linkedin-box" target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "1em", color: 'white' }} />
          <span>LinkedIn</span>
        </a>
        <a href='https://github.com/Vic-Han' className="social-box git-box" target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faGithub} style={{ fontSize: "1em", color: 'white' }} />
          <span>GitHub</span>
        </a>
        <a href='https://www.instagram.com/viccccc_h/' className="social-box insta-box" target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "1em", color: 'white' }} />
          <span>Instagram</span>
        </a>
      </div>
    </div>
  )
}

export default SocialGrid;
