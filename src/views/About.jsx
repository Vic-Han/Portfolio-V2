// About.jsx

import React, { useContext, useState, useEffect, useRef } from "react";
import { GlobalContext } from "../context/GlobalContext";
import casualAbout from "../data/CasualAbout";
import formalAbout from "../data/FormalAbout";
import ImageGallery from "../components/ImageGallery";

const About = () => {
  /**
   * Manages component state and context
   * - Controls text animations and dark mode
   * - Tracks which text sections are currently in view
   */
  const { darkMode, animation } = useContext(GlobalContext);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const textRefs = useRef([]);
  const parentRef = useRef(null);
  const textObserver = useRef(null);

  /**
   * Sets up an Intersection Observer to track visible text sections
   * Allows for progressive revealing of content as user scrolls
   */
  useEffect(() => {
    textObserver.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const textIndex = parseInt(entry.target.id.slice(5));
          setCurrentIndex((prev) => Math.max(textIndex, prev));
        }
      });
    }, { threshold: 0.8 });

    textRefs.current.forEach((element) => {
      textObserver.current.observe(element);
    });

    return () => textObserver.current.disconnect();
  }, []);

  /**
   * Handles character-by-character text reveal for "Extreme" animation
   * Creates a typewriter-like effect for selected text sections
   */
  useEffect(() => {
    setCurrentTextIndex(0)
    if(animation === "Extreme"){
      const texts = [...formalAbout, ...casualAbout];
        const interval = setInterval(() => {
          if (currentTextIndex < texts[currentIndex].length) {
            setCurrentTextIndex((prev) => prev + 1 );
          } else {
            clearInterval(interval);
          }
        }, 6);
        return () => clearInterval(interval);
    }
  }, [currentIndex]);


  // Creates a ref for each text section to enable intersection tracking
   
  const handleTextRef = (index) => (el) => {
    textRefs.current[index] = el;
  };

  /**
   * Renders text with different animations based on current state
   * Supports multiple animation modes: Minimal, Normal, and Extreme
   */
  const renderText = (text, index) => { 
    const isCurrent = index === currentIndex;
    const margin = 'my-6 3xl:my-10';
    if (animation === "Minimal" || index < currentIndex) {
      return (
        <div key={index} ref={handleTextRef(index)} id={`text-${index}`} className={margin}>
           <span className={`text-secondary`}>{text}</span> 
        </div>)
    }
    if(!isCurrent){
      return (
        <div key={index} ref={handleTextRef(index)} id={`text-${index}`} className={margin}>
            <span className="opacity-0">{text}</span>
        </div>)
    }
    else if (animation === "Normal"){
      return (
        <div key={index} ref={handleTextRef(index)} id={`text-${index}`} className={margin}>
          <div className={`overflow-hidden fade-in-bottom relative left-1/2 -translate-x-1/2`}>
            <div className="text-secondary">{text}</div>
          </div>
        </div>
      )
    }
    else if (animation === "Extreme"){
      return (
      <div key={index} ref={handleTextRef(index)} id={`text-${index}`} className={margin}>
        <span>
          <span className="text-secondary">{text.slice(0,currentTextIndex-1)}</span>
          <span className="opacity-0">{(currentTextIndex !== text.length - 1) ? text.slice(currentTextIndex) : null}</span>
        </span>
      </div>)
    }
    else {
      return (<></>)
    }
  }

  
   // Responsive styling constants for consistent layout and typography
   
  const cardStyle = "w-4/5 sm:w-3/5 p-3 md:p-6 2xl:p-10 4xl:p-14 relative left-0 sm:left-1/2 sm:-translate-x-1/2";
  const fontSize = "text-sm sm:text-base md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl-relaxed"
  const fontSizeHeader = "text-primary text-center text-base sm:text-lg md:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl-relaxed"

  /**
   * Main component render
   * Structured with two text sections and an image gallery
   */
  return (
    <div className="relative my-4">
      <div className="flex flex-col" ref={parentRef}>
        <div className={`${darkMode ? "card-dark" : "card-light"} ${cardStyle} mb-8 ${fontSize}`}>
          <div className={fontSizeHeader}> About me</div>
          {formalAbout.map((text, index) => renderText(text, index))}
        </div>
        <div className={`${darkMode ? "card-dark" : "card-light"} ${cardStyle} ${fontSize}`}>
          <div className={fontSizeHeader}>Even more about me</div>
          {casualAbout.map((text, index) =>
            renderText(text, formalAbout.length + index)
          )}
        </div>
      </div>
      <ImageGallery/>
    </div>
  );
};

export default About;
