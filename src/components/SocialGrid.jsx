import React from "react";
import './SocialGrid.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

/**
 * @component SocialGrid
 * @description
 * An interactive social media links grid with animated hover effects and
 * responsive layout. Features a gradient background and animated reveals.
 * 
 * @features
 * - Gradient background
 * - Hover animations for each social link
 * - Shimmer effect on hover
 * - Stacked layout with z-index management
 * 
 * @responsiveness
 * Adapts to different screen sizes:
 * - Mobile: Square aspect ratio
 * - Tablet: 420px width
 * - Desktop: 4/9 aspect ratio, max-width 480px
 * - Large screens: 1/2 aspect ratio
 * 
 * @animations
 * - Hover reveals social links sequentially
 * - Smooth transitions for text and boxes
 * - Shimmer effect on link hover
 * - Delayed animations for smooth user experience
 * 
 * @styling
 * - Custom gradient backgrounds for each social platform
 * - Responsive sizing and spacing
 * - Box-shadow and text-shadow effects
 * - FontAwesome icons integration
 */
function SocialGrid() {
  return (
    <div className='social-container'>
      <div className='relative w-full h-full'>
        <p className='social-text'>Socials</p>
        <a href='https://www.linkedin.com/in/victor-han-vh45/' className='social-box linkedin-box' target='_blank' rel='noreferrer'>
          <div className='social-content'>
            <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "1em", color: 'white' }} />
            <span>LinkedIn</span>
          </div>  
        </a>
        <a href='https://github.com/Vic-Han' className='social-box git-box' target='_blank' rel='noreferrer'>
          <div className='social-content'>
            <FontAwesomeIcon icon={faGithub} style={{ fontSize: "1em", color: 'white' }} />
            <span>GitHub</span>
          </div>
         
        </a>
        <a href='https://www.instagram.com/viccccc_h/' className='social-box insta-box' target='_blank' rel='noreferrer'>
          <div className='social-content'>
            <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "1em", color: 'white' }} />
            <span>Instagram</span>
          </div>
        </a>
      </div>
    </div>
  )
}

export default SocialGrid;
