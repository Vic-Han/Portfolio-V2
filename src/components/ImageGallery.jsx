/**
 * ImageGallery Component
 * 
 * Purpose:
 * Renders a responsive, animated gallery of images with scroll-based visibility and animation.
 * 
 * Key Features:
 * - Dynamic image visibility through Intersection Observer
 * - Configurable animation levels (Minimal, Normal, Extreme)
 * - Responsive layout with overlapping image positioning
 * - Performance-optimized rendering
 * 
 * Data Dependencies:
 * - Requires GlobalContext providing:
 *   - animation: String (animation level configuration)
 *   - casualPictures: Array (source images for gallery)
 * 
 * Styling:
 * - Uses Tailwind CSS for responsive design and animations
 * - Additional custom animation classes may be required
 */
import React, { useEffect, useRef, useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const ImageGallery = () => {
  /**
   * State and Refs Management
   * 
   * Core Elements:
   * - imageVisibility: Tracks which images are currently visible
   * - observer: Handles viewport intersection detection
   * - imageRefs: References to image container elements
   * 
   * Purpose:
   * Enables dynamic image rendering and animation based on scroll position
   */
  const { animation, casualPictures } = useContext(GlobalContext);
  const [imageVisibility, setImageVisibility] = useState([]);
  const observer = useRef(null);
  const imageRefs = useRef([]);

  /**
   * Animation Class Selector
   * 
   * Determines CSS animation classes based on:
   * - Current animation level setting
   * - Image visibility state
   * - Image index (for alternating animations)
   * 
   * Animation Levels:
   * - Minimal: No animations
   * - Normal: Fade-in with alternating directions
   * - Extreme: Flip animations
   */
  const animationClass = (index, animationLevel) =>{
    if (animationLevel === "Miminal"){
        return '';
    }
    if(animationLevel === "Normal"){
        return imageVisibility[index] ? index % 2 === 0 ? 'fade-in': 'fade-in-right' : ''
    }
    if(animationLevel === "Extreme"){
        return imageVisibility[index] ? "flip" : "before-flip"
    }
  }

  /**
   * Negative Margin Calculator
   * 
   * Creates overlapping image layout by dynamically 
   * adjusting vertical margins for:
   * - First image (negative bottom margin)
   * - Last image (negative top margin)
   * - Middle images (negative top and bottom margins)
   */
  const negMargin = (index) =>{
    if(index === 0){
        return '-mb-40'
    }
    if(index === casualPictures.length - 1){
      return '-mt-40'
    }
    return '-my-40'
  }

  /**
   * - Initializes image visibility state
   * - Creates observer to track image viewport entry/exit
   * - Updatesvisibility state dynamically
   * Returns cleanup function to disconnect observer
   */
  const setObserver = () => {
    const initialVisibility = new Array(casualPictures.length).fill(false);
    setImageVisibility(initialVisibility);
    observer.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const index = imageRefs.current.indexOf(entry.target);
          if (entry.isIntersecting) {
            setImageVisibility((prev) => {
                const newArray = [...prev];
                newArray[index] = true;
                return newArray;
            })
          } else {
            setImageVisibility((prev) => {
                const newArray = [...prev];
                newArray[index] = false;
                return newArray;
            })
          }
        });
      });

      imageRefs.current.forEach((element) => {
        if (element) observer.current.observe(element);
      });

      return () => observer.current.disconnect();
  };

  /**
   * - Handles animation mode switching
   * - For "Minimal" mode: Show all images immediately
   * - For other modes: Set up intersection observer
   */
  useEffect(() => {
    if (animation === "Minimal") {
        setImageVisibility(new Array(casualPictures.length).fill(true));
    } else {
      return setObserver();
    } 
  }, [animation]);

  /**
   * Image Rendering:
   * - Maps through casualPictures array
   * - Applies dynamic positioning, margins, and animations
   * - Responsive sizing with Tailwind classes
   */
  return (
    <div className="absolute top-0 w-full h-full px-1 sm:px-0 flex flex-col justify-between">
      {casualPictures.map((image, index) => (
        <div key={index} ref={(el) => (imageRefs.current[index] = el)} className={`relative w-1/6 sm:w-1/5 md:w-1/4 xl:w-[30%] transform ${negMargin(index)} ${
            index % 2 === 0 ? "left-full -translate-x-full sm:left-0 sm:translate-x-0" : "left-full -translate-x-full"
          } ${imageVisibility[index] ? "opacity-100" : "opacity-0"}`}>
          <img src={image} alt={`Casual Picture ${index + 1}`} className={`${animationClass(index,animation)} min-w-16 w-4/5 2xl:w-3/5 4xl:w-1/2 max-w-[450px] relative left-1/2 -translate-x-1/2 rounded-lg 2xl:rounded-3xl`}/>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;